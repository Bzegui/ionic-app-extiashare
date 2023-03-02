import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

// imports :

import { NFC, Ndef } from '@awesome-cordova-plugins/nfc';

const NFCTab: React.FC = () => {

  // NFC Tags reader :

  // NFC tag subscriber

  const NFCReader = async() => {

    const flags = NFC.FLAG_READER_NFC_A | NFC.FLAG_READER_NFC_B;

    const reader = NFC.readerMode(flags).subscribe(
      
      tag => alert(JSON.stringify(tag))
    )  
  }
  
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>NFC tab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">NFC tab</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton onClick={NFCReader}>NFC start</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default NFCTab;
