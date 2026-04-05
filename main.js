// 1. The h1 element
const heading = document.querySelector("h1");
console.log("h1 element:", heading);

// 2. All elements with class "content"
const contentElements = document.getElementsByClassName("content");
console.log("All .content elements:", contentElements);

// 3. The form with id "contact-form"
const form = document.getElementById("contact-form");
console.log("Form:", form);

// 4. The email input
const emailInput = document.querySelector("#email");
console.log("Email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav ul li");
console.log("Nav list items:", navItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("First nav-link:", firstNavLink);

// 7. The last paragraph
const lastParagraph = document.querySelector("article p:last-of-type");
console.log("Last paragraph:", lastParagraph);

// 1. Select the header, then navigate to the nav inside it
const header = document.querySelector("header");
const navInsideHeader = header.querySelector("nav");
console.log("Nav inside header:", navInsideHeader);

// 2. Select the first nav-link, then get its parent li
const parentLi = firstNavLink.parentElement;
console.log("Parent li of first nav-link:", parentLi);

// 3. Select the article, then get its next sibling (section)
const article = document.querySelector("article");
const nextSibling = article.nextElementSibling;
console.log("Next sibling of article:", nextSibling);

// 4. Select the ul, then get all its child li elements
const ul = document.querySelector("nav ul");
const childLis = ul.children;
console.log("All li children of ul:", childLis);

// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const bodyFromFooter = footer.parentElement;
console.log("Body from footer:", bodyFromFooter);

h1.textContent = "New Title";

article.textContent = "<script>alert('hack!')</script>";

link.getAttribute("href"); // "#"
link.href;                 // full URL

link.setAttribute("href", "https://example.com");
link.href = "https://example.com";

link.hasAttribute("target");   // false
link.removeAttribute("target");

const element = document.querySelector("[data-id]");
console.log(element.dataset.id);        // "123"
console.log(element.dataset.category);  // "tech"
element.dataset.newAttr = "value";      // adds data-new-attr

container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

function addNavItem(text, href) {
    // 1. Create the li element
    const li = document.createElement("li");

    // 2. Create the anchor element
    const a = document.createElement("a");
    a.textContent = text;          // Set link text
    a.href = href;                 // Set link destination
    a.className = "nav-link";      // Apply same class for styling

    // 3. Append anchor to li
    li.appendChild(a);

    // 4. Append li to the nav list
    const navList = document.querySelector(".nav-list");
    navList.appendChild(li);
}

// Usage examples
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// Create display and buttons
const counterDisplay = document.createElement("div");
counterDisplay.textContent = "Count: 0";
document.body.appendChild(counterDisplay);

const incrementBtn = document.createElement("button");
incrementBtn.textContent = "+";
document.body.appendChild(incrementBtn);

const decrementBtn = document.createElement("button");
decrementBtn.textContent = "-";
document.body.appendChild(decrementBtn);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
document.body.appendChild(resetBtn);

// Counter state
let count = 0;

// Update function
function updateDisplay() {
    counterDisplay.textContent = `Count: ${count}`;
}

// Event listeners
incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) {   // Prevent going below 0
        count--;
        updateDisplay();
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});