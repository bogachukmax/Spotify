document.addEventListener('DOMContentLoaded', () => {
    const logInBtn = document.getElementById('logBtn')
    const toReg = document.getElementById('swapToRegister')
    const textReg = document.querySelector('.textReg')
    const forHr = document.querySelector('.forHr')
    const int = document.getElementById('.int')
    const forHr2 = document.querySelector('.forHr2')
    const backToLog = document.querySelector('.backToLog')

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            reject('Error')
        }, 2000);
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            const emailReg = document.getElementById('emailRegInp')
            const button = document.getElementById('regNext')
            const error = document.getElementById('forError')
            button.addEventListener('click', () => {
                let a = button.value
                if(!a.includes('@')){
                    error.textContent = `E-mail must contain '@'`
                }
            })
        })
    })

    regUser(emailReg.value)
})