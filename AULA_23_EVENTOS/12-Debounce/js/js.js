
let timeout;

window.addEventListener('mousemove', function(e) {
 clearTimeout(timeout);
 timeout = setTimeout(() => {
    console.log('Debounce!')
 }, 500)


})