const modal = document.getElementById('modal')
const modalClose = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const modalCloseBtn = document.getElementById('modal-close-btn')
const declineBtn = document.getElementById('decline')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalClose.addEventListener('click', function() {
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function(){
    const modalBtnsContainer = document.getElementById('modal-choice-btns')
    modalBtnsContainer.classList.toggle('modal-choice-btns-reverse')
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    modalText.innerHTML = 
        `<div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="uploadText">
                Uploading your data to the dark web...
            </p>
        </div>`

    setTimeout(function(){
        document.getElementById('uploadText').innerText = `Making the sale. . .`
    }, 1500)

    setTimeout(function() {
        const modalInner = document.getElementById("modal-inner")
        const consentFormData = new FormData(consentForm)
        const formName = consentFormData.get('modal-name')
    
        modalInner.innerHTML = 
            `<h2>Thanks <span class='modal-display-name'>${formName}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>`
        modalCloseBtn.disabled = false
    }, 3000)
})