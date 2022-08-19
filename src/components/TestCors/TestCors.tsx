import { IonButton } from '@ionic/react';
import { FC } from 'react';

type Props = {};

const TestCors: FC<Props> = props => {
  const doFetch = async () => {
    const test = await fetch('https://floating-bayou-00569.herokuapp.com/test-cors')

    console.log(test);
  }

  return (
    <IonButton
      onClick={doFetch}
      color="primary"
      fill="solid"
      size="default"
      expand="block"
      style={{ margin: '16px', marginTop: '32px' }}
    >
      Fetch
    </IonButton>
  );
};

export default TestCors;