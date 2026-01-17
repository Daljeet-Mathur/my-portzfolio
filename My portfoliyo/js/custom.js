const hamburger = document.querySelector(".hamburger");
const navmanu = document.querySelector(".nav");

    hamburger.addEventListener("click", () => {
    
	hamburger.classList.toggle("active");
    
	navmanu.classList.toggle("active");
	
	})


	// lodder

	// lodder
  window.addEventListener("load", () => {
      setTimeout(() => {
        document.getElementById("loader-wrapper").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.body.style.overflow = "auto";
      }, 3000); // still 1 second loader
    });