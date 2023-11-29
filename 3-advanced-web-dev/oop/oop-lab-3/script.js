$(document).ready(function () {
  $(`body`).addClass(`container bg-dark`);
  $(`header`).addClass(`row`);
  $(`main`).addClass(`row justify-content-center`);

  let shapes = [`Square`, `Rectangle`, `Circle`, `Triangle`];
  let btns = [`btnSquare`, `btnRectangle`, `btnCircle`, `btnTriangle`];
  let zones = [`dataInput`, `canvasOutput`, `detailOutput`];
  let details = [`Shape`, `Height`, `Width`, `Area`, `Perimeter`, `Radius`];

  class maker {
    constructor(arrSet, typeOf, appendWhere) {
      this.arrSet = arrSet;
      this.typeOf = typeOf;
      this.appendWhere = appendWhere;
    }
    add(eClass, arrText) {
      let count = 0;
      this.eClass = eClass;
      this.arrText = arrText;
      if (this.arrSet.constructor === Array) {
        this.arrSet.forEach(() => {
          $(this.appendWhere).append(`<${this.typeOf} id=${this.arrSet[count]}></${this.typeOf}>`);
          $(`#${this.arrSet[count]}`).addClass(`${this.eClass}`);
          if (`#${this.arrSet[count]}`.includes(`dataInput`)) {
            $(`#${this.arrSet[count]}`).addClass(`col-12 my-1`);
          }
          if (`#${this.arrSet[count]}`.includes(`canvas`)) {
            $(`#${this.arrSet[count]}`).addClass(`row col-8 my-1`);
          }
          if (`#${this.arrSet[count]}`.includes(`detail`)) {
            let dCount = 0;
            $(`#${this.arrSet[count]}`).addClass(`col-4 my-1`);
            details.forEach(() => {
              $(`#detailOutput`).append(`<div class="bg-primary my-1">${details[dCount]}</div><div id="output${details[dCount]}" class="bg-secondary my-1">awaiting input</div>`);
              ++dCount;
            })
          }
          if (`#${this.arrSet[count]}`.includes(`btn`)) {
            $(`#${this.arrSet[count]}`).attr(`type`, `submit`).text(`Make a ${this.arrText[count]}`).after(`<input type="text" class="col m-1" name="detail${this.arrText[count]}" id="input${this.arrText[count]}" placeholder="Enter a ${this.arrText[count]} size">`);
          }
          else {
            console.log(`else array without btn ${this.arrSet[count]}`);
          }
          ++count;
        });
      } else {
        $(this.appendWhere).append(`<${this.arrSet} id=${this.typeOf}></${this.arrSet}>`);
        ++count;
      }
      return this;
    }
    addShape() {
      let selected = undefined;
      let shape,height,width,area,perimeter,radius = undefined;
      
      $(`button`).on(`click`, () => {
        selected = $(event.currentTarget).attr(`id`);
        if (selected == this.arrSet[0]) {
          $(`#canvasOutput`).append(`<div class="square bg-primary" height="" width="">square test</div>`);
          $(`#outputShape`).remove();
        };
        if (selected == this.arrSet[2]) {
          $(`#canvasOutput`).append(`<div class="circle bg-secondary">circle test</div>`);
        };
        if (selected == this.arrSet[1]) {
          $(`#canvasOutput`).append(`<div class="rectangle bg-warning">rectangle test</div>`);
        };
        if (selected == this.arrSet[3]) {
          $(`#canvasOutput`).append(`<div class="triangle bg-success">triangle test</div>`);
        };
      })}
    
      arrPush() {
        let shapeVal = undefined
        shapeVal.push(parseInt($(this.search).attr(`value`)));
    }  
  }

  // Define Gen. Structure with edges
  let zone = new maker(zones, `div`, `main`);
  zone.add(`border border-primary`);
  console.log(`Define Gen. Structure with edges`);

  // Define Main input zone
  let inputForm = new maker(`form`, `formInput`, `#dataInput`);
  inputForm.add();
  console.log(`Define Main input zone`);

  // Define form,buttons, and text boxes in inputZone
  $(`#formInput`).attr('onsubmit', 'return false').addClass("row row-cols-4 justify-content-center");
  let button = new maker(btns, `button`, `#formInput`);
  button.add(`col col-2 btn btn-warning outline-success my-1 input`, shapes);

  // Define Main input zone
  let btnClick = new maker(btns, ``, `#canvasOutput`);
  btnClick.addShape();
  console.log(`Define form,buttons, and text boxes in inputZone`);

});
