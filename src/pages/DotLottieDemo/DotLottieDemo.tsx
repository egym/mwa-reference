import type { FC } from 'react';
import { useRef, useState, useCallback } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonPage,
  IonText,
} from '@ionic/react';
import { playOutline, pauseOutline, stopOutline } from 'ionicons/icons';
import type { DotLottie } from '@lottiefiles/dotlottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { CommonPageHeader } from '../../components';
import styles from './DotLottieDemo.module.scss';

type AnimationConfig = {
  label: string;
  jsonSrc: string;
  lottieSrc: string;
  loop: boolean;
};

const animations: AnimationConfig[] = [
  {
    label: 'Confetti',
    jsonSrc: '/animations/confetti.json',
    lottieSrc: '/animations/confetti.lottie',
    loop: false,
  },
  {
    label: 'AI Loading',
    jsonSrc: '/animations/ai-loading.json',
    lottieSrc: '/animations/ai-loading.lottie',
    loop: true,
  },
  {
    label: 'Sparkle',
    jsonSrc: '/animations/sparkleAnimation.json',
    lottieSrc: '/animations/sparkleAnimation.lottie',
    loop: true,
  },
];

const DotLottieDemo: FC = () => {
  const [events, setEvents] = useState<string[]>([]);
  const dotLottieRefs = useRef<Record<string, DotLottie | null>>({});

  const logEvent = useCallback((message: string) => {
    setEvents((prev) => [`[${new Date().toLocaleTimeString()}] ${message}`, ...prev].slice(0, 20));
  }, []);

  const setupRef = useCallback(
    (key: string) => (dotLottie: DotLottie | null) => {
      if (!dotLottie) return;
      dotLottieRefs.current[key] = dotLottie;

      dotLottie.addEventListener('play', () => logEvent(`${key}: play`));
      dotLottie.addEventListener('pause', () => logEvent(`${key}: pause`));
      dotLottie.addEventListener('complete', () => logEvent(`${key}: complete`));
      dotLottie.addEventListener('load', () => logEvent(`${key}: loaded`));
    },
    [logEvent],
  );

  const controlAnimation = useCallback((key: string, action: 'play' | 'pause' | 'stop') => {
    const instance = dotLottieRefs.current[key];
    if (!instance) return;
    instance[action]();
  }, []);

  return (
    <IonPage>
      <CommonPageHeader title="dotLottie Demo" />
      <IonContent fullscreen className="ion-padding">
        {/* Section 1: Side-by-side .lottie rendering with controls */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>.lottie Animations with Playback Controls</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color="medium">
              <p>Each animation loaded from a <code>.lottie</code> file via the <code>src</code> prop.</p>
            </IonText>
            <div className={styles.animationsGrid}>
              {animations.map(({ label, lottieSrc, loop }) => {
                const key = `lottie-${label}`;
                return (
                  <div key={key} className={styles.animationCard}>
                    <IonText>
                      <h3>{label}</h3>
                    </IonText>
                    <div className={styles.animationContainer}>
                      <DotLottieReact
                        src={lottieSrc}
                        loop={loop}
                        autoplay
                        dotLottieRefCallback={setupRef(key)}
                        style={{ width: 150, height: 150 }}
                      />
                    </div>
                    <div className={styles.controls}>
                      <IonButton size="small" fill="outline" onClick={() => controlAnimation(key, 'play')}>
                        <IonIcon icon={playOutline} slot="icon-only" />
                      </IonButton>
                      <IonButton size="small" fill="outline" onClick={() => controlAnimation(key, 'pause')}>
                        <IonIcon icon={pauseOutline} slot="icon-only" />
                      </IonButton>
                      <IonButton size="small" fill="outline" onClick={() => controlAnimation(key, 'stop')}>
                        <IonIcon icon={stopOutline} slot="icon-only" />
                      </IonButton>
                    </div>
                    <IonText color="medium">
                      <p className={styles.meta}>
                        Loop: {loop ? 'yes' : 'no'} | Source: <code>.lottie</code>
                      </p>
                    </IonText>
                  </div>
                );
              })}
            </div>
          </IonCardContent>
        </IonCard>

        {/* Section 2: .json via src prop (dotLottie-react also supports JSON URLs) */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>.json via src prop (backward compatibility)</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color="medium">
              <p>
                Same <code>DotLottieReact</code> component loading <code>.json</code> files via the <code>src</code>{' '}
                prop to verify backward compatibility.
              </p>
            </IonText>
            <div className={styles.animationsGrid}>
              {animations.map(({ label, jsonSrc, loop }) => {
                const key = `json-${label}`;
                return (
                  <div key={key} className={styles.animationCard}>
                    <IonText>
                      <h3>{label} (.json)</h3>
                    </IonText>
                    <div className={styles.animationContainer}>
                      <DotLottieReact
                        src={jsonSrc}
                        loop={loop}
                        autoplay
                        dotLottieRefCallback={setupRef(key)}
                        style={{ width: 150, height: 150 }}
                      />
                    </div>
                    <IonText color="medium">
                      <p className={styles.meta}>Source: <code>.json</code></p>
                    </IonText>
                  </div>
                );
              })}
            </div>
          </IonCardContent>
        </IonCard>

        {/* Section 3: Color Theming Test */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Color Theming (themeData)</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color="medium">
              <p>
                Testing <code>themeData</code> prop to dynamically recolor animations. This replaces the SVG{' '}
                <code>fill</code> manipulation used in <code>bma-workouts/LottieAnimation</code>.
              </p>
            </IonText>
            <div className={styles.animationsGrid}>
              <div className={styles.animationCard}>
                <IonText>
                  <h3>Sparkle (default colors)</h3>
                </IonText>
                <div className={styles.animationContainer}>
                  <DotLottieReact
                    src="/animations/sparkleAnimation.lottie"
                    loop
                    autoplay
                    style={{ width: 150, height: 150 }}
                  />
                </div>
              </div>
              <div className={styles.animationCard}>
                <IonText>
                  <h3>Sparkle (themed red)</h3>
                </IonText>
                <div className={styles.animationContainer}>
                  <DotLottieReact
                    src="/animations/sparkleAnimation.lottie"
                    loop
                    autoplay
                    themeData='{"c":["#FF0000"]}'
                    style={{ width: 150, height: 150 }}
                  />
                </div>
              </div>
              <div className={styles.animationCard}>
                <IonText>
                  <h3>Sparkle (themed blue)</h3>
                </IonText>
                <div className={styles.animationContainer}>
                  <DotLottieReact
                    src="/animations/sparkleAnimation.lottie"
                    loop
                    autoplay
                    themeData='{"c":["#0000FF"]}'
                    style={{ width: 150, height: 150 }}
                  />
                </div>
              </div>
            </div>
            <IonText color="warning">
              <p>
                ⚠️ Note: <code>themeData</code> only works if the .lottie file has theme-compatible layers. If the
                animations look the same, the theme JSON format may need adjustment for these specific animations.
              </p>
            </IonText>
          </IonCardContent>
        </IonCard>

        {/* Section 4: Event Log */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Event Log</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color="medium">
              <p>Events captured from all animation instances above.</p>
            </IonText>
            <div className={styles.eventLog}>
              {events.length === 0 ? (
                <IonText color="medium">No events yet. Interact with the animations above.</IonText>
              ) : (
                events.map((event, index) => (
                  <div key={index} className={styles.eventItem}>
                    <code>{event}</code>
                  </div>
                ))
              )}
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DotLottieDemo;
