

// boucle
/*
for(let i = 0; i < 5; i++){
    console.log("i est égale a : ", i);
    // condition
    if(i == 4){
        console.log("END")
    }
}
*/

/*
for(let x = 0; x <= 10; x++){
    if(x == 5){
        console.log("Salut")
    }
    else{
        console.log(x);
    }
}
*/

 let username = "anticonstitutionnellement"
// console.log(username);
// console.log(username[0]);
// console.log(username[1]);
// console.log(username[2]);
// console.log(username[3]);
// console.log(username[4]);

// console.log(typeof username.length);

// for(let i = 0; i < username.length; i++){
//     console.log(username[i]);
// }

// méthode
username.toUpperCase()

for(let i = 0; i < username.length; i++){
    if(i % 2 === 0){
        console.log(username[i].toUpperCase())
    }
    else{
        console.log((username[i]));
    }
}