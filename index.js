const fg_red="\x1b[31m"
const reset_color="\x1b[0m"
const fg_blue="\x1b[44m"
console.log(fg_red,"Mensagem que deseja em vermelho",reset_color)
console.log(fg_blue,"Background roxo")
//https://telepathy.freedesktop.org/doc/telepathy-glib/telepathy-glib-debug-ansi.html

let listaPecas=[]
// let listaPecas=['peça 1','peça 2','peça 3','peça 4','peça 5','peça 6',
// 'peça 7','peça 8','peça 9','peça 10','peça 11']

let nomePeca='Peça Teste'
// let nomePeca='pe'

let pesoPeca=300
let podeCadastrar=true

if(pesoPeca<100){
    console.log("Não há possibilidade de cadastrar!")
    podeCadastrar=false
}

if(listaPecas.length>10){
    console.log("Limite de peças atingidos!")
    podeCadastrar=false
}

if(nomePeca.length<3){
    console.log("Tamanho de letras inferior ao permitido!")
    podeCadastrar=false
}

if(podeCadastrar){
    listaPecas.push(nomePeca)
    console.log("Cadastramento efetuado com sucesso!")
}else{
    console.log("Houve problemas para cadastrar a peça.")
}

console.log("Listando as peças cadatradas.")
for (let i = 0; i < listaPecas.length;i++){
    console.log(listaPecas[i])
}

