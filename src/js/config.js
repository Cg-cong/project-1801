/*
	requirejs的配置文件 
 */
require.config({
	// baseUrl:'lib',

	// 配置别名（虚拟路径）
	paths:{
		// 格式：别名:真实路径（基于baseUrl）
		jquery:'../lib/jquery-3.2.1',
		common:'./common',
		base:'./base',
		lunbo:'../lib/lunbo',
		fdj:'../lib/fdj',
		// lbtcj:'./lbtcj',
		// fdjcj:'./fdjcj',
		index:'./index',
		car:'./car',
		goodslist:'./goodslist',
		list:'./list',
		login:'./login',
		reg:'./reg'

		

		

	},

	// 配置依赖
	shim:{
		lunbo:['jquery','index'],
		fdj:['jquery','goodslist'],
		goodslist:['common','jquery'],
		index:['common','jquery'],
		login:['common'],
		reg:['common']



		// lbtcj:['lunbo'],

		
	}
});
