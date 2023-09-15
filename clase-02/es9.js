let userData = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 32,
    email: 'jp@email.com',
    password: '123456',
    address: 'Calle 123',
    creatAt: new Date(),
    birthday: new Date(1985,5,10),
};

function getFullName() {
    const { firstName, lastName, ...rest } = userData
    console.log('====================================');
    console.log('resto', rest);
    console.log('====================================');
    return `${firstName} ${lastName}`

}

function getDataUser() {
    const { password, ...rest } = userData;
    return rest;
}

// Ejemplo spread method

function clonUser() {
    const newUser = {
        ...userData,
        password: null,
    }
    return newUser;
}

console.log('====================================');
console.log(clonUser());
console.log('====================================');





// console.log('====================================');
// console.log('getFullName', getFullName());
// console.log('====================================');

// console.log('====================================');
// console.log(getDataUser());
// console.log('====================================');

