function convert() {
    const inputArea = document.getElementById("inputArea");
    const outputArea = document.getElementById("outputArea");

    const bodyMatch = inputArea.value.match(/body\s*{([\s\S]*?)}/);
    if (!bodyMatch || !bodyMatch[1]) {
        outputArea.value = "Invalid input";
        return;
    }

    const inputLines = bodyMatch[1].split("\n");

    let outputObject = {};

    // Utility function to convert key to camelCase
    const toCamelCase = (str) => {
        let [first, ...rest] = str.split("-");
        rest = rest.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
        return [first, ...rest].join("");
    };

    inputLines.forEach((line) => {
        const match = line.trim().match(/--(.*):/);
        if (match && match[1]) {
            const keyComponents = match[1]
                .split("--")
                .filter(
                    (component) => component !== "wp" && component !== "preset"
                )
                .map((component) => toCamelCase(component)); // Convert each key component to camelCase

            let currentObj = outputObject;
            keyComponents.forEach((component, index) => {
                if (!currentObj[component]) {
                    if (index === keyComponents.length - 1) {
                        currentObj[component] = `var(--${match[1]})`;
                    } else {
                        currentObj[component] = {};
                    }
                }
                currentObj = currentObj[component];
            });
        }
    });

    const outputString = JSON.stringify(outputObject, null, 2)
        .replace(/"([^"]+)":/g, "'$1':")
        .replace(/"([^\"]+)"/g, "'$1'");

    // Remove the wrapping brackets
    outputArea.value = outputString.slice(1, -1).trim();
}
