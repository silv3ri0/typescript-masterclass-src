class Song {
  kind: 'song';
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  kind: 'playlist';
  constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
  return 'title' in item;
}

function getItemName(item: Song | Playlist) {
  // if (isSong(item)) {
  if (item.kind === 'song') {
    return item.title;
  }
  return item.name;
}

/*
Come funziona?
Controlla la proprietà kind dell'oggetto item:
Se kind è 'song', TypeScript deduce automaticamente che l'oggetto è di tipo Song e accede alla proprietà title.
Altrimenti, considera l'oggetto di tipo Playlist e accede alla proprietà name.
*/

const songName = getItemName(new Song('Wonderful Wonderful', 300000));
console.log('Song name:', songName);

const playlistName = getItemName(
  new Playlist('The Best Songs', [new Song('The Man', 300000)])
);
console.log('Playlist name:', playlistName);

/*
3. Differenze tra le due implementazioni
Con isSong
Il controllo era implicito: si basava sulla presenza della proprietà title per dedurre che l'oggetto fosse una Song. Questo approccio funziona, ma può essere fragile se altri oggetti non correlati hanno una proprietà title.

Con kind
L'uso di kind è un approccio esplicito e più robusto. È un pattern comune noto come tagged union o discriminated union:

Ogni tipo nell'unione (Song | Playlist) include una proprietà comune (kind) che indica il tipo dell'oggetto.
Questo rende il codice più sicuro, chiaro e facile da estendere.
*/

