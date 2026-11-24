const characters = [
  { id: 'bolo', cardId: 'card_bolo', name: '波蘿胖胖', mark: '波', avatar: 'assets/card-bolo-v2.jpg', color: '#d9a066', style: '穩定型', line: '先吃點東西，再慢慢處理。' },
  { id: 'husky', cardId: 'card_husky', name: '哈士奇姑姑羅', mark: '哈', avatar: 'assets/card-husky.jpg', color: '#6f879e', style: '果斷型', line: '哪裡不對，我去看看。' },
  { id: 'toast', cardId: 'card_toast', name: '香蕉吐司', mark: '香', avatar: 'assets/card-toast.jpg', color: '#ac89b8', style: '細節型', line: '這兩個白色真的不一樣。' },
  { id: 'tail', cardId: 'card_tail', name: '小尾巴', mark: '尾', avatar: 'assets/card-tail-v2.jpg', color: '#e59a7a', style: '適應型', line: '這次可以讓我試試看嗎？' }
];

const collectibles = [
  { id: 'classroom', group: 'activity', type: '日常', title: '大家認真上課', hint: '初始回憶', image: 'assets/classroom.jpg', text: '木亦正在講解設計課程，大家用各自的方式努力吸收。' },
  { id: 'birthday', group: 'activity', type: '活動', title: '事務所生日會', hint: '完成「準備驚喜」任務', image: 'assets/birthday.jpg', text: '工作先放一下，今天最重要的是一起慶祝。' },
  { id: 'pest', group: 'activity', type: '突發', title: '害蟲退散！', hint: '完成「辦公室大騷動」任務', image: 'assets/pest-control.jpg', text: '哈士奇率先衝進現場，其他人負責在門口加油。' },
  { id: 'delivery', group: 'activity', type: '工作', title: '很快的裝修送件', hint: '完成羽田派發的送件任務', image: 'assets/activity-delivery.jpg', text: '羽田帶著文件與成員們出發，今天應該不需要補件。' },
  { id: 'overtime', group: 'activity', type: '日常', title: '加班宵夜時間', hint: '完成「今晚一起加班」任務', image: 'assets/activity-overtime.jpg', text: '圖面還沒結束，但大家決定先讓晚餐開始。' },
  { id: 'model_repair', group: 'activity', type: '工作', title: '模型搶救小組', hint: '完成「修好白色模型」任務', image: 'assets/activity-model-repair.jpg', text: '每個人出一點力，受損的模型又慢慢站了起來。' },
  { id: 'site_survey', group: 'activity', type: '工作', title: '店鋪現場勘查', hint: '完成木亦派發的店鋪配置', image: 'assets/activity-site-survey.jpg', text: '量尺寸、記錄問題，也順便想像空間完成後的模樣。' },
  { id: 'presentation', group: 'activity', type: '工作', title: '提案前的最後演練', hint: '完成「準備設計提案」任務', image: 'assets/activity-presentation.jpg', text: '模型、材料板與說明順序全部確認，大家準備好面對提案。' },
  { id: 'materials', group: 'activity', type: '工作', title: '這兩個白不一樣', hint: '完成「材料挑選會議」任務', image: 'assets/activity-materials.jpg', text: '香蕉吐司提出了兩塊看似相同，實際上完全不同的材料。' },
  { id: 'printer_jam', group: 'activity', type: '突發', title: '印表機卡紙危機', hint: '完成「搶救出圖作業」任務', image: 'assets/activity-printer-jam.jpg', text: '圖紙像瀑布一樣湧出來，幸好大家在截止前恢復了秩序。' },
  { id: 'nap', group: 'activity', type: '日常', title: '全所自動宣布午休', hint: '完成「安靜的午後」任務', image: 'assets/activity-nap.jpg', text: '波蘿胖胖一趴下，事務所便自動進入了安靜的午休模式。' },
  { id: 'rainy_site', group: 'activity', type: '工作', title: '雨天也要去現場', hint: '完成「雨天現場確認」任務', image: 'assets/activity-rainy-site.jpg', text: '雨勢沒有打亂節奏，四位成員各自保護好圖面、材料與量測工具。' },
  { id: 'material_market', group: 'activity', type: '外出', title: '材料市集尋寶', hint: '完成「材料市集尋寶」任務', image: 'assets/activity-material-market.jpg', text: '大家分工比較木材、磁磚與布料，找到了一組意外合適的搭配。' },
  { id: 'cleaning_day', group: 'activity', type: '日常', title: '事務所大掃除', hint: '完成「圖面與模型大整理」任務', image: 'assets/activity-cleaning-day.jpg', text: '圖面歸位、材料分類、模型無傷，只有小尾巴還在和拖把奮戰。' },
  { id: 'finish_picnic', group: 'activity', type: '活動', title: '完工後的野餐', hint: '完成「完工小小慶功」任務', image: 'assets/activity-finish-picnic.jpg', text: '店鋪順利完工，大家帶著點心到附近公園享受難得的悠閒午後。' },
  { id: 'typhoon_prep', group: 'activity', type: '突發', title: '颱風前的防護作戰', hint: '完成「颱風前安全確認」任務', image: 'assets/activity-typhoon-prep.jpg', text: '模型移到安全位置、窗戶固定完成，材料樣本也全部包裝妥當。' },
  { id: 'night_lighting', group: 'activity', type: '工作', title: '夜間燈光測試', hint: '完成「店鋪夜間點燈」任務', image: 'assets/activity-night-lighting.jpg', text: '暖光、間接照明與招牌亮度逐一確認，完工空間在夜裡有了不同表情。' },
  { id: 'model_supplies', group: 'activity', type: '外出', title: '模型材料採買隊', hint: '完成「補齊模型材料」任務', image: 'assets/activity-model-supplies.jpg', text: '板材、膠水、色紙和模型樹都買齊了，只是小尾巴差點被木條淹沒。' },
  { id: 'afternoon_tea', group: 'activity', type: '日常', title: '事務所下午茶', hint: '完成「今天準時休息」任務', image: 'assets/activity-afternoon-tea.jpg', text: '忙完一個段落，大家用茶點和夕陽替今天留下一小段空白。' },
  { id: 'power_outage', group: 'activity', type: '突發', title: '停電中的應變小隊', hint: '完成「突然停電了」任務', image: 'assets/activity-power-outage.jpg', text: '緊急燈、手電筒與設備檢查清單全部出動，黑暗中也能維持秩序。' },
  { id: 'plant_shopping', group: 'activity', type: '外出', title: '店鋪植栽選購', hint: '完成「挑選室內植栽」任務', image: 'assets/activity-plant-shopping.jpg', text: '尺寸、葉形與花盆顏色都要配合空間，小尾巴則負責測試推車。' },
  { id: 'roof_leak', group: 'activity', type: '突發', title: '屋頂漏水觀察日', hint: '完成「記錄漏水位置」任務', image: 'assets/activity-roof-leak.jpg', text: '先保護模型與材料，再把每一處水滴的位置和時間記錄清楚。' },
  { id: 'photo_day', group: 'activity', type: '工作', title: '完工作品拍攝日', hint: '完成「拍攝完工空間」任務', image: 'assets/activity-photo-day.jpg', text: '相機、模型、材質與反光板各就各位，完成作品終於留下正式紀錄。' },
  { id: 'card_muyi', group: 'character', type: '個人卡', title: '木亦', hint: '初始角色', image: 'assets/card-muyi.jpg', text: '事務所老闆，負責派發主要案件並掌握專案方向。' },
  { id: 'card_yutian', group: 'character', type: '個人卡', title: '羽田', hint: '初始角色', image: 'assets/card-yutian.jpg', text: '短髮女建築師，負責一般店鋪裝修案與額外送件。' },
  { id: 'card_bolo', group: 'character', type: '個人卡', title: '波蘿胖胖', hint: '讓波蘿胖胖參與一次任務', image: 'assets/card-bolo-v2.jpg', text: '黃金獵犬、穩定型成員。先補充零食，再陪大家把事情處理好。' },
  { id: 'card_husky', group: 'character', type: '個人卡', title: '哈士奇姑姑羅', hint: '讓哈士奇姑姑羅參與一次任務', image: 'assets/card-husky.jpg', text: '果斷型成員，擅長快速察覺問題並立刻採取行動。' },
  { id: 'card_toast', group: 'character', type: '個人卡', title: '香蕉吐司', hint: '讓香蕉吐司參與一次任務', image: 'assets/card-toast.jpg', text: '細節型成員，對材質、色彩與小地方都非常講究。' },
  { id: 'card_tail', group: 'character', type: '個人卡', title: '小尾巴', hint: '讓小尾巴參與一次任務', image: 'assets/card-tail-v2.jpg', text: '白色博美、適應型實習成員，對新工作既期待又有一點緊張。' }
  ,{ id: 'card_bolo_rain', group: 'character', type: '服裝卡', title: '波蘿胖胖・雨天踏查', hint: '完成「雨天現場確認」任務', image: 'assets/costume-bolo-rain.jpg', text: '換上黃色雨衣，圖面和零食都能安全抵達現場。' }
  ,{ id: 'card_husky_supervisor', group: 'character', type: '服裝卡', title: '哈士奇姑姑羅・工地主任', hint: '完成「圖面與模型大整理」任務', image: 'assets/costume-husky-supervisor.jpg', text: '安全帽、反光背心與確認板到齊，現場問題一個也逃不過。' }
  ,{ id: 'card_toast_curator', group: 'character', type: '服裝卡', title: '香蕉吐司・材料選品', hint: '完成「材料市集尋寶」任務', image: 'assets/costume-toast-curator.jpg', text: '圍裙口袋裝滿色票，今天也要找出最剛好的那一種白。' }
  ,{ id: 'card_tail_presentation', group: 'character', type: '服裝卡', title: '小尾巴・正式提案', hint: '完成「完工小小慶功」任務', image: 'assets/costume-tail-presentation.jpg', text: '穿上稍微大了一點的西裝，第一次正式報告也要努力完成。' }
];

