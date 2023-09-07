/* 
Consegna:
    Bonus 0:
    Non eramamo ancora a conoscenda di molti strumenti utili, come ad esempio le funzioni. É possibile fare refactoring del codice, pulendolo e creando quanche funzione che possa rendere tutto piú leggibile e pulito?

    Bonus 1:
    Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
    al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

    Bonus 2:
    E se volessi un bottone per invertire la "direzione" del carosello?
*/

//Array di oggetti immagini
const images = [
    {
        path: `https://picsum.photos/1000/1000?random=${Math.ceil(Math.random() * 100)}`,
        active: true
    },
    {
        path: `https://picsum.photos/1000/600?random=${Math.ceil(Math.random() * 100)}`,
        active: false
    },
    {
        path: `https://picsum.photos/1000/1000?random=${Math.ceil(Math.random() * 100)}`,
        active: false
    },
    {
        path: `https://picsum.photos/1000/1000?random=${Math.ceil(Math.random() * 100)}`,
        active: false
    },
    {
        path: `https://picsum.photos/1000/1000?random=${Math.ceil(Math.random() * 100)}`,
        active: false
    }
];

//Definisco gli elementi di cui ho bisogno
const carouselImagesElement = document.querySelector('#carousel .images');
const rightArrow = document.querySelector('i.fa-chevron-circle-right');
const leftArrow = document.querySelector('i.fa-chevron-circle-left');
let invertDirection = false;

//Mostro per la prima volta l'immagine attiva a video
imageWrite(carouselImagesElement, images);

//Muovo in avanti le immagini ogni 3 secondi
let carouselId = setInterval(imageForward, 3000, carouselImagesElement, images);

//Mando avanti di un'immagine il carosello quando clicco sulla freccia destra
rightArrow.addEventListener('click', function () {
    imageForward(carouselImagesElement, images);
});


//Mando indietro di un'immagine il carosello quando clicco sulla freccia sinistra
leftArrow.addEventListener('click', function () {
    imageBackward(carouselImagesElement, images);
});


//Quanto premo il button con id 'invert_direction' faccio muovere le immagini al contrario
document.querySelector('#invert_direction').addEventListener('click', () => {
    if (invertDirection) {
        invertDirection = false;
        clearInterval(carouselId)
        carouselId = setInterval(imageForward, 3000, carouselImagesElement, images);
    } else {
        invertDirection = true;
        clearInterval(carouselId)
        carouselId = setInterval(imageBackward, 3000, carouselImagesElement, images);
    }
});

/**
 * ### imageForward
 * This function set the active value to the next image
 * @param {Object[]} imageList 
 */
function imageForward (DOMElement, imageList) {

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
    imageWrite(DOMElement, images);
}

/**
 * ### imageBackward
 * This function set the active value to the previous image
 * @param {Object[]} imageList 
 */
function imageBackward (DOMElement, imageList) {

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
    imageWrite(DOMElement, images);
}



/**### imageWrite
 * > This function append to the DOM Element the active image
 * @param {Object} DOMElement Element where i can write 
 * @param {Object[]} imageList 
 */
function imageWrite (DOMElement, imageList) {

    imageList.forEach((image) => {
    
        if (image.active) {
            DOMElement.innerHTML = `<img class='img-fluid d-block m-auto' src='${image.path}'>`;
        }
    });
}