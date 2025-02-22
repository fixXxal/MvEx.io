const USDT_TO_MVR_RATE = 20;

function calculateTotal() {
    const amount = document.getElementById('amount').value;
    const result = amount * USDT_TO_MVR_RATE;
    document.getElementById('result').innerText = `Total in MVR: ${result}`;
}

function calculateBuyTotal() {
    const amount = document.getElementById('buyAmount').value;
    const result = amount / USDT_TO_MVR_RATE;
    document.getElementById('buyResult').innerText = `Total in USDT: ${result}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const usdtBalanceElement = document.getElementById('usdt-balance');
    const mvrBalanceElement = document.getElementById('mvr-balance');
    const transactionTableBody = document.getElementById('transaction-table').querySelector('tbody');

    let usdtBalance = 1000.00; // Example initial balance
    let mvrBalance = 5000.00; // Example initial balance
    let transactions = [
        { date: '2023-10-01', type: 'Deposit', amount: 500, currency: 'USDT' },
        { date: '2023-10-02', type: 'Withdrawal', amount: 200, currency: 'MVR' }
    ]; // Example transactions

    usdtBalanceElement.textContent = usdtBalance.toFixed(2);
    mvrBalanceElement.textContent = mvrBalance.toFixed(2);

    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.type}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.currency}</td>
        `;
        transactionTableBody.appendChild(row);
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(link => link.classList.remove('active'));
            item.classList.add('active');
        });
    });

    const menuLinks = document.querySelectorAll('.nav-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = link.getAttribute('href');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = targetPage;
            }, 500); // Adjust the timeout to match the fade-out animation duration
        });
    });

    gsap.fromTo(".logo", 
        { opacity: 0, scale: 0.5, y: -50, rotation: -10 }, 
        { opacity: 1, scale: 1, y: 0, rotation: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(".subtitle", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(".button", 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 1, delay: 0.8, ease: "elastic.out(1, 0.5)" }
    );

    gsap.fromTo(".nav-links li", 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.5, stagger: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(".left-box", 
        { x: -100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(".right-box", 
        { x: 100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    document.getElementById('usdt-box').addEventListener('click', function() {
        this.classList.toggle('broken');
        setTimeout(() => {
            this.classList.toggle('fix');
        }, 500);
    });
});
