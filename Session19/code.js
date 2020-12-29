const products = [
    {
      image: "",
      text: "Coding Bootcamp, Platform And Program For Kids",
      borderColor: "#7ED957",
    },
    {
      image: "",
      text: "Live Coding Performances",
      borderColor: "#FBBD01",
    },
    {
      image: "",
      text: "Powering Coding Bootcamps",
      borderColor: "black",
    },
    {
      image: "",
      text: "Simle And Compile",
      borderColor: "#008037",
    },
    {
      image: "",
      text: "Live Classrooms Powered By Intellect",
      borderColor: "#FF1717",
    },
    {
      image: "",
      text: "Not For The Ordinary",
      borderColor: "#545454",
    },
    {
      image: "",
      text: "Classrooms For Smart India",
      borderColor: "#545454",
    },
    {
      image: "",
      text:
        "Application Management Systems For Coding Bootcamp. Faster. Better",
      borderColor: "#31AB50",
    },
    {
      image: "",
      text: "Bringing Great Minds Together",
      borderColor: "#FF1717",
    },
  ];


const logo = document.querySelector(".logo")
const colors = ["red", "blue", "green", "yellow"]


setInterval(function(){
  let randomColor = Math.floor(Math.random() * (3 - 0 + 1)) + 0
  
  logo.style.color =colors[randomColor]
}, 1000)