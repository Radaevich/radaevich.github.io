function reveal() {
	var reveals = document.querySelectorAll(".default-animation");
  
	for (var i = 0; i < reveals.length; i++) {
	  var windowHeight = (window.innerHeight / 2) + window.scrollY;
	  var elementTop = reveals[i].getBoundingClientRect().top;
	  var elementVisible = 200;
  
	  if (elementTop < windowHeight - elementVisible) {
		reveals[i].classList.add("active");
	  } 
	}
  }
  
  window.addEventListener("scroll", reveal);
  reveal();