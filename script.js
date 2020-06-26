var count = 0;

document.getElementById("add").onclick = function() {
    var title = prompt("What is the title of the book?");
    var author = prompt("Who is the author");
    var numPages = prompt("How many pages are there?");
    while(isNaN(numPages))
    {
        numPages = prompt("You didn't input a valid number, try again.");
    }
    createEntry(title, author, numPages);
}

function createEntry(title, author, numpages) {
    var newList = document.createElement("ul");
    newList.className = "list" + count;
    var liTitle = document.createElement("li");
    liTitle.innerHTML = title;
    newList.appendChild(liTitle);
    var liAuthor = document.createElement("li");
    liAuthor.innerHTML = author;
    newList.appendChild(liAuthor);
    var liNumPages = document.createElement("li");
    liNumPages.innerHTML = numpages;
    newList.appendChild(liNumPages);
    var liRead = document.createElement("li");
    liRead.innerHTML = '<input type="checkbox">';
    newList.appendChild(liRead);
    var liBtn = document.createElement("li");
    var btn = document.createElement("button");
    btn.innerHTML = "remove";
    initButton(btn, count);
    liBtn.appendChild(btn);
    newList.appendChild(liBtn);
    document.getElementsByClassName("top")[0].appendChild(newList);
    count++;
}

function initButton(btn, count) {
    btn.onclick = function() {
        document.getElementsByClassName("list" + count)[0].remove();
    }
}