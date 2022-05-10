// Attraper un élément HTML
const h1 = document.querySelector('h1')

let a = 5

// Modifier le contenu texte d'un élément HTML
h1.innerText = 'Bienvenue sur mon site'
h1.textContent = a

// Attraper l'élément body du HTML
const body = document.querySelector('body')
// Créer un élément HTML depuis le JS
const p = document.createElement('p')
// Ajouter notre élément p à body depuis le JS
body.appendChild(p)

// Les fonctions

// function king(pseudo, id){
//     // Des instructions
//     alert(pseudo + id)
//    return h1.textContent = pseudo + id
// }
// king('King ', 'the first') // () => des arguments

function trololo(nbr, pourcent){
    if(typeof nbr !== 'number' || typeof pourcent !== 'number')
        return (h1.textContent = 'veuillez entrer deux nombres')
    return (h1.textContent = (nbr / 100) * pourcent)
}
trololo(5, 7)