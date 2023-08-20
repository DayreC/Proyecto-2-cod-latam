//interactividad del boton deplegable del menu//

const menuDesplegable = document.querySelector('#boton-menu')

menuDesplegable.addEventListener('click', function(){
document.body.classList.toggle('mobile-menu-active')
}
)

//función para cambiar a modo oscuro//

const btnswitch =document.querySelector('.switch')

btnswitch.addEventListener('click', function() {
    document.body.classList.toggle('dark')
    btnswitch.classList.toggle('active')
})