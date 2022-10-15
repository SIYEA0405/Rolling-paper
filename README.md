<div align=center>
  <h1>Rolling-paper</h1>
  <img src="https://raw.githubusercontent.com/SIYEA0405/Rolling-paper/main/readmeImgs/main.png" width="49%" height="49%"/>
  <img src="https://raw.githubusercontent.com/SIYEA0405/Rolling-paper/main/readmeImgs/coach.png" width="49%" height="49%"/>
</div>

<!-- bedge -->
<p align="center" style="line-height: 3;">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/>
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/>
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/>
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
  <img alt="Express" src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"/>
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"/>
  <img alt="MongoDB" src="https://img.shields.io/badge/Mongoose-800?style=for-the-badge&logo=&logoColor=white"/>
  <img alt="Amazon AWS" src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=f89400"/>
  <br>
  <b>Rolling-paper</b>를 <b>반응형 WEB</b>으로 구현한 프로젝트
</p>


<hr>


## 목차
- 프로젝트 소개
- 구현 기능
- Description
- Update
- 후기
<br><br>

## 프로젝트 소개
---
Elice SW 3기를 진행하면서 1~5주간 함께 했던 코치님들께 감사인사를 전달드리는 방법을 고민하던 중 롤링페이퍼를 떠올렸고, 현실적으로 모든 레이서가 모이기 힘든 상황을 고려하여 롤링페이퍼 웹페이지를 제작하였습니다.
<br>
기간: 2022.10.11 ~ 2022.10.13(26H)
<br>

### Contributors
<a href="https://github.com/Croossh">박우찬: 프론트</a><br>
<a href="https://github.com/LucetTin5">오현석: 프론트, 서버</a><br>
<a href="https://github.com/SIYEA0405">지시안: 백, 서버</a><br>

## 구현 기능
---
- 글 작성(각 코치별 한마디 남기기)
- 본인 및 다른 사용자들이 남긴 모든 글 조회(각 코치별 모든 한마디 조회)
<br>

## Description(정리 예정)
---
- query와 MongoDB의 Collection name 을 동일하게 설정하여 query에 맞는 DB 불러오기
- 잘못된 query로 접근시 MongoDB Collection 생성을 막고 '잘못된 접근 메세지' 띄우기
<br>

## Update
---
2022.10.14
- 유저들이 남긴 게시물 및 코치의 이름 맨 앞글자를 제외한 나머지는 ** 로 데이터가공(지**)하여 response
    - 글을 쓴 바로 직후 본인에게는 정확한 이름이 노출하여 본인이 쓴 글을 확인할 수 있게 했다
- 기존에 보내주던 _id 필드는 당장 필요가 없기에 _id 필드도 제외하고 response 했다
<br>

## 후기
---
결과: 75명 이상의 유저들이 웹을 이용하면서 총 159개의 게시물을 남겼다.
- API를 생성할 때 왜 Router를 따로 만들어서 나누어 사용하면 편리한지에 대해 Router의 필요성을 느꼈다
- 데이터를 프론트로 response 할 때 왜 가공해서 보내줘야 하는지, 필요없는 데이터(유저를 구분하기 위한 id등)를 제외하고 가공하여 보내줄 수 있는 방법을 배웠다.
- Data의 Schema의 필요성과 Model을 구조를 배울 수 있었다.
- 짧은 시간이었지만 팀프로젝트를 통해 팀원들과의 신뢰, 시너지를 낸다는게 어떤것인지 느꼈다.

<a href="https://www.notion.so/siyea/ver_1-0-0_-72b108033f2c4851827a29284a94b660">
26시간동안 일어난 자세한 스토리 보러가기</a>
