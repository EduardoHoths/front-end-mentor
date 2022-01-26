let details = document.querySelectorAll('details')
details.forEach(detail => detail.addEventListener('click', teste))

function teste(e) {
    if (e.path[2].open == true) {
        e.path[2].setAttribute('')
    }
    for (let i = 0; i <= details.length; i++) {
        if (details[i].open == true) {
            details[i].open = false
        }
    }
}