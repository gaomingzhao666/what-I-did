window.addEventListener('DOMContentLoaded', () => {
	const deviceWid = window.innerWidth
	console.log(deviceWid)
	if (deviceWid < 768) {
		alert('このサイトはPC向けに作成されています、携帯は見えるけど見え難いです')
	}
})
