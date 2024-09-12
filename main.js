window.addEventListener('DOMContentLoaded', () => {
	const timeline = new Timeline(document.querySelector('.timeline'), {
		start: 0,
		end: 100,
		values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
	})
})
