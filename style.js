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
        immagine: 'img/luffy.png'
    },
    {
        nome: 'Roronoa Zoro',
        ruolo: 'Spadaccino',
        immagine: 'img/zoro.png'
    },
    {
        nome: 'Vinsmoke Sanji',
        ruolo: 'Cuoco',
        immagine: 'img/sanji.png'
    },
    {
        nome: 'Nami',
        ruolo: 'Cartografa',
        immagine: 'img/nami.png'
    },
    {
        nome: 'God Usopp',
        ruolo: 'Cecchino',
        immagine: 'img/usop.png'
    },
    {
        nome: 'Chopper',
        ruolo: 'Medico',
        immagine: 'img/chopper.png'
    },
    {
        nome: 'Franky',
        ruolo: 'Carpentiere',
        immagine: 'img/franky.png'
    },
    {
        nome: 'Brook',
        ruolo: 'Musicista',
        immagine: 'img/brook.png'
    },
    {
        nome: 'Nico Robin',
        ruolo: 'Archeologa',
        immagine: 'img/nico-robin.png'
    },
    {
        nome: 'Jinbe',
        ruolo: 'Timoniere',
        immagine: 'img/jinbe.png'
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
    // creo il contenitore dell'immagine 
    const contenitoreImmagine = document.createElement('div');
    // aggiungo una classe all'elemento contenitore immagine 
    contenitoreImmagine.classList.add('card-image');
    // appendo l'elemento al div team card 
    contenitoreCarte.appendChild(contenitoreImmagine);
    // creo elemento immagine 
    const elementoImmagine = document.createElement('img');
    // Nel div carta appendo l'elemento immagine 
    contenitoreImmagine.appendChild(elementoImmagine);
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
    // appendo l'elemendo creato al contenitore testo 
    contenitoreTesto.appendChild(nomePersonaggio);
    // all'elemento nomePersonaggio vado ad inserire il nome dell'oggetto 
    nomePersonaggio.innerText = personaggioDom.nome;
    // creo un nuovo elemento che sarà il ruolo della carta 
    const ruoloPersonaggio = document.createElement('p');
    // appendo l'elemendo creato al contenitore testo
    contenitoreTesto.appendChild(ruoloPersonaggio);
    // all'elemento ruoloPersonaggio vado ad inserire il ruolo dell'oggetto 
    ruoloPersonaggio.innerText = personaggioDom.ruolo;

}


for (let i = 0; i < ciurmaMugiwara.length; i++) {

    const personaggio = ciurmaMugiwara[i];

    creazioneDom(personaggio);
}






