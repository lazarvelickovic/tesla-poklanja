let date = document.getElementById('date');
let dateSpan = document.getElementById('dateSpan');

dateSpan.addEventListener('click' , function() {
    dateSpan.style.display = 'none';
    date.focus();
});

date.addEventListener('focusin' , function() {
    dateSpan.style.display = 'none';
});

date.addEventListener('focusout' , function() {
    dateSpan.style.display = 'inline-block';
});