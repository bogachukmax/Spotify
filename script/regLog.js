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

            const input = document.getElementById('userNameReg')
            const button = document.getElementById('regNext')
            const day = document.getElementById('day')
            const year = document.getElementById('year')
            const selector = document.getElementById('selector')
            const error = document.getElementById('forError2')
            const error2 = document.getElementById('forError3')
            const option1 = document.getElementById('option1')
            const option2 = document.getElementById('option1')
            function checkAndDisable(selectedRadio) {
                const allRadios = document.querySelectorAll('input[type="radio"]');
                allRadios.forEach(radio => {
                    if (radio !== selectedRadio) {
                        radio.disabled = true;
                    }
                });
                selectedRadio.checked = true;
            }

            day.addEventListener('input', () => {
                if(isNaN(day.value) || day.value.length > 2){
                    day.value = ''
                    return
                }
            })
            year.addEventListener('input', () => {
                if(isNaN(year.value)){
                    year.value = ''
                    return
                }
            })

            button.addEventListener('click', () =>{
                let a = input.value
                let b = +day.value
                let c = +selector.value
                let d = +year.value
                let e = +option1.value
                let f = +option2.value
                let s;

                if(a.length === 0){
                    error.style.display = `block`
                    input.style.borderColor = `red`
                } else{
                    error.style.display = `none`
                    input.style.borderColor = `lightgray`
                }

                if(isNaN(d)){
                    error2.style.display = `none`
                    return
                } else {
                    error2.style.display = `block`
                }
                
                if(d.length === 0 || c === 0 || d.length === 0){
                    error2.style.display = `block`
                    return
                } else{
                    error2.style.display = `none`
                }
                
                if(d > 2024 || b < 1 || b > 31){
                    error2.style.display = `block`
                    return
                } else{
                    error2.style.display = `none`
                }

                if(c === 2 && b > 28 && !((d % 4 === 0 && d % 100 !== 0) || (d % 400 === 0))){
                    error2.style.display = `block`
                    return
                } else if(((d % 4 === 0 && d % 100 !== 0) || (d % 400 === 0)) && c === 2 && b > 29){
                    error2.style.display = `block`
                    return
                } else{
                    error2.style.display = `none`
                }
                if(c === (1 || 3 || 5 || 7 || 8 || 10 || 12) && b > 31){
                    error2.style.display = `block`
                    return
                } else{
                    error2.style.display = `none`
                }
                if(c === (4 || 6 || 9 || 11) && b > 30){
                    error2.style.display = `block`
                    return
                }else{
                    error2.style.display = `none`
                }

                if(option1.checked === true){
                    return s = 'man'
                } else{
                    console.log('error');
                }
                if(option1.checked === true){
                    return s = 'woman'
                } else{
                    console.log('error');
                }
                



                input.value = ''
                day.value = ''
                selector.value = 0
                year.value = ''
            })
            console.log(dataUser)
        })
    })


    .catch((err) => {
        console.log(err);
    })
})
