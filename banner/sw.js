console.log("App running...");

console.log(navigator);




// console.log(self);
self.addEventListener("install", function (event) {
    console.log("Installing...", event);
})
self.addEventListener("activate", function (event) {
    console.log("activating...", event);
})
self.addEventListener("fetch", function (event) {
    console.log("Fetching...", event);
})