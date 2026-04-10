const questions = [
  "你的宠物在看到陌生人时会：",
  "去宠物公园时，它更倾向：",
  "家里来客人时，它会：",
  "它是否喜欢被人摸：",
  "外出时它的状态：",
  "它更容易被什么吸引：",
  "当你心情不好时，它：",
  "它是否会“发呆”：",
  "对新玩具的态度：",
  "它是否会“迷之行为”（比如盯空气）：",
  "它是否听指令：",
  "被批评时反应：",
  "是否“记仇”：",
  "做错事后的表现：",
  "是否容易情绪化：",
  "作息是否规律：",
  "吃饭时间：",
  "对环境变化：",
  "是否喜欢固定位置：",
  "活动习惯：",
  "它有没有“戏精行为”：",
  "是否会“吃醋”：",
  "是否会“报复行为”（比如乱尿/拆家）：",
  "是否会“撒娇换资源”：",
  "是否有“迷惑行为合集”：",
  "是否喜欢黏人：",
  "是否有“领地意识”：",
  "是否容易兴奋过度：",
  "是否“自尊心很强”：",
  "如果拟人，它更像："
];

const options = [
  ["A. 主动靠近打招呼", "B. 先观察一会再决定", "C. 直接躲开"],
  ["A. 和所有宠物互动", "B. 只和熟悉的玩", "C. 自己玩自己的"],
  ["A. 兴奋迎接", "B. 适度关注", "C. 躲起来"],
  ["A. 越多人越开心", "B. 只接受熟人", "C. 很抗拒"],
  ["A. 精力爆棚", "B. 适中", "C. 紧张或疲惫"],
  ["A. 食物、玩具", "B. 声音或气味", "C. 情绪/氛围变化"],
  ["A. 没反应", "B. 偶尔靠近", "C. 明显陪伴你"],
  ["A. 很少", "B. 偶尔", "C. 经常"],
  ["A. 立刻上手", "B. 观察一下", "C. 不一定理"],
  ["A. 几乎没有", "B. 偶尔", "C. 经常"],
  ["A. 非常听话", "B. 看情况", "C. 基本不听"],
  ["A. 马上收敛", "B. 短暂反应", "C. 情绪很大"],
  ["A. 不记", "B. 有一点", "C. 很明显"],
  ["A. 立刻认错", "B. 装无辜", "C. 理直气壮"],
  ["A. 很稳定", "B. 偶尔", "C. 很明显"],
  ["A. 非常规律", "B. 大致规律", "C. 很随机"],
  ["A. 到点就等", "B. 提醒才吃", "C. 想吃才吃"],
  ["A. 很快适应", "B. 慢慢适应", "C. 抗拒"],
  ["A. 非常固定", "B. 有偏好", "C. 随机"],
  ["A. 有规律", "B. 半随机", "C. 完全随性"],
  ["A. 没有", "B. 偶尔", "C. 非常多"],
  ["A. 不会", "B. 有一点", "C. 非常明显"],
  ["A. 不会", "B. 偶尔", "C. 经常"],
  ["A. 不会", "B. 偶尔", "C. 非常会"],
  ["A. 没有", "B. 有一点", "C. 非常多"],
  ["A. 不黏", "B. 看心情", "C. 非常黏"],
  ["A. 没有", "B. 一般", "C. 很强"],
  ["A. 不会", "B. 偶尔", "C. 经常"],
  ["A. 没有", "B. 一点点", "C. 非常明显"],
  ["A. 乖学生", "B. 普通人", "C. 戏精/霸总/公主"]
];

