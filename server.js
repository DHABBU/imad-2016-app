var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:'ARTICLE ONE| ANERI SHAH',
    heading:'ARTICLE ONE',
    date:'SEP 21',
    content:`<p>
                This is my first html content file for making an web app.
                
            </p>`
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

    var htmlTemplate=`<html>
         <head>
             <title> ${title} </title>
             <meta name="vi export" content="width=device-width, initial scale=1"/>
              <link href="/ui/style.css" rel="stylesheet" />
         
         </head>
        <body>
            <div class="container">
            <div>
                <a href="/">HOME</a>
            </div>
            <hr/>
            <div>
                <h3>${heading}</h3>
            </div>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
            
        </body>
        
        
    </html>`

}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article_one',function (req,res){
       res.sendFile(path.join(__dirname, 'ui', 'article_one.html'));
});

app.get('/article_two',function (req,res){
       res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
});

app.get('/article_three',function (req,res){
       res.sendFile(path.join(__dirname, 'ui', 'article_three.html'));
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
