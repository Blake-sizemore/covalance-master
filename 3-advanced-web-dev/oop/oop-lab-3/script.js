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
      this.arrSet.forEach(() => {
        $(this.appendWhere).append(`<${this.typeOf} id=${this.arrSet[count]}></${this.typeOf}>`);
        $(`#${this.arrSet[count]}`).addClass(`${this.eClass}`);
        if (`#${this.arrSet[count]}`.includes(`btn`)) {

          $(`#${this.arrSet[count]}`).attr(`type`, `submit`).text(`Make a ${this.arrText[count]}`).after(`<input 
            type="text" 
            class="col m-1 input" 
            name="detail${this.arrText[count]}" 
            id="input${this.arrText[count]}" 
            placeholder="Enter a ${this.arrText[count]} size">`).on(`click`, ()=>console.log(`test`)).before(content);
        }
        ++count;
      });
      return this
    }
    addSize(eWidth, eHeight) {
      $(`${this.appendWhere}`).width(eWidth).height(eHeight);
      return this;
    }
  }
  
  let zone = new maker(zones, `div`, `main`);
  zone.add(` border border-primary`);
  let button = new maker(btns, `button`, `#dataInput`);
  button.add(`col col-2 btn btn-warning outline-success my-1 input`, shapes);
  shapes.forEach(() => { 
    
  });
  $().wrapAll(`<form></form>`)
  $(`form`).addClass("row row-cols-4 justify-content-center");
  let canvas = new maker(``, ``, `#canvasOutput`);
  canvas.addSize(`50em`, `50em`);
  let detail = new maker(``, ``, `#detailOutput`);
  detail.addSize(`15em`, `50em`);
});

