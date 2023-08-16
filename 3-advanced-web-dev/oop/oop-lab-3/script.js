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
    }
  }

  class button extends elementMaker {
    constructor(appeand, e, eId, eClass, eVis, eTxt, eType,eShape) {
      super(appeand, e, eId, eClass, eVis, eTxt);
      this.eType = eType;
      this.e = `button`;
      this.eClass = `col col-2 m-1 btn btn-primary`;
      this.eType = `button`;
      this.eShape = eShape;
    }
    addBtnBasic() {
      $(`#${this.eId}`).attr(`type`, this.eType).on(`click`, function (){
        $(`#canvasOutput`).text(this.eShape);
      });
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

  let inputZone = new elementMaker(`header`, `form`, `shapesBtn`, `row row-cols-4 d-flex justify-content-center `, `visible`, ``);
  let canvasZone = new elementMaker(`main`, `div`, `canvasInput`, `border border-primary m-1 text-white`, `visible`, ``);
  let outputZone = new elementMaker(`main`, `div`, `canvasOutput`, `border border-primary m-1 text-white`, `visible`, ``);
  let shapeDetail = new elementMaker(`#canvasOutput`, `div`, `shape`, `row`, ``, `Shape Details`);
  // let heightDetail = new elementMaker();
  // let widthDetail = new elementMaker();
  // let areaDetail = new elementMaker();
  // let perimeterDetail = new elementMaker();
  // let radiusDetail = new elementMaker();
  let btnSquare = new button(`#shapesBtn`, ``, `btnSquare1`, ``, ``, `Make a Square`, ``,`Square`);
  let inputSquare = new input(`#shapesBtn`, `input`, `inputSquare1`, ``, ``, ``, ``, `input size`, `inputSquare`);

  let btnRec = new button(`#shapesBtn`, ``, `btnRec1`, ``, ``, `Make a Rectangle`, ``,`Rectangle`);
  let inputRecHeight = new input(`#shapesBtn`, `input`, `inputRecH`, ``, ``, ``, ``, `input size`, `inputRecHeight`);
  // let inputRecWidth = new input(`#shapesBtn`, `input`, `inputRecW`, ``,``, ``, ``, `input Width`, `inputRecWidth`);

  let btnCir = new button(`#shapesBtn`, `button`, `btnCir1`, ``, ``, `Make a Circle`, ``,`Circle`);
  let inputCir = new input(`#shapesBtn`, `input`, `inputCir1`, ``, ``, ``, `input size`, `input size`);
  let btnTri = new button(`#shapesBtn`, `button`, `btnTri1`, ``, `hidden`, `Make a Triangle`, ``,`Triangle`);
  let inputTri = new input(`#shapesBtn`, `input`, `inputTri1`, ``, ``, ``, `input size`, `input size`);


  inputZone.addBasic();

  btnSquare.addBasic();
  btnSquare.addBtnBasic();
  inputSquare.addBasic();
  inputSquare.addInputBasic();

  btnRec.addBasic();
  btnRec.addBtnBasic();
  inputRecHeight.addBasic();
  inputRecHeight.addInputBasic();

  btnCir.addBasic();
  btnCir.addBtnBasic();
  inputCir.addBasic();
  inputCir.addInputBasic();

  btnTri.addBasic();
  btnTri.addBtnBasic();
  inputTri.addBasic();
  inputTri.addInputBasic();

  canvasZone.addBasic();
  $(`#canvasInput`).height(`40em`).width(`40em`);

  outputZone.addBasic();
  $(`#canvasOutput`).height(`40em`).width(`16em`);


})
