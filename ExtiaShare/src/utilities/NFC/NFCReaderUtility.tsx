// NFC :

import { NFC } from '@awesome-cordova-plugins/nfc';

// HTTP :

import { HTTP } from '@awesome-cordova-plugins/http';

// Interfaces

import { User } from '../Auth/UserInterface';

// NFC Reader/sender-tranceiver :

// NFC send feature :

export const NFCLogSender = async() => {

  let idList: Array<number> = []; // ID list :

  // def NFC flags :

  const flags = NFC.FLAG_READER_NFC_A | NFC.FLAG_READER_NFC_B;

  // Reader V2 :
  
  NFC.readerMode(flags).subscribe(
 
    tag => {

      // handle undefined case :

      if (tag.id !== undefined) {

        // id storage :

        tag.id.forEach(id => {

          idList.push(id);

        }) // push id to array;   
      }
      
      // send NFC tag data by HTTP :

      const SendNFCData = async() => {

        let isAuthenticated: Boolean = false;

        // HTTP POST request to send sensor profiles from lorawan server/gateway : 

        await HTTP.post('http://localhost/account/connection_nfc', { "id_nfc": idList }, 
        
        {headers: 'none'}).then(data => {

          alert("in success callback")

          // Provide profiles list with data from server :

          if (data.status === 200) {

            // handle data here :

            // prepare object for storing user data from server :

            const UserData: User = {

              userID: data.data.id,
              userNFCID: data.data.idNFC,
              userMail: data.data.mailAddress,
              score: data.data.score,
              company: {
                name: data.data.name
              }
            }
          }

        }).catch(error => {

          // If sensor doesn't exists on lorawan server (GET request status === '404') :
  
          // If GET request status is other than '404' :

          //alert(idList)
  
          // eslint-disable-next-line no-useless-concat
          alert(error.status + " " + 'this is the error status');
          alert(error.error); // error message as string
          alert(error.headers);           
        }); 

        return isAuthenticated;
      };

      // send NFC data call for testing :

      SendNFCData();
    }
  )
}

// clear reader options list :

export const ClearSelectOptionsList = () => {

    // retrieve 'location' element by ID to delete previous select options :

    const location: HTMLElement | null = document.getElementById('location');

    // delete select options :

    if (location !== null) {

      while (location.firstChild) {
  
        location.removeChild(location.firstChild);
      }

    } else {

      alert(Error("Unable to find DOM element #location"))
    }
}