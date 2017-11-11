import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import Menu from './components/Menu'
import data from './assets/recipes.json'

global.React = React

const html = renderToString(<Menu recipes={data}/>)

const logger = (req, res, next) => {
    console.log(`${req.url} 에 대한 ${req.method} 요청`)
    next()
}

const sendHTMLPage = (req, res) =>
    res.status(200).send(`
<!DOCTYPE html>
<html>
    <head>
        <title>리액트 조리법 앱</title>
    </head>
    <body>
        <div id="react-container">${html}</div>
        <script>
            window.__DATA__ = ${JSON.stringify(data)}
        </script>
        <script src="bundle.js"></script>
    </body>
</html>
    `)

const app = express()
    .use(logger)
    .use(express.static('./assets'))
    .use(sendHTMLPage)

app.listen(3000, () =>
    console.log(`'http://localhost:3000'에서 조리법 앱 작동중`)
)
