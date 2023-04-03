var showsong=require('./showsong');
showsong('./稻香.lrc',function(err,data){
	if(err){
		return console.log('读取歌词文件失败了');
	};
});