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
        addH1(addText, addClass) {
            $(`#${this.addId}`).append(`<h1 class="${addClass}">${addText}</h1>`);
            return this;
        }
        addArrBtn(addWhere, addArr, element, element2, element3, addClass, addClass2, addText1) {
            let count = 0;
            addArr.forEach(() => {
                $(addWhere).append(`<${element} class="" id="grid${addArr[count]}"><${element2} type="submit" id="btn${addArr[count]}" class="${addClass}"><h5>${addText1} ${addArr[count]}</h5></${element2}><${element3} id="${element3}${addArr[count]}" class="${addClass2}" type="text" name="${addArr[count]}Value" value="" placeholder="Enter pixel sides"></${element3}></${element}>`);
                
                if (element == `button`){ $(`${element}`).on(`click`,()=>{
                console.log(`Clicked`)                    
                });}

                if (addArr[count] == `Rectangle`) {
                    $(`#inputRectangle`).after(`<input id="inputRectangle2" type="text" name="RectangleValueY" value="">`);
                    $(`#gridRectangle`).removeClass(`row-cols-md-2`);
                    $(`#gridRectangle`).addClass(`row-cols-1 row-cols-md-3`);
                    $(`#inputRectangle2`).attr(`placeholder`, "Enter pixel height").addClass(`p-2`);
                    $(`#inputRectangle`).attr(`placeholder`, "Enter pixel width");
                }
                if (addArr[count] == `Circle`) {
                    $(`#inputCircle`).attr(`placeholder`, "Enter pixel radius");
                    $(`#gridCircle`).addClass(`row-cols-1 row-cols-md-2`)
                }
                if (addArr[count] == `Triangle`) {
                    $(`#inputTriangle`).attr(`placeholder`, "Enter pixel height");
                    $(`#gridTriangle`).addClass(`row-cols-1 row-cols-md-2`)

                }
                if (addArr[count] == `Square`) {
                    $(`#inputSquare`).attr(`placeholder`, "Enter pixel height");
                    $(`#gridSquare`).addClass(`row-cols-1 row-cols-md-2`)
                }
                ++count;
            })
            return this
        }
        addArrDetails(addWhere, addArr, element2, element3, addClass, addClass2, addText1, addText2) {
            let count = 0;
            addArr.forEach(() => {
                $(addWhere).append(`<${element2} type="submit" id="title${addArr[count]}" class="${addClass}"><h5>${addText1} ${addArr[count]}</h5></${element2}><${element3} id="output${addArr[count]}" class="${addClass2}"><h5>${addText2}</h5></${element3}>`);
                ++count;
            })
            return this
        }
    }

    $(`body`).addClass(`container p-0 bg-dark`);
    $(`header`).addClass(` p-0 m-0`);
    $(`footer`).addClass(` p-0 m-2`);
    $(`main`).addClass(` p-0 m-2`);
    let shapes = [`Square`, `Rectangle`, `Circle`, `Triangle`];
    let details = [`Shape`, `Height`, `Width`, `Area`, `Perimeter`, `Radius`]
    let title = new htmlLayout(`header`, `div`, `mainTitle`, ``);
    title.addSingle().addH1(`Shape Up and Shape Out`, `text-center text-white`);
    let buttons = new htmlLayout(`header`, `form`, `buttonInterface`, `row row-cols-1 g-3 m-0`);
    buttons.addSingle().addArrBtn(`form`, shapes, `div`, `button`, `input`, `btn btn-warning align-item-middle`, 'p-2 align-item-middle', `Add a`);
    let canvas = new htmlLayout(`main`, `div`, `canvas`, `bg-white my-3`);
    canvas.addSingle(); $(`#canvas`).attr(`style`, `height:500px`);
    let detail = new htmlLayout(`footer`, `div`, `details`, `row row-cols-1 row-cols-md-2 row-cols-lg-4 mx-0 g-3`);
    detail.addSingle().addArrDetails(`#details`, details, `div`, `div`, ` bg-info text-center`, `bg-white text-center`, ``, `Output`);
});