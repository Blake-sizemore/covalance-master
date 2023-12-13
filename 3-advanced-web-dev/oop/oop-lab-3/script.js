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
// $(document).ready(function () {
//   const PI = 3.1415
//   class layout {
//     constructor() {
//       this.div = document.createElement(`div`);
//     }

//     addStructure(addElement, addId, addClass, addWhere) {
//       this.addElement = addElement;
//       this.addClass = addClass;
//       this.addWhere = addWhere;
//       this.addId = addId;
      
//       if (this.addId.constructor === Array) {
//         let count = 0;
//         this.addId.forEach(() => {
//           $(this.addWhere).append(`<${this.addElement} id="${this.addId[count]}" class="${this.addClass}"></${this.addElement}>`);
//           ++count;
//         })
//       } else {
//         $(this.addWhere).append(`<${this.addElement} id=${this.addId} class="${this.addClass}"></${this.addElement}>`);
//       }
//       return this;
//     }
//     addBtn(addButton, addText, addWhere, set, butt, input) {
//       this.addButton = addButton;
//       this.addText = addText;
//       this.addWhere = addWhere;
//       this.set = set;
//       this.butt = butt;
//       this.input = input;
      
//       if (this.addButton.constructor === Array) {
//         let btnCount = 0;
//         this.addButton.forEach(() => {
//           $(this.addWhere).append(`<div id="${this.addButton[btnCount]}Grid" class='${this.set}'><button id="${this.addButton[btnCount]}" class='${this.butt}'>Make a ${this.addText[btnCount]}</button></div>`);
//           $(`#${this.addButton[btnCount]}`).on(`click`, () => { this.addClick(); }).attr(`type`, `submit`).after(`<input type="text" class="${this.input}" name="${this.addText[btnCount]}" id="${this.addText[btnCount]}" value="" placeholder="Enter a ${this.addText[btnCount]} size">`);
//           ++btnCount;
//         });
//       } else {
//         $(`#${this.addWhere}`).append(`<div id=${this.addElement} class="${this.addClass}"></div>`);
//       }
//       return this;
//     }
//     addDetails(addWords, addClass, addWhere) {
//       this.addWords = addWords;
//       this.addClass = addClass;
//       this.addWhere = addWhere;
      
//       if (this.addWords.constructor === Array) {
//         let count = 0;
//         this.addWords.forEach(() => {
//           $(this.addWhere).append(`<div id="title${this.addWords[count]}" class="col-12 bg-primary ${this.addClass}">${this.addWords[count]}</div>`);
//           $(`#title${this.addWords[count]}`).after(`<div id="detail${this.addWords[count]}" class="col bg-warning ${this.addClass}">filler ${this.addWords[count]}</div>`);
//           ++count;
//         })
//       } else {
//         $(this.addWhere).append(`<${this.addElement} id=${this.addWords} class="${this.addClass}">${this.addWords}</${this.addElement}>`);
//       }
//       return this;
//     }
//     addClick() {
//       insertShapes();
      
//     }
//   }
  
//   class square {
//     constructor(x, y, size) {
      
//       this.whereShape = document.getElementById(`canvasOutput`);
//       this.div = document.createElement('div');
//       this.size = size;
//       this.div.style.left = `${x}px`;
//       this.div.style.top = `${y}px`;
//       this.div.style.position = `absolute`;
//       this.whereShape.appendChild(this.div);
//       this.div.style.backgroundColor = this.updateColor();
//       this.div.style.height = `${this.size}px`;
//       this.div.style.width = `${this.size}px`;
//       this.div.classList.add(`square`);
//       this.changeDetails(`Square`, `${this.size}px`, `${this.size}px`, `${this.size * this.size}px`, `${this.size * 4}px`, `No Radius`);
      
//     }
//     updateColor() {
//       let randomColor = `rgb(${randomValue(0, 255)} ,${randomValue(0, 255)},${randomValue(0, 255)})`;
//       // this.div.style.backgroundColor = randomColor;
//       return randomColor
//     }
//     changeDetails(shapeId, heightId, widthId, areaId, perimeterId, radiusId) {
//       let shape = document.getElementById(`detailShape`);
//       let height = document.getElementById(`detailHeight`);
//       let width = document.getElementById(`detailWidth`);
//       let area = document.getElementById(`detailArea`);
//       let perimeter = document.getElementById(`detailPerimeter`);
//       let radius = document.getElementById(`detailRadius`);
      
//       $(shape).text(shapeId);
//       $(height).text(heightId);
//       $(width).text(widthId);
//       $(area).text(areaId);
//       $(perimeter).text(perimeterId);
//       $(radius).text(radiusId);
//     }
    
    
//   }
  
//   class rectangle extends square {
//     constructor(x, y, size) {
//       super(x, y, size)
//       this.div.style.width = `${this.size * 2}px`;
//       let recWidth = parseInt(this.div.style.width);
//       let recHeight = parseInt(this.size);
//       this.div.classList.remove(`square`)
//       this.div.classList.add(`rectangle`);
//       this.changeDetails(`Rectangle`, `${this.size}px`, `${this.size * 2}px`, `${this.size * this.size * 2}px`,`${[recWidth+recHeight]*2}px`,`No Radius`);
//     }
//   }
  
//   class circle extends square {
//     constructor(x, y, size) {
//       super(x, y, size)
//       this.div.classList.remove(`square`);
//       this.div.classList.add(`circle`);
//       this.div.classList.add(`rounded-circle`);
//       this.changeDetails(`Circle`, `${this.size}px`, `${this.size}px`,`${PI*[[this.size/2]*[this.size/2]]}px`, `${PI*this.size}px`,`${this.size/2}px`);
//     }
//   }
  
//   class triangle extends square {
//     constructor(x, y, size) {
//       super(x, y, size)
//       let hypo= Math.sqrt(Math.pow(this.size,2)+Math.pow(this.size,2));
//       let base = this.size*2
//       this.div.classList.remove(`square`);
//       this.div.classList.add(`triangle`);
//       this.div.style.backgroundColor = `transparent`;
//       this.div.style.borderWidth = `${this.size}px`;
//       this.div.style.borderBottomColor = `rgb(${randomValue(0, 255)} ,${randomValue(0, 255)},${randomValue(0, 255)})`;
//       this.changeDetails(`Triangle`, `${this.size}`, `${base}`, `${[this.size*base]/2}`,`${hypo+hypo+base}px`,`No Radius`)
//     }
//   }
  
//   function randomValue(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }
  
//   function insertShapes() {
//     let selection = event.currentTarget.id;
//     let maxHeight = $(`#canvasOutput`).width();
//     let maxWidth = $(`#canvasOutput`).height();
//     let xVal = randomValue(0, maxWidth);
//     let yVal = randomValue(0, maxHeight);
//     if (selection.includes(`Square`)) {
//       sizeInput = $(`#Square`).val();
//       let sq = new square([yVal-[sizeInput/2]], [xVal-[sizeInput/2]], sizeInput);
//     } else if (selection.includes(`Rectangle`)) {
//       sizeInput = $(`#Rectangle`).val();
//       let rec = new rectangle(yVal, xVal, sizeInput);
//     } else if (selection.includes(`Circle`)) {
//       sizeInput = $(`#Circle`).val();
//       let cir = new circle(yVal, xVal, sizeInput);
//       cir.changeDetails(`Circle`);
//     } else if (selection.includes(`Triangle`)) {
//       sizeInput = $(`#Triangle`).val();
//       let tri = new triangle(yVal, xVal, sizeInput);
//     }
//   }
  
// });