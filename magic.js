//get heading element

const totHead = document.querySelector("#sumHead");

//get item amount
const inputElement = document.querySelector("#itemAmt");

//get item name
const item = document.querySelector("#itemName");

//ref to table
const spendingtable = document.querySelector("#spendingtable");

// init value which starts from 0 -->
let totalAmt = 0;

//set heading element to totalAmt

totHead.textContent = totalAmt;

// whole totallist in one container (array)
const totArr = [];

//fuct for incrementing function

function countInc() {
  //obj for data trnsfer tot aaray (data structure)
  const totalObj = {};

  // take input value
  const itemName = item.value;
  //convert to num
  const inputAmt = parseInt(inputElement.value);
  // console.log(inputAmt)

  //put data in object
  totalObj.name = itemName;
  totalObj.value = inputAmt;
  console.log(totalObj);

  // const expense = parseInt(inputAmt);

  console.log({ inputAmt, itemName });

  //sending data to Array (data structure)
  totArr.push(totalObj);

  // every click increments it to total -->
  totalAmt = totalAmt + inputAmt;

  //set heading element to totalAmt
  const pretext = ` Total spending : ${totalAmt}`;
  totHead.textContent = pretext;
  console.log({ totalAmt });

  //show table
  // const d1 = totArr[0]
  // const d2 = totArr[1]

  // const d1text= `${d1.value} :: ${d1.value}`;
  // const d2text= `${d2.value} :: ${d2.value}`;

  // const tableData = `
  // <div>${d1text}</div><div>${d2text}</div>
  // `

  const totArrHtml = totArr.map((total) => {
    return `<div> ${total.name} ==> ${total.value} </div>`;
  });

  const joinedtotArrHtml = totArrHtml.join("");

  spendingtable.innerHTML = joinedtotArrHtml;

  console.table(totArr);
  console.log(totArrHtml);
}
//get btn element
const spending = document.querySelector("#addBtn");
//  console.log(spending)'

// listen to click events -->
spending.addEventListener("click", countInc, false);
