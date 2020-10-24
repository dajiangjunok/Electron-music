
export const lyrics = function (lrc) {
  // var lrc = String(this.songList.lrc);
  if (lrc.length === 0) return;
  var lyricstxt = []; //存放歌词
  var lrcs = lrc.split('\n');//用回车拆分成数组
  for (var i in lrcs) {//遍历歌词数组
    lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
    var t = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]"));//取[]间的内容
    var s = t.split(":");//分离:前后文字
    if (!isNaN(parseInt(s[0]))) { //是数值
      var arr = lrcs[i].match(/\[(\d+:.+?)\]/g);//提取时间字段，可能有多个
      var start = 0;
      for (var k in arr) {
        start += arr[k].length; //计算歌词位置
      }
      var content = lrcs[i].substring(start);//获取歌词内容
      lyricstxt.push(content);
    }
  }
  return lyricstxt;
}


export const lyricsTime = function (lrc) {
  // var lrc = String(this.songList.lrc);
  if (lrc.length === 0) return;
  var lyricstime = []; //存放歌词
  var lrcs = lrc.split('\n');//用回车拆分成数组
  for (var i in lrcs) {//遍历歌词数组
    lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
    var t = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]"));//取[]间的内容
    var s = t.split(":");//分离:前后文字
    if (!isNaN(parseInt(s[0]))) { //是数值
      t = parseInt(s[0]) * 60 + parseFloat(s[1])
    }
    if (typeof t === 'number') lyricstime.push(t)

  }
  return lyricstime;
}