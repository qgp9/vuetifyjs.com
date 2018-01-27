export default {
  header: '빠른 시작',
  headerText: 'Vuetify 프로젝트를 바로 시작하려면 _(공식 예제를 바탕으로한)_ Vuetify Vue CLI 패키지를 사용하세요. Vuetify는 **SSR** (서버사이드 렌더링), **SPA** (싱글페이지 어플리케이션), **PWA** (프로그레시브 웹 어플리케이션)와 단독 **HTML** 페이지를 지원합니다.',
  alert1: '당신의 어플리케이션이 제대로 작독하려면, **반드시** 어플리케이션을 `v-app` 컴포넌트로 감싸야합니다. 이 컴포넌트는 동적으로 컨텐츠 영역을 관리하고 여러 컴포넌트들의 마운팅 포인트이기도 합니다.',
  newStoreAlert: '새로운 Vuetify 상점이 지금 **운영중**입니다.!. 이 프로젝트를 지원하면서 동시에 멋진 swag도 받으세요! <a href="https://next.vuetifyjs.com/store" class="btn btn--white primary--text"><span class="btn__content">지금 확인하세요</span></a>',
  browserHeader: '지원하는 브라우져',
  browserText: 'Vuetify는 웹개발의 다음 단계로 나아가는 것을 추구하는 진보적인 프레임웤입니다. 이 과업을 성취하기 위해, 오래된 버변의 인터넷 익스플로러를 지원하지 않는 다소의 희생이 있어야만 했습니다. 이 리스트는 호환되는 브라우져에 대한 완벽한 리스트는 아니지만 주로 지원하는 브라우져들입니다.',
  cdnHeader: 'CDN을 이용한 설치',
  cdnText: 'Vue CLI 를 이용한 템플릿 설치 없이 Vuetify.js를 테스트해보려면 아래 코드를 복사해서 `index.html` 파일에 붙여넣으세요. 이 코드는 최신 버젼의 Vue와 Vuetify를 받아서 컴포넌트들을 가지고 놀 수 있게 해줍니다. 또한 codepen 사이트의 [Vuetify starter](https://template.vuetifyjs.com)를 이용할 수도 있습니다.',
  newHeader: '새로운 어플리케이션',
  newText: 'Vuetify엔 8개의 미리 만들어진 Vue CLI 템플릿이 준비되어 있습니다. 이 중 3개는 [공식 Vue.js 템플릿](https://github.com/vuejs-templates)을 포크한 후 Vuetify를 더 빠르게 시작할수 있도록 살짝 변경하였습니다. 이 패키지들은 `vue-cli`를 필요로 합니다. vue-cli에 대해 더 알고 싶으시면 공식 [깃헙](https://github.com/vuejs/vue-cli) 저장소를 방문하세요. 이 템플릿들은 다음 프로젝트를 최대한 빨리 시작할 수 있도록 디자인 되었습니다.',
  existingHeader: '기존 어플리케이션',
  existingText1: 'Vuetify를 기존 프로젝트에 적용하려면 Vuetify를 node_modules에 반드시 설치해야 합니다. 이를 위해 `npm` 이나 `yarn`을 사용할 수 있습니다. 이 두 패키지 매니져는 당신의 어플리케이션에 사용되는 리소스를 관리할 수 있도록 해줍니다.',
  existingText2: 'For a detailed explanation of how to get `npm` running in your environment, check out the [official documentation](https://docs.npmjs.com/getting-started/what-is-npm). Alternatively, if you wish to use yarn, you can find the official documentation [here](https://yarnpkg.com/lang/en/docs/). Once setup, you can run either command from your command prompt.',
  existingText3: 'Once Vuetify has been installed, navigate to your applications main entry point. In most cases this will be `index.js` or `main.js`. In this file you will import Vuetify and tell Vue to use it.',
  existingText4: 'You will also need to include the Vuetify css file. Simply include the Vuetify css file in your `index.html` or import the actual stylus file or the minified css.',
  existingText5: 'The easiest way to include the Material Design icons is to add a `link` tag to your `index.html` file.',
  alert2: 'Warning: While Vuetify attempts to not cause any css collision as much as possible, there is no guarantee that your custom styles will not alter your experience when integrating this framework into your existing project.',
  ie11Header: 'IE11 & Safari 9 support',
  ie11Text: 'In your project directory, install `babel-polyfill` and import it into your main entry:',
  ie11Text2: 'Due to Internet Explorer\'s limited support for `<template>` tags, you must send fully compiled dom elements to the browser. This can be done by either building your Vue code in advance or by creating helper components to replace the dom elements. For instance, if sent directly to IE, this will fail:',
  browserSupport: {
    supported: 'Supported',
    notSupported: 'Not supported',
    polyfill: 'Supported with polyfill'
  },
  toc: [
    {
      text: 'Introduction',
      href: 'introduction'
    },
    {
      text: 'Supported browsers',
      href: 'supported-browsers'
    },
    {
      text: 'CDN install',
      href: 'cdn-install'
    },
    {
      text: 'New applications',
      href: 'new-applications'
    },
    {
      text: 'Existing applications',
      href: 'existing-applications'
    },
    {
      text: 'IE11 support',
      href: 'ie11-support'
    }
  ]
}
