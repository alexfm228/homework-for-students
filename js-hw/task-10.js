const x = 12;

const checkNumber = new Promise((resolve, reject) => {
    if (x > 10) {
        resolve("Більше 10");
    } else {
        reject("Менше або дорівнює 10");
    }
});

checkNumber
    .then((message) => {
        console.log("Успіх:", message);
    })
    .catch((error) => {
        console.log("Помилка:", error);
    });
