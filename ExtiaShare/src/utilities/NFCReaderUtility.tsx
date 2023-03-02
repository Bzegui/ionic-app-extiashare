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