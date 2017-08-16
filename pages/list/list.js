const temp={
    subjects:[1,2,3]
}
Page({
    data: {
        data:{
            // list:temp.subjects,
            list:[],
            title:'hello'
        }
    },
    onLoad(params){
        const apiUrl = 'https://api.douban.com/v2/movie/'+ params.type;
        // console.log(params);
        const _this=this;
        wx.request({
            url: apiUrl, //仅为示例，并非真实的接口地址
            data: {},
            header: {
                'content-type': 'json'
            },
            success: function(res) {
                console.log(res.data);
                _this.setData({title:res.data.title,list:res.data.subjects})
            }
        })

    }
})