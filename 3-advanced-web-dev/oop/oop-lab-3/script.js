$(document).ready(function () {
  class layout {
    constructor() {
      this.div = document.createElement(`div`);
    }
    addDark() {
      $(`body`).addClass(`container bg-dark p-0 border border-primary`);
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
          $(this.addWhere).append(`<div id="${this.addButton[btnCount]}Grid" class='${this.set}'><div id="${this.addButton[btnCount]}" class='${this.butt}'>Make a ${this.addText[btnCount]}</div></div>`);
          $(`#${this.addButton[btnCount]}`).attr(`type`, `submit`).after(`<input type="text" class="${this.input}" name="${this.addText[btnCount]}" id="input${this.addText[btnCount]}" value="" placeholder="Enter a ${this.addText[btnCount]} size">`);
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
  }
  let zones = [ `canvasOutput`, `detailOutput`];
  let btns = [`btnSquare`, `btnRectangle`, `btnCircle`, `btnTriangle`];
  let shapes = [`Square`, `Rectangle`, `Circle`, `Triangle`];
  let details = [`Shape`, `Height`, `Width`, `Area`, `Perimeter`, `Radius`];



  let basicLayout = new layout();
  basicLayout.addDark()
    .addStructure(`div`, zones, 'border border-primary', 'main')
    .addStructure(`form`, `input`, `row row-cols-2 justify-content-center mb-3 mx-0 border border-primary`, `header`)
    .addDetails(details, 'my-1', `#detailOutput`)
    .addBtn(btns, shapes, `#input`,`row`,`col btn btn-warning align-middle my-1 mx-1`,`col align-middle my-1 mx-1` );

  $(`#canvasOutput`).addClass(`col-8 bg-white p-0`);
  $('#detailOutput').addClass('col-4 p-0 ps-2');
});

// $(document).ready(function () {
//   $(`body`).addClass(`container bg-dark`);
// $(`header`).addClass(`row`);
// $(`main`).addClass(`row justify-content-center`);

// let shapes = [`Square`, `Rectangle`, `Circle`, `Triangle`];
// let btns = [`btnSquare`, `btnRectangle`, `btnCircle`, `btnTriangle`];
// let zones = [`dataInput`, `canvasOutput`, `detailOutput`];
// let details = [`Shape`, `Height`, `Width`, `Area`, `Perimeter`, `Radius`];

// class layout {
//   constructor(arrSet, typeOf, appendWhere) {
//     this.arrSet = arrSet;
//     this.typeOf = typeOf;
//     this.appendWhere = appendWhere;
//     this.addEvent = btns.length - 1;
//     // this.div = document.createElement(`div`);
//   }

//   add(eClass, arrText) {
//     let count = 0;
//     this.eClass = eClass;
//     this.arrText = arrText;

//     if (this.arrSet.constructor === Array) {
//       this.arrSet.forEach(() => {
//         $(this.appendWhere).append(`<${this.typeOf} id=${this.arrSet[count]}></${this.typeOf}>`);
//         $(`#${this.arrSet[count]}`).addClass(`${this.eClass}`);
//         if (`#${this.arrSet[count]}`.includes(`dataInput`)) {
//           $(`#${this.arrSet[count]}`).addClass(`col-12 my-1`);
//         }
//         if (`#${this.arrSet[count]}`.includes(`canvas`)) {
//           $(`#${this.arrSet[count]}`).addClass(`col-8`);
//         }
//         if (`#${this.arrSet[count]}`.includes(`detail`)) {
//           let dCount = 0;
//           $(`#${this.arrSet[count]}`).addClass(`col-4`);
//           details.forEach(() => {
//             $(`#detailOutput`).append(`<div class="bg-primary m-1" id="title${details[dCount]}">${details[dCount]}</div><div id="output${details[dCount]}" class="bg-secondary m-1"><span>awaiting input</span></div>`);
//             ++dCount;
//           })
//         }
//         if (`#${this.arrSet[count]}`.includes(`btn`)) {
//           $(`#${this.arrSet[count]}`).attr(`type`, `submit`).text(`Make a ${this.arrText[count]}`).after(`<input type="text" class="col m-1" name="${this.arrText[count]}" id="input${this.arrText[count]}" value="" placeholder="Enter a ${this.arrText[count]} size">`);
//         }
//         ++count;
//       });
//     } else {
//       $(this.appendWhere).append(`<${this.arrSet} id=${this.typeOf}></${this.arrSet}>`);
//       ++count;
//       console.log(`else`)
//     }
//     return this;
//   }

//   randomValue(){
//         return Math.floor(Math.random()*(50-0)+0);
//       }
//   addClick() {
//     btns.forEach(() => {
//       let num = 1;
//       let selection = document.getElementById(`${btns[this.addEvent]}`);
//       $(`#${btns[this.addEvent]}`).on(`click`, () => {
//         this.div = document.createElement(`div`);
//         this.div.style.left = this.randomValue();
//         this.div.style.top = this.randomValue();

//         if (selection.id == btns[0]) {
//           $(`#canvasOutput`).append(this.div);
//           $(this.div).addClass(`btnSquare`).attr(`id`,num+'square');
//           ++num;
//           console.log(this.div.style.left);
//         }
//         if (selection.id == btns[1]) {
//           $(`#canvasOutput`).append(this.div);
//           $(this.div).addClass(`btnRectangle`).attr(`id`,num+'rectangle');
//           ++num;
//         };
//         if (selection.id == btns[2]) {
//           $(`#canvasOutput`).append(this.div);
//           $(this.div).addClass(`btnCircle`).attr(`id`,num+"circle");
//           ++num;
//         }
//         if (selection.id == btns[3]) {
//           $(`#canvasOutput`).append(this.div);
//           $(this.div).addClass(`btnTriangle`).attr(`id`,num+"triangle");
//           ++num;
//         }
//       });
//       --this.addEvent;
//       return this
//     });
//   }
// }
// // Define Gen. Structure with edges
// let zone = new layout(zones, `div`, `main`);
// zone.add(`border border-primary`);
// console.log(`Define Gen. Structure with edges`);

// // Define Main input zone
// let inputForm = new layout(`form`, `formInput`, `#dataInput`);
// inputForm.add();
// console.log(`Define Main input zone`);

// // Define form,buttons, and text boxes in inputZone
// $(`#formInput`).attr('onsubmit', 'return false').addClass("row row-cols-4 justify-content-center");
// let button = new layout(btns, `button`, `#formInput`);
// button.add(`col col-2 btn btn-warning outline-success my-1 input`, shapes).addClick();

// });