const personaMap = {
  ENFJ: { name: "粘人小祖宗", tag: "外向 × 情感型", desc: "它不是离不开你，是只想占有你。你走到哪它跟到哪，世界很小，小到只有你。" },
  ENFP: { name: "戏精小公主 / 小少爷", tag: "外向 × 情感型", desc: "它比谁都“会演”，饿了演、委屈演、没事也演。全世界都是它的舞台。" },
  ESFP: { name: "社交牛逼症王者", tag: "外向 × 感知型", desc: "你还在社恐，它已经交了整个公园的朋友。它替你活成了另一个你。" },
  ESFJ: { name: "情绪共振体", tag: "外向 × 情感型", desc: "你开心它更疯，你难过它更安静。它不是在陪你，它是在感受你。" },
  ENTJ: { name: "控场型老大", tag: "外向 × 理性型", desc: "不吵不闹但气场很重。它不需要争辩，规则就是它自己。" },
  ESTJ: { name: "规则执行官", tag: "外向 × 理性型", desc: "几点吃饭、几点睡觉，它比你还清楚。它的自律，让你显得有点随便。" },
  ENTP: { name: "精力永动机", tag: "外向 × 理性型", desc: "你在生活，它在燃烧。你以为它累了，其实只是刚热身。" },
  ESTP: { name: "工具人伙伴", tag: "外向 × 理性型", desc: "配合度极高，叫它来就来，让它做就做。它很少表达自己，但从不缺席。" },
  INFP: { name: "高冷观察家", tag: "内向 × 情感型", desc: "它不讨好、不合群，只是静静看着这个世界。靠近它，是你的荣幸。" },
  ISFP: { name: "敏感小玻璃心", tag: "内向 × 情感型", desc: "一点动静就会紧张，一个眼神都能记很久。不是不乖，只是太在意。" },
  INFJ: { name: "黏人影子精", tag: "内向 × 情感型", desc: "它不需要很多人，只要你一个。你的出现，就是它安全感的来源。" },
  ISFJ: { name: "自闭艺术家", tag: "内向 × 情感型", desc: "它沉浸在自己的世界，常常发呆和迷惑行为。它不解释，也不需要被理解。" },
  INTP: { name: "拆家破坏王", tag: "内向 × 理性型", desc: "平时安静，一出手就危险。它不制造问题，它就是问题本身。" },
  ISTP: { name: "佛系躺平王", tag: "内向 × 理性型", desc: "不争不抢不卷，吃饭可以等等，人生也可以等等。它活得比你通透。" },
  INTJ: { name: "独立冷血派", tag: "内向 × 理性型", desc: "你在或不在，它都能过得很好。它不是冷，而是边界感非常强。" },
  ISTJ: { name: "观察型智者", tag: "内向 × 理性型", desc: "很少冲动，很少出错。你行动前，它已经看清了局面。" }
};

const bonusHints = [
  { threshold: 24, text: "爆点指数：极高，天生短视频主角。" },
  { threshold: 18, text: "爆点指数：中高，自带话题体质。" },
  { threshold: 10, text: "爆点指数：中等，稳定出片。" },
  { threshold: 0, text: "爆点指数：温和，主打真实陪伴。" }
];

const personaIcons = {
  "粘人小祖宗": "./icon/clingy.svg",
  "戏精小公主 / 小少爷": "./icon/drama.svg",
  "社交牛逼症王者": "./icon/social.svg",
  "情绪共振体": "./icon/resonance.svg",
  "控场型老大": "./icon/leader.svg",
  "规则执行官": "./icon/rules.svg",
  "精力永动机": "./icon/energy.svg",
  "工具人伙伴": "./icon/partner.svg",
  "高冷观察家": "./icon/cool.svg",
  "敏感小玻璃心": "./icon/sensitive.svg",
  "黏人影子精": "./icon/shadow.svg",
  "自闭艺术家": "./icon/artist.svg",
  "拆家破坏王": "./icon/destroyer.svg",
  "佛系躺平王": "./icon/zen.svg",
  "独立冷血派": "./icon/independent.svg",
  "观察型智者": "./icon/sage.svg"
};

const answers = new Array(questions.length).fill(null);
let current = 0;

