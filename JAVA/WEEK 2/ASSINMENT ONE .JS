(function() {
    const code = `        long sum = 0;
        long currentTerm = 0;
        for (int i = 1; i <= n; i++) {
            currentTerm += (long) i * i;
            sum += currentTerm;
        }`;

    // Inserts the code directly at the cursor location of the active element
    const activeEl = document.activeElement;
    if (activeEl) {
        activeEl.focus();
        document.execCommand('insertText', false, code);
    } else {
        console.error("Please click inside the code editor first before running this script.");
    }
})();
