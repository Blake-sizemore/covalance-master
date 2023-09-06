$(document).ready(function () {
    $(`body`).addClass(`container bg-dark`);
    $(`header`).addClass(`row`);
    $(`main`).addClass(`row justify-content-center`);
    let buttons = [`genDie`, `reRoll`, `sum`];
    let buttonText = [`Genarate Die`, `Re-roll all dice`, `Sum total of all dice`];
    let dieCount = 0;
    let diceArrVal = [];
    class arrMaker {
        constructor(arrSet, typeOf, appendWhere) {
            this.arrSet = arrSet;
            this.typeOf = typeOf;
            this.appendWhere = appendWhere;
        }
        addArr(eClass, arrText) {
            let count = 0;
            this.eClass = eClass;
            this.arrText = arrText;
            this.arrSet.forEach(() => {
                let arrSelect = `#${this.arrSet[count]}`;
                $(this.appendWhere).append(`<${this.typeOf} id=${this.arrSet[count]}></${this.typeOf}>`);
                $(arrSelect).addClass(`${this.eClass}`);
                $(arrSelect).text(`${this.arrText[count]}`);
                ++count;
            });
            return this
        }
    }
    class die {
        constructor() {
            ++dieCount;
            this.die = $(`<div id=${dieCount} class="die bg-light m-1 rounded-3 text-center"></div>`);
            $(`main`).append(this.die);
            this.roll();
            $(this.die).width(`100px`).height(`100px`);
            $(this.die).on(`click`, () => {
                this.roll();
            });
            $(this.die).on(`dblclick`, () => {
                $(this.die).remove();
                let index = diceArrVal.indexOf(this);
                diceArrVal.splice(index, 1);
            });
            diceArrVal.push(this);
        }
        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
            $(this.die).text(this.value);
        }
    }
    let button = new arrMaker(buttons, `button`, `header`);
    button.addArr(`col btn btn-primary m-1`, buttonText);
    $(`#genDie`).on(`click`, function () {
        new die;
    });
    $(`#reRoll`).on(`click`, function () {
        diceArrVal.forEach((die) => die.roll());
    });
    $(`#sum`).on(`click`, function () {
        const sum = diceArrVal.reduce((previousSum, currentDie) => previousSum + currentDie.value, 0);
        alert(sum);
    });
});
