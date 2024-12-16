class Song {
  constructor(public title: string, public duration: string | number) {}
}

/*
La classe Song rappresenta una canzone e ha due proprietà:

title (di tipo string): il titolo della canzone.
duration (di tipo string | number): la durata della canzone, che può essere:
Una stringa formattata come "MM:SS" (es. "05:31").
Un numero che rappresenta i millisecondi (es. 330000).
*/


function getSongDuration(item: Song) {
  if (typeof item.duration === 'string') {
    return item.duration;
  }
  const { duration } = item;
  const minutes = Math.floor(duration / 60000);
  const seconds = (duration / 1000) % 60;
  return `${minutes}:${seconds}`;
}

/*
Scopo
Questa funzione accetta un oggetto di tipo Song e restituisce una stringa che rappresenta la durata della canzone nel formato MM:SS.
*/

/*
Controllo del tipo della proprietà duration:

Se duration è già una stringa (typeof item.duration === 'string'), viene restituita direttamente: 

Gestione di duration come numero:

Se duration è un numero (millisecondi), viene convertito in minuti e secondi:
Math.floor(duration / 60000) calcola i minuti interi.
(duration / 1000) % 60 calcola i secondi.
La durata è formattata come stringa ${minutes}:${seconds}.
Esempio di conversione
Se duration è 330000:

Minuti: Math.floor(330000 / 60000) = 5.
Secondi: (330000 / 1000) % 60 = 30.
Risultato: "5:30"

*/

const songDurationFromString = getSongDuration(
  new Song('Wonderful Wonderful', '05:31')
);
console.log(songDurationFromString);

/* La funzione getSongDuration rileva che duration è una stringa e la restituisce direttamente. */

const songDurationFromMS = getSongDuration(
  new Song('Wonderful Wonderful', 330000)
);
console.log(songDurationFromMS);

/* Crea un oggetto Song con title = 'Wonderful Wonderful' e duration = 330000 (numero in millisecondi). */
