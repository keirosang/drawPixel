const DianBox = document.getElementById("dian-box");
const ChangeDefault = document.getElementById("changedefault");
const ChangeBack = document.getElementById("changeback");
const Color = document.getElementById("color");
const ColorDian = document.querySelectorAll(".color-dian");
const defaultDian = "#ffffff38";
let DianColor = "#000000";

Color.innerHTML = DianColor;

const textareaElements = document.querySelectorAll('.datatext');
textareaHeight = document.body.clientHeight - 660 - 100;
textareaElements.forEach(textareaE => {
    textareaE.style.height = textareaHeight + "px";
});

function createDianElement() {
    const Dian = document.createElement("div");
    Dian.className = "dian";
    Dian.setAttribute("data-status", "false");
    Dian.setAttribute("data-color", defaultDian);
    return Dian;
}

function renderColorDian(colors) {
    const colorsDiv = document.getElementById("colors");

    for (const color of colors) {
        const divElement = document.createElement("div");
        divElement.className = "color-dian";
        divElement.dataset.color = color;
        divElement.style.backgroundColor = color;
        divElement.setAttribute("data-color", color);
        colorsDiv.appendChild(divElement);
    }

    return colorsDiv;
}

function bindColorDianClickHandler(colorsDiv) {
    colorsDiv.addEventListener("click", function (e) {
        if (e.target.className === "color-dian") {
            DianColor = e.target.dataset.color;
            Color.innerHTML = DianColor;
            console.log(DianColor);
        }
    });
}

function addColor() {
    const hexColors = ["#FFFFFF", "#FFFFCC", "#FFFF99", "#FFFF66", "#FFFF33", "#FFFF00", "#FFCCFF", "#FFCCCC", "#FFCC99", "#FFCC66", "#FFCC33", "#FFCC00", "#FF99FF", "#FF99CC", "#FF9999", "#FF9966", "#FF9933", "#FF9900", "#FF66FF", "#FF66CC", "#FF6699", "#FF6666", "#FF6633", "#FF6600", "#FF33FF", "#FF33CC", "#FF3399", "#FF3366", "#FF3333", "#FF3300", "#FF00FF", "#FF00CC", "#FF0099", "#FF0066", "#FF0033", "#FF0000", "#66FFFF", "#66FFCC", "#66FF99", "#66FF66", "#66FF33", "#66FF00", "#66CCFF", "#66CCCC", "#66CC99", "#66CC66", "#66CC33", "#66CC00", "#6699FF", "#6699CC", "#669999", "#669966", "#669933", "#669900", "#6666FF", "#6666CC", "#666699", "#666666", "#666633", "#666600", "#6633FF", "#6633CC", "#663399", "#663366", "#663333", "#663300", "#6600FF", "#6600CC", "#660099", "#660066", "#660033", "#660000", "#CCFFFF", "#CCFFCC", "#CCFF99", "#CCFF66", "#CCFF33", "#CCFF00", "#CCCCFF", "#CCCCCC", "#CCCC99", "#CCCC66", "#CCCC33", "#CCCC00", "#CC99FF", "#CC99CC", "#CC9999", "#CC9966", "#CC9933", "#CC9900", "#CC66FF", "#CC66CC", "#CC6699", "#CC6666", "#CC6633", "#CC6600", "#CC33FF", "#CC33CC", "#CC3399", "#CC3366", "#CC3333", "#CC3300", "#CC00FF", "#CC00CC", "#CC0099", "#CC0066", "#CC0033", "#CC0000", "#33FFFF", "#33FFCC", "#33FF99", "#33FF66", "#33FF33", "#33FF00", "#33CCFF", "#33CCCC", "#33CC99", "#33CC66", "#33CC33", "#33CC00", "#3399FF", "#3399CC", "#339999", "#339966", "#339933", "#339900", "#3366FF", "#3366CC", "#336699", "#336666", "#336633", "#336600", "#3333FF", "#3333CC", "#333399", "#333366", "#333333", "#333300", "#3300FF", "#3300CC", "#330099", "#330066", "#330033", "#330000", "#99FFFF", "#99FFCC", "#99FF99", "#99FF66", "#99FF33", "#99FF00", "#99CCFF", "#99CCCC", "#99CC99", "#99CC66", "#99CC33", "#99CC00", "#9999FF", "#9999CC", "#999999", "#999966", "#999933", "#999900", "#9966FF", "#9966CC", "#996699", "#996666", "#996633", "#996600", "#9933FF", "#9933CC", "#993399", "#993366", "#993333", "#993300", "#9900FF", "#9900CC", "#990099", "#990066", "#990033", "#990000", "#00FFFF", "#00FFCC", "#00FF99", "#00FF66", "#00FF33", "#00FF00", "#00CCFF", "#00CCCC", "#00CC99", "#00CC66", "#00CC33", "#00CC00", "#0099FF", "#0099CC", "#009999", "#009966", "#009933", "#009900", "#0066FF", "#0066CC", "#006699", "#006666", "#006633", "#006600", "#0033FF", "#0033CC", "#003399", "#003366", "#003333", "#000000"];

    const colorsDiv = renderColorDian(hexColors);
    bindColorDianClickHandler(colorsDiv);
};

