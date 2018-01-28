<p align="center">
  <a href="https://vuetifyjs.com" target="_blank"><img width="100"src="https://vuetifyjs.com/static/doc-images/logo.svg"></a>
</p>

## Vuetify 문서 한글 번역 프로젝트
<p>T <a href="https://vuetifyjs.com" target="_blank">Vuetify</a> 사이트/문서의 한글 번역 프로젝트입니다.</p>

* Vuetify 사이트 : https://vuetifyjs.com
* Vuetify 사이트 리포 : https://github.com/vuetifyjs/vuetifyjs.com.git
* 한글 번역 문서 데모/베타 사이트 : https://vuetify-ko.herokuapp.com/ko

## 번역 안내
Vuetify에 바로 PR 하거나 이 프로젝트에서 함께 번역한 후 적기적으로 Vuetify에 PR을 하는 방법이 있습니다.

1. Vuetify 에 바로 PR 하실 분들은 지금 한글 번역 기본 설정을 PR 해서 리뷰 중이므로 잠깐 기다리셨다가 하시는게 좋을 것 같습니다.
2. 이 프로젝트에서 함께 번역 하실 분들은 이 리포를 포크해서 번역하시고 PR 해 주시면 모아서 정기적으로 Vuetify 에 PR을 넣도록 하겠습니다.
  
## 함께 번역하기
이 프로젝트에서 함께 번역하시기로 하셨다면

* PR은 `master` 가 아니라 `ko_dev`로 하셔야 합니다.
* PR 이 머지되면 자동으로 https://vuetify-ko.herokuapp.com/ko 가 업데이트 됩니다.
* 로컬에서 확인하시면 아래 *로컬에 설치해서 보기* 를 참조하세요
* Vuetify 의 방침에 따라 (일부라도) 번역되지 않은 파일은 추가하지 않습니다. 따라서 새로운 페이지를 번역할 경우 `local/en` 의 해당 파일을 `local/ko` 디렉토리로 복사하시고 디렉토리 구조에 따라 `index.js` 파일을 수정해야 합니다.


## 질문/참여/의견
* 질문이나 의견은 이슈를 사용하시거나 챗방으로 오시면됩니다.
* 슬랙 Vue.js Korea 챗방 : https://vuejs-korea.herokuapp.com/
* 디스코드 Vue.js Korea 챗방 : https://discord.gg/x3Vjg9C

## 로컬에 설치해서 보기

``` bash

git clone https://github.com/qgp9/vuetifyjs.com 
cd vuetifyjs.com

# yarn을 사용할 경우
yarn install
yarn dev

# npm을 사용할 경우
npm install
npm run dev
```
