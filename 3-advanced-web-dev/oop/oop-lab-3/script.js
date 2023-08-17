$(document).ready(function () {
  $(`body`).addClass(`contianer bg-dark`);
  $(`header`).addClass(`row justify-content-center`);
  $(`#inputZone`).addClass(`d-flex justify-content-center m-2`);
  $(`main`).addClass(`row bg-dark justify-content-center my-3`);

  class elementMaker {
    constructor(appeand, e, eId, eClass, eVis, eTxt) {
      this.appeand = appeand;
      this.e = e;
      this.eId = eId;
      this.eClass = eClass;
      this.eVis = `visible`;
      this.eTxt = eTxt;
    }
    addBasic() {
      $(this.appeand).append(`<${this.e} id=${this.eId}></${this.e}>`);
      $(`#${this.eId}`).addClass(`${this.eClass}`).attr(`visibility`, `${this.eVis}`).text(`${this.eTxt}`);
      return this;
    }
  }

  class zone extends elementMaker {
    constructor(appeand, e, eId, eClass, eVis, eTxt, eHeight, eWidth) {
      super(appeand, e, eId, eClass, eVis, eTxt)
      this.appeand = `main`;
      this.eClass =`row ${eClass}`;
      this.eHeight = eHeight;
      this.eWidth = eWidth;
      this.eVis = `visible`;
    }
    addZoneBasic() {
      $(`#${this.eId}`).height(`${this.eHeight}`).width(`${this.eWidth}`);
      return this;
    }
  }

  class button extends elementMaker {
    constructor(appeand, e, eId, eClass, eVis, eTxt, eType, eShape) {
      super(appeand, e, eId, eClass, eVis, eTxt);
      this.eType = eType;
      this.e = `button`;
      this.eClass = `col col-2 m-1 btn btn-primary`;
      this.eType = `button`;
      this.eShape = eShape;
    }
    addBtnBasic() {
      $(`#${this.eId}`).attr(`type`, this.eType).on(`click`, () => {
        $(`#shapeDetail`).append(`: ${this.eShape}`);
        console.log(`: ${this.eShape}`);
        return this;
      })
    }
  }

  class input extends elementMaker {
    constructor(appeand, e, eId, eClass, eVis, eTxt, eType, ePlaceHolder, eName) {
      super(appeand, e, eId, eClass, eVis, eTxt, eType);
      this.ePlaceHolder = ePlaceHolder;
      this.eName = eName;
      this.eType = `text`;
      this.eClass = `col m-1`
    }
    addInputBasic() {
      $(`#${this.eId}`).attr(`type`, this.eType).attr(`placeholder`, this.ePlaceHolder).attr(`name`, this.eName);
      return this;
    }
  }

  // class shapeMaker {
  //   constructor(size){
  //     this.size = size;

  //   }
  //   addShape(){
  //   $(`#canvasInput`).append(this.size);
  //   }
  // }

  let inputZone = new zone(`header`,`div`, `shapesBtn`, `row-cols-4 justify-content-center 1-m`,``,``, `1em`, `56em`);
  inputZone.addBasic().addZoneBasic();
  let canvasZone = new zone(``,`div`, `canvasInput`, `border border-primary m-1 text-white`, ``, ``, `40em`, `40em`);
  canvasZone.addBasic().addZoneBasic();
  let outputZone = new zone(``,`div`, `canvasOutput`, `row-cols-2 border border-primary m-1 text-white`, ``, ``, `40em`, `16em`);
  outputZone.addBasic().addZoneBasic();

  let shapeDetail = new elementMaker(`#canvasOutput`, `div`, `shapeDetail`, `col border border-primary`, ``, `Shape Details`);
  shapeDetail.addBasic();
  let heightDetail = new elementMaker(`#canvasOutput`, `div`, `heightDetail`, `col border border-primary`, ``, `Height Details`);
  heightDetail.addBasic();
  let widthDetail = new elementMaker(`#canvasOutput`, `div`, `widthDetail`, `col border border-primary`, ``, `Width Details`);
  widthDetail.addBasic();
  let areaDetail = new elementMaker(`#canvasOutput`, `div`, `areaDetail`, `col border border-primary`, ``, `Area Details`);
  areaDetail.addBasic();
  let perimeterDetail = new elementMaker(`#canvasOutput`, `div`, `perimeterDetail`, `col border border-primary`, ``, `Perimeter Details`);
  perimeterDetail.addBasic();
  let radiusDetail = new elementMaker(`#canvasOutput`, `div`, `radiusDetail`, `col border border-primary`, ``, `Radius Details`);
  radiusDetail.addBasic();

  let btnSquare = new button(`#shapesBtn`, ``, `btnSquare1`, ``, ``, `Make a Square`, ``, `Square`);
  btnSquare.addBasic().addBtnBasic();
  let inputSquare = new input(`#shapesBtn`, `input`, `inputSquare1`, ``, ``, ``, ``, `input size`, `inputSquare`);
  inputSquare.addBasic().addInputBasic();

  let btnRec = new button(`#shapesBtn`, ``, `btnRec1`, ``, ``, `Make a Rectangle`, ``, `Rectangle`);
  btnRec.addBasic().addBtnBasic();
  let inputRecHeight = new input(`#shapesBtn`, `input`, `inputRecH`, ``, ``, ``, ``, `input size`, `inputRecHeight`);
  inputRecHeight.addBasic().addInputBasic();

  let btnCir = new button(`#shapesBtn`, `button`, `btnCir1`, ``, ``, `Make a Circle`, ``, `Circle`);
  btnCir.addBasic().addBtnBasic();
  let inputCir = new input(`#shapesBtn`, `input`, `inputCir1`, ``, ``, ``, `input size`, `input size`);
  inputCir.addBasic().addInputBasic();
  let btnTri = new button(`#shapesBtn`, `button`, `btnTri1`, ``, `hidden`, `Make a Triangle`, ``, `Triangle`);
  btnTri.addBasic().addBtnBasic();
  let inputTri = new input(`#shapesBtn`, `input`, `inputTri1`, ``, ``, ``, `input size`, `input size`);
  inputTri.addBasic().addInputBasic();

})
