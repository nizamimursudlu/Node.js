const express = require('express')
const app = express();
const fs = require("fs");

app.use(express.json())


app.post('/blogs', (req, res) => {
  let title = req.body.title
  let content = req.body.content
  fs.writeFileSync(title, content)
  res.end('ok')
})

app.put('/posts/:title', (req, res) => {
  let title = req.body.title
  console.log(title)
  let content = req.body.content
  if (fs.existsSync(title) || fs.existsSync(content)) {
    fs.writeFileSync(title, content);
    res.end('ok')
  }
  else {
    res.status(404)
    res.send("This post does not exist!")
  }
})

app.delete('/blogs/:title', (req, res) => {
  let title = req.params.title
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end('ok');
  } else {
    res.status(404)
    res.send("This post does not exist!")
  }
})

app.get('/blogs/:title', (req, res) => {
  let title = req.params.title
  if (fs.existsSync(title)) {
    console.log(title)
    const post = fs.readFileSync(title);
    res.send(post);
  } else {
    res.status(404)
    res.send("This post does not exist!")
  }
}
)
app.listen(3000)

