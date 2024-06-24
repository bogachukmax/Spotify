document.addEventListener('DOMContentLoaded', () => {
    const logInBtn = document.getElementById('logBtn')
    const toReg = document.getElementById('swapToRegister')
    const textReg = document.querySelector('.textReg')
    const regInps = document.querySelector('.regInps')
    const forHr = document.querySelector('.forHr')
    const int = document.querySelector('.int')
    const forHr2 = document.querySelector('.forHr2')
    const backToLog = document.querySelector('.backToLog')
    const passCreate = document.querySelector('.passCreate')

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            reject('Error')
        }, 0);
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            const emailReg = document.getElementById('emailRegInp')
            const button = document.getElementById('regNext')
            const error = document.getElementById('forError')
            button.addEventListener('click', () => {
                let a = emailReg.value
                if(!a.includes('@') || a.length < 5){
                    emailReg.style.borderColor = `red`
                    error.style.display = `block`
                    reject('error')
                } else{
                    emailReg.style.borderColor = `lightgray`
                    error.style.display = `none`
                    forHr.style.display = `none`
                    int.style.display = `none`
                    forHr2.style.display = `none`
                    backToLog.style.display = `none`
                    regInps.style.display = `none`
                    textReg.style.display = `none`
                    passCreate.style.display = `flex`
                    const dataUser = {email: a}
                    resolve(dataUser)
                }
            })
        })
    })

    .then((dataUser) => {
        return new Promise((resolve, reject) => {
            
        })
    })

    


    .catch((err) => {
        console.log(err);
    })
})
