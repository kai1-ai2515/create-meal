const form = document.getElementById('meal-form');
const resultPanel = document.getElementById('result-panel');

const mealLibrary = {
  和風: {
    breakfast: [
      { name: '焼き鮭とほうれん草のご飯', desc: 'たんぱく質と鉄分をしっかり', tags: ['たんぱく質', '鉄分'], steps: ['1. 鮭を焼いて、ほうれん草はさっと茹でます。', '2. ご飯にのせて、しょうゆを少しかけます。', '3. すぐ食べられるので朝にもぴったりです。'] },
      { name: '味噌汁と豆腐の朝食', desc: '温かくて食べやすい', tags: ['温かい', '満足感'], steps: ['1. 水に味噌を溶いて、豆腐とわかめを加えます。', '2. 5分ほど煮て、白いご飯と一緒に出します。', '3. 忙しい朝でも作りやすいメニューです。'] }
    ],
    lunch: [
      { name: '鶏むね肉の照り焼き定食', desc: 'ご飯と野菜がバランス良い', tags: ['主菜', '野菜'], steps: ['1. 鶏むね肉を焼いて、照り焼きソースをからめます。', '2. きゅうりやキャベツを添えます。', '3. ご飯と一緒に盛り付ければ完成です。'] },
      { name: '豚しゃぶ野菜丼', desc: 'さっぱり食べやすい', tags: ['ヘルシー', '野菜'], steps: ['1. 豚肉をゆでて、きゅうりや大根を添えます。', '2. ご飯の上にのせて、ポン酢をかけます。', '3. すぐ食べられるので献立作りがラクです。'] }
    ],
    dinner: [
      { name: '鮭ときのこのホイル焼き', desc: 'お手軽で香りも良い', tags: ['魚', '簡単'], steps: ['1. 鮭ときのこをアルミホイルにのせます。', '2. ふたをして、オーブンかフライパンで焼きます。', '3. お皿に出せば完成です。'] },
      { name: 'うどんと焼き茄子の献立', desc: 'ぬくもりのある一皿', tags: ['温かい', '満足感'], steps: ['1. 茄子を焼いて、うどんをゆでます。', '2. だしでつけて、茄子を乗せます。', '3. すぐ温まりやすい夜食に向いています。'] }
    ]
  },
  洋風: {
    breakfast: [
      { name: 'たまごとトマトのトースト', desc: '朝から軽く食べたい日向き', tags: ['朝食向き', 'たんぱく質'], steps: ['1. トーストを焼いて、たまごを目玉焼きにします。', '2. トマトを切ってのせます。', '3. 塩こしょうで味を整えます。'] },
      { name: 'ヨーグルトとフルーツのボウル', desc: 'すぐ準備できる', tags: ['軽い', '美容'], steps: ['1. ヨーグルトをボウルに入れます。', '2. バナナやベリーをのせます。', '3. はちみつを少しかければ完成です。'] }
    ],
    lunch: [
      { name: 'チキンと野菜のオーブン焼き', desc: '香りがよく食欲をそそる', tags: ['主菜', '野菜'], steps: ['1. 鶏肉と野菜をオーブン皿に入れます。', '2. オリーブオイルと塩こしょうで味付けします。', '3. 焼き色がつくまで焼けば完成です。'] },
      { name: 'パスタサラダ', desc: '冷やしてもおいしい', tags: ['冷製', 'ボリューム'], steps: ['1. パスタをゆでて冷まします。', '2. トマトやきゅうりを切って混ぜます。', '3. ドレッシングで和えれば完成です。'] }
    ],
    dinner: [
      { name: 'ハンバーグとポテト', desc: '家族が喜ぶ定番', tags: ['満足感', 'ご飯に合う'], steps: ['1. 合いびき肉をまとめてハンバーグにします。', '2. フライパンで焼いて、ポテトを一緒に揚げます。', '3. ソースをかければ完成です。'] },
      { name: 'チーズ入りオムレツとサラダ', desc: '手軽に作りやすい', tags: ['シンプル', 'たんぱく質'], steps: ['1. 卵を溶いて、チーズを加えます。', '2. フライパンで焼いて半分に折ります。', '3. サラダと一緒に出せば大丈夫です。'] }
    ]
  },
  さっぱり: {
    breakfast: [
      { name: '冷奴ときゅうりの朝食', desc: '暑い日はこれで軽く', tags: ['さっぱり', 'ヘルシー'], steps: ['1. 冷奴を切って皿に出します。', '2. きゅうりを薄く切って添えます。', '3. しょうゆを少しかけるだけです。'] },
      { name: '雑穀米と小鉢', desc: '食べやすくて続けやすい', tags: ['軽い', '食物繊維'], steps: ['1. 雑穀米を炊いておきます。', '2. 小鉢に切り干し大根やきゅうりを入れます。', '3. さっと味付けすれば完成です。'] }
    ],
    lunch: [
      { name: '鶏むね肉のサラダボウル', desc: '野菜をたくさん食べたい日向き', tags: ['野菜', '軽い'], steps: ['1. 鶏むね肉を炒めて冷まします。', '2. レタスやトマトをボウルに入れます。', '3. ドレッシングで和えます。'] },
      { name: '冷製うどん', desc: '夏にぴったり', tags: ['さっぱり', '常備食'], steps: ['1. うどんをゆでて冷やします。', '2. きゅうりやわさびをのせます。', '3. つゆをかけて食べます。'] }
    ],
    dinner: [
      { name: '豆腐ステーキと小松菜', desc: 'ヘルシーに仕上がる', tags: ['低カロリー', '野菜'], steps: ['1. 豆腐を焼いて、両面に焼き色をつけます。', '2. 小松菜をさっと茹でます。', '3. しょうゆで味付けします。'] },
      { name: 'お刺身と酢の物', desc: '少し贅沢な夜に', tags: ['さっぱり', 'おもてなし'], steps: ['1. お刺身を皿に並べます。', '2. 酢の物を作って添えます。', '3. お醤油とわさびで味わいます。'] }
    ]
  },
  ほっこり: {
    breakfast: [
      { name: '雑炊とおかか玉子', desc: '朝からほっとする', tags: ['温かい', '満足感'], steps: ['1. ご飯を鍋に入れて水を足します。', '2. 卵を落として、ねぎを散らします。', '3. おかかをかければ完成です。'] },
      { name: 'パンとシチュー', desc: 'ゆっくり朝にぴったり', tags: ['安心感', 'ボリューム'], steps: ['1. シチューを温めます。', '2. パンをトーストします。', '3. 皿に盛って食べます。'] }
    ],
    lunch: [
      { name: '親子丼', desc: '家族に人気の一皿', tags: ['定番', '満足感'], steps: ['1. 鶏肉を煮て、卵をまぜます。', '2. ご飯の上にかけます。', '3. ねぎをのせて完成です。'] },
      { name: 'カレーライス', desc: '作り置きにも便利', tags: ['家庭的', '温かい'], steps: ['1. 具材を炒めて、カレー粉を加えます。', '2. 水を入れてとろみをつけます。', '3. ご飯にかければ完成です。'] }
    ],
    dinner: [
      { name: '鍋料理', desc: 'みんなで囲める献立', tags: ['みんなで', '季節感'], steps: ['1. 鍋にだしを入れて、具材を並べます。', '2. 少しずつ煮込んで温めます。', '3. みんなで囲んで食べます。'] },
      { name: 'クリームシチューとご飯', desc: '疲れた日にも心安らぐ', tags: ['ほっこり', '温かい'], steps: ['1. 玉ねぎやジャガイモを炒めます。', '2. 牛乳とルーを加えて煮込みます。', '3. ご飯と一緒に盛り付けます。'] }
    ]
  },
  ガッツリ: {
    breakfast: [
      { name: '目玉焼きと焼き芋の朝食', desc: 'エネルギーが必要な日に', tags: ['満足感', '朝食向き'], steps: ['1. 焼き芋を温めます。', '2. 目玉焼きを作ります。', '3. 皿に並べれば完成です。'] },
      { name: 'トーストとハムエッグ', desc: 'ボリュームを出しやすい', tags: ['たんぱく質', '満足感'], steps: ['1. トーストを焼きます。', '2. ハムと卵を焼きます。', '3. そのまま組み合わせます。'] }
    ],
    lunch: [
      { name: 'チキンカレー', desc: 'しっかり食べたい日向き', tags: ['ガッツリ', '定番'], steps: ['1. 鶏肉と玉ねぎを炒めます。', '2. カレー粉と水を加えて煮ます。', '3. ご飯にかけて完成です。'] },
      { name: '麻婆豆腐定食', desc: '食べごたえがある', tags: ['ボリューム', '満足感'], steps: ['1. 豆腐とひき肉を炒めます。', '2. しょうゆと味噌で味を整えます。', '3. ご飯と一緒に出します。'] }
    ],
    dinner: [
      { name: '焼き肉風定食', desc: '家族全員が喜びやすい', tags: ['ガッツリ', 'お祭り気分'], steps: ['1. お肉を焼いて、野菜も一緒に焼きます。', '2. ご飯と味噌汁を用意します。', '3. そのまま盛り付ければOKです。'] },
      { name: 'グラタン', desc: 'やさしい味で満足感が高い', tags: ['温かい', 'ボリューム'], steps: ['1. マカロニとソースを合わせます。', '2. チーズをのせて焼きます。', '3. そのまま食べやすいです。'] }
    ]
  },
  時短: {
    breakfast: [
      { name: 'バナナヨーグルト', desc: '3分でできる', tags: ['時短', '簡単'], steps: ['1. ヨーグルトを器に入れます。', '2. バナナを切ってのせます。', '3. すぐ食べられます。'] },
      { name: 'おにぎりと卵焼き', desc: '冷凍や作り置きでラク', tags: ['時短', '朝食向き'], steps: ['1. おにぎりを用意します。', '2. 卵焼きを切ります。', '3. そのまま並べれば完成です。'] }
    ],
    lunch: [
      { name: '冷凍うどんと卵', desc: '10分でできる', tags: ['時短', '簡単'], steps: ['1. 冷凍うどんをゆでます。', '2. 卵を割り入れて混ぜます。', '3. しょうゆを少しかけます。'] },
      { name: 'トマトチーズトースト', desc: '忙しい日の定番', tags: ['時短', '軽い'], steps: ['1. パンを焼きます。', '2. トマトとチーズをのせます。', '3. オーブンで軽く焼けば完成です。'] }
    ],
    dinner: [
      { name: '焼き鮭とキャベツ', desc: '気軽に作れる', tags: ['時短', '主菜'], steps: ['1. 鮭を焼きます。', '2. キャベツを切って炒めます。', '3. お皿に並べれば完成です。'] },
      { name: '豚バラと玉ねぎの炒め物', desc: 'おかずが一品でOK', tags: ['時短', '満足感'], steps: ['1. 豚バラを焼きます。', '2. 玉ねぎを加えて炒めます。', '3. ご飯と一緒に出します。'] }
    ]
  },
  子ども向け: {
    breakfast: [
      { name: 'ふわふわ卵とトースト', desc: '子どもが食べやすい', tags: ['子ども向け', 'たんぱく質'], steps: ['1. 卵を焼いてふわっと仕上げます。', '2. トーストを用意します。', '3. そのまま組み合わせます。'] },
      { name: 'ミニオムライス', desc: '見た目も楽しい', tags: ['かわいい', 'ご飯'], steps: ['1. ご飯にケチャップを混ぜます。', '2. 卵を乗せて丸くまとめます。', '3. まわりに野菜を添えます。'] }
    ],
    lunch: [
      { name: 'チキンライス', desc: '好きな子が多い定番', tags: ['子ども向け', '満足感'], steps: ['1. 鶏肉を炒めて、米と一緒に煮ます。', '2. ケチャップで味を整えます。', '3. 皿に盛って完成です。'] },
      { name: 'うどんの卵とじ', desc: '温かいのが安心', tags: ['やさしい', '簡単'], steps: ['1. うどんをゆでます。', '2. 卵を絡めて少し煮ます。', '3. すぐ食べられます。'] }
    ],
    dinner: [
      { name: 'ハンバーグとコーン', desc: '子どもにも人気', tags: ['子ども向け', 'ご飯に合う'], steps: ['1. ハンバーグを焼きます。', '2. コーンを温めます。', '3. ご飯と一緒に盛り付けます。'] },
      { name: '野菜たっぷりスープパスタ', desc: '食べやすくて栄養も取れます', tags: ['野菜', 'やさしい'], steps: ['1. パスタをゆでます。', '2. 野菜を切ってスープに入れます。', '3. パスタと和えて完成です。'] }
    ]
  },
  節約: {
    breakfast: [
      { name: '卵とねぎのおにぎり', desc: '材料が少なくてOK', tags: ['節約', '朝食向き'], steps: ['1. ご飯に卵とねぎを混ぜます。', '2. 形を整えて焼きます。', '3. そのまま食べられます。'] },
      { name: '豆腐と大根の味噌汁', desc: 'お財布に優しい', tags: ['節約', '温かい'], steps: ['1. 大根を切って煮ます。', '2. 豆腐を加えます。', '3. 味噌で仕上げます。'] }
    ],
    lunch: [
      { name: 'ひじきと卵の炒飯', desc: '冷蔵庫の残り物でもOK', tags: ['節約', '簡単'], steps: ['1. ご飯を熱して炒めます。', '2. ひじきと卵を加えます。', '3. しょうゆで味を整えます。'] },
      { name: 'じゃがいもと玉ねぎの煮物', desc: '手間が少なくて続けやすい', tags: ['節約', '定番'], steps: ['1. じゃがいもと玉ねぎを切ります。', '2. 水と調味料で煮ます。', '3. しんなりしたら完成です。'] }
    ],
    dinner: [
      { name: '豆腐ハンバーグ', desc: 'お肉の代わりに使いやすい', tags: ['節約', '満足感'], steps: ['1. 豆腐をしぼって混ぜます。', '2. まとめて焼きます。', '3. ソースをかけて食べます。'] },
      { name: '野菜たっぷりスープ', desc: '材料を少しで作れる', tags: ['節約', 'ヘルシー'], steps: ['1. 野菜を切って鍋に入れます。', '2. 水とコンソメで煮ます。', '3. お好みでご飯を添えます。'] }
    ]
  }
};

