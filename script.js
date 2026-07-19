const startBtn = document.getElementById("startBtn");
const main = document.getElementById("main");
const loader = document.querySelector(".loader");

startBtn.addEventListener("click", () => {
    loader.style.display = "none";
    main.classList.remove("hidden");

    // Floating hearts
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.transition = "transform 6s linear, opacity 6s";
        heart.style.zIndex = "9999";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = "translateY(-120vh)";
            heart.style.opacity = "0";
        }, 100);

        setTimeout(() => heart.remove(), 6500);
    }, 300);
});

document.getElementById("giftBtn").addEventListener("click", () => {
    alert(
`🎉 Happy Birthday Hridi ❤️

You are the most precious person in my life.

May Allah bless you with endless happiness, success, peace and love.

I love you forever.

❤️ — Badhon`
    );
});
