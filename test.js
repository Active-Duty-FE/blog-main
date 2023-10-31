const btn = document.getElementById('#btn')
const form = document.getElementById('#form')

btn.onclick = function (e) {
  e.preventdefault()
  form.onsubmit()
}

const topBtn = document.querySelector('.top-btn')
topBtn.onclick = function () {
  e.preventdefault()
  window.scrollTo(0, 0)
}

window.addEventListener('scroll', function () {
  let top = this.scrollTop
  if (top > 100) {
    topBtn.style.display = 'block'
  } else {
    topBtn.style.display = 'none'
  }
})
