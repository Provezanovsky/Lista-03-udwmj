function calcularArea() {
    const raio = Number(document.getElementById("raio").value);
    const resultado = document.getElementById("resultado");

    if (raio <= 0) {
        resultado.textContent = "Informe um raio maior que zero.";
        return;
    }

    const area = Math.PI * (raio ** 2);

    resultado.textContent = `Área do círculo: ${area.toFixed(2)}`;
}
