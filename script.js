// Навигация между страницами
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация навигации
    initNavigation();
    
    // Инициализация формы
    initFeedbackForm();
});

function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            
            // Убираем активный класс у всех кнопок и страниц
            navButtons.forEach(btn => btn.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке и странице
            this.classList.add('active');
            document.getElementById(targetPage).classList.add('active');
        });
    });
}

function initFeedbackForm() {
    const feedbackForm = document.getElementById('feedbackForm');
    const formMessage = document.getElementById('formMessage');
    
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем данные формы
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            version: document.getElementById('version').value,
            theme: document.getElementById('theme').value
        };
        
        // Валидация
        if (validateForm(formData)) {
            // Имитация отправки формы
            simulateFormSubmission(formData);
        }
    });
}

function validateForm(formData) {
    const formMessage = document.getElementById('formMessage');
    
    // Проверка имени
    if (formData.name.trim().length < 2) {
        showMessage('Пожалуйста, введите корректное имя', 'error');
        return false;
    }
    
    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showMessage('Пожалуйста, введите корректный email', 'error');
        return false;
    }
    
    // Проверка версии
    if (!formData.version) {
        showMessage('Пожалуйста, выберите версию игры', 'error');
        return false;
    }
    
    // Проверка тематики
    if (formData.theme.trim().length < 10) {
        showMessage('Пожалуйста, подробнее опишите тематику сборки', 'error');
        return false;
    }
    
    return true;
}

function simulateFormSubmission(formData) {
    // Имитация задержки отправки
    showMessage('Отправка данных...', 'success');
    
    setTimeout(() => {
        // В реальном приложении здесь был бы AJAX запрос на сервер
        console.log('Данные формы:', formData);
        
        showMessage('Спасибо! Ваша заявка принята. Мы свяжемся с вами в течение 24 часов.', 'success');
        
        // Очистка формы
        document.getElementById('feedbackForm').reset();
        
        // Автоматическое скрытие сообщения через 5 секунд
        setTimeout(() => {
            hideMessage();
        }, 5000);
        
    }, 1500);
}

function showMessage(text, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = text;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';
}

function hideMessage() {
    const formMessage = document.getElementById('formMessage');
    formMessage.style.display = 'none';
}

// Дополнительные функции для улучшения UX
function addSmoothAnimations() {
    // Добавляем плавные переходы для всех элементов
    const style = document.createElement('style');
    style.textContent = 
function validateForm(formData)  {
    const formMessage = document.getElementById('formMessage')};
    
    // Проверка имени
    if (formData.name.trim().length < 2) {
        showMessage('Пожалуйста, введите корректное имя', 'error');
        return false;
    }
    
    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showMessage('Пожалуйста, введите корректный email', 'error');
        return false;
    }
    
    // Проверка версии
    if (!formData.version) {
        showMessage('Пожалуйста, выберите версию игры', 'error');
        return false;
    }
    
    // Проверка тематики
    if (formData.theme.trim().length < 10) {
        showMessage('Пожалуйста, подробнее опишите тематику сборки', 'error');
        return false;
    }
    
    return true;
}

function simulateFormSubmission(formData) {
    // Имитация задержки отправки
    showMessage('Отправка данных...', 'success');
    
    setTimeout(() => {
        // В реальном приложении здесь был бы AJAX запрос на сервер
        console.log('Данные формы:', formData);
        
        showMessage('Спасибо! Ваша заявка принята. Мы свяжемся с вами в течение 24 часов.', 'success');
        
        // Очистка формы
        document.getElementById('feedbackForm').reset();
        
        // Автоматическое скрытие сообщения через 5 секунд
        setTimeout(() => {
            hideMessage();
        }, 5000);
        
    }, 1500);
}