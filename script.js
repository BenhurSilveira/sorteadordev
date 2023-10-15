
document.addEventListener("DOMContentLoaded", function () {

    const countDownImg = document.querySelector('#countDown')
    const p = document.getElementById('numberDrawnVisible')



    function generateNumber() {

        countDownImg.style.display = 'block'
        p.style.display = 'none'

        const min = Math.ceil(document.querySelector('.input-min').value)
        const max = Math.floor(document.querySelector('.input-max').value)

        if (min < max) {

            setTimeout(function () {
                const result = Math.floor(Math.random() * (max - min + 1)) + min;
                countDownImg.style.display = 'none'
                p.textContent = `${result}`
                p.style.display = 'block'
            }, 5000);
        } else {
            alert("O primeiro valor não pode ser menor que o segundo valor!")
            countDownImg.style.display = 'none'
        }
    }
    const button = document.querySelector("button");
    button.addEventListener("click", generateNumber);
});