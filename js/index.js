//modal window
let modal = document.querySelector('#modal-window');

function openModal(){
    modal.classList.add('open');
}

function closeModal(){
    modal.classList.remove('open');
}

//counter

let counterItems = document.querySelectorAll('.item-counter');

counterItems.forEach(item => {
    item.innerHTML = 0; 
    let endValue = item.getAttribute('data-num');
    let increament = endValue / 30;
    
    function counter(){
        let value = +item.innerHTML;
        if(value < endValue){
            value += Math.floor(increament);
            item.innerHTML = value;
            setTimeout(counter, 100);
        } else {
            item.innerHTML = endValue;
        }
    }
    counter();
});