function calcularJurosMensais() {
    var var1 = document.querySelector("#valor-investido");
    var var2 = document.querySelector("#rentabilidade-anual");

    var valorInvestido = var1.value;
    var rentabilidadeAnual = var2.value;

    var rentabilidadeMensal = (rentabilidadeAnual/12)/100;
    var resultado = rentabilidadeMensal * valorInvestido;
    
    var diferenca = rentabilidadeMensal - resultado;
    var desconto = diferenca * 0.225;
    resultado = desconto - diferenca;

    alert('Com desconto do I.R você receberá: R$' + resultado.toFixed(2) + ' por mês');
}