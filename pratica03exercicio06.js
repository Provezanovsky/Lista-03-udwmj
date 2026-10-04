function calcularMontante() {
    const capital = Number(document.getElementById("capital").value);
    const taxaPercentual = Number(document.getElementById("taxa").value);
    const tempo = Number(document.getElementById("tempo").value);
    const resultado = document.getElementById("resultado");

    if (capital <= 0 || taxaPercentual < 0 || tempo < 0) {
        resultado.textContent = "Informe valores válidos para o cálculo.";
        return;
    }

    const taxa = taxaPercentual / 100;
    const montante = capital * ((1 + taxa) ** tempo);

    resultado.textContent = `Montante final: R$ ${montante.toFixed(2)}`;
}
