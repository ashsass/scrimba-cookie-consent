const modal = document.getElementById('modal')
const modalClose = document.getElementById('modal-close-btn')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalClose.addEventListener('click', function() {
    modal.style.display = 'none'
})