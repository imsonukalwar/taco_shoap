
/* =============================
   Welcome Message
============================= */
window.addEventListener("load", () => {
    alert("🌮 Welcome to The Little Taco Shop!");
});

/* =============================
   Store Hours Functionality
============================= */
document.querySelectorAll('a').forEach(link => {
    if (link.textContent.includes("Store Hours")) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alert(
                "🕒 Store Hours\n\n" +
                "Monday - Friday: 10:00 AM - 10:00 PM\n" +
                "Saturday - Sunday: 9:00 AM - 11:00 PM"
            );
        });
    }
});

/* =============================
   Contact Us Functionality
============================= */
document.querySelectorAll('a').forEach(link => {
    if (link.textContent.includes("Contect")) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alert(
                "📞 Contact Us\n\n" +
                "Phone: +91 98765 43210\n" +
                "Email: littletaco@gmail.com"
            );
        });
    }
});

/* =============================
   Taco Trivia Toggle
============================= */
const triviaQuestion = document.querySelector("h3 + p");
if (triviaQuestion) {
    triviaQuestion.style.cursor = "pointer";
    triviaQuestion.addEventListener("click", () => {
        if (!triviaQuestion.dataset.open) {
            triviaQuestion.textContent =
                "🌮 Taco was first introduced in India around early 2000s through food festivals and cafes in Delhi.";
            triviaQuestion.dataset.open = "true";
        } else {
            triviaQuestion.textContent =
                "➤ When did taco first appear in India Delhi?";
            triviaQuestion.dataset.open = "";
        }
    });
}

/* =============================
   Menu Price Calculator
============================= */
const prices = [1.50, 2.50, 3.25];
let total = prices.reduce((sum, price) => sum + price, 0);

const menuCaption = document.querySelector("caption");
if (menuCaption) {
    menuCaption.textContent = `Try All Tacos @ $${total.toFixed(2)}`;
}

/* =============================
   Back To Top Smooth Scroll
============================= */
const backToTop = document.querySelector('a[href="#"]');
if (backToTop) {
    backToTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
