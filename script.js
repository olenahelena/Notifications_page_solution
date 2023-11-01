const myButton = document.getElementById('button');
const count = document.getElementById('notifications');


myButton.onclick = function () {
    document.querySelectorAll('.container__content').forEach(e => {
        e.classList.add('unread');
    })

    document.querySelectorAll('.red_dot').forEach(e => {
        e.classList.add('error');
    })

    count.textContent = "0"
}