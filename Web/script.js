// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // 아이콘 변경 로직
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// '자세히 보기' 펼치기/접기 (Expand/Collapse)
const toggleBtn = document.getElementById('toggleDetailBtn');
const detailInfo = document.getElementById('detailInfo');

toggleBtn.addEventListener('click', () => {
    detailInfo.classList.toggle('active');
    
    // 버튼 텍스트 변경
    if (detailInfo.classList.contains('active')) {
        toggleBtn.innerHTML = '접기 <i class="fas fa-chevron-up"></i>';
    } else {
        toggleBtn.innerHTML = '자세히 보기 <i class="fas fa-chevron-down"></i>';
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
