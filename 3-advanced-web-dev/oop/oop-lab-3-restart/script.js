$(document).ready(function () {
    class htmlLayout {
        constructor(addWhere, addElement, addId, addClass) {
            this.addWhere = addWhere;
            this.addElement = addElement;
            this.addId = addId;
            this.addClass = addClass;
        }
        addSingle() {
            $(this.addWhere).append(`<${this.addElement} id=${this.addId} class="${this.addClass}"></${this.addElement}>`);
            return this
        }
        addH5(addText, addClass) {
            $(`#${this.addId}`).append(`<h5 class="${addClass}">${addText}</h1>`);
            return this;
        }
        addArrBtn(addWhere, addArr, element, element2, element3, addClass, addClass2, addClass3, addText1) {
            let count = 0;
            let maxHeight = 500;
            let maxWidth = 415;
            let xVal = this.randomValue(0, maxWidth);
            let yVal = this.randomValue(0, maxHeight);
            let sizeInput = null;

            addArr.forEach(() => {
                $(addWhere).append(`<${element} class="${addClass}" id="grid${addArr[count]}"><${element2} type="submit" id="btn${addArr[count]}" class="${addClass2}"><h5>${addText1} ${addArr[count]}</h5></${element2}><${element3} id="${element3}${addArr[count]}" class="${addClass3}" type="text" name="${addArr[count]}Value" value="" placeholder="Enter pixel sides"></${element3}></${element}>`);


                if (addArr[count] == `Rectangle`) {
                    $(`#inputRectangle`).after(`<input id="inputRectangle2" type="text" name="RectangleValueY" value="">`);
                    $(`#inputRectangle2`).attr(`placeholder`, "Enter pixel height").addClass(`${addClass3}`);
                    $(`#inputRectangle`).attr(`placeholder`, "Enter pixel width");
                    $(`#btnRectangle`).on(`click`, function (event) {
                        event.preventDefault();
                        let widthInput = $(`#inputRectangle`).val();
                        let heightInput = $(`#inputRectangle2`).val();
                        // let rec = new rectangle(yVal, xVal, widthInput, heightInput);
                        console.log(`Rectangle`, widthInput, heightInput);
                    });
                }
                if (addArr[count] == `Circle`) {
                    $(`#inputCircle`).attr(`placeholder`, "Enter pixel radius");
                    $(`#btnCircle`).on(`click`, function (event) {
                        event.preventDefault();
                        sizeInput = $(`#inputCircle`).val();
                        // let cir = new circle(yVal, xVal, sizeInput);
                        // cir.changeDetails(`Circle`);
                        console.log(`Circle`, sizeInput);
                    });
                }
                if (addArr[count] == `Triangle`) {
                    $(`#inputTriangle`).attr(`placeholder`, "Enter pixel height");
                    $(`#btnTriangle`).on(`click`, function (event) {
                        event.preventDefault();
                        sizeInput = $(`#inputTriangle`).val();
                        // let tri = new triangle(yVal, xVal, sizeInput);
                        console.log(`Triangle`, sizeInput);
                    });
                }
                if (addArr[count] == `Square`) {
                    $(`#inputSquare`).attr(`placeholder`, "Enter pixel height");
                    $(`#btnSquare`).on(`click`, function (event) {
                        event.preventDefault();
                        sizeInput = $(`#inputSquare`).val();
                        let sq = new square(yVal, xVal, sizeInput);
                        console.log(`Square`, sizeInput);
                    });
                }
                ++count;
            })

            return this
        }
        addArrDetails(addWhere, addArr, element1, element2, element3, addClass1, addClass2, addClass3, addText1, addText2) {
            let count = 0;
            addArr.forEach(() => {
                $(addWhere).append(`<${element1} class="${addClass1}"><${element2} class="${addClass2}"type="submit" id="title${addArr[count]}"><h5>${addText1} ${addArr[count]}</h5></${element2}><${element3} id="output${addArr[count]}" class="${addClass3}"><h5>${addText2}</h5></${element3}></${element1}>`);
                ++count;
            })
            return this
        }
        randomValue(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        // 415
    }

    class square {
        constructor(x, y, size) {

            this.div = document.createElement('div');
            this.whereShape = document.getElementById(`canvas`);
            this.size = size;
            this.div.style.left = `${x}px`;
            this.div.style.top = `${y}px`;
            this.div.style.position = `absolute`;
            this.whereShape.appendChild(this.div);
            this.div.style.backgroundColor = this.updateColor();
            this.div.style.height = `${this.size}px`;
            this.div.style.width = `${this.size}px`;
            this.div.classList.add(`square`);
            this.changeDetails(`Square`, `${this.size}px`, `${this.size}px`, `${this.size * this.size}px`, `${this.size * 4}px`, `No Radius`);
        }
        updateColor() {
            let randomColor = `rgb(${this.randomValue(0, 255)} ,${this.randomValue(0, 255)},${this.randomValue(0, 255)})`;
            return randomColor
        }
        changeDetails(shapeId, heightId, widthId, areaId, perimeterId, radiusId) {
            let shape = document.getElementById(`outputShape`);
            let height = document.getElementById(`outputHeight`);
            let width = document.getElementById(`outputWidth`);
            let area = document.getElementById(`outputArea`);
            let perimeter = document.getElementById(`outputPerimeter`);
            let radius = document.getElementById(`outputRadius`);

            $(shape).text(shapeId);
            $(height).text(heightId);
            $(width).text(widthId);
            $(area).text(areaId);
            $(perimeter).text(perimeterId);
            $(radius).text(radiusId);
        }
        randomValue(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
    }

    $(`body`).addClass(`container text-white bg-dark text-center`);
    let shapes = [`Square`, `Rectangle`, `Circle`, `Triangle`];
    let details = [`Shape`, `Height`, `Width`, `Area`, `Perimeter`, `Radius`];

    let breakpoint = new htmlLayout(`header`, `div`, `breakpoint`, `row row-cols-6`);
    breakpoint.addSingle().addH5(`xs`, `border border-danger text-start`).addH5(`s`, `border border-danger text-end text-sm-start`).addH5(`md`, `border border-danger text-end text-md-start`).addH5(`lg`, `border border-danger text-end text-lg-start`).addH5(`xl`, `border border-danger text-end text-xl-start`).addH5(`xxl`, `border border-danger text-end text-xxl-start `);

    let title = new htmlLayout(`header`, `div`, `mainTitle`, ``);
    title.addSingle().addH5(`Shape Up and Shape Out`, `m-2`);
    let buttons = new htmlLayout(`header`, `form`, `buttonInterface`, `row g-2`);
    buttons.addSingle().addArrBtn(`form`, shapes, `div`, `button`, `input`, `input-group`, `btn btn-warning col-3`, `form-control`, `Add a`);
    let canvas = new htmlLayout(`main`, `div`, `canvas`, `bg-white mt-3`);
    canvas.addSingle();
    $(`#canvas`).attr(`style`, `height:500px`);
    let detail = new htmlLayout(`footer`, `div`, `details`, `row row-cols-lg-2 text-black mt-3`);
    detail.addSingle().addArrDetails(`#details`, details, `div`, `div`, `div`, `row row-cols-1 row-cols-md-2 m-0`, `bg-warning my-1`, `bg-white my-1`, ``, `Pick a shape or add a new one`);
});