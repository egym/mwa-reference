import {FC, useState} from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonLoading,
  IonTitle
} from '@ionic/react';
import {ActionSheet, ActionSheetButtonStyle} from '@capacitor/action-sheet';
import {Device} from '@capacitor/device';
import {Camera, CameraResultType} from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

type Props = {

};

const TestCapacitorPlugins: FC<Props> = props => {
  const [cameraResultUrl, setCameraResultUrl] = useState();
  const [loading, setLoading] = useState(false);

  const printCurrentPosition = async () => {
    setLoading(true);
    const coordinates = await Geolocation.getCurrentPosition();
    setLoading(false);

    console.log('coordinates', coordinates);
    alert(JSON.stringify({
      accuracy: coordinates.coords.accuracy,
      latitude: coordinates.coords.latitude,
      longitude: coordinates.coords.longitude
    }, null, 2));
  };

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;

    if (imageUrl) {
      // @ts-ignore
      setCameraResultUrl(imageUrl);
    }
  };

  const logDeviceInfo = async () => {
    const info = await Device.getInfo();
    const battery = await Device.getBatteryInfo();

    alert(JSON.stringify({...info, ...battery}, null, 2));
  };

  const openActionSheet = async () => {
    const result = await ActionSheet.showActions({
      title: 'Test haptics',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Impact medium',
        },
        {
          title: 'Impact light',
        },
        {
          title: 'Vibrate',
        },
        {
          title: 'Selection Start',
        },
        {
          title: 'Selection Changed',
        },
        {
          title: 'Selection End',
        },
        {
          title: 'Cancel',
          style: ActionSheetButtonStyle.Destructive,
        },
      ],
    });

    switch (result.index) {
      case 0:
        await Haptics.impact({ style: ImpactStyle.Medium });
        return;
      case 1:
        await Haptics.impact({ style: ImpactStyle.Light });
        return;
      case 2:
        await Haptics.vibrate({ duration: 5000 });
        return;
      case 3:
        await Haptics.selectionStart();
        return;
      case 4:
        await Haptics.selectionChanged();
        return;
      case 5:
        await Haptics.selectionEnd();
        return;
      default:
        return;
    }
  }

  return (
    <div>
      <IonLoading isOpen={loading} />
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Test Capacitor plugins</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonButton
            onClick={printCurrentPosition}
            color="primary"
            fill="solid"
            size="default"
            expand="block"
            style={{margin: '16px', marginTop: 0}}
          >
            Geolocation
          </IonButton>
          <IonButton
            onClick={takePicture}
            color="primary"
            fill="solid"
            size="default"
            expand="block"
            style={{margin: '16px', marginTop: '32px'}}
          >
            Take picture
          </IonButton>
          <IonButton
            onClick={logDeviceInfo}
            color="primary"
            fill="solid"
            size="default"
            expand="block"
            style={{margin: '16px', marginTop: '32px'}}
          >
            Show device info
          </IonButton>
          <IonButton
            onClick={openActionSheet}
            color="primary"
            fill="solid"
            size="default"
            expand="block"
            style={{margin: '16px', marginTop: '32px'}}
          >
            Open ActionSheet & Test haptics
          </IonButton>
        </IonCardContent>
      </IonCard>

      {cameraResultUrl && (
        <div>
          <IonTitle>Photo result</IonTitle>
          <IonImg src={cameraResultUrl}/>
        </div>
      )}
    </div>
  );
};

export default TestCapacitorPlugins;
