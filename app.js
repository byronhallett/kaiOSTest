// ELEMENTS =====================
const text = window.document.getElementById("text")
const mainButton = window.document.getElementById("mainButton")
const secondButton = window.document.getElementById("button2")

const buttons = [mainButton, secondButton]

var state = {
  buttonID: 0,
  contentCounter: 1,
}

// MODELS =======================
const content = [
  "I am the Walrus",
  "I am the WALRUS",
  "I am the EGGNOG",
]

var counter = 0

const increment = (key, limit) => {
  newVal = state[key] + 1 & limit
  state[key] = newVal
}
const decrement = (key, limit) => {
  newVal = state[key] == 0 ? limit - 1 : state[key] - 1
  state[key] = newVal
}

// VCs =========================

window.addEventListener("load", () => {
  text.innerHTML = content[0]
  mainButton.focus()
})

// Button actions
mainButton.addEventListener("touchend", () => {
  decrement(state)
  text.innerHTML = content[counter]
})
secondButton.addEventListener("click", () => {
  increment()
  text.innerHTML = content[counter]
})


// Navigation
window.addEventListener("keyup", e => {
  switch (e.key) {
    case "ArrowUp":
      mainButton.focus()
      break
    case "ArrowDown":
      secondButton.focus()
      break
  }
})
