const stars = document.querySelectorAll('.star');

let rating = 0;

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        if (star.classList.contains('active')) {
            star.classList.remove('active');
            rating = index;
        } else {
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('active');
            }
            rating = index + 1;
        }
        for (let i = index + 1; i < stars.length; i++) {
            stars[i].classList.remove('active');
        }
    });
});

const colors = ['orange', 'black', 'red'];

colors.forEach(color => {
    const colorSpan = document.getElementById(color);

    colorSpan.addEventListener('click', () => {
        const precio = document.querySelector('.container__informacion--precio');
        const nuevo = document.querySelector('.span__new');
        const targetElements = document.querySelectorAll('.fondo');
               
        precio.style.backgroundColor = color;
        nuevo.style.backgroundColor = color;
        
        targetElements.forEach(element => {
            element.classList.forEach(className => {
                if (className.startsWith('fondo-')) {
                    element.classList.remove(className);
                }
              });
            element.classList.add(`fondo-${color}`);
        });
    });
});

