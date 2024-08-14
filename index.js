document.body.addEventListener("mousemove", (event) => {
    const xPos = event.clientX;
    const yPos = event.clientY;
    const spanEl = document.createElement("span");
  
    const size = Math.random() * (80 - 20) + 20; // Hearts between 20px and 80px
    spanEl.style.width = `${size}px`;
    spanEl.style.height = `${size}px`;
  
    spanEl.style.left = `${xPos}px`;
    spanEl.style.top = `${yPos}px`;
  
    // Randomly change the heart color using CSS filters
    const hueRotate = Math.floor(Math.random() * 360);
    spanEl.style.filter = `hue-rotate(${hueRotate}deg) drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))`;
  
    document.body.appendChild(spanEl);
  
    setTimeout(() => {
      spanEl.remove();
    }, 3000); // Matches the animation duration
  });
  