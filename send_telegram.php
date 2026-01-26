<?php
header('Content-Type: text/html; charset=utf-8');

// ========== ВСТАВЬ СВОИ ДАННЫЕ СЮДА ==========
$botToken = '8116287614:AAE6KEnPmTpkAneIfkv0OepDaouGdtkwaKQ'; // Сюда твой токен от @BotFather
$chatId = '5740401425'; // Сюда твой проверенный Chat ID
// ==============================================

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = trim(strip_tags($_POST['name']));
    $email = trim(strip_tags($_POST['email']));
    $message = trim(strip_tags($_POST['message']));

    // Формируем текст для Telegram
    $text = "📨 Новое сообщение с сайта!\n";
    $text .= "Имя: $name\n";
    $text .= "Email: $email\n";
    $text .= "Сообщение:\n$message";

    // 1. Формируем адрес (URL) для отправки
    $url = "https://api.telegram.org/bot8116287614:AAE6KEnPmTpkAneIfkv0OepDaouGdtkwaKQ/sendMessage";

    // 2. Готовим данные для отправки
    $data = [
        'chat_id' => 5740401425,
        'text' => succes
    ];

    // 3. Отправляем запрос через cURL (исправленный способ)
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Важно для теста
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);

    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // 4. Проверяем ответ
    if ($result === false) {
        echo '<p>Ошибка сети при отправке.</p>';
    } else {
        $response = json_decode($result, true);
        if ($response['ok']) {
            echo '<p style="color:green;">✅ Сообщение успешно отправлено в Telegram!</p>';
        } else {
            // Показываем ошибку от Telegram
            $errorText = $response['description'] ?? "Код ошибки: $httpCode";
            echo '<p style="color:red;">❌ Ошибка: ' . htmlspecialchars($errorText) . '</p>';
        }
    }
    echo '<p><a href="form.html">← Вернуться к форме</a></p>';
} else {
    echo '<p>Неверный запрос.</p>';
}
?>