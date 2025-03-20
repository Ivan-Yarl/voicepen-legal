document.addEventListener('DOMContentLoaded', function() {
    // Получаем код из URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');

    if (error) {
        showError('Произошла ошибка при авторизации: ' + error);
        return;
    }

    if (!code) {
        showError('Код авторизации не получен');
        return;
    }

    // Здесь будет запрос на получение токена
    // Важно: в реальном приложении этот запрос должен выполняться на бэкенде
    // для безопасного хранения client_secret
    exchangeCodeForToken(code);
});

function showError(message) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').style.display = 'block';
    document.getElementById('error-message').textContent = message;
}

function showSuccess() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('success').style.display = 'block';
}

function exchangeCodeForToken(code) {
    // В реальном приложении этот запрос должен быть на бэкенд
    // Здесь только для демонстрации
    console.log('Получен код авторизации:', code);
    showSuccess();
}
