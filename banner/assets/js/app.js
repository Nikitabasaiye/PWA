console.log("App running...");

console.log(navigator);

if ("serviceWorker" in navigator) {

    navigator
        .serviceWorker
        .register("./sw.js")
        .then(function (params) {
            console.log("welcome to the world of service");

        })
        .catch(function () {
            console.error("something went wrong");
        })
}
else {
    console.warn("SERVICE WORKER NOT SUPPORTED");
}


// // console.log(self);
// self.addEventListener("install", function (event) {
//     console.log("Installing...", event);
// })
// self.addEventListener("activate", function (event) {
//     console.log("activating...", event);
// })