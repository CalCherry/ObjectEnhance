function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

let favoriteNumber = 42
const instructor = {
    firstName: 'Cal',
    [favoriteNumber]: 'That is my favorite number!'
}

const instructor = {
    firstName: 'Cal',
    sayHi() {
        return 'Hi!'
    }
    sayBye() {
        return this.firstName + 'says bye!';
    }
}

const d = createAnimal('dog', 'bark', 'wooooof!')
d.bark();
const s = createAnimal('sheep', 'bleet', 'baaaaaaaa')
s.bleet();

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}