const startCard = document.getElementById("startCard");
const startBtn = document.getElementById("startBtn");
const currentIndexEl = document.getElementById("currentIndex");
const totalCountEl = document.getElementById("totalCount");
const progressInner = document.getElementById("progressInner");
const gateTip = document.getElementById("gateTip");
const questionText = document.getElementById("questionText");
const optionsEl = document.getElementById("options");
const questionSection = document.getElementById("questionSection");
const homeBtn = document.getElementById("homeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultTag = document.getElementById("resultTag");
const resultMatch = document.getElementById("resultMatch");
const matchFill = document.getElementById("matchFill");
const resultDesc = document.getElementById("resultDesc");
const shareCopy = document.getElementById("shareCopy");
const copyBtn = document.getElementById("copyBtn");
const restartBtn = document.getElementById("restartBtn");
const backHomeBtn = document.getElementById("backHomeBtn");

totalCountEl.textContent = String(questions.length);

function render() {
  // Guard: keep result page hidden during quiz.
  startCard.classList.add("hidden");
  resultCard.classList.add("hidden");
  quizCard.classList.remove("hidden");

  currentIndexEl.textContent = String(current + 1);
  questionText.textContent = `${current + 1}. ${questions[current]}`;
  optionsEl.innerHTML = "";

  options[current].forEach((op, idx) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = op;
    if (answers[current] === idx) button.classList.add("active");
    button.addEventListener("click", () => {
      answers[current] = idx;
      render();
    });
    optionsEl.appendChild(button);
  });

  const done = answers.filter((v) => v !== null).length;
  progressInner.style.width = `${(done / questions.length) * 100}%`;
  gateTip.textContent = `已完成 ${done} / ${questions.length}。全选完才会放行。`;
  gateTip.classList.remove("warn");
  prevBtn.disabled = current === 0;
  nextBtn.textContent = current === questions.length - 1 ? "提交并查看结果" : "下一题";
}

function animateQuestion(direction) {
  if (!questionSection) return;
  const className = direction === "left" ? "slide-left" : "slide-right";
  questionSection.classList.remove("slide-left", "slide-right");
  void questionSection.offsetWidth;
  questionSection.classList.add(className);
}

function pickDimension(startIndex) {
  let score = 0;
  for (let i = startIndex; i < startIndex + 5; i += 1) {
    const v = answers[i] ?? 1;
    score += v;
  }
  return score >= 5 ? 1 : 0;
}

function calcResult() {
  const ei = pickDimension(0) ? "I" : "E";
  const sn = pickDimension(5) ? "N" : "S";
  const tf = pickDimension(10) ? "F" : "T";
  const jp = pickDimension(15) ? "P" : "J";
  const code = `${ei}${sn}${tf}${jp}`;

  let bonus = 0;
  for (let i = 20; i < 30; i += 1) {
    bonus += answers[i] ?? 1;
  }
  const hint = bonusHints.find((item) => bonus >= item.threshold)?.text || "";
  const persona = personaMap[code] || personaMap.ENFP;
  const dimensionStrength = answers
    .slice(0, 20)
    .reduce((sum, v) => sum + Math.abs((v ?? 1) - 1), 0);
  const matchRate = Math.min(
    100,
    Math.round(55 + (dimensionStrength / 20) * 25 + (bonus / 20) * 20)
  );
  return { code, hint, persona, matchRate };
}

function buildLongResultCopy({ persona, code, matchRate, hint }) {
  const externalCopy = window.PETI_RESULT_COPY?.[persona.name];
  if (externalCopy) {
    return `${externalCopy}\n\n系统备注：${hint}\n匹配度：${matchRate}%`;
  }

  return `你家毛孩子的主人格是「${persona.name}」（${code}），匹配度 ${matchRate}%。

从整体行为来看，它的核心特征非常稳定：${persona.desc} 这不是偶然出现的一两次状态，而是一种长期、可重复的互动模式。它在熟悉关系里会有自己明确的表达方式，可能是强烈靠近、可能是保持边界、也可能是安静观察，但无论外在表现如何，本质上都在用它的方式回应你、理解你、确认你在它世界里的位置。

你可能已经发现了，它并不只是“可爱”这么简单。它有情绪节奏、有偏好记忆、有自己的安全感系统，也有自己处理外部刺激的规则。很多时候你以为是你在照顾它，实际上它也在调节你的生活状态：你开心时它放大气氛，你疲惫时它降低存在感，你焦虑时它会用熟悉动作把你拉回当下。这种互相影响，才是人宠关系最珍贵的部分。

系统备注：${hint}

友情提示：本结果用于娱乐和关系观察，不用于医学、行为诊断或严肃决策。最准确的答案永远不在算法里，而在你和它每天真实相处的细节里。你愿意认真看见它，它就会把最独特的那一面给你。`;
}

