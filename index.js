// <script type="module" 时不能省略.js
import datas from "./config/blog.js";

var left = document.getElementById('slice-left')
var right = document.getElementById('slice-right')

for (let e of datas) {
    // 不能这样写<div id="cs"/>
    // css style 能生效
    let div =`
        <div style="margin: 0px;padding: 16px;border-bottom: 1px dotted #ddd;display: flex;align-items: center;">
            <a class="blog" target="_blank" style="margin: 0px;padding: 0px;color: red;font-size: 14px;color: #4d4d4d;display: flex;align-items: center;" href="` + e.url + `">` + e.title + `</a>
        </div>
    `
    if (datas.indexOf(e)<datas.length/2)
        left.innerHTML += div
    else
        right.innerHTML += div
}
