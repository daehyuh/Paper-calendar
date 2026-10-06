const journals = [
  {
    rank: 1, name: "Computers & Security", shortName: "COSE", publisher: "Elsevier",
    fitLevel: "가장 잘 맞음", tier: "우선 목표", tierClass: "target", difficulty: "높음",
    type: "rolling", index: "SCIE 후보 · MJL 확인",
    call: "일반 논문 상시 투고", callNote: "현재 확인된 관련 특집호의 확정 마감일 없음",
    fit: "소프트웨어 보안과 취약점 탐지가 저널의 핵심 영역입니다. 데이터셋 정답과의 엄격한 판정, 재현 가능한 실험 설명을 갖춘 뒤 우선 검토할 만합니다.",
    journalUrl: "https://www.sciencedirect.com/journal/computers-and-security"
  },
  {
    rank: 2, name: "Journal of Information Security and Applications", shortName: "JISA", publisher: "Elsevier",
    fitLevel: "매우 잘 맞음", tier: "우선 목표", tierClass: "target", difficulty: "중상",
    type: "rolling", index: "SCIE 후보 · MJL 확인",
    call: "일반 논문 상시 투고", callNote: "현재 확인된 관련 특집호의 확정 마감일 없음",
    fit: "정보보안 응용 연구와 보안 도구 평가에 어울립니다. 방법의 차이와 실제 취약점 적중 판정 기준을 명확히 제시해야 합니다.",
    journalUrl: "https://www.sciencedirect.com/journal/journal-of-information-security-and-applications"
  },
  {
    rank: 3, name: "Information and Software Technology", shortName: "IST", publisher: "Elsevier",
    fitLevel: "매우 잘 맞음", tier: "주요 목표", tierClass: "target", difficulty: "높음",
    type: "rolling", index: "SCIE 후보 · MJL 확인",
    call: "일반 논문 상시 투고", callNote: "일반 논문에 고정 마감일 없음",
    fit: "소프트웨어 공학 도구와 실증 연구의 평가에 맞습니다. B0·P1 비교의 독립성, 사례 선정, 반복 실행과 통계적 한계를 충분히 설명해야 합니다.",
    journalUrl: "https://www.sciencedirect.com/journal/information-and-software-technology"
  },
  {
    rank: 4, name: "Journal of Systems and Software", shortName: "JSS", publisher: "Elsevier",
    fitLevel: "잘 맞음", tier: "주요 목표", tierClass: "target", difficulty: "높음",
    type: "deadline", index: "SCIE 후보 · MJL 확인",
    open: null, deadline: "2027-01-31",
    call: "Software Architecture in a Digital Society",
    callNote: "특집호 공고 목록에서 마감 확인 · 시작일/현재 접수 상태는 원문 확인 필요",
    fit: "소프트웨어 구조와 도구 평가가 연결됩니다. 다만 관계 정보 구성 자체와 취약점 탐지 효과의 기여를 분명히 구분해야 합니다.",
    journalUrl: "https://www.sciencedirect.com/journal/journal-of-systems-and-software",
    callUrl: "https://www.sciencedirect.com/browse/calls-for-papers?subject=computer-science",
    callLabel: "출판사 CFP 목록"
  },
  {
    rank: 5, name: "Empirical Software Engineering", shortName: "EMSE", publisher: "Springer Nature",
    fitLevel: "잘 맞음", tier: "주요 목표", tierClass: "target", difficulty: "높음",
    type: "rolling", index: "SCIE 후보 · MJL 확인",
    call: "일반 논문 상시 투고", callNote: "FORGE 2026 초청 특집호는 2026-10-02 종료 · 일반 투고와 별개",
    fit: "연구 질문과 실험 설계가 탄탄한 실증 논문에 적합합니다. 현재 자료는 사례 수·반복 횟수·모델 통제와 판정 일관성 보강이 필요합니다.",
    journalUrl: "https://link.springer.com/journal/10664",
    callUrl: "https://link.springer.com/collections/aciaceiigh",
    callLabel: "FORGE 특집호(종료·초청 전용)"
  },
  {
    rank: 6, name: "Automated Software Engineering", shortName: "ASE", publisher: "Springer Nature",
    fitLevel: "잘 맞음", tier: "대안 후보", tierClass: "alternative", difficulty: "높음",
    type: "rolling", index: "SCIE 후보 · MJL 확인",
    call: "일반 논문 상시 투고", callNote: "일반 논문에 고정 마감일 없음",
    fit: "소프트웨어 작업 자동화와 AI 기반 도구 평가에 맞습니다. 관계 정보 제공이 재현 가능한 자동화 방법으로 정식화되고 더 넓은 평가를 갖출수록 적합성이 커집니다.",
    journalUrl: "https://link.springer.com/journal/10515",
    callUrl: "https://link.springer.com/collections/gihcjgebij",
    callLabel: "SBSE 특집호(종료)"
  },
  {
    rank: 7, name: "Software Testing, Verification and Reliability", shortName: "STVR", publisher: "Wiley",
    fitLevel: "잘 맞음", tier: "대안 후보", tierClass: "alternative", difficulty: "중상",
    type: "rolling", index: "SCIE · 출판사 안내 확인",
    call: "일반 논문 상시 투고", callNote: "저널 투고 페이지에서 일반 논문 접수 안내 제공",
    fit: "보안 취약점 탐지의 평가 절차, 도구 비교와 측정에 초점을 맞추면 후보가 됩니다. 새로운 관계 분석 기법보다 검증·평가 기여를 중심으로 써야 합니다.",
    journalUrl: "https://onlinelibrary.wiley.com/journal/10991689/",
    sourceNote: "출판사 페이지의 색인 목록에 Science Citation Index Expanded가 기재됨"
  },
  {
    rank: 8, name: "IEEE Transactions on Software Engineering", shortName: "TSE", publisher: "IEEE Computer Society",
    fitLevel: "주제는 맞음", tier: "도전 저널", tierClass: "stretch", difficulty: "매우 높음",
    type: "rolling", index: "SCIE 후보 · MJL 확인",
    call: "일반 논문 투고", callNote: "정기 특집호 마감과 일반 투고를 구분해 확인",
    fit: "소프트웨어 분석·도구·실증 연구가 범위에 듭니다. 현재 연구 규모로는 기여의 일반성과 평가 깊이가 부족할 수 있어, 확장 후 도전할 상위권 후보입니다.",
    journalUrl: "https://www.computer.org/csdl/journal/ts",
    sourceUrl: "https://www.computer.org/digital-library/journals/ts/cfp-ieee-transactions-on-software-engineering",
    sourceLabel: "공식 범위·투고 안내"
  },
  {
    rank: 9, name: "IEEE Transactions on Dependable and Secure Computing", shortName: "TDSC", publisher: "IEEE Computer Society",
    fitLevel: "주제는 맞음", tier: "도전 저널", tierClass: "stretch", difficulty: "매우 높음",
    type: "rolling", index: "SCIE 후보 · MJL 확인",
    call: "일반 논문 투고", callNote: "최신 투고 안내와 보안 연구 범위를 확인",
    fit: "소프트웨어 보안·신뢰성 연구가 범위에 맞지만, 강한 보안 기여와 충분한 검증이 기대됩니다. 현재 실험을 그대로 투고하기보다 대규모·다양한 조건의 후속 평가가 필요합니다.",
    journalUrl: "https://www.computer.org/csdl/journal/tq",
    sourceUrl: "https://www.computer.org/digital-library/journals/tq/tdsc-topics",
    sourceLabel: "공식 연구 주제"
  },
  {
    rank: 10, name: "ACM Transactions on Software Engineering and Methodology", shortName: "TOSEM", publisher: "Association for Computing Machinery",
    fitLevel: "주제는 맞음", tier: "도전 저널", tierClass: "stretch", difficulty: "매우 높음",
    type: "rolling", index: "SCIE 후보 · MJL 확인",
    call: "일반 논문 투고", callNote: "일반 투고 지침 및 현재 색인 상태 확인 필요",
    fit: "소프트웨어 공학의 방법론적 기여가 뚜렷하고 폭넓게 검증된 연구에 어울립니다. 관계 정보의 새로움과 재현 가능한 평가를 크게 강화해야 합니다.",
    journalUrl: "https://dl.acm.org/journal/tosem",
    sourceUrl: "https://dl.acm.org/journal/tosem",
    sourceLabel: "저널 범위·투고 안내"
  },
  {
    rank: 11, name: "Software Quality Journal", shortName: "SQJ", publisher: "Springer Nature",
    fitLevel: "보통", tier: "대안 후보", tierClass: "alternative", difficulty: "중상",
    type: "rolling", index: "SCIE 후보 · MJL 확인",
    call: "일반 논문 상시 투고", callNote: "현재 확인된 마감 일정 없음",
    fit: "프로그램 분석으로 소프트웨어 품질을 개선하는 연구와 접점이 있습니다. 취약점 적중뿐 아니라 탐색 효율·오탐·재현성을 품질 관점에서 보여야 합니다.",
    journalUrl: "https://link.springer.com/journal/11219",
    sourceUrl: "https://link.springer.com/article/10.1007/s11219-021-09563-0",
    sourceLabel: "프로그램 분석 특집 사례"
  },
  {
    rank: 12, name: "Engineering Applications of Artificial Intelligence", shortName: "EAAI", publisher: "Elsevier",
    fitLevel: "조건부", tier: "특집호 검토", tierClass: "alternative", difficulty: "높음",
    type: "deadline", index: "SCIE 후보 · MJL 확인",
    open: "2026-10-01", deadline: "2027-01-31",
    call: "Human-Centered and Trustworthy AI for Cybersecurity in Cyber-Physical Systems",
    callNote: "특집호 · 2026-10-01 접수 시작 안내 · CPS 적용 중심",
    fit: "LLM과 사이버보안 주제는 일부 맞지만 공고의 중심은 사이버-물리 시스템입니다. 논문에 CPS 적용이 없다면 무리하게 맞추지 말고 일반 논문 또는 다른 후보를 우선하세요.",
    journalUrl: "https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence",
    callUrl: "https://www.sciencedirect.com/browse/calls-for-papers?subject=computer-science",
    callLabel: "출판사 모집 공고",
    openSourceUrl: "https://www.linkedin.com/posts/stcirillo_callforpapers-artificialintelligence-trustworthyai-activity-7490796962464825344-Vv4o",
    openSourceLabel: "시작일 안내(편집자)"
  }
];

