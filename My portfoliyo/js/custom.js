const hamburger = document.querySelector(".hamburger");
const navmanu = document.querySelector(".nav");

    hamburger.addEventListener("click", () => {
    
	hamburger.classList.toggle("active");
    
	navmanu.classList.toggle("active");
	
	})