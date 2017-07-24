# ss-server.js


## 功能简介

    设置指定目录为该端口下的服务器根目录

## 安装

    $ npm install ss-server

## 运行

    $ ss-server run [dir］ [port］ [runtime]  [-d <dir>] [-p <port>] [-r <runtime>]

   
## 说明
    [dir] 目录为controller 和 view 根目录 默认值为当前执行路径
    [port]端口　默认值为3000
    [runtime] 可以指定(供部使用的静态页面根目录) 默认值为./


    -d <dir> -p <port> -r <runtime> 用于单独替换前面三个参数


    例如：

        $ ss-server run 'C:/a' 3000 'runtime'

        http://localhost:3000   对应到 C:/a/runtime/index.html (主要是静态内容存放路径)

        http://localhost:3000/home 对应到　C:/a/view/home/index.html(动态生成的文件路径)

        http://localhost:3000/home/a 对应到　C:/a/view/home/a.html(动态生成的文件路径)

    可以controller目录下创建对应的home.js 来复写默认的内容


    例如：
    　home.js
```js
module.exports={
    action:function(querystring,from,files){
        var response=this.response;
        var request=this.request;
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('success');
        response.end();
        //do something
    },
    //该方法返回指定模板下的内容
    action1:function(querystring){
        return this.render.view('view目录下的html',querystring)
        //return this.render.view(querystring)
                //return this.render.view();
    },
    //该方法返回json数据
    action2:function(){
        return this.render.json({a:1,b:1})
    },
    action3:function(){
        return this.render.tpl("字符串的模板",{a:1,b:2,querystring:arguments[0],formdata:qrguments[1]});
    }
});

```


## 关于模板

    简易的js模板类似asp
    <%逻辑语句%>
    <%=取值%>