const list = document.querySelector("#journalList");
const todayEl = document.querySelector("#today");
const searchEl = document.querySelector("#search");
const filters = [...document.querySelectorAll(".filter")];
let activeFilter = "all";

const asDate = iso => iso ? new Date(`${iso}T00:00:00`) : null;
const dayDiff = iso => Math.ceil((asDate(iso) - new Date(new Date().toDateString())) / 86400000);
const formatDate = iso => iso ? new Intl.DateTimeFormat("ko-KR", {year:"numeric",month:"long",day:"numeric"}).format(asDate(iso)) : "미정";
const escaped = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const clarivateUrl = "https://mjl.clarivate.com/home";

function updateHeader() {
  const now = new Date();
  todayEl.textContent = new Intl.DateTimeFormat("ko-KR", {year:"numeric",month:"long",day:"numeric"}).format(now);
  const upcoming = journals.filter(j => j.deadline && dayDiff(j.deadline) >= 0).sort((a,b) => a.deadline.localeCompare(b.deadline));
  if (!upcoming.length) return;
  const next = upcoming[0], days = dayDiff(next.deadline);
  document.querySelector("#nextDate").textContent = formatDate(next.deadline);
  document.querySelector("#nextTitle").textContent = `${next.shortName} · ${next.call}`;
  document.querySelector("#nextCountdown").textContent = days === 0 ? "오늘 마감" : `마감까지 D-${days}`;
}

