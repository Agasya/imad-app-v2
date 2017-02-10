var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    'article-one': {
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
    },
    'article-two': {
        title: 'Article Two | Agasya Rani',
        heading: 'Article Two',
        date: 'Feb 10, 2016',
        content: `<p>
                    This is content for Article-Two. 
                </p>`
    },
    'article-three': {
        title: 'Article Three | Agasya Rani',
        heading: 'Article Three',
        date: 'Feb 10, 2016',
        content: `<p>
                    This is content for Article-Three. 
                </p>`
    }
};

function  createTemplate(data) {
    title = data.title;
    heading = data.heading;
    date = data.date;
    content = data.content;
    var htmlTemplate = `<html>
        <head>
            <title>${title}</title>
            <meta  name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div><a href="/">Home</a></div>
                <hr/>
                <h3>${heading}</h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
