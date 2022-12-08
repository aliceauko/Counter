(function(){
    const buttons = document.querySelectorAll(".countBtn")

    let count = 0
    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            if (button.classList.contains('decrease')){
            count--
            }
            else
            if (button.classList.contains('increase')){
                count++
            }

            const counter = document.querySelector('.counter')
            counter.textContent = count


            if (count < 0){
                counter.style.color ='red'
            }
           else if (count > 0){
                counter.style.color ='green'
            }
            else counter.style.color ='black'
        })
    })
}) ()