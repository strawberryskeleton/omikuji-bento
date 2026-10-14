
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
    const fortuneList = [
        "大吉 (Great Blessing): Extraordinary luck! Your path is clear and success is assured.",
        "中吉 (Middle Blessing): Great progress ahead. Stay steady and trust your instincts.",
        "小吉 (Small Blessing): Gentle good luck. Small daily efforts will bring joyous rewards.",
        "吉 (Blessing): A serene and harmonious period. Kindness will return to you manifold.",
        "末吉 (Future Blessing): Hope lies ahead. Stay patient as your fortune blossoms soon.",
        "末小吉 (Future Small Blessing): Slight hardships now will lead to steady growth tomorrow.",
        "凶 (Misfortune): Exercise caution and reflection. Tie this fortune up to leave bad luck behind.",
        "大凶 (Great Misfortune): A turning point. Let go of the old to welcome a fresh start."
    ]
    
    return fortuneList[Math.floor(Math.random() * fortuneList.length)]
}


function showFortuneScroll (message) {
    fortuneText.innerText = message

    scrollDiv.style.display = 'flex'

    scrollDiv.addEventListener('click', () => {
        scrollDiv.style.display = 'none'
    })
}