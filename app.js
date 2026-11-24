(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const TG = 'nho1y';
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ================= i18n ================= */
const RU = {
  'nav.services':'Услуги','nav.prices':'Цены','nav.safety':'Безопасность','nav.process':'Как это работает','nav.team':'Команда','nav.reviews':'Отзывы','nav.join':'Стать помощником','nav.book':'Заказать',
  'hero.eyebrow':'Уборка · Генеральная уборка · Стирка · Глажка',
  'hero.mess':'Беспорядок<br>случается.',
  'hero.scroll':'Листайте, чтобы убрать',
  'hero.tag':'Надёжная помощь по дому от проверенных людей по понятной цене.',
  'hero.book':'Заказать уборку','hero.prices':'Смотреть цены',
  'about.eyebrow':'01 — Что такое HOMIE',
  'about.title':'Мы продаём не просто уборку.<br><span class="chrome-dark">Мы продаём уверенность.</span>',
  'about.lead':'HOMIE соединяет вас с проверенными независимыми помощниками. Выберите услугу и время, сразу увидьте полную стоимость — и получите уборку по единому чек-листу. Каждый раз.',
  'p1.t':'Проверенные помощники','p1.d':'Проверка личности, опыта и надёжности — до того, как кто-то войдёт в ваш дом.',
  'p2.t':'Стабильное качество','p2.d':'Единый чек-лист, контроль качества и оценка после каждого заказа.',
  'p3.t':'Прозрачные цены','p3.d':'Итоговая стоимость видна до бронирования. Никаких неожиданных доплат.',
  's1.t':'Уборка','s1.d':'Регулярная уборка квартир и домов.',
  's2.t':'Генеральная уборка','s2.d':'Глубокая уборка от потолка до плинтуса.',
  's3.t':'Стирка','s3.d':'Стирка и уход за одеждой с доставкой.',
  's4.t':'Глажка','s4.d':'Рубашки, платья и постельное бельё.',
  's5.t':'Другие услуги','s5.d':'Окна, холодильник, духовка, балкон и другое.',
  'marquee':'ДОВЕРИЕ · НАДЁЖНОСТЬ · ПРОЗРАЧНОСТЬ · УДОБСТВО · КАЧЕСТВО · ОТВЕТСТВЕННОСТЬ · ДОВЕРИЕ · НАДЁЖНОСТЬ · ПРОЗРАЧНОСТЬ · УДОБСТВО · КАЧЕСТВО · ОТВЕТСТВЕННОСТЬ ·&nbsp;',
  'mop.hint':'Двигайте швабру',
  'prices.eyebrow':'02 — Понятная цена',
  'prices.title':'Два режима.<br>Одна понятная цена.',
  'mode.home':'Вы дома во время уборки. Встречаете помощника, показываете, что важно, и отдыхаете.',
  'mode.away':'Вас нет дома. Помощник получает доступ по согласованным правилам — передача ключей или код двери, камера 360° включена, в конце — фотоотчёт.',
  'from':'от','cur':'сум','perm2':'сум / м²','perkg':'сум / кг','peritem':'сум / вещь',
  'pr1':'До 40 м². +6 000 за каждый следующий м². 2–3 часа.',
  'pr2':'Минимум 650 000. Включая шкафы внутри, плитку, плинтусы.',
  'pr3':'Минимум 5 кг. Забор и доставка включены.',
  'pr4':'Минимум 10 вещей. Рубашки, платья, бельё.',
  'calc.title':'Калькулятор стоимости','calc.service':'Услуга','calc.mode':'Режим','calc.extras':'Дополнительно',
  'x.windows':'Окна','x.fridge':'Холодильник внутри','x.oven':'Духовка','x.balcony':'Балкон',
  'calc.total':'Итоговая стоимость','calc.note':'Это цена, которую вы платите. Без скрытых доплат.',
  'calc.book':'Заказать по этой цене','calc.mess':'Снова намусорить',
  'safe.eyebrow':'03 — Безопасность',
  'safe.title':'Камера 360° на <span class="chrome-light">каждом помощнике.</span>',
  'safe.lead':'Во время каждой уборки на помощнике включена нательная камера 360°. Она защищает ваши вещи от потерь и краж — а помощника от ложных обвинений.',
  'sf1.t':'Запись от начала до конца','sf1.d':'Камера включается у вашей двери и выключается, когда помощник уходит.',
  'sf2.t':'Приватно и зашифровано','sf2.d':'Запись хранится в зашифрованном виде 30 дней и открывается только при спорной ситуации.',
  'sf3.t':'Защита от потерь и порчи','sf3.d':'Если во время заказа что-то пропало или сломалось, HOMIE разбирается и компенсирует.',
  'sf4.t':'Проверенная личность','sf4.d':'Каждый помощник проходит проверку документов, опыта и личное собеседование.',
  'proc.eyebrow':'04 — Как это работает','proc.title':'Шесть шагов к чистому дому.',
  'st1.t':'Выберите услугу','st1.d':'Уборка, генеральная уборка, стирка или глажка.',
  'st2.t':'Дата и время','st2.d':'Фиксированные слоты, которые мы точно можем гарантировать.',
  'st3.t':'Итоговая цена','st3.d':'Подтверждается до бронирования.',
  'st4.t':'Назначаем проверенного помощника','st4.d':'Подбирает HOMIE, а не случай.',
  'st5.t':'Уборка по чек-листу','st5.d':'Один стандарт на каждом заказе.',
  'st6.t':'Оплата и отзыв','st6.d':'Ваша оценка держит качество на высоте.',
  'cl.title':'Стандартный чек-лист',
  'cl1':'Пыль со всех поверхностей','cl2':'Пылесос и влажная уборка полов','cl3':'Кухонные поверхности и мойка','cl4':'Дезинфекция ванной и туалета','cl5':'Зеркала и стекло до блеска','cl6':'Кровати заправлены, мусор вынесен','cl7':'Фотоотчёт отправлен',
  'cl.foot':'Качество проверено · Оценено вами',
  'team.eyebrow':'05 — Команда','team.title':'Люди, которые стоят за <span class="chrome-light">HOMIE.</span>',
  'mis.m':'Миссия','mis.mt':'Облегчить повседневную жизнь людей, предоставляя надёжные, удобные и доступные бытовые услуги.',
  'mis.v':'Видение','mis.vt':'Стать надёжной платформой бытовых услуг, делая профессиональную помощь по дому доступной каждому.',
  'rev.eyebrow':'06 — Отзывы','rev.title':'Чистые дома. Честные слова.',
  'r1':'Заказала за две минуты, цена была ровно как на сайте. Квартира выглядела как номер в отеле.',
  'r2':'Пользовался режимом I’m Away — получил фотоотчёт, пока был на работе. Очень спокойно.',
  'r3':'Чек-лист реально работает: убрано в каждом углу. Хотелось бы больше вечерних слотов.',
  'pilot':'клиент пилота','rev.leave':'Оставить отзыв','ph.name':'Ваше имя','ph.review':'Как прошла уборка?','cancel':'Отмена','rev.send':'Отправить в Telegram',
  'book.eyebrow':'07 — Бронирование','book.title':'Закажите <span class="chrome-light">чистый дом.</span>',
  'book.lead':'Заполните форму — мы подтвердим помощника в течение 15 минут. Удобнее переписка? Напишите нам в Telegram.',
  'f.date':'Дата','f.time':'Время','f.address':'Адрес','ph.addr':'Район, улица, дом, квартира','f.name':'Имя','f.phone':'Телефон','book.send':'Отправить заявку',
  'join.eyebrow':'08 — Карьера','join.title':'Станьте <span class="chrome-dark">помощником HOMIE.</span>',
  'join.lead':'Гибкий график, честная оплата за каждый заказ, обучение по стандарту HOMIE. Мы проверяем каждого — поэтому нам доверяют клиенты.',
  'jp1':'Оплата за каждый выполненный заказ','jp2':'Сами выбираете слоты','jp3':'Бесплатное обучение и инвентарь',
  'f.age':'Возраст','f.district':'Район','ph.district':'например, Юнусабад','f.exp':'Опыт',
  'e0':'Без опыта','e1':'Меньше 1 года','e2':'1–3 года','e3':'Больше 3 лет',
  'f.services':'Что вы умеете?','f.about':'О себе','ph.about':'Пара слов о себе','join.send':'Откликнуться',
  'foot':'© 2026 HOMIE · Ташкент · Проект по предпринимательству'
};
const T = {
  en:{area:'Area, m²',kg:'Laundry, kg',items:'Items',ok:'Request accepted',okText:(n,s,d,t,no)=>`${n}, your ${s} is booked for ${d} at ${t}. Order ${no}. We will confirm your verified helper within 15 minutes.`,
      joinOk:'Application received',joinText:n=>`Thank you, ${n}! Artem from our People & Quality team will call you within 2 days to invite you to an interview.`,
      revOk:'Thank you!',revText:'Telegram is opening with your review — just press Send. The text is also copied, in case you need to paste it.',
      estimate:p=>`Estimated price: ${p} UZS`,cur:'UZS',
      team:[['Amalia','Chief Executive Officer','CEO','Strategy, key decisions and leading the team.'],['Daniil','Chief Operating Officer','COO','Bookings, scheduling helpers and daily operations.'],['Nikita','Chief Technology Officer','CTO','Website, booking system, payments and security.'],['Yulia','Chief Creative & Marketing Officer','CCMO','Brand, design, marketing and communication.'],['Artem','Chief People & Quality Officer','CPQO','Hiring and verifying helpers, training, quality control.']],
      msg:(r,n,t)=>`HOMIE review ${'★'.repeat(r)}${'☆'.repeat(5-r)}\nName: ${n}\n\n${t}`, anon:'Guest',
      close:'Close — request placed',play:'Play & earn bonuses',
      gPick:'Pick a game',gPickSub:'30 seconds on the clock. Every result earns bonus points, a new record gives +25 extra. 1 point = 1 000 UZS off your next order (up to 15%).',
      dishes:'Wash the dishes',iron:'Iron the clothes',record:n=>`Record: ${n}`,
      rulesDishes:'Hold and scrub every plate with the sponge until it shines. Wash as many as you can in 30 seconds.',
      rulesIron:'Hold and glide the iron over every wrinkle. Keep moving — if you hold the iron still, it burns the shirt!',
      start:'Start',hintDishes:'Hold and scrub the plate',hintIron:'Glide over the wrinkles — don’t hold still!',
      timeUp:'Time!',newRec:'New record!',platesLbl:'plates washed',itemsLbl:'items ironed',
      earn:(p,s)=>`+${p} bonus = −${s} UZS`,bonusNote:b=>`Your balance: ${b} points. Use them in the booking form on your next order.`,
      again:'Play again',other:'Other game',done:'Close',clean:['Clean!','Shiny!','Perfect!','Spotless!'],burnt:'Burnt!',
      sec:'sec',scoreLbl:'score',balLbl:'bonus',
      useBonus:(b,s)=>`Use ${b} bonus points: −${s} UZS`,bonusUsed:s=>` Bonus discount applied: −${s} UZS.`},
  ru:{area:'Площадь, м²',kg:'Стирка, кг',items:'Вещей',ok:'Заявка принята',okText:(n,s,d,t,no)=>`${n}, ваша услуга «${s}» забронирована на ${d} в ${t}. Заказ ${no}. Мы подтвердим проверенного помощника в течение 15 минут.`,
      joinOk:'Анкета получена',joinText:n=>`Спасибо, ${n}! Артём из отдела персонала и качества позвонит вам в течение 2 дней и пригласит на собеседование.`,
      revOk:'Спасибо!',revText:'Открывается Telegram с вашим отзывом — просто нажмите «Отправить». Текст также скопирован, если понадобится вставить.',
      estimate:p=>`Предварительная стоимость: ${p} сум`,cur:'сум',
      team:[['Амалия','Генеральный директор','CEO','Стратегия, ключевые решения и управление командой.'],['Даниил','Операционный директор','COO','Бронирования, распределение заказов и ежедневная работа.'],['Никита','Технический директор','CTO','Сайт, система бронирования, платежи и безопасность.'],['Юлия','Креативный директор и директор по маркетингу','CCMO','Бренд, дизайн, маркетинг и коммуникация.'],['Артём','Директор по персоналу и качеству','CPQO','Подбор и проверка помощников, обучение, контроль качества.']],
      msg:(r,n,t)=>`Отзыв HOMIE ${'★'.repeat(r)}${'☆'.repeat(5-r)}\nИмя: ${n}\n\n${t}`, anon:'Гость',
      close:'Закрыть — заявка оформлена',play:'Сыграть и получить бонусы',
      gPick:'Выберите игру',gPickSub:'30 секунд на часах. За каждый результат — бонусы, за новый рекорд ещё +25. 1 бонус = 1 000 сум скидки на следующий заказ (до 15%).',
      dishes:'Помыть посуду',iron:'Погладить вещи',record:n=>`Рекорд: ${n}`,
      rulesDishes:'Зажмите и трите каждую тарелку губкой, пока она не заблестит. Вымойте как можно больше за 30 секунд.',
      rulesIron:'Зажмите и ведите утюгом по всем складкам. Не останавливайтесь — если держать утюг на месте, рубашка прожжётся!',
      start:'Старт',hintDishes:'Зажмите и трите тарелку',hintIron:'Ведите по складкам — не задерживайтесь!',
      timeUp:'Время вышло!',newRec:'Новый рекорд!',platesLbl:'тарелок вымыто',itemsLbl:'вещей поглажено',
      earn:(p,s)=>`+${p} бонусов = −${s} сум`,bonusNote:b=>`Ваш баланс: ${b} бонусов. Используйте их в форме бронирования при следующем заказе.`,
      again:'Ещё раз',other:'Другая игра',done:'Закрыть',clean:['Чисто!','Блестит!','Идеально!','Без пятнышка!'],burnt:'Прожгли!',
      sec:'сек',scoreLbl:'счёт',balLbl:'бонусы',
      useBonus:(b,s)=>`Списать бонусы (${b}): −${s} сум`,bonusUsed:s=>` Скидка бонусами: −${s} сум.`}
};
const EN = {}, ENPH = {};
$$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (!(k in EN)) EN[k] = el.innerHTML; });
$$('[data-i18n-ph]').forEach(el => { const k = el.dataset.i18nPh; if (!(k in ENPH)) ENPH[k] = el.placeholder; });
let lang = 'en';
try { lang = localStorage.getItem('homie-lang') || 'en'; } catch (e) {}
const t = () => T[lang];

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  $$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; const v = l === 'ru' ? RU[k] : EN[k]; if (v != null) el.innerHTML = v; });
  $$('[data-i18n-ph]').forEach(el => { const k = el.dataset.i18nPh; el.placeholder = l === 'ru' ? (RU[k] || ENPH[k]) : ENPH[k]; });
  $$('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
  try { localStorage.setItem('homie-lang', l); } catch (e) {}
  renderTeam(); updateCalc(true); updateBookPrice();
}
$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ================= nav ================= */
const nav = $('#nav');
$('#burger').addEventListener('click', () => nav.classList.toggle('open'));
$$('#navLinks a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

/* ================= team ================= */
function renderTeam() {
  $('#teamGrid').innerHTML = t().team.map((m, i) => `
    <article class="member reveal in">
      <figure><img src="assets/team/${i + 1}.jpg" alt="${m[0]}" loading="lazy"><span class="role chrome-light">${m[2]}</span></figure>
      <h4>${m[0]}</h4><p class="pos">${m[1]}</p><p>${m[3]}</p>
    </article>`).join('');
}

/* ================= reveal + checklist ================= */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => io.observe(el));
const cl = $('#checklist');
new IntersectionObserver((es, o) => es.forEach(e => {
  if (!e.isIntersecting) return;
  $$('li', cl).forEach((li, i) => setTimeout(() => li.classList.add('done'), 500 + i * 380));
  o.disconnect();
}), { threshold: .4 }).observe(cl);

