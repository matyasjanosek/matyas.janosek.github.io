let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});

let h2Element = document.querySelector('.sec h2');
let pElement = document.querySelector('.sec p');

let h2Waypoint = new Waypoint({
    element: h2Element,
    handler: function (direction) {
        if (direction === 'down' && !h2Element.classList.contains('animated')) {
            h2Element.classList.add('animated');
        }
    },
    offset: '80%'
});

let pWaypoint = new Waypoint({
    element: pElement,
    handler: function (direction) {
        if (direction === 'down' && !pElement.classList.contains('animated')) {
            pElement.classList.add('animated');
        }
    },
    offset: '80%'
});

let cardElements = document.querySelectorAll('.card');

let cardWaypoints = Array.from(cardElements).map(cardElement => {
    return new Waypoint({
        element: cardElement,
        handler: function (direction) {
            if (direction === 'down' && !cardElement.classList.contains('animated')) {
                cardElement.classList.add('animated');
            }
        },
        offset: '100%',
        context: window
    });
});