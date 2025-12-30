function createHeart() {
  const heart = document.createElement("div")
  heart.classList.add("falling-heart")
  heart.innerHTML = "❤"

  heart.style.left = Math.random() * 100 + "%"

  const size = Math.random() * 20 + 15 // Entre 15px y 35px
  heart.style.fontSize = size + "px"

  const duration = Math.random() * 3 + 3 // Entre 3s y 6s
  heart.style.animationDuration = duration + "s"

  const delay = Math.random() * 2
  heart.style.animationDelay = delay + "s"

  const container = document.getElementById("hearts-container")
  if (container) {
    container.appendChild(heart)
  }

  setTimeout(
    () => {
      heart.remove()
    },
    (duration + delay) * 1000,
  )
}

setInterval(createHeart, 400) 

for (let i = 0; i < 10; i++) {
  setTimeout(createHeart, i * 200)
}
