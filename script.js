function openBooking() {
    window.open('https://calendly.com/egeatmaca/30min', '_blank').focus();
}

function addCTAListeners() {
    let ctas = document.getElementsByClassName('cta-button');
    for (let cta of ctas) {
        cta.addEventListener('click', openBooking);
    }
}

document.addEventListener('DOMContentLoaded', addCTAListeners);