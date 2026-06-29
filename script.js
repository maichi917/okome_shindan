const riceBrands = [
  {
    name: "ゆめぴりか",
    description: "強い甘みと、もっちりした柔らかさを楽しみたい人に向いています。",
    tags: ["甘み強め", "柔らかめ", "もっちり", "香り豊か"],
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
    preferences: {
      sweetness: "middle",
      texture: "firm",
      stickiness: "middle",
      aroma: "clean",
    },
  },
  {
    name: "ササニシキ",
    description: "あっさり軽い食感で、和食やお寿司のような料理と相性がよい銘柄です。",
    tags: ["甘み控えめ", "かため", "あっさり", "クセ少なめ"],
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
    preferences: {
      sweetness: "high",
      texture: "soft",
      stickiness: "strong",
      aroma: "gentle",
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

const form = document.querySelector("#diagnosis-form");
const resultArea = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const answers = {
    sweetness: formData.get("sweetness"),
    texture: formData.get("texture"),
    stickiness: formData.get("stickiness"),
    aroma: formData.get("aroma"),
  };

  const recommendedRice = findBestMatch(answers);
  showResult(recommendedRice, answers);
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

function showResult(rice, answers) {
  const selectedLabels = Object.keys(answers).map((key) => {
    return answerLabels[key][answers[key]];
  });

  resultArea.classList.remove("hidden");
  resultArea.innerHTML = `
    <p class="eyebrow">診断結果</p>
    <h2>あなたに合いそうなのは <span class="brand">${rice.name}</span></h2>
    <p class="score">${rice.score} / 4 項目が近い銘柄です</p>
    <p class="reason">${rice.description}</p>
    <div class="tags">
      ${rice.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
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
    form.reset();
    resultArea.classList.add("hidden");
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  resultArea.scrollIntoView({ behavior: "smooth", block: "start" });
}
