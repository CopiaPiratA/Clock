window.setInterval(() => {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    let completeTime = `${hours} : ${minutes} : ${seconds} `;
    let clock = document.getElementById("h3");
    clock.innerHTML = completeTime;
}, 1000);