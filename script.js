document.getElementById('send-button').addEventListener('click', function() {
    const name = document.getElementById('name-input').value;
    const chatId = document.getElementById('chat-id-input').value;
    
    if(name && chatId) 
    {
        window.location.href = `nextPage.html?name=${encodeURIComponent(name)}&chatId=${encodeURIComponent(chatId)}`;
    } 
    else 
    {
        alert('Please fill in both fields');
    }
});
