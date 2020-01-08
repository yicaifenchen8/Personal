import tab from './tab.js'
import blog from './blog.js'
import music from './music.js'
import video from './video.js'
import travel from './travel.js'

let pictrue = []

let groups = {}
for (let e of blog) {//of--遍历值
    let sk = e.title.indexOf('——')!=-1?'——':' '
    let type = e.title.split(sk)[0]
    type = type[0].toUpperCase()+  type.substr(1).toLowerCase()
    groups[type] = groups[type] || []
    groups[type].push(e)
    // groups[type].push(e)
}
let all = []
all = Object.keys(groups).map(key => {
    return {
        title: key,
        url: 'html/more.html?type=blog',
        datas: groups[key]
    }
})
// 或者
// for (let key in groups) {//in---遍历key
//     all.push({
//         title: key,
//         url: 'html/more.html?type=blog',
//         datas: groups[key]
//     })
// }

tab.forEach(e => {
    e.datas = eval(e.url.split('=')[1])
    all.push(e)
})

all.forEach(e=> {
    if(e.datas.length < 2){
        e.datas.push(...e.datas)//6666可以push多个元素
    }

    e.onclick = () => {
        console.log(e.datas)
        let type = e.url.split('=')[1]
        localStorage.setItem('more', JSON.stringify({
            type,
            datas: e.datas
        }))
        window.open('../'+e.url)
    }
})

export default all
