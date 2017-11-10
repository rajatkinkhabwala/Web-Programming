const pallindromeRoutes = require("./pallindrome");

const constructorMethod = (app) => {
    app.use("/", pallindromeRoutes);

    app.use("*", (req, res) => {
        res.redirect("/");
    })
};

module.exports = constructorMethod;