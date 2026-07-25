document.addEventListener('DOMContentLoaded', () => {

    // 1. التحقق من كلمة السر
    const loginBtn = document.getElementById('login-btn');
    const passwordInput = document.getElementById('password-input');
    const errorMsg = document.getElementById('error-msg');
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');

    const CORRECT_PASSWORD = "13/3/2006";

    function checkPassword() {
        const enteredPassword = passwordInput.value.trim();
        if (enteredPassword === CORRECT_PASSWORD) {
            loginScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            calculateDays(); // حساب الأيام بعد الدخول
        } else {
            errorMsg.style.display = 'block';
        }
    }

    loginBtn.addEventListener('click', checkPassword);
    
    // إمكانية الضغط على Enter لدخول الصفحة
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    // 2. حساب عدد الأيام تلقائياً من 15/02/2024
    function calculateDays() {
        const startDate = new Date('2024-02-15');
        const today = new Date();
        
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        document.getElementById('days-count').textContent = diffDays;
    }

    // 3. إنتاج القلوب المتطايرة في الخلفية
    const heartsContainer = document.getElementById('hearts-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        
        // موضع عشوائي أفقيًا
        heart.style.left = Math.random() * 100 + 'vw';
        
        // أحجام مختلفة للقلوب
        const size = Math.random() * 15 + 10;
        heart.style.fontSize = size + 'px';
        
        // مدة حركة مختلفة
        const duration = Math.random() * 3 + 4;
        heart.style.animationDuration = duration + 's';
        
        heartsContainer.appendChild(heart);

        // إزالة القلب بعد انتهاء الحركة لتخفيف العبء على المتصفح
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    // إنشاء قلب كل 400 مللي ثانية
    setInterval(createHeart, 400);
});

// 4. فتح وإغلاق بطاقات الرسائل
function toggleLetter(card) {
    card.classList.toggle('open');
}