let data = document.querySelector('#events')
let interstedEl = document.querySelector('#intersted')
let checkedIcon = 'checked.png'
let notcheckedIcon = 'notchecked.png'
    


events.forEach(event => {
    let eventElement = createeventInfo(event);
    data.appendChild(eventElement)
})

interestedEvents()

function createeventInfo(event) {

    let data = document.createElement('div')
    data.classList.add('event-info')

    let h2 = document.createElement('h2')
    h2.innerHTML = event.name

    let h3what = document.createElement('h3')
    h3what.innerHTML = 'What'
    
    let para1 = document.createElement('p')
    para1.innerHTML = event.what 

    let h3where = document.createElement('h3')
    h3where.innerHTML = 'Where'
    
    let para2 = document.createElement('p')
    para2.innerHTML = event.where 

    let h3when = document.createElement('h3')
    h3when.innerHTML = 'When'
    
    let para3 = document.createElement('p')
    para3.innerHTML = event.when 


    let ImageContainer = document.createElement('div')
    event.images.forEach( imagefile => {
        let img = document.createElement('img')
        img.src = imagefile
        img.classList.add('event-image')
        ImageContainer.appendChild(img)
    })


    let icon = document.createElement('img')
    icon.classList.add('icon-button')

    if (event.userChecked) {
        icon.src = checkedIcon
    } else {
        icon.src = notcheckedIcon
    }

    addCheckmarkListener(icon, event.id)

    data.appendChild(h2)
    data.appendChild(h3what)
    data.appendChild(para1)
    data.appendChild(h3where)
    data.appendChild(para2)
    data.appendChild(h3when)
    data.appendChild(para3)
    data.appendChild(ImageContainer)
    data.appendChild(icon)

    return data
}

function addCheckmarkListener(checkmarkEl, id) {

    checkmarkEl.addEventListener('click', function() {
        event = events.filter( event => event.id == id)[0]
        if (!event){
            console.log('no event with id ', id);
            return;
        }

        event.userChecked = !event.userChecked

        if (event.userChecked) {
            this.src = checkedIcon
        } else {
            this.src = notcheckedIcon
        }

        interestedEvents()
    })
}
    
function interestedEvents() {
    let intersted = events
                        .filter( event => event.userChecked)
                        .map( event => event.what)

    let interedtedstring = intersted.join(', ')

    if (interedtedstring.length == 0){
        interstedEl.innerHTML = 'Interested events Here'
    } else {
        interstedEl.innerHTML = interedtedstring
    }
}