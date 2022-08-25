import { IonButton, IonText } from '@ionic/react';
import { FC, useEffect, useState } from 'react';
import { Http } from '@capacitor-community/http';
import styles from './TestCors.module.scss';

type Props = {};

const TestCors: FC<Props> = props => {
  const [httpPluginResult, setHttpPluginResult] = useState<any>();
  const [browserFetchResult, setBrowserFetchResult] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        await Http.setCookie({ url: window.location.origin, key: 'testttt', value: '123123123' });
        await Http.setCookie({ url: 'my.testbackend.com', key: 'testbackend', value: 'vvvvvvv' });
        await Http.setCookie({ url: 'http://my.testbackend.com', key: 'testbackend2', value: '2vvvvvvv' });
        await Http.setCookie({ url: 'https://my.testbackend.com', key: 'testbackend3', value: '3vvvvvvv' });
        await Http.setCookie({ url: '/', key: 'tyu', value: 'nnnnnnn' });
        await Http.setCookie({ url: '', key: 'qweqweqwetyu', value: 'mjmjmjmjmjmjm' });

        alert('cookies set');
      } catch (e) {
        alert(e);
        alert(JSON.stringify(e));
      }
    })();
  }, [])

  const doFetch = async () => {
    try {
      const cookie1 = await Http.getCookie({ url: window.location.origin, key: 'testttt' });
      const cookie2 = await Http.getCookie({ url: 'my.testbackend.com', key: 'testbackend' });
      const cookie3 = await Http.getCookie({ url: 'http://my.testbackend.com', key: 'testbackend2' });
      const cookie4 = await Http.getCookie({ url: 'https://my.testbackend.com', key: 'testbackend3' });
      const cookie5 = await Http.getCookie({ url: '/', key: 'tyu' });
      const cookie6 = await Http.getCookie({ url: '', key: 'qweqweqwetyu' });

      alert(JSON.stringify({ test: 'cookie1', ...cookie1 }));
      alert(JSON.stringify({ test: 'cookie2', ...cookie2 }));
      alert(JSON.stringify({ test: 'cookie3', ...cookie3 }));
      alert(JSON.stringify({ test: 'cookie4', ...cookie4 }));
      alert(JSON.stringify({ test: 'cookie5', ...cookie5 }));
      alert(JSON.stringify({ test: 'cookie6', ...cookie6 }));

      const response = await Http.get({
        // url: 'http://localhost:3030/read-cookie',
        url: 'https://floating-bayou-00569.herokuapp.com/test-cors',
      });

      // alert('capacitor http success');
      setHttpPluginResult(response);
    } catch (e) {
      alert('capacitor http error');
    }

    try {
      const test = await fetch('https://floating-bayou-00569.herokuapp.com/test-cors')
      const data = await test.json();

      console.log('data', data);
      // alert('browser fetch success');
      setBrowserFetchResult(data);
    } catch (e) {
      console.log(e);
      // alert('browser fetch error');
    }
  }

  return (
    <div className={styles.wrapper}>
      <pre>
        <div>
          <span>http plugin result - </span>
          {httpPluginResult ? <span>{JSON.stringify(httpPluginResult, null, 2)}</span> : '?'}
        </div>
        <div style={{ marginTop: '20px' }}>
          <span>browser fetch result - </span>
          {browserFetchResult ? <span>{JSON.stringify(browserFetchResult, null, 2)}</span> : '?'}
        </div>
      </pre>
      <IonButton
        onClick={doFetch}
        color="primary"
        fill="solid"
        size="default"
        expand="block"
        style={{ margin: '16px' }}
      >
        CORS
      </IonButton>
    </div>
  );
};

export default TestCors;