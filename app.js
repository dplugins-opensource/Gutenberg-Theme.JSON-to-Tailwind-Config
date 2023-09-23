document.addEventListener('DOMContentLoaded', function() {
    // Load user's choices from localStorage or default to specified categories if none exist
    const defaultChoices = ["colors", "font-size", "font-family", "spacing"];
    const storedChoices = JSON.parse(localStorage.getItem('groupChoices')) || defaultChoices;
    
    const checkboxes = document.querySelectorAll('#optionsForm input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = storedChoices.includes(checkbox.value);
    });
    
    // When user changes a checkbox, update localStorage
    document.getElementById('optionsForm').addEventListener('change', () => {
        const selectedGroups = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        localStorage.setItem('groupChoices', JSON.stringify(selectedGroups));
    });
});

function convert() {
    const input = document.getElementById("inputArea").value;
    let output = {};
    
    input.split(";").forEach((line) => {
        const match = line
            .trim()
            .match(
                /^--wp--preset--(color|gradient|font-size|font-family|spacing|shadow)--([^:]+):\s*(.+)$/
            );
        if (match) {
            const category = match[1];
            const name = match[2];
            const value = match[3];
            
            if (!output[category]) {
                output[category] = {};
            }
            
            const jsName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            output[category][jsName] = `var(--wp--preset--${category}--${name})`;
        }
    });
    
    // Rename color to colors if it exists
    if (output.color) {
        output.colors = {...output.color};
        delete output.color;
    }

    // Retrieve the user's choices from localStorage.
    const selectedGroups = JSON.parse(localStorage.getItem('groupChoices')) || defaultChoices;
    
    let result = "";
    for (const category in output) {
        // Only include the categories in the result if the user has selected them
        if (selectedGroups.includes(category)) {
            result += `${category}: {\n`;
            for (const name in output[category]) {
                result += `  '${name}': '${output[category][name]}',\n`;
            }
            result += "},\n";
        }
    }
    
    document.getElementById("outputArea").value = result;
}
