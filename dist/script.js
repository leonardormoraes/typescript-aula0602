import Estatisticas from './Estatisticas.js';
import fetchData from './fetchData.js';
import normalizarTransacao from './normalizarTransacao.js';
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json?');
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    preencherTabela(transacoes);
    preencherEstatisticas(transacoes);
}
function preencherLista(lista, containerId) {
    const containerEl = document.getElementById(containerId);
    if (!containerEl)
        return;
    Object.keys(lista).forEach((key) => {
        containerEl.innerHTML += `<p>${key}: ${lista[key]}</p>`;
    });
}
function preencherEstatisticas(transacoes) {
    const data = new Estatisticas(transacoes);
    preencherLista(data.pagamento, 'pagamento');
    preencherLista(data.status, 'status');
    const totalEl = document.querySelector('#total span');
    if (!totalEl)
        return;
    totalEl.innerText = data.total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    const diaEl = document.querySelector('#dia span');
    if (!diaEl)
        return;
    diaEl.innerText = data.melhorDia[0];
    console.log(data);
}
function preencherTabela(transacoes) {
    const tabela = document.querySelector('#transacoes tbody');
    if (!tabela)
        return;
    transacoes.forEach((transacao) => {
        tabela.innerHTML += `
			<tr>
				<td>${transacao.nome}</td>
				<td>${transacao.email}</td>
				<td>R$ ${transacao.moeda}</td>
				<td>${transacao.pagamento}</td>
				<td>${transacao.status}</td>
			</tr>
		`;
    });
}
handleData();
//# sourceMappingURL=script.js.map