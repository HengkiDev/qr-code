let html5QrcodeScanner;

function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(`Scan result: ${decodedText}, decodedResult: ${decodedResult}`);
    document.getElementById('result-text').innerText = decodedText;
    document.getElementById('result').style.display = 'block';
    html5QrcodeScanner.clear();
    document.getElementById('start-scan').style.display = 'block';
}

function onScanFailure(error) {
    // Handle scan failure, usually better to ignore and keep scanning.
    console.warn(`Code scan error: ${error}`);
}

function startScan() {
    html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    document.getElementById('start-scan').style.display = 'none';
}

// Initialize the scanner
startScan();