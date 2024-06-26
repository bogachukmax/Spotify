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
    const final = document.querySelector('.final')
    passCreate.classList.add('displayNone')
    about.classList.add('displayNone')
    final.classList.add('displayNone')
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
                } else{
                    emailReg.style.borderColor = `lightgray`
                    forHr.classList.add('displayNone')
                    int.classList.add('displayNone')
                    forHr2.classList.add('displayNone')
                    backToLog.classList.add('displayNone')
                    regInps.classList.add('displayNone')
                    textReg.classList.add('displayNone')
                    passCreate.classList.add('displayFlex')
                    button.classList.add('displayNone')
                    lines.classList.add('displayFlex')
                    const dataUser = {email: a}
                    resolve(dataUser)
                }
                emailReg.value = ''
            })
        })
    })

    .then((dataUser) => {
        return new Promise((resolve, reject) => {
            const input = document.getElementById('passRegInp')
            const button = document.getElementById('regNext2')
            const round1 = document.querySelector('.rnd_1')
            const round2 = document.querySelector('.rnd_2')
            const round3 = document.querySelector('.rnd_3')
            const back = document.querySelector('.semiSquare')
            button.classList.add('displayBlock')
            

            back.addEventListener('click', () => {
                const button2 = document.getElementById('regNext')
                const button3 = document.getElementById('regNext3')
                forHr.classList.remove('displayNone')
                int.classList.remove('displayNone')
                forHr2.classList.remove('displayNone')
                backToLog.classList.remove('displayNone')
                regInps.classList.remove('displayNone')
                textReg.classList.remove('displayNone')
                passCreate.classList.remove('displayFlex')
                passCreate.classList.add('displayNone')
                button2.classList.remove('displayNone')
                button3.classList.add('displayNone')
                lines.classList.remove('displayFlex')
                about.classList.add('displayNone')
            })

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
                    passCreate.classList.remove('displayFlex')
                    passCreate.classList.add('displayNone')
                    about.classList.add('displayFlex')
                    button.classList.remove('displayBlock')
                    button.classList.add('displayNone')
                }
                input.value = ``
            })

        })
    })

    .then((dataUser) => {
        return new Promise((resolve, reject) => {
            const dynamic = parseInt(line2.style.width)
            line2.style.width = `${dynamic + 140}px`

            const input = document.getElementById('userNameReg')
            const button = document.getElementById('regNext3')
            const day = document.getElementById('day')
            const year = document.getElementById('year')
            const selector = document.getElementById('selector')
            const error = document.getElementById('forError2')
            const error2 = document.getElementById('forError3')
            const error3 = document.getElementById('forError5')
            const option1 = document.getElementById('option1')
            const option2 = document.getElementById('option2')
            const label = document.getElementById('label1')
            const label2 = document.getElementById('label2')
            const back = document.querySelector('.semiSquare2')
            button.classList.add('displayBlock')
            
            
            back.addEventListener('click', () => {
                const button = document.getElementById('regNext2')
                passCreate.classList.remove('displayNone')
                passCreate.classList.add('displayFlex')
                about.classList.remove('displayFlex')
                about.classList.add('displayNone')
                button.classList.remove('displayBlock')
                button.classList.add('displayBlock')
                line2.style.width = `${(dynamic + 140) - 140}px`
            })

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
                let currentYear = new Date().getFullYear()
                let a = input.value
                let b = +day.value
                let c = +selector.value
                let d = +year.value
                let s;
                label.style.color = `white`
                label2.style.color = `white`

                if(option1.checked){
                    s = 'man'
                } else if(option2.checked){
                    s = 'woman'
                } else{
                    label.style.color = `red`
                    label2.style.color = `red`
                }
                

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

                for(let i = 0; i <= 13; i++){
                    if(d === (currentYear - i)){
                        error3.style.display = `block`
                        return
                    }
                    error3.style.display = `none`
                }
            

                if(d > currentYear || b < 1 || b > 31){
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
                dataUser.userName = a
                dataUser.dateOfBirth = `${b}.${c}.${d}`
                dataUser.sex = s
                final.classList.remove('displayNone')
                final.classList.add('displayBlock')
                about.classList.remove('displayFlex')
                about.classList.add('displayNone')
                resolve(dataUser)
                option1.checked = false
                option2.checked = false
                input.value = ''
                day.value = ''
                selector.value = 0
                year.value = ''
            })
        })
    })

    .then((dataUser) => {
        return new Promise((resolve, reject) => {
            const dynamic = parseInt(line2.style.width)
            line2.style.width = `${dynamic + 140}px`
            const check = document.getElementById('check1')
            const check2 = document.getElementById('check2')
            const check3 = document.getElementById('check3')
            const button = document.getElementById('singUpBtn')
            const error = document.getElementById('forError4')
            const back = document.querySelector('.semiSquare3')

            back.addEventListener('click', () => {
                const button = document.getElementById('regNext3')
                final.classList.remove('displayBlock')
                final.classList.add('displayNone')
                about.classList.remove('displayNone')
                about.classList.add('displayFlex')
                button.classList.remove('displayNone')
                button.classList.add('displayBlock')
                line2.style.width = `${(dynamic + 140) - 140}px`
            })

            button.addEventListener('click', () => {
                if(check.checked && check2.checked && check3.checked){
                    error.style.display = `none`
                    localStorage.setItem('userData', JSON.stringify(dataUser))
                    location.href = '../html/main.html'
                    resolve('Succes Reg!')
                } else{
                    error.style.display = `block`
                }
            })
            check.checked = false
            check2.checked = false
            check3.checked = false
        })
    })

    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Final!');
    })
})
