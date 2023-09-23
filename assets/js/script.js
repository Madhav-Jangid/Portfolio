
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".text", {
    strings: ["Gamer", "Coder", "Youtuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  document.getElementById('burgerButton').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
  });

  var navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelector('.navbar').classList.remove('active');
    });
  });

  // Define an array of project URLs
const projectUrls = [
  "https://madhav-jangid.github.io/E-Portal-official/",
  "Error.html",
  // Add more URLs for your projects as needed
];

// ... Rest of your JavaScript code ...

const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.querySelector(".left-arrow-wrap .arrow");
const rightArrow = document.querySelector(".right-arrow-wrap .arrow");
const imgBox = document.getElementById("imgBox");
const name = document.getElementById("name");
const profession = document.getElementById("profession");
const description = document.getElementById("description");

let people = [
  {
    photo: 'url("assets/images/WhatsApp Image 2023-09-19 at 22.19.41.jpg")',
    name: "",
    profession: "E-GramSangam",
    description: "Our e-portal has the potential to be a game-changer for rural education. By leveraging technology, it provides students in remote areas with access to a wealth of educational resources, fostering skills and knowledge essential for a brighter future. Our platform not only delivers content but also creates a supportive learning community, ensuring that no student is left behind. In bridging the educational gap, we empower rural students to reach their full potential, contributing to the advancement of rural communities and the nation as a whole"
  },
  {
    photo: 'url("https://th.bing.com/th/id/OIGP.CHuLvD4pUXCFgJnCWT7_?w=270&h=270&c=6&r=0&o=5&dpr=1.6&pid=ImgGn")',
    name: "",
    profession: "Calculator",
    description: "Introducing My Voice-Operated Calculator: the pinnacle of convenience and efficiency. From programming to complex math, this innovative tool processes your voice commands for seamless calculations. Elevate your workflow, go hands-free, and experience a new era of computation. Embrace the future of technology, empowering your tasks with the simplicity of speech."
  },
];

function setCardContent(personNumber) {
  imgBox.style.backgroundImage = people[personNumber].photo;
  name.innerText = people[personNumber].name;
  profession.innerText = people[personNumber].profession;
  description.innerText = people[personNumber].description;

  // Update the button href based on the current personNumber
  const detailsButton = document.querySelector(".details-button");
  detailsButton.href = projectUrls[personNumber];
}

let currentPerson = 0;

function slide(side) {
  if (side === "left") {
    if (currentPerson === 0) {
      currentPerson = people.length - 1;
    } else {
      currentPerson--;
    }
  } else if (side === "right") {
    if (currentPerson === people.length - 1) {
      currentPerson = 0;
    } else {
      currentPerson++;
    }
  }

  setCardContent(currentPerson);
}

leftArrow.addEventListener("click", () => {
  slide("left");
});

rightArrow.addEventListener("click", () => {
  slide("right");
});

setCardContent(currentPerson);
});