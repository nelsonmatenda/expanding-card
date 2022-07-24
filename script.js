const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', function() {
        removeActiveClass()
        this.classList.add('active')
    })
})
function removeActiveClass(){
    cards.forEach(card => card.classList.remove('active'))
}