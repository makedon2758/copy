(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    const timer = document.querySelector(".timer");
    let tinerMinus = 60;
    function timerr() {
        timer.innerHTML = zero(tinerMinus--);
        if (tinerMinus === 0) clearInterval(interva);
    }
    let interva = setInterval(timerr, 1e3);
    function zero(tin) {
        if (tinerMinus >= 0 && tinerMinus < 10) return `0${tinerMinus}`; else return tinerMinus;
    }
    window["FLS"] = true;
    isWebp();
})();