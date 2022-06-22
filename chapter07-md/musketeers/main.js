//Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
const musketeers = ["Athos", "Porthos","Aramis"];

//Shows each array element using a for loop.
for(let i = 0; i < musketeers.length; i++){
    console.log(musketeers[i]);
}

//Add the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan");

//Shows each array element using the forEach() method.
musketeers.forEach(musketeer =>{
    console.log(musketeer);
});
//Remove poor Aramis.
musketeers.pop("D'Artagnan");
//Shows each array element using a for-of loop.
for (const musketeer of musketeers) {
    alert(musketeers);
}