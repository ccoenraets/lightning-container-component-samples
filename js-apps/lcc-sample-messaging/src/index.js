import LCC from 'lightning-container';

// Register for messages sent by hosting component
LCC.addMessageHandler(function(message) {
    document.getElementById('messageFromLC').value = message.value;
});

function send() {
    var msg = document.getElementById('messageToLC').value;
    // Send message to hosting component
    LCC.sendMessage(msg);
}

document.getElementById("sendBtn").addEventListener("click", send);