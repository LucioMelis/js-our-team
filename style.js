console.log('Js Ok!');

// Aggiungere un file js in cui definire * un array di oggetti *
// che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card:
// * Nome, Ruolo e Foto *.

// Una volta definita la struttura dati, prendendo come riferimento la card
// di esempio presente nell'html,
// stampare dinamicamente una card per ogni membro del team.


// Creo un Array di Oggetti 
const ciurmaMugiwara = [
    {
        nome: 'Monkey D.Luffy',
        ruolo: 'Capitano',
        immagine: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Roronoa Zoro',
        ruolo: 'Spadaccino',
        immagine: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Vinsmoke Sanji',
        ruolo: 'Cuoco',
        immagine: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Nami',
        ruolo: 'Cartografa',
        immagine: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'God Usopp',
        ruolo: 'Cecchino',
        immagine: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Chopper',
        ruolo: 'Medico',
        immagine: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Franky',
        ruolo: 'Carpentiere',
        immagine: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Brook',
        ruolo: 'Musicista',
        immagine: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Nico Robin',
        ruolo: 'Archeologa',
        immagine: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Jinbe',
        ruolo: 'Timoniere',
        immagine: 'img/angela-caroll-chief-editor.jpg'
    },

];


function creazioneDom(personaggioDom) {

    // richiamo il contenitore dove andranno inserite le carte CONTAINER
    const contenitoreGenerale = document.querySelector('.team-container');
    // creo l'elemento carta 
    const contenitoreCarte = document.createElement('div');
    // aggiungo all'elemendo team-card il contenitore delle card 
    contenitoreGenerale.appendChild(contenitoreCarte);


    // aggiungo la classe all'elemento carta 
    contenitoreCarte.classList.add('team-card');
    // creo elemento immagine 
    const elementoImmagine = document.createElement('img');
    // Nel div carta appendo l'elemento immagine 
    contenitoreCarte.appendChild(elementoImmagine);
    // all'elemento immagine vado a inserire l'img dell'oggetto
    elementoImmagine.src = personaggioDom.immagine;
    // Creo il div che conterrà tag h3 e tag p 
    const contenitoreTesto = document.createElement('div');
    // all'elemento div aggiungo una classe
    contenitoreTesto.classList.add('card-text');
    // al contenitore Card appendo l'elemento div testo creato 
    contenitoreCarte.appendChild(contenitoreTesto);
    // creo un nuovo elemento che sarà il nome della carta 
    const nomePersonaggio = document.createElement('h3');

    contenitoreTesto.appendChild(nomePersonaggio);

}


for (let i = 0; i < ciurmaMugiwara.length; i++) {
    const personaggio = ciurmaMugiwara[i];
    creazioneDom(personaggio);
}






