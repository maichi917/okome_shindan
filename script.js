const riceBrands = [
  {
    name: "ゆめぴりか",
    description: "強い甘みと、もっちりした柔らかさを楽しみたい人に向いています。",
    tags: ["甘み強め", "柔らかめ", "もっちり", "香り豊か"],
    dishes: [
      {
        name: "おにぎり",
        kind: "onigiri",
        reason: "冷めてももっちり感と甘みが残りやすく、具材なしでも満足感があります。",
      },
      {
        name: "お弁当",
        kind: "bento",
        reason: "冷めても甘みともっちり感が残りやすく、お昼ごはんでも満足感があります。",
      },
    ],
    preferences: {
      texture: "mochi",
      sweetness: "sweet",
      scene: "bento",
      impression: "soft",
    },
  },
  {
    name: "コシヒカリ",
    description: "甘み・粘り・香りのバランスがよく、毎日のごはんに合わせやすい銘柄です。",
    tags: ["ほどよい甘み", "ふつう", "ほどよい粘り", "やさしい香り"],
    dishes: [
      {
        name: "定食ごはん",
        kind: "set-meal",
        reason: "甘みと粘りのバランスがよく、焼き魚や生姜焼きなど幅広いおかずに合います。",
      },
      {
        name: "卵かけごはん",
        kind: "egg-rice",
        reason: "ほどよい粘りが卵となじみやすく、食べごたえが出ます。",
      },
    ],
    preferences: {
      texture: "balanced",
      sweetness: "pairing",
      scene: "washoku",
      impression: "balanced",
    },
  },
  {
    name: "つや姫",
    description: "つやのある炊きあがりと上品な甘みを、白ごはんとしてじっくり味わいたい人に向いています。",
    tags: ["上品な甘み", "粒立ち", "ほどよい粘り", "白ごはん向き"],
    dishes: [
      {
        name: "白ごはん",
        kind: "rice-bowl",
        reason: "つやと上品な甘みが持ち味なので、おかずに頼りすぎずごはん自体のおいしさを感じやすいです。",
      },
      {
        name: "炊き込みごはん",
        kind: "mixed-rice",
        reason: "だしや具材の風味を受け止めながら、上品な甘みと粒感を楽しめます。",
      },
    ],
    preferences: {
      texture: "grain",
      sweetness: "sweet",
      scene: "washoku",
      impression: "firm",
    },
  },
  {
    name: "雪若丸",
    description: "しっかりした粒感と食べごたえがあり、かためのごはんが好きな人に向いています。",
    tags: ["甘み控えめ", "かため", "ほどよい粘り", "クセ少なめ"],
    dishes: [
      {
        name: "カレー",
        kind: "curry",
        reason: "粒立ちがよく、ルーと合わせてもごはんの食感が残りやすいです。",
      },
      {
        name: "丼もの",
        kind: "donburi",
        reason: "タレや具材を受け止めながら、べたつきにくく食べやすいです。",
      },
    ],
    preferences: {
      texture: "grain",
      sweetness: "pairing",
      scene: "curry",
      impression: "firm",
    },
  },
  {
    name: "ササニシキ",
    description: "あっさり軽い食感で、和食やお寿司のような料理と相性がよい銘柄です。",
    tags: ["甘み控えめ", "かため", "あっさり", "クセ少なめ"],
    dishes: [
      {
        name: "お寿司",
        kind: "sushi",
        reason: "粘りが控えめで粒がほぐれやすく、酢飯にしたときに軽く食べられます。",
      },
      {
        name: "和食",
        kind: "set-meal",
        reason: "あっさりした味わいなので、刺身や煮魚など繊細なおかずに合わせやすいです。",
      },
    ],
    preferences: {
      texture: "light",
      sweetness: "clean",
      scene: "washoku",
      impression: "firm",
    },
  },
  {
    name: "ミルキークイーン",
    description: "冷めても柔らかく、もちもち感をしっかり楽しみたい人におすすめです。",
    tags: ["甘み強め", "柔らかめ", "もっちり", "やさしい香り"],
    dishes: [
      {
        name: "お弁当",
        kind: "bento",
        reason: "冷めても柔らかさが残りやすく、時間が経っても食べやすいです。",
      },
      {
        name: "混ぜごはん",
        kind: "mixed-rice",
        reason: "もちもちした食感が具材とまとまりやすく、満足感が出ます。",
      },
    ],
    preferences: {
      texture: "mochi",
      sweetness: "sweet",
      scene: "bento",
      impression: "soft",
    },
  },
  {
    name: "ななつぼし",
    description: "ほどよい甘みと軽さがあり、毎日のごはんに使いやすい親しみやすい銘柄です。",
    tags: ["ほどよい甘み", "ふつう", "あっさり", "やさしい香り"],
    dishes: [
      {
        name: "朝ごはん",
        kind: "set-meal",
        reason: "重すぎない食べ心地で、焼き魚や納豆のような定番おかずに合わせやすいです。",
      },
      {
        name: "お弁当",
        kind: "bento",
        reason: "ほどよい甘みがあり、冷めても食べやすいごはんに仕上がりやすいです。",
      },
    ],
    preferences: {
      texture: "light",
      sweetness: "pairing",
      scene: "bento",
      impression: "balanced",
    },
  },
  {
    name: "あきたこまち",
    description: "やさしい甘みとすっきりした後味で、和食中心の食卓に合わせやすい銘柄です。",
    tags: ["ほどよい甘み", "柔らかめ", "ほどよい粘り", "クセ少なめ"],
    dishes: [
      {
        name: "和定食",
        kind: "set-meal",
        reason: "主張が強すぎず、味噌汁や焼き魚などのやさしい味つけとよく合います。",
      },
      {
        name: "おにぎり",
        kind: "onigiri",
        reason: "ほどよい粘りがあり、ふんわり握ってもまとまりやすいです。",
      },
    ],
    preferences: {
      texture: "balanced",
      sweetness: "clean",
      scene: "washoku",
      impression: "soft",
    },
  },
  {
    name: "新之助",
    description: "大粒でしっかりした食感があり、濃いめのおかずにも負けにくい銘柄です。",
    tags: ["甘み強め", "かため", "ほどよい粘り", "香り豊か"],
    dishes: [
      {
        name: "肉料理",
        kind: "meat",
        reason: "しっかりした粒感と甘みがあり、焼肉や生姜焼きのような濃い味にも合います。",
      },
      {
        name: "チャーハン",
        kind: "fried-rice",
        reason: "大粒で食感が残りやすく、炒めても存在感が出ます。",
      },
    ],
    preferences: {
      texture: "grain",
      sweetness: "sweet",
      scene: "curry",
      impression: "firm",
    },
  },
];