const missions = [
  { id: 'layout', owner: '木亦', kind: '主案', title: '暖日店鋪配置', desc: '到小型店鋪進行現場勘查，安排展示、座位與工作空間。', reward: ['site_survey'], prompt: '尺寸與現況都記錄好了，大家也開始想像完成後的店鋪。' },
  { id: 'delivery', owner: '羽田', kind: '額外任務', title: '很快的裝修送件', desc: '整理正確版本，一起送出一般店鋪裝修資料。', reward: ['delivery'], prompt: '文件整理完成，羽田帶著大家精神滿滿地出發了。' },
  { id: 'birthday', owner: '事務所', kind: '日常', title: '準備生日驚喜', desc: '在本人發現前，把蛋糕和裝飾準備好。', reward: ['birthday'], prompt: '驚喜順利完成！今天的工作紀錄多了一張大家都在笑的照片。' },
  { id: 'pest', owner: '事務所', kind: '突發事件', title: '辦公室大騷動', desc: '保護模型和零食，處理突然出現的不速之客。', reward: ['pest'], prompt: '一陣混亂過後，模型、文件與零食全部平安，辦公室恢復了秩序。' },
  { id: 'repair', owner: '事務所', kind: '工作', title: '修好白色模型', desc: '一起把受損的建築模型重新組合完成。', reward: ['model_repair'], prompt: '牆面、樹木與小零件都回到正確位置，模型再次完整。' },
  { id: 'overtime', owner: '木亦', kind: '日常', title: '今晚一起加班', desc: '整理桌面、推進圖面，當然也要先準備宵夜。', reward: ['overtime'], prompt: '工作還在繼續，但熱騰騰的宵夜讓整間事務所重新有了精神。' },
  { id: 'presentation', owner: '木亦', kind: '工作', title: '準備設計提案', desc: '確認模型、材料板與提案內容，進行最後一次演練。', reward: ['presentation'], prompt: '大家輪流檢查內容，提案道具和說明順序都已經準備完成。' },
  { id: 'materials', owner: '羽田', kind: '工作', title: '材料挑選會議', desc: '比較布料、木材、色卡與磁磚樣本，留下最適合的組合。', reward: ['materials'], prompt: '最後選出的材料看起來很接近，但香蕉吐司知道它們的差別。' },
  { id: 'printer', owner: '事務所', kind: '突發事件', title: '搶救出圖作業', desc: '在圖紙堆滿地板以前，處理大型印表機的卡紙問題。', reward: ['printer_jam'], prompt: '圖面順利印出，長長的圖紙也終於全部整理完成。' },
  { id: 'nap', owner: '波蘿胖胖', kind: '日常', title: '安靜的午後', desc: '整理好工作後，讓事務所度過一段不被打擾的午休時間。', reward: ['nap'], prompt: '波蘿胖胖先趴下了，其他人也逐漸找到最舒服的位置。' }
  ,{ id: 'rainy', owner: '木亦', kind: '外出', title: '雨天現場確認', desc: '帶好雨具與圖面，到店鋪確認雨天排水和施工狀況。', reward: ['rainy_site'], bonus: ['card_bolo_rain'], prompt: '雨勢不小，但尺寸、外牆與排水狀況都順利確認完成。' }
  ,{ id: 'market', owner: '羽田', kind: '外出', title: '材料市集尋寶', desc: '到材料市集比較木材、磁磚、布料與色票。', reward: ['material_market'], bonus: ['card_toast_curator'], prompt: '樣本籃裝得滿滿的，大家也找到最適合店鋪的新組合。' }
  ,{ id: 'cleaning', owner: '事務所', kind: '日常', title: '圖面與模型大整理', desc: '整理圖面、材料櫃與模型區，讓工作桌重新出現。', reward: ['cleaning_day'], bonus: ['card_husky_supervisor'], prompt: '所有東西都回到正確位置，明天終於不用先清桌面才能工作。' }
  ,{ id: 'picnic', owner: '木亦', kind: '活動', title: '完工小小慶功', desc: '帶著點心和完工照片，到附近公園簡單慶祝。', reward: ['finish_picnic'], bonus: ['card_tail_presentation'], prompt: '這次的成果被好好記錄，也成為大家下一次努力的動力。' }
  ,{ id: 'typhoon', owner: '木亦', kind: '突發事件', title: '颱風前安全確認', desc: '固定窗戶、移動模型並保護怕潮的材料樣本。', reward: ['typhoon_prep'], prompt: '風雨來臨前，事務所已經完成所有防護，重要物品也都很安全。' }
  ,{ id: 'lighting', owner: '羽田', kind: '工作', title: '店鋪夜間點燈', desc: '入夜後到完工店鋪確認燈具、色溫與招牌亮度。', reward: ['night_lighting'], prompt: '所有燈具逐一通過確認，完成後的店鋪在夜色裡格外溫暖。' }
  ,{ id: 'supplies', owner: '事務所', kind: '外出', title: '補齊模型材料', desc: '到美術材料店補充板材、膠水、色紙與模型小樹。', reward: ['model_supplies'], prompt: '採買清單全部劃掉，下一個模型終於可以正式開工。' }
  ,{ id: 'tea', owner: '波蘿胖胖', kind: '日常', title: '今天準時休息', desc: '在下一件工作開始前，大家一起坐下來喝杯茶。', reward: ['afternoon_tea'], prompt: '短短的休息讓大家重新充滿精神，桌上的點心也一個不剩。' }
  ,{ id: 'outage', owner: '事務所', kind: '突發事件', title: '突然停電了', desc: '開啟緊急照明，確認設備狀態並保護桌上的模型與資料。', reward: ['power_outage'], prompt: '緊急照明順利啟動，所有設備和重要檔案都維持安全。' }
  ,{ id: 'plants', owner: '羽田', kind: '採購', title: '挑選室內植栽', desc: '依照店鋪採光、動線與色彩，到溫室挑選合適植栽。', reward: ['plant_shopping'], prompt: '植栽與花盆都選好了，完工空間因此多了一份舒服的綠意。' }
  ,{ id: 'leak', owner: '木亦', kind: '現況紀錄', title: '記錄漏水位置', desc: '保護模型與材料，觀察並標記每一處漏水的位置。', reward: ['roof_leak'], prompt: '漏水時間、位置與影響範圍都記錄完成，後續處理有了清楚依據。' }
  ,{ id: 'photoshoot', owner: '木亦', kind: '成果紀錄', title: '拍攝完工空間', desc: '整理場景、調整模型與道具，完成正式作品攝影。', reward: ['photo_day'], prompt: '光線與構圖確認完成，這次的設計成果被好好保存下來。' }
];

