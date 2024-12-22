// Task 1
// Створити на сторінці div, вказуємо йому якийсь виразний id, зробити йому такі стилі,
// щоб він виглядав як чорний квадрат 100х100 px. Додати на сторінку кнопку, по кліку на цю кнопку блок повинен зникнути.
// Зникання потрібно зробити усіма трьома способами (окрема кнопка під кожен спосіб):
//
// a) CSS (display: none), тобто просто навісити стиль на елемент
//
// b) JS (видалення елементу)
//
// c) CSS+JS (навішувати на елемент клас hidden, а в CSS прописати такі стилі, щоб вони приховували все з класом hidden)

// Task 1-a
document.getElementById("hide_button1").addEventListener("click", () => {
  document.getElementById("black_square").style.display = "none";
});

// Task 1-b
document.getElementById("hide_button2").addEventListener("click", () => {
  const black_square = document.getElementById("black_square");
  black_square.remove();
});

// Task 1-c
document.getElementById("hide_button3").addEventListener("click", () => {
  document.getElementById("black_square").classList.add("hidden");
});

// Task 2
// Додати кнопку і зробити так, щоб по кліку на кнопку блок пропадав,
// якщо він є, і щоб зʼявлявся, якщо він був прихованим (спосіб CSS+JS).

document.getElementById("hide-show_button").addEventListener("click", () => {
  const black_square = document.getElementById("black_square");
  if (black_square.classList.contains("hidden")) {
    black_square.classList.remove("hidden");
  } else {
    black_square.classList.add("hidden");
  }
});

// Task 3
// Зробити на сторінці 5 таких блоків, дати їм всім однаковий клас,
// завдяки якому вони всі почнуть виглядати як чорні квадрати.
// Зробити так, щоб вони всі одночасно приховувались/зʼявлялись по натиску на кнопку.

document.getElementById("hide-show").addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach(function (square) { // black_squares.forEach(square => {
    if (square.classList.contains("hidden")) {
      square.classList.remove("hidden");
    } else {
      square.classList.add("hidden");
    }
  });
});

// Task 4
// Додати на сторінку інпут, в який можна ввести css selector (query selector)
// і при натиску на кнопку будуть приховувались/зʼявлялись ті елементи, які відповідають цьому селектору.

document.getElementById("hide-show_button2").addEventListener("click", () => {
  const selectorInput = document.getElementById("query_selector").value;
  const elements = document.querySelectorAll(selectorInput);
  elements.forEach(function (element) {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });
});

// Task 5
// Додати на сторінку жовтий квадрат, і зробити так, щоб при натиску на нього вперше
// виводився напис "Привіт" (alert), а при другому натиску цей квадрат зникав
// (потрібно міняти функцію обробник, видаляти першу і ставити другу)

const yellow_square = document.getElementById("yellow_square");
yellow_square.addEventListener("click", showAlert);

function showAlert() {
  alert("Привіт");
  yellow_square.removeEventListener("click", showAlert);
  yellow_square.addEventListener("click", removeSquare);
}
function removeSquare() {
  yellow_square.remove();
}

// Task 6
// Додати на сторінку червоний квадрат 50х50 px, який буде з'являтися як тільки людина наводить курсор на кнопку,
// і ховатися як людина прибирає курсор з кнопки

const red_square = document.getElementById("red_square");
const hover_button = document.getElementById("hover_button");
hover_button.addEventListener("mouseenter", () => {
  red_square.classList.remove("hidden");
});
hover_button.addEventListener("mouseleave", () => {
  red_square.classList.add("hidden");
});

// Task 7
// Додати на сторінку зелений прямокутник 50х20 px, який з'являтиметься як тільки людина фокусується на інпуті
// та зникати як тільки людина починає писати текст у цей інпут.

const green_square = document.getElementById("green_square");
const text_input = document.getElementById("text_input");
text_input.addEventListener("focusin", () => {
  green_square.classList.remove("hidden");
});
text_input.addEventListener("input", () => {
  green_square.classList.add("hidden");
});

// Task 8
// Додати на сторінку інпут та кнопку. Якщо в інпут покласти посилання і натиснути на кнопку,
// то на сторінці з'явиться картинка отримана за посиланням, яке ввели в інпут.

const upload_image_button = document.getElementById("upload_image_button");
const image_url = document.getElementById("image_url");
const place_for_image = document.getElementById("place_for_image");
upload_image_button.addEventListener("click", () => {
  const urlInput = image_url.value;
  if (urlInput) {
    const img = document.createElement("img");
    img.src = urlInput.trim();
    img.alt = "Uploaded image";
    place_for_image.innerHTML = "";
    place_for_image.appendChild(img);
  } else {
    alert("Please enter image url");
  }
});

// Task 9
// Перетворити інпут на textarea, в яку можна вводити посилання, кожне з нового рядка.
// При натисканні на кнопку на сторінці з'явиться стільки картинок, скільки посилань ввели в textarea
// (картинки беруться за посиланнями).

const upload_images_button = document.getElementById("upload_images_button");
const textarea = document.getElementById("pictures_links");
const place_for_images = document.getElementById("place_for_images");
upload_images_button.addEventListener("click", () => {
  const urlInput = textarea.value.trim();
  if (urlInput) {
    const links = urlInput.split(/\s+/);
    place_for_images.innerHTML = "";
    links.forEach(link => {
      const img = document.createElement("img");
      img.src = link;
      img.alt = "Uploaded image";
      place_for_images.appendChild(img);
    })
  } else {
    alert("Please enter images url");
  }
});