const defaultVideoUrl = 'videos/cooking-demo.mp4';

function getYoutubeSearchEmbedUrl(query) {
  if (!query) return '';
  const encoded = encodeURIComponent(query + ' 料理');
  return `https://www.youtube-nocookie.com/embed/videoseries?listType=search&list=${encoded}`;
}

function getEmbedUrl(url) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const id = parsed.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}`;
      const shorts = parsed.pathname.match(/^\/shorts\/([^/]+)/);
      if (shorts) return `https://www.youtube.com/embed/${shorts[1]}`;
      if (parsed.pathname.startsWith('/embed/')) return url;
    }

    if (host === 'youtu.be') {
      const id = parsed.pathname.replace(/^\//, '');
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch (error) {
    console.warn('Invalid video URL', error);
  }

  return url;
}

function getMealNutrition(meal) {
  const tags = meal.tags || [];
  const name = meal.name;

  let calories = 480;
  let protein = 24;
  let fiber = 6;

  if (tags.includes('時短') || tags.includes('軽い')) {
    calories = 360;
    protein = 18;
    fiber = 4;
  }

  if (tags.includes('ガッツリ') || tags.includes('満足感') || name.includes('ハンバーグ') || name.includes('カレー') || name.includes('グラタン')) {
    calories = 720;
    protein = 35;
    fiber = 5;
  }

  if (name.includes('サラダ') || name.includes('冷奴') || name.includes('豆腐') || name.includes('小松菜') || name.includes('きゅうり')) {
    calories = 420;
    protein = 22;
    fiber = 9;
  }

  if (name.includes('シチュー') || name.includes('鍋')) {
    calories = 610;
    protein = 27;
    fiber = 5;
  }

  if (tags.includes('節約')) {
    calories = Math.max(320, calories - 40);
  }

  if (tags.includes('低カロリー')) {
    calories = 360;
    protein = 18;
    fiber = 8;
  }

  return { calories, protein, fiber };
}

function buildMediaHtml(videoUrl) {
  const resolved = getEmbedUrl(videoUrl);
  const isYouTube = resolved.includes('youtube.com/embed/') || resolved.includes('youtu.be/');

  if (isYouTube) {
    return `<iframe class="recipe-iframe" src="${resolved}" title="料理の参考動画" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }

  return `
    <video class="recipe-video" controls preload="metadata" playsinline>
      <source src="${resolved || defaultVideoUrl}" type="video/mp4" />
      お使いのブラウザでは動画の再生に対応していません。
    </video>
  `;
}

const balanceHints = {
  standard: {
    heading: 'バランス重視の献立です。',
    bullet: ['主菜・副菜・汁物の3点を意識しました。', '野菜とたんぱく質がしっかり入るようにしました。'],
    tip: '毎日の食事に取り入れやすい基本パターンです。'
  },
  protein: {
    heading: 'たんぱく質を意識した献立です。',
    bullet: ['魚・卵・肉を中心に組みました。', '満腹感が出やすいメニューです。'],
    tip: '体力をつけたい日や、家族の食べ応えを重視したい日に向いています。'
  },
  vegetable: {
    heading: '野菜を多めにした献立です。',
    bullet: ['副菜を増やして彩りを整えました。', '食物繊維を取りやすい組み合わせです。'],
    tip: '食べやすくて、さっぱりしたい日におすすめです。'
  },
  iron: {
    heading: '鉄分を意識した献立です。',
    bullet: ['小魚・レバー・ほうれん草などを取り入れやすくしました。', 'ビタミンCと一緒に食べると吸収しやすい組み合わせです。'],
    tip: '疲れやすい日や、栄養をしっかり取りたい日にぴったりです。'
  },
  fiber: {
    heading: '食物繊維をしっかり摂る献立です。',
    bullet: ['根菜・きのこ・海藻を中心に組みました。', 'お通じのサポートにもなりやすい内容です。'],
    tip: '腸内環境を整えたい日や、食べるものを軽くしたい日におすすめです。'
  },
  calcium: {
    heading: 'カルシウムを意識した献立です。',
    bullet: ['豆腐・小魚・牛乳の食材を使いやすくしました。', '骨づくりや体の土台を意識した内容です。'],
    tip: '成長期のお子さんや、日頃の栄養補助として使いやすいです。'
  },
  lowcarb: {
    heading: '低糖質寄りの献立です。',
    bullet: ['ご飯量を控えめにしやすい組み合わせです。', '野菜やたんぱく質を中心にしています。'],
    tip: '少し軽めに食べたい日や、置き換えとして使いやすいです。'
  }
};

function pickMeal(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function buildPatterns(moodMenu, count = 3) {
  const breakfastPool = [...moodMenu.breakfast];
  const lunchPool = [...moodMenu.lunch];
  const dinnerPool = [...moodMenu.dinner];
  const patterns = [];

  for (let index = 0; index < count; index += 1) {
    const breakfast = breakfastPool.splice(Math.floor(Math.random() * breakfastPool.length), 1)[0] || moodMenu.breakfast[0];
    const lunch = lunchPool.splice(Math.floor(Math.random() * lunchPool.length), 1)[0] || moodMenu.lunch[0];
    const dinner = dinnerPool.splice(Math.floor(Math.random() * dinnerPool.length), 1)[0] || moodMenu.dinner[0];
    patterns.push({ breakfast, lunch, dinner });
  }

  return patterns;
}

function buildGuide(meal, videoUrl) {
  const nutrition = getMealNutrition(meal);
  const searchQuery = `${meal.name} 作り方`;
  const resolvedVideoUrl = videoUrl || getYoutubeSearchEmbedUrl(searchQuery) || meal.videoUrl || defaultVideoUrl;

  return `
    <div class="guide-card">
      <div class="guide-top">
        <span class="video-pill">▶ 参考動画</span>
        <span class="video-pill subtle">初心者向け</span>
      </div>
      ${buildMediaHtml(resolvedVideoUrl)}
      <div class="nutrition-list">
        <span class="nutrition-pill">🔥 ${nutrition.calories} kcal</span>
        <span class="nutrition-pill">💪 たんぱく質 ${nutrition.protein}g</span>
        <span class="nutrition-pill">🌿 食物繊維 ${nutrition.fiber}g</span>
      </div>
      <ul class="timeline">
        ${meal.steps.map((step, index) => `
          <li class="video-step">
            <span class="time-pill">0:${String(index + 1).padStart(2, '0')}</span>
            <span class="step-text">${step.replace(/^\d+\.\s*/, '')}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

function buildResult(values) {
  const mood = values.mood;
  const balance = values.balance;
  const people = Number(values.people);
  const budget = values.budget;
  const moodMenu = mealLibrary[mood] || mealLibrary.和風;
  const patterns = buildPatterns(moodMenu, 3);
  const [primaryPattern] = patterns;

  const shoppingList = [
    primaryPattern.breakfast.name.includes('鮭') || primaryPattern.breakfast.name.includes('鶏') || primaryPattern.breakfast.name.includes('肉') || primaryPattern.lunch.name.includes('鶏') || primaryPattern.dinner.name.includes('魚') ? '主菜の食材' : 'お肉またはお魚',
    '野菜を2〜3種類',
    budget === 'cozy' ? 'お好みの副菜を1品' : '汁物またはサラダ'
  ];

  const summary = balanceHints[balance] || balanceHints.standard;

  return `
    <div class="result-grid">
      <div class="pattern-summary-card">
        <h3>3つの献立候補</h3>
        <ul class="pattern-list">
          ${patterns.map((pattern, index) => `
            <li>
              <strong>候補 ${index + 1}</strong>
              <span>朝: ${pattern.breakfast.name}</span>
              <span>昼: ${pattern.lunch.name}</span>
              <span>夜: ${pattern.dinner.name}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="meal-card">
        <p class="meta">朝</p>
        <h3>${primaryPattern.breakfast.name}</h3>
        <p>${primaryPattern.breakfast.desc}</p>
        ${buildGuide(primaryPattern.breakfast)}
        <div class="badges">
          ${primaryPattern.breakfast.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </div>
      <div class="meal-card">
        <p class="meta">昼</p>
        <h3>${primaryPattern.lunch.name}</h3>
        <p>${primaryPattern.lunch.desc}</p>
        ${buildGuide(primaryPattern.lunch)}
        <div class="badges">
          ${primaryPattern.lunch.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </div>
      <div class="meal-card">
        <p class="meta">夜</p>
        <h3>${primaryPattern.dinner.name}</h3>
        <p>${primaryPattern.dinner.desc}</p>
        ${buildGuide(primaryPattern.dinner)}
        <div class="badges">
          ${primaryPattern.dinner.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </div>
      <div class="summary">
        <h3>${summary.heading}</h3>
        <ul>
          <li>人数: ${people}人分</li>
          <li>予算目安: ${budget === 'budget' ? 'お手頃' : budget === 'normal' ? '標準' : 'ちょっと贅沢'}</li>
          <li>ポイント: ${summary.tip}</li>
          ${summary.bullet.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <p><strong>買い物メモ:</strong> ${shoppingList.join(' / ')}</p>
      </div>
    </div>
  `;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const values = {
    mood: document.getElementById('mood').value,
    balance: document.getElementById('balance').value,
    people: document.getElementById('people').value,
    budget: document.getElementById('budget').value
  };
  resultPanel.innerHTML = buildResult(values);
});