const NEW_MISSION_IDS = new Set(['typhoon', 'lighting', 'supplies', 'tea', 'outage', 'plants', 'leak', 'photoshoot']);

const MAX_DAILY_ACTIONS = 5;
const RULES_VERSION = 2;
const defaultState = { day: 1, actions: MAX_DAILY_ACTIONS, completedToday: [], unlocked: ['classroom', 'card_muyi', 'card_yutian'], seen: [], view: 'office', rulesVersion: RULES_VERSION };
let state = loadState();
let selectedMission = null;
let selectedCharacters = [];
let deferredInstallPrompt = null;

const app = document.querySelector('#app');
const missionDialog = document.querySelector('#mission-dialog');
const resultDialog = document.querySelector('#result-dialog');
const collectionDialog = document.querySelector('#collection-dialog');

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('zhuyu-collection-save-v2')) || {};
    const next = { ...defaultState, ...saved };
    if (saved.rulesVersion !== RULES_VERSION) {
      next.actions = MAX_DAILY_ACTIONS;
      next.completedToday = [];
      next.rulesVersion = RULES_VERSION;
      localStorage.setItem('zhuyu-collection-save-v2', JSON.stringify(next));
    }
    if (!Array.isArray(next.completedToday)) next.completedToday = [];
    return next;
  }
  catch { return { ...defaultState }; }
}
function saveState() { localStorage.setItem('zhuyu-collection-save-v2', JSON.stringify(state)); }
function byId(id) { return collectibles.find(item => item.id === id); }
function character(id) { return characters.find(item => item.id === id); }

