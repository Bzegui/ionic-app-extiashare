// imports :

import { 
  
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonPage, 
  IonText, 
  IonTitle, 
  IonToolbar, 
  useIonViewWillEnter

} from '@ionic/react';

// React :

import { useState } from 'react';

// Utilities :

import { NFCLogSender } from '../../utilities/NFC/NFCReaderUtility';

// FC :

const AuthTab: React.FC = () => {

  // ion lifecycle to activate NFC service at page loading

  useIonViewWillEnter(() => {

    NFCLogSender();
  });

  /*-----------------------------------------------------------------------------------------*/

  // NFC Tags reader :

  // NFC tag subscriber implementation :

  // test for modale :

  //if (isAuthenticated == true) { alert("user is authenticated") }

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Authentification</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-margin-top'>

        {/* display tag retrieved elements */}

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Scan de votre carte</IonCardTitle>
            <IonCardSubtitle>Scannez votre carte compatible NFC pour vous authentifier.</IonCardSubtitle>
          </IonCardHeader>
          
          <IonCardContent>
            <IonList>
              
            </IonList>
          </IonCardContent>
        </IonCard>

      </IonContent>

      {/*<IonButton onClick={NFCSender} shape="round">send NFC tag infos</IonButton>*/}
    </IonPage>
  );
};

export default AuthTab;