/* ================= hero video scrub ================= */
const hero = $('#hero'), video = $('#heroVideo'), intro = $('#heroIntro'), fin = $('#heroFinal');
let vCur = 0, vTarget = 0;
video.addEventListener('loadedmetadata', () => { video.pause(); });
const unlock = () => { const p = video.play(); if (p) p.then(() => video.pause()).catch(() => {}); window.removeEventListener('touchstart', unlock); };
window.addEventListener('touchstart', unlock, { passive: true });

function heroFrame() {
  const r = hero.getBoundingClientRect(), vh = innerHeight;
  const p = clamp(-r.top / (r.height - vh), 0, 1);
  const dur = video.duration || 8;
  vTarget = clamp(p / .82, 0, 1) * (dur - .06);
  intro.style.opacity = clamp(1 - p / .22, 0, 1);
  intro.style.transform = `translateY(${-p * 120}px)`;
  const f = clamp((p - .7) / .2, 0, 1);
  fin.style.opacity = f;
  fin.style.transform = `translateY(${(1 - f) * 30}px)`;
  fin.classList.toggle('live', f > .5);
  nav.classList.toggle('solid', r.bottom < 80 || scrollY > r.height - vh);
}
function videoTick() {
  if (video.readyState >= 1) {
    vCur += (vTarget - vCur) * (reduced ? 1 : .2);
    if (!video.seeking && Math.abs(video.currentTime - vCur) > .015) {
      try { video.currentTime = vCur; } catch (e) {}
    }
  }
}

