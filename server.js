/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const fs = require('fs');
const url = require('url');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const corser = require('corser');
const app = express();

const COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(corser.create());

// Additional middleware which will set headers that we need on each request.
app.use(function (req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// 最新（idが一番大きい）の投稿データをjsonで返す
app.get('/api/latestPost', function (req, res) {
    fs.readFile(COMMENTS_FILE, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data).sort(function (a, b) {
            if (a.id < b.id) return 1;
            else return -1;
        }).shift());
    });
});

app.get('/api/list', function (req, res) {
    fs.readFile(COMMENTS_FILE, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data).slice(0, 5));
    });
});

app.get('/api/search', function (req, res) {
    fs.readFile(COMMENTS_FILE, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        const url_parts = url.parse(req.url, true);
        const author = url_parts.query.author;
        const mail = url_parts.query.mail;
        res.json(JSON.parse(data).filter(function (item, index) {
            if ((!author || item.author == author)
                && (!mail || item.mail == mail)) return true;
        }));
    });
});

// 新しい投稿を追加する
app.post('/api/search', function (req, res) {
    fs.readFile(COMMENTS_FILE, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        const comments = JSON.parse(data);
        // NOTE: In a real implementation, we would likely rely on a database or
        // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
        // treat Date.now() as unique-enough for our purposes.
        console.log(req.body)
        const newComment = {
            id: Date.now(),
            author: req.body.author,
            text: req.body.text,
            mail: req.body.mail,
            author_to: '',
            mail_to: '',
            kyun: 0
        };
        comments.push(newComment);
        fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function (err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json(comments);
        });
    });
});


app.listen(app.get('port'), function () {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
/**
 * Created by suneo3476 on 2016/12/08.
 */
