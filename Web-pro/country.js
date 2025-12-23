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

function getURLParameter(paramName) {
    const urlParameters = new URLSearchParams(window.location.search);
    return urlParameters.get(paramName);
}

function normalizeCountryName(countryInput) {
    if (!countryInput) {
        return null;
    }
    return countryInput.toLowerCase().trim();
}

function isValidCountry(countryKey) {
    return countryKey in country;
}

function updatePageContent(countryKey) {
    const countryInfo = country[countryKey];
    
    const countryNameElement = document.getElementById("countryNameDisplay");
    countryNameElement.textContent = countryInfo.displayName;
    
    const countryImageElement = document.getElementById("countryImage");
    countryImageElement.src = countryInfo.image;
    countryImageElement.alt = `${countryInfo.displayName} Image`;
    
    const countryDescriptionElement = document.getElementById("countryDescription");
    countryDescriptionElement.textContent = countryInfo.description;
}

function displayErrorMessage(message) {
    const errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = `<div class="error-message">${message}</div>`;
}

function initializeCountryPage() {
    const countryName = getURLParameter("name");

    const normalizedCountryName = normalizeCountryName(countryName);

    if (!countryName) {
        displayErrorMessage("No country selected. Please select a country from the home page. <br> Example: country.html?name=palestine");
        return;
    }

    if (!isValidCountry(normalizedCountryName)) {
        displayErrorMessage(`The country "${countryName}" is not available. Please select from: Palestine, Syria, Jordan, or Lebanon.`);
        return;
    }

    updatePageContent(normalizedCountryName);
}

document.addEventListener("DOMContentLoaded", initializeCountryPage);
