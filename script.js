let hour = document.querySelector('#hour-hand');
let minute = document.querySelector('#minute-hand');
let second = document.querySelector('#second-hand');

function clock(params) {
    var currentDate = new Date();
    var hrs = currentDate.getHours();
    var min = currentDate.getMinutes();
    var sec = currentDate.getSeconds();
    
    second.style.transform = 'rotate(' + sec * 6 + 'deg)';
    minute.style.transform = 'rotate(' + min * 6 + 'deg)';
    hour.style.transform = 'rotate(' + (hrs * 30) % 360 + 'deg)';
}


setInterval(clock, 1000);
