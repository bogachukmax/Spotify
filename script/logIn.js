document.addEventListener('DOMContentLoaded', () => {
    const emailInp = document.getElementById('logEmail')
    const passInp = document.getElementById('logPass')
    const button = document.getElementById('logBtn')
    const err = document.getElementById('logErr')
    const err2 = document.getElementById('logErr2')
    const passwordCheck = document.getElementById('hideAndOpen')
    const data = JSON.parse(localStorage.getItem('userData'))
    console.log(data);

    passwordCheck.addEventListener('click', () => {
        passwordCheck.classList.toggle('hideEye')
        passwordCheck.classList.toggle('openEye')
        if(passwordCheck.classList.contains('hideEye')){
            passInp.type = 'password'
            return
        }
        if(passwordCheck.classList.contains('openEye')){
            passInp.type = 'text'
            return
        }
        passInp.type = 'password'
    })

    button.addEventListener('click', () => {
        logIn(emailInp, passInp, data, err, err2)
    })

    function logIn(a, b, data, mess, mess2){
        let val = String(a.value)
        let val2 = String(b.value)
        if(val.length > 0 && val2.length > 0){
            if((data.email === val || data.userName === val) && data.password === val2){
                location.href = '../html/main.html'
                emailInp.style.borderColor = `lightgray`
                passInp.style.borderColor = `lightgray`
                mess.style.display = `none`
                mess2.style.display = `none`
            } else if ((data.email === val || data.userName === val) && data.password !== val2) {
                emailInp.style.borderColor = `lightgray`
                passInp.style.borderColor = `red`
                mess.style.display = `none`
                mess2.style.display = `block`
            } else if(data.email !== val || data.userName !== val){
                emailInp.style.borderColor = `red`
                passInp.style.borderColor = `lightgray`
                mess.style.display = `block`
                mess2.style.display = `none`
            }
            a.value = ''
            b.value = ''
        }
    }
})