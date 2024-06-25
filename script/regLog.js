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
    const lines = document.querySelector('.lines')
    const line2 = document.querySelector('.line2')
    const about = document.querySelector('.about')

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
            line2.style.width = `140px`
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
            const input = document.getElementById('passRegInp')
            const button = document.getElementById('regNext')
            const round1 = document.querySelector('.rnd_1')
            const round2 = document.querySelector('.rnd_2')
            const round3 = document.querySelector('.rnd_3')
            lines.style.display = `flex`
            input.addEventListener('input', () => {
                let a = input.value
                const regex = /[0-9#?!&]/
                const letterRegex = /[a-zA-Z]/

                if(letterRegex.test(a)){
                    round1.style.backgroundColor = `green`
                    round1.textContent = `✓`
                } else{
                    round1.style.backgroundColor = `#121212`
                    round1.textContent = ``
                }
                if(!regex.test(a)){
                    round2.textContent = ``
                    round2.style.backgroundColor = `#121212`
                } else{
                    round2.textContent = `✓`
                    round2.style.backgroundColor = `green`
                }
                if(a.length >= 10){
                    round3.textContent = `✓`
                    round3.style.backgroundColor = `green`
                } else{
                    round3.textContent = ``
                    round3.style.backgroundColor = `#121212`
                }
                

            })

            button.addEventListener('click', () => {
                let a = input.value
                const regex = /[0-9#?!&]/ 
                const letterRegex = /[a-zA-Z]/
                if(letterRegex.test(a) && regex.test(a) && a.length >= 10){
                    dataUser.password = a
                    resolve(dataUser)
                } else{
                    reject('Error')
                }
            })
        })
    })

    .then((dataUser) => {
        return new Promise((resolve, reject) => {
            passCreate.style.display = `none`
            about.style.display = `flex`
            const dynamic = parseInt(line2.style.width)
            line2.style.width = `${dynamic + 140}px`

            
            console.log(dataUser)
        })
    })


    .catch((err) => {
        console.log(err);
    })
})
