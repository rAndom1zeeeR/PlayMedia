export default function setHistoryQuery(keyword) {
	let { historyQuery } = localStorage
	if (historyQuery === undefined) {
		localStorage.historyQuery = keyword
	} else {
		historyQuery =
			keyword +
			'|' +
			historyQuery
				.split('|')
				.filter(e => e !== keyword)
				.join('|')
		localStorage.historyQuery = historyQuery
	}
}

export function getHistoryQuery() {
	return localStorage.getItem('historyQuery').split('|')
}
