// -Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.

var evento=[]
var nome="Pessoa"
var qtdePeople=0;
var dateNasc= new Date('1989-04-06')
var dateEvento = new Date('2021-09-21');
var dateHoje = new Date();
var num=0

//console.log(dateEvento)
//console.log(dateHoje)

//DATA DO EVENTO
function testaData(){
if(dateEvento>dateHoje){
    console.log("DATA LIBERADA")
    return true
  }else{
    console.log("Evento não pode ser cadastrado #motivo data inválida")
    return false
  }
}

//PELA IDADE
function testaIdade(){
  if(dateNasc-dateHoje<=18){
    console.log("Idade permitida")
    return true
  }else{
    console.log("Cadastro não permitido motivo #idade")
    return false
  }
}

//QUANTIDADE DE PESSOAS
function testaQuantidadePessoa(){
  if(qtdePeople<=100){
    console.log("Cadastro Liberado")
    return true
  }else{
    console.log("Limite atingido")
    return false
    }
}

  
function Cadastrar(){
  if(testaData()==true && testaIdade()==true && testaQuantidadePessoa()==true){
    evento.push(nome+" "+qtdePeople,dateEvento)
  }
}

while(qtdePeople<=103){
  if(qtdePeople<=100){
  Cadastrar()
  console.log("Cadastrando Pessoa "+qtdePeople)
  }
  qtdePeople++
 }

console.log("IMPRIMINDO LISTA DE PESSOAS E EVENTOS")
for(let j=0; j<evento.length;j++){
  console.log(evento[j])
}

