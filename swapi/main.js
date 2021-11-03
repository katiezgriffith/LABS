let resButton = document.querySelector('#resident')

resButton.addEventListener('click', () => {

console.log("Submitted")
})

axios.get('http://localhost:3000/say-hello').then((res) => {