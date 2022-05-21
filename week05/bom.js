const list = document.querySelector(".list");
const favchap = document.querySelector("#favchap");
const addButton = document.querySelector("#addButton");

addButton.addEventListener('click', () => {
    const myChapter = favchap.value;

  if (myChapter != "") {
    favchap.value = '';

    const listChapter = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listChapter.appendChild(listText);
    listText.textContent = myChapter;
    listChapter.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listChapter);

    listBtn.addEventListener('click', () => {
    list.removeChild(listChapter);
  });

    favchap.focus();
  } else {
    alert("Enter your favorite chapter!")
  }
});