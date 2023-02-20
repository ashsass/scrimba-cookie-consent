const modal = document.getElementById('modal')
const modalClose = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalClose.addEventListener('click', function() {
    modal.style.display = 'none'
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
        console.log(consentFormData)
    }, 3000)
})
/*   
Challenge: 
1. Create a const to store the user's name and
   use a FormData method to extract the 
   submitted name from the FormData object.
2. Insert the user's name into the HTML string
   that contains the final message we show our
   users.
*/ 