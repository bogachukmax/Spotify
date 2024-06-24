document.addEventListener('DOMContentLoaded', () => {
    const logInBtn = document.getElementById('logBtn')
    const toReg = document.getElementById('swapToRegister')

    toReg.addEventListener('click', () => {
        logPage.classList.toggle('displayNone')
        regPage.classList.toggle('displayBlock')
    })
})