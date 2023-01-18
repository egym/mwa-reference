import React from 'react';
import { useTranslation } from 'react-i18next';
import { IonText } from '@ionic/react';
import styles from './SpotsLeft.module.scss';

const SpotsLeft: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <IonText color="success">{t('common.spotsLeft', { count: 10 })}</IonText>
      <div className={styles.progress} />
    </div>
  );
};

export default SpotsLeft;
