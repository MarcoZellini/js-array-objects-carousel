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

const carouselElement = document.getElementById('carousel');

images.forEach(element => {
    
    if (element.active) {
        carouselElement.innerHTML += `<img class='img-fluid'src='./assets/img/${element.path}'>`;
    }

});