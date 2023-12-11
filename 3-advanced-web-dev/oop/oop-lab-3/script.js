$(document).ready(function () {
  const MAX = 460;
  const PI = 3.1459;
  class layout {
    constructor() {
      this.div = document.createElement(`div`);
    }
    addDark() {
      $(`body`).addClass(`container bg-dark p-0`);
      $(`header`).addClass(`mt-3 mx-0`);
      $(`main`).addClass(`row justify-content-center m-0`);
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
          $(this.addWhere).append(`<${this.addElement} id="${this.addId[count]}" class="${this.addClass}"></${this.addElement}>`);
          ++count;
        })
      } else {
        $(this.addWhere).append(`<${this.addElement} id=${this.addId} class="${this.addClass}"></${this.addElement}>`);
      }
      return this;
    }
    addBtn(addButton, addText, addWhere, set, butt, input) {
      this.addButton = addButton;
      this.addText = addText;
      this.addWhere = addWhere;
      this.set = set;
      this.butt = butt;
      this.input = input;

      if (this.addButton.constructor === Array) {
        let btnCount = 0;
        this.addButton.forEach(() => {
          $(this.addWhere).append(`<div id="${this.addButton[btnCount]}Grid" class='${this.set}'><button id="${this.addButton[btnCount]}" class='${this.butt}'>Make a ${this.addText[btnCount]}</button></div>`);
          $(`#${this.addButton[btnCount]}`).on(`click`, () => { this.addClick(); }).attr(`type`, `submit`).after(`<input type="text" class="${this.input}" name="${this.addText[btnCount]}" id="${this.addText[btnCount]}" value="" placeholder="Enter a ${this.addText[btnCount]} size">`);
          ++btnCount;
        });
      } else {
        $(`#${this.addWhere}`).append(`<div id=${this.addElement} class="${this.addClass}"></div>`);
      }
      return this;
    }
    addDetails(addWords, addClass, addWhere) {
      this.addWords = addWords;
      this.addClass = addClass;
      this.addWhere = addWhere;

      if (this.addWords.constructor === Array) {
        let count = 0;
        this.addWords.forEach(() => {
          $(this.addWhere).append(`<div id="title${this.addWords[count]}" class="col-12 bg-primary ${this.addClass}">${this.addWords[count]}</div>`);
          $(`#title${this.addWords[count]}`).after(`<div id="detail${this.addWords[count]}" class="col bg-warning ${this.addClass}">filler ${this.addWords[count]}</div>`);
          ++count;
        })
      } else {
        $(this.addWhere).append(`<${this.addElement} id=${this.addWords} class="${this.addClass}">${this.addWords}</${this.addElement}>`);
      }
      return this;
    }
    addClick() {
      insertShapes();

    }
  }

  class square {
    constructor(x, y, size) {
      this.whereShape = document.getElementById(`canvasOutput`);
      this.div = document.createElement('div');
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
      let randomColor = `rgb(${randomValue(0, 255)} ,${randomValue(0, 255)},${randomValue(0, 255)})`;
      // this.div.style.backgroundColor = randomColor;
      return randomColor
    }
    changeDetails(shapeId, heightId, widthId, areaId, perimeterId, radiusId) {
      let shape = document.getElementById(`detailShape`);
      let height = document.getElementById(`detailHeight`);
      let width = document.getElementById(`detailWidth`);
      let area = document.getElementById(`detailArea`);
      let perimeter = document.getElementById(`detailPerimeter`);
      let radius = document.getElementById(`detailRadius`);

      $(shape).text(shapeId);
      $(height).text(heightId);
      $(width).text(widthId);
      $(area).text(areaId);
      $(perimeter).text(perimeterId);
      $(radius).text(radiusId);
    }


  }

  class rectangle extends square {
    constructor(x, y, size) {
      super(x, y, size)
      this.div.style.width = `${this.size * 2}px`;
      let recWidth = parseInt(this.div.style.width);
      let recHeight = parseInt(this.size);
      this.div.classList.remove(`square`)
      this.div.classList.add(`rectangle`);
      this.changeDetails(`Rectangle`, `${this.size}px`, `${this.size * 2}px`, `${this.size * this.size * 2}px`,`${[recWidth+recHeight]*2}px`,`No Radius`);
    }
  }

  class circle extends square {
    constructor(x, y, size) {
      super(x, y, size)
      this.div.classList.remove(`square`);
      this.div.classList.add(`circle`);
      this.div.classList.add(`rounded-circle`);
      this.changeDetails(`Circle`, `${this.size}px`, `${this.size}px`,`${PI*[[this.size/2]*[this.size/2]]}px`, `${PI*this.size}px`,`${this.size/2}px`);
    }
  }

  class triangle extends square {
    constructor(x, y, size) {
      super(x, y, size)
      let hypo= Math.sqrt(Math.pow(this.size,2)+Math.pow(this.size,2));
      let base = this.size*2
      this.div.classList.remove(`square`);
      this.div.classList.add(`triangle`);
      this.div.style.backgroundColor = `transparent`;
      this.div.style.borderWidth = `${this.size}px`;
      this.div.style.borderBottomColor = `rgb(${randomValue(0, 255)} ,${randomValue(0, 255)},${randomValue(0, 255)})`;
      this.changeDetails(`Triangle`, `${this.size}`, `${base}`, `${[this.size*base]/2}`,`${hypo+hypo+base}px`,`No Radius`)
    }
  }

  function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function insertShapes() {
    let selection = event.currentTarget.id;
    let xVal = randomValue(0, MAX);
    let yVal = randomValue(0, MAX);
    if (selection.includes(`Square`)) {
      sizeInput = $(`#Square`).val();
      let sq = new square(yVal, xVal, sizeInput);
    } else if (selection.includes(`Rectangle`)) {
      sizeInput = $(`#Rectangle`).val();
      let rec = new rectangle(yVal, xVal, sizeInput);
    } else if (selection.includes(`Circle`)) {
      sizeInput = $(`#Circle`).val();
      let cir = new circle(yVal, xVal, sizeInput);
      cir.changeDetails(`Circle`);
    } else if (selection.includes(`Triangle`)) {
      sizeInput = $(`#Triangle`).val();
      let tri = new triangle(yVal, xVal, sizeInput);
    }
  }

  let zones = [`canvasOutput`, `detailOutput`];
  let btns = [`btnSquare`, `btnRectangle`, `btnCircle`, `btnTriangle`];
  let shapes = [`Square`, `Rectangle`, `Circle`, `Triangle`];
  let details = [`Shape`, `Height`, `Width`, `Area`, `Perimeter`, `Radius`];

  let basicLayout = new layout();
  basicLayout.addDark()
    .addStructure(`div`, zones, '', 'main')
    .addStructure(`form`, `input`, `row row-cols-2 justify-content-center mb-3 mx-0`, `header`)
    .addDetails(details, 'my-1', `#detailOutput`)
    .addBtn(btns, shapes, `#input`, `row m-0 p-0`, `col btn btn-warning align-middle my-1 mx-1`, `col align-middle my-1 mx-1`)


  $('form').attr(`onSubmit`, `return false`);
  $(`#canvasOutput`).addClass(`col-8 bg-white p-0`).attr(`position`, `relative`).height(`480px`);
  $('#detailOutput').addClass('col-4 p-0 ps-2');
});