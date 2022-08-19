import { IonButton } from '@ionic/react';
import { FC } from 'react';
import styles from './TestCors.module.scss';

type Props = {};

const TestCors: FC<Props> = props => {
  const doFetch = async () => {

    try {
      const test = await fetch('https://floating-bayou-00569.herokuapp.com/test-cors')
      const data = await test.json();

      console.log('data', data);
    } catch (e) {
      console.log(e);
      alert('ERROR!!');
    }
  }

  return (
    <div className={styles.wrapper}>
      <IonButton
        onClick={doFetch}
        color="primary"
        fill="solid"
        size="default"
        expand="block"
        style={{ margin: '16px' }}
      >
        Fetch
      </IonButton>
    </div>
  );
};

export default TestCors;