var host = window.location.host + '/Personal/'  //用绝对路径需要刷新才能显示 所以还是用相对路径
host = ''
console.log(host)
var datas = [
    {
        title:'博客',
        url:`${host}html/more.html?type=blog`
    },
    {
        title:'图片',
        url:`${host}html/more.html?type=pictrue`
    },
    {
        title:'视频',
        url:`${host}html/more.html?type=video`
    },
    {
        title:'音乐',
        url:`${host}html/more.html?type=music`
    },
    {
        title:'游记',
        url:`${host}html/more.html?type=travel`
    },

]

export default datas
