/**
 * Возвращает элемент по его ID
 * @param {string} element_id - ID элемента
 * @returns {HTMLElement} Найденный элемент
 */
function id(element_id) {
    return document.getElementById(element_id)
}

/**
 *
 * @param {array} array
 */
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

/**
 * Скрывает элемент
 * @param {string} element_id
 */
function hide_element(element_id) {
    id(element_id).style.display = 'none';
}

/**
 * Показывает элемент
 * @param {string} element_id
 */
function show_element(element_id) {
    id(element_id).style.display = 'block';
}

/**
 * Событие по открытию файла
 * @param {string} filename
 */
function read(filename) {
    const LINE_WIDTH = 8;
    const LINE_COLOR = 'green';
    const COLS = 10;
    const ROWS = 10;

    /**
     * @type {Document}
     */
    let d = document;

    /**
     * @type {HTMLElement}
     */
    let canvas = id('canv');

    /**
     * @type {CanvasRenderingContext2D}
     */
    let ctx = canvas.getContext('2d');

    /**
     * @type {HTMLImageElement}
     */
    let img = new Image();

    img.onload = function () {
        var area_width = img.width;
        var area_height = img.height;
        var cell_width = (area_width / COLS) - LINE_WIDTH;
        var cell_height = (area_height / ROWS) - LINE_WIDTH;
        canvas.width = img.width;
        canvas.height = img.height;

        // отрисовка изображения
        ctx.drawImage(img, 0, 0);
        let colStep = img.width / COLS;
        let rowStep = img.height / ROWS;
        ctx.beginPath();                            // Начало пути
        for (let i = 0; i <= COLS; i++) {
            ctx.lineWidth = LINE_WIDTH;
            ctx.strokeStyle = LINE_COLOR;
            ctx.moveTo(i * colStep, 0);
            ctx.lineTo(i * colStep, img.height);
            ctx.stroke();                           // Отображает путь
        }
        for (let i = 0; i <= ROWS; i++) {
            ctx.lineWidth = LINE_WIDTH;
            ctx.strokeStyle = LINE_COLOR;
            ctx.moveTo(0, i * rowStep);
            ctx.lineTo(img.width, i * rowStep);
            ctx.stroke(); 						    // Отображает путь
        }
        ctx.closePath();                            // Конец пути
        //let data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

        //d.body.appendChild(canvas);
        show_element('canvasBlock');
        hide_element('inputBlock');
        let order = [];
        let countCells = COLS * ROWS;
        for (let i = 0; i < countCells; i++) {
            order.push(i);
        }
        var orderStart = order;
        shuffle(order);
        console.log(order);
        console.log(orderStart);
        ctx.drawImage(img, 4, 4, cell_width,  cell_height, 250, 250, cell_width,  cell_height);
    };

    img.src = URL.createObjectURL(filename);
}
// создание canvas
// let canvas = document.getElementById("canv");
	/*
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext("2d");
    let img = new Image();
    let control = document.getElementById("photo");
    //let img = 0;
    control.addEventListener("change", function(event) {
        // Когда происходит изменение элементов управления, значит появились новые файлы
        let i = 0,
            files = control.files,
            len = files.length;

        for (; i < len; i++) {
            img.src = URL.createObjectURL( files[i] );
            console.log("Filename: " + files[i].name);
            console.log("Type: " + files[i].type);
            console.log("Size: " + files[i].size + " bytes");
            //img = files[i];
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }

    }, false);

    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(240, 160, 20, 0, Math.PI*2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(160, 10, 100, 40);
    ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
    ctx.stroke();
    ctx.closePath();
    */
