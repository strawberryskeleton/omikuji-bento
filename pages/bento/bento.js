
const foodItems = document.querySelectorAll('.food')

foodItems.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(item.classList)
        
        let fortune = getRandomFortune()
        console.log(fortune)

        
    })
})


function getRandomFortune () {
    const fortuneList = ["1", "2", "3", "4", "5"]
    
    return fortuneList[Math.floor(Math.random() * fortuneList.length)]
}