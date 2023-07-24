// 判断语言
const lang = navigator.language || navigator.userLanguage;
// 设置默认语言为英语
let language = "en";
// 设置语言
if (lang === "zh-CN" || lang === "zh-cn") {
    language = "cn";
} else {
    language = "en";
}

// 设置title
const title = {"cn":"像素画板","en":"Pixel Sketchpad"};

// 设置meta name="keywords" 
const keywords = {"cn":"像素画,像素风格,像素风格画板,像素画导出","en":"Pixel art, pixel style, pixel style palette, Pixel art export"};

// 设置meta name="description"
const description = {"cn":"像素画板是一个在线的像素画制作工具，可以制作像素风格的画，可以导出为图片。","en":"Pixel Sketchpad is an online pixel painting tool that can make pixel style paintings and export them as images."};

// 设置#input-button文字
const inputButton = {"cn":"导入数据","en":"Import data"};

// 设置#output-button文字
const outputButton = {"cn":"导出数据","en":"Export data"};

// 设置#download-button文字
const downloadButton = {"cn":"下载图片","en":"Download image"};

// 设置#changeback文字
const changeback = {"cn":"更换背景","en":"Change background"};

// 设置#changedefault文字
const changedefault = {"cn":"恢复默认","en":"Restore default"};

// 设置#input-button的alert
const inputAlertnull = {"cn":"请输入数据","en":"Please enter data"};
const inputAlerterror = {"cn":"数据格式错误","en":"Data format error"};

// 设置#OutputButton的alert
const outputAlert = {"cn":"导出成功","en":"Export success"};
const outputAlerterror = {"cn":"导出失败","en":"Export failed"};

// 设置#language-change-button的文字
const languageChangeButton = {"cn":"Switch language","en":"切换语言"};


function setLanguage() {
    document.title = title[language];
    document.getElementsByName("keywords")[0].content = keywords[language];
    document.getElementsByName("description")[0].content = description[language];
    document.getElementById("input-button").innerText = inputButton[language];
    document.getElementById("output-button").innerText = outputButton[language];
    document.getElementById("download-button").innerText = downloadButton[language];
    document.getElementById("changeback").innerText = changeback[language];
    document.getElementById("changedefault").innerText = changedefault[language];
    document.getElementById("language-change-button").innerText = languageChangeButton[language];
}