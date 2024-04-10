const { response } = require("express");

window.addEventListener("load", async () => {
    console.log("JS cargado correctamente");

    async function session() {
        response = await fetch ('/session');
        user = response.json();
        console.log(user);
    }
});