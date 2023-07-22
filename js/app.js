const spiderImage = document.querySelector('img')
const changeSpeed = document.querySelector('#change-speed')
let innerWidth = window.innerWidth - 50
let innerHeigth = window.innerHeight - 50
let natijaEl = document.getElementById('natija')

let speed = 900

changeSpeed.addEventListener('change', () => {
    speed = changeSpeed.value

    // tutmoq()
})

/*
function tutmoq() {
    setInterval(() => {
        let top = Math.random() * innerWidth
        let left = Math.random() * innerHeigth
    
        spiderImage.style = `
            transition: 0.3s;
            position: absolute;
            left: ${top}px;
            top: ${left}px;
        `
    }, speed)
}
tutmoq()
*/

setInterval(() => {
    let top = Math.random() * innerWidth
    let left = Math.random() * innerHeigth

    spiderImage.style = `
        transition: 0.3s;
        position: absolute;
        left: ${top}px;
        top: ${left}px;
    `
}, speed)

let bal = 0
spiderImage.addEventListener('click', (e) => {
    bal += 1
    natijaEl.textContent = bal
})