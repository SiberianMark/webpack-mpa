webpack解决问题
	1. 模块化开发 --everything is module , every module import
	2. 依赖问题  --生成一个模块依赖的图，或者表，根据图或表管理依赖关系;https://webpack.js.org/concepts/dependency-graph/
	3. 按需加载
	4. 资源管理问题
	5. 部署问题
		5.1 CSS打包部署
		5.2 CSS，less,sass,model,JS，img等压缩合并编译处理

需解决的问题：
	1. 部署代码的时候如何清除用户浏览器遗留下来的上个版本的缓存
	2.热刷新

# 从0 开始构建webpack 多页面自动化构建开发环境

	## 步骤：
		1. npm init
		2. npm install webpack --save-dev
		3. 新建webpack.config.js
		4. 新建src目录用于存我们的源码文件
		5. 新建dist目录存放打包文件
		6. 配置webpack.config.js
			6.1: 配置多入口entry：{}
			6.2: 配置输出文件名以及路径
			6.3：配置资源加载器，让所有的资源文件可以进行模块化加载
				6.3.1: loading SimilarCSS：styLe-loader/css-loader
				6.3.2: loading img : url-loader/file-loader




# 常见问题
	1. require 与 import有什么区别？
		答：在webpack环境下进行编程打包从结果的角度来说是没有区别的，最后都编译成require然后静态加载
		不用于：require是野生标准，import是正式标准，随着发展，import回事主流，建议用import
	2. webpack为什么难学？
		答：我给你举个例子你就明白了，
		webpack的预处理功能中，预处理功能针对不同资源有大概七八种，如css预处理，有三种写法，在require("css-loader!style-loader"./style.css)直接写,可以在配置中写，可以在cli中写
		在配置中写，可以有两种方式，一种是rules中的use写法,一种是loaders写法，loaders中，有两种配置方式，一种是数组，一种是跟require一样的字符串，use中写可以有两种写法，一种是数组简写，一种是可以配置查询参数的对象写法，这些写法有什么区别，有些有区别， 有些只是看你喜欢，然后webpack中这种配置有几千几万条，你现在知道为什么难学了吗？这也是他功能强大原因哦，这还不包括每种写法的若干个配置参数如exclude,include,query,test,loader,等等
	3. url-loader和file-loader加载器有什么区别？
		答：rrl-loader是对file-loader的上层封装，比如webpack中对图片的加载器配置
		{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		这样在小于8K的图片将直接以base64的形式内联在代码中，可以减少一次http请求。
		推荐使用前者
