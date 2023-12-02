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
      console.log(this);
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
            $(`#${this.arrSet[count]}`).addClass(`col-8`);
          }
          if (`#${this.arrSet[count]}`.includes(`detail`)) {
            let dCount = 0;
            $(`#${this.arrSet[count]}`).addClass(`col-4`);
            details.forEach(() => {
              $(`#detailOutput`).append(`<div class="bg-primary m-1" id="title${details[dCount]}">${details[dCount]}</div><div id="output${details[dCount]}" class="bg-secondary m-1"><span>awaiting input</span></div>`);
              ++dCount;
            })
          }
          if (`#${this.arrSet[count]}`.includes(`btn`)) {
            let tally = 0;
            $(`#${this.arrSet[count]}`).attr(`type`, `submit`).text(`Make a ${this.arrText[count]}`).after(`<input type="text" class="col m-1" name="${this.arrText[count]}" id="input${this.arrText[count]}" value="" placeholder="Enter a ${this.arrText[count]} size">`).on(`click`, () => { this.detailLoop(),++tally; });

          }
          else {
          }
          ++count;
        });
      } else {
        $(this.appendWhere).append(`<${this.arrSet} id=${this.typeOf}></${this.arrSet}>`);
        ++count;
      }
      return this;
    }

    detailLoop() {
      let select = $(event.currentTarget).attr(`id`);
      let inputVal = undefined;
      let s;
      $(`#canvasOutput`).append(`<div class="${select} bg-primary">${select} test</div>`);
      details.forEach(() => {
        $(`#outputShape`).remove();
        $(`#titleShape`).after(`<div class="bg-success m-1" id="outputShape"><span>${select}</span></div>`);
      });
      if (select.includes('Square')){
        s=shapes[0];
        inputVal = document.getElementById(`input${s}`).value;
      }
      if (select.includes('Circle')){
        s=shapes[2];
      inputVal = document.getElementById(`input${s}`).value;
      }
      if (select.includes('Triangle')){
        s=shapes[3];
        inputVal = document.getElementById(`input${s}`).value;
      }
      if (select.includes('Rectangle')){
        s=shapes[1];
        inputVal = document.getElementById(`input${s}`).value;
      }
      console.log(inputVal);
      console.log(select);

    }

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
  // btnClick.buttonClick();
  console.log(`Define form,buttons, and text boxes in inputZone`);

});
