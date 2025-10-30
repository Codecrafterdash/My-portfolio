        // Typing animation
        const titles = [
            "MCA Cybersecurity Student",
            "Aspiring Software Developer",
            "Full-Stack MERN Developer", 
            "AI Enthusiast",
            "Technical Writer",
            "Linux Enthusiast",
            "Network Security Specialist"
        ];
        let titleIndex = 0;
        let charIndex = 0;
        const typingElement = document.getElementById('typing-text');

        function typeTitle() {
            if (charIndex < titles[titleIndex].length) {
                typingElement.textContent += titles[titleIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeTitle, 100);
            } else {
                setTimeout(eraseTitle, 2000);
            }
        }

        function eraseTitle() {
            if (charIndex > 0) {
                typingElement.textContent = titles[titleIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(eraseTitle, 50);
            } else {
                titleIndex = (titleIndex + 1) % titles.length;
                setTimeout(typeTitle, 500);
            }
        }

        typeTitle();

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Contact form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            if (name && email && message) {
                const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                const mailtoLink = `mailto:varshara89@gmail.com?subject=${subject}&body=${body}`;
                window.location.href = mailtoLink;
                this.reset();
                alert('Thank you for your message! Your default email client should open with the message pre-filled.');
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Intersection Observer for fade-in animations
        const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, { threshold: 0.1 });
        fadeElements.forEach(el => {
            fadeObserver.observe(el);
        });

        // Navbar scroll effect (Dark Theme)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('bg-black', 'shadow-lg');
    navbar.classList.remove('bg-black/80');
  } else {
    navbar.classList.add('bg-black/80');
    navbar.classList.remove('bg-black', 'shadow-lg');
  }
});


// MATRIX RAIN ANIMATION (Neon Glow Version)
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.getElementById("home").offsetHeight;
}
resizeCanvas();

const binary = "01";
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
  // transparent black to create fading trail effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // glowing green
  ctx.shadowBlur = 10;
  ctx.shadowColor = "#030005ff";  // purple
ctx.fillStyle = "#00ff88";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = binary.charAt(Math.floor(Math.random() * binary.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // reset drop randomly after it reaches bottom
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 35);
window.addEventListener("resize", () => {
  resizeCanvas();
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});




