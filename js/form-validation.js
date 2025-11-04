document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const submitButton = document.getElementById('submitButton');
    const formMessage = document.getElementById('form-message');

    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
    formMessage.textContent = '';

    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
    })
    .then(response => {
        if (response.ok) {
            formMessage.style.color = 'green';
            formMessage.textContent = 'Message sent successfully!';
            setTimeout(() => {
                this.reset(); // Reset form after message
            }, 2000);
        } else {
            throw new Error('Form submission failed.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        formMessage.style.color = 'red';
        formMessage.textContent = 'An error occurred. Please try again.';
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    });
});
