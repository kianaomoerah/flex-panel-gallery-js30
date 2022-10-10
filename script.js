const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open')
}

function toggleActive(e) {
    // console.log(e.propertyName)
    // shows us what transition is ending (we see both font-size and flex-grow)

    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    };

}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));