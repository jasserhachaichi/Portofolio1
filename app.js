//import dependencies
const express = require('express');
//Setup the express server
const app = express();
const port = 2000;

//import middlewares into express
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//  auto refrech
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
//end auto refrech

// setup mongoose
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://jassourio:c4afg@cluster0.plbwj.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(process.env.PORT || port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })

  .catch((err) => {
    //res.redirect("/404");
    console.log(err);
  });
//setup all the routes
const sitetitles = {
  Home: "Jasser Hach",
  Gallery: "Jasser Hach Gallery",
  comments: "comments",
  blog:"Jasser Blog",
  postpage:"Jasser post page"
};

app.get('/', (req, res) => {
  res.redirect("/JasserHach");
});

app.get("/JasserHach", (req, res) => {
  res.render('index', { mytitle: sitetitles.Home });
});

app.get("/jasserGallery", (req, res) => {
  res.render('Gallery', { mytitle: sitetitles.Gallery });
});
app.get("/jasserblog", (req, res) => {
  res.render('blog', { mytitle: sitetitles.blog });
});
app.get("/jasserpost-page", (req, res) => {
  res.render('post-page', { mytitle: sitetitles.postpage });
});




//--------------------------------------------
const Article = require("./models/articleSchema");


app.post("/all-articles", (req, res) => {
  const article = new Article(req.body);

  console.log(req.body);

  article
    .save()
    .then(result => {
      res.redirect("/#contact");
    })
    .catch(err => {
      res.redirect("/404");
      //console.log(err);
    });
});
//--------------------------------------------
const Comment = require("./models/CommentSchema");

app.get("/comments", (req, res) => {

  // result = Array of objects inside mongo database
  Comment.find()
    .then((result) => {
      res.render("comments", { mytitle: sitetitles.comments, arrArticle: result });
    })
    .catch((err) => {
      res.redirect("/404");
      //console.log(err);
    });
});
app.post("/all-comment", (req, res) => {
  const comment = new Comment(req.body);
  console.log(req.body);

  comment
    .save()
    .then(result => {
      res.redirect("/comments");
    })
    .catch(err => {
      //console.log(err);
      res.redirect("/404");
    });
});

//-------------------------------------------------
app.use((req, res) => {
  res.status(404).render('404');
});

