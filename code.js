const arrowSeconds = document.querySelector(".seconds");
const arrowMinutes = document.querySelector(".minutes");
const arrowHours = document.querySelector(".hours");

const seconds = new Date().getSeconds();
const minutes = new Date().getMinutes();
const hours = new Date().getHours();


const changeTime = () => {
    const seconds = new Date().getSeconds();
    const minutes = new Date().getMinutes();
    const hours = new Date().getHours();
    const hoursDegree = ((hours / 12) * 360) - 90;
    const minutesDegree = (((minutes / 60) * 360) - 90);
    const secondsDegree = ((seconds / 60) * 360) - 90;
    arrowHours.style.transform = `rotate(${hoursDegree}deg)`;
    arrowMinutes.style.transform = `rotate(${minutesDegree}deg)`;
    arrowSeconds.style.transform = `rotate(${secondsDegree}deg)`;
}

setInterval(changeTime, 1000)