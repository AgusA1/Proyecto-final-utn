const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("arial-label" , "Cerrar menu");
    } else {
        navToggle.setAttribute("arial-label" , "Abrir menu");
    }

});

const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#trucazo')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      $buttonMailto.setAttribute('href', `mailto:agusarias2002@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')} fecha de entrega ${form.get('date')}`)
      $buttonMailto.click()
    }