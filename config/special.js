import tab from './tab.js'
import blog from './blog.js'
import music from './music.js'
import video from './video.js'
import travel from './travel.js'
import pictrue from './pictrue.js'


let groups = {}
for (let e of blog) {//of--遍历值
    let type = e.type
    groups[type] = groups[type] || []
    groups[type].push(e)
}
let all = []
all = Object.keys(groups).map(key => {
    return {
        title: key,
        url: 'html/more.html',
        type:'blog',
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
    e.datas = eval(e.type)
    all.push(e)
})

all.forEach(e=> {
    if(e.datas.length < 2){
        e.datas.push(...e.datas)//6666可以push多个元素
    }

    e.onclick = () => {
        let type = e.type
        localStorage.setItem('more', JSON.stringify({
            type,
            datas: e.datas
        }))
        window.open('../'+e.url)
    }
})

export default all
