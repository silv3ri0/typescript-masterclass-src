interface Person {
  name: string;
  age?: number;
}

/*
L'interfaccia Person rappresenta un tipo con due proprietà:

name: obbligatoria e di tipo string.
age: opzionale (number | undefined).
La presenza di ? rende la proprietà age non obbligatoria.
*/


type MyRequired<T> = {
  [P in keyof T]-?: T[P]
};

/*
Il tipo MyRequired è un Mapped Type personalizzato che trasforma tutte le proprietà di un tipo T da opzionali a obbligatorie.

Spiegazione dei componenti:
[P in keyof T]: Itera su tutte le chiavi di T.
-?: Rimuove il modificatore di opzionalità (?) da ogni proprietà.
T[P]: Mantiene il tipo originale della proprietà.
*/

function printAge(person: Required<Person>) {
  return `${person.name} is ${person.age}`;
}

const person: Required<Person> = {
  name: 'Todd',
  age: 27
};

const age = printAge(person);

/*
In sintesi
L'interfaccia Person ha una proprietà opzionale age?. Il tipo Required (o MyRequired) rimuove l'opzionalità, rendendo tutte le proprietà obbligatorie.
La funzione printAge richiede un oggetto di tipo Required<Person>, il che significa che name e age devono essere sempre presenti.
La stringa risultante combina il nome e l'età della persona.
*/
