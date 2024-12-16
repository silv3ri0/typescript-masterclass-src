class Song {
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
  return item instanceof Song;
}

function getItemName(item: Song | Playlist) {
  if (isSong(item)) {
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
Perché usare una type guard?
Una type guard personalizzata come isSong è utile quando si lavora con unioni di tipi (Song | Playlist), poiché aiuta TypeScript a dedurre il tipo corretto di un oggetto in modo sicuro.
*/

/*
Punti chiave
Type Guard Personalizzata:

isSong è una funzione che verifica il tipo e aiuta TypeScript a inferire correttamente il tipo dopo il controllo.
Differenza tra Song e Playlist:

La funzione getItemName utilizza isSong per distinguere tra oggetti Song e Playlist.
Miglior controllo dei tipi:

Usare una type guard personalizzata è preferibile rispetto a fare affidamento su controlli generici con any o instanceof non strutturato.
*/