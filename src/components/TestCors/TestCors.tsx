import { IonButton } from '@ionic/react';
import { FC } from 'react';
import { Http } from '@capacitor-community/http';
import styles from './TestCors.module.scss';

type Props = {};

const TestCors: FC<Props> = props => {
  const doFetch = async () => {
    try {
      const response = await Http.get({
        // url: 'http://localhost:3030/read-cookie',
        url: 'https://floating-bayou-00569.herokuapp.com/test-cors',
      });

      console.log(response);
      alert('success 1 !!');
    } catch (e) {
      alert('ERROR 1 !!');
    }

    try {
      const test = await fetch('https://floating-bayou-00569.herokuapp.com/test-cors')
      const data = await test.json();

      console.log('data', data);
      alert('success 2 !!');
    } catch (e) {
      console.log(e);
      alert('ERROR 2 !!');
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