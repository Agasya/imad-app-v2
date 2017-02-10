var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var article-one = {
        title: 'Article One | Agasya Rani',
        heading: 'Article One',
        date: 'Feb 10, 2016',
        content: `<p>
                    This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. 
                </p>
                <p>
                    This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. 
                </p>
                <p>
                    This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. This is content for Article-one. 
                </p>`
};

function  createTemplate(data) {
    title = data.title;
    heading = data.heading;
    date = data.date;
    content = data.content;
    var htmlTemplate = `<html>
        <head>
            <title>aaaaaaaaaaaaaaaaaaa</title>
            <meta  name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                bbbbbbbbbbbbbbb
            </div>
        </body>
    </html>
    `;
}

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(article-one);
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
