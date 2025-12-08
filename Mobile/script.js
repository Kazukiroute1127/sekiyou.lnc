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

