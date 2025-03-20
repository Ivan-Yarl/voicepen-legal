document.addEventListener('DOMContentLoaded', function() {
    // Обработка callback от Notion
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');
    const statusDiv = document.getElementById('status');

    if (error) {
        statusDiv.innerHTML = `Error: ${error}`;
        return;
    }

    if (code) {
        statusDiv.innerHTML = 'Получен код авторизации. Обмениваем на токен...';
        
        // Отправляем код на ваш бэкенд для обмена на токен
        // Замените URL на адрес вашего бэкенда
        fetch('YOUR_BACKEND_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code: code,
                redirectUri: config.redirectUri
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.access_token) {
                statusDiv.innerHTML = 'Успешная авторизация! Токен получен.';
                // Здесь можно сохранить токен или выполнить другие действия
            } else {
                statusDiv.innerHTML = 'Ошибка при получении токена';
            }
        })
        .catch(error => {
            statusDiv.innerHTML = `Ошибка: ${error.message}`;
        });
    }
});

// Функция для инициации OAuth
function startOAuth() {
    const authUrl = `${config.notionAuthUrl}?client_id=${config.clientId}&redirect_uri=${encodeURIComponent(config.redirectUri)}&response_type=code`;
    window.location.href = authUrl;
}
