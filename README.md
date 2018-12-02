# aly oss

#### JS代码

```javascript
const oss = require("edward-ali-oss");

console.log(oss.version);

// 初始化
let demo = new oss({
	region: 'oss-cn-beijing', // 地域
	accessKeyId: '***********', // 你的阿里云AK
	accessKeySecret: '*************', // 你的阿里云AS
	bucket: 'edward-blog' // bucket名称
});

// 列表返回1000个
demo.list().then(data => {
	data.objects.map(i => {
		console.log(i.name);
	})
})

// 删除一个
demo.delete('static/website2018/news/demo/images/icon-1a36c.svg').then(data => {
	console.log(data);
})

// 删除一组
demo.drop(['static/website2018/news/demo/styles/2.1e2ff18d5253ad1d6472.css', 'static/website2018/news/demo/styles/3.bca4f6e08fd8c56cbc04.css']).then(data => {
	console.log(data);
})

// 上传一个
demo.put('static/website2018/news/demo/javascripts/ossDel.js', '/Users/edward/linux/myoss/ossDel.js').then(data => {
	console.log(data);
})
```
