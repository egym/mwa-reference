# Reference MWA deployment

We use **Deploy reference MWA** to deploy this non-production application to
Appflow, Capawesome, or both. Appflow builds remotely. For Capawesome, we build
the actual application on the GitHub runner and upload `build/`. Both use the
same source commit; these are separate builds, not identical shared artifacts.

The workflow pins the shared action to a full commit from
[egym/egym-actions#464](https://github.com/egym/egym-actions/pull/464), so we can
test the action before merging it. We do not change native clients here.

## Configuration

We configure these Actions secrets in this repository, or grant the repository
access to equivalent organization secrets:

| Secret             | Required for                                       |
| ------------------ | -------------------------------------------------- |
| `IONIC_TOKEN`      | Appflow access.                                    |
| `NPM_TOKEN`        | The existing Appflow build input.                  |
| `CAPAWESOME_TOKEN` | Capawesome bot/API access to publish live updates. |

We never put token values in source files, workflow inputs, or repository
variables. Adding the bot to Capawesome does not configure GitHub secrets.
The workflow uses the repository's existing npmjs.org lockfile without
redirecting `@egym` packages to a different registry.

Our application IDs are:

| Provider   | Application ID                         |
| ---------- | -------------------------------------- |
| Appflow    | `9d727e58`                             |
| Capawesome | `3f41bc52-b2ee-4f3f-904b-c119c0e28a88` |

The selected channel name must exist in each enabled provider. The Capawesome channel must be
unprotected because this action currently publishes unsigned bundles.
Creating signing keys, migrating native clients, and verifying updates on a
device are outside this publishing test.

Repository and organization Actions policies must permit the referenced
actions. The private `egym/egym-actions` repository must also allow
`mwa-reference` to consume its actions.

## Testing before merging the workflow

GitHub does not offer a new manual workflow until its file exists on the
default branch. To test this workflow PR without pushing directly to `main`,
we use a guarded `pull_request` label trigger:

1. We set repository variable `DEPLOYMENT_TEST_CHANNEL` to the desired existing
   channel name, shared by both providers. The channel is configuration, not
   a hardcoded workflow value.
2. A maintainer reviews the exact same-repository PR revision, then applies
   the `test-deployment` label. This starts a real deployment to both providers.
3. We check both providers for the expected channel and source commit.

Before checkout, we verify the labeling actor has write, maintain, or admin
permission, and that the PR remains open, same-repository, at the authorized
head commit, and labeled. We do not deploy fork PRs or use
`pull_request_target`. We label only trusted code: dependency installation and
builds execute the PR's scripts.

New pushes do not deploy automatically. We remove and reapply the label to
authorize another revision. Queued events for an outdated PR head are rejected.
Checkout and the Appflow build use the actual PR head SHA, not GitHub's
synthetic merge SHA. Runs are serialized.

## Manual deployment after merging

We use **Actions > Deploy reference MWA > Run workflow**, select the source
branch, and enter one free-text `channel` input for all enabled providers.
Each provider can be enabled independently; at least one is required. Manual
runs use that input, not the PR-test repository variable.

Appflow-only runs skip the local build and do not require Capawesome
credentials. Capawesome-only runs skip Appflow and do not require Appflow
credentials. The action always receives `production: 'false'` for this reference
application.

## Runner build

With Capawesome enabled, we use Node 22 and `npm ci`, generate all 12 fields in
`src/appflow_ci_config.ts` from its template and GitHub run metadata, format
the generated source, and run `npm run build-local`. Metadata values are
serialized as JavaScript strings so quotes and multiline commit messages
remain valid. We avoid the root-only `apt-get` operations in `build.sh`.

We require a nonempty `build/index.html` before publishing. Build or deployment
errors fail the job. Uploading a bundle confirms publication only, not that an
existing native client can download or activate it.
