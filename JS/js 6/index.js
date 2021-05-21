function filterBy(array, dataType) {
    let newArray = array.filter(element => typeof element!== dataType);
    return newArray;
}

function ownFilterBy(array, dataType){
    let newArray = [];
    array.forEach(element => {
        if(typeof element !== dataType){
            newArray.push(element);
        }
    });
    return newArray;
}

let array = ['hello', 'world', 23, '23', null];
let dataType = 'string';

console.log(filterBy(array, dataType));
console.log(ownFilterBy(array, dataType));