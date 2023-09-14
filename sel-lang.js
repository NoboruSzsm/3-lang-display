function switchLanguage(language) {
    var entryToTop = document.querySelector('.entry-to-top'); // class: entry-to-top を変数に代入
    var englishContent = entryToTop.querySelector('.english-content'); // class: english-content を変数に代入
    var japaneseContent = entryToTop.querySelector('.japanese-content'); // class: japanese-content を変数に代入
    var spanishContent = entryToTop.querySelector('.spanish-content'); // class: spanish-content を変数に代入

    if (language === 'english') { // もし language が english なら
        englishContent.style.display = 'block'; // 英語を表示
        japaneseContent.style.display = 'none'; // 日本語を非表示
        spanishContent.style.display = 'none'; // スペイン語を非表示
    } else if (language === 'japanese') { // もし japanese なら
        englishContent.style.display = 'none'; // 英語を非表示
        japaneseContent.style.display = 'block'; // 日本語を表示
        spanishContent.style.display = 'none'; // スペイン語を非表示
    } else if (language === 'spanish') { // もし spanish なら
        englishContent.style.display = 'none'; // 英語を非表示
        japaneseContent.style.display = 'none'; // 日本語を非表示
        spanishContent.style.display = 'block'; // スペイン語を表示
    }
}

window.onload = function() { // ページが読み込まれたら実行
    var browserLanguage = navigator.language.toLowerCase(); // ブラウザで使用されている言語情報を取得

    if (browserLanguage.includes('ja')) { // ブラウザの言語が日本語に一致する場合
        switchLanguage('japanese');
    } else if (browserLanguage.includes('es')) { // ブラウザの言語がスペイン語に一致する場合
        switchLanguage('spanish');
    } else { // ブラウザの言語が上記に一致しない場合、または言語情報が利用できない場合は英語を表示
        switchLanguage('english');
    }
};
