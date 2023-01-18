import React from 'react';
import { IonText } from '@ionic/react';
import styles from './SpotsLeft.module.scss';

const SpotsLeft: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <IonText color="success">10 Spots left</IonText>
      <div className={styles.progress} />
    </div>
  );
};

export default SpotsLeft;
