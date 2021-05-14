// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, sert toi des class du fichier style.css et rien d'autre !
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ## Partie 1 Ajout de contenu
// ### 1. Dans le h1 ajoute le texte suivant : Les attributs class et id
let exo_1 = document.querySelector('h1')
exo_1.innerText="Les attributs class et ID"

// ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A
let exo_2 = document.querySelector('h2')
exo_2.innerText = 'Exercice 2 partie A'
// ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B
let exo_3 = document.querySelectorAll('h2')[1]
exo_3.innerText = 'Exercice 2 partie B'
// ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> 
let exo_4 = document.querySelector('p')
exo_4.innerHTML = `L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>`

// ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide
let exo_5 = document.querySelectorAll('p')[1]
exo_5.innerHTML = `La manipulation de l'attribut Style peut-être une <i>solution</i> rapide`


// ## Partie 2.1 Ajout d'attribut et de leurs valeurs
// ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"
exo_1.id = 'bigTitle'
// ### 7. Rajoute l'attribut class a la div avec comme valeur "container"
let exo_7 = document.querySelector('div')
exo_7.className = 'container'
// ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"
let exo_8 = document.querySelectorAll('h2')
exo_8.forEach((e,i) => {
    e.className = 'title'
}); 

// ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"
let exo_9 = document.querySelectorAll('p')
exo_9.forEach((e,i) => {
    e.className = 'text'
});


// ## Partie 2.2 Ajout d'attribut et de leurs valeurs
// ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding
let exo_10 = document.querySelector('section')
exo_10.classList = 'margin-bottom border-black padding'


// ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding
let exo_11 = document.querySelectorAll('section')[1]
exo_11.classList = 'margin-top border-black padding'


// ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px
let exo_12 = document.querySelector('section div')
exo_12.style = 'background-color:blue ;border:solid ; height:20px; width:20px;'

console.log(document.querySelectorAll('section'))