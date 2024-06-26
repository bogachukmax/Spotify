document.addEventListener('DOMContentLoaded', () => {
    const emailInp = document.getElementById('logEmail')
    const passInp = document.getElementById('logPass')
    const button = document.getElementById('logBtn')
    const data = JSON.parse(localStorage.getItem('userData'))
    console.log(data);

    button.addEventListener('click', () => {
        logIn(emailInp, passInp, data)
    })

    function logIn(a, b, data){
        let val = String(a.value)
        let val2 = String(b.value)
        if(val.length > 0 && val2.length > 0){
            if((data.email === val || data.userName === val) && data.password === val2){
                location.href = '../html/main.html'
                emailInp.style.borderColor = `lightgray`
                passInp.style.borderColor = `lightgray`
            } else if ((data.email === val || data.userName === val) && data.password !== val2) {
                emailInp.style.borderColor = `lightgray`
                passInp.style.borderColor = `red`
                console.log('wrong password');
            } else if(data.email !== val || data.userName !== val){
                console.log('wrong email or username');
                emailInp.style.borderColor = `red`
                passInp.style.borderColor = `lightgray`
            }
            a.value = ''
            b.value = ''
        }
    }
})