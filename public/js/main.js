// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de récupération de contenu text, mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Affiche le contenu textuel du second h1
console.log(document.getElementsByTagName('h1')[1].textContent);
// ### 2. Affiche le contenu textuel du dernier li
console.log(document.getElementsByTagName('li')[document.getElementsByTagName('li').length -1].textContent);
// ### 3. Affiche le contenu textuel du premier p en majuscule
// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule