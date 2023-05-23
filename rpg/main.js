//nome do aventureiro
var nomeDoAvt = prompt("Qual o nome do guerreiro em questão?");
var nome = document.getElementById('nome');
nome.innerHTML = nomeDoAvt;

//inventario
var botao = document.getElementById('botao');
var itens = document.getElementById('itens');
botao.addEventListener('click' , ()=>{
    if(itens.classList.contains('fechado')){
        itens.classList.remove('fechado');
    } else {
        itens.classList.add('fechado')
    }
})

//primeira quest
var quest = document.getElementById('quest');
var machado = document.getElementById('machado');
var espada = document.getElementById('espada');
var arma = '0';
var escolha1 = document.getElementById('escolha1');
var escolha2 = document.getElementById('escolha2');
var item1 = document.getElementById('item1');


function primeiraquest(){
    quest.innerHTML = "Você pegou a unica ferramenta que consegue carregar, a floresta ainda é um lugar desconhecido. Um barulho comum quebra o silencio, é um lobo! Ele parece faminto e por causa disso não demonstra muita ameaça, matar ele seria uma boa opção? Fugir é sempre uma opção!"
    machado.innerHTML = ""
    espada.innerHTML= ""
    escolha1.innerHTML = " 1- Atacar o lobo";
    escolha2.innerHTML = "2- Fugir";
    segundaquest()
    }
    

machado.addEventListener('click' , ()=>{
    arma = 1;
    item1.innerHTML = "MACHADO"
    primeiraquest();

    
    
});

espada.addEventListener('click' , ()=>{
     arma = 2;
     item1.innerHTML = "ESPADA";
    primeiraquest();
    
    
} );


//segunda quest

function segundaquest(){
    escolha1.addEventListener('click' , ()=>{
        if(arma === 1){
            var dano = Math.floor(Math.random() * 10);
            if(dano <=1){
                quest.innerHTML ="Você ataca o monstro com seu machado e causa " + dano + " de dano, não foi o suficiente para matar o monstro, voce morreu!";
            }else{
                quest.innerHTML ="Você ataca o monstro com o seu machado e causa " + dano + " de dano, e mata o monstro!"
                terceiraquest();
            }

        }else{
            var dano = Math.floor(Math.random() * 10);
            if(dano <=2){
                quest.innerHTML= "Você ataca o monstro com sua espada e causa " + dano + ", ela não é afiada suficiente e você morre!"
            }else{
                quest.innerHTML ="Você ataca o monstro com sua espada e causa " + dano + " o monstro morre!";
                terceiraquest();
            }
            
        }
    })
    escolha2.addEventListener('click', ()=>{
        if(arma===1){
            quest.innerHTML = "você tenta correr mas seu machado é muito pesado, o monstro te pega, você morreu!";
        } else{
            quest.innerHTML ="você consegue fugir do monstro"
            quartaquest();
        }
        
    })
}






