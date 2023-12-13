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
            addArr.forEach(() => {
                $(addWhere).append(`<${element} class="${addClass}" id="grid${addArr[count]}"><${element2} type="submit" id="btn${addArr[count]}" class="${addClass2}"><h5>${addText1} ${addArr[count]}</h5></${element2}><${element3} id="${element3}${addArr[count]}" class="${addClass3}" type="text" name="${addArr[count]}Value" value="" placeholder="Enter pixel sides"></${element3}></${element}>`);

                if (element == `button`) {
                    $(`${element}`).on(`click`, () => {
                        console.log(`Clicked`)
                    });
                }

                if (addArr[count] == `Rectangle`) {
                    $(`#inputRectangle`).after(`<input id="inputRectangle2" type="text" name="RectangleValueY" value="">`);
                    $(`#gridRectangle`).removeClass(``);
                    $(`#gridRectangle`).addClass(``);
                    $(`#inputRectangle2`).attr(`placeholder`, "Enter pixel height").addClass(`${addClass3}`);
                    $(`#inputRectangle`).attr(`placeholder`, "Enter pixel width");
                }
                if (addArr[count] == `Circle`) {
                    $(`#inputCircle`).attr(`placeholder`, "Enter pixel radius");
                    $(`#gridCircle`).addClass(``)
                }
                if (addArr[count] == `Triangle`) {
                    $(`#inputTriangle`).attr(`placeholder`, "Enter pixel height");
                    $(`#gridTriangle`).addClass(``)

                }
                if (addArr[count] == `Square`) {
                    $(`#inputSquare`).attr(`placeholder`, "Enter pixel height");
                    $(`#gridSquare`).addClass(``)
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