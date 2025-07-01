// Placeholder for formHandling.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Form Handling module loaded.');

    const resumeForm = document.getElementById('resume-form');
    if (resumeForm) {
        resumeForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Resume form submitted.');

            const formData = new FormData(resumeForm);
            const resumeData = {};
            formData.forEach((value, key) => {
                resumeData[key] = value;
            });

            console.log('Form Data:', resumeData);

            try {
                const response = await fetch('/api/resume', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ resumeData }),
                });
                const result = await response.json();
                if (response.ok) {
                    alert('Resume data saved to session: ' + result.message);
                    console.log('Server response:', result);
                } else {
                    alert('Error saving resume data: ' + result.message);
                    console.error('Server error:', result);
                }
            } catch (error) {
                alert('Failed to send data to server.');
                console.error('Fetch error:', error);
            }
        });
    }
});