const answerLabels = {
  texture: {
    mochi: "もちもちして甘みがある",
    grain: "粒が立っていてしっかりしている",
    light: "あっさり軽く食べられる",
  },
  sweetness: {
    sweet: "ごはん自体の甘みを感じたい",
    pairing: "おかずに合わせやすい方がいい",
    clean: "すっきり控えめが好き",
  },
  scene: {
    bento: "おにぎり・お弁当で食べたい",
    curry: "カレー・丼ものに合わせたい",
    washoku: "和食・白ごはんとして味わいたい",
  },
  impression: {
    soft: "やわらかい",
    balanced: "バランス型",
    firm: "かため",
  },
};

const questions = [
  {
    key: "texture",
    category: "好きなごはんのタイプ",
    title: "どんなごはんが好きですか？",
    options: [
      { value: "mochi", label: "もちもちして甘みがある" },
      { value: "grain", label: "粒が立っていてしっかりしている" },
      { value: "light", label: "あっさり軽く食べられる" },
    ],
  },
  {
    key: "sweetness",
    category: "甘みと合わせ方",
    title: "ごはんの甘みはどう感じたいですか？",
    options: [
      { value: "sweet", label: "ごはん自体の甘みを感じたい" },
      { value: "pairing", label: "おかずに合わせやすい方がいい" },
      { value: "clean", label: "すっきり控えめが好き" },
    ],
  },
  {
    key: "scene",
    category: "食べる場面",
    title: "どんな食べ方をすることが多いですか？",
    options: [
      { value: "bento", label: "おにぎり・お弁当で食べたい" },
      { value: "curry", label: "カレー・丼ものに合わせたい" },
      { value: "washoku", label: "和食・白ごはんとして味わいたい" },
    ],
  },
  {
    key: "impression",
    category: "炊きあがりの印象",
    title: "炊きあがりはどれが好みですか？",
    options: [
      { value: "soft", label: "やわらかい" },
      { value: "balanced", label: "バランス型" },
      { value: "firm", label: "かため" },
    ],
  },
];

