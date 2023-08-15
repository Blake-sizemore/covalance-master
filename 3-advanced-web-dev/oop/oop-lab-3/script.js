$(document).ready(function () {
  $(`body`).addClass(`contianer bg-dark`);

  $(`header`).addClass(`row justify-content-center`).append(`<div id=inputZone></div`);

  $(`main`).addClass(`row bg-dark justify-content-center my-3`).append(`<div id=input>`).append('<div id=output></div>');


  class elementMaker {
    constructor(appeand, e, eId, eClass, eVis, eTxt) {
      this.appeand = appeand;
      this.e = e;
      this.eId = eId;
      this.eClass = eClass;
      this.eVis = eVis;
      this.eTxt = eTxt;
    }
    addBasic() {
      $(this.appeand).append(`<${this.e}></${this.e}>`);
      $().attr(`id`, this.eId);
      $(`#${this.eId}`).addClass(this.eClass).attr(`visibility`, `${this.eVis}`).text(`${this.eTxt}`);
      console.log(this);
    }
  }

  class button extends elementMaker {
    constructor(appeand, e, eId, eClass, eVis, eTxt, eType) {
      super(appeand, e, eId, eClass, eVis, eTxt);
      this.eType = eType;
    }
    addBasic() {
      $(this.appeand).append(`<${this.e}></${this.e}>`);
      $(this.e).attr(`id`, this.eId);
      $(`#${this.eId}`).addClass(this.eClass).attr(`visibility`, `${this.eVis}`).text(`${this.eTxt}`).attr(`type`, this.eType);
      console.log(this);
    }
  }

  class input extends elementMaker {
    constructor(appeand, e, eId, eClass, eVis, eTxt, eType, ePlaceHolder, eName) {
      super(appeand, e, eId, eClass, eVis, eTxt, eType);
      this.ePlaceHolder = ePlaceHolder;
      this.eName = eName;
    }
    addBasic() {
      $(this.appeand).append(`<${this.e}></${this.e}>`);
      $(this.e).attr(`id`, this.eId);
      $(`#${this.eId}`).addClass(this.eClass).attr(`visibility`, `${this.eVis}`).attr(`type`, this.eType).attr(`type`, this.eType).attr(`placeholder`, this.ePlaceHolder).attr(`name`, this.eName);
      console.log(this);
    }
  }

  let inputZone = new elementMaker(`#inputZone`, `form`, `shapesBtn`, `row`, `visable`, ``);
  let btnSquare = new button(`#shapesBtn`, `button`, `btnSquare1`, `col col-2 btn btn-primary`, `visable`, `Make a Square`, `submit`);
  let inputSquare = new input(`#shapesBtn`, `input`, `inputSquare1`, `col`, `visable`, ``, `text`, `input size`, `inputSquare`);
  let btnRec = new button(`#shapesBtn`, `button`, `btnRec1`, `col col-2 btn btn-primary`, `visable`, `Make a Rectangle`, `submit`);
  let inputRec = new input(`#shapesBtn`, `input`, `inputRec1`, `col`, `visable`,``, `text`, `input size`, `inputRec`);
  let btnCir =  new button(`#shapesBtn`, `button`, `btnCir1`, `col col-2 btn btn-primary`, `visable`, `Make a Circle`, `submit`);
  let inputCir = new input(`#shapesBtn`, `input`, `inputCir1`, `col`, `visable`, `text`, `input size`, `inputCircle`);

  inputZone.addBasic();
  btnSquare.addBasic();
  inputSquare.addBasic();
  btnRec.addBasic();
  inputRec.addBasic();
  btnCir.addBasic();
  inputCir.addBasic();
})
