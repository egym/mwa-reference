#!/bin/bash
apt-get update -y
apt-get install gettext-base
envsubst <src/appflow_ci_config_template.ts >src/appflow_ci_config.ts
tsc && vite build
