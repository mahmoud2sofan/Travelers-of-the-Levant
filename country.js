const country = {
    palestine: {
        displayName: "Palestine",
        image: "images-palestine/palestine.jpeg",
    },
    syria: {
        displayName: "Syria",
        image: "images-syria/syria.jpeg",
    },
    jordan: {
        displayName: "Jordan",
        image: "images-jordan/jordan.jpeg",
    },
    lebanon: {
        displayName: "Lebanon",
        image: "images-lebanon/lebanon.jpeg",
    }
};

// Function to get URL parameters
function getURLParameter(paramName) {
    const urlParameters = new URLSearchParams(window.location.search);
    return urlParameters.get(paramName);
}

// Function to normalize country name (convert to lowercase)
function normalizeCountryName(countryInput) {
    if (!countryInput) {
        return null;
    }
    return countryInput.toLowerCase().trim();
}

// Function to validate country selection
function isValidCountry(countryKey) {
    return countryKey in country;
}

// Function to update page content based on selected country
function updatePageContent(countryKey) {
    const countryInfo = country[countryKey];
    
    // Update country name display
    const countryNameElement = document.getElementById("countryNameDisplay");
    countryNameElement.textContent = countryInfo.displayName;
    
    // Update country image
    const countryImageElement = document.getElementById("countryImage");
    countryImageElement.src = countryInfo.image;
    countryImageElement.alt = `${countryInfo.displayName} Image`;
    
    // Update country description
    const countryDescriptionElement = document.getElementById("countryDescription");
    countryDescriptionElement.textContent = countryInfo.description;
}

// Function to display error message
function displayErrorMessage(message) {
    const errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = `<div class="error-message">${message}</div>`;
}

// Main initialization function
function initializeCountryPage() {
    // Get the country parameter from URL
    const countryName = getURLParameter("name");

    // Normalize the country name
    const normalizedCountryName = normalizeCountryName(countryName);

    // Check if country parameter exists
    if (!countryName) {
        displayErrorMessage("No country selected. Please select a country from the home page. <br> Example: country.html?name=palestine");
        return;
    }

    // Check if the selected country is valid
    if (!isValidCountry(normalizedCountryName)) {
        displayErrorMessage(`The country "${countryName}" is not available. Please select from: Palestine, Syria, Jordan, or Lebanon.`);
        return;
    }

    // Update page content with the selected country information
    updatePageContent(normalizedCountryName);
}

// Execute initialization when DOM is ready
document.addEventListener("DOMContentLoaded", initializeCountryPage);
