class Foo {
  bar() { }
}

const bar = new Foo();

// console.log(bar instanceof Foo);
// console.log(Object.getPrototypeOf(bar) === Foo.prototype);

class Song {
  constructor(public title: string, public duration: number) { }
}

class Playlist {
  constructor(public name: string, public songs: Song[]) { }
}

function getItemName(item: Song | Playlist) {
  if (item instanceof Song) {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song('Wonderful Wonderful', 300000));
console.log('Song name:', songName);

const playlistName = getItemName(
  new Playlist('The Best Songs', [new Song('The Man', 300000)])
);
console.log('Playlist name:', playlistName);

/*
Punti Chiave
instanceof:

Determina se un oggetto è un'istanza di una classe specifica.
In questo caso, è usato per distinguere tra oggetti di tipo Song e Playlist.
Polimorfismo:

La funzione getItemName accetta due tipi diversi (Song e Playlist) ma gestisce entrambi in modo appropriato.
Praticità:

Questo pattern è utile per lavorare con oggetti di tipi diversi che condividono alcune proprietà simili o quando desideri comportamenti differenti in base al tipo.
*/
