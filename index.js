import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var todayList = [];
var workList = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { list: todayList});
});

app.get("/work", (req, res) => {
    res.render("work.ejs", { list: workList});
});

app.post("/today/submit", (req, res) => {
    const newTask = req.body["new-task"];
    todayList.push(newTask);
    console.log(todayList);
    res.redirect("/");
})

app.post("/work/submit", (req, res) => {
    const newTask = req.body["new-task"];
    workList.push(newTask);
    console.log(workList);
    res.redirect("/work");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});