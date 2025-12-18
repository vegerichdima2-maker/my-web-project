// Завдання 2: Масив з реальними URL (на тему ІТ для вашого профілю)
let images = [
    "https://picsum.photos/id/1/200/200", // Laptop
    "https://picsum.photos/id/180/200/200", // Laptop 2
    "https://picsum.photos/id/119/200/200", // MacBook
    "https://picsum.photos/id/160/200/200"  // Smart Phone
];

// Завдання 3: Описи
const descriptions = ["Робоче місце розробника", "Аналіз даних", "Ноутбук для навчання", "Мобільні технології"];

const gallery = document.getElementById("gallery");
const mainImage = document.getElementById("mainImage");

// Функція для відображення галереї (Завдання 2, 3, 4)
function renderGallery(imgArray) {
    gallery.innerHTML = ""; // Очищуємо перед рендером
    
    imgArray.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.title = descriptions[index] || "Зображення"; // Завдання 3
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.margin = "10px";
        img.style.cursor = "pointer";
        img.style.borderRadius = "5px";
        img.style.transition = "0.3s";

        // Завдання 4: Клік для перегляду
        img.onclick = function() {
            mainImage.src = src;
            mainImage.style.opacity = "0";
            setTimeout(() => { mainImage.style.opacity = "1"; }, 100);
        };

        // Ефект при наведенні
        img.onmouseover = () => img.style.transform = "scale(1.1)";
        img.onmouseout = () => img.style.transform = "scale(1)";

        gallery.appendChild(img);
    });
}

// Завдання 6: Сортування
document.getElementById("sortImages").onclick = function() {
    images.sort(); // Сортуємо масив рядків (URL)
    renderGallery(images);
};

// Завдання 5: Очищення
document.getElementById("clearGallery").onclick = function() {
    gallery.innerHTML = "<p>Галерея порожня</p>";
    images = []; 
    localStorage.removeItem("images"); // Видаляємо зі сховища
};

// Завдання 8: Збереження у Local Storage
function saveToLocal() {
    localStorage.setItem("images", JSON.stringify(images));
}

// Завдання 9: Завантаження та початковий рендер
window.addEventListener('load', () => {
    const saved = JSON.parse(localStorage.getItem("images"));
    if (saved && saved.length > 0) {
        images = saved;
    }
    renderGallery(images);
    saveToLocal(); // Оновлюємо сховище
});
