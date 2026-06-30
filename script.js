const riceBrands = [
  {
    name: "ゆめぴりか",
    description: "強い甘みと、もっちりした柔らかさを楽しみたい人に向いています。",
    tags: ["甘み強め", "柔らかめ", "もっちり", "香り豊か"],
    dishes: [
      {
        name: "おにぎり",
        reason: "冷めてももっちり感と甘みが残りやすく、具材なしでも満足感があります。",
      },
      {
        name: "塩むすび",
        reason: "お米の甘さが主役になるので、シンプルな食べ方と相性がよいです。",
      },
    ],
    preferences: {
      sweetness: "high",
      texture: "soft",
      stickiness: "strong",
      aroma: "rich",
    },
  },
  {
    name: "コシヒカリ",
    description: "甘み・粘り・香りのバランスがよく、毎日のごはんに合わせやすい銘柄です。",
    tags: ["ほどよい甘み", "ふつう", "ほどよい粘り", "やさしい香り"],
    dishes: [
      {
        name: "定食ごはん",
        reason: "甘みと粘りのバランスがよく、焼き魚や生姜焼きなど幅広いおかずに合います。",
      },
      {
        name: "卵かけごはん",
        reason: "ほどよい粘りが卵となじみやすく、食べごたえが出ます。",
      },
    ],
    preferences: {
      sweetness: "middle",
      texture: "balanced",
      stickiness: "middle",
      aroma: "gentle",
    },
  },
  {
    name: "つや姫",
    description: "粒立ちと上品な甘みがあり、すっきり食べたい日にも合います。",
    tags: ["ほどよい甘み", "かため", "ほどよい粘り", "クセ少なめ"],
    dishes: [
      {
        name: "和食",
        reason: "上品な甘みと粒立ちがあり、だしの風味や淡い味つけを邪魔しにくいです。",
      },
      {
        name: "炊き込みごはん",
        reason: "粒感が残りやすく、具材やだしと合わせても食感を楽しめます。",
      },
    ],
    preferences: {
      sweetness: "middle",
      texture: "firm",
      stickiness: "middle",
      aroma: "clean",
    },
  },
  {
    name: "雪若丸",
    description: "しっかりした粒感と食べごたえがあり、かためのごはんが好きな人に向いています。",
    tags: ["甘み控えめ", "かため", "ほどよい粘り", "クセ少なめ"],
    dishes: [
      {
        name: "カレー",
        reason: "粒立ちがよく、ルーと合わせてもごはんの食感が残りやすいです。",
      },
      {
        name: "丼もの",
        reason: "タレや具材を受け止めながら、べたつきにくく食べやすいです。",
      },
    ],
    preferences: {
      sweetness: "low",
      texture: "firm",
      stickiness: "middle",
      aroma: "clean",
    },
  },
  {
    name: "ササニシキ",
    description: "あっさり軽い食感で、和食やお寿司のような料理と相性がよい銘柄です。",
    tags: ["甘み控えめ", "かため", "あっさり", "クセ少なめ"],
    dishes: [
      {
        name: "お寿司",
        reason: "粘りが控えめで粒がほぐれやすく、酢飯にしたときに軽く食べられます。",
      },
      {
        name: "和食",
        reason: "あっさりした味わいなので、刺身や煮魚など繊細なおかずに合わせやすいです。",
      },
    ],
    preferences: {
      sweetness: "low",
      texture: "firm",
      stickiness: "light",
      aroma: "clean",
    },
  },
  {
    name: "ミルキークイーン",
    description: "冷めても柔らかく、もちもち感をしっかり楽しみたい人におすすめです。",
    tags: ["甘み強め", "柔らかめ", "もっちり", "やさしい香り"],
    dishes: [
      {
        name: "お弁当",
        reason: "冷めても柔らかさが残りやすく、時間が経っても食べやすいです。",
      },
      {
        name: "混ぜごはん",
        reason: "もちもちした食感が具材とまとまりやすく、満足感が出ます。",
      },
    ],
    preferences: {
      sweetness: "high",
      texture: "soft",
      stickiness: "strong",
      aroma: "gentle",
    },
  },
  {
    name: "ななつぼし",
    description: "ほどよい甘みと軽さがあり、毎日のごはんに使いやすい親しみやすい銘柄です。",
    tags: ["ほどよい甘み", "ふつう", "あっさり", "やさしい香り"],
    dishes: [
      {
        name: "朝ごはん",
        reason: "重すぎない食べ心地で、焼き魚や納豆のような定番おかずに合わせやすいです。",
      },
      {
        name: "お弁当",
        reason: "ほどよい甘みがあり、冷めても食べやすいごはんに仕上がりやすいです。",
      },
    ],
    preferences: {
      sweetness: "middle",
      texture: "balanced",
      stickiness: "light",
      aroma: "gentle",
    },
  },
  {
    name: "あきたこまち",
    description: "やさしい甘みとすっきりした後味で、和食中心の食卓に合わせやすい銘柄です。",
    tags: ["ほどよい甘み", "柔らかめ", "ほどよい粘り", "クセ少なめ"],
    dishes: [
      {
        name: "和定食",
        reason: "主張が強すぎず、味噌汁や焼き魚などのやさしい味つけとよく合います。",
      },
      {
        name: "おにぎり",
        reason: "ほどよい粘りがあり、ふんわり握ってもまとまりやすいです。",
      },
    ],
    preferences: {
      sweetness: "middle",
      texture: "soft",
      stickiness: "middle",
      aroma: "clean",
    },
  },
  {
    name: "新之助",
    description: "大粒でしっかりした食感があり、濃いめのおかずにも負けにくい銘柄です。",
    tags: ["甘み強め", "かため", "ほどよい粘り", "香り豊か"],
    dishes: [
      {
        name: "肉料理",
        reason: "しっかりした粒感と甘みがあり、焼肉や生姜焼きのような濃い味にも合います。",
      },
      {
        name: "チャーハン",
        reason: "大粒で食感が残りやすく、炒めても存在感が出ます。",
      },
    ],
    preferences: {
      sweetness: "high",
      texture: "firm",
      stickiness: "middle",
      aroma: "rich",
    },
  },
];

