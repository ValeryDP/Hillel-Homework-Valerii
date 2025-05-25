import './styles.scss';

const images = [
    require('./images/1.jpg'),
    require('./images/2.jpg'),
    require('./images/3.jpg'),
    require('./images/4.jpg'),
    require('./images/5.jpg'),
    require('./images/6.jpg'),
    require('./images/7.jpg'),
    require('./images/8.jpg'),
    require('./images/9.jpg'),
    require('./images/10.jpg')
];

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const dotsContainer = document.getElementById('dots-container');

    function createDots() {
    dotsContainer.innerHTML = '';

    for (var i = 0; i < images.length; i++) {
        var dot = document.createElement('div');
        dot.classList.add('dot');

            if (i === currentIndex) {
            dot.classList.add('active');
            }

        dot.addEventListener('click', function(index) {
            return function() {
                currentIndex = index;
                updateSlider();
            };
        }(i));
            dotsContainer.appendChild(dot);
        }
    }

    function updateSlider() {
    sliderImage.src = images[currentIndex];

    createDots();

    if (currentIndex === 0) {
        prevButton.style.visibility = 'hidden'; 
    } else {
        prevButton.style.visibility = 'visible'; 
    }

    if (currentIndex === images.length - 1) {
        nextButton.style.visibility = 'hidden';
        } else {
            nextButton.style.visibility = 'visible';
        }
    }

    nextButton.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex = currentIndex + 1;
            updateSlider();
        }
    });

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex = currentIndex - 1;
            updateSlider();
        }
    });

    updateSlider();
