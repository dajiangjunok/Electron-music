// 这里是预加载文件, 即使不开启 nodeIntegration 也可以使用 node 模块,
// 我们将需要的模块, 添加到 window 上, 然后再页面中可以从 window 对象上取到需要的模块.
window.electron = require('electron');
window.fs = require('fs');
window.express = require('express');