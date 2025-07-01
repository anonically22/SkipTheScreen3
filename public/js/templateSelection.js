// Placeholder for templateSelection.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Template Selection module loaded.');

    // Example: Add event listeners to template links/buttons
    const templateLinks = document.querySelectorAll('.template-item a');
    templateLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // e.preventDefault(); // Prevent default navigation if handling via JS
            const templateId = this.href.split('/').pop(); // Or get from a data attribute
            console.log(`Template selected: ${templateId}`);
            // Potentially store selected templateId in localStorage or session,
            // or navigate to the builder page with this ID.
            // For now, the link itself handles navigation.
        });
    });
});
