document.getElementById("engine-form").addEventListener("change", function (event) {
    // Define the future target host
    let engine = "";
    // Determine which option was selected
    switch (event.target.value) {
        case "google": {
            engine = "https://google.com/search";
            break;
        }
        case "github": {
            engine = "https://github.com/search";
            break;
        }
        case "crates": {
            engine = "https://crates.io/search";
            break;
        }
        case "mdn": {
            engine = "https://developer.mozilla.org/en-US/search";
            break;
        }
        default: engine = "https://google.com/search";
    }
    // Update the search form's action
    document.getElementById("search-form").action = engine;
});
