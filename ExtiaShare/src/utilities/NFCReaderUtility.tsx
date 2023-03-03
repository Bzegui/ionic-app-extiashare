// NFC :

import { NFC } from '@awesome-cordova-plugins/nfc';

// HTTP :

import { HTTP } from '@awesome-cordova-plugins/http';

// NFC Reader/sender-tranceiver :

// NFC send feature :

export const NFCSender = async() => {

  // def NFC flags :

  const flags = NFC.FLAG_READER_NFC_A | NFC.FLAG_READER_NFC_B;

  // Reader V2 :
  
  const reader = NFC.readerMode(flags).subscribe(
 
    tag => {

      let idList: Array<number> = []; // ID list :

      // handle undefined case :

      if (tag.id !== undefined) {

        // id storage :

        tag.id.forEach(id => {

          idList.push(id);
        }) // push id to array;   
      } 
      
      // send NFC tag data by HTTP :

      const SendNFCData = async() => {

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

          alert(idList)
  
          // eslint-disable-next-line no-useless-concat
          //alert(error.status + " " + 'this is the error status');
          //alert(error.error); // error message as string
          //alert(error.headers);           
        }); 
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