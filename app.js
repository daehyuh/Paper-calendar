const journals = [
  {
    id: "eaai-cfp",
    name: "Engineering Applications of Artificial Intelligence",
    shortName: "EAAI",
    publisher: "Elsevier · 특집호 + 일반 논문",
    type: "deadline",
    index: "SCIE 등재 후보",
    open: "2026-10-01",
    deadline: "2027-01-31",
    call: "Human-Centered and Trustworthy AI for Cybersecurity in Cyber-Physical Systems",
    callNote: "특집호 · 접수 시작 2026-10-01 · 현재 모집 기간",
    fit: "LLM·AI와 사이버보안 주제는 맞지만, 공고가 사이버-물리 시스템 중심입니다. 논문에 CPS 적용 맥락이 없다면 주제 적합성은 낮거나 보통일 수 있습니다.",
    status: "특집호 모집 중",
    journalUrl: "https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence",
    callUrl: "https://www.sciencedirect.com/browse/calls-for-papers?subject=computer-science",
    callLabel: "출판사 모집 공고",
    openSourceUrl: "https://www.linkedin.com/posts/stcirillo_callforpapers-artificialintelligence-trustworthyai-activity-7490796962464825344-Vv4o",
    openSourceLabel: "시작일 안내(편집자)"
  },
  {
    id: "jss-cfp",
    name: "Journal of Systems and Software",
    shortName: "JSS",
    publisher: "Elsevier · 특집호 + 일반 논문",
    type: "deadline",
    index: "SCIE 등재 후보",
    open: null,
    deadline: "2027-01-31",
    call: "Software Architecture in a Digital Society",
    callNote: "특집호 · 공고 검색 기준 마감일 확인; 접수 시작일은 별도 확인 필요",
    fit: "프로그램 구조·관계 정보와 실증 평가를 다루므로 일부 접점이 있습니다. 취약점 탐지 자체가 중심이면 일반 논문 트랙의 범위도 비교하세요.",
    status: "마감 공고 확인 · 접수 상태 재확인",
    journalUrl: "https://www.sciencedirect.com/journal/journal-of-systems-and-software",
    callUrl: "https://www.sciencedirect.com/browse/calls-for-papers?subject=computer-science",
    callLabel: "출판사 모집 공고"
  },
  {
    id: "cose",
    name: "Computers & Security",
    shortName: "COSE",
    publisher: "Elsevier · 일반 논문",
    type: "rolling",
    index: "SCIE 등재 후보",
    open: null,
    deadline: null,
    call: "일반 논문 상시 투고",
    callNote: "현재 확인된 관련 특집호 마감일 없음",
    fit: "정보보안·소프트웨어 보안 중심의 결과와 실제 취약점 판정 근거가 충분하면 우선 검토할 만합니다.",
    status: "상시 투고 · 고정 마감 없음",
    journalUrl: "https://www.sciencedirect.com/journal/computers-and-security",
    callUrl: null
  },
  {
    id: "ist",
    name: "Information and Software Technology",
    shortName: "IST",
    publisher: "Elsevier · 일반 논문",
    type: "rolling",
    index: "SCIE 등재 후보",
    open: null,
    deadline: null,
    call: "일반 논문 상시 투고",
    callNote: "현재 확인된 관련 특집호 마감일 없음",
    fit: "소프트웨어 공학의 실증 연구·개발 도구 평가에 잘 맞습니다. 데이터 공개, 재현 절차와 통계 설계가 중요합니다.",
    status: "상시 투고 · 고정 마감 없음",
    journalUrl: "https://www.sciencedirect.com/journal/information-and-software-technology",
    callUrl: null
  },
  {
    id: "emse",
    name: "Empirical Software Engineering",
    shortName: "EMSE",
    publisher: "Springer Nature · 일반 논문",
    type: "rolling",
    index: "SCIE 등재 후보",
    open: null,
    deadline: null,
    call: "일반 논문 상시 투고",
    callNote: "일반 투고에 정기 마감일 없음 · 초청 전용 FORGE 2026 공고는 종료",
    fit: "연구 질문·비교 조건·정답 판정·위협 요인을 엄밀히 다루는 실증 논문에 적합합니다.",
    status: "상시 투고 · 고정 마감 없음",
    journalUrl: "https://link.springer.com/journal/10664",
    callUrl: "https://link.springer.com/collections/aciaceiigh"
  }
];

const list = document.querySelector("#journalList");
const todayEl = document.querySelector("#today");
const searchEl = document.querySelector("#search");
const filters = [...document.querySelectorAll(".filter")];
let activeFilter = "all";