const answerLabels = {
  sweetness: {
    high: "甘みが強い",
    middle: "ほどよい甘み",
    low: "すっきり控えめ",
  },
  texture: {
    soft: "柔らかめ",
    balanced: "ふつう",
    firm: "かため",
  },
  stickiness: {
    strong: "もっちり粘る",
    middle: "ほどよい粘り",
    light: "あっさり軽い",
  },
  aroma: {
    rich: "香りをしっかり感じたい",
    gentle: "やさしい香りが好き",
    clean: "クセが少ない方が好き",
  },
};

const questions = [
  {
    key: "sweetness",
    category: "甘さの好み",
    title: "ごはんの甘みはどれくらいが好きですか？",
    options: [
      { value: "high", label: "甘みが強い" },
      { value: "middle", label: "ほどよい甘み" },
      { value: "low", label: "すっきり控えめ" },
    ],
  },
  {
    key: "texture",
    category: "食感の好み",
    title: "炊きあがりの食感はどれが近いですか？",
    options: [
      { value: "soft", label: "柔らかめ" },
      { value: "balanced", label: "ふつう" },
      { value: "firm", label: "かため" },
    ],
  },
  {
    key: "stickiness",
    category: "粘りの好み",
    title: "粘りはどれくらいほしいですか？",
    options: [
      { value: "strong", label: "もっちり粘る" },
      { value: "middle", label: "ほどよい粘り" },
      { value: "light", label: "あっさり軽い" },
    ],
  },
  {
    key: "aroma",
    category: "香りの好み",
    title: "香りはどんなタイプが好きですか？",
    options: [
      { value: "rich", label: "香りをしっかり感じたい" },
      { value: "gentle", label: "やさしい香りが好き" },
      { value: "clean", label: "クセが少ない方が好き" },
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

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.innerHTML = `
      <span class="option-index">${index + 1}</span>
      <span class="option-label">${option.label}</span>
    `;

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
            <p class="dish-name">${dish.name}</p>
            <p class="dish-reason">${dish.reason}</p>
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
