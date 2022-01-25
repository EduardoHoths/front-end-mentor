const btnShare = document.getElementById('share')
btnShare.addEventListener('click', viewport)


function viewport() {
    const width = window.innerWidth
    if (width > 950) {
        shareDesktop()
    } else {
        shareMobile()
    }
}
function resizeViewport() {
    const networks = document.getElementById('networks')
    const social = document.getElementById('social')
    const width = window.innerWidth

    if (width >= 950) {        
        social.classList.remove('dark-blue')

    } 
    if (networks.classList.value === 'container' && width > 950) {
        btnShare.classList.remove('GrayishBlue')
        btnShare.classList.add('dark-blue')
    }     
    if (networks.classList.value == 'container' && width < 950) {
        social.classList.add('dark-blue')
        btnShare.classList.remove('dark-blue')
        btnShare.classList.remove('light-blue')
        btnShare.classList.add('GrayishBlue')
    }
}

function shareDesktop() {

    const networks = document.getElementById('networks')
    if (networks.classList == 'container invisible') {
        networks.classList.remove('invisible')
        btnShare.classList.remove('light-blue')
        btnShare.classList.add('dark-blue')
    } else {
        btnShare.classList.remove('dark-blue')
        btnShare.classList.add('light-blue')
        networks.classList.add('invisible')
    }
}
function shareMobile() {
    const social = document.getElementById('social')
    const networks = document.getElementById('networks')
    if (networks.classList == 'container invisible') {
        networks.classList.remove('invisible')
        social.classList.add('dark-blue')
        btnShare.classList.remove('light-blue')
        btnShare.classList.add('GrayishBlue')
    } else {
        btnShare.classList.remove('GrayishBlue')
        btnShare.classList.add('light-blue')
        social.classList.remove('dark-blue')
        networks.classList.add('invisible')
    }
}
window.onresize = resizeViewport