const form = document.querySelector("#diagnosis-form");
const resultArea = document.querySelector("#result");
const questionCount = document.querySelector("#question-count");
const progressBar = document.querySelector("#progress-bar");
const questionCategory = document.querySelector("#question-category");
const questionTitle = document.querySelector("#question-title");
const optionsArea = document.querySelector("#options");
const backButton = document.querySelector("#back-button");

let currentQuestionIndex = 0;
let answers = {};

renderQuestion();

backButton.addEventListener("click", () => {
  if (currentQuestionIndex === 0) {
    return;
  }

  currentQuestionIndex -= 1;
  renderQuestion();
});

function findBestMatch(answers) {
  return riceBrands
    .map((brand) => {
      const score = Object.keys(answers).filter((key) => {
        return answers[key] === brand.preferences[key];
      }).length;

      return { ...brand, score };
    })
    .sort((a, b) => b.score - a.score)[0];
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  const progress = (questionNumber / questions.length) * 100;

  form.classList.remove("hidden");
  resultArea.classList.add("hidden");
  questionCount.textContent = `${questionNumber} / ${questions.length}`;
  progressBar.style.width = `${progress}%`;
  questionCategory.textContent = question.category;
  questionTitle.textContent = question.title;
  optionsArea.innerHTML = "";
  backButton.disabled = currentQuestionIndex === 0;

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = option.label;

    if (answers[question.key] === option.value) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      answers[question.key] = option.value;
      goToNextQuestion();
    });

    optionsArea.appendChild(button);
  });
}

function goToNextQuestion() {
  if (currentQuestionIndex === questions.length - 1) {
    const recommendedRice = findBestMatch(answers);
    showResult(recommendedRice, answers);
    return;
  }

  currentQuestionIndex += 1;
  renderQuestion();
}

function showResult(rice, answers) {
  const selectedLabels = Object.keys(answers).map((key) => {
    return answerLabels[key][answers[key]];
  });

  form.classList.add("hidden");
  resultArea.classList.remove("hidden");
  resultArea.innerHTML = `
    <p class="eyebrow">診断結果</p>
    <h2>あなたに合いそうなのは <span class="brand">${rice.name}</span></h2>
    <p class="score">${rice.score} / 4 項目が近い銘柄です</p>
    <p class="reason">${rice.description}</p>
    <div class="tags">
      ${rice.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
    <div class="dish-section">
      <h3>おすすめの食べ方</h3>
      <div class="dish-list">
        ${rice.dishes.map((dish) => `
          <article class="dish-card">
            <img class="dish-visual" src="assets/dishes/${dish.kind}.png" alt="" aria-hidden="true">
            <div>
              <p class="dish-name">${dish.name}</p>
              <p class="dish-reason">${dish.reason}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
    <div class="selected-answers">
      <h3>選んだ好み</h3>
      <ul>
        ${selectedLabels.map((label) => `<li>${label}</li>`).join("")}
      </ul>
    </div>
    <button type="button" class="secondary-button" id="retry-button">もう一度診断する</button>
  `;

  document.querySelector("#retry-button").addEventListener("click", () => {
    currentQuestionIndex = 0;
    answers = {};
    resultArea.classList.add("hidden");
    renderQuestion();
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  resultArea.scrollIntoView({ behavior: "smooth", block: "start" });
}
