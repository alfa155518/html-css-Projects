// status section
let allSpansContainer = document.querySelector(".stats");

let allSpans = document.querySelectorAll(".stats .container .box .number");

let starting =  false;

window.onscroll = function() {
    if (window.scrollY >= allSpansContainer.offsetTop ) {
        if (!starting) {
            allSpans.forEach(span => count(span))
        }
        starting = true;
    }

    
}

function count(element) {
    let dataNum = element.dataset.num;
    let interval = setInterval(() => {
        element.textContent++;
        if (element.textContent === dataNum) {
            clearInterval(interval)
        }
    }, 2000 / dataNum);
}


// our skills Section
let ourSkills = document.querySelector(".our-skills");

let ourSkillsSpans = document.querySelectorAll(".our-skills .the-progress span");

const options = {
    root:null,
    threShold:0,
    rootMargin:'-300px'
}

let observer = new IntersectionObserver(function (entrains,observer) {
    entrains.forEach(entre => {
        if (entre.isIntersecting) {
            console.log(entre)
            ourSkillsSpans.forEach(span => {
                            span.style.width = span.dataset.width
                        })
        }
    })
}, options)


observer.observe(ourSkills)


// section latest Event 

let dataNow = new Date("Dec 30 2025 23:59:59").getTime();

let intervalDate =  setInterval(() => {
    let date = new Date().getTime();
    let difference = dataNow - date 

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));

    let hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );

    let minuets = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60 ) );

    let seconds = Math.floor(difference % (1000 * 60 ) / (1000 ) );

    document.querySelector(".events .time .days > span").innerHTML = days < 10 ? `0${days}`: days
    document.querySelector(".events .time .hours > span").innerHTML = hours < 10 ? `0${hours}`: hours
    document.querySelector(".events .time .minutes > span").innerHTML = minuets < 10 ? `0${minuets}`: minuets
    document.querySelector(".events .time .seconds > span").innerHTML = seconds < 10 ? `0${seconds}`: seconds

    if (intervalDate < 0) {
        clearInterval(intervalDate)
    }

},1000)
