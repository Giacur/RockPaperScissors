//variabili
const buttons = document.querySelectorAll(`button`);
const textField = document.querySelector('#textField');
const avviso = document.querySelector('#avviso');
const riga = document.querySelector('#riga')
textField.classList.add(`ombra`)
textField.innerHTML = `<p style="font-size: 2.5rem">In attesa del giocatore...</p>`

//FUNZIONI
//funzione allarme
function alarm(time) {
    setInterval(() => {
        textField.classList.toggle('opacity-0')
    }, time);
}

alarm(500)

//ascolto bottoni con ciclo
buttons.forEach(bottone => {
    bottone.addEventListener('click', ()=>{
        //invochiamo la funzione per far tirare il computer e gli passiamo come parametro il simbolo sceolto dal giocatore
        textField.classList.add('opacity-100')
        riga.style.backgroundColor = "#25c0a6ec";
        checkWinner(bottone.value, bottone.name);
    })
})

//generazione numero computer e controllo del vincitore
function checkWinner(giocatoreValue, giocatoreName) {
    //generiamo un numero intero casuale compreso tra 0 e 2
    let computer = Math.floor(Math.random()*3);
    let string = ``;

    //valutiamo i casi
    //sasso carta
    if(parseInt(giocatoreValue) === 0 && computer === 1) {
        string = `Hai scelto ${giocatoreName}, il computer ha scelto Carta, quindi <span class="text-danger">PERDI</span> la mano!`;
    }//sasso forbice
    else if(parseInt(giocatoreValue) === 0 && computer === 2) {
        string = `Hai scelto ${giocatoreName}, il computer ha scelto Forbice, quindi <span class="text-primary">VINCI</span> la mano!`;
    }//carta forbice
    else if(parseInt(giocatoreValue) === 1 && computer === 2) {
        string = `Hai scelto ${giocatoreName}, il computer ha scelto Forbice, quindi <span class="text-danger">PERDI</span> la mano!`;
    }//carta sasso
    else if(parseInt(giocatoreValue) === 1 && computer === 0) {
        string = `Hai scelto ${giocatoreName}, il computer ha scelto Sasso, quindi <span class="text-primary">VINCI</span> la mano!`;
    }//forbice sasso
    else if(parseInt(giocatoreValue) === 2 && computer === 0) {
        string = `Hai scelto ${giocatoreName}, il computer ha scelto Sasso, quindi <span class="text-danger">PERDI</span> la mano!`;
    }//forbice carta
    else if(parseInt(giocatoreValue) === 2 && computer === 1) {
        string = `Hai scelto ${giocatoreName}, il computer ha scelto Carta, quindi <span class="text-primary">VINCI</span> la mano!`;
    }else {
        string = `Tu e il computer avete scelto ${giocatoreName} quindi <span class="text-warning">PAREGGIO</span>!`;
    };

    //invochiamo la funzione per la stampa del risultato e gli passo come parametro la stringa restituita
    populateResutlts(string);
}

//funzione per stampa risultati
function populateResutlts(risultato) {
    textField.innerHTML = risultato;
}