function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

const img = document.querySelector("#profile img")

if(html.classList.contains('light')) {
 img.setAttribute('src', './Assets/avatar-light.png')
 img.setAttribute('alt', 'Cadu Polidori de touca e casaco nos cânions de Cambará do Sul')
} else {
  img.setAttribute('src', './Assets/avatar.png')
  img.setAttribute('alt', 'Cadu Polidori de pijamas abraçado em uma garrafa de Natasha')
}

}





