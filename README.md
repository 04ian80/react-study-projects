# React로 만들어보는 미니 프로젝트

## 1. [D-day 앱]
***[레파지토리](https://github.com/04ian80/d-day-app/blob/master/README.md) 변경**

## 2. [음악 앱]

react-router를 활용하여 Single Page Application으로 음악앱의 UI를 구현해본 프로젝트 입니다.

(앱을 만드는 과정을 담은 [블로그](https://velog.io/@a_in/React-router-Music-App) 입니다.)

### 사용 기술스택

| 기술 스택  | 주요 기능 |
| ------------- | ------------- |
| React  | react-router / Link / Outlet / useParams / useNavigate / useLocation / Route에 state를 추가하여 **useParam**과 **useLocation**으로 상세페이지 구현 / **axios** 라이브러리로 api 받아오기 / **SWRConfig, useSWR**로 받아온 api 전역에 전달 / **useReducer**로 카테고리에 따라 다른 UI 구현  |

<br />

### ⚙️구현사항

- #### ㅇㅇ님을 위한 추천

useParams 훅으로 Route의 경로에 데이터 id를 붙혀 데이터만 다르고 UI는 같은 페이지를 구현하였습니다. useParams만으로는 각각의 페이지를 보여주지 못하여 useLocation으로 데이터 객체를 가져와 각기 다른 데이터를 가진 페이지를 보여주었습니다.

>![곡추천](https://user-images.githubusercontent.com/97023321/187497403-5a94cd2a-87ae-495a-a827-198620a20553.png)

>![citrus](https://user-images.githubusercontent.com/97023321/187497628-1fb53dc2-76bd-4629-b9a8-a067552581c3.png)

>![먹구름](https://user-images.githubusercontent.com/97023321/187497611-45798430-4604-439d-b58c-ce6ed45efb16.png)

<br />

- #### 지금 인기

지금 인기 있는 곡을 보여주는 화면이며, 컴포넌트의 props를 이용하여 전체 데이터 중 5개의 데이터만 렌더링 되게 구현하였습니다.

>![지금인기](https://user-images.githubusercontent.com/97023321/187511412-f10b015b-a6af-4f2b-bf0b-bd9d7481e266.png)

**차트 \>** 를 클릭하면 '차트' 페이지로 이동하며, 이 페이지에서는 곡 차트와 앨범 차트를 볼 수 있습니다. 앞서 홈 페이지에서 보았던 '지금 차트'부분의 5개 데이터와 같은 데이터이며, 이 부분은 5개가 아닌 전체 데이터를 가져오기 때문에 6개의 곡인 것을 보실 수 있습니다.

>![차트](https://user-images.githubusercontent.com/97023321/187515024-6c4e9f3c-2060-4e37-bc6c-d079438ccb30.png)

'곡' 오른쪽에 있는 '앨범'버튼을 누르면 '앨범 차트'의 데이터가 '곡 차트' 데이터 대신 렌더링이 됩니다. useReducer 훅으로 '곡'과 '앨범' 부분의 폰트색상, border 스타일, 그리고 아래의 차트 렌더 부분까지 상태 관리를 해주었습니다.

>![앨범차트](https://user-images.githubusercontent.com/97023321/187515596-cbe41de7-5105-4990-bdad-916fa6d22f29.png)

<br />

- #### 재생중인 곡

>![재생중인 곡](https://user-images.githubusercontent.com/97023321/187517769-c2a96ea4-ad1d-4e0d-91fa-049f0fe9e77e.png)

화면 최하단에 있는 '재생중인 곡'을 클릭하면 사용자가 추가한 곡들이 담겨있는 '재생목록' 페이지로 이동합니다.

>![재생목록](https://user-images.githubusercontent.com/97023321/187518516-b929d893-2ae1-4f8a-94d0-a132b5f210c8.png)

해당 페이지에서는 사용자가 들은 곡을 검색할 수 있는 기능을 구현하였습니다. 입력란에 곡명이나 아티스트명을 검색하면 기존에 나열되어있던 곡들이 입력한 문자와 포함되어있는 곡들로 바뀝니다. 영어의 경우 소문자 대문자 구분하지 않고 검색할 수 있습니다. 검색하는 도중, 입력란 오른쪽에 취소 버튼을 클릭하면 입력하고 있던 문자들이 사라지며, 기존에 나열되어 있던 곡들이 다시 렌더링 됩니다.

>![재생목록검색](https://user-images.githubusercontent.com/97023321/187520545-a725fb89-8c8e-4e89-ace6-865eab4b65ff.png)

<br />

- #### 앨범정보

곡 리스트 오른쪽에 있는 더보기 아이콘을 클릭하면 앨범정보로 넘어옵니다. 이 페이지에서는 useSWR을 사용하여 로딩처리, 에러처리를 해주었고 axios 비동기 처리로 api를 가져와 보았습니다. 

>![앨범정보](https://user-images.githubusercontent.com/97023321/187521040-f2a7493e-2181-460b-b5b5-b4a9686d2296.png)