function initializeDianGrid() {
    const fragment = document.createDocumentFragment();
    // 给每个元素添加坐标属性，共有 30 行 30 列
    for (let i = 1; i <= 30; i++) {
        for (let j = 1; j <= 30; j++) {
            const Dian = createDianElement();
            Dian.setAttribute("data-x", i);
            Dian.setAttribute("data-y", j);
            fragment.appendChild(Dian);
        }
    }
    DianBox.appendChild(fragment);
}

function resetDianGrid() {
    const Dian = document.querySelectorAll(".dian");
    for (let i = 0; i < Dian.length; i++) {
        Dian[i].style.backgroundColor = defaultDian;
        Dian[i].setAttribute("data-status", "false");
        Dian[i].setAttribute("data-color", defaultDian);
    }
}

function changeColorDianBackground() {
    for (let i = 0; i < ColorDian.length; i++) {
        ColorDian[i].style.backgroundColor = ColorDian[i].dataset.color;
        console.log(DianColor);
    }
}


function changeDianBackground(event) {
    const target = event.target;
    if (target.classList.contains("dian")) {
        const isClicked = target.dataset.status === "true";
        target.dataset.status = isClicked ? "false" : "true";
        target.dataset.color = isClicked ? defaultDian : DianColor;
        target.style.backgroundColor = isClicked ? defaultDian : DianColor;
    }
}

function changeBodyBackground() {
    document.body.style.backgroundColor = DianColor;
}

ChangeDefault.addEventListener("click", resetDianGrid);
ChangeBack.addEventListener("click", changeBodyBackground);
DianBox.addEventListener("click", changeDianBackground);


// 初始化语言
setLanguage();
// 初始化取色器
addColor();

(function () {
    initializeDianGrid();
    changeColorDianBackground();
})();

// initializeDianGrid();
// changeColorDianBackground();

// 定义函数通过坐标 (x, y) 来定位到对应的元素
function getElementByCoordinates(x, y) {
    const columns = 30; // 总列数
    const elementIndex = (x - 1) * columns + y - 1;
    const allDianElements = document.querySelectorAll('.dian');

    if (elementIndex >= 0 && elementIndex < allDianElements.length) {
        return allDianElements[elementIndex];
    } else {
        return null; // 如果坐标超出范围，则返回 null
    }
}

// 更新坐标点颜色和属性
function updateCoordinateColor(dianElement, color) {
    dianElement.style.backgroundColor = color;
    dianElement.setAttribute("data-color", color);
}

// 将矩阵数据转换为目标格式的数组
function OutputData() {
    const dianElements = document.querySelectorAll(".dian");
    const resultArray = [];
    dianElements.forEach((element) => {
        const x = parseInt(element.dataset.x);
        const y = parseInt(element.dataset.y);
        const color = element.dataset.color;
        resultArray.push([x, y, color]);
    });
    return resultArray;
}

