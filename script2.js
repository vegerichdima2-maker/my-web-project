// Завдання 1: Консольне виведення
console.log("Текст заголовка:", document.getElementById("header").innerText);

// Завдання 2: Зміна тексту
document.getElementById("changeTextButton").onclick = function() {
    document.getElementById("text").innerText = "Текст успішно змінено Дмитром!";
};

// Завдання 3: Додавання елементів
document.getElementById("addParagraphButton").onclick = function() {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = "➕ Це новий доданий абзац!";
    newParagraph.className = "dynamic-p"; // додамо клас для зручності
    document.getElementById("dom-tasks").appendChild(newParagraph);
};

// Завдання 4: Видалення останнього доданого елемента
document.getElementById("removeLastParagraph").onclick = function() {
    const paragraphs = document.getElementsByClassName("dynamic-p");
    if (paragraphs.length > 0) {
        paragraphs[paragraphs.length - 1].remove();
    } else {
        alert("Більше немає доданих абзаців для видалення!");
    }
};

// Завдання 5: Зміна фону
document.getElementById("changeBackgroundColor").onclick = function() {
    const colors = ["#f8fafc", "#e0f2fe", "#fef3c7", "#dcfce7"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
};

// Завдання 6: Події наведення (Hover)
const hoverText = document.getElementById("hoverText");
hoverText.onmouseover = function() { this.style.color = "blue"; };
hoverText.onmouseout = function() { this.style.color = "black"; };

// Завдання 7: Валідація пошти
document.getElementById("emailForm").onsubmit = function(event) {
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Помилка: введіть коректну адресу!");
        event.preventDefault();
    } else {
        alert("Форму відправлено успішно!");
    }
};

// Завдання 8: Зміна атрибута SRC
document.getElementById("changeImage").onclick = function() {
    document.getElementById("image").src = "https://via.placeholder.com/150/2563eb/white?text=Image+2";
};

// Завдання 9: Робота з класами
document.getElementById("addClassButton").onclick = function() {
    document.getElementById("styledText").classList.toggle("red-bold-text");
};