const recipientInput = document.getElementById('recipientName');
const senderInput = document.getElementById('senderName');
const messageInput = document.getElementById('message');
const bgColorSelect = document.getElementById('bgColor');
const fontStyleSelect = document.getElementById('fontStyle');
const borderStyleSelect = document.getElementById('borderStyle');

const previewRecipient = document.getElementById('previewRecipient');
const previewMessage = document.getElementById('previewMessage');
const previewSender = document.getElementById('previewSender');
const cardPreview = document.getElementById('cardPreview');

const resetBtn = document.getElementById('resetBtn');
const downloadBtn = document.getElementById('downloadBtn');

function updatePreview() {
    previewRecipient.textContent = 'Dear ' + recipientInput.value + ',';
    previewMessage.textContent = messageInput.value;
    previewSender.textContent = 'From, ' + senderInput.value;

    cardPreview.style.backgroundColor = bgColorSelect.value;
    cardPreview.style.fontFamily = fontStyleSelect.value;
    cardPreview.style.borderStyle = borderStyleSelect.value;
}

recipientInput.addEventListener('input', updatePreview);
senderInput.addEventListener('input', updatePreview);
messageInput.addEventListener('input', updatePreview);
bgColorSelect.addEventListener('change', updatePreview);
fontStyleSelect.addEventListener('change', updatePreview);
borderStyleSelect.addEventListener('change', updatePreview);

function resetToDefaults() {
    recipientInput.value = 'Friend';
    senderInput.value = "Me";
    messageInput.value = 'Wishing you an awesome day!!';
    bgColorSelect.value = '#d4edda'; 
    fontStyleSelect.value = "'Segoe UI', Arial, sans-serif"; 
    borderStyleSelect.value = 'solid';

    updatePreview();
}

resetBtn.addEventListener('click', resetToDefaults);

function showDownloadMessage() {
    const cardElement = document.getElementById('cardPreview');

    html2canvas(cardElement, {
        scale: 2,
        backgroundColor: null
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'my-greeting-card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }). catch(error => {
        alert('Sorry, I could not download it');
    })
}

downloadBtn.addEventListener('click', showDownloadMessage);

updatePreview();
