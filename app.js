const main = document.querySelector('.main')
const divsArr = [...document.querySelectorAll('.main div')]
const res = document.getElementById('alert')
const alertBox = document.getElementById('alertBox')

const bomb = '<img src="./bomb.png">'

let indexArr = []
let imagesArr = []


const funcForRandomMine = () => {
    while(indexArr.length < 7) {
        const random = Math.round(Math.random() * 99)
        if(!indexArr.includes(random)) {
            divsArr[random].innerHTML = bomb
            indexArr.push(random)
            imagesArr = [...document.querySelectorAll('.main div img')]        
        }
    }
console.log(imagesArr);

}


let indexesOfChoosed = []
let countOfRightChoose = 0

main.addEventListener('click',function  play(event) {
    const target = event.target
    if (target.tagName === 'DIV') {
        if(target.innerHTML === bomb) {
            res.innerText = 'You Lose!'
            res.classList.add("shadowForLose")
            for(let i = 0; i < imagesArr.length; i++) {
                imagesArr[i].style.opacity = '1'
            }
            alertBox.style.display = 'flex'
        } else if(divsArr[divsArr.indexOf(target) - 10]?.innerHTML === bomb || 
        divsArr[divsArr.indexOf(target) + 10]?.innerHTML === bomb ||
        divsArr[divsArr.indexOf(target) - 1]?.innerHTML === bomb ||
        divsArr[divsArr.indexOf(target) + 1]?.innerHTML === bomb) {
            target.style.backgroundColor = 'orange'
            if(!indexesOfChoosed.includes(divsArr.indexOf(target))) {
                countOfRightChoose++
                indexesOfChoosed.push(divsArr.indexOf(target))
            }
        } else {
            target.style.backgroundColor = 'green'
            if(!indexesOfChoosed.includes(divsArr.indexOf(target))) {
                countOfRightChoose++
                indexesOfChoosed.push(divsArr.indexOf(target))
            }
        }
        if(countOfRightChoose === 93) {
            res.innerText = 'You Win!'
            res.classList.add("shadowForWin")
            alertBox.style.display = 'flex'
        }
        console.log(countOfRightChoose);
        
    }
})

const playAgain = document.getElementById('playAgain')

playAgain.addEventListener('click', () => {
    divsArr.forEach(el => {
        el.innerHTML = ''
        el.style.backgroundColor = 'transparent'
    })
    alertBox.style.display = 'none'
    indexArr = []
    imagesArr = []
    indexesOfChoosed = []
    countOfRightChoose = 0
    funcForRandomMine()

})

document.addEventListener('DOMContentLoaded', () => {
    funcForRandomMine()
})