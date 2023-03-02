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

import { ClearSelectOptionsList } from '../../utilities/NFCReaderUtility';

// NFC :

import { NFC, Ndef, NfcTag } from '@awesome-cordova-plugins/nfc';

// FC :

const NFCReadTab: React.FC = () => {

  // React hooks setup :

  const [isWritable, setIsWritable] = useState<Boolean>(); // store is writable tag property
  const [tagID, setTagID] = useState<Number>(); // store is writable tag property
  const [tagType, setTagType] = useState<String>(); // store is writable tag property

  /*-----------------------------------------------------------------------------------------*/

  // NFC Tags reader :

  // NFC tag subscriber implementation :

  // NFC read feature :

  const NFCReader = async() => {

    // def NFC flags :

    const flags = NFC.FLAG_READER_NFC_A | NFC.FLAG_READER_NFC_B;

    // Reader V2 :
    
    const reader = NFC.readerMode(flags).subscribe(
      
      tag => {

        // clear list at startup :

        ClearSelectOptionsList();

        // HTML elements :

        let idList: Array<number> = []; // ID list :

        let itemOption; // item option html element

        let itemOptionLabel; // item option label html element

        // retrieve 'location' element by ID to create tag content inside it :

        const location: HTMLElement | null = document.getElementById('location');

          // handle undefined case :

          if (tag.isWritable !== undefined && tag.id !== undefined) {

            setIsWritable(tag.isWritable); // set tag status

            setTagType(tag.type); // set tag type

            // HTML elements :

            itemOption = document.createElement('ion-item'); // item for tag id; 

            itemOptionLabel = document.createElement('ion-item-label'); // item label for tag id; // Label

            tag.id.forEach(id => {

              idList.push(id);
            }) // push id to array;

            itemOptionLabel.textContent = "Tag ID";

            itemOption.textContent = `${idList.toString()}` + "," + " ";

            // append elements :

            location !== null? location.appendChild(itemOptionLabel) : Error("Unable to find DOM element #location");

            location !== null? location.appendChild(itemOption) : Error("Unable to find DOM element #location");
          }
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

      <IonButton onClick={NFCReader} shape="round">NFC reader service start</IonButton>
    </IonPage>
  );
};

export default NFCReadTab;
