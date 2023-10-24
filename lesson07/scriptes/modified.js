document.addEventListener("DOMContentLoaded", function () {
    const lastModifiedElement = document.getElementById("lastModified");

    if (document.lastModified) {
        lastModifiedElement.textContent = document.lastModified;
    }
});
