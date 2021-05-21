const testArray = [`hello`, `world`, `Kiev`, `Kharkiv`, `Odessa`, `Lviv`];
let ulist = document.createElement(`ul`);
document.body.prepend(ulist);

function addingElements(arr){
    let newArray = [];
        newArray = arr.map(element => (`<li>${element}</li>`));
        ulist.innerHTML = newArray.join('');
}
