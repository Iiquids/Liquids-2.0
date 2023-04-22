var titleTab = document.getElementById("titleTab");

var iconTab = document.getElementById("iconTab");


function aboutBlankCloaking() {
    if (document.getElementById("aboutBlankCloaking").checked) {

        localStorage.setItem('aboutBlankCloaking', 'true');

    } else {

        localStorage.setItem('aboutBlankCloaking', 'false');
    }

}

(function() {
    if (localStorage.getItem('aboutBlankCloaking') === 'true') {

        document.getElementById("aboutBlankCloaking").checked = true;


    } else {
        document.getElementById("aboutBlankCloaking").checked = false;
    }
})();

// -------------

function nodeCursor() {
    if (document.getElementById("nodeCursor").checked) {

        localStorage.setItem('nodeCursor', 'true');

    } else {

        localStorage.setItem('nodeCursor', 'false');
    }

}

(function() {
    if (localStorage.getItem('nodeCursor') === 'true') {
        document.getElementById("nodeCursor").checked = true;
    }else if (localStorage.getItem('nodeCursor') == "false") {
        document.getElementById("nodeCursor").checked = false;
    } else {
        document.getElementById("nodeCursor").checked = true;
        localStorage.setItem('nodeCursor', 'true')
    }
})();

// -------------

function themeSwap() {
    if (document.getElementById("themeSwap").checked) {
        localStorage.setItem('themeSwap', 'true');
    } else {
        localStorage.setItem('themeSwap', 'false');
    }
}

function changeMenuTheme(integer) {
    setTheme(themes[integer])
    document.getElementById("themeChange").innerText = localStorage.getItem('theme');
}

(function() {
    if (localStorage.getItem('themeSwap') === 'true') {
        document.getElementById("themeSwap").checked = true;
    }else if (localStorage.getItem('themeSwap') == "false") {
        document.getElementById("themeSwap").checked = false;
    } else {
        document.getElementById("themeSwap").checked = false;
        localStorage.setItem('themeSwap', 'false');
    }

    document.getElementById("themeChange").innerText = localStorage.getItem('theme');

    const node = document.getElementById("menuChild");
    for (let i = 0; i < themes.length; i++) {
        const clone = node.cloneNode(true);
        const div = clone.childNodes[1].childNodes[1]
        div.innerText = themes[i];
        div.onclick = function() {changeMenuTheme(i)};
        document.getElementById("menu").appendChild(clone);
    }
    node.remove();
})();

// -------------

if ((localStorage.getItem('tabTitle')) != null) {

    document.title = localStorage.getItem('tabTitle');
}

if (localStorage.getItem('tabIcon') != null) {

    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');

    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = localStorage.getItem('tabIcon');

    document.getElementsByTagName('head')[0].appendChild(link);


}


document.getElementById("tabTitle").addEventListener("click", function() {

    localStorage.setItem('tabTitle', titleTab.value.trim());

    document.title = titleTab.value.trim();
})



document.getElementById("tabIcon").addEventListener("click", function() {

    localStorage.setItem('tabIcon', iconTab.value.trim());

    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');

    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = iconTab.value.trim();

    document.getElementsByTagName('head')[0].appendChild(link);

})