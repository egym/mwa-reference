import { IonText } from '@ionic/react';
import React from 'react';
import styles from './SpotsLeft.module.scss'

type Props = {};

const SpotsLeft: React.FC<Props> = props => {
  return (
    <div className={styles.wrapper}>
      <IonText color="success">10 Spots left</IonText>
      <div className={styles.progress} />
    </div>
  );
};

export default SpotsLeft;
