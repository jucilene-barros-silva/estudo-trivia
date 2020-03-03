//perguntar a idade por meio do prompt//
let name = prompt ("Olá, qual é o seu nome?" , "Name:");

//Mostar o nome na página//
alert ("Olá " +name);

//Pergunta se deseja jogar//
let play = prompt ("Escreva o número para jogar?\n 1 - Sim\n 2 - Não")


if(play=="1"){   
  
  //1 Pergunta//

  let start= prompt("1- O que significa HTML?\n a)Hyper Text Markup Language\n b)Hypo Text Markup Language\n c)Hiper Text Markup Language\n d)Hiper Text Markup Language\n e)Hiper text marcup Language");


    //se a resposta for "a" Correta//
    let answer1 = "a"

    if (answer1== "a") {
         document.write("Resposta correta")    
     }

     //se a resposta for diferente de "a"//

     else if (answer1!="a") {
     document.write("Resposta incorreta")}

     
     //2 Pergunta//
     let start2= prompt("2- O HTML5 se refere a qual versão? \n a)Primeira Versão \n b)Terceira Versão \n c)Segunda Versão \n d)Última Versão \n e)Quarta Versão");
     
     let answer2 = "d"

     //se a resposta for "d" Correta//
     if (answer2== "d") {
          document.write("Resposta correta")}


     //se a resposta for diferente de "d"//
      else if (answer2!="d") {
         document.write("Resposta incorreta")}


         //3 Pergunta//
         let start3= prompt("3- O que são Formulários? \n a)São uma forma unitária de solicitar informação ao usuário \n b)São uma forma complexa de solicitar informaçõa ao usuário  \n c)São uma forma simples de solicitar informaçõa ao usuário  \n d)São uma forma bilateral de solicitar informaçõa ao usuário  \n e)São uma forma ativa de solicitar informaçõa ao usuário");

         let answer3= "c"

         //se a resposta for "c" Correta//
if (answer3== "c") {
    document.write("Resposta correta")
   }

//se a resposta for diferente de "c"//
else if (answer3!="c") {
   document.write("Resposta incorreta")}

}

     


else if(play=="2")
    { 
     alert("Agradecemos a sua visita")}