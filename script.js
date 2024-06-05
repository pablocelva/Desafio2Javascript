// Ejercicio 1 Imagen borde rojo con efecto toggle usando condiciones
const botonBorde = document.querySelector("#boton-borde")

botonBorde.addEventListener("click", () => {
    const imagenBorde = document.querySelector("#imagen-borde")
    const currentBorderStyle = imagenBorde.style.border

    if (currentBorderStyle === "2px solid red") {
        imagenBorde.style.border = "none"
    } else {
        imagenBorde.style.border = "2px solid red"
    }
})

// Ejercicio 1 con uso de clases y toggle, para aprender mas que nada
/*const botonBorde = document.querySelector("#boton-borde")
const imagenBorde = document.querySelector("#imagen-borde")
botonBorde.addEventListener("click", () => {
    imagenBorde.classList.toggle("borde-rojo");
})*/

// Ejercicio 2 Stickers y cantidad
const btnCantidad = document.querySelector("#btn-cantidad")

btnCantidad.addEventListener("click", () => {
    const sticker1 = Number(document.querySelector("#cantidad-sticker1").value)
    const sticker2 = Number(document.querySelector("#cantidad-sticker2").value)
    const sticker3 = Number(document.querySelector("#cantidad-sticker3").value)
    const alertaCantidad = document.querySelector("#alerta-cantidad")
    const totalStickers = sticker1 + sticker2 + sticker3

    if (totalStickers > 10) {
        alertaCantidad.innerHTML = "Llevas demasiados stickers"
    } else {
        alertaCantidad.innerHTML = "Llevas " + totalStickers + " stickers"
    }
})

// Ejercicio 3 Select password
const btnPassword = document.querySelector("#btn-password")

btnPassword.addEventListener("click", () => {
    const digito1 = document.querySelector('#digito1').value
    const digito2 = document.querySelector('#digito2').value 
    const digito3 = document.querySelector('#digito3').value 
    const alertaPassword = document.querySelector("#alerta-password")
    const password = digito1 + digito2 + digito3

    if (password === "911") {
        alertaPassword.innerHTML = "Password 1 correcto"
    } else if (password === "714") {
        alertaPassword.innerHTML = "Password 2 correcto"
    } else {
        alertaPassword.innerHTML = "Password incorrecto"
    }
})