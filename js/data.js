new Vue({
    el: '#newArticle',
    data:{
        title_1:'最近更新:《一只老鼠死了》',
        url1:'http://mp.weixin.qq.com/s/MTDiPFIV8NCQr8vY9r6MqA',
        title_2:'大学生们，文学作品开始征稿啦！',
        url2:'./college.html'
    }
});

new Vue({
	el: '#article',
	data: {
	    items: [
	    	{
				name:'努力变成你喜欢的样子，可是你还是不爱我',
				author:'我给你写信',
				time:'2017/10/23',
				url:'http://mp.weixin.qq.com/s/KjgQgmqcxPWM-6HvBC7sxQ',
				img:'./images/list_img/article63.jpg'
			},
	    	{
				name:'你又回家了',
				author:'布罗茨基',
				time:'2017/10/20',
				url:'http://mp.weixin.qq.com/s/gsS8EW4cjUdxovpbat7GIw',
				img:'./images/list_img/article003.jpg'
			},
	    	{
				name:'在德国做个垂钓的美男子有多难',
				author:'佚名',
				time:'2017/10/18',
				url:'http://mp.weixin.qq.com/s/L0gO9jHk7epXVqooB_cXfA',
				img:'./images/list_img/article19.jpg'
			},
	    	{
				name:'一颗石榴籽儿，两对石榴籽儿',
				author:'可亭',
				time:'2017/10/15',
				url:'http://mp.weixin.qq.com/s/Y5RHliNlCVLRRYJvP87otQ',
				img:'./images/list_img/article36.jpg'
			},
	    	{
				name:'风说，今天讲山的故事',
				author:'刈剩稻香',
				time:'2017/10/13',
				url:'http://mp.weixin.qq.com/s/06eatuqcOVBw5aCx8QC9SA',
				img:'./images/list_img/article53.jpg'
			},
	    	{
				name:'秋月迷乱的晚上',
				author:'叶小松',
				time:'2017/10/10',
				url:'http://mp.weixin.qq.com/s/YrORCcfYZqLoPNpuMWgHIQ',
				img:'./images/list_img/article70.jpg'
			},
	    	{
				name:'八月十五，是一个动词',
				author:'润无',
				time:'2017/09/27',
				url:'http://mp.weixin.qq.com/s/71txfNc5D2kIrrmV9xM1rA',
				img:'./images/list_img/article27.jpg'
			},
	    	{
				name:'台风天去看海里的烟火',
				author:'刈剩稻香',
				time:'2017/09/27',
				url:'http://mp.weixin.qq.com/s/_czVla0b2FzHnur84t93Kw',
				img:'./images/list_img/article42.jpg'
			},
	    	{
				name:'寻石记｜迟子建',
				author:'迟子建',
				time:'2017/09/24',
				url:'http://mp.weixin.qq.com/s/7ZzmaecDF43XhGzfuNZB5g',
				img:'./images/list_img/article21.jpg'
			},
	    	{
				name:'一只老鼠死了',
				author:'叶小松',
				time:'2017/09/22',
				url:'http://mp.weixin.qq.com/s/MTDiPFIV8NCQr8vY9r6MqA',
				img:'./images/list_img/article70.jpg'
			},
	    	{
				name:'三原县走出的“女马云”',
				author:'还读',
				time:'2017/09/20',
				url:'http://mp.weixin.qq.com/s/qAaztULADKl1NBYhVOZvvg',
				img:'./images/list_img/article69.jpg'
			},
	    	{
				name:'雪:血',
				author:'可亭',
				time:'2017/09/13',
				url:'http://mp.weixin.qq.com/s/nqo6cPMzV9f0JTHldORkJg',
				img:'./images/list_img/article68.jpg'
			},
	    	{
				name:'我背叛着神，挑剔一个清晨',
				author:'刈剩稻香',
				time:'2017/09/11',
				url:'http://mp.weixin.qq.com/s/rGyqT8-Eo_zcMJqeGSCp-w',
				img:'./images/list_img/article67.jpg'
			},
	    	{
				name:'我的老师',
				author:'魏巍',
				time:'2017/09/09',
				url:'http://mp.weixin.qq.com/s/OS4cjheEOVVy72cV8R_fpw',
				img:'./images/list_img/article66.jpg'
			},
	    	{
				name:'还想再掬一捧碧绿入心房',
				author:'刈剩稻香',
				time:'2017/09/08',
				url:'http://mp.weixin.qq.com/s/7spMYNs_kbNos8H8mVznEw',
				img:'./images/list_img/article65.jpg'
			},
	    	{
				name:'失去诗题的诗',
				author:'叶小松',
				time:'2017/09/06',
				url:'http://mp.weixin.qq.com/s/-ldBu3UreM4TadKPEC8Yog',
				img:'./images/list_img/article64.jpg'
			},
	    	{
				name:'外公',
				author:'糕叔',
				time:'2017/09/04',
				url:'http://mp.weixin.qq.com/s/KMZEXxraW4mYpHwtxDRkKA',
				img:'./images/list_img/article16.jpg'
			},
	    	{
				name:'女人的手',
				author:'迟子建',
				time:'2017/09/02',
				url:'http://mp.weixin.qq.com/s/VZCGCXfdWgTR-ZU0HBAh1Q',
				img:'./images/list_img/article02.jpg'
			},
	    	{
				name:'从前父爱如山，现在我做你的靠山',
				author:'吴牛',
				time:'2017/09/01',
				url:'http://mp.weixin.qq.com/s/PgAj133qWf40809_kpE78w',
				img:'./images/list_img/article63.jpg'
			},
	    	{
				name:'爱是动词',
				author:'叶小松',
				time:'2017/08/30',
				url:'http://mp.weixin.qq.com/s/J4muqoA5uKu5ZR9Tu_oqVA',
				img:'./images/list_img/article29.jpg'
			},
	    	{
				name:'飞进哪一扇半掩的芳菲',
				author:'郭辉',
				time:'2017/08/28',
				url:'http://mp.weixin.qq.com/s/SEYcIQWPiBqqLVcfJX1aFw',
				img:'./images/list_img/article39.jpg'
			},
	    	{
				name:'孩子，你从哪里来',
				author:'永殊',
				time:'2017/08/26',
				url:'http://mp.weixin.qq.com/s/kzuUvXThAhT0NgdXFq-KQg',
				img:'./images/list_img/article20.jpg'
			},
	    	{
				name:'来自一名建筑汪的内心OS',
				author:'archiworld',
				time:'2017/08/25',
				url:'http://mp.weixin.qq.com/s/GqjxGrPu2UxaJX4HehvBDQ',
				img:'./images/list_img/article32.jpg'
			},
	    	{
				name:'咖啡喝坏了',
				author:'青叶若叶',
				time:'2017/08/24',
				url:'http://mp.weixin.qq.com/s/IRGJou-uqc5rfVdRBc876w',
				img:'./images/list_img/article002.jpg'
			},
	    	{
				name:'三岔口的主观记事',
				author:'何婷',
				time:'2017/08/21',
				url:'http://mp.weixin.qq.com/s/4N6GUiq2t4PNT8bu5t2fOQ',
				img:'./images/list_img/article62.jpg'
			},
	    	{
				name:'生来是旅人',
				author:'泰戈尔',
				time:'2017/08/19',
				url:'http://mp.weixin.qq.com/s/MFLWU-bYLY7LV1sQVCSIJQ',
				img:'./images/list_img/article61.jpg'
			},
	    	{
				name:'原谅我不懂你的悲伤',
				author:'我给你写信',
				time:'2017/08/18',
				url:'http://mp.weixin.qq.com/s/8P2Hn0geelCMVDZCvTQjtQ',
				img:'./images/list_img/article60.jpg'
			},
	    	{
				name:'黎明',
				author:'叶小松',
				time:'2017/08/16',
				url:'http://mp.weixin.qq.com/s/yMZGDUMxvFOqBpTVpKCDZw',
				img:'./images/list_img/article59.jpg'
			},
			{
				name:'愿你恋爱时，仍旧一少年',
				author:'呆呆',
				time:'2017/08/13',
				url:'http://mp.weixin.qq.com/s/GRO4HLg0c6nMyxNhyXYiwQ',
				img:'./images/list_img/article58.jpg'
			},
			{
				name:'绿豆冰糕',
				author:'屈月',
				time:'2017/08/11',
				url:'http://mp.weixin.qq.com/s/9K9NNx1ARfeUMjWSV1ddlg',
				img:'./images/list_img/article57.jpg'
			},
			{
				name:'有手，却不知如何碰你',
				author:'靓丽人生',
				time:'2017/08/09',
				url:'http://mp.weixin.qq.com/s/y9HGs9suRQo5aJcaihr_xQ',
				img:'./images/list_img/article56.jpg'
			},
			{
				name:'不再仰望星空',
				author:'禾火',
				time:'2017/08/06',
				url:'http://mp.weixin.qq.com/s/yfk8hJCTaDnqEjG5WBrvTw',
				img:'./images/list_img/article55.jpg'
			},
			{
				name:'这本书永远都读不完',
				author:'我给你写信',
				time:'2017/08/04',
				url:'http://mp.weixin.qq.com/s/kV59muE1fWLXVAlyGm1IrQ',
				img:'./images/list_img/article54.jpg'
			},
			{
				name:'他想起山茶花',
				author:'叶小松',
				time:'2017/08/02',
				url:'http://mp.weixin.qq.com/s/bs8nvqIBe2vfg4JII48RUg',
				img:'./images/list_img/article53.jpg'
			},
			{
				name:'春天，一个有希望的男子',
				author:'赵眠',
				time:'2017/07/31',
				url:'http://mp.weixin.qq.com/s/tTgBU9rKjF9kfFsLrqTI1w',
				img:'./images/list_img/article52.jpg'
			},
			{
				name:'翠鸟啼',
				author:'郭辉',
				time:'2017/07/28',
				url:'http://mp.weixin.qq.com/s/oaO9u9d2uRUviFpYEtnY9w',
				img:'./images/list_img/article51.jpg'
			},
			{
				name:'盛满了水的心不敢动',
				author:'靓丽人生',
				time:'2017/07/25',
				url:'http://mp.weixin.qq.com/s/KK8qWTTbIdsVTpHD6qmf9w',
				img:'./images/list_img/article21.jpg'
			},
			{
				name:'不说话的路格外长',
				author:'叶小松',
				time:'2017/07/23',
				url:'http://mp.weixin.qq.com/s/3oizuTMZognIPTqhjQmwog',
				img:'./images/list_img/article41.jpg'
			},
			{
				name:'补丁，是衣裳的花瓣',
				author:'赵眠',
				time:'2017/07/20',
				url:'http://mp.weixin.qq.com/s/2V4sgrRxbT7vafGOvttoTA',
				img:'./images/list_img/article50.jpg'
			},
			{
				name:'半径3米之内',
				author:'靓丽人生',
				time:'2017/07/18',
				url:'http://mp.weixin.qq.com/s/7hwg6cWhSFHFP2EqsG53iQ',
				img:'./images/list_img/article49.jpg'
			},
			{
				name:'吾心如病孩',
				author:'叶小松',
				time:'2017/07/16',
				url:'http://mp.weixin.qq.com/s/DoHiZnMCFSW4d7Fen5c-8Q',
				img:'./images/list_img/article48.jpg'
			},
			{
				name:'春风十里不如去造房子',
				author:'Miss罗',
				time:'2017/07/15',
				url:'http://mp.weixin.qq.com/s/vg8IwlTqDgJqYx0QC9lQLA',
				img:'./images/list_img/article47.jpg'
			},
			{
				name:'一瓢饮你小小的丰满',
				author:'还读',
				time:'2017/07/13',
				url:'http://mp.weixin.qq.com/s/5bMp8OxMmGn8L-ZTvJPNIw',
				img:'./images/list_img/article46.jpg'
			},
			{
				name:'小扣柴扉',
				author:'名家',
				time:'2017/07/04',
				url:'http://mp.weixin.qq.com/s/Gcgw-ekGtRXJvVdHDj5FBQ',
				img:'./images/list_img/article45.jpg'
			},
			{
				name:'你给我养的耗子',
				author:'靓丽人生',
				time:'2017/06/26',
				url:'http://mp.weixin.qq.com/s/CgdaKnZowR2fdozZ5tmTtw',
				img:'./images/list_img/article44.jpg'
			},
			{
				name:'致星星',
				author:'叶小松',
				time:'2017/06/13',
				url:'http://mp.weixin.qq.com/s/Ep0dAXhs_6Q67G0p-ItHXg',
				img:'./images/list_img/article43.jpg'
			},
			{
				name:'梦落在人间越开越盛的花中',
				author:'叶小松',
				time:'2017/06/05',
				url:'http://mp.weixin.qq.com/s/Mg82oOE7840c-OW9APfvUw',
				img:'./images/list_img/article42.jpg'
			},
			{
				name:'天香引（组诗）',
				author:'郭辉',
				time:'2017/05/26',
				url:'http://mp.weixin.qq.com/s/SJEIaPB-AhrFYxNHcMzYnw',
				img:'./images/list_img/article41.jpg'
			},
			{
				name:'初夏.适雨',
				author:'青叶若叶',
				time:'2017/05/24',
				url:'http://mp.weixin.qq.com/s/yGg5hJtgRJJKhleQvnBRZA',
				img:'./images/list_img/article40.jpg'
			},
			{
				name:'暮色有时也会客死它乡',
				author:'叶小松',
				time:'2017/05/23',
				url:'http://mp.weixin.qq.com/s/ZscpxwHeLCAjHwnFMkczaA',
				img:'./images/list_img/article39.jpg'
			},
			{
				name:'狂人日记',
				author:'郭宗社',
				time:'2017/04/16',
				url:'http://mp.weixin.qq.com/s/i9QWYxETsEmq9wKjFPIviA',
				img:'./images/list_img/article38.jpg'
			},
			{
				name:'川内伦子，小清新包裹的“祸心”',
				author:'还读我诗',
				time:'2017/04/10',
				url:'http://mp.weixin.qq.com/s/gNMhd4mlbc4o-HiB1xjadA',
				img:'./images/list_img/article37.jpg'
			},
			{
				name:'唐诗.新春',
				author:'名家',
				time:'2017/04/04',
				url:'http://mp.weixin.qq.com/s/_m1GOAje_fIHPyIhdm7EGw',
				img:'./images/list_img/article36.jpg'
			},
			{
				name:'摘星的手',
				author:'靓丽人生',
				time:'2017/04/03',
				url:'http://mp.weixin.qq.com/s/UETCDEd4VrZC4Bgl87QZIw',
				img:'./images/list_img/article35.jpg'
			},
			{
				name:'回一次生儿育女前的梦',
				author:' 叶小松',
				time:'2017/03/30',
				url:'http://mp.weixin.qq.com/s/7eou5gKb2GtPOb-Wpf7lpA',
				img:'./images/list_img/article34.jpg'
			},
			{
				name:'内心的落日',
				author:'靓丽人生',
				time:'2017/03/28',
				url:'http://mp.weixin.qq.com/s/qmBGpg9Hzx3GeantxpNK5g',
				img:'./images/list_img/article33.jpg'
			},
			{
				name:'妈妈，带我回家',
				author:'素月绚',
				time:'2017/03/26',
				url:'http://mp.weixin.qq.com/s/iIuS5A3Oee0VJcCOOgM6zg',
				img:'./images/list_img/article32.jpg'
			},
			{
				name:'留恋的雁声飞过头顶',
				author:'叶小松',
				time:'2017/03/11',
				url:'http://mp.weixin.qq.com/s/cVEfKAbuqufUG6LyuG7Gaw',
				img:'./images/list_img/article31.jpg'
			},
			{
				name:'夜色诚恳',
				author:'靓丽人生',
				time:'2017/03/05',
				url:'http://mp.weixin.qq.com/s/lYEkaowJrGUBgyY9VOhpLw',
				img:'./images/list_img/article30.jpg'
			},
			{
				name:'春天的音符',
				author:'靓丽人生',
				time:'2017/02/26',
				url:'http://mp.weixin.qq.com/s/BcBKKI3agbjzsZg6_BphGA',
				img:'./images/list_img/article29.jpg'
			},
			{
				name:'渡',
				author:'叶小松',
				time:'2017/02/25',
				url:'http://mp.weixin.qq.com/s/Rtnc61D4IIVFS4WQ__mohg',
				img:'./images/list_img/article28.jpg'
			},
			{
				name:'新春，为一朵早开的桃花命名',
				author:'董卫华',
				time:'2017/02/24',
				url:'http://mp.weixin.qq.com/s/QApgqWk0G9MPFVOA-sHZdA',
				img:'./images/list_img/article27.jpg'
			},
			{
				name:'奔向未来的日子',
				author:'韵依依',
				time:'2017/02/22',
				url:'http://mp.weixin.qq.com/s/7RvoHeVb_DDRl9VKH269XQ',
				img:'./images/list_img/article26.jpg'
			},
			{
				name:'妹妹，又下雪了',
				author:'董卫华',
				time:'2017/02/21',
				url:'http://mp.weixin.qq.com/s/kRbOE_jLH0ycluU6XdjS4w',
				img:'./images/list_img/article25.jpg'
			},
			{
				name:'站在春天肩上问候一缕春风',
				author:'叶小松',
				time:'2017/02/20',
				url:'http://mp.weixin.qq.com/s/-cOPsUze38sAvTH1L2Hj2w',
				img:'./images/list_img/article24.jpg'
			},
			{
				name:'香槟玫瑰',
				author:'郭辉',
				time:'2017/02/19',
				url:'http://mp.weixin.qq.com/s/I__suwEsc3Q54TJzOO7OCQ',
				img:'./images/list_img/article23.jpg'
			},
			{
				name:'花瓣上的情书',
				author:'靓丽人生',
				time:'2017/02/18',
				url:'http://mp.weixin.qq.com/s/mk-GLYLBo28TkUKW4MijPA',
				img:'./images/list_img/article22.jpg'
			},
			{
				name:'春暖花开',
				author:'叶小松',
				time:'2017/02/16',
				url:'http://mp.weixin.qq.com/s/skzvNl9Auji8LPq0kibKmQ',
				img:'./images/list_img/article21.jpg'
			},
			{
				name:'心的房子',
				author:'董卫华',
				time:'2017/02/14',
				url:'http://mp.weixin.qq.com/s/oItB2nNy3TnaUaWXXspH-Q',
				img:'./images/list_img/article20.jpg'
			},
			{
				name:'致我的小情人',
				author:'韵依依',
				time:'2017/02/12',
				url:'http://mp.weixin.qq.com/s/-uUmYiWL8NDyE1N5H81iMw',
				img:'./images/list_img/article19.jpg'
			},
			{
				name:'为你安排一场小雪',
				author:'靓丽人生',
				time:'2017/02/11',
				url:'http://mp.weixin.qq.com/s/6wQVONoxy1sWZoKxlFhg7g',
				img:'./images/list_img/article18.jpg'
			},
			{
				name:'欢乐元宵',
				author:'韵依依',
				time:'2017/02/10',
				url:'http://mp.weixin.qq.com/s/tT5IJILaVrdZaqMsm3NdBQ',
				img:'./images/list_img/article17.jpg'
			},
			{
				name:'深情',
				author:'叶小松',
				time:'2017/02/09',
				url:'http://mp.weixin.qq.com/s/eE3AU5R0qiUutn4GyARQQQ',
				img:'./images/list_img/article16.jpg'
			},
			{
				name:'春风十里不如你',
				author:'靓丽人生',
				time:'2017/02/05',
				url:'http://mp.weixin.qq.com/s/QO5m3YDloEksoQYXw6xaDw',
				img:'./images/list_img/article15.jpg'
			},
			{
				name:'小僧',
				author:'叶小松',
				time:'2017/01/17',
				url:'http://mp.weixin.qq.com/s/hFdhtDn3EvMfLnit24VPbA',
				img:'./images/list_img/article14.jpg'
			},
			{
				name:'妙境儿清',
				author:'青叶若叶',
				time:'2017/01/15',
				url:'http://mp.weixin.qq.com/s/aQVzv-EjDM-xEeaG2PdiTA',
				img:'./images/list_img/article13.jpg'
			},
			{
				name:'我不是荆轲',
				author:'叶小松',
				time:'2017/01/14',
				url:'http://mp.weixin.qq.com/s/KdZn8pArKyPtns3DeVfW4Q',
				img:'./images/list_img/article12.jpg'
			},
			{
				name:'集市',
				author:'韵依依',
				time:'2017/01/11',
				url:'http://mp.weixin.qq.com/s/KTngqzwuTWrau7-HLPw58A',
				img:'./images/list_img/article11.jpg'
			},
			{
				name:'过年的情结',
				author:'韵依依',
				time:'2017/01/07',
				url:'http://mp.weixin.qq.com/s/gDxX-eU6A69enoZ_DL0PGw',
				img:'./images/list_img/article10.jpg'
			},
			{
				name:'倚门回首',
				author:'靓丽人生',
				time:'2017/01/06',
				url:'http://mp.weixin.qq.com/s/XqalobobYOCtFt2TtqFfIg',
				img:'./images/list_img/article09.jpg'
			},
			{
				name:'望乡',
				author:'韵依依',
				time:'2017/01/02',
				url:'http://mp.weixin.qq.com/s/g1Ebm24oSGXvWn-LRcy38g',
				img:'./images/list_img/article08.jpg'
			},
			{
				name:'天涯看花',
				author:'靓丽人生',
				time:'2016/12/31',
				url:'http://mp.weixin.qq.com/s/p6u3hYivWJXMyMiBwH4yug',
				img:'./images/list_img/article07.jpg'
			},
			{
				name:'哭泣，是开始痊愈的象征',
				author:'叶小松',
				time:'2016/12/30',
				url:'http://mp.weixin.qq.com/s/wY4w9O8fon4-JH1cnDc16w',
				img:'./images/list_img/article06.jpg'
			},
			{
				name:'赶海',
				author:'韵依依',
				time:'2016/12/29',
				url:'http://mp.weixin.qq.com/s/Id2BufTKshGkcbP_7pPilQ',
				img:'./images/list_img/article05.jpg'
			},
			{
				name:'冬至无雪',
				author:'靓丽人生',
				time:'2016/12/24',
				url:'http://mp.weixin.qq.com/s/Ie5MV0EXwK2tIM3H8saYaA',
				img:'./images/list_img/article04.jpg'
			},
			{
				name:'盎然',
				author:'叶小松',
				time:'2016/12/21',
				url:'http://mp.weixin.qq.com/s/46VHLuvS8mFCUUwbx2IQWQ',
				img:'./images/list_img/article03.jpg'
			},
			{
				name:'醉蟹',
				author:'靓丽人生',
				time:'2016/12/17',
				url:'http://mp.weixin.qq.com/s/SuwIR-YNzKL-p863konQhQ',
				img:'./images/list_img/article02.jpg'
			},
			{
				name:'我是你眼中的一滴泪',
				author:'靓丽人生',
				time:'2016/12/03',
				url:'http://mp.weixin.qq.com/s/8i7dhQzuQjz_WkrNLMHmOQ',
				img:'./images/list_img/article01.jpg'
			},
			{
				name:'多像沉寂后静静的海面',
				author:'周长风',
				time:'2016/11/27',
				url:'http://mp.weixin.qq.com/s/-wO98IFBK40UYcx4Yn-vWw',
				img:'./images/list_img/article003.jpg'
			},
			{
				name:'蒲公英',
				author:'靓丽人生',
				time:'2016/11/25',
				url:'http://mp.weixin.qq.com/s/NgoiPf1tiMnQOTSK4f_43w',
				img:'./images/list_img/article002.jpg'
			},
			{
				name:'阿依阔勒',
				author:'还读我诗',
				time:'2016/11/23',
				url:'http://mp.weixin.qq.com/s/6g5-Tn-rBbnWoan2hY91eg',
				img:'./images/list_img/article001.jpg'
			}
		]
	}
});


