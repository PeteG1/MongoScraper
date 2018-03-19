var headline_controller = require("../controllers/headline.js");
module.exports = function(app) {
    app.get("/scrape", headline_controller.scrape_page);
    app.post("/save", headline_controller.save_article);
    app.post("/unsave", headline_controller.unsave_article);
    app.post("/addcomment", headline_controller.add_comment);
};
