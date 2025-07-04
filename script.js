document.addEventListener('DOMContentLoaded', function() {
    // Loading screen with terminal effect
    const terminalText = document.getElementById('terminal-text');
    const loadingScreen = document.getElementById('loading-screen');
    
    const lines = [
        'Initializing portfolio...',
        'Loading security modules...',
        'Establishing secure connection...',
        'Encrypting data channels...',
        'Running vulnerability scans...',
        'Security checks passed!',
        'Access granted. Welcome to my portfolio!'
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    
    function typeTerminalText() {
        if (lineIndex < lines.length) {
            const currentLine = lines[lineIndex];
            
            if (charIndex < currentLine.length) {
                terminalText.innerHTML += currentLine.charAt(charIndex);
                charIndex++;
                setTimeout(typeTerminalText, 1);
            } else {
                terminalText.innerHTML += '<br>';
                lineIndex++;
                charIndex = 0;
                setTimeout(typeTerminalText, 200);
            }
        } else {
            setTimeout(() => {
                loadingScreen.style.opacity = 0;
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    animateHeroElements();
                }, 200);
            }, 300);
        }
    }
    
    setTimeout(typeTerminalText, 500);
    
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    document.addEventListener('mousedown', function() {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });
    
    document.addEventListener('mouseup', function() {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
    });
    
    // Custom cursor interactions
    const hoverables = document.querySelectorAll('a, button, .view-details, .slider-btn, input, textarea');
    
    hoverables.forEach(item => {
        item.addEventListener('mouseenter', function() {
            cursor.style.width = '0px';
            cursor.style.height = '0px';
            cursorFollower.style.width = '50px';
            cursorFollower.style.height = '50px';
            cursorFollower.style.borderColor = 'var(--accent)';
            cursorFollower.style.background = 'rgba(0, 255, 0, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            cursor.style.width = '8px';
            cursor.style.height = '8px';
            cursorFollower.style.width = '30px';
            cursorFollower.style.height = '30px';
            cursorFollower.style.borderColor = 'var(--accent)';
            cursorFollower.style.background = 'transparent';
        });
    });
    
    // Code animation in hero section
    const codeAnimation = document.getElementById('code-animation');
    const pythonCode = `#!/usr/bin/env python3
import sys
from pwn import *

def exploit():
    # Target binary and address
    binary = "./vulnerable"
    address = 0x080491e2
    
    # Create payload
    payload = b"A" * 64           # Buffer padding
    payload += p32(address)       # Return address
    
    # Establish connection
    p = process(binary)
    
    # Send payload
    p.sendline(payload)
    
    # Get shell
    p.interactive()
    
if __name__ == "__main__":
    exploit()
    print("[+] Exploitation successful!")`;
    
    let codeIndex = 0;
    
    function typeCode() {
        if (codeIndex < pythonCode.length) {
            codeAnimation.textContent += pythonCode.charAt(codeIndex);
            codeIndex++;
            setTimeout(typeCode, 20);
        }
    }
    
    // Matrix animation
    function setupMatrixAnimation() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const matrixContainer = document.getElementById('matrix-canvas');
        
        matrixContainer.appendChild(canvas);
        
        canvas.width = matrixContainer.offsetWidth;
        canvas.height = matrixContainer.offsetHeight;
        
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
        const fontSize = 12;
        const columns = canvas.width / fontSize;
        
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "#00ff00";
            ctx.font = fontSize + "px monospace";
            
            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
        }
        
        setInterval(draw, 50);
    }
    
    // Animate hero elements
    function animateHeroElements() {
        setTimeout(typeCode, 800);
    }
    
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Scroll reveal
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', revealOnScroll);
    
    // Skills tab navigation
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            document.querySelector(`.tab-content[data-tab="${tabId}"]`).classList.add('active');
            
            // Animate skill bars when tab is active
            animateSkillBars();
        });
    });
    
    // Animate skill bars
    function animateSkillBars() {
        const skillCards = document.querySelectorAll('.tab-content.active .skill-card');
        
        skillCards.forEach(card => {
            const level = card.getAttribute('data-level');
            const skillLevel = card.querySelector('.skill-level');
            
            setTimeout(() => {
                skillLevel.style.width = level + '%';
            }, 200);
        });
    }
    
    // Slider functionality
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentIndex = 0;
    
    // Create dots based on slide count
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.dot');
    
    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        currentIndex = index;
        updateSlider();
    }
    
    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    
    // Counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            let count = 0;
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps approx
            
            function updateCount() {
                if (count < target) {
                    count += increment;
                    counter.textContent = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target;
                }
            }
            
            updateCount();
        });
    }
    
    // Achievement modal
    const modal = document.getElementById('achievement-modal');
    const modalBody = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');
    const viewDetailsBtns = document.querySelectorAll('.view-details');
    
    viewDetailsBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const achievement = slides[index].querySelector('figcaption').innerHTML;
            const imgSrc = slides[index].querySelector('img').src;
            
            // Achievement data (would be fetched from a real database)
            const achievementData = [
                { date: '2025-04-15', description: 'Secured second place among 120 teams by solving complex web and binary exploitation challenges.' },
                { date: '2024-11-30', description: 'First runner-up position in Dhaka University\'s premier cybersecurity competition, focusing on reverse engineering.' },
                { date: '2025-03-25', description: 'Ranked 191st globally among thousands of participants in one of the world\'s largest cybersecurity competitions.' },
                { date: '2025-01-20', description: 'Achieved 9th place by demonstrating advanced skills in cryptography and forensics challenges.' },
                { date: '2025-02-10', description: 'Finished 50th by solving challenging cryptography and steganography problems.' }
            ];
            
            const content = `
                <div class="modal-header">
                    <h2>${slides[index].querySelector('figcaption h3').textContent}</h2>
                    <p>${slides[index].querySelector('figcaption p').textContent}</p>
                </div>
                <div class="modal-image">
                    <img src="${imgSrc}" alt="Achievement image">
                </div>
                <div class="modal-details">
                    <p><strong>Date:</strong> ${achievementData[index].date}</p>
                    <p><strong>Description:</strong> ${achievementData[index].description}</p>
                </div>
            `;
            
            modalBody.innerHTML = content;
            modal.classList.add('show');
        });
    });
    
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    // Hide header on scroll down, show on scroll up
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[data-scroll]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile nav if open
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const submitForm = document.getElementById('submit-form');
    
    submitForm.addEventListener('click', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            // Simulate sending data
            submitForm.textContent = 'Sending...';
            
            setTimeout(() => {
                // Reset form
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
                
                // Show success message
                submitForm.textContent = 'Message Sent!';
                submitForm.style.background = 'var(--accent)';
                submitForm.style.color = 'var(--text-primary)';
                
                setTimeout(() => {
                    submitForm.textContent = 'Send Message';
                    submitForm.style.background = '';
                    submitForm.style.color = '';
                }, 3000);
            }, 1500);
        }
    });
    
    // Update last updated date
    document.getElementById('last-updated').textContent = '2025-07-04';
    
    // Initialize animations after loading
    setupMatrixAnimation();
    setTimeout(() => {
        animateCounters();
        animateSkillBars();
        revealOnScroll();
    }, 1500);
});