function updateChrome() {
  document.querySelector('#day-number').textContent = state.day;
  document.querySelector('#action-pips').innerHTML = Array.from({ length: MAX_DAILY_ACTIONS }, (_, i) => `<i class="pip ${i < state.actions ? 'on' : ''}"></i>`).join('');
  document.querySelector('#album-count').textContent = state.unlocked.length;
  document.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === state.view));
}

function render() {
  updateChrome();
  if (state.view === 'missions') renderMissions();
  else if (state.view === 'album') renderAlbum();
  else renderOffice();
  app.focus({ preventScroll: true });
}

function renderOffice() {
  const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">離線日常收集遊戲</p>
        <h1>今天，會留下<br>什麼回憶？</h1>
        <p class="lead">接受木亦與羽田派發的任務，自由安排四位員工，一點一點補齊築城事務所圖鑑。</p>
        <div class="button-row">
          <button class="button" type="button" data-view="missions">查看今天的任務</button>
          <button class="button secondary" type="button" data-view="album">翻開圖鑑</button>
          ${standalone ? '' : '<button class="button secondary install-button" type="button" data-install-app>安裝到手機主畫面</button>'}
        </div>
        ${standalone ? '' : '<p class="install-note">Android：瀏覽器選單選擇「安裝應用程式」・iPhone：Safari 分享後選擇「加入主畫面」。安裝完成後可離線遊玩。</p>'}
      </div>
      <aside class="panel boss-panel">
        <div class="speech"><strong>木亦｜主線派案</strong><p>「先看看今天想和誰一起完成工作。」</p></div>
        <div class="speech alt"><strong>羽田｜額外任務</strong><p>「這裡有一個很快的送件，不會花太久……應該。」</p></div>
      </aside>
    </section>
    <div class="section-head"><div><p class="eyebrow">OUR TEAM</p><h2>事務所四人組</h2></div><p>所有人都能參與任何任務</p></div>
    <section class="character-grid">
      ${characters.map(c => `<article class="character-card"><div class="avatar" style="--avatar:${c.color}"><img src="${c.avatar}" alt="${c.name}頭像"></div><span class="tag">${c.style}</span><h3>${c.name}</h3><p>「${c.line}」</p></article>`).join('')}
    </section>`;
}

function renderMissions() {
  const start = ((state.day - 1) * 3) % missions.length;
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  let stride = 5;
  while (gcd(stride, missions.length) !== 1) stride += 1;
  const dailyMissions = [];
  let cursor = start;
  while (dailyMissions.length < Math.min(MAX_DAILY_ACTIONS + 1, missions.length)) {
    const mission = missions[cursor % missions.length];
    if (!dailyMissions.includes(mission)) dailyMissions.push(mission);
    cursor += stride;
  }
  app.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">TODAY'S TASKS</p><h2>今天想做什麼？</h2></div><p>${state.actions ? `還能完成 ${state.actions} 次任務` : '今天的行動已用完'}</p></div>
    <section class="mission-grid">
      ${dailyMissions.map(m => {
        const doneToday = state.completedToday.includes(m.id);
        return `<article class="mission-card ${doneToday ? 'completed' : ''}"><div class="mission-tags"><span class="tag">${m.owner}・${m.kind}</span>${NEW_MISSION_IDS.has(m.id) ? '<span class="tag new-task">新任務</span>' : ''}</div><h3>${m.title}</h3><p>${m.desc}</p><div class="mini-meta"><span>${doneToday ? '今日已完成' : '任選 1～2 人'}</span><span>${m.reward.some(id => !state.unlocked.includes(id)) ? '有未收集回憶' : '可能取得回憶貼紙'}</span></div><button class="button" type="button" data-mission="${m.id}" ${state.actions && !doneToday ? '' : 'disabled'}>${doneToday ? '今日已派出' : '選擇這個任務'}</button></article>`;
      }).join('')}
    </section>
    ${state.actions === 0 ? `<div class="empty"><h3>今天辛苦了</h3><p>結束今天，明天會刷新三次行動。</p><button class="button" type="button" data-next-day>進入第 ${state.day + 1} 天</button></div>` : ''}`;
}

