// O KEYDOWN AFUNDA A TECLA...APERTA E SAI TECLANDO, TIPO ENTER...
// window.addEventListener('keydown', function(e) {
//     if (e.key === 'Enter') {
//         console.log('Apertou a tecla')
//     }
    
    
// })

//JÁ O KEYUP NÃO AFUNDA A TECLA, É NECESSÁRIO FICAR APERTANDO INTERCALADAMENTE
window.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        console.log('Apertou a tecla')
    }
    
    
})