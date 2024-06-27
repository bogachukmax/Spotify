document.addEventListener('DOMContentLoaded', () => {
    const delBtns = document.querySelector('.delBtns')
    const delB = document.getElementById('okDel')
    const cancelB = document.getElementById('cancelDel')
    const rInp = document.getElementById('reasonInp')
    const checker = document.getElementById('checkForDel')
    const data = JSON.parse(localStorage.getItem('userData'))
    const regPage = `../html/register.html`
    const mainPage = `../html/main.html`
    console.log(data);
    checker.addEventListener('input', () => {
        if(checker.checked){
            delBtns.style.display = `flex`
        } else{
            delBtns.style.display = `none`
        }
    })

    delB.addEventListener('click', () => {
        const key = `userData`
        let a = rInp.value
        if(true){
            if(a.length > 0){
                localStorage.setItem('reasonForDelete', a)
            }
            location.href = regPage
            localStorage.removeItem(key)
        }
        rInp.value = ''
        checker.checked = false
    })
    cancelB.addEventListener('click', () => {
        if(true){
            location.href = mainPage
        }
        rInp.value = ''
        checker.checked = false
    })
})