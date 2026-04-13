const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // li生成
    const li = document.createElement("li");

    // div生成
    const div = document.createElement("div");
    div.className = "todoBox";

    // p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.className = "c-btn btn-complete";
    completeButton.addEventListener("click", () => {
        alert("完了");
    });

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.className = "c-btn btn-delete";
    deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);