function renderAlbum() {
  const validUnlocked = collectibles.filter(item => state.unlocked.includes(item.id));
  const groups = [
    { id: 'activity', eyebrow: 'OFFICE MOMENTS', title: '事務所活動圖鑑', note: '活動人數依故事自然安排，不限制固定成員數量。' },
    { id: 'character', eyebrow: 'PERSONAL CARDS', title: '個人與服裝圖鑑卡', note: '與角色完成任務取得個人卡，特定活動還會留下限定服裝卡。' }
  ];
  app.innerHTML = `
    <div class="section-head"><div><p class="eyebrow">COLLECTION</p><h2>築城事務所圖鑑</h2></div><div><p>${validUnlocked.length}／${collectibles.length} 已收集</p><div class="progress"><i style="width:${validUnlocked.length / collectibles.length * 100}%"></i></div></div></div>
    ${groups.map(group => {
      const items = collectibles.filter(item => item.group === group.id);
      return `<section class="album-section"><div class="subsection-head"><div><p class="eyebrow">${group.eyebrow}</p><h3>${group.title}</h3></div><p>${group.note}</p></div><div class="album-grid ${group.id === 'character' ? 'personal-grid' : ''}">
        ${items.map(item => {
          const open = state.unlocked.includes(item.id);
          const tag = open ? 'button' : 'article';
          const action = open ? ` type="button" data-open-collectible="${item.id}" aria-label="查看${item.title}完整收藏"` : '';
          return `<${tag} class="album-card ${open ? 'open' : 'locked'} ${open && !state.seen.includes(item.id) ? 'new' : ''}"${action}>
            <div class="album-visual"><img src="${item.image}" alt="${open ? item.title : '尚未解鎖的收藏'}"></div>
            <div class="album-info"><span class="tag">${open ? item.type : '尚未發現'}</span><h3>${open ? item.title : '？？？'}</h3><p>${open ? item.text : item.hint}</p></div>
          </${tag}>`;
        }).join('')}
      </div></section>`;
    }).join('')}`;
  state.seen = [...new Set([...state.seen, ...state.unlocked])]; saveState(); updateChrome();
}

