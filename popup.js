const btn = document.querySelector(".changeColorBtn");

btn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
});