/* ================= apartment scene ================= */
function rng(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }
function roomBase(P) {
  let planks = '';
  for (let i = -12; i <= 12; i++) planks += `<line x1="${800 + i * 70}" y1="604" x2="${800 + i * 260}" y2="900"/>`;
  let city = ''; const r = rng(7); let x = 134;
  while (x < 506) { const w = 26 + r() * 40, h = 60 + r() * 200; city += `<rect x="${x}" y="${506 - h}" width="${w}" height="${h}" fill="${r() > .5 ? '#bdbdbd' : '#c9c9c9'}"/>`; x += w + 4; }
  return `
  <defs>
    <linearGradient id="${P}wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6e6e6"/><stop offset="1" stop-color="#cdcdcd"/></linearGradient>
    <linearGradient id="${P}floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bdbdbd"/><stop offset="1" stop-color="#a3a3a3"/></linearGradient>
    <linearGradient id="${P}glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7f7f7"/><stop offset="1" stop-color="#d8d8d8"/></linearGradient>
    <linearGradient id="${P}sofa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8f8f8f"/><stop offset="1" stop-color="#6a6a6a"/></linearGradient>
    <radialGradient id="${P}glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <filter id="${P}blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8"/></filter>
  </defs>
  <rect width="1600" height="600" fill="url(#${P}wall)"/>
  <rect y="600" width="1600" height="300" fill="url(#${P}floor)"/>
  <g stroke="rgba(0,0,0,.07)" stroke-width="2">${planks}</g>
  <rect y="588" width="1600" height="16" fill="#efefef"/>
  <polygon points="140,604 520,604 700,900 60,900" fill="#fff" opacity=".18"/>
  <!-- window -->
  <rect x="118" y="86" width="404" height="434" fill="#f4f4f4"/>
  <rect x="134" y="102" width="372" height="404" fill="url(#${P}glass)"/>
  <g opacity=".9">${city}</g>
  <rect x="134" y="102" width="372" height="404" fill="#fff" opacity=".25"/>
  <rect x="314" y="102" width="12" height="404" fill="#f4f4f4"/>
  <rect x="134" y="270" width="372" height="10" fill="#f4f4f4"/>
  <rect x="100" y="516" width="440" height="16" rx="3" fill="#f7f7f7"/>
  <!-- picture -->
  <rect x="1050" y="150" width="300" height="210" fill="#f6f6f6" stroke="#222" stroke-width="10"/>
  <circle cx="1160" cy="255" r="58" fill="#c9c9c9"/><circle cx="1160" cy="255" r="58" fill="none" stroke="#7a7a7a" stroke-width="3"/>
  <line x1="1230" y1="200" x2="1310" y2="320" stroke="#333" stroke-width="6"/>
  <!-- lamp -->
  <ellipse cx="1460" cy="300" rx="140" ry="110" fill="url(#${P}glow)"/>
  <ellipse cx="1460" cy="642" rx="52" ry="10" fill="#1d1d1d"/>
  <rect x="1456" y="300" width="7" height="342" fill="#262626"/>
  <path d="M1395 300 L1525 300 L1497 228 L1423 228 Z" fill="#f2f2f2" stroke="#262626" stroke-width="3"/>
  <!-- plant -->
  <g fill="#6e6e6e">
    <ellipse cx="585" cy="470" rx="16" ry="62" transform="rotate(-24 585 470)"/>
    <ellipse cx="605" cy="455" rx="15" ry="70" transform="rotate(6 605 455)"/>
    <ellipse cx="628" cy="478" rx="15" ry="58" transform="rotate(30 628 478)" fill="#5a5a5a"/>
    <ellipse cx="572" cy="515" rx="13" ry="44" transform="rotate(-52 572 515)" fill="#808080"/>
    <ellipse cx="642" cy="520" rx="13" ry="42" transform="rotate(55 642 520)" fill="#808080"/>
  </g>
  <path d="M570 545 L640 545 L630 645 L580 645 Z" fill="#2e2e2e"/>
  <!-- rug -->
  <ellipse cx="930" cy="735" rx="470" ry="86" fill="#b3b3b3"/>
  <ellipse cx="930" cy="735" rx="430" ry="70" fill="none" stroke="#c4c4c4" stroke-width="4"/>
  <!-- sofa -->
  <ellipse cx="930" cy="650" rx="330" ry="22" fill="#000" opacity=".18"/>
  <rect x="660" y="415" width="540" height="160" rx="34" fill="url(#${P}sofa)"/>
  <rect x="640" y="540" width="580" height="86" rx="22" fill="#7a7a7a"/>
  <rect x="616" y="470" width="74" height="166" rx="28" fill="#868686"/>
  <rect x="1170" y="470" width="74" height="166" rx="28" fill="#868686"/>
  <rect x="712" y="452" width="160" height="96" rx="22" fill="#a6a6a6"/>
  <rect x="1000" y="452" width="160" height="96" rx="22" fill="#a6a6a6"/>
  <rect x="650" y="632" width="12" height="22" fill="#1e1e1e"/><rect x="1198" y="632" width="12" height="22" fill="#1e1e1e"/>
  <!-- table -->
  <ellipse cx="930" cy="790" rx="170" ry="14" fill="#000" opacity=".15"/>
  <line x1="800" y1="712" x2="788" y2="790" stroke="#222" stroke-width="5"/>
  <line x1="1060" y1="712" x2="1072" y2="790" stroke="#222" stroke-width="5"/>
  <rect x="780" y="702" width="300" height="16" rx="8" fill="#f7f7f7" stroke="#b5b5b5" stroke-width="2"/>`;
}
function roomDirt() {
  const r = rng(42); let specks = '', bunnies = '', stains = '';
  for (let i = 0; i < 180; i++) { const x = r() * 1600, y = r() < .6 ? 600 + r() * 300 : r() * 600; specks += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(1 + r() * 2.6).toFixed(1)}"/>`; }
  for (let i = 0; i < 9; i++) bunnies += `<circle cx="${(60 + r() * 1480).toFixed(0)}" cy="${(612 + r() * 26).toFixed(0)}" r="${(8 + r() * 12).toFixed(0)}"/>`;
  [[300, 770, 90, 26], [1250, 820, 120, 30], [560, 690, 60, 16], [1400, 715, 70, 18], [960, 860, 110, 22], [150, 860, 80, 22]].forEach(([x, y, a, b]) => {
    stains += `<path d="M${x - a} ${y} C${x - a} ${y - b * 1.4} ${x + a * .2} ${y - b * 1.1} ${x + a * .4} ${y - b * .6} C${x + a} ${y - b} ${x + a * 1.1} ${y + b * .4} ${x + a * .5} ${y + b * .8} C${x} ${y + b * 1.3} ${x - a * .8} ${y + b} ${x - a} ${y} Z"/>`;
  });
  return `
  <rect width="1600" height="900" fill="#3c3c3c" opacity=".13"/>
  <g filter="url(#dblur)" fill="#7a7a7a" opacity=".55">
    <ellipse cx="220" cy="180" rx="60" ry="30"/><ellipse cx="420" cy="380" rx="70" ry="40"/><ellipse cx="260" cy="440" rx="40" ry="22"/><ellipse cx="450" cy="160" rx="34" ry="20"/>
  </g>
  <rect x="134" y="102" width="372" height="404" fill="#6a6a6a" opacity=".16"/>
  <g stroke="#555" stroke-width="1.3" fill="none" opacity=".55">
    <path d="M1600 0 L1470 120 M1600 0 L1500 140 M1600 0 L1540 150 M1600 0 L1450 80"/>
    <path d="M1478 112 Q1520 100 1548 130 M1505 70 Q1545 75 1560 110 M1540 40 Q1570 55 1575 80"/>
  </g>
  <g fill="#4a4a4a" opacity=".32">${stains}</g>
  <g fill="#555" opacity=".45">${specks}</g>
  <g fill="#8a8a8a" opacity=".8" filter="url(#dblur)">${bunnies}</g>
  <!-- blanket on sofa -->
  <path d="M860 470 C900 440 980 445 990 480 C1010 540 980 600 1040 640 L900 652 C870 610 840 560 860 470 Z" fill="#9c9c9c" stroke="#7a7a7a" stroke-width="3"/>
  <!-- cups + crumbs on table -->
  <rect x="842" y="672" width="30" height="32" rx="4" fill="#ededed" stroke="#888" stroke-width="2"/>
  <ellipse cx="857" cy="672" rx="15" ry="4" fill="#5a5a5a"/>
  <rect x="990" y="680" width="26" height="24" rx="4" fill="#dcdcdc" stroke="#888" stroke-width="2" transform="rotate(12 1003 692)"/>
  <!-- pizza box -->
  <g transform="rotate(-8 1240 770)"><path d="M1160 760 L1320 760 L1300 800 L1140 800 Z" fill="#cfcfcf" stroke="#7d7d7d" stroke-width="3"/><path d="M1140 800 L1300 800 L1300 812 L1140 812 Z" fill="#a9a9a9"/></g>
  <!-- papers -->
  <g fill="#f3f3f3" stroke="#8d8d8d" stroke-width="2">
    <path d="M410 790 l22 -14 l20 6 l8 20 l-16 16 l-26 -4 z"/>
    <path d="M1360 860 l18 -16 l26 4 l4 22 l-20 12 l-24 -6 z"/>
    <path d="M700 850 l16 -10 l22 8 l-4 18 l-24 4 z"/>
  </g>
  <!-- sock + shirt -->
  <path d="M250 700 c20 -6 40 -4 46 8 c6 12 -6 30 -24 32 l-30 4 c-10 0 -12 -12 -2 -16 l14 -6 z" fill="#5e5e5e"/>
  <path d="M480 650 C520 630 580 640 600 660 L620 700 L560 710 L540 690 L520 720 L470 700 Z" fill="#8a8a8a" stroke="#666" stroke-width="2"/>
  <!-- tilted cushion on floor -->
  <rect x="1090" y="660" width="120" height="70" rx="20" fill="#a0a0a0" transform="rotate(-18 1150 695)"/>`;
}
function roomClean() {
  const spark = (x, y, s, d) => `<path class="spk" style="animation-delay:${d}s" transform="translate(${x} ${y}) scale(${s})" d="M0 -20 C2 -4 4 -2 20 0 C4 2 2 4 0 20 C-2 4 -4 2 -20 0 C-4 -2 -2 -4 0 -20 Z" fill="#fff"/>`;
  return `
  <style>.spk{transform-box:fill-box;transform-origin:center;animation:spk 2.4s ease-in-out infinite}@keyframes spk{0%,100%{opacity:0}50%{opacity:1}}</style>
  <linearGradient id="cshine" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
  <rect y="604" width="1600" height="200" fill="url(#cshine)"/>
  <g stroke="#fff" stroke-width="10" opacity=".55"><line x1="180" y1="250" x2="260" y2="150"/><line x1="200" y1="300" x2="300" y2="175"/><line x1="380" y1="470" x2="470" y2="355"/></g>
  ${spark(300, 170, 1.4, 0)}${spark(470, 420, 1, .7)}${spark(900, 700, 1.2, 1.2)}${spark(1180, 240, .9, .4)}${spark(1320, 820, 1.3, 1.6)}${spark(640, 820, 1, 2)}${spark(1520, 640, .8, .9)}${spark(1060, 470, .8, 1.9)}`;
}
const dirty = $('#roomDirty'), clean = $('#roomClean');
dirty.innerHTML = roomBase('d') + roomDirt();
clean.innerHTML = roomBase('c') + roomClean();

