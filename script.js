const column1 = document.querySelector(".column-1");
const column2 = document.querySelector(".column-2");
const column3 = document.querySelector(".column-3");
const list1 = document.querySelector(".list-1");
const list2 = document.querySelector(".list-2");
const submitButton = document.querySelector("button");
const welcomeText = document.querySelector(".welcome-message");

const inputArrayOne = [
  "KTP-1011-MF-T",
  "KTP-3000-MF/T",
  "KTP-3002-MF-T",
  "KTP-3004-MF-T",
  "KTP-3004-MF-T",
  "PS-4811-1.2-MF/T",
  "PS-4816-1.2-MF-T",
  "PS-4842-1.2-MF-T",
  "PS-4888-1.2-MF-T",
  "STB-122525-MF-T",
  "TF-8045-1.5-MF-T",
];
const inputArrayTwo = ["4", "1", "1", "5", "3", "3", "1", "1", "1", "3", "4"];
const inputArrayThree = [
  "50",
  "10",
  "30",
  "20",
  "40",
  "30",
  "20",
  "40",
  "10",
  "10",
  "10",
];
const outputArrayOne = [
  "5.600",
  "1.800",
  "1.600",
  "8.000",
  "1.800",
  "3.000",
  "5.000",
  "3.400",
  "4.000",
  "5.200",
  "34.000",
];
const outputArrayTwo = [
  "0000011570",
  "0000014902",
  "0000011742",
  "0000011880",
  "0000011881",
  "0000015251",
  "0000012324",
  "0000012431",
  "0000012487",
  "0000012975",
  "0000013519",
];

welcomeText.onclick = function () {
  this.style.width = "0px";
  this.style.height = "0px";
  this.textContent = "";
};

submitButton.onclick = function () {
  const textareaValuesArray = column1.value
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item !== "");

  textareaValuesArray.forEach((input) => {
    const inputIndex = inputArrayOne.indexOf(input);
    const listItemOutput1 = outputArrayOne[inputIndex];
    const listItemOutput2 = outputArrayTwo[inputIndex];
    const listItem1 = document.createElement("li");
    const listItem2 = document.createElement("li");
    listItem1.textContent = listItemOutput1;
    listItem2.textContent = listItemOutput2;
    list1.appendChild(listItem1);
    list2.appendChild(listItem2);
  });
};
