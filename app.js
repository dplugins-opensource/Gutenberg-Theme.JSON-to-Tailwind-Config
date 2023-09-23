// function convert() {
//     const inputArea = document.getElementById("inputArea");
//     const outputArea = document.getElementById("outputArea");

//     const inputText = inputArea.value;
//     const inputLines = inputText.split("\n");

//     let outputObject = {};

//     inputLines.forEach((line) => {
//         const match = line.match(/--font-size-(.*):/);
//         if (match && match[1]) {
//             const key = match[1];
//             outputObject[key] = `var(--font-size-${key})`;
//         }
//     });

//     outputArea.value = JSON.stringify(outputObject, null, 2);
// }


function convert() {
    const inputArea = document.getElementById("inputArea");
    const outputArea = document.getElementById("outputArea");

    // Extract the text inside the body brackets
    const bodyMatch = inputArea.value.match(/body\s*{([\s\S]*?)}/);
    if (!bodyMatch || !bodyMatch[1]) {
        outputArea.value = "Invalid input";
        return;
    }

    const inputLines = bodyMatch[1].split("\n");

    let outputObject = {};

    inputLines.forEach((line) => {
        // Trim each line and match the CSS variable
        const match = line.trim().match(/--(.*):/);
        if (match && match[1]) {
            const keyComponents = match[1]
                .split("--")
                .filter((component) => component !== "wp"); // remove "wp" components
            let currentObj = outputObject;

            keyComponents.forEach((component, index) => {
                if (!currentObj[component]) {
                    if (index === keyComponents.length - 1) {
                        // If it is the last component, then assign the variable value
                        currentObj[component] = `var(--${match[1]})`;
                    } else {
                        // If it is not the last component, then create a nested object
                        currentObj[component] = {};
                    }
                }
                currentObj = currentObj[component];
            });
        }
    });

    outputArea.value = JSON.stringify(outputObject, null, 2)
        .replace(/"([^"]+)":/g, "'$1':") // Replace double quotes around keys with single quotes
        .replace(/"([^\"]+)"/g, "'$1'"); // Replace double quotes around string values with single quotes
}