/* ================= chrome mop ================= */
(() => {
  let strands = ''; const r = rng(3);
  for (let i = 0; i < 36; i++) {
    const x = 64 + i * 5.1, w = (r() - .5) * 26, end = x + (x - 150) * .35 + (r() - .5) * 14;
    const c = ['#9a9a9a', '#858585', '#b0b0b0', '#727272'][i % 4];
    strands += `<path d="M${x.toFixed(1)} 728 C${(x + w).toFixed(1)} 780 ${(x - w).toFixed(1)} 830 ${end.toFixed(1)} ${(874 + r() * 16).toFixed(0)}" stroke="${c}"/>`;
  }
  $('#mopSvg').innerHTML = `
  <defs>
    <linearGradient id="pole" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2a2a2a"/><stop offset=".25" stop-color="#ffffff"/><stop offset=".45" stop-color="#8d8d8d"/><stop offset=".62" stop-color="#141414"/><stop offset=".85" stop-color="#d4d4d4"/><stop offset="1" stop-color="#4d4d4d"/></linearGradient>
    <linearGradient id="bracket" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#8a8a8a"/><stop offset=".55" stop-color="#1a1a1a"/><stop offset="1" stop-color="#c8c8c8"/></linearGradient>
  </defs>
  <rect x="141" y="16" width="18" height="690" rx="9" fill="url(#pole)"/>
  <rect x="138" y="16" width="24" height="130" rx="12" fill="#121212"/>
  <g stroke="#2e2e2e" stroke-width="2">${[40, 60, 80, 100, 120].map(y => `<line x1="140" y1="${y}" x2="160" y2="${y}"/>`).join('')}</g>
  <circle cx="150" cy="16" r="13" fill="url(#bracket)"/>
  <rect x="136" y="690" width="28" height="26" rx="6" fill="url(#bracket)"/>
  <rect x="56" y="712" width="188" height="22" rx="10" fill="url(#bracket)"/>
  <g id="strands" fill="none" stroke-width="7" stroke-linecap="round" style="transform-origin:150px 730px">${strands}</g>`;
})();

const calcBox = $('#calc');
const prices = $('#prices'), scene = $('#scene'), mop = $('#mop'), hint = $('#mopHint'), strandsEl = $('#strands');
let mopX = -9999, shown = -9999, cleanPct = 0, dragging = false, grabOff = 0, baseP = 0, lastP = 0;
const mopW = () => mop.getBoundingClientRect().width || 200;
const headOf = x => x + mopW() * (150 / 260);
const startX = () => -mopW() * .35;
const endX = () => scene.clientWidth - mopW() * .5;

function mopScrollTarget() {
  const vh = innerHeight, cb = calcBox.getBoundingClientRect().bottom;
  const p = clamp((vh * .92 - cb) / (vh * .52), 0, 1);
  lastP = p;
  const q = clamp((p - baseP) / Math.max(.0001, 1 - baseP), 0, 1);
  return startX() + q * (endX() - startX());
}
function mopTick() {
  if (mopX < -9000) { mopX = shown = startX(); }
  if (!dragging) { const tgt = mopScrollTarget(); if (tgt > mopX) mopX = tgt; }
  const prev = shown;
  shown += (mopX - shown) * (dragging ? .5 : .12);
  const vel = shown - prev;
  const tilt = -8 + clamp(-vel * .9, -16, 14);
  mop.style.transform = `translateX(${shown}px) rotate(${tilt}deg)`;
  strandsEl.style.transform = `skewX(${clamp(-vel * 1.2, -25, 25)}deg)`;
  const pct = clamp(headOf(shown) / scene.clientWidth * 100, 0, 100);
  if (pct > cleanPct) { cleanPct = pct; scene.style.setProperty('--clean', (cleanPct >= 92 ? 110 : cleanPct) + '%'); }
  if (cleanPct > 12) hint.style.opacity = 0;
}
function grab(e, jump) {
  dragging = true; mop.classList.add('drag'); hint.style.opacity = 0;
  grabOff = jump ? mopW() * (150 / 260) : e.clientX - shown;
  if (jump) mopX = e.clientX - grabOff;
  try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
}
mop.addEventListener('pointerdown', e => { e.preventDefault(); grab(e, false); });
scene.addEventListener('pointerdown', e => { if (e.target.closest('.mop')) return; if (e.pointerType === 'mouse') grab(e, true); else { grab(e, false); grabOff = e.clientX - shown; } });
const move = e => { if (dragging) mopX = clamp(e.clientX - grabOff, startX(), endX() + mopW() * .2); };
const drop = () => { dragging = false; mop.classList.remove('drag'); };
[mop, scene].forEach(el => { el.addEventListener('pointermove', move); el.addEventListener('pointerup', drop); el.addEventListener('pointercancel', drop); });
$('#mess').addEventListener('click', () => {
  cleanPct = 0; scene.style.setProperty('--clean', '0%');
  baseP = lastP; mopX = startX(); hint.style.opacity = 1;
});

