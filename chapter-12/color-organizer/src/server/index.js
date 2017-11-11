import React from 'react'
import ignoreStyles from 'ignore-styles'
import app from './app'

global.React = React

app.set('port', process.env.PORT || 3000)
    .listen(
        app.get('port'),
        () => console.log(`'http://localhost:${app.get('port')}'에서 색 관리 앱 실행중`)
    )