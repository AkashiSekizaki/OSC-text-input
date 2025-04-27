// HTML内の「表示する」ボタンを取得して、クリックイベントを設定する
document.getElementById("displayButton").addEventListener("click", function () {
  // テキストボックス（入力欄）の要素を取得する
  const inputElement = document.getElementById("textInput");
  console.dir(inputElement);
  console.log(inputElement.value);

  // テキストボックスに入力された値を取り出す
  const inputText = inputElement.value;

  // 出力先の要素（pタグ）を取得する
  const outputElement = document.getElementById("outputText");

  // 出力先の要素に、取り出したテキストを設定する
  outputElement.textContent = inputText;
});
