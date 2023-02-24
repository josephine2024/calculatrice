// Selection des Element
let display1= document.querySelector('.display-1');
let display2= document.querySelector('.display-2');
let temp_result= document.querySelector('.temp-result');
let nombre= document.querySelectorAll('.nombre');
let operation = document.querySelectorAll('.operation');
let egal= document.querySelector('.egal');
let button_c= document.querySelector('.btn-c');
let button_ce= document.querySelector('.btn-ce');

//Verification dans la console

// console.log(operation);
//Declaration des variables 

let dis1NUm =''; // Pour stocker le nbre 1
let dis2NUm =''; // Pour stocker le nbre 2
let result = null; // Pour stocker le resultat 
let lastOperation = ''; // Pour stocker  la dernière operation
let haveDot = false; // Booleen decimal

//Boucle pour parcourir tous les nombres

nombre.forEach(number => {
    number.addEventListener('click', (e) =>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }
        else if(e.target.innerText ==='.' && haveDot)
        {
            return;
        }

        dis2NUm += e.target.innerText;
        display2.innerText = dis2NUm; //Affichage des nombres dans calcul

        // console.log(dis2NUm);
    })
});

// BOUCLE POUR PARCOURIR LES operation
operation.forEach(operate => {
    operate.addEventListener('click', (e) =>{
        if(!dis2NUm) return;
        haveDot = false; //BOOLEEN à faux pour le nombre 2
        const operationName = e.target.innerText;

        if(dis1NUm && dis2NUm && lastOperation){
            calculatrice();
        }
        else{
            result = parseFloat(dis2NUm);
        }
        netoyerVar(operationName); //Variable de nettoyage
        lastOperation = operationName; //STOCKE OPERATIONS EN COURS
        
    })

});
// FONCTION PERMETTANT DE TOUT NETTOYER

function netoyerVar(name=''){
    dis1NUm += dis2NUm + ' ' + name + ' ';
    display1.innerText =dis1NUm;
    display2.innerText = ' ';
    dis2NUm= '';
    temp_result.innerText = result;
}

//FONCTION PRINCIPALE DE LA CALCULATRICE
function calculatrice(){
    if(lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2NUm);
    }
    else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2NUm);
    }
    else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2NUm);

    }
    else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2NUm);
    }
    else if(lastOperation === '%'){
        result =parseFloat(result) % parseFloat(dis2NUm);
    }
}

//FONCTION EGALITE
 
egal.addEventListener('click', () =>{
 if(!dis1NUm || !dis2NUm){
    return;
 }  
 haveDot = false;
 calculatrice();
 netoyerVar();
 display2.innerText = result;
 temp_result.innerText ='';
 dis2NUm = result;
 dis1NUm ='';
})
 //FONCTION POUR TOUT EFFACER
 button_ce.addEventListener('click', () =>{
    // Effacer tout les elements
    dis1NUm ='';
    dis2NUm ='';
    display1.innerText ='';
    display2.innerText ='';
    result ='';
    temp_result.innerText ='';
 })
  //Fonction pour effacer le dernier element saisi

  button_c.addEventListener('click', () =>{
    display2.innerText= '';
    dis2NUm= '';
   
  })
