
function smoothScroll(target, duration) { 
    console.clear();

    console.log(`box1 = ${box1.getBoundingClientRect().top}`);
    // console.log(`section1 = ${section1.getBoundingClientRect().top}`);

    console.log(`box2 = ${box2.getBoundingClientRect().top}`);
    // // console.log(`section2 = ${section2.getBoundingClientRect().top}`);

    console.log(`box3 = ${box3.getBoundingClientRect().top}`);
    // // console.log(`section3 = ${section3.getBoundingClientRect().top}`);

    console.log(`box4 = ${box4.getBoundingClientRect().top}`);
    // // console.log(`section4 = ${section4.getBoundingClientRect().top}`);

    console.log(`window.pageOffset = ${window.pageYOffset}`);


    
    
    var targets = document.querySelector(target);

    const targetPosition = targets.getBoundingClientRect().top;


    const startPosition = window.pageYOffset;
    
    var distance = targetPosition - startPosition;
    // if(targetPosition > startPosition){
    //     var distance = targetPosition - startPosition;
    // } else if(targetPosition == startPosition) {
    //     var distance = 625;
    // }

    console.log(`${targets.getBoundingClientRect().top} - ${window.pageYOffset} = ${distance}`);

    let startTime = null;
    function animation(currentTime) {
    if(startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    let runAnimation = animate(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, runAnimation);

    if(timeElapsed < duration) requestAnimationFrame(animation);
    
    }

    let animate = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t*t + b;
	t -= 2;
	return -c/2 * (t*t*t*t - 2) + b;
    };


    requestAnimationFrame(animation);
    console.log(`______________________________`);

}




document.querySelector('.section1').addEventListener('click', ()=> smoothScroll('.box2', 1000));
document.querySelector('.section2').addEventListener('click', ()=> smoothScroll('.box3', 1500));
document.querySelector('.section3').addEventListener('click', ()=> smoothScroll('.box4', 1500));
document.querySelector('.section4').addEventListener('click', ()=> smoothScroll('.box1', 2000));


const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');
const box1     = document.querySelector('.box1');
const box2     = document.querySelector('.box2');
const box3     = document.querySelector('.box3');
const box4     = document.querySelector('.box4');








// const distance = box2.getBoundingClientRect().top - window.pageYOffset;

// console.log(`//${box2.getBoundingClientRect().top} - ${//window.pageYOffset} = ${distance}`);


let move = function(parameter){
    window.scrollTo(0, parameter);
    console.log('berhasil')
}


// section1.addEventListener('click', ()=> move(distance));
