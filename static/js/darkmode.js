var scrollbar = document.getElementById("scroller");

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.getElementById("themer").setAttribute("data-theme", themeName)
}

function setScroller(scrollerName) {
    localStorage.setItem('scroller', scrollerName);
    scrollbar.setAttribute("href", scrollerName)
}

var themes = ['light', 'dark', 'cupcake', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'black', 'aqua', 'wireframe', 'luxury', 'dracula', 'night', 'coffee', 'winter'];
function setRandomTheme() {
    setTheme(themes[Math.floor(Math.random() * (themes.length - 0) + 0)]);
    document.getElementById("themeChange").innerText = localStorage.getItem('theme');
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'luxury') {
        setTheme('light');
    } else {
        setTheme('luxury');
    }
}

function toggleScroller() {
    if (localStorage.getItem('scroller') === ' ./css/scroll2.css') {
        setScroller(" ./css/scroll2.css")
    } else {
        setTheme('luxury');
        setScroller(" ./css/scroll.css")
    }
}

(function() {
    if (localStorage.getItem('themeSwap') === 'true') {
        setRandomTheme();
        setScroller(" ./css/scroll.css");
    } else {
        if (localStorage.getItem('theme') == "null"){
            localStorage.setItem('theme', 'light') ;
            setTheme('light');
            setScroller(" ./css/scroll.css")
        } else {
            setTheme(localStorage.getItem('theme'));
            setScroller(" ./css/scroll.css")
        }
    }
})();