new Vue({
    el: '#onShow',
    data:{
        items:[
        	{
				name:'醉蟹',
				author:'靓丽人生',
				url:'http://mp.weixin.qq.com/s/SuwIR-YNzKL-p863konQhQ',
				img:'./images/list_img/article02.jpg',
				say:'昨夜有人送我归来，前面的持火把，后面的吹笛'
			},
			{
				name:'妹妹，又下雪了',
				author:'董卫华',
				url:'http://mp.weixin.qq.com/s/kRbOE_jLH0ycluU6XdjS4w',
				img:'./images/list_img/article25.jpg',
				say:'你再不来，我要下雪了'
			},
			{
				name:'香槟玫瑰',
				author:'郭辉',
				url:'http://mp.weixin.qq.com/s/I__suwEsc3Q54TJzOO7OCQ',
				img:'./images/list_img/article23.jpg',
				say:'吟无用之诗，醉无用之酒，读无用之书，钟无用之情，无用之人的有滋有味'
			},
			{
				name:'盎然',
				author:'叶小松',
				url:'http://mp.weixin.qq.com/s/46VHLuvS8mFCUUwbx2IQWQ',
				img:'./images/list_img/article03.jpg',
				say:'瞳孔深红色，于是世界沉入黄昏'
			},
			{
				name:'妈妈，带我回家',
				author:'素月绚',
				url:'http://mp.weixin.qq.com/s/iIuS5A3Oee0VJcCOOgM6zg',
				img:'./images/list_img/article32.jpg',
				say:'篷户豪门一洞开，万紫千红灌体来，亘古从来亲难舍，消灵磨肉填沧海'
			},
			{
				name:'赶海',
				author:'韵依依',
				url:'http://mp.weixin.qq.com/s/Id2BufTKshGkcbP_7pPilQ',
				img:'./images/list_img/article05.jpg',
				say:'能否与你，琴瑟再御牵手白头，一捧雪端来了前生的约定'
			},
			{
				name:'小扣柴扉',
				author:'名家',
				url:'http://mp.weixin.qq.com/s/Gcgw-ekGtRXJvVdHDj5FBQ',
				img:'./images/list_img/article45.jpg',
				say:'老家的小院依旧是柴门'
			},
			{
				name:'天香引（组诗）',
				author:'郭辉',
				url:'http://mp.weixin.qq.com/s/SJEIaPB-AhrFYxNHcMzYnw',
				img:'./images/list_img/article41.jpg',
				say:'一个人到世界上来，来做什么？爱是最可爱的，最好听的，最好看的，最好吃的'
			}
        ]
    }
});