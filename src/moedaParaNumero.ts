/**
 *
 * @param moeda
 * @receive String
 * @returns Number
 */

export default function moedaParaNumero(moeda: string): number | null {
	const numero = +moeda.replaceAll('.', '').replace(',', '.');
	return isNaN(numero) ? null : numero;
}
