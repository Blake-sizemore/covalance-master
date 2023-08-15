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
    constructor(appeand, e, eId, eClass, eVis, eTxt, eType) {
      super(appeand, e, eId, eClass, eVis, eTxt);
      this.eType = eType;
      this.e = `button`;
      this.eClass = `col col-2 m-1 btn btn-primary`;
      this.eType = `submit`;
    }
    addBtnBasic() {
      $(`#${this.eId}`).attr(`type`, this.eType);
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


  let inputZone = new elementMaker(`header`, `form`, `shapesBtn`, `row row-cols-4 d-flex justify-content-center`, `visible`, ``);
  let canvasZone = new elementMaker(`main`, `div`, `canvasInput`, `border border-primary m-1`, `visible`, `Populate shapes here`);
  let outputZone = new elementMaker(`main`, `div`, `canvasOutput`, `border border-primary m-1`, `visible`, `output populates here`);
  let btnSquare = new button(`#shapesBtn`, ``, `btnSquare1`, ``, ``, `Make a Square`, ``);
  let inputSquare = new input(`#shapesBtn`, `input`, `inputSquare1`, ``, ``, ``, ``, `input size`, `inputSquare`);
  
  let btnRec = new button(`#shapesBtn`, ``, `btnRec1`, ``, ``, `Make a Rectangle`, ``);
  let inputRecHeight = new input(`#shapesBtn`, `input`, `inputRecH`, ``, ``, ``, ``, `input Height`, `inputRecHeight`);
  // let inputRecWidth = new input(`#shapesBtn`, `input`, `inputRecW`, ``,``, ``, ``, `input Width`, `inputRecWidth`);

  let btnCir = new button(`#shapesBtn`, `button`, `btnCir1`, ``, ``, `Make a Circle`, ``);
  let inputCir = new input(`#shapesBtn`, `input`, `inputCir1`, ``, ``, ``, `input size`, `input size`);
  let btnTri = new button(`#shapesBtn`, `button`, `btntTri1`, ``, `hidden`, `Make a Triangle`, ``);
  let inputTri = new input(`#shapesBtn`, `input`, `inputTri1`, ``, ``, ``, `input size`, `input size`);


  inputZone.addBasic();
  $(`#shapesBtn`).width(`70em`);

  btnSquare.addBasic();
  btnSquare.addBtnBasic();
  inputSquare.addBasic();
  inputSquare.addInputBasic();

  btnRec.addBasic();
  btnRec.addBtnBasic();
  inputRecHeight.addBasic();
  inputRecHeight.addInputBasic();
  // inputRecWidth.addBasic();
  // inputRecWidth.addInputBasic();


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