// first attempt
  // class eMaker {
  //   constructor(append, e, eId, eClass, eArr) {
  //     this.append = append;
  //     this.e = e;
  //     this.eId = eId;
  //     this.eClass = eClass;
  //     this.eArr = eArr;
  //   }
  //   addSingle() {
  //     $(this.append).append(`<${this.e} id=${this.eId}></${this.e}>`);
  //     $(`#${this.eId}`).addClass(`${this.eClass}`);
  //     return this;
  //   }
  //   addChain() {
  //     let count = 0;
  //     let chain = this.eArr;
  //     chain.forEach(() => {
  //       $(this.append).append(`<${this.e} id=` + chain[count] + `></${this.e}>`);
  //       $(`#` + chain[count]).addClass(`${this.eClass}`);
  //       // console.log(chain[count]);
  //       ++count;
  //       return this;
  //     })
  //   }
  //   addBtnChain() {
  //     let count = 0;
  //     let btnChain = this.eArr;
  //     btnChain.forEach(() => {
  //       $(`#${this.append}`).append(`<button id=` + btnChain[count] + `></button>`);
  //       $(`#` + btnChain[count]).addClass(`${this.eClass}`);
  //       ++count;
  //       return this;
  //     });
  //   }
  //   addInputChain() {
  //     let count = 0;
  //     let inputChain = this.eArr;

  //     $(`#${this.eId}`).attr(`type`, `input`).attr(`placeholder`, `Enter a size`).attr(`name`, this.eName);
  //   }
  // }
  // class style extends eMaker {
  //   constructor(append, e, eId, eClass, eArr, sWidth, sHeight) {
  //     super(append, e, eId, eClass, eArr);
  //     this.sWidth = sWidth;
  //     this.sHeight = sHeight;
  //   }
  //   basicStyle() {
  //     $(`#${this.eId}`).addClass(this.eClass).width(this.sWidth).height(this.sHeight);
  //     console.log(this);
  //     return this;
  //   }
  // }

  // second attempt
  // let text = new maker();
  //   let zones = new eMaker(html[2], `div`, zoneOrder, `row`, zoneOrder);
  //   zones.addChain();
  //   let canvasZ = new style(``, ``, `canvasOrder`, `border border-primary`, ``, ``,``);
  //   canvasZ.basicStyle();
  //   let detailZ = new style(``, ``, `dataOutput`, `border border-primary`, ``, ``,``);
  //   detailZ.basicStyle();
  //   let dataZ = new style(``, ``,`dataInput`, `border border-primary`, ``, ``,``);
  //   dataZ.basicStyle();
  //   let buttons = new eMaker(`dataInput`, `button`, ``, `col btn btn-primary`, btnShapes);
  //   buttons.addBtnChain();
  // });

  // class elementMaker {
  //   constructor(append, e, eId, eClass, eVis, eTxt) {
  //     this.append = append;
  //     this.e = e;
  //     this.eId = eId;
  //     this.eClass = eClass;
  //     this.eVis = `visible`;
  //     this.eTxt = eTxt;
  //   }
  //   addBasic() {
  //     $(this.append).append(`<${this.e} id=${this.eId}></${this.e}>`);
  //     $(`#${this.eId}`).addClass(`${this.eClass}`).attr(`visibility`, `${this.eVis}`).text(`${this.eTxt}`);
  //     return this;
  //   }
  // }

  // class zone extends elementMaker {
  //   constructor(append, e, eId, eClass, eVis, eTxt, eHeight, eWidth) {
  //     super(append, e, eId, eClass, eVis, eTxt)
  //     this.append = `main`;
  //     this.eClass =`row ${eClass}`;
  //     this.eHeight = eHeight;
  //     this.eWidth = eWidth;
  //     this.eVis = `visible`;
  //   }
  //   addZoneBasic() {
  //     $(`#${this.eId}`).height(`${this.eHeight}`).width(`${this.eWidth}`);
  //     return this;
  //   }
  // }

  // class button extends elementMaker {
  //   constructor(append, e, eId, eClass, eVis, eTxt, eType, eShape) {
  //     super(append, e, eId, eClass, eVis, eTxt);
  //     this.eType = eType;
  //     this.e = `button`;
  //     this.eClass = `col col-2 m-1 btn btn-primary`;
  //     this.eType = `button`;
  //     this.eShape = eShape;
  //   }
  //   addBtnBasic() {
  //     $(`#${this.eId}`).attr(`type`, this.eType).on(`click`, () => {
  //       $(`#shapeDetail`).append(`: ${this.eShape}`);
  //       console.log(`: ${this.eShape}`);
  //       return this;
  //     })
  //   }
  // }

  // class input extends elementMaker {
  //   constructor(append, e, eId, eClass, eVis, eTxt, eType, ePlaceHolder, eName) {
  //     super(append, e, eId, eClass, eVis, eTxt, eType);
  //     this.ePlaceHolder = ePlaceHolder;
  //     this.eName = eName;
  //     this.eType = `text`;
  //     this.eClass = `col m-1`
  //   }
  //   addInputBasic() {
  //     $(`#${this.eId}`).attr(`type`, this.eType).attr(`placeholder`, this.ePlaceHolder).attr(`name`, this.eName);
  //     return this;
  //   }
  // }

  // class shapeMaker {
  //   constructor(size){
  //     this.size = size;

  //   }
  //   addShape(){
  //   $(`#canvasInput`).append(this.size);
  //   }
  // }

  // let inputZone = new zone(`header`,`div`, `shapesBtn`, `row-cols-4 justify-content-center 1-m`,``,``);
  // inputZone.addBasic();
  // let canvasZone = new zone(``,`div`, `canvasInput`, `border border-primary m-1 text-white`, ``, ``, `40em`, `40em`);
  // canvasZone.addBasic().addZoneBasic();
  // let outputZone = new zone(``,`div`, `canvasOutput`, `row-cols-2 border border-primary m-1 text-white`, ``, ``, `40em`, `16em`);
  // outputZone.addBasic().addZoneBasic();

  // let shapeDetail = new elementMaker(`#canvasOutput`, `div`, `shapeDetail`, `col border border-primary`, ``, `Shape Details`);
  // shapeDetail.addBasic();
  // let heightDetail = new elementMaker(`#canvasOutput`, `div`, `heightDetail`, `col border border-primary`, ``, `Height Details`);
  // heightDetail.addBasic();
  // let widthDetail = new elementMaker(`#canvasOutput`, `div`, `widthDetail`, `col border border-primary`, ``, `Width Details`);
  // widthDetail.addBasic();
  // let areaDetail = new elementMaker(`#canvasOutput`, `div`, `areaDetail`, `col border border-primary`, ``, `Area Details`);
  // areaDetail.addBasic();
  // let perimeterDetail = new elementMaker(`#canvasOutput`, `div`, `perimeterDetail`, `col border border-primary`, ``, `Perimeter Details`);
  // perimeterDetail.addBasic();
  // let radiusDetail = new elementMaker(`#canvasOutput`, `div`, `radiusDetail`, `col border border-primary`, ``, `Radius Details`);
  // radiusDetail.addBasic();

  // let btnSquare = new button(`#shapesBtn`, ``, `btnSquare1`, ``, ``, `Make a Square`, ``, `Square`);
  // btnSquare.addBasic().addBtnBasic();
  // let inputSquare = new input(`#shapesBtn`, `input`, `inputSquare1`, ``, ``, ``, ``, `input size`, `inputSquare`);
  // inputSquare.addBasic().addInputBasic();

  // let btnRec = new button(`#shapesBtn`, ``, `btnRec1`, ``, ``, `Make a Rectangle`, ``, `Rectangle`);
  // btnRec.addBasic().addBtnBasic();
  // let inputRecHeight = new input(`#shapesBtn`, `input`, `inputRecH`, ``, ``, ``, ``, `input size`, `inputRecHeight`);
  // inputRecHeight.addBasic().addInputBasic();

  // let btnCir = new button(`#shapesBtn`, `button`, `btnCir1`, ``, ``, `Make a Circle`, ``, `Circle`);
  // btnCir.addBasic().addBtnBasic();
  // let inputCir = new input(`#shapesBtn`, `input`, `inputCir1`, ``, ``, ``, `input size`, `input size`);
  // inputCir.addBasic().addInputBasic();
  // let btnTri = new button(`#shapesBtn`, `button`, `btnTri1`, ``, `hidden`, `Make a Triangle`, ``, `Triangle`);
  // btnTri.addBasic().addBtnBasic();
  // let inputTri = new input(`#shapesBtn`, `input`, `inputTri1`, ``, ``, ``, `input size`, `input size`);
  // inputTri.addBasic().addInputBasic();
