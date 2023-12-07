$(document).ready(function () {
    class layout {
        constructor() {
            this.div = document.createElement(`div`);
        }
        addDark() {
            $(`body`).addClass(`container bg-dark`);
            $(`header`).addClass(`row`);
            $(`main`).addClass(`row justify-content-center`);
            return this;
        }
        addStructure(addElement, addId, addClass, addWhere) {
            this.addElement = addElement;
            this.addClass = addClass;
            this.addWhere = addWhere;
            this.addId = addId;

            if (this.addId.constructor === Array) {
                let count = 0;
                this.addId.forEach(() => {
                    $(this.addWhere).append(`<${this.addElement} id=${this.addId[count]} class="${this.addClass}"></${this.addElement}>`);
                    ++count;
                })
            } else {
                $(this.addWhere).append(`<${this.addElement} id=${this.addId} class="${this.addClass}"></${this.addElement}>`);
            }
            return this;
        }
        addBtn(addButton,addText,addWhere){
            this.addButton = addButton;
            this.addText = addText;
            this.addWhere = addWhere;

            if (this.addButton.constructor === Array) {
                let btnCount = 0;
                this.addButton.forEach(() => {
                $(this.addWhere).append(`<button id="${this.addButton[btnCount]}"></button>`);
                $(`#${this.addButton[btnCount]}`).addClass( `btn border border-warning text-white `);
                $(`#${this.addButton[btnCount]}`).attr(`type`, `submit`).text(`Make a ${this.addText[btnCount]}`).after(`<input type="text" class="" name="${this.addText[btnCount]}" id="input${this.addText[btnCount]}" value="" placeholder="Enter a ${this.addText[btnCount]} size">`);
                ++btnCount;
            });
            } else {
                $(`#${this.addWhere}`).append(`<div id=${this.addElement} class="${this.addClass}"></div>`);
            }
            return this;
        }
    }
    let zones = [`dataInput`, `canvasOutput`, `detailOutput`];
    let btns = [`btnSquare`, `btnRectangle`, `btnCircle`, `btnTriangle`];
    let shapes = [`Square`, `Rectangle`, `Circle`, `Triangle`];


    let basicLayout = new layout();
    basicLayout.addDark().addStructure(`div`,zones, 'border border-primary', 'main').addStructure(`form`,`input`,`row-cols-4`,`#dataInput`).addBtn(btns,shapes,`#input`);
    $(`#canvasOutput`).addClass(`col-8`);
    $(`#detailOutput`).addClass(`col-4`);
});
