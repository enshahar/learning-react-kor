챕터 1 : 소개
==================
많은 대규모 웹사이트에서 React를 사용하고 있습니다. 이는 React가 큰 규모에서도 충분히 안정적임을 보여줍니다. React는 준비되었습니다.

Node.js 와 NPM 설치하기
--------------------
Node와 React는 커맨드 라인을 통해서 사용하게 됩니다. 커맨드라인은 Mac에서는 터미널, PC에서는 커맨드 프롬프트로 불립니다. 아래의 명령어를 실행하여 Node와 NPM의 현재 버전을 확인하세요.

일단 NodeJS가 설치되어 있는지 확인하세요.
```
$ node -v
```

만약 설치되어 있지 않다면 [공식 웹사이트 (한국어)](https://nodejs.org/ko/)에서 설치하세요. 인스톨러를 다운로드 한 후, 실행하고 인스톨러의 지시에 따르세요.

--------------------------------

다음으로, NPM의 버전을 확인하세요.
```
$ npm -v
```

만약 버전 3 미만이라면 NPM을 업데이트하셔야 합니다:

##### Mac에서 NPM 업데이트하기
```
$ sudo npm update -g npm
```

##### PC에서 NPM 업데이트하기
커맨드 프롬프트를 관리자 권한으로 실행해야 합니다:
```
$ npm update -g npm
```

##### (옵션) Yarn 설치
YarnYarn은 Facebook에서 개발된 npm과 호환되는 패키지 매니저입니다. Yarn을 사용하는 것은 필수는 아니지만, 원한다면 선택적으로 설치하셔도 됩니다:
```
$ sudo npm install -g yarn
```

마지막으로, 여러 버전의 Node를 전환하는 좋은 옵션들이 있습니다. 필수는 아니지만 아래 중 하나의 버전 매니저를 설치하셔도 됩니다:

* [Node Version Manager 설치 - Mac 전용 (옵션)](https://github.com/creationix/nvm)
* [NVM-Windows 설치 - PC 전용 (옵션)](https://github.com/coreybutler/nvm-windows)

--------------------------------

React Developer Tools 설치하기
--------------------------------
아래 주소에서 설치하세요:

* React Developer Tools ([크롬 버전](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko) | [파이퍼폭스 버전](https://addons.mozilla.org/ko/firefox/addon/react-devtools/))

JSBin 사용하기
--------------------------------
이 저장소는 JSBin에 호스팅된 예제의 주소를 제공합니다. 여러분은 설치, 구축 과정 없이 예제 코드를 바꿔보면서 어떻게 결과가 변경되는 지 확인하실 수 있습니다.

아래에는 **gosabo**가 JSBin에 업로드한 Hello World 예제가 있습니다. JSBin에 업로드된 이 예제에는 세 가지 버전이 있습니다.

참고: 이 저장소에서 링크된 JSBin 예제는 모두 React 15를 사용합니다. 업데이트하려면, script 태그의 CDN 주소를 16으로 변경하세요.

아래의 코드를

```html
  <script src="https://fb.me/react-with-addons-15.1.0.js"></script>
  <script src="https://fb.me/react-dom-15.1.0.js"></script>
```

아래와 같이 변경해주세요

```html
  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

##### 예제의 최신 버전 보기 (에디터 없음. 결과만):
[http://output.jsbin.com/gosabo](http://output.jsbin.com/gosabo)
##### 예제와 에디터 같이 보기:
[http://output.jsbin.com/gosabo/edit](http://output.jsbin.com/gosabo/edit)
##### 에졔와 에디터 같이 보기 (Javascript 탭 열린채로):
[http://jsbin.com/gosabo/edit?js,output](http://jsbin.com/gosabo/edit?js,output)
##### 에디터없이 예제만 보기:
[http://output.jsbin.com/gosabo/quite](http://output.jsbin.com/gosabo/quiet)
##### 예제의 버전 1 미리보기:
[http://output.jsbin.com/gosabo/1](http://output.jsbin.com/gosabo/1)
##### 버전 1 예제와 에디터 같이 보기:
[http://output.jsbin.com/gosabo/1/edit](http://output.jsbin.com/gosabo/1/edit)
##### 버전 2 예제와 에디터 같이 보기:
[http://output.jsbin.com/gosabo/2](http://output.jsbin.com/gosabo/2)
##### 버전 3 예제와 에디터 같이 보기 (HTML, Javascript 탭 열기):
[http://output.jsbin.com/gosabo/3/edit](http://output.jsbin.com/gosabo/3/edit?html,js)

Javascript 라이브러리 CDN
--------------------------------
궁극적으로 우리는 webpack과 npm을 사용해서 작업하게 되겠지만, 바로 시작하기 위해서 아래와 같은 CDN 주소가 JSBin에 이런 형식으로 포함될 수 있습니다: `<script src="https://[CDN 주소]"></script>`

* [React](https://unpkg.com/react@16/umd/react.development.js)
* [React DOM](https://unpkg.com/react-dom@16/umd/react-dom.development.js)
* [Babel Inline Transpiler](https://unpkg.com/babel-standalone@6.15.0/babel.min.js)
* [fetch](https://cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.min.js)
* [Redux](https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.min.js)
* [React Router Source](https://cdnjs.cloudflare.com/ajax/libs/react-router/4.0.0/react-router.min.js)

React 리소스
--------------------------------
마지막으로, 우리가 사용하게 될 라이브러리의 공식 문서와 리소스입니다. 모든 내용은 영문으로 제공됩니다:

* [React 공식문서](https://facebook.github.io/react/index.html)
* [React Github](https://github.com/facebook/react)
* [React NPM](https://www.npmjs.com/package/react)
* [Webpack 공식문서](https://webpack.js.org/)
* [Flux 공식문서](https://facebook.github.io/flux/docs/overview.html)
* [Redux 공식문서](http://redux.js.org/index.html)
* [Jest 공식문서](https://facebook.github.io/jest/)
* [React Router 공식문서](https://reacttraining.com/react-router/)
