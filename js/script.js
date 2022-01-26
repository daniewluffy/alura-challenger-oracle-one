var buttonCodificador = document.querySelector('.codificador');
var buttonDecodificador = document.querySelector('.descodificador');

var input = document.querySelector("input");
    input.focus();

var textoResposta = document.querySelector("textarea");

var textoCodificado = '';

function codificador(){
    for(var i = 0;i < input.value.length;i++){
            textoCodificado = input.value.toLocaleLowerCase().replace(/[e\é\ê\è]/g,"enter").replace(/[i\í\ì]]/g,"imes")
            .replace(/[a\á\à\â]/g,"ai").replace(/[o\ó\ò\ô]/g,"ober").replace(/[u\ú\ù\û]/g,"ufat").replace(/[0-9!]/g,'');
    
            textoResposta.value = textoCodificado;
    }
} 

function decodificador(){
    palavrasChaves = ['ai','enter','imes','ober','ufat'];
    var verificar = palavrasChaves.some(valor => input.value.includes(valor));
   
    if(verificar){
        for(var i = 0;i < input.value.length;i++){
            textoCodificado = input.value.toLocaleLowerCase().replace(/enter/g,"e").replace(/imes/g,"i")
            .replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u").replace(/[0-9!]/g,'');

            textoResposta.value = textoCodificado;    
        } 
    }else if(!verificar){
        textoResposta.value = "NENHUMA MENSAGEM CRIPTOGRAFADA ENCONTRADA"; 
    }
}

function copiarTexto() {
    var texto = document.querySelector("#area-resposta");
    navigator.clipboard.writeText(texto.value);
    texto.value = "";
}
    
buttonCodificador.onclick = codificador;
buttonDecodificador.onclick = decodificador;