const asDate = (iso) => iso ? new Date(`${iso}T00:00:00`) : null;
const dayDiff = (iso) => Math.ceil((asDate(iso) - new Date(new Date().toDateString())) / 86400000);
const formatDate = (iso) => iso ? new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric" }).format(asDate(iso)) : "미정";
const escaped = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function updateHeader() {
  const now = new Date();
  todayEl.textContent = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric" }).format(now);
  const future = journals.filter(j => j.deadline && dayDiff(j.deadline) >= 0).sort((a,b) => a.deadline.localeCompare(b.deadline));
  const next = future[0];
  if (!next) return;
  document.querySelector("#nextDate").textContent = formatDate(next.deadline);
  document.querySelector("#nextTitle").textContent = next.shortName + " · " + next.call;
  const days = dayDiff(next.deadline);
  document.querySelector("#nextCountdown").textContent = days === 0 ? "오늘 마감" : `마감까지 D-${days}`;
}

function render() {
  const query = searchEl.value.trim().toLocaleLowerCase("ko-KR");
  const filtered = journals.filter(j => {
    const matchesType = activeFilter === "all" || j.type === activeFilter;
    const text = [j.name, j.shortName, j.publisher, j.call, j.fit].join(" ").toLocaleLowerCase("ko-KR");
    return matchesType && (!query || text.includes(query));
  }).sort((a,b) => {
    if (!a.deadline) return b.deadline ? 1 : a.name.localeCompare(b.name);
    if (!b.deadline) return -1;
    return a.deadline.localeCompare(b.deadline);
  });
  document.querySelector("#countAll").textContent = journals.length;
  document.querySelector("#countDeadline").textContent = journals.filter(j => j.type === "deadline").length;
  document.querySelector("#countRolling").textContent = journals.filter(j => j.type === "rolling").length;
  document.querySelector("#resultSummary").textContent = `${filtered.length}개 후보 · 특집호 일정은 공고 원문 확인 필요`;
  document.querySelector("#emptyState").hidden = filtered.length !== 0;
  list.innerHTML = filtered.map(j => {
    const openBadge = j.type === "deadline" && j.open && dayDiff(j.open) <= 0 && dayDiff(j.deadline) >= 0;
    const badge = j.type === "deadline"
      ? `<span class="badge call">특집호</span>${openBadge ? '<span class="badge open">접수 중</span>' : ''}`
      : '<span class="badge">상시 투고</span>';
    const schedule = j.deadline
      ? `<div class="schedule">${j.open ? `<div><label>접수 시작</label><strong>${formatDate(j.open)}</strong></div><span class="arrow">→</span>` : ''}<div class="deadline"><label>마감</label><strong>${formatDate(j.deadline)}</strong></div><span class="arrow">·</span><div><label>남은 기간</label><strong>${dayDiff(j.deadline) < 0 ? `마감 ${Math.abs(dayDiff(j.deadline))}일 지남` : dayDiff(j.deadline) === 0 ? '오늘 마감' : `D-${dayDiff(j.deadline)}`}</strong></div></div>`
      : `<div class="schedule"><div><label>일반 논문</label><strong>상시 투고</strong></div><span class="arrow">·</span><div><label>고정 마감</label><strong>없음</strong></div></div>`;
    const callLink = j.callUrl ? `<a href="${j.callUrl}" target="_blank" rel="noreferrer">${j.callLabel || '공고 확인'} ↗</a>` : '';
    const openSourceLink = j.openSourceUrl ? `<a href="${j.openSourceUrl}" target="_blank" rel="noreferrer">${j.openSourceLabel} ↗</a>` : '';
    return `<article class="card">
      <div class="card-top"><div><h3 class="journal-name">${escaped(j.name)}</h3><div class="publisher">${escaped(j.publisher)}</div></div><div class="badges"><span class="badge scie">${escaped(j.index)}</span>${badge}</div></div>
      <h4 class="call-title">${escaped(j.call)}</h4><p class="call-sub">${escaped(j.callNote)}</p>${schedule}
      <p class="fit"><b>연구 적합성</b>　${escaped(j.fit)}</p>
      <div class="card-foot"><span class="status-note">${escaped(j.status)}</span><div class="source-links"><a href="${j.journalUrl}" target="_blank" rel="noreferrer">저널·투고 안내 ↗</a>${callLink}${openSourceLink}</div></div>
    </article>`;
  }).join("");
}

filters.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filters.forEach(b => b.classList.toggle("active", b === button));
  render();
}));
searchEl.addEventListener("input", render);
updateHeader();
render();
