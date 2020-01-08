// <script type="module" 时不能省略.js
import blogs from "./config/blog.js";
import musics from "./config/music.js";
import videos from "./config/video.js";
import tabs from "./config/tab.js";
import travels from "./config/travel.js";
let pictrues = []

let isPhone = window.outerWidth < 720

var left = document.getElementById('slice-left')
var right = document.getElementById('slice-right')

//blog
for (let e of blogs) {
    let i = blogs.indexOf(e)
    if(i>21) break
    // 不能这样写<div id="cs"/>
    // css style 能生效
    let div =`
        <div style="margin: 0px;padding: 16px;border-bottom: 1px dotted #ddd;display: flex;align-items: center;">
            <a class="blog" target="_blank" style="margin: 0px;padding: 0px;font-size: 16px;color: #4d4d4d;display: flex;align-items: center;" href="${e.url}">${e.title}</a>
        </div>
    `
    if (blogs.indexOf(e)<blogs.length/2)
        left.innerHTML += div
    else
        right.innerHTML += div
}

//pic
for (let i = 0; i < 8; i++) {
    var e = document.getElementById('photo-' + String.fromCharCode('a'.charCodeAt(0)+i))
    e.setAttribute("data-src", `image/pic/pic_${i + 1}.jpg`)

    var a = e.parentNode
    a.setAttribute("href", `image/pic/pic_${i + 1}b.jpg`)
    a.setAttribute("target", "_blank")
}

//music
var music = document.getElementById('music')
for (let e of musics) {
    let div =`
        <div style="margin: 0px;padding: 0px;border-bottom: 1px dotted #ddd;display: flex;align-items: center;">
            <a target="_blank" style="margin: 0px;padding: 16px;font-size: 16px;color: #4d4d4d;display: flex;align-items: center;" href="${e.url}">${e.title}</a>
        </div>
    `
    music.innerHTML += div
}

//video
var video = document.getElementById('video')
for (let e of videos) {
    let div =`
        <div class="block" title="${e.title}">
            <a style="text-align: center" target="_blank" href="${e.url}">
                <div class="overlay">
                    <img data-src="image/video/v_play_icon.png" />
                </div>
            </a>
            <img data-src="${e.imgUrl}"/>
        </div>
    `
    video.innerHTML += div
}

//tab
var tab = document.getElementById('tab')
window.clicks_tabs = []
for (let e of tabs) {
    let i = tabs.indexOf(e)
    window.clicks_tabs[i] = ()=>{ //动态绑定事件 需要挂载到window对象上 不然找不到方法-----或者动态创建----或者根据id动态绑定xxx.onclick=（）=>{}
        let type = e.url.split('=')[1]
        let datas = eval(type+'s')
        localStorage.setItem('more', JSON.stringify({
            type,
            datas
        }))
        window.open(e.url)
    }
    let div =`
        <div style="margin: 0px;padding: 0px 0px;border-right: 1px dotted #ccc;display: flex;align-items: center;">
            <a class="tab" 
                style="margin: 0px;padding: 16px 32px;font-size: 16px;color: #4d4d4d;display: flex;align-items: center;" 
                onclick="clicks_tabs[${i}]()"
                >${e.title}</a>
        </div>
    `
    tab.innerHTML += div
}

//all
{
    var all = document.getElementById('all')
    var div = document.createElement("div");
    var sty = div.style;
    div.innerHTML = `-----More---->`

    let ip = true
    let color = ip?150:100
    div.style.color = `rgba(${color},${color},${color},${1})`
    div.style.fontSize = isPhone?'16px':'30px'
    div.style.display = 'flex'
    div.style.alignItems = 'center'//alignItems和align-items效果一样
    div.style.justifyContent = 'center'
    div.style.wordSpacing = 'nowrap'
    div.style.flexWrap = 'nowrap'
    div.style.wordBreak = 'keep-all'
    div.style.whiteSpace = 'nowrap'
    let b = ip?256:0
    div.style.background = `rgba(${b},${b},${b},${ip?0.9:0.1})`
    let bs = ip?1:0
    sty.border = `solid ${bs}px rgba(${0},${0},${0},${0.1})`
    div.style.borderRadius = '1000px'
    div.onclick = ()=>{
        window.open('./html/special.html')
    }
    div.onmouseover = ()=>{
        sty.cursor = 'pointer'
        div.style.color = `rgba(${106},${106},${106},${0.5})`
    }
    div.onmouseout = ()=>{
        sty.cursor = 'default'
        div.style.color = `rgba(${106},${106},${106},${1})`
    }
    sty.position = "absolute";
    let s = isPhone ? 60:120
    sty.width = s+"px";
    sty.height = s+"px";

    all.appendChild(div)
}

//load img
var imgs = document.getElementsByTagName('img')
for(let img of imgs){
    let src = img.getAttribute('data-src')
    if (!src) continue
    let i = new Image();
    i.src = src
    i.onload = ()=>{
        img.src = i.src
    }
}
