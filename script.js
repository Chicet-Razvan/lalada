document.querySelector(".hamburger").addEventListener(
"click", () => {
    document.querySelector('.container').classList.toggle('change')
}
)

const section2content = document.querySelector(".section-2")
const zara = document.querySelectorAll('.citate')

window.addEventListener('scroll', () => {
    if (window.pageYOffset + window.innerHeight >= section2content.offsetTop + section2content.offsetHeight/2 + section2content.offsetHeight/4 ) {
        for(i=0;i<zara.length;i++) {
            zara[i].classList.add('event')
        }
        
    }
})

const icons = document.querySelectorAll('.dreapta img')
let l=1
console.log(l)
setInterval(() => {
  l++
  console.log(l)
  const icon = document.querySelector('.dreapta .activ')

  icon.classList.remove('activ')

  if(l >8) {
    icons[0].classList.add('activ')
    l =1;
  }

  else {
    icon.nextElementSibling.classList.add('activ')
  }
},5000)


