const btn = document.querySelector(".changeColorBtn");
const colorGrid = document.querySelector(".colorGrid");
const colorValue = document.querySelector(".colorValue");

btn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: pickColor,
        },
        async (injectionResults) => {
            const [data] = injectionResults;
            if (data.result) {
                const color = data.result.sRGBHex;
                colorGrid.style.backgroundColor = color;
                colorValue.innerText = color;
            }
        }
    );
});

async function pickColor() {
    try {
        // picker
        const eyeDropper = new EyeDropper();
        return await eyeDropper.open().then((result) => console.log(result));
    } catch (error) {
        console.error(error);
    }
}
