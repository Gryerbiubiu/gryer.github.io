// 获取流星元素
const shootingStar = document.querySelector('.shooting-star');

// 随机生成流星初始位置
const startX = Math.random() * window.innerWidth;
const startY = Math.random() * window.innerHeight;

// 设置流星初始位置
shootingStar.style.left = startX + 'px';
shootingStar.style.top = startY + 'px';

// 动画函数，控制流星运动
function animateStar() {
    shootingStar.style.animation = 'none'; // 重置动画

    // 随机生成终点位置
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;

    // 计算流星的旋转角度
    const angle = Math.atan2(endY - startY, endX - startX);
    const angleDeg = angle * (180 / Math.PI);

    // 设置流星的旋转和位移
    shootingStar.style.transform = `rotate(${angleDeg}deg)`;
    shootingStar.style.left = endX + 'px';
    shootingStar.style.top = endY + 'px';

    // 重新启动动画
    shootingStar.style.animation = 'shootingStar 5s linear infinite';

    // 动画结束后重新开始
    shootingStar.addEventListener('animationiteration', animateStar);
}

// 启动第一次动画
animateStar();
