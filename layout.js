
function animation_text(targetDom){
    const text = document.querySelector(targetDom);  // 取得要轉換的文字元素
    const words = text.innerText.split('');    // 將文字切成一個個字元，存在陣列中
    let html = '';                             // 建立一個空字串

    // 將每個字元包裝在一個 <span> 元素中，加入到 html 字串中
    words.forEach((item, i) => {
        html += item === ' ' ? '&ensp;' : `<span>${item}</span>`;
    });

    // 將 html 字串設定為文字元素的內容
    text.innerHTML = html;

    //產生動態
    ScrollReveal().reveal(targetDom+' span', {
        origin: "bottom", 
        distance: "50px",
        opacity: 0,
        duration: 300,
        interval: 30,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        viewFactor: -0.3,
        reset: true,
    });
}