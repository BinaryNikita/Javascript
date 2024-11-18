function downloadData(callback) {
    console.log("Starting download...");
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        console.log("Download complete");
        callback(data);
    }, 2000);
}

// Example usage:
downloadData((data) => {
    console.log("Processing downloaded data:", data);
});
