
let h1 = document.querySelector('#titulo1')

setInterval(() => {
h1.innerHTML = 'hello world'
h1.style.color = 'green'
h1.style.backgroundColor = 'yellow'
}, 1000)
