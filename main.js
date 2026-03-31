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

