const leftToRight = document.querySelector('.left-to-right');
const rightToLeft = document.querySelector('.right-to-left');

function handleLeftToRight(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('left-to-right');
        } else {
            entry.target.classList.remove('left-to-right');
        }
    });
}

const observer = new IntersectionObserver(handleLeftToRight, {
    root: null,
    threshold: 0.5
});

observer.observe(leftToRight);





function handleRightToLeft(que) {
    que.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('right-to-left');
        } else {
            entry.target.classList.remove('right-to-left');
        }
    });
}

const observerRightToLeft = new Intersection(handleRightToLeft, {
    root: null,
    threshold: 0.5
});

observerRightToLeft.observe(rightToLeft);