let setData = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newSetData = setData.map(function(value) {
//     console.log('====================================');
//     console.log('map', value, index);
//     console.log('====================================');
//     return value + 1
// })

// console.log('====================================');
// console.log(newSetData);
// console.log('====================================');


console.log('====================================');
console.log('setData', setData);
console.log('====================================');

const myMap = (array, callback) => {
    let newArray = [];
    for(let i = 0; i < array.length; i++ ) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}