function showResult() {
  if (answers.some((v) => v === null)) {
    gateTip.textContent = "全选完才会放行。世界已经够乱了，先把题做完整。";
    gateTip.classList.add("warn");
    return;
  }

  const { code, hint, persona, matchRate } = calcResult();
  const icon = personaIcons[persona.name] || "./icon/clingy.svg";
  if (resultIcon) {
    resultIcon.src = icon;
    resultIcon.alt = `${persona.name}图标`;
  }
  resultTitle.textContent = `${persona.name}`;
  resultTag.textContent = `${code} · ${persona.tag}`;
  resultMatch.textContent = `匹配度 ${matchRate}%`;
  if (matchFill) matchFill.style.width = "0%";
  resultDesc.textContent = buildLongResultCopy({ persona, code, matchRate, hint });
  shareCopy.textContent = `我家宠物是【${persona.name}】（${code}），匹配度 ${matchRate}%！系统备注：${hint} 你也来测测。`;

  startCard.classList.add("hidden");
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (matchFill) matchFill.style.width = `${matchRate}%`;
    });
  });
}

function goHome() {
  startCard.classList.remove("hidden");
  quizCard.classList.add("hidden");
  resultCard.classList.add("hidden");
}

function startQuiz() {
  startCard.classList.add("hidden");
  resultCard.classList.add("hidden");
  quizCard.classList.remove("hidden");
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
  requestAnimationFrame(() => {
    quizCard.scrollIntoView({ block: "start", behavior: "smooth" });
    if (questionSection) questionSection.scrollTop = 0;
  });
}

function resetQuiz() {
  for (let i = 0; i < answers.length; i += 1) answers[i] = null;
  current = 0;
  if (matchFill) matchFill.style.width = "0%";
}

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
    animateQuestion("right");
    render();
  }
});

nextBtn.addEventListener("click", () => {
  if (answers[current] === null) {
    gateTip.textContent = "这题没选，系统不放行。";
    gateTip.classList.add("warn");
    return;
  }
  gateTip.classList.remove("warn");
  if (current === questions.length - 1) {
    showResult();
    return;
  }
  current += 1;
  animateQuestion("left");
  render();
});

let touchStartX = 0;
let touchStartY = 0;

if (questionSection) {
  questionSection.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    },
    { passive: true }
  );

  questionSection.addEventListener(
    "touchend",
    (event) => {
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;

      if (deltaX < 0) {
        if (answers[current] === null) {
          gateTip.textContent = "这题没选，系统不放行。";
          gateTip.classList.add("warn");
          return;
        }
        if (current === questions.length - 1) {
          showResult();
          return;
        }
        current += 1;
        gateTip.classList.remove("warn");
        animateQuestion("left");
        render();
        return;
      }

      if (current > 0) {
        current -= 1;
        gateTip.classList.remove("warn");
        animateQuestion("right");
        render();
      }
    },
    { passive: true }
  );
}

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(shareCopy.textContent || "");
    copyBtn.textContent = "已复制";
    setTimeout(() => {
      copyBtn.textContent = "复制分享文案";
    }, 1200);
  } catch (e) {
    alert("复制失败，请手动复制文案。");
  }
});

restartBtn.addEventListener("click", () => {
  resetQuiz();
  startQuiz();
});

startBtn.addEventListener("click", () => {
  resetQuiz();
  startQuiz();
});

homeBtn.addEventListener("click", () => {
  goHome();
});

backHomeBtn.addEventListener("click", () => {
  goHome();
});

goHome();
