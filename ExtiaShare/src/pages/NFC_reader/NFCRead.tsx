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

//import { ClearSelectOptionsList } from '../../utilities/NFCReaderUtility';

import { NFCSender } from '../../utilities/NFCReaderUtility';

// FC :

const NFCReadTab: React.FC = () => {

  // ion lifecycle to activate NFC service at page loading

  useIonViewWillEnter(() => {

    NFCSender(); // load NFC reader/sender service before page loading => bypass native NFC service.
  });

  /*-----------------------------------------------------------------------------------------*/

  // NFC Tags reader :

  // NFC tag subscriber implementation :

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page d'authentification</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-margin-top'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Authentification</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* display tag retrieved elements */}

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Scan de votre carte</IonCardTitle>
            <IonCardSubtitle>Scannez votre carte compatible NFC pour vous authentifier</IonCardSubtitle>
          </IonCardHeader>
          
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>Tag type</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

      </IonContent>

      {/*<IonButton onClick={NFCReader} shape="round">NFC reader service start</IonButton>*/}

      {/*<IonButton onClick={NFCSender} shape="round">send NFC tag infos</IonButton>*/}
    </IonPage>
  );
};

export default NFCReadTab;
