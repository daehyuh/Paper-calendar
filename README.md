# 저널 투고 일정판

LLM 기반 취약점 탐지와 소스 코드 관계 정보 연구에 맞는 저널 후보, 일반 투고 안내, 확인된 특집호 일정을 한 페이지에서 보는 정적 웹 앱입니다.

## 열기

`index.html`을 브라우저에서 열면 됩니다. 별도 설치나 서버 실행은 필요하지 않습니다. 인터넷이 없어도 화면은 열리지만, 공식 출처 링크는 온라인 연결이 필요합니다.

## 현재 데이터

- 일반 논문 투고는 마감일이 정해져 있지 않은 상시 접수와 날짜가 정해진 특집호를 분리했습니다.
- 특집호 마감일은 페이지가 자동 수집하지 않습니다. 각 카드의 출판사 공고를 열어 접수 상태와 요구 주제를 확인하세요.
- SCIE 표시는 후보 분류이며, 투고 직전 Clarivate Master Journal List에서 저널명 또는 ISSN으로 재확인해야 합니다.
- 저널 목록·공고 일정은 `app.js`의 `journals` 배열에서 고칠 수 있습니다.

## 현재 표시한 특집호 일정

- *Engineering Applications of Artificial Intelligence*: “Human-Centered and Trustworthy AI for Cybersecurity in Cyber-Physical Systems”. 접수 시작일 2026-10-01, 마감일 2027-01-31로 안내된 공고입니다. CPS 중심 공고이므로 연구 주제와 완전히 일치한다고 단정하지 않습니다.
- *Journal of Systems and Software*: “Software Architecture in a Digital Society”. 마감일 2027-01-31로 출판사 모집 목록에서 확인했습니다. 시작일과 현재 접수 상태는 별도 공고에서 확인해야 합니다.
- *Empirical Software Engineering*: FORGE 2026 특집호는 초청 전용이며 2026-10-02 마감으로 표시되어 종료 상태입니다. 일반 논문 투고와 혼동하지 않도록 안내만 연결했습니다.

## 출처

- Clarivate Master Journal List: <https://mjl.clarivate.com/home>
- Elsevier 컴퓨터과학 Call for Papers 목록: <https://www.sciencedirect.com/browse/calls-for-papers?subject=computer-science>
- Springer Nature FORGE 2026 초청 특집호: <https://link.springer.com/collections/aciaceiigh>
- 각 저널의 공식 홈페이지와 투고 안내는 앱의 저널 카드에 연결되어 있습니다.

마지막 확인 기준일: 2026-10-06. 일정은 변경될 수 있습니다.