function render() {
  const query = searchEl.value.trim().toLocaleLowerCase("ko-KR");
  const filtered = journals.filter(j => {
    const matchesFilter = activeFilter === "all" || j.type === activeFilter || (activeFilter === "stretch" && j.tierClass === "stretch");
    const text = [j.name,j.shortName,j.publisher,j.call,j.fit,j.tier].join(" ").toLocaleLowerCase("ko-KR");
    return matchesFilter && (!query || text.includes(query));
  }).sort((a,b) => a.rank - b.rank);
  document.querySelector("#countAll").textContent = journals.length;
  document.querySelector("#countDeadline").textContent = journals.filter(j => j.type === "deadline").length;
  document.querySelector("#countRolling").textContent = journals.filter(j => j.type === "rolling").length;
  document.querySelector("#countStretch").textContent = journals.filter(j => j.tierClass === "stretch").length;
  document.querySelector("#resultSummary").textContent = `${filtered.length}개 후보 · 순위는 연구 적합도 판단이며 JCR 순위가 아닙니다`;
  document.querySelector("#emptyState").hidden = filtered.length !== 0;
  list.innerHTML = filtered.map(j => {
    const isOpen = j.type === "deadline" && j.open && dayDiff(j.open) <= 0 && dayDiff(j.deadline) >= 0;
    const isClosed = j.deadline && dayDiff(j.deadline) < 0;
    const deadlineBadge = j.type === "deadline"
      ? `<span class="badge call">특집호</span>${isOpen ? '<span class="badge open">접수 중</span>' : isClosed ? '<span class="badge">마감 종료</span>' : ''}`
      : '<span class="badge">상시 투고</span>';
    const schedule = j.deadline
      ? `<div class="schedule">${j.open ? `<div><label>접수 시작</label><strong>${formatDate(j.open)}</strong></div><span class="arrow">→</span>` : `<div><label>접수 시작</label><strong>공고에서 확인</strong></div><span class="arrow">→</span>`}<div class="deadline"><label>마감</label><strong>${formatDate(j.deadline)}</strong></div><span class="arrow">·</span><div><label>남은 기간</label><strong>${isClosed ? `마감 ${Math.abs(dayDiff(j.deadline))}일 지남` : dayDiff(j.deadline) === 0 ? '오늘 마감' : `D-${dayDiff(j.deadline)}`}</strong></div></div>`
      : `<div class="schedule"><div><label>일반 논문</label><strong>상시 투고</strong></div><span class="arrow">·</span><div><label>고정 마감</label><strong>없음</strong></div></div>`;
    const extraLink = (url,label) => url ? `<a href="${url}" target="_blank" rel="noreferrer">${escaped(label)} ↗</a>` : "";
    const dateLinks = extraLink(j.callUrl,j.callLabel) + extraLink(j.openSourceUrl,j.openSourceLabel);
    const note = j.sourceNote ? `<p class="index-note">${escaped(j.sourceNote)}</p>` : "";
    return `<article class="card">
      <div class="card-top"><div class="identity"><div class="rank-line"><span class="rank-number">${String(j.rank).padStart(2,"0")}</span><span class="tier ${j.tierClass}">${escaped(j.tier)}</span><span class="fit-label">${escaped(j.fitLevel)}</span></div><h3 class="journal-name">${escaped(j.name)}</h3><div class="publisher">${escaped(j.publisher)}</div></div><div class="badges"><span class="badge scie">${escaped(j.index)}</span>${deadlineBadge}</div></div>
      <h4 class="call-title">${escaped(j.call)}</h4><p class="call-sub">${escaped(j.callNote)}</p>${schedule}
      <p class="fit"><b>이 연구와의 적합성</b>　${escaped(j.fit)}</p>${note}
      <div class="card-foot"><span class="status-note">투고 난도: ${escaped(j.difficulty)} · 합격 가능성 예측 아님</span><div class="source-links"><a href="${j.journalUrl}" target="_blank" rel="noreferrer">저널·투고 안내 ↗</a>${dateLinks}${extraLink(clarivateUrl,"SCIE 확인")}</div></div>
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
