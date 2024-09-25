function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const messagesContainer = document.getElementById('chatbot-messages');

    if (userInput) {
        const userMessage = document.createElement('div');
        userMessage.textContent = `사용자: ${userInput}`;
        messagesContainer.appendChild(userMessage);

        // 챗봇 응답
        const botResponse = getBotResponse(userInput);
        const botMessage = document.createElement('div');
        botMessage.textContent = `답변: ${botResponse}`;
        messagesContainer.appendChild(botMessage);

        // 입력창 비우기
        document.getElementById('user-input').value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // 스크롤 내리기
    }
}

function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('안녕하세요')) {
        return '안녕하세요! 무엇을 도와드릴까요?';
    } else if (lowerInput.includes('일자리 종류')) {
        return '노인 일자리는 상담원, 활동 보조원, 재능 기부 등 다양한 형태가 있으며, 지역별로 제공되는 프로그램이 다를 수 있습니다.';
    } else if (lowerInput.includes('일자리 신청 결과')) {
        return '일자리 신청 후 결과는 보통 2주 이내에 이메일이나 전화로 안내됩니다. 정확한 일정은 각 일자리 공고에 명시되어 있습니다.';
    } else {
        return '죄송하지만, 그에 대한 정보는 없습니다.';
    }
}
