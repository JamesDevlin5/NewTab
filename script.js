document
  .getElementById("engine-form")
  .addEventListener("change", function (event) {
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
      default:
        engine = "https://google.com/search";
    }
    // Update the search form's action
    document.getElementById("search-form").action = engine;
  });

document.getElementById("l-toggle").addEventListener("click", function (event) {
  let lContainer = document.getElementById("l-div");
  let toggle = event.target;
  if (toggle.value === "#") {
    // Previously visible, hide div
    toggle.value = "+";
    lContainer.display = "none";
    lContainer.maxHeight = "1em";
  } else {
    toggle.value = "#";
    lContainer.display = "block";
    lContainer.maxHeight = "auto";
  }
  for (child of document.querySelectorAll(".li-div")) {
    child.toggleAttribute("hidden");
  }
  for (child of document.querySelectorAll(".l-toggle-text")) {
    child.toggleAttribute("hidden");
  }
});

/* Surrounds the toggle label with a string */
function surroundToggleLabel() {
  /* Default (assumed) character size, in pixels. */
  let defCharSize = 14;
  let toggle = document.getElementById("l-toggle-label");
  let prefix = "----[  " + toggle.innerText + "  ]-";
  /* Figure out how much free space we have. Don't forget about the indent. */
  /* Convert from pixels to number of characters */
  let nChars = Math.floor(toggle.clientWidth / defCharSize);
  /* Account for existing prefix/suffix */
  nChars -= (2 + prefix.length);
  /* Apply padding */
  prefix = prefix.padEnd(nChars, "-");
  /* Inject HTML */
  toggle.innerHTML = prefix;
};

/* Just call this function once. */
document.getElementById("l-toggle").addEventListener("click", surroundToggleLabel, {once: true});