function openCollectible(id) {
  const item = byId(id);
  if (!item || !state.unlocked.includes(id)) return;
  document.querySelector('#collection-dialog-content').innerHTML = `
    <div class="collection-detail ${item.group === 'character' ? 'personal' : ''}">
      <div class="collection-detail-visual"><img src="${item.image}" alt="${item.title}"></div>
      <div class="collection-detail-copy">
        <span class="tag">${item.type}</span>
        <h2>${item.title}</h2>
        <p>${item.text}</p>
        <p class="collection-hint">收集線索｜${item.hint}</p>
      </div>
    </div>`;
  collectionDialog.showModal();
}

function openMission(id) {
  selectedMission = missions.find(m => m.id === id);
  if (!selectedMission || state.completedToday.includes(id) || state.actions <= 0) return;
  selectedCharacters = [];
  drawMissionDialog();
  missionDialog.showModal();
}

function drawMissionDialog() {
  document.querySelector('#mission-dialog-content').innerHTML = `
    <p class="eyebrow">${selectedMission.owner}・${selectedMission.kind}</p>
    <h2>${selectedMission.title}</h2>
    <p>${selectedMission.desc}</p>
    <h3>選擇一至兩位參與成員</h3>
    <div class="employee-picker">
      ${characters.map(c => `<button class="employee-choice ${selectedCharacters.includes(c.id) ? 'selected' : ''}" type="button" data-character="${c.id}" style="--avatar:${c.color}"><span class="dot"><img src="${c.avatar}" alt=""></span><span><strong>${c.name}</strong><br><small>${c.style}</small></span></button>`).join('')}
    </div>
    <p class="hint">沒有最佳人選。不同組合會留下不同對話與收藏線索。</p>
    <div class="button-row"><button class="button" type="button" data-start-mission ${selectedCharacters.length ? '' : 'disabled'}>開始任務</button></div>`;
}

