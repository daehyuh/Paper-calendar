# 저널 투고 일정판

LLM 기반 취약점 탐지와 정적 소스 코드 관계 정보 연구에 맞는 저널 후보 12곳, 연구 주제 적합도 순위, 일반 투고 여부와 확인된 특집호 일정을 보여주는 정적 웹 앱입니다.

## 열기

<https://daehyuh.github.io/Paper-calendar/>

`index.html`을 브라우저에서 직접 열어도 됩니다. 설치나 서버는 필요하지 않습니다.

## 순위 해석

- 순위는 저널의 공식 주제 범위와 현재 연구(LLM 취약점 탐지, 소스 코드 관계 정보, Vul4J·VJBench 실증)의 적합도를 바탕으로 한 편집 방향의 판단입니다.
- JCR 순위·사분위, 저널의 학술적 서열, 게재 가능성을 뜻하지 않습니다. 투고 가능성은 원고 완성도, 기여의 새로움, 실험 규모와 심사에 따라 달라집니다.
- `우선 목표`, `주요 목표`, `대안 후보`, `도전 저널`은 원고 보완량을 고려한 투고 전략 구분입니다.
- SCI/SCIE 여부는 갱신될 수 있습니다. 카드의 Clarivate 링크에서 저널명 또는 ISSN으로 제출 직전에 확인하세요.

## 현재 표시한 특집호 일정

- *Journal of Systems and Software*: “Software Architecture in a Digital Society”. 출판사 CFP 목록에서 2027-01-31 마감을 확인했습니다. 접수 시작일과 현재 접수 가능 여부는 개별 공고에서 다시 확인해야 합니다.
- *Engineering Applications of Artificial Intelligence*: “Human-Centered and Trustworthy AI for Cybersecurity in Cyber-Physical Systems”. 안내된 접수 시작일은 2026-10-01, 마감일은 2027-01-31입니다. CPS 중심 공고라 현재 논문과의 적합성은 조건부로 표시했습니다.
- *Empirical Software Engineering*: FORGE 2026 특집호는 초청 전용이며 2026-10-02 마감으로 종료됐습니다. 일반 투고와 구분하기 위해 지난 공고 링크만 남겼습니다.
- *Automated Software Engineering*: Search-Based Software Engineering 특집호는 종료된 모집으로 표시했습니다.

## 업데이트 방식과 출처

- 일정은 자동 크롤링하지 않습니다. 카운트다운은 저장된 날짜로 계산합니다.
- 날짜와 투고 조건은 출판사 원문 링크를 기준으로 확인하세요. 데이터 수정은 `app.js`의 `journals` 목록에서 합니다.
- Clarivate Master Journal List: <https://mjl.clarivate.com/home>
- Elsevier 컴퓨터과학 Call for Papers: <https://www.sciencedirect.com/browse/calls-for-papers?subject=computer-science>
- Springer Nature FORGE 2026: <https://link.springer.com/collections/aciaceiigh>
- Springer Nature SBSE 특집호: <https://link.springer.com/collections/gihcjgebij>
- Wiley STVR 색인 및 범위: <https://onlinelibrary.wiley.com/page/journal/10991689/homepage/productinformation.html>

마지막 확인 기준일: 2026-10-06. 일정과 저널 색인 상태는 바뀔 수 있습니다.
