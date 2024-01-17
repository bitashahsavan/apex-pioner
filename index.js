const toggleButton=document.getElementsByClassName('toggle-button')[0]
const mainMenu=document.getElementsByClassName('main-menu')[0]

toggleButton.addEventListener('click',

    () => {
        mainMenu.classList.toggle('active')

})
