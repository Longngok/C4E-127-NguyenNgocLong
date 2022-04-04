var typed = new Typed('.target', {
    strings: [
        "Try our style.....",
        "You are going to discover something new !!!"
    ],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 500,
    startDelay: 1000,
    loop : true,
  });

const lowcapSw = {
    name : "LOW-GAUGE KNIT SWEATER (NUDE IVORY)",
    price : "$350.00",
    info : "As part of our Spring-Summer 2022 collection, this drop features the low-gauge knit sweater in two colorways.<br>"
};
const lowcaps = document.getElementById("sweaterLow")
lowcaps.innerHTML = lowcapSw.name;
