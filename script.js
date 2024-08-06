document.getElementById('name-title').addEventListener('click', function() {
    const fonts = ['font-1', 'font-2', 'font-3', 'font-4', 'font-5'];
    let currentFontIndex = this.dataset.fontIndex ? parseInt(this.dataset.fontIndex) : 1;

    // Set the text element to fade out
    this.style.opacity = '0';

    // Wait for the fade out transition to complete
    setTimeout(() => {
        // Remove the current font class if it exists
        if (currentFontIndex > 0) {
            this.classList.remove(fonts[currentFontIndex - 1]);
        } else {
            this.classList.remove(fonts[fonts.length - 1]);
        }

        // Set the new font class
        this.classList.add(fonts[currentFontIndex]);

        // Update the font index for the next click
        currentFontIndex = (currentFontIndex + 1) % fonts.length;
        this.dataset.fontIndex = currentFontIndex;

        // Set the text element to fade in
        this.style.opacity = '1';
    }, 150); // Duration matches the CSS transition duration
});