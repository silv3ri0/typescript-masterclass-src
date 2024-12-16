interface Person {
  name: string;
  age: number;
  address: {}
}

/*
L'interfaccia Person definisce un tipo con tre proprietà:

name: obbligatoria e di tipo string.
age: obbligatoria e di tipo number.
address: obbligatoria e di tipo oggetto {} (vuoto, può accettare qualsiasi cosa che sia un oggetto).
*/

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
};

/*
Cosa fa questo tipo?
MyPick è un Mapped Type che consente di "selezionare" solo alcune proprietà di un tipo dato. Accetta due parametri generici:

T: il tipo originale da cui estrarre le proprietà.
K: un sottoinsieme delle chiavi di T (keyof T garantisce che K contenga solo chiavi valide di T).
Come funziona?
[P in K]: Itera su tutte le chiavi specificate in K.
T[P]: Usa il tipo della proprietà originale dal tipo T.
Questo tipo è equivalente al tipo utility nativo Pick<T, K> fornito da TypeScript.
*/

const person: Pick<Person, 'name' | 'age'> = {
  name: 'Todd',
  age: 27
};

/*
Qui stiamo dichiarando una variabile person di tipo Pick<Person, 'name' | 'age'>. Questo significa che:

L'oggetto person deve contenere solo le proprietà name e age prese dall'interfaccia Person.
La proprietà address viene ignorata perché non è stata inclusa nella lista 'name' | 'age'.
*/

/*
Il tipo Pick
Pick (o MyPick) viene spesso usato per creare sottoinsiemi di tipi. In questo caso, ha permesso di selezionare solo le proprietà name e age dalla definizione dell'interfaccia Person.

È utile quando vuoi:

Ridurre un tipo complesso a un sottoinsieme più piccolo di proprietà.
Enfatizzare o utilizzare solo determinate proprietà di un oggetto.
*/

/*
Quando usare Pick o MyPick
Creazione di DTO (Data Transfer Objects):
Quando devi inviare solo una parte dei dati di un oggetto a un'API.
Semplificazione di tipi complessi:
Quando vuoi concentrarti solo su alcune proprietà importanti di un tipo grande.
Selezione di proprietà specifiche per funzioni:
Se una funzione ha bisogno di lavorare solo con un sottoinsieme di proprietà di un tipo.
*/

