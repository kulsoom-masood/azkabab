document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your order! We will get back to you soon.');
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your feedback!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});
