//配置一些
var datas = [
    {
        title:`avatar`,
        url:`image/avatar.jpg`,
        imgUrl:`image/avatar.jpg`,
    },
]


//动态插入一些
for (let i = 11; i >= 0; i--){
    datas.push({
        title:`img_` + i,
        url:`image/pic/pic_${i + 1}b.jpg`,
        imgUrl:`image/pic/pic_${i + 1}.jpg`,
    })
}


//数据处理
//..

//输出
export default datas
