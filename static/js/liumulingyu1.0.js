/*点击分类*/
var host="http://47.106.187.85/"
var host2="http://localhost:8089/"
/*分类点击*/
function filterCategoryClick(data) {
    var childs = document.getElementById("category").children
    for (i = 1; i < childs.length; i++) {
        if (data == i) {
            childs[i].children[0].setAttribute("class", "on");
            //childs[i].children[0].getAttribute("name")
            start(1);
        } else {
            childs[i].children[0].setAttribute("class", "");
        }
    }
}
start(0);
function start(type){
    $.ajax({
        url: host+"wechat/getWechatList",
        type: 'GET',
        dataType: 'json',
        data: {
            "type":type
        },
    }).done(function(response) {
        if (response.meta.success){
            feedList(response.data)
        }
    });
}
function feedList(data) {
    var div=document.getElementById("feed-list");
    div.innerHTML="";
    for (i=0;i<data.length;i++){
        var itemDiv=document.createElement("div");
        itemDiv.setAttribute("class","col-sm-6 col-md-4 col-lg-3")
        var article=document.createElement("article")
        article.setAttribute("class","post post-grid post-450 type-post status-publish format-standard has-post-thumbnail hentry category-work category-tool tag-121 tag-118 tag-117 tag-110")
        article.setAttribute("id","post-450")
        var entryMedia=document.createElement("div");
        entryMedia.setAttribute("class","entry-media");
        var placeholder=document.createElement("div");
        placeholder.setAttribute("class","placeholder");
        var img=document.createElement("img");
        var a=document.createElement("a");
        a.setAttribute("href","#")
        img.setAttribute("class","lazyload");
        img.setAttribute("data-src","static/picture/wechat_qcode.jpg");
        img.setAttribute("src","data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");
        a.append(img)
        placeholder.append(a)
        var entryWrapper=document.createElement("div");
        entryWrapper.setAttribute("class","entry-wrapper");

        var entryExcerpt=document.createElement("div");
        entryExcerpt.setAttribute("class","entry-excerpt u-text-format");
        entryExcerpt.append(data[i].describe);
        entryWrapper.append(entryExcerpt)
        entryMedia.append(placeholder);
        article.append(entryMedia);
        article.append(entryWrapper);
        itemDiv.append(article);
        div.append(itemDiv);
    }
}