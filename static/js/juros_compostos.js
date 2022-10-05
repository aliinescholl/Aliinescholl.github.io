function CalcularJurosCompostos(){
    var var1 = document.getElementById('#rentabilidade');
    var var2 = document.getElementById('#valor-investido');
    var var3 = document.getElementsByClassName('.option-rentabilidade');
    var rentabilidade = parseFloat(var1.value);
    var valor_investido = parseFloat(var2.value);;
    var option_valor = parseInt(var3.value);

    if (option_valor = 1){
        var rentabilidade = rentabilidade/12;
    }
    else{
        
    }
}