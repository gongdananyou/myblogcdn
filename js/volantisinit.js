var GUEST_INFO = ['nick', 'mail', 'link'];
var meta = 'nick,mail,link'.split(',').filter(function(item) {
	return GUEST_INFO.indexOf(item) > -1
});
var REQUIRED_FIELDS = ['nick', 'mail', 'link'];
var requiredFields = 'nick,mail'.split(',').filter(function(item) {
	return REQUIRED_FIELDS.indexOf(item) > -1
});
var valine = new Valine();
function emoji(path, idx, ext) {
	return path + "/" + path + "-" + idx + "." + ext;
}
var emojiMaps = {};
for (var i = 1; i <= 54; i++) {
	emojiMaps['tieba-' + i] = emoji('tieba', i, 'png');
}
for (var i = 1; i <= 101; i++) {
	emojiMaps['qq-' + i] = emoji('qq', i, 'gif');
}
for (var i = 1; i <= 116; i++) {
	emojiMaps['aru-' + i] = emoji('aru', i, 'gif');
}
for (var i = 1; i <= 125; i++) {
	emojiMaps['twemoji-' + i] = emoji('twemoji', i, 'png');
}
for (var i = 1; i <= 4; i++) {
	emojiMaps['weibo-' + i] = emoji('weibo', i, 'png');
}
valine.init({
	el: '#valine_container',
	meta: meta,

	appId: "C9P1M3j4bVnWNrSMsVBsMusl-gzGzoHsz",
	appKey: "PTdfr4dxNIpboIjHD54jCval",
	placeholder: "有什么想对我说的呢？",
	pageSize: '10',
	avatar: 'robohash',
	lang: 'zh-cn',
	visitor: 'true',
	highlight: 'true',
	mathJax: 'false',
	enableQQ: 'true',
	requiredFields: requiredFields,
	emojiCDN: 'https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/emoji/valine/',
	emojiMaps: emojiMaps
})
