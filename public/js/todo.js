const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    
    // li生成
    const li = document.createElement("li");
    console.log(li);

    // div生成
    const div = document.createElement("div");
    div.className = "todoBox";
    console.log(div);

    // p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;
    console.log(p);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);