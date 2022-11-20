
window.sr = ScrollReveal();
sr.reveal(".navbar", {
    duration: 2000,
    origin: "bottom"
});
sr.reveal(".p", {
    duration: 2000,
    origin: "left",
    distance: "100px"
});
sr.reveal(".two-a", {
    duration: 2000,
    origin: "left",
    distance: "200px",
    viewFactor: 0.3
});
sr.reveal(".z", {
    duration: 2000,
    origin: "top",
    distance: "100px",
    viewFactor: 0.3,
    delay: "250",
});
sr.reveal(".r", {
    duration: 2000,
    origin: "right",
    distance: "100px",
    viewFactor: 0.3,
    delay: "250",
});
sr.reveal(".heading", {
    duration: 2000,
    origin: "bottom",
    distance: "100px",
    delay: "250",
    viewFactor: 0.3
});
sr.reveal(".q", {
    duration: 2000,
    origin: "bottom",
    distance: "100px",
    viewFactor: 0.2,
    delay: "250",
});

var charts = document.getElementById("myChart");
Chart.defaults.font.size = 22;
Chart.defaults.color = "#000"


let labels = ["Staking(78%)", "Giveaway(3%)", "Teams(4.5%)", "Com. Treasury(6%)", "Airdrop(7%)", "Partners(1%)", "Devs(0.5%)"];
let itemData = [78,3,4.5,6,7,1,0.5];

const data = {
    labels: labels,
    datasets: [{
     data: itemData,
     backgroundColor: ["rgb(253,97,108)", "rgb(188,158,222)", "rgb(255,247,0)","rgb(130,196,255)","rgb(174,255,178)","rgb(255,215,154)","rgb(0, 255, 42)"],
    }]
};
const config = {
    type: "pie",
    data: data,
    options: {
        plugins: {
            legend: {
                display: true,
               position: 'right',
              }    
        }
    }
};

const pieChart = new Chart(
     charts,
    config
);