// Task 10,11,12
// Зробити блок у правому верхньому кутку сторінки, в якому у форматі "Х: 123, У: 984"
// виводитимуться координати курсора (оновлюватимуться в ріалтаймі)
// Додати в блок у правому верхньому куті інформацію про те, яка мова обрана у браузері користувача
// Додати у блок у правому верхньому куті відображення широти та довготи на якій знаходиться людина
// (формат: "Ш: 34.23234, Д: 78.239482034").
const XY_lang_geo = document.getElementById("XY_lang_geo");
const language = navigator.language;
navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  XY_lang_geo.innerHTML = "Ш: " + position.coords.latitude + ", " + "Д: " + position.coords.longitude;
}

function pos_lang_geo(e){
  XY_lang_geo.value = "X: " + e.pageX + "," + " " + "Y: " + e.pageY + ", " +
    "\n" + "Browser language: " + language + ", " +
    "\n" + XY_lang_geo.innerHTML;
}

document.addEventListener("mousemove", pos_lang_geo);

// Task 13
// Додати на сторінку три блоки і зробити текст усередині них, який можна редагувати як в інпуті
// (але щоб це був не нативний інпут).
// Те, що людина введе в ці "інпути", має в них і залишатися при перезавантаженні сторінки (onload подія).
// для першого використовувати localStorage
// для другого використовувати cookies
// для третього використовувати sessionStorage
// Загугліть у чому відмінність між цими способами.

const block1 = document.getElementById("block1");
block1.addEventListener("input", function() {
  localStorage.setItem("block1Text", block1.textContent);
});

const block2 = document.getElementById("block2");
block2.addEventListener("input", function () {
  document.cookie = `block2Text=${block2.textContent}`;
});

const block3 = document.getElementById("block3");
block3.addEventListener("input", function() {
  sessionStorage.setItem("block3Text", block3.textContent);
});

window.onload = function() {
  const savedText1 = localStorage.getItem("block1Text");
  if (savedText1) {
    block1.textContent = savedText1;
  }

  const savedText2 = document.cookie
    .split("; ")
    .find((row) => row.startsWith("block2Text="));
  if (savedText2) {
    block2.textContent = savedText2.split("=")[1];
  }

  const savedText3 = sessionStorage.getItem("block3Text");
  if (savedText3) {
    block3.textContent = savedText3;
  }
};

// Task 14
// Зробити кнопку, яка з'являється коли ми вже прогорнули екран вниз і натисканням на яку
// людину плавно кидає нагору сторінки.

const button_scroll_up = document.getElementById("button_scroll_up");
const bottom_indent = 1;
window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - bottom_indent) {
    button_scroll_up.style.display = "block";
  } else {
    button_scroll_up.style.display = "none";
  }
});
function scrollWin() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Task 15
// Зробити два блоки, один усередині іншого. Навішати на кожен із них слухач кліку,
// який викликає алерт. Зробити так щоб при натисканні на маленький викликався лише один алерт.

document.getElementById("block_first").addEventListener("click", () => {
  alert("First")
});
document.getElementById("block_second").addEventListener("click", (event) => {
  alert("Second")
  event.stopPropagation();
});

// Task 16
// Зробити кнопку, по натисканні на яку з'являється напівпрозорий сірий квадрат на весь екран
// і не можна було скролити сторінку поки він не сховається. Приховувати квадрат після натискання на нього.

const grey_square = document.getElementById("grey_square");
document.getElementById("no_scroll").addEventListener("click", () => {
  grey_square.style.display = "block";
  disabledScroll();
});

function disabledScroll() {
  document.body.style.overflow = "hidden";
}

document.getElementById("grey_square").addEventListener("click", () => {
  grey_square.style.display = "none";
  enabledScroll();
});

function enabledScroll() {
  document.body.style.overflow = "";
}

// Task 17
// Дано:
// <form><input type="submit" value="GO"></form>
// Зробити так, щоб при натисканні на кнопку "GO" не перезавантажувалася сторінка.

document.getElementById("button_go").addEventListener("click", (event) => {
  event.preventDefault();
});

// Task 18
// Зробити гарний інпут type="file". Зробити, щоб при перетягуванні файлу на цей інпут
// він красиво змінювався (drag-n-drop). Ну і коли файл вже вибрано теж.

const my_file = document.getElementById("my_file");
const select_file = document.getElementById("select_file");

select_file.addEventListener("click", () => {
  my_file.click();
});

select_file.addEventListener("dragover", (event) => {
  event.preventDefault();
  select_file.classList.add("dragover");
})

select_file.addEventListener("dragleave", () => {
  select_file.classList.remove("dragover");
})

select_file.addEventListener("drop", (event) => {
  event.preventDefault();
  select_file.classList.remove("dragover");
  select_file.classList.add("drop");
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    my_file.files = files;
    const fileName = files[0].name;
    update_select_file(fileName);
  }
});

my_file.addEventListener("change", () => {
  select_file.classList.add("drop");
  const fileName = my_file.files[0]?.name || "No file selected";
  if (fileName === "No file selected") {
    select_file.classList.remove("drop");
  }
  update_select_file(fileName);
});

function update_select_file(fileName) {
  const num_of_selected_files = my_file.files.length;
  if (my_file.files.length > 1) {
    select_file.textContent = `${num_of_selected_files} files selected`;
  } else {
    select_file.textContent = fileName;
  }
}
