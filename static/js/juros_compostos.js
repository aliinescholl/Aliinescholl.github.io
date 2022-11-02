function CalcularJurosCompostos(){
    var var1 = document.getElementById('valor-investido');
    var var3 = document.getElementById('tempo');
    var var4 = document.getElementsByClassName('option-rentabilidade');
    var var5 = document.getElementById('rentabilidade');

    var rentabilidade = parseFloat(var5.value);
    var valor_investido = parseFloat(var1.value);
    var tempo = parseFloat(var3.value);
    var rentabilidade = parseFloat(var4.value);

    var juros = (1+rentabilidade)**tempo;
    
    var tempo = tempo * 30;
    var desconto = 0;
    var resultado = valor_investido*juros;
    var diferenca = resultado - valor_investido;

    if (rentabilidade = 1) {
        var rentabilidade = rentabilidade/100;
    }
    else{
        var rentabilidade = (rentabilidade/12)/10;
    }

    if (tempo<=180){
        desconto = diferenca * 0.225;
        resultado = resultado - desconto;
        alert('Com desconto do I.R você receberá: R$' + resultado.toFixed(2));
    }

    else if(tempo<=181){
        desconto = diferenca * 0.20;
        resultado = resultado - desconto;
        alert('Com desconto do I.R você receberá: R$' + resultado.toFixed(2));
    }

    else if (tempo<=360){
        desconto = diferenca * 0.175;
        resultado = resultado - desconto;
        alert('Com desconto do I.R você receberá: R$' + resultado.toFixed(2));
    }

    else{
        desconto = diferenca * 0.15;
        resultado = resultado - desconto;
        alert('Com desconto do I.R você receberá: R$' + resultado.toFixed(2)); 
    }
    
}