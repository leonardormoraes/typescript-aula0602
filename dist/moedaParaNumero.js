export default function moedaParaNumero(moeda) {
    const numero = +moeda.replaceAll('.', '').replace(',', '.');
    return isNaN(numero) ? null : numero;
}
//# sourceMappingURL=moedaParaNumero.js.map