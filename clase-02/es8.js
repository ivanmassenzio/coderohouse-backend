let userData = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 32,
    email: 'jp@email.com',
    city: 'Bogota',    
};

console.log('userData --> Object.entries', Object.entries(userData));
console.log('userData --> Object.keys', Object.keys(userData));
console.log('userData --> Object.values', Object.values(userData));


let taxes = {
    taxt1: 0.16,
    taxt2: 0.18,
    taxt3: 0.20,
    taxt4: 0.22,
};

let taxesValues = Object.values(taxes);

console.log('====================================');
console.log('taxesValues', taxesValues);
console.log('====================================');

let totalTaxes = taxesValues.reduce((total, tax) => {
    return total + tax;
}, 0);

console.log('totalTaxes', totalTaxes)