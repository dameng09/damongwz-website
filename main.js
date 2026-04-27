// ========== 导航栏切换 ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击菜单项后关闭移动端菜单
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========== 导航栏滚动效果 ==========
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ========== 活动导航链接 ==========
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== 返回顶部按钮 ==========
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== 表单提交 ==========
const form = document.getElementById('inquiryForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 获取表单数据
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        product: formData.get('product'),
        message: formData.get('message')
    };

    // 这里可以添加AJAX请求发送到后端
    console.log('Form submitted:', data);

    // 显示成功提示（实际项目中可替换为后端API调用）
    alert('感谢您的询价！我们将在24小时内回复您。');

    // 重置表单
    form.reset();
});

// ========== 滚动动画 ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// 观察需要动画的元素
document.querySelectorAll('.product-item, .app-item, .advantage-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// 添加动画类到CSS
const style = document.createElement('style');
style.textContent = `
    .animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ========== 平滑滚动到锚点 ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== 产品筛选（可选功能）==========
// 如果需要添加产品筛选功能，可以取消以下代码的注释

/*
const productItems = document.querySelectorAll('.product-item');
const filterButtons = document.querySelectorAll('.filter-btn');

// 为每个产品添加分类（需要在HTML中添加data-category属性）
productItems.forEach(item => {
    // item.dataset.category = 'pdms'; // 示例
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        productItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // 更新活动按钮
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
*/

// ========== 页面加载完成 ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '1';

    // 预加载图片（如果有）
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
    });
});

// ========== 防抖函数（用于优化滚动事件）==========
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 使用防抖优化滚动事件
const debouncedScroll = debounce(() => {
    // 需要在滚动时执行的代码
    console.log('Scroll event debounced');
}, 100);

// ========== 节流函数（用于优化频繁触发的事件）==========
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 使用节流优化滚动事件
const throttledScroll = throttle(() => {
    // 需要在滚动时执行的代码
    console.log('Scroll event throttled');
}, 100);

// 懒加载图片（如果需要）
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img.lazy');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

console.log('Dameng New Materials Website - Loaded Successfully');