function toggleCharacter(id) {
  if (selectedCharacters.includes(id)) selectedCharacters = selectedCharacters.filter(item => item !== id);
  else if (selectedCharacters.length < 2) selectedCharacters.push(id);
  else showToast('一次最多選擇兩位成員');
  drawMissionDialog();
}

function completeMission() {
  const mission = selectedMission;
  const available = mission.reward.filter(id => !state.unlocked.includes(id));
  let rewardId = available[0] || mission.reward[Math.floor(Math.random() * mission.reward.length)];
  const isNew = !state.unlocked.includes(rewardId);
  if (isNew) state.unlocked.push(rewardId);
  const newPersonalCards = selectedCharacters
    .map(id => character(id).cardId)
    .filter(id => !state.unlocked.includes(id));
  const newBonusCards = (mission.bonus || []).filter(id => !state.unlocked.includes(id));
  state.unlocked.push(...newPersonalCards, ...newBonusCards);
  state.actions -= 1;
  state.completedToday = [...new Set([...state.completedToday, mission.id])];
  saveState();
  missionDialog.close();
  const reward = byId(rewardId);
  const names = selectedCharacters.map(id => character(id).name).join('和');
  document.querySelector('#result-dialog-content').innerHTML = `
    <img class="unlock-image" src="${reward.image}" alt="${reward.title}">
    <p class="eyebrow">${isNew ? 'NEW COLLECTION' : 'MEMORY STICKER'}</p>
    <h2>${isNew ? reward.title : '獲得回憶貼紙'}</h2>
    <p>${names}完成了「${mission.title}」。${mission.prompt}</p>
    <p>${isNew ? reward.text : `「${reward.title}」已經收集過，這次轉成一枚回憶貼紙。`}${newPersonalCards.length ? ` 同時新增 ${newPersonalCards.length} 張個人圖鑑卡。` : ''}${newBonusCards.length ? ` 並取得限定服裝卡「${newBonusCards.map(id => byId(id).title).join('、')}」。` : ''}</p>
    <button class="button" type="button" data-finish-result>${state.actions ? '繼續今天' : '查看今日結束'}</button>`;
  resultDialog.showModal();
}

function nextDay() { state.day += 1; state.actions = MAX_DAILY_ACTIONS; state.completedToday = []; saveState(); render(); showToast(`第 ${state.day} 天開始了`); }
function showToast(message) { const node = document.createElement('div'); node.className = 'toast'; node.textContent = message; document.body.append(node); setTimeout(() => node.remove(), 1800); }

async function installApp() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    return;
  }
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  showToast(isIOS ? '請點 Safari 分享，再選擇「加入主畫面」' : '請開啟瀏覽器選單，選擇「安裝應用程式」');
}

document.addEventListener('click', event => {
  const view = event.target.closest('[data-view]')?.dataset.view;
  if (view) { state.view = view; saveState(); render(); return; }
  const missionId = event.target.closest('[data-mission]')?.dataset.mission;
  if (missionId) { openMission(missionId); return; }
  const characterId = event.target.closest('[data-character]')?.dataset.character;
  if (characterId) { toggleCharacter(characterId); return; }
  const collectibleId = event.target.closest('[data-open-collectible]')?.dataset.openCollectible;
  if (collectibleId) { openCollectible(collectibleId); return; }
  if (event.target.closest('[data-install-app]')) { installApp(); return; }
  if (event.target.closest('[data-close]')) missionDialog.close();
  if (event.target.closest('[data-close-collection]')) collectionDialog.close();
  if (event.target.closest('[data-start-mission]')) completeMission();
  if (event.target.closest('[data-finish-result]')) { resultDialog.close(); state.view = state.actions ? 'missions' : 'missions'; saveState(); render(); }
  if (event.target.closest('[data-next-day]')) nextDay();
});

collectionDialog.addEventListener('click', event => {
  if (event.target === collectionDialog) collectionDialog.close();
});

render();

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  showToast('築城日常已安裝完成');
  if (state.view === 'office') render();
});

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