let pricesVisible = false;
new IntersectionObserver(es => es.forEach(e => pricesVisible = e.isIntersecting)).observe(prices);

/* ================= main loop ================= */
let heroVisible = true;
new IntersectionObserver(es => es.forEach(e => heroVisible = e.isIntersecting)).observe(hero);
function loop() {
  if (heroVisible) { heroFrame(); videoTick(); } else nav.classList.add('solid');
  if (pricesVisible) mopTick();
  requestAnimationFrame(loop);
}

/* ================= calculator ================= */
const fmt = n => Math.round(n).toLocaleString('ru-RU').replace(/ |,/g, ' ');
const cS = $('#cService'), cQ = $('#cQty'), cQV = $('#cQtyVal'), cQL = $('#cQtyLabel'), cTot = $('#cTotal'), cExW = $('#cExtrasWrap');
const QTY = { home: ['area', 20, 200, 5, 50], deep: ['area', 20, 250, 5, 60], laundry: ['kg', 3, 30, 1, 6], ironing: ['items', 5, 60, 1, 15] };
let cMode = 'home', shownTotal = 0, totalNow = 300000, lastSvc = 'home';
function priceOf(svc, q, mode, extras) {
  let p = svc === 'home' ? 300000 + Math.max(0, q - 40) * 6000
        : svc === 'deep' ? Math.max(650000, q * 13000)
        : svc === 'laundry' ? Math.max(5, q) * 25000
        : Math.max(10, q) * 10000;
  if (mode === 'away') p += 50000;
  return p + extras;
}
function updateCalc(instant) {
  const svc = cS.value, d = QTY[svc];
  if (svc !== lastSvc) { cQ.min = d[1]; cQ.max = d[2]; cQ.step = d[3]; cQ.value = d[4]; lastSvc = svc; }
  cQL.textContent = t()[d[0]];
  cQV.textContent = cQ.value;
  cQ.style.setProperty('--p', ((cQ.value - cQ.min) / (cQ.max - cQ.min) * 100) + '%');
  const ext = svc === 'home' || svc === 'deep';
  cExW.style.display = ext ? '' : 'none';
  const extras = ext ? $$('#cExtras input:checked').reduce((s, i) => s + +i.value, 0) : 0;
  totalNow = priceOf(svc, +cQ.value, cMode, extras);
  if (instant || reduced) { shownTotal = totalNow; cTot.textContent = fmt(totalNow); }
  else countUp();
}
let raf = 0;
function countUp() {
  cancelAnimationFrame(raf);
  const from = shownTotal, to = totalNow, t0 = performance.now();
  const step = now => { const k = clamp((now - t0) / 450, 0, 1), e = 1 - Math.pow(1 - k, 3); shownTotal = from + (to - from) * e; cTot.textContent = fmt(shownTotal); if (k < 1) raf = requestAnimationFrame(step); };
  raf = requestAnimationFrame(step);
}
[cS, cQ].forEach(el => el.addEventListener('input', () => updateCalc()));
$$('#cExtras input').forEach(i => i.addEventListener('change', () => updateCalc()));
function seg(id, cb) { $$(`#${id} button`).forEach(b => b.addEventListener('click', () => { $$(`#${id} button`).forEach(x => x.classList.toggle('on', x === b)); cb(b.dataset.v); })); }
seg('cMode', v => { cMode = v; updateCalc(); });

/* ================= booking ================= */
const bS = $('#bService'), bDate = $('#bDate'); let bMode = 'home', fromCalc = false;
const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
bDate.min = today.toISOString().slice(0, 10);
const tmr = new Date(today.getTime() + 864e5); bDate.value = tmr.toISOString().slice(0, 10);
seg('bMode', v => { bMode = v; fromCalc = false; updateBookPrice(); });
bS.addEventListener('change', () => { fromCalc = false; updateBookPrice(); });
let bookDisc = 0;
function updateBookPrice() {
  const svc = bS.value, p = fromCalc ? totalNow : priceOf(svc, QTY[svc][4], bMode, 0);
  const bal = getBal();
  bookDisc = Math.min(bal * 1000, Math.floor(p * .15 / 1000) * 1000);
  $('#bBonusRow').hidden = bal <= 0;
  $('#bBonusText').textContent = t().useBonus(bal, fmt(bookDisc));
  $('#bPrice').textContent = t().estimate(fmt($('#bBonus').checked ? p - bookDisc : p));
}
$('#bBonus').addEventListener('change', updateBookPrice);
$('#cBook').addEventListener('click', () => {
  bS.value = cS.value; bMode = cMode;
  $$('#bMode button').forEach(b => b.classList.toggle('on', b.dataset.v === cMode));
  fromCalc = true; updateBookPrice();
  $('#book').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
});

function check(form, ids) {
  let ok = true;
  ids.forEach(id => {
    const el = $('#' + id); let v = el.value.trim(), bad = !v;
    if (el.type === 'tel') bad = v.replace(/\D/g, '').length < 9;
    if (el.type === 'number') bad = !v || +v < +el.min || +v > +el.max;
    if (el.type === 'date') bad = !v || v < el.min;
    el.classList.remove('bad'); void el.offsetWidth;
    if (bad) { el.classList.add('bad'); ok = false; }
  });
  const first = $('.bad', form); if (first) first.focus();
  return ok;
}
$$('input,textarea,select').forEach(el => el.addEventListener('input', () => el.classList.remove('bad')));

const modal = $('#modal'), mClose = $('#modalClose'), mPlay = $('#modalPlay');
function showModal(title, text, play) {
  $('#modalTitle').textContent = title; $('#modalText').textContent = text;
  mPlay.hidden = !play;
  mClose.textContent = play ? t().close : 'OK';
  mPlay.textContent = t().play;
  modal.hidden = false; (play ? mPlay : mClose).focus();
}
mClose.addEventListener('click', () => modal.hidden = true);
mPlay.addEventListener('click', () => { modal.hidden = true; openGame(); });
modal.addEventListener('click', e => { if (e.target === modal) modal.hidden = true; });
addEventListener('keydown', e => { if (e.key === 'Escape') { if (!game.hidden) closeGame(); else modal.hidden = true; } });

$('#bookForm').addEventListener('submit', e => {
  e.preventDefault();
  if (!check(e.target, ['bDate', 'bAddr', 'bName', 'bPhone'])) return;
  const d = new Date($('#bDate').value + 'T00:00').toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-GB', { day: 'numeric', month: 'long' });
  const no = 'HM-' + Math.floor(1000 + Math.random() * 9000);
  let text = t().okText($('#bName').value.trim(), bS.options[bS.selectedIndex].text, d, $('#bTime').value, no);
  if ($('#bBonus').checked && bookDisc > 0) { setBal(getBal() - bookDisc / 1000); text += t().bonusUsed(fmt(bookDisc)); $('#bBonus').checked = false; }
  showModal(t().ok, text, true);
  ['bAddr', 'bName', 'bPhone'].forEach(id => $('#' + id).value = '');
  updateBookPrice();
});
$('#joinForm').addEventListener('submit', e => {
  e.preventDefault();
  if (!check(e.target, ['jName', 'jPhone', 'jAge', 'jDistrict'])) return;
  showModal(t().joinOk, t().joinText($('#jName').value.trim()));
  e.target.reset();
});

