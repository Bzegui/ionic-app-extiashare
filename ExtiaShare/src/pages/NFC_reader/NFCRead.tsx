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
  IonToolbar 

} from '@ionic/react';

// React :

import { useState } from 'react';

// Utilities :

//import { ClearSelectOptionsList } from '../../utilities/NFCReaderUtility';

// NFC :

import { NFC, Ndef, NfcTag } from '@awesome-cordova-plugins/nfc';

// HTTP :

import { HTTP } from '@awesome-cordova-plugins/http';

// FC :

const NFCReadTab: React.FC = () => {

  // React hooks setup :

  const [isWritable, setIsWritable] = useState<Boolean>(); // store is writable tag property
  const [tagID, setTagID] = useState<Number>(); // store is writable tag property
  const [tagType, setTagType] = useState<String>(); // store is writable tag property

  /*-----------------------------------------------------------------------------------------*/

  // NFC Tags reader :

  // NFC tag subscriber implementation :

  // NFC send feature :

  const NFCSender = async() => {

    // def NFC flags :

    const flags = NFC.FLAG_READER_NFC_A | NFC.FLAG_READER_NFC_B;

    // Reader V2 :
    
    const reader = NFC.readerMode(flags).subscribe(
   
      tag => {

        let idList: Array<number> = []; // ID list :

        // handle undefined case :

        if (tag.isWritable !== undefined && tag.id !== undefined) {

          tag.id.forEach(id => {

            idList.push(id);
          }) // push id to array;       
        } 
        
        // send NFC tag data by HTTP :

        const SendNFCData = async() => {

          //alert('in send data')

          // HTTP POST request to send sensor profiles from lorawan server/gateway : 

          await HTTP.post('http://192.168.0.54:8080/', { idList }, 
          
          {headers: 'none'}).then(data => {

            // If sensor already exists on lorawan server/gateway (GET request status === '200') :

            // Provide profiles list with data from server :

            if (data.status === 200) {

              alert("request sent ok")
            }

          }).catch(error => {

            // If sensor doesn't exists on lorawan server (GET request status === '404') :
    
            // If GET request status is other than '404' :
    
            // eslint-disable-next-line no-useless-concat
            alert(error.status + " " + 'this is the error status');
            alert(error.error); // error message as string
            alert(error.headers);           
          }); 
        };

        // send NFC data call for testing :

        SendNFCData();
      }
    )
  }

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>NFC tab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-margin-top'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">NFC tab</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* display tag retrieved elements */}

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Tag</IonCardTitle>
            <IonCardSubtitle>Description</IonCardSubtitle>
          </IonCardHeader>
          
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>Tag type</IonLabel>
                <IonText>{tagType}</IonText>
              </IonItem>
            </IonList>
            <IonList id="location">
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonList>

          <IonItem></IonItem>
          
        </IonList>

      </IonContent>

      {/*<IonButton onClick={NFCReader} shape="round">NFC reader service start</IonButton>*/}

      <IonButton onClick={NFCSender} shape="round">send NFC tag infos</IonButton>
    </IonPage>
  );
};

export default NFCReadTab;
