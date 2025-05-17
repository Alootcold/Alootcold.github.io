document.addEventListener('DOMContentLoaded', function() {
    // 随机首页预览图
    const heroImages = [
        'hero-image1.png',
        'hero-image2.png',
        'hero-image3.png',
        'hero-image4.png',
        'hero-image5.png'
    ];
    
    const heroImageElement = document.querySelector('.hero-image img');
    
    // 初始随机图片
    if (heroImageElement) {
        const randomIndex = Math.floor(Math.random() * heroImages.length);
        heroImageElement.src = heroImages[randomIndex];
        
        // 定时切换图片
        setInterval(() => {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * heroImages.length);
            } while (heroImageElement.src.includes(heroImages[newIndex]));
            
            // 淡出淡入效果
            heroImageElement.style.opacity = '0';
            
            setTimeout(() => {
                heroImageElement.src = heroImages[newIndex];
                heroImageElement.style.opacity = '1';
            }, 500);
        }, 5000); // 每5秒切换一次
    }
    
    // FAQ折叠面板
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // 关闭其他打开的FAQ项
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // 切换当前FAQ项的状态
            item.classList.toggle('active');
        });
    });
    
    // 平滑滚动
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 动画效果
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .download-card, .faq-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 初始化元素样式
    const initAnimation = function() {
        const elements = document.querySelectorAll('.feature-card, .download-card, .faq-item');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // 触发第一次动画
        animateOnScroll();
    };
    
    initAnimation();
    
    // 监听滚动事件
    window.addEventListener('scroll', animateOnScroll);
}); 