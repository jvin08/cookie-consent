const modal = document.getElementById("modal")
const modalCloseButton = document.getElementById('modal-close-btn')
const consentFormEl = document.getElementById("consent-form")
const modalTextEl = document.getElementById("modal-text")
const modalInnerEl = document.getElementById("modal-inner")
const declineBtn = document.getElementById("decline-btn")
const modalChoiceBtn = document.getElementById("modal-choice-btns")

const firstMessage = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">Uploading your data to the dark web...</p>
    </div>`

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseButton.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener("mouseover", function(){
    modalChoiceBtn.classList.toggle('reverse')
})



consentFormEl.addEventListener("submit", function(e){
    e.preventDefault();
    const formData = new FormData(consentFormEl) 
    const fullName = formData.get('fullName')   

    modalTextEl.innerHTML = firstMessage
    setTimeout(function(){
        document.getElementById("uploadText").innerText = `Making the sale...`
    }, 1500)
    setTimeout(function(){
        modalInnerEl.innerHTML =  `
        <h2>Thanks  
        <span class="modal-display-name">${fullName}</span>, you sucker! 🧤</h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    ` 
        modalCloseButton.disabled = false
    },3000)

})

