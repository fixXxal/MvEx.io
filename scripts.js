document.getElementById('show-register').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    gsap.fromTo("#register-form", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
});

document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    gsap.fromTo("#login-form", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
});
