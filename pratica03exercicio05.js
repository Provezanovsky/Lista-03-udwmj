function calcularVolume() {
    const raio = Number(document.getElementById("raio").value);
    const resultado = document.getElementById("resultado");

    if (raio <= 0) {
        resultado.textContent = "Informe um raio maior que zero.";
        return;
    }

    const volume = (4 / 3) * Math.PI * (raio ** 3);

    resultado.textContent = `Volume da esfera: ${volume.toFixed(2)}`;
}
