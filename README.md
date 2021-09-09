# GraphQL

## gql? sql과의 차이

- sql은 디비에서 데이터를 가져오는 것. 주로 백엔드에서 호출
- gql은 웹 클라이언트가 서버에서 데이터를 가져오는 것. 주로 클라이언트에서 호출

## REST api 문제점 해결

> GET /users

사용자에 대한 모든 데이터를 불러옴. 사용하지 않는 불필요한 모든 데이터 포함(over-fetching)

> /feed

> /notifications

> /user/1

하나의 데이터를 완성하기 위해 여러번 요청을 보내야 함(under-fetching)

gql의 경우 원하는 데이터만을 한번에 가져올 수 있다. gql 백엔드에 보내면 response를 js object로 반환

``` 
query {
    feed {
        comments
    }
    notifications {
        isRead
    }
    user {
        username
        profilePic
    }
}
```

## 프로젝트 시작

```
npm i graphql-yoga
npm i -D nodemon @babel/cli @babel/core @babel/node @babel/preset-env
```

## Scheme

- 사용자가 무엇을 할지 정의해줌
- 여기서는 아직은 어떤 것도 안함. 그냥 어떤걸 요청하면 어떤걸 반환할지 설명해주는 것.
- Mutaion: 데이터 수정/삭제/등록시 사용(CUD)
- Query: 데이터 가져올 떄 사용(R)

## Resolvers

- 실제 데이터 가져오도록 프로그램 작성
- 

## gql 문법

```
query {
    people {
        name
        age
    }
}

query {
    person(id: 1) {
        name
        gender
    }
}
```