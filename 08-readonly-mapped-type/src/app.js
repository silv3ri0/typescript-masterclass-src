var person = {
    name: 'Todd',
    age: 27,
};
function freeze(obj) {
    return Object.freeze(obj);
}
var newPerson = freeze(person);
console.log("newPerson----->" + newPerson.name);
