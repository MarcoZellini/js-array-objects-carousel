/* 
Consegna:
    Riprendiamo il live coding visto in classe un pó di tempo fá sul carosello di immagini e rifacciamolo, questa volta usando gli oggetti.

    Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.

    Bonus 0:
    Non eramamo ancora a conoscenda di molti strumenti utili, come ad esempio le funzioni. É possibile fare refactoring del codice, pulendolo e creando quanche funzione che possa rendere tutto piú leggibile e pulito?

    Bonus 1:
    Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
    al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

    Bonus 2:
    E se volessi un bottone per invertire la "direzione" del carosello?
*/

const images = [
    {
        path: '01.webp',
        active: true
    },
    {
        path: '02.webp',
        active: false
    },
    {
        path: '03.webp',
        active: false
    },
    {
        path: '04.webp',
        active: false
    },
    {
        path: '05.webp',
        active: false
    }

]

console.log(images);

//Definisco gli elementi di cui ho bisogno
const carouselImagesElement = document.querySelector('#carousel .images');
const rightArrow = document.querySelector('i.fa-chevron-circle-right');
const leftArrow = document.querySelector('i.fa-chevron-circle-left');




imageWrite(carouselImagesElement, images);


//Mando avanti di un'immagine il carosello quando clicco sulla freccia destra
rightArrow.addEventListener('click', function () {
    console.log('destra');
    imageForward(images);
    imageWrite(carouselImagesElement, images);
    //console.log(images);
});


//Mando indietro di un'immagine il carosello quando clicco sulla freccia sinistra
leftArrow.addEventListener('click', function () {
    console.log('sinistra');
    imageBackword(images);
    imageWrite(carouselImagesElement, images);
    //console.log(images);
});



/**
 * ### imageForward
 * This function set the active value to the next image
 * @param {Object[]} imageList 
 */
function imageForward (imageList) {

    let position = 0
    images.forEach((image, i) => {
        if(image.active) {
            image.active = false;
            position = i;
            
        }
    })

    if (position === imageList.length - 1) {
        position = -1;
    }

    imageList[++position].active = true;
}

/**
 * ### imageBackword
 * This function set the active value to the previous image
 * @param {Object[]} imageList 
 */
function imageBackword (imageList) {

    let position = 0
    images.forEach((image, i) => {
        if(image.active) {
            image.active = false;
            position = i;
            
        }
    })

    if (position === 0) {
        position = imageList.length;
    }
    imageList[--position].active = true;
}



/**### imageWrite
 * > This function append to the DOM Element the active image
 * @param {Object} DOMElement Element where i can write 
 * @param {Object[]} imageList 
 */
function imageWrite (DOMElement, imageList) {

    imageList.forEach((image) => {
    
        if (image.active) {
            DOMElement.innerHTML = `<img class='img-fluid' src='./assets/img/${image.path}'>`;
        }
    
    });
}