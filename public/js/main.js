function tabs() {
	const tabs = document.querySelectorAll('.technical__tab')
	tabs.forEach(tab => {
		tab.addEventListener('click', function (event) {
			event.preventDefault()
			const attr = tab.getAttribute('data-tab')

			tabs.forEach(element => element.classList.remove('is-actived'))
			tab.classList.add('is-actived')

			document
				.querySelectorAll('.technical__content')
				.forEach(element => element.classList.remove('is-actived'))
			document
				.querySelector('.technical__content[data-content="' + attr + '"]')
				.classList.add('is-actived')
		})
	})
}

document.addEventListener('DOMContentLoaded', function () {
	tabs()
})
