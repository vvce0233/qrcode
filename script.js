let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
let qrLink = document.getElementById('qrLink');
let closeBtn = document.getElementById('closeBtn'); // Get reference to the Close button

function generateQR() {
    if (qrText.value.length > 0) {
        let qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        // Set the image source and link href to the QR code URL
        qrImage.src = qrUrl;
        qrLink.href = qrUrl;

        imgBox.classList.add('show-img');

        // Show the Close button after generating the QR code
        closeBtn.style.display = 'block';
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}

function goHome() {
    // Navigate back to the homepage
    window.location.href = "index.html"; // Update the link if needed
}
