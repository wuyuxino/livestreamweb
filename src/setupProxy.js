const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
	app.use(
		"/v1",
		createProxyMiddleware({
			//api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
			target: "http://10.1.65.91:8999/v1", //配置转发目标地址(能返回数据的服务器地址)
			changeOrigin: true, //控制服务器接收到的请求头中host字段的值
			/*
					changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
					changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
					changeOrigin默认值为false，但我们一般将changeOrigin值设为true
			  */
			pathRewrite: { "^/v1": "" }, //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
			onProxyReq: (proxyReq, req, res) => {
				console.log('Proxying request to:', proxyReq.path);
			}
		})
	);
	app.use(
		"/file",
		createProxyMiddleware({
			//api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
			target: "http://127.0.0.1:10088/file", //配置转发目标地址(能返回数据的服务器地址)
			changeOrigin: true, //控制服务器接收到的请求头中host字段的值
			/*
					changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
					changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
					changeOrigin默认值为false，但我们一般将changeOrigin值设为true
			  */
			pathRewrite: { "^/file": "" }, //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
			onProxyReq: (proxyReq, req, res) => {
				console.log('Proxying request to:', proxyReq.path);
			}
		})
	);
}
