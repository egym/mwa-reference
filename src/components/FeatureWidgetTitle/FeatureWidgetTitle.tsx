import type { FC } from 'react';
import React from 'react';
import { IonButton, IonIcon, IonText } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import { clsx } from '../../utils/helpers';
import styles from './FeatureWidgetTitle.module.scss';

type Props = {
  title: string;
  buttonHandler?: () => void;
  className?: string;
  dataTestid?: string;
};

const FeatureWidgetTitle: FC<Props> = ({ title, buttonHandler, className, dataTestid }) => {
  return (
    <div className={clsx(styles.sectionContainer, 'mb-12', className)} data-testid={dataTestid}>
      <IonText data-testid={title}>{title}</IonText>
      {buttonHandler && (
        <IonButton fill="clear" size="small" onClick={buttonHandler}>
          View All
          <IonIcon icon={chevronForwardOutline} />
        </IonButton>
      )}
    </div>
  );
};

export default FeatureWidgetTitle;