// 监听#input-button点击事件，并判断#input是否为空，并且判断数据是否为合法的矩阵数据
const InputButton = document.getElementById("input-button");
const Input = document.getElementById("input");
InputButton.addEventListener("click", function () {
    if (Input.value === "") {
        alert(inputAlertnull[language]);
    } else {
        try {
            const matrixData = JSON.parse(Input.value);
            const DianBox = document.getElementById("dian-box");
            const existingCoordinates = {};

            // 遍历现有的坐标点，将坐标信息存储到 existingCoordinates 对象中
            const existingDianElements = document.getElementsByClassName("dian");
            for (const dian of existingDianElements) {
                const x = parseInt(dian.getAttribute("data-x"));
                const y = parseInt(dian.getAttribute("data-y"));
                existingCoordinates[`${x}-${y}`] = dian;
            }

            // 遍历矩阵数据，将坐标点的背景颜色更新到页面上
            for (const [x, y, color] of matrixData) {
                const coordinateKey = `${x}-${y}`;
                const dianElement = existingCoordinates[coordinateKey];
                if (dianElement) {
                    updateCoordinateColor(dianElement, color);
                }
            }
        } catch (error) {
            alert(inputAlerterror[language]);
        }
    }
});

// 监听#output-button点击事件，并输出数据到#output
const OutputButton = document.getElementById("output-button");
const Output = document.getElementById("output");
OutputButton.addEventListener("click", function () {
    Output.value = JSON.stringify(OutputData());
    if (navigator.clipboard && navigator.clipboard.writeText) {
        // 使用Clipboard API的writeText方法复制到剪贴板
        navigator.clipboard.writeText(Output.value)
            .then(() => {
                alert(outputAlert[language]);
            })
            .catch((err) => {
                console.error(outputAlerterror[language], err);
            });
    } else {
        // 如果浏览器不支持Clipboard API，回退到execCommand方法
        fallbackCopyToClipboard(Output.value);
    }
});

// 将#dian-box输出为PNG图片
const DownloadButton = document.getElementById("download-button");
DownloadButton.addEventListener("click", function () {
    const elementToCapture = document.getElementById('dian-box');

    // 获取页面的devicePixelRatio
    const devicePixelRatio = window.devicePixelRatio || 1;

    // 创建一个新的canvas元素，并设置其宽度和高度为两倍于原始尺寸
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = elementToCapture.offsetWidth * devicePixelRatio * 2;
    canvas.height = elementToCapture.offsetHeight * devicePixelRatio * 2;

    // 使用HTML2Canvas库将指定元素渲染到canvas上，并设置scale选项
    html2canvas(elementToCapture, {
        scale: 4, // 设置缩放比例为2，即输出图片分辨率是页面显示的两倍
    }).then(function (canvas) {
        // 获取图片的DataURL
        const dataURL = canvas.toDataURL('image/png');

        // 创建一个新的图片元素
        let image = new Image();

        // 设置图片的src为DataURL
        image.src = dataURL;

        // 如果需要将图片保存到本地，可以创建一个a标签来模拟点击下载
        const link = document.createElement('a');
        // 获取当前时间戳
        const timestamp = new Date().getTime();
        link.download = timestamp + 'output.png';
        link.href = dataURL;
        link.click();
        image = null;
    });
});

// 如果浏览器不支持Clipboard API，回退到execCommand方法
function fallbackCopyToClipboard(textToCopy) {
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert(outputAlert[language]);
}

// 监听鼠标悬停事件，显示.dian元素的x和y坐标(x: 1-30, y: 1-30)
DianBox.addEventListener("mouseover", function (event) {
    const target = event.target;
    if (target.classList.contains("dian")) {
        const x = target.getAttribute("data-x");
        const y = target.getAttribute("data-y");
        const coordinate = `x: ${x}, y: ${y}`;
        const coordinateElement = document.getElementById("coordinate");
        coordinateElement.innerText = coordinate;
    }
});

// 切换语言
const languageSelect = document.getElementById("language-change-button");
languageSelect.addEventListener("click", function () {
    if (language === "cn") {
        language = "en";
    } else {
        language = "cn";
    }
    setLanguage();
});