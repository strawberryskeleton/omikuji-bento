
const foodItems = document.querySelectorAll('.food')
const scrollDiv = document.getElementById('scroll')
const fortuneText = document.getElementById('fortune-text')

foodItems.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(item.classList)
        
        let fortuneMessage = getRandomFortune()
        console.log(fortuneMessage)

        showFortuneScroll(fortuneMessage)

    })
})


function getRandomFortune () {
    const fortuneList = ["1", "2", "3", "4", "5"]
    
    return fortuneList[Math.floor(Math.random() * fortuneList.length)]
}


function showFortuneScroll (message) {
    fortuneText.innerText = message

    scrollDiv.style.display = 'flex'

    scrollDiv.addEventListener('click', () => {
        scrollDiv.style.display = 'none'
    })
}