/* ================= reviews ================= */
const revForm = $('#revForm'), revOpen = $('#revOpen'); let rating = 5;
const paintRate = () => $$('#rate button').forEach(b => b.classList.toggle('on', +b.dataset.v <= rating));
$$('#rate button').forEach(b => b.addEventListener('click', () => { rating = +b.dataset.v; paintRate(); }));
paintRate();
revOpen.addEventListener('click', () => { revForm.hidden = false; revOpen.hidden = true; $('#revText').focus(); });
$('#revCancel').addEventListener('click', () => { revForm.hidden = true; revOpen.hidden = false; });
revForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!check(revForm, ['revText'])) return;
  const name = $('#revName').value.trim() || t().anon, text = $('#revText').value.trim();
  const msg = t().msg(rating, name, text);
  window.open(`https://t.me/${TG}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  try { navigator.clipboard && navigator.clipboard.writeText(msg).catch(() => {}); } catch (_) {}
  const card = document.createElement('article');
  card.className = 'review new';
  card.innerHTML = `<div class="stars">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div><p></p><span></span>`;
  card.querySelector('p').textContent = text; card.querySelector('span').textContent = name;
  $('#revGrid').prepend(card);
  revForm.reset(); rating = 5; paintRate(); revForm.hidden = true; revOpen.hidden = false;
  showModal(t().revOk, t().revText);
});

/* ================= rag cursor ================= */
const rag = $('#rag');
function spark(x, y) {
  const s = document.createElement('i'); s.className = 'spark';
  s.style.left = (x + Math.random() * 30) + 'px'; s.style.top = (y + Math.random() * 30) + 'px';
  s.style.setProperty('--tx', (Math.random() * 40 - 20) + 'px'); s.style.setProperty('--ty', (Math.random() * 30 + 10) + 'px');
  document.body.appendChild(s); setTimeout(() => s.remove(), 700);
}
if (matchMedia('(pointer:fine)').matches) {
  document.documentElement.classList.add('has-rag');
  let x = -100, y = -100, cx = x, cy = y, ang = 0, n = 0;
  addEventListener('mousemove', e => { x = e.clientX; y = e.clientY; rag.style.opacity = 1; });
  document.addEventListener('mouseleave', () => rag.style.opacity = 0);
  document.addEventListener('mouseover', e => rag.classList.toggle('big', !!e.target.closest('a,button,.mop,label,select,.member')));
  addEventListener('mousedown', () => rag.classList.add('press'));
  addEventListener('mouseup', () => rag.classList.remove('press'));
  (function c() {
    const vx = x - cx; cx += vx * .4; cy += (y - cy) * .4;
    ang += (clamp(vx * 1.2, -30, 30) - ang) * .15;
    rag.style.transform = `translate(${cx - 3}px,${cy - 3}px) rotate(${ang}deg)`;
    if (!reduced && Math.hypot(x - cx, y - cy) > 12 && ++n % 2 === 0) spark(cx, cy);
    requestAnimationFrame(c);
  })();
}

/* ================= team hover ================= */
const tGrid = $('#teamGrid');
function setActive(m) {
  $$('.member', tGrid).forEach(x => { if (x !== m) { x.classList.remove('active'); const f = $('figure', x); f.style.setProperty('--rx', '0deg'); f.style.setProperty('--ry', '0deg'); } });
  if (m) m.classList.add('active');
  tGrid.classList.toggle('focus', !!m);
}
tGrid.addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse') return;
  const m = e.target.closest('.member'); setActive(m);
  if (!m) return;
  const f = $('figure', m), r = f.getBoundingClientRect();
  const px = clamp((e.clientX - r.left) / r.width, 0, 1), py = clamp((e.clientY - r.top) / r.height, 0, 1);
  f.style.setProperty('--ry', ((px - .5) * 14) + 'deg'); f.style.setProperty('--rx', ((.5 - py) * 14) + 'deg');
  f.style.setProperty('--mx', px * 100 + '%'); f.style.setProperty('--my', py * 100 + '%');
});
tGrid.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') setActive(null); });
tGrid.addEventListener('pointerup', e => {
  if (e.pointerType === 'mouse') return;
  const m = e.target.closest('.member'); setActive(m && !m.classList.contains('active') ? m : null);
});

/* ================= bonuses ================= */
const mem = {};
function sGet(k, d) { try { const v = localStorage.getItem(k); if (v != null) return JSON.parse(v); } catch (e) {} return k in mem ? mem[k] : d; }
function sSet(k, v) { mem[k] = v; try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function getBal() { return Math.max(0, Math.round(sGet('homie-bonus', 0))); }
function setBal(v) { sSet('homie-bonus', Math.max(0, Math.round(v))); }

/* ================= mini games ================= */
const game = $('#game'), cv = $('#gCanvas'), gx = cv.getContext('2d'), panel = $('#gPanel'), toastEl = $('#gToast');
const DS = 160, dirt = document.createElement('canvas'); dirt.width = dirt.height = DS;
const dx = dirt.getContext('2d', { willReadFrequently: true });
const DUR = 30;
let S = 400, gm = 'dishes', running = false, timeLeft = DUR, score = 0, c0 = 1, gRaf = 0, lastT = 0, frame = 0;
let anim = null, burnt = null, parts = [];
const ptr = { x: -999, y: -999, down: false, sx: 0, sy: 0, still: 0 };

function sizeCanvas() {
  const st = $('#gStage').getBoundingClientRect();
  S = Math.max(240, Math.floor(Math.min(st.width, st.height, 600)));
  const dpr = Math.min(devicePixelRatio || 1, 2);
  cv.width = cv.height = S * dpr; cv.style.width = cv.style.height = S + 'px';
  gx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
function platePath(c, k) { c.beginPath(); c.arc(.5 * k, .5 * k, .4 * k, 0, Math.PI * 2); }
function shirtPath(c, k) {
  const p = [[.33,.15],[.42,.11],[.5,.17],[.58,.11],[.67,.15],[.9,.3],[.81,.45],[.72,.39],[.72,.89],[.28,.89],[.28,.39],[.19,.45],[.1,.3]];
  c.beginPath(); p.forEach(([x, y], i) => i ? c.lineTo(x * k, y * k) : c.moveTo(x * k, y * k)); c.closePath();
}
function countDirt() {
  const d = dx.getImageData(0, 0, DS, DS).data; let n = 0;
  for (let i = 3; i < d.length; i += 8) if (d[i] > 40) n++;
  return n;
}
function newItem() {
  dx.globalCompositeOperation = 'source-over';
  dx.clearRect(0, 0, DS, DS);
  dx.save();
  const R = Math.random, lvl = Math.min(score, 12);
  if (gm === 'dishes') {
    platePath(dx, DS); dx.clip();
    for (let i = 0; i < 5 + lvl * 1.3; i++) {
      const a = R() * 6.28, r = R() * .3 * DS, x = DS / 2 + Math.cos(a) * r, y = DS / 2 + Math.sin(a) * r;
      const v = 45 + R() * 50 | 0; dx.fillStyle = `rgba(${v},${v},${v},.92)`;
      dx.beginPath(); dx.ellipse(x, y, 4 + R() * 11, 3 + R() * 8, R() * 3, 0, 6.3); dx.fill();
    }
    dx.strokeStyle = 'rgba(70,70,70,.85)'; dx.lineCap = 'round';
    for (let i = 0; i < 2 + lvl / 3; i++) {
      dx.lineWidth = 3 + R() * 4; dx.beginPath();
      const x = 45 + R() * 70, y = 45 + R() * 70; dx.moveTo(x, y); dx.quadraticCurveTo(x + R() * 40 - 20, y + R() * 40 - 20, x + R() * 50 - 25, y + R() * 50 - 25); dx.stroke();
    }
    dx.fillStyle = 'rgba(40,40,40,.9)';
    for (let i = 0; i < 14; i++) { dx.beginPath(); dx.arc(40 + R() * 80, 40 + R() * 80, .8 + R() * 1.6, 0, 6.3); dx.fill(); }
  } else {
    shirtPath(dx, DS); dx.clip();
    dx.lineCap = 'round';
    for (let i = 0; i < 16 + lvl * 2; i++) {
      const x = DS * (.24 + R() * .52), y = DS * (.18 + R() * .68), L = 12 + R() * 26, a = R() * 3.14;
      const ex = x + Math.cos(a) * L, ey = y + Math.sin(a) * L;
      dx.strokeStyle = 'rgba(80,80,80,.9)'; dx.lineWidth = 1.6 + R() * 1.4;
      dx.beginPath(); dx.moveTo(x, y); dx.quadraticCurveTo((x + ex) / 2 + R() * 10 - 5, (y + ey) / 2 + R() * 10 - 5, ex, ey); dx.stroke();
      dx.strokeStyle = 'rgba(150,150,150,.85)'; dx.lineWidth = 1;
      dx.beginPath(); dx.moveTo(x + 1.5, y + 1.5); dx.quadraticCurveTo((x + ex) / 2 + 1.5, (y + ey) / 2 + 1.5, ex + 1.5, ey + 1.5); dx.stroke();
    }
  }
  dx.restore();
  c0 = Math.max(1, countDirt());
  burnt = null;
}
function toast(txt) { toastEl.textContent = txt; toastEl.classList.remove('show'); void toastEl.offsetWidth; toastEl.classList.add('show'); }
function stats() {
  $('#gTime').textContent = Math.max(0, timeLeft).toFixed(1);
  $('#gScore').textContent = score; $('#gBal').textContent = getBal();
  $('#gTimeLbl').textContent = t().sec; $('#gScoreLbl').textContent = t().scoreLbl; $('#gBalLbl').textContent = t().balLbl;
}
const icoPlate = '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="#eee" stroke="#999" stroke-width="2"/><circle cx="32" cy="32" r="18" fill="none" stroke="#bbb" stroke-width="2"/><ellipse cx="26" cy="28" rx="6" ry="4" fill="#666"/><circle cx="38" cy="38" r="3" fill="#666"/></svg>';
const icoIron = '<svg viewBox="0 0 64 64"><path d="M8 46 C10 30 22 22 40 22 L56 22 L56 46 Z" fill="#cfcfcf" stroke="#333" stroke-width="2.5" stroke-linejoin="round"/><path d="M26 22 C26 12 34 10 50 10 L54 22" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/><rect x="8" y="46" width="48" height="5" rx="2" fill="#555"/></svg>';
function showPanel(html) { panel.innerHTML = `<div class="g-card">${html}</div>`; panel.hidden = false; }
function showPicker() {
  running = false; stats();
  $('#gTitle').textContent = 'HOMIE'; $('#gHint').textContent = '';
  showPanel(`<h3>${t().gPick}</h3><p>${t().gPickSub}</p>
    <div class="g-pick">
      <button data-g="dishes">${icoPlate}<b>${t().dishes}</b><small>${t().record(sGet('homie-rec-dishes', 0))}</small></button>
      <button data-g="iron">${icoIron}<b>${t().iron}</b><small>${t().record(sGet('homie-rec-iron', 0))}</small></button>
    </div>`);
  $$('[data-g]', panel).forEach(b => b.addEventListener('click', () => showStart(b.dataset.g)));
}
function showStart(m) {
  gm = m; score = 0; timeLeft = DUR; anim = null; parts = []; newItem(); stats();
  $('#gTitle').textContent = m === 'dishes' ? t().dishes : t().iron;
  showPanel(`<h3>${m === 'dishes' ? t().dishes : t().iron}</h3><p>${m === 'dishes' ? t().rulesDishes : t().rulesIron}</p>
    <div class="g-row"><button class="btn btn-dark" id="gGo">${t().start}</button></div>`);
  $('#gGo').addEventListener('click', () => { panel.hidden = true; running = true; lastT = performance.now(); $('#gHint').textContent = m === 'dishes' ? t().hintDishes : t().hintIron; });
}
function endGame() {
  running = false; ptr.down = false;
  const key = 'homie-rec-' + gm, rec = sGet(key, 0), isRec = score > rec && score > 0;
  if (isRec) sSet(key, score);
  const earned = score * (gm === 'dishes' ? 5 : 7) + (isRec ? 25 : 0);
  setBal(getBal() + earned); stats(); updateBookPrice();
  $('#gHint').textContent = '';
  showPanel(`<h3>${isRec ? t().newRec : t().timeUp}</h3>
    <div class="g-big chrome-dark">${score}</div><p>${gm === 'dishes' ? t().platesLbl : t().itemsLbl} · ${t().record(Math.max(rec, score))}</p>
    <span class="g-earn">${t().earn(earned, fmt(earned * 1000))}</span>
    <p>${t().bonusNote(getBal())}</p>
    <div class="g-row"><button class="btn btn-dark" id="gAgain">${t().again}</button><button class="btn btn-ghost" id="gOther">${t().other}</button><button class="btn btn-ghost" id="gDone">${t().done}</button></div>`);
  $('#gAgain').addEventListener('click', () => showStart(gm));
  $('#gOther').addEventListener('click', () => showStart(gm === 'dishes' ? 'iron' : 'dishes'));
  $('#gDone').addEventListener('click', closeGame);
}
function openGame() {
  game.hidden = false; document.documentElement.classList.add('in-game'); document.body.style.overflow = 'hidden';
  sizeCanvas(); showPicker();
  cancelAnimationFrame(gRaf); lastT = performance.now(); gRaf = requestAnimationFrame(gLoop);
}
function closeGame() {
  running = false; game.hidden = true; cancelAnimationFrame(gRaf);
  document.documentElement.classList.remove('in-game'); document.body.style.overflow = '';
  updateBookPrice();
}
$('#gClose').addEventListener('click', closeGame);
if (/debug/.test(location.search)) window.__g = { end: () => { timeLeft = .01; }, open: openGame };
addEventListener('resize', () => { if (!game.hidden) sizeCanvas(); });

function local(e) { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * S / r.width, (e.clientY - r.top) * S / r.height]; }
function inItem(x, y) { gm === 'dishes' ? platePath(gx, S) : shirtPath(gx, S); gx.setTransform(1, 0, 0, 1, 0, 0); const k = cv.width / S, hit = gx.isPointInPath(x * k, y * k); sizeCanvasTransform(); return hit; }
function sizeCanvasTransform() { const k = cv.width / S; gx.setTransform(k, 0, 0, k, 0, 0); }
function scrub(x0, y0, x1, y1) {
  const k = DS / S;
  dx.globalCompositeOperation = 'destination-out';
  dx.strokeStyle = gm === 'dishes' ? 'rgba(0,0,0,.45)' : 'rgba(0,0,0,.8)';
  dx.lineCap = gm === 'dishes' ? 'round' : 'square';
  dx.lineWidth = gm === 'dishes' ? 20 : 24;
  dx.beginPath(); dx.moveTo(x0 * k, y0 * k); dx.lineTo(x1 * k + .01, y1 * k); dx.stroke();
  dx.globalCompositeOperation = 'source-over';
  scrubbed = true;
}
cv.addEventListener('pointerdown', e => {
  const [x, y] = local(e); Object.assign(ptr, { x, y, down: true, sx: x, sy: y, still: performance.now() });
  try { cv.setPointerCapture(e.pointerId); } catch (_) {}
  if (running && !anim && !burnt) scrub(x, y, x, y);
});
cv.addEventListener('pointermove', e => {
  const [x, y] = local(e), px = ptr.x, py = ptr.y; ptr.x = x; ptr.y = y;
  if (Math.hypot(x - ptr.sx, y - ptr.sy) > S * .015) { ptr.sx = x; ptr.sy = y; ptr.still = performance.now(); }
  if (!ptr.down || !running || anim || burnt) return;
  scrub(px, py, x, y);
  if (Math.random() < .5) parts.push(gm === 'dishes'
    ? { x: x + (Math.random() - .5) * 30, y: y + (Math.random() - .5) * 30, r: 2 + Math.random() * 6, vy: -.3, life: 1, kind: 'b' }
    : { x: x + (Math.random() - .5) * 20, y: y - 10, r: 6 + Math.random() * 8, vy: -1.2, life: 1, kind: 's' });
});
let scrubbed = false;
function checkDone() {
  scrubbed = false;
  if (running && !anim && !burnt && countDirt() < c0 * (gm === 'dishes' ? .06 : .08)) itemDone();
}
const up = () => { ptr.down = false; if (scrubbed) checkDone(); };
cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
cv.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') { ptr.x = -999; ptr.down = false; } });

function itemDone() {
  score++; stats();
  toast(t().clean[Math.random() * t().clean.length | 0]);
  for (let i = 0; i < 14; i++) parts.push({ x: S * (.3 + Math.random() * .4), y: S * (.3 + Math.random() * .4), r: 3 + Math.random() * 5, vy: -.6, life: 1, kind: 'k' });
  anim = { t: 0 };
}
function gLoop(now) {
  const dt = Math.min(.05, (now - lastT) / 1000); lastT = now; frame++;
  if (running) {
    timeLeft -= dt; stats();
    if (timeLeft <= 0) { timeLeft = 0; stats(); endGame(); }
    else if (!anim && !burnt) {
      if (gm === 'iron' && ptr.down && now - ptr.still > 850 && inItem(ptr.x, ptr.y)) {
        burnt = { x: ptr.x, y: ptr.y, t: now }; toast(t().burnt); ptr.down = false;
        setTimeout(() => { if (running) { anim = { t: 0, fail: true }; } }, 650);
      } else if (scrubbed && frame % 4 === 0) checkDone();
    }
  }
  if (anim) { anim.t += dt; if (anim.t > .55 && !anim.swapped) { anim.swapped = true; newItem(); } if (anim.t > 1) anim = null; }
  draw(now);
  gRaf = requestAnimationFrame(gLoop);
}
function draw(now) {
  const c = gx;
  c.clearRect(0, 0, S, S);
  // surface
  const bg = c.createLinearGradient(0, 0, 0, S); bg.addColorStop(0, '#d9d9d9'); bg.addColorStop(1, '#b6b6b6');
  c.fillStyle = bg; c.beginPath(); c.roundRect ? c.roundRect(0, 0, S, S, 28) : c.rect(0, 0, S, S); c.fill();
  if (gm === 'iron') {
    c.fillStyle = '#9d9d9d'; c.beginPath(); c.ellipse(S * .5, S * .52, S * .48, S * .44, 0, 0, 6.3); c.fill();
    c.strokeStyle = 'rgba(255,255,255,.25)'; c.lineWidth = 2;
    for (let i = 1; i < 9; i++) { c.beginPath(); c.moveTo(S * .05, S * i / 9); c.lineTo(S * .95, S * i / 9); c.stroke(); }
  } else {
    c.strokeStyle = 'rgba(255,255,255,.35)'; c.lineWidth = 1;
    for (let i = 1; i < 8; i++) { c.beginPath(); c.moveTo(0, S * i / 8); c.lineTo(S, S * i / 8); c.stroke(); c.beginPath(); c.moveTo(S * i / 8, 0); c.lineTo(S * i / 8, S); c.stroke(); }
  }
  // item offset during swap animation
  let ox = 0;
  if (anim) ox = anim.t < .55 ? Math.pow(anim.t / .55, 2) * 1.2 : -(1 - (anim.t - .55) / .45) * 1.2;
  c.save(); c.translate(ox * S, 0);
  if (gm === 'dishes') {
    c.fillStyle = 'rgba(0,0,0,.18)'; c.beginPath(); c.ellipse(S * .52, S * .53, S * .41, S * .41, 0, 0, 6.3); c.fill();
    const pg = c.createRadialGradient(S * .42, S * .38, S * .05, S * .5, S * .5, S * .42); pg.addColorStop(0, '#ffffff'); pg.addColorStop(.75, '#ececec'); pg.addColorStop(1, '#c9c9c9');
    platePath(c, S); c.fillStyle = pg; c.fill(); c.strokeStyle = '#a9a9a9'; c.lineWidth = 2; c.stroke();
    c.beginPath(); c.arc(S * .5, S * .5, S * .28, 0, 6.3); c.strokeStyle = 'rgba(0,0,0,.08)'; c.lineWidth = 3; c.stroke();
    c.beginPath(); c.arc(S * .5, S * .5, S * .36, 3.6, 4.4); c.strokeStyle = 'rgba(255,255,255,.9)'; c.lineWidth = 4; c.stroke();
  } else {
    shirtPath(c, S); c.fillStyle = '#f1f1f1'; c.fill(); c.strokeStyle = '#8f8f8f'; c.lineWidth = 2; c.stroke();
    c.beginPath(); c.moveTo(S * .42, S * .11); c.lineTo(S * .5, S * .24); c.lineTo(S * .58, S * .11); c.strokeStyle = '#8f8f8f'; c.stroke();
    c.fillStyle = '#7a7a7a'; for (let i = 0; i < 5; i++) { c.beginPath(); c.arc(S * .5, S * (.32 + i * .11), S * .009, 0, 6.3); c.fill(); }
    c.strokeRect(S * .57, S * .34, S * .09, S * .08);
  }
  c.drawImage(dirt, 0, 0, S, S);
  if (burnt) {
    const g = c.createRadialGradient(burnt.x, burnt.y, 2, burnt.x, burnt.y, S * .09); g.addColorStop(0, 'rgba(20,20,20,.95)'); g.addColorStop(.7, 'rgba(60,60,60,.6)'); g.addColorStop(1, 'rgba(60,60,60,0)');
    c.fillStyle = g; c.beginPath(); c.ellipse(burnt.x, burnt.y, S * .09, S * .06, 0, 0, 6.3); c.fill();
  }
  c.restore();
  // particles
  parts = parts.filter(p => (p.life -= .025) > 0);
  parts.forEach(p => {
    p.y += p.vy; c.globalAlpha = p.life;
    if (p.kind === 'b') { c.strokeStyle = '#fff'; c.lineWidth = 1.5; c.beginPath(); c.arc(p.x, p.y, p.r, 0, 6.3); c.stroke(); }
    else if (p.kind === 's') { c.fillStyle = 'rgba(255,255,255,.55)'; c.beginPath(); c.arc(p.x, p.y, p.r * (2 - p.life), 0, 6.3); c.fill(); }
    else { c.fillStyle = '#fff'; c.save(); c.translate(p.x, p.y); c.rotate(.8); c.fillRect(-p.r / 2, -p.r / 2, p.r, p.r); c.restore(); }
  });
  c.globalAlpha = 1;
  // tool
  if (ptr.x > -500) {
    c.save(); c.translate(ptr.x, ptr.y);
    if (gm === 'dishes') {
      c.rotate(-.25 + (ptr.down ? Math.sin(now / 40) * .08 : 0));
      const w = S * .17, h = S * .11;
      c.fillStyle = 'rgba(0,0,0,.2)'; c.fillRect(-w / 2 + 4, -h / 2 + 6, w, h);
      c.fillStyle = '#3a3a3a'; c.beginPath(); c.roundRect ? c.roundRect(-w / 2, h * .1, w, h * .4, 6) : c.rect(-w / 2, h * .1, w, h * .4); c.fill();
      const sg = c.createLinearGradient(0, -h / 2, 0, h * .1); sg.addColorStop(0, '#e2e2e2'); sg.addColorStop(1, '#a8a8a8');
      c.fillStyle = sg; c.beginPath(); c.roundRect ? c.roundRect(-w / 2, -h / 2, w, h * .62, 8) : c.rect(-w / 2, -h / 2, w, h * .62); c.fill();
      c.fillStyle = 'rgba(0,0,0,.12)'; for (let i = 0; i < 8; i++) { c.beginPath(); c.arc(-w / 2 + 8 + (i * 13) % (w - 14), -h / 2 + 6 + (i * 7) % (h * .45), 2, 0, 6.3); c.fill(); }
    } else {
      const w = S * .2, h = S * .12;
      c.fillStyle = 'rgba(0,0,0,.22)'; c.beginPath(); c.ellipse(4, h * .55, w * .5, h * .18, 0, 0, 6.3); c.fill();
      const ig = c.createLinearGradient(0, -h / 2, 0, h / 2); ig.addColorStop(0, '#ffffff'); ig.addColorStop(.45, '#9a9a9a'); ig.addColorStop(.6, '#1c1c1c'); ig.addColorStop(1, '#cfcfcf');
      c.fillStyle = ig; c.beginPath(); c.moveTo(-w / 2, h * .4); c.quadraticCurveTo(-w * .45, -h * .3, w * .1, -h * .3); c.lineTo(w / 2, -h * .3); c.lineTo(w / 2, h * .4); c.closePath(); c.fill();
      c.strokeStyle = '#111'; c.lineWidth = 5; c.lineCap = 'round'; c.beginPath(); c.moveTo(-w * .05, -h * .3); c.quadraticCurveTo(0, -h * 1.1, w * .4, -h); c.lineTo(w * .45, -h * .3); c.stroke();
      c.fillStyle = '#444'; c.fillRect(-w / 2, h * .4, w, h * .12);
    }
    c.restore();
  }
}

/* ================= init ================= */
setLang(lang);
updateCalc(true);
loop();
})();
