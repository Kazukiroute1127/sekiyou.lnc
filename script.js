/* * ハンバーガーメニューのためのJavaScript 
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // HTMLからハンバーガーボタンとナビゲーションメニューを取得
    const hamburger = document.getElementById('hamburger-button');
    const nav = document.getElementById('global-nav');

    // ハンバーガーボタンがクリックされた時の処理
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            // ボタン自体（三本線がX印になるため）
            hamburger.classList.toggle('active');
            // ナビゲーションメニュー（表示/非表示のため）
            nav.classList.toggle('active');
        });
    }
});


// ... (もし他にハンバーガーメニューなどのコードがあれば、それはそのまま残してください) ...

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('intro-video');
    const loaderWrap = document.getElementById('loader-wrap');
    const loaderPercent = document.getElementById('loader-percent');

    // 必要な要素が存在しない場合は何もしない
    if (!video || !loaderWrap || !loaderPercent) return;

    video.addEventListener('canplay', () => {
        const duration = video.duration;
        const totalTime = (!duration || isNaN(duration)) ? 1000 : duration * 1000;

        let start = null;

        function updateProgress(timestamp) {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            let percent = Math.min((elapsed / totalTime) * 100, 100);

            loaderPercent.textContent = Math.floor(percent) + '%';

            if (percent < 100) {
                requestAnimationFrame(updateProgress);
            } else {
                setTimeout(() => {
                    loaderWrap.classList.add('loaded');
                }, 300);
            }
        }

        requestAnimationFrame(updateProgress);
    });
});