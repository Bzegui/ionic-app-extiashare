# draft/old code sections :

// Reader V1

/*const reader = NFC.readerMode(flags).subscribe(
    
    //tag => alert(JSON.stringify(tag))

    tag => alert(JSON.stringify(tag))
)*/  

// Reader read :

/*const NFCReader = async() => {

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
}*/

