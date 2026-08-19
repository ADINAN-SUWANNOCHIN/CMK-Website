/* CHAOR MA KOK — shared scripts (works data, effects, modal, carousel, i18n) */

/* ============================================================
   WORKS
   owner:'company' = dubbed by the studio
   owner:'ceo'     = directed by Sansern Pokesombat outside the studio
   cat: film | series | animation | docu      reg: kr | west | cn (series only)
   img is optional — titles without artwork render as a typographic card.
   ============================================================ */
const WORKS = [
  /* ---------- COMPANY · MOVIES ---------- */
  {en:"Send Help",                     cat:"film", owner:"company", img:"send-help.jpg"},
  {en:"Wonder Man",                    cat:"series", reg:"west", owner:"company", img:"wonder-man.jpg"},
  {en:"Project Hail Mary",             cat:"film", owner:"company", img:"hail-mary.jpg"},
  {en:"Predator: Badlands",            cat:"film", owner:"company", img:"predator-badlands.jpg"},
  {en:"Sonic the Hedgehog 3",          cat:"film", owner:"company", img:"sonic-3.jpg"},
  {en:"The Amateur",                   cat:"film", owner:"company", img:"the-amateur.jpg"},
  {en:"Kraven the Hunter",             cat:"film", owner:"company", img:"kraven.jpg"},
  {en:"Venom: The Last Dance",         cat:"film", owner:"company", img:"venom-3.jpg"},
  {en:"Beverly Hills Cop: Axel F",     cat:"film", owner:"company", img:"beverly-hills-cop4.jpg"},
  {en:"Alien: Romulus",                cat:"film", owner:"company", img:"alien-romulus.jpg"},
  {en:"Bad Boys: Ride or Die",         cat:"film", owner:"company", img:"bad-boys-4.jpg"},
  {en:"Antlers",                       cat:"film", owner:"company", img:"antlers.jpg"},
  {en:"The Creator",                   cat:"film", owner:"company", img:"the-creator.jpg"},
  {en:"The Boogeyman",                 cat:"film", owner:"company", img:"boogeyman.jpg"},
  {en:"The Menu",                      cat:"film", owner:"company", img:"the-menu.jpg"},
  {en:"The Eyes of Tammy Faye",        cat:"film", owner:"company", img:"tammy-faye.jpg"},
  {en:"Nightmare Alley",               cat:"film", owner:"company", note:"2021", img:"nightmare-alley.jpg"},
  {en:"The Rescue",                    cat:"film", owner:"company", img:"the-rescue.jpg"},

  /* ---------- COMPANY · KOREAN SERIES ---------- */
  {en:"The Remarried Empress",         cat:"series", reg:"kr", owner:"company"},
  {en:"The Shards",                    cat:"series", reg:"west", owner:"company", img:"the-shards.jpg"},
  {en:"Made in Korea",                 cat:"series", reg:"kr", owner:"company", note:"S1–S2", img:"made-in-korea.jpg"},
  {en:"The Husband",                   cat:"series", reg:"kr", owner:"company", img:"the-husband.jpg"},
  {en:"Perfect Crown",                 cat:"series", reg:"kr", owner:"company", img:"perfect-crown.jpg"},
  {en:"Dr. on the Edge",               cat:"series", reg:"kr", owner:"company", img:"dr-on-the-edge.jpg"},
  {en:"A Shop for Killers",            cat:"series", reg:"kr", owner:"company", note:"S1–S2", img:"shop-for-killers.jpg"},
  {en:"Flex x Cop",                    cat:"series", reg:"kr", owner:"company", note:"S1–S2", img:"flex-x-cop.jpg"},
  {en:"Gold Land",                     cat:"series", reg:"kr", owner:"company", img:"gold-land.jpg"},
  {en:"In Your Radiant Season",        cat:"series", reg:"kr", owner:"company", img:"radiant-season.jpg"},
  {en:"The Nice Guy",                  cat:"series", reg:"kr", owner:"company", img:"the-nice-guy.jpg"},
  {en:"The Manipulated",               cat:"series", reg:"kr", owner:"company", img:"the-manipulated.jpg"},
  {en:"Head Over Heels",               cat:"series", reg:"kr", owner:"company", img:"head-over-heels.jpg"},
  {en:"Good Boy",                      cat:"series", reg:"kr", owner:"company", img:"good-boy.jpg"},
  {en:"Spice Up Our Love",             cat:"series", reg:"kr", owner:"company", img:"spice-up-our-love.jpg"},

  /* ---------- COMPANY · WESTERN SERIES ---------- */
  {en:"Furious",                       cat:"series", reg:"west", owner:"company", note:"S1", img:"furious.jpg"},
  {en:"9-1-1",                         cat:"series", reg:"west", owner:"company", note:"S9", img:"nine-one-one.jpg"},
  {en:"The Bear",                      cat:"series", reg:"west", owner:"company", note:"S5", img:"the-bear.jpg"},
  {en:"The Red Lady",                  cat:"series", reg:"west", owner:"company", note:"S1–S2"},
  {en:"Scrubs",                        cat:"series", reg:"west", owner:"company", note:"S1", img:"scrubs.jpg"},

  /* ---------- COMPANY · CHINESE SERIES ---------- */
  {en:"Zhan Zhao Adventures",          cat:"series", reg:"cn", owner:"company", note:"S1", img:"zhan-zhao.jpg"},

  /* ---------- CEO · MOVIES ---------- */
  {en:"Avatar: The Way of Water",             cat:"film", owner:"ceo", img:"avatar-2.jpg"},
  {en:"Black Panther: Wakanda Forever",       cat:"film", owner:"ceo", img:"wakanda-forever.jpg"},
  {en:"Guardians of the Galaxy Vol. 3",       cat:"film", owner:"ceo", img:"guardians-3.jpg"},
  {en:"Mission: Impossible – Dead Reckoning", cat:"film", owner:"ceo", img:"mission-impossible.jpg"},
  {en:"Indiana Jones and the Dial of Destiny",cat:"film", owner:"ceo", img:"indiana-jones.jpg"},
  {en:"Fast X",                               cat:"film", owner:"ceo", img:"fast-x.jpg"},
  {en:"Thor: Love and Thunder",               cat:"film", owner:"ceo", img:"thor-4.jpg"},
  {en:"Doctor Strange in the Multiverse of Madness", cat:"film", owner:"ceo", img:"doctor-strange-2.jpg"},
  {en:"Ant-Man and the Wasp: Quantumania",    cat:"film", owner:"ceo", img:"quantumania.jpg"},
  {en:"Spider-Man: Far From Home",            cat:"film", owner:"ceo", img:"spiderman-ffh.jpg"},
  {en:"Venom: Let There Be Carnage",          cat:"film", owner:"ceo", img:"venom-2.jpg"},
  {en:"Transformers: Rise of the Beasts",     cat:"film", owner:"ceo", img:"transformers.jpg"},
  {en:"Jung_E",                               cat:"film", owner:"ceo", img:"jung-e.jpg"},
  {en:"Sonic the Hedgehog",                   cat:"film", owner:"ceo", img:"sonic.jpg"},
  {en:"Fantasy Island",                       cat:"film", owner:"ceo", img:"fantasy-island.jpg"},
  {en:"Bad Boys for Life",                    cat:"film", owner:"ceo", img:"bad-boys-for-life.jpg"},
  {en:"Wonder Woman 1984",                    cat:"film", owner:"ceo", img:"ww84.jpg"},
  {en:"Monster Hunter",                       cat:"film", owner:"ceo", img:"monster-hunter.jpg"},

  /* ---------- CEO · SERIES ---------- */
  {en:"Goblin",                        cat:"series", reg:"kr",   owner:"ceo", img:"goblin.jpg"},
  {en:"Hotel Del Luna",                cat:"series", reg:"kr",   owner:"ceo", img:"hotel-del-luna.jpg"},
  {en:"Vincenzo",                      cat:"series", reg:"kr",   owner:"ceo", img:"vincenzo.jpg"},
  {en:"The Penthouse: War in Life",    cat:"series", reg:"kr",   owner:"ceo", img:"penthouse.jpg"},
  {en:"Link: Eat, Love, Kill",         cat:"series", reg:"kr",   owner:"ceo", img:"link.jpg"},
  {en:"Big Mouth",                     cat:"series", reg:"kr",   owner:"ceo", img:"big-mouth.jpg"},
  {en:"From Me to You",                cat:"series", reg:"west", owner:"ceo", img:"from-me-to-you.jpg"},
  {en:"The Makanai: Cooking for the Maiko House", cat:"series", reg:"west", owner:"ceo", img:"makanai.jpg"},
  {en:"The Night Agent",               cat:"series", reg:"west", owner:"ceo", img:"night-agent.jpg"},
  {en:"Sanctuary",                     cat:"series", reg:"west", owner:"ceo", img:"sanctuary.jpg"},
  {en:"Mr. Midnight: Beware the Monsters", cat:"series", reg:"west", owner:"ceo", img:"mr-midnight.jpg"},

  /* ---------- CEO · ANIMATION & DOCUMENTARY ---------- */
  {en:"Kitti Katz",                    cat:"animation", owner:"ceo", img:"kitti-katz.jpg"},
  {en:"Clifford the Big Red Dog",      cat:"animation", owner:"ceo", img:"clifford.jpg"},
  {en:"Spirit Rangers",                cat:"animation", owner:"ceo", img:"spirit-rangers.jpg"},
  {en:"Tekken: Bloodline",             cat:"animation", owner:"ceo", img:"tekken.jpg"},
  {en:"Phineas and Ferb",              cat:"animation", owner:"ceo", img:"phineas-ferb.jpg"},
  {en:"Kim Possible",                  cat:"animation", owner:"ceo", img:"kim-possible.jpg"},
  {en:"Bluey",                         cat:"animation", owner:"ceo", img:"bluey.jpg"},
  {en:"American Dragon: Jake Long",    cat:"animation", owner:"ceo", img:"jake-long.jpg"},
  {en:"Bananas in Pyjamas",            cat:"animation", owner:"ceo", img:"bananas.jpg"},
  {en:"America the Beautiful",         cat:"docu", owner:"ceo", img:"america-beautiful.jpg"},
  {en:"Chasing Waves",                 cat:"docu", owner:"ceo", img:"chasing-waves.jpg"},
];

const COMPANY_WORKS = WORKS.filter(w => w.owner === 'company');
const CEO_WORKS     = WORKS.filter(w => w.owner === 'ceo');

/* stable "poster art" for titles with no artwork yet */
const ART = ['rays','eclipse','split','wavez','grid','dots','sun','stripes'];
const artFor = i => ART[i % ART.length];

/* ---------- poster card ---------- */
function posterEl(p, i){
  const d = document.createElement('button');
  d.className = 'poster' + (p.img ? '' : ' noimg');
  d.type = 'button';
  const art = p.img
    ? `<img class="ph" src="assets/${p.img}" alt="${p.en}">`
    : `<div class="art ${artFor(i || 0)}"></div>`;
  const mk = p.owner === 'company' ? '<span class="mk">CM</span>' : '';
  d.innerHTML = `${art}
    <span class="tag" data-tag="${p.cat}"></span>${mk}
    <div class="tt"><b>${p.en}</b>${p.note ? `<i>${p.note}</i>` : ''}</div>`;
  d.setAttribute('aria-haspopup', 'dialog');
  d.addEventListener('click', () => openWork(p));
  return d;
}

/* ---------- 3D drum (index hero) ---------- */
(function(){
  const ring = document.getElementById('ring');
  if(!ring) return;
  // the drum is decorative: show whatever artwork exists, newest first
  const pool = WORKS.filter(w => w.img);
  const N = 14, W = 170;
  const R = Math.round(W / (2 * Math.tan(Math.PI / N))) + 26;
  for (let i = 0; i < N; i++){
    const card = document.createElement('div');
    card.className = 'card3d';
    card.style.transform = `rotateY(${(360/N)*i}deg) translateZ(${R}px)`;
    const p = posterEl(pool[i % pool.length], i);
    p.style.borderRadius = '10px';
    card.appendChild(p);
    ring.appendChild(card);
  }
})();

/* ---------- marquee walls (company showreel) ---------- */
(function(){
  const r1 = document.getElementById('row1');
  const r2 = document.getElementById('row2');
  if(!r1 || !r2) return;
  const films = COMPANY_WORKS.filter(p => p.cat === 'film');
  const shows = COMPANY_WORKS.filter(p => p.cat !== 'film');
  const fill = (row, list) => [list, list].flat().forEach((p, i) => row.appendChild(posterEl(p, i)));
  fill(r1, films);
  fill(r2, shows);
})();

/* ---------- filmography grids (index + ceo-works) ---------- */
function buildGrid(hostId, list, countId){
  const host = document.getElementById(hostId);
  if(!host) return;
  host.innerHTML = '';
  list.forEach((p, i) => host.appendChild(posterEl(p, i)));
  const c = countId && document.getElementById(countId);
  if(c) c.textContent = list.length;
}
buildGrid('gridFilm',  COMPANY_WORKS.filter(p => p.cat === 'film'), 'nFilm');
buildGrid('gridKr',    COMPANY_WORKS.filter(p => p.cat === 'series' && p.reg === 'kr'),   'nKr');
buildGrid('gridWest',  COMPANY_WORKS.filter(p => p.cat === 'series' && p.reg === 'west'), 'nWest');
buildGrid('gridCn',    COMPANY_WORKS.filter(p => p.cat === 'series' && p.reg === 'cn'),   'nCn');
buildGrid('ceoFilm',   CEO_WORKS.filter(p => p.cat === 'film'),     'nCeoFilm');
buildGrid('ceoSeries', CEO_WORKS.filter(p => p.cat === 'series'),   'nCeoSeries');
buildGrid('ceoAnim',   CEO_WORKS.filter(p => p.cat === 'animation' || p.cat === 'docu'), 'nCeoAnim');

/* ---------- work modal ---------- */
let lastFocus = null;
function openWork(p){
  const m = document.getElementById('workModal');
  if(!m) return;
  lastFocus = document.activeElement;
  const dict = I18N[document.documentElement.lang] || I18N.th;
  const art = p.img
    ? `<img src="assets/${p.img}" alt="${p.en}">`
    : `<div class="art ${artFor(WORKS.indexOf(p))}"></div>`;
  m.querySelector('.md-art').innerHTML = art;
  m.querySelector('.md-title').textContent = p.en;
  m.querySelector('.md-note').textContent = p.note || '';
  m.querySelector('.md-note').hidden = !p.note;

  const catKey = 'cat.' + p.cat + (p.reg ? '.' + p.reg : '');
  const rows = [
    [dict['md.cat'],   dict[catKey] || dict['cat.' + p.cat]],
    [dict['md.by'],    p.owner === 'company' ? dict['md.byCompany'] : dict['md.byCeo']],
  ];
  m.querySelector('.md-rows').innerHTML = rows
    .map(([k, v]) => `<div class="md-row"><b>${k}</b><span>${v}</span></div>`).join('');

  const badge = m.querySelector('.md-badge');
  badge.textContent = p.owner === 'company' ? dict['md.tagCompany'] : dict['md.tagCeo'];
  badge.className = 'md-badge ' + p.owner;

  m.hidden = false;
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => m.classList.add('on'));
  m.querySelector('.md-close').focus();
}
function closeWork(){
  const m = document.getElementById('workModal');
  if(!m || m.hidden) return;
  m.classList.remove('on');
  document.body.style.overflow = '';
  setTimeout(() => { m.hidden = true; }, 220);
  if(lastFocus) lastFocus.focus();
}
(function(){
  const m = document.getElementById('workModal');
  if(!m) return;
  m.querySelector('.md-close').addEventListener('click', closeWork);
  m.querySelector('.md-backdrop').addEventListener('click', closeWork);
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeWork(); });
})();

/* ---------- special-project carousel ---------- */
const SPECIALS = [
  {
    title: 'Game of Thrones — Season 7',
    poster: 'assets/got.jpg',
    subKey: 'sp.got.sub',
    cast: [
      {img:'celeb-mario.jpg', nameKey:'sp.c1', role:'Jon Snow'},
      {img:'celeb-bank.jpg',  nameKey:'sp.c2', role:'Tyrion Lannister'},
      {img:'celeb-bee.jpg',   nameKey:'sp.c3', role:'Daenerys Targaryen'},
      {img:'celeb-pleng.jpg', nameKey:'sp.c4', role:'Sansa Stark'},
      {img:'celeb-tu.jpg',    nameKey:'sp.c5', role:'Cersei Lannister'},
      {img:'celeb-ploy.jpg',  nameKey:'sp.c6', role:'Arya Stark'},
    ]
  },
  // ↓ next special project drops in here with the same shape
];

(function(){
  const track = document.getElementById('spTrack');
  if(!track) return;
  const dotsHost = document.getElementById('spDots');
  const prev = document.getElementById('spPrev');
  const next = document.getElementById('spNext');

  SPECIALS.forEach(s => {
    const slide = document.createElement('div');
    slide.className = 'sp-slide';
    slide.innerHTML = `
      <div class="sp-poster"><img src="${s.poster}" alt="${s.title}"></div>
      <div>
        <span class="eyebrow">SPECIAL PROJECT</span>
        <h3>${s.title}</h3>
        <p class="sp-sub" data-i18n="${s.subKey}"></p>
        <div class="celebs">
          ${s.cast.map(c => `
            <div class="celeb">
              <img src="assets/${c.img}" alt="${c.role}">
              <div class="cb"><b data-i18n="${c.nameKey}"></b><span>${c.role}</span></div>
            </div>`).join('')}
        </div>
      </div>`;
    track.appendChild(slide);
  });

  const n = SPECIALS.length;
  let idx = 0;
  const single = n <= 1;
  [prev, next, dotsHost].forEach(el => { if(el) el.hidden = single; });

  if(!single){
    SPECIALS.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'sp-dot' + (i === 0 ? ' on' : '');
      b.setAttribute('aria-label', 'Slide ' + (i + 1));
      b.addEventListener('click', () => go(i));
      dotsHost.appendChild(b);
    });
  }
  function go(i){
    idx = (i + n) % n;
    track.style.transform = `translateX(${-idx * 100}%)`;
    dotsHost?.querySelectorAll('.sp-dot').forEach((d, k) => d.classList.toggle('on', k === idx));
  }
  prev?.addEventListener('click', () => go(idx - 1));
  next?.addEventListener('click', () => go(idx + 1));
})();

/* ---------- equalizer waves ---------- */
function buildWave(id, n){
  const w = document.getElementById(id);
  if(!w) return;
  for(let i = 0; i < n; i++){
    const bar = document.createElement('i');
    bar.style.setProperty('--h', (0.25 + Math.random() * 0.75).toFixed(2));
    bar.style.animationDelay = (Math.random() * -1.3).toFixed(2) + 's';
    bar.style.animationDuration = (0.9 + Math.random() * 0.9).toFixed(2) + 's';
    w.appendChild(bar);
  }
}
buildWave('heroWave', 64);
buildWave('ctWave', 40);

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
}), {threshold:.15});
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* ---------- subtle parallax tilt on the drum ---------- */
(function(){
  const stage = document.querySelector('.stage');
  const ring = document.getElementById('ring');
  if(!stage || !ring || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  stage.addEventListener('mousemove', e => {
    const r = stage.getBoundingClientRect();
    const y = ((e.clientY - r.top) / r.height - .5) * -10;
    ring.style.setProperty('transform-origin', 'center');
    stage.style.perspectiveOrigin = `50% ${42 + y}%`;
  });
})();

/* ---------- i18n ---------- */
const I18N = {
  th: {
    brandsub:"ดับบิ้ง สตูดิโอ · SINCE 2001",
    "nav.home":"หน้าแรก", "nav.about":"เกี่ยวกับเรา", "nav.services":"บริการ", "nav.works":"ผลงาน",
    "nav.ceo":"ผู้บริหาร", "nav.ceoworks":"ผลงาน CEO", "nav.process":"ขั้นตอน", "nav.contact":"ติดต่อ", "nav.cta":"ขอใบเสนอราคา",
    "hero.title":'เสียงที่ทำให้<br>ทุกเรื่องราว <span class="o">มีชีวิต</span>',
    "hero.sub":"สตูดิโอพากย์เสียงครบวงจรตั้งแต่ปี 2001 — ภาพยนตร์ ซีรีส์ แอนิเมชัน สารคดี และงานร้อง ด้วยทีมนักพากย์มืออาชีพมากกว่า 300 ชีวิต บนมาตรฐานเสียงระดับเวิลด์คลาส (2.0 / 5.1)",
    "hero.cta1":"ดูผลงานของเรา", "hero.cta2":"ติดต่อสตูดิโอ",
    stat1:"ภาพยนตร์ที่พากย์", stat2:"ตอนซีรีส์ จาก 1,000+ เรื่อง", stat3:"นักพากย์มืออาชีพ", stat4:"ปีในวงการ (ตั้งแต่ 2001)",
    hint:"— ผลงานหมุนอยู่ · แตะเพื่อหยุด —",
    "ab.title":'รู้จัก <span class="o">CHAOR MA KOK</span>',
    "ab.story":"CHAOR MA KOK อยู่ในธุรกิจบันเทิงมาตั้งแต่ปี 2001 ก่อตั้งโดยคุณสรรเสริญ โภคสมบัติ ให้บริการพากย์เสียง ตัดต่อ และมิกซ์เสียงภาษาไทย ครอบคลุมภาพยนตร์ โทรทัศน์ งานร้อง ซีรีส์ และการ์ตูนซีรีส์",
    "ab.vq":'"Every movie has a life. Every character has a soul."',
    "ab.vd":"วิสัยทัศน์ของเรา — การพากย์คือการมอบชีวิตและจิตวิญญาณให้ทุกเรื่องราวเพื่อผู้ชมชาวไทย เราใส่ใจและพิถีพิถันในทุกรายละเอียดของงานพากย์",
    "ab.dirt":"DUBBING DIRECTORS —",
    "ab.m1t":"มาตรฐานระดับโลก","ab.m1d":"ทำงานด้วยมาตรฐานเดียวกับสตูดิโอระดับโลก ทั้งระบบ 2.0 และ 5.1",
    "ab.m2t":"สร้างมืออาชีพ","ab.m2d":"บ่มเพาะผู้กำกับการพากย์และนักพากย์มืออาชีพรุ่นใหม่ให้วงการ",
    "ab.m3t":"ทุกรุ่นมีเวที","ab.m3d":"ดึงศักยภาพนักพากย์รุ่นใหญ่อย่างให้เกียรติ ควบคู่การเปิดโอกาสให้นักพากย์รุ่นเยาว์อย่างต่อเนื่อง",
    "ab.m4t":"เทคโนโลยีล้ำสมัย","ab.m4d":"ใช้เทคโนโลยีระดับแนวหน้าเพื่องานตัดต่อและมิกซ์เสียงคุณภาพสูงสุด",
    "ab.n1":"นักพากย์มืออาชีพ","ab.n2":"ผู้กำกับการพากย์","ab.n3":"นักแปลหลายภาษา","ab.n4":"ทีมงานร้อง (Vocal)",
    "ab.n5":"สตูดิโอบันทึกเสียง","ab.n6":"ห้องตัดต่อ + ห้องมิกซ์","ab.n7":"ตอนแอนิเมชัน & สารคดี","ab.n8":"ชั่วโมงพากย์ต่อปี",
    "ab.gal.t":"ภายในสตูดิโอ","ab.gal.d":"ห้องบันทึกเสียง ห้องตัดต่อ และห้องมิกซ์ของเรา",
    "ab.team.t":"ทีมงานของเรา","ab.team.d":"ทีมนักพากย์ ผู้กำกับการพากย์ นักแปล และวิศวกรเสียงของ CHAOR MA KOK",
    "sv.title":'เราพากย์<span class="o">ทุกอย่าง</span>ที่มีเสียง',
    "sv.sub":"ตั้งแต่บล็อกบัสเตอร์ฮอลลีวูดจนถึงการ์ตูนซีรีส์ เราดูแลครบวงจร — แปลบท กำกับการพากย์ บันทึกเสียง ตัดต่อ จนถึงมิกซ์ขั้นสุดท้าย",
    "sv1.t":"พากย์ภาพยนตร์","sv1.d":"พากย์ไทยหนังโรงและสตรีมมิงมากกว่า 300 เรื่อง มาตรฐานเสียงระดับโรงภาพยนตร์ 2.0 และ 5.1",
    "sv2.t":"พากย์ซีรีส์","sv2.d":"ประสบการณ์มากกว่า 1,000 เรื่อง 20,000+ ตอน คุมโทนเสียงตัวละครให้สม่ำเสมอ ส่งงานทันออนแอร์ทุกแพลตฟอร์ม",
    "sv3.t":"แอนิเมชัน & การ์ตูนซีรีส์","sv3.d":"พากย์การ์ตูนและแอนิเมชันมาแล้วมากกว่า 10,000 ตอน เข้าใจคาแรกเตอร์ จังหวะ และงานลิปซิงก์ที่เนียนสนิท",
    "sv4.t":"สารคดี & รายการทีวี","sv4.d":"เสียงบรรยายสารคดีและรายการโทรทัศน์ ด้วยเสียงที่น่าเชื่อถือและเป็นธรรมชาติ",
    "sv5.t":"งานร้อง (Vocal)","sv5.d":"ทีมนักร้องประจำสตูดิโอ 3 ทีม สำหรับเพลงประกอบภาพยนตร์ การ์ตูน และงานร้องทุกรูปแบบ",
    "sv6.t":"ตัดต่อ & มิกซ์เสียง","sv6.d":"ห้องตัดต่อ 4 ห้อง ห้องมิกซ์ 3 ห้อง พร้อมเทคโนโลยีล่าสุด มิกซ์ตามสเปกทุกแพลตฟอร์ม ผ่าน QC ทุกไฟล์",
    "wk.title":'ผลงานที่<span class="o">ผ่านมือเรา</span>',
    "wk.sub":"ผลงานพากย์ไทยของสตูดิโอ CHAOR MA KOK — ภาพยนตร์ฟอร์มยักษ์ ซีรีส์เกาหลี ฝรั่ง และจีน",
    "wk.note":"* แสดงผลงานเพียงบางส่วน — ภาพโปสเตอร์เป็นลิขสิทธิ์ของสตูดิโอ/ผู้จัดจำหน่ายแต่ละราย ใช้เพื่อบันทึกประวัติผลงานเท่านั้น",
    "wk.g1":"ภาพยนตร์","wk.g2":"ซีรีส์เกาหลี","wk.g3":"ซีรีส์ฝรั่ง","wk.g4":"ซีรีส์จีน",
    "wk.ceolink":"ดูผลงานกำกับการพากย์ของ CEO",
    "sp.head":'โปรเจกต์<span class="o">พิเศษ</span>',
    "sp.got.sub":"กำกับการพากย์เสียงเวอร์ชันพิเศษ โดยเหล่าดาราและศิลปินแถวหน้าของไทยมารับบทตัวละครหลักของซีรีส์ระดับโลก",
    "sp.c1":"มาริโอ้ เมาเร่อ","sp.c2":"แบงค์ ปรีติ","sp.c3":"บี น้ำทิพย์","sp.c4":"เพลง ชนม์ทิดา","sp.c5":"ตู่ นันทิดา","sp.c6":"พลอยชมพู",
    "cat.film":"ภาพยนตร์","cat.series":"ซีรีส์","cat.series.kr":"ซีรีส์เกาหลี","cat.series.west":"ซีรีส์ฝรั่ง","cat.series.cn":"ซีรีส์จีน",
    "cat.animation":"แอนิเมชัน","cat.docu":"สารคดี",
    "md.cat":"หมวดหมู่","md.by":"ผลงานของ",
    "md.byCompany":"พากย์ไทยโดยสตูดิโอ CHAOR MA KOK",
    "md.byCeo":"กำกับการพากย์โดย สรรเสริญ โภคสมบัติ",
    "md.tagCompany":"ผลงานบริษัท","md.tagCeo":"ผลงานกำกับของ CEO",
    "md.close":"ปิด",
    "ceo.badge":"Blockbusters",
    "ceo.name":'สรรเสริญ โภคสมบัติ <span class="o">"เจิ๋น"</span>',
    "ceo.role":"ผู้ก่อตั้ง & กรรมการผู้จัดการ — ผู้กำกับการพากย์",
    "ceo.quote":'"เป้าหมายของผมเรียบง่าย — ยกระดับคุณภาพงานพากย์ไทยสู่เวทีสากล"',
    "ceo.bio":"กว่าสองทศวรรษในวงการโลคัลไลเซชันไทย ทั้งในบทบาทผู้กำกับการพากย์และนักพากย์ ผ่านงานภาพยนตร์บล็อกบัสเตอร์มาแล้วมากกว่า 300 เรื่อง พร้อมทุ่มเทปั้นนักพากย์รุ่นใหม่ให้วงการ ด้วยความเชื่อในเสียงพากย์ที่เป็นธรรมชาติและเก็บรายละเอียดท้องถิ่นได้อย่างแนบเนียน",
    "ceo.ch1":"นักแสดงละครเวที","ceo.ch2":"นักพากย์ & นักร้อง","ceo.ch3":"ดีเจ","ceo.ch4":"ผู้กำกับการพากย์","ceo.ch5":"คอนเทนต์ครีเอเตอร์","ceo.ch6":"เจ้าของสตูดิโอ",
    "ceo.f3t":"โซเชียล",
    "ceo.workslink":"ดูผลงานกำกับทั้งหมด",
    "cw.title":'ผลงานกำกับการพากย์<span class="o">ของ CEO</span>',
    "cw.sub":"ผลงานที่คุณสรรเสริญ โภคสมบัติ รับหน้าที่กำกับการพากย์ให้กับสตูดิโอและผู้จัดจำหน่ายต่าง ๆ — แยกจากผลงานพากย์ของบริษัท CHAOR MA KOK",
    "cw.g1":"ภาพยนตร์","cw.g2":"ซีรีส์","cw.g3":"แอนิเมชัน & สารคดี",
    "tl.title":'ผลงานกำกับการพากย์<span class="o">ปีต่อปี</span>',
    "pc.title":'จากบทต้นฉบับ สู่เสียงไทย<span class="o">ใน 4 ขั้นตอน</span>',
    "pc1.t":"แปล & ปรับบท","pc1.d":"แปลบทโดยทีมนักแปลเฉพาะทางมากกว่า 50 คน ปรับสำนวนให้เข้าปากและตรงลิปซิงก์",
    "pc2.t":"แคสต์นักพากย์","pc2.d":"คัดเสียงที่ใช่จากทีมนักพากย์มากกว่า 300 คน ให้ตรงคาแรกเตอร์ที่สุด",
    "pc3.t":"บันทึกเสียง","pc3.d":"บันทึกเสียงใน 4 สตูดิโอมาตรฐาน พร้อมผู้กำกับการพากย์คุมทุกขั้นตอนอย่างละเอียด",
    "pc4.t":"มิกซ์ & ส่งมอบ","pc4.d":"ตัดต่อและมิกซ์ 2.0 และ 5.1 ตามสเปกแพลตฟอร์ม ผ่าน QC แล้วส่งมอบตรงเวลาเสมอ",
    "sc.title":'คอนเทนต์ของคุณ<span class="o">ปลอดภัยเสมอ</span>',
    "sc.sub":"เราดูแลไฟล์งานก่อนฉายด้วยมาตรการความปลอดภัยรอบสตูดิโอแบบเดียวกับสตูดิโอระดับโลก",
    "sc1.t":"กล้อง CCTV 36 ตัว","sc1.d":"บันทึกภาพตลอด 24 ชั่วโมงทุกวัน ครอบคลุมทุกพื้นที่โดยรอบสตูดิโอ",
    "sc2.t":"ระบบคีย์การ์ด","sc2.d":"เข้าพื้นที่สตูดิโอได้เฉพาะพนักงาน CMK ที่ได้รับอนุญาตเท่านั้น",
    "sc3.t":"เซนเซอร์ & ระบบเตือนภัย","sc3.d":"Motion sensor สปริงเกอร์ดับเพลิง และสัญญาณกันขโมย ติดตั้งครบและพร้อมใช้งานเสมอ",
    "pv.a.title":'สตูดิโอพากย์ไทย<br><span class="o">ตั้งแต่ปี 2001</span>',
    "pv.a.sub":"ก่อตั้งโดยคุณสรรเสริญ โภคสมบัติ ให้บริการพากย์เสียง ตัดต่อ และมิกซ์เสียงภาษาไทยครบวงจร ด้วยทีมงานมืออาชีพและสตูดิโอมาตรฐานระดับโลก",
    "pv.a.vd":"วิสัยทัศน์ของเรา — มอบชีวิตและจิตวิญญาณให้ทุกเรื่องราวเพื่อผู้ชมชาวไทย",
    "pv.a.btn":"ดูเรื่องราวของเรา",
    "pv.c.f1":"ภาพยนตร์บล็อกบัสเตอร์","pv.c.f2":"ปีในวงการพากย์","pv.c.f3":"ผู้กำกับการพากย์",
    "pv.c.btn":"ดูโปรไฟล์เต็ม",
    "cta.t":"พร้อมเริ่มโปรเจกต์กับเราไหม?",
    "cta.d":"ส่งรายละเอียดงานมาคุยกันได้เลย — เราตอบกลับภายใน 24 ชั่วโมง",
    "cta.btn":"ติดต่อสตูดิโอ",
    "ct.title":"มีโปรเจกต์ในมือ? คุยกับเราได้เลย",
    "ct.sub":"ส่งรายละเอียดงาน ความยาว และกำหนดส่ง แล้วเราจะตอบกลับพร้อมใบเสนอราคาภายใน 24 ชั่วโมง",
    "ct.mailbtn":"ส่งอีเมลหาเรา","ct.telbtn":"โทรออฟฟิศ",
    "ct.addr.t":"ที่อยู่สตูดิโอ","ct.addr.d":"193/1 ซอยสมเด็จพระเจ้าตากสิน 9/3 แขวงสำเหร่ เขตธนบุรี กรุงเทพฯ 10600",
    "ct.map":"เปิดใน Google Maps",
    "ct.tel.t":"เบอร์ออฟฟิศ","ct.mail.t":"อีเมล","ct.social.t":"โซเชียลมีเดีย",
    ft:"เราทำให้หนังมีชีวิต — We bring movies to life."
  },
  en: {
    brandsub:"DUBBING STUDIO · SINCE 2001",
    "nav.home":"Home", "nav.about":"About", "nav.services":"Services", "nav.works":"Our Work",
    "nav.ceo":"Meet the CEO", "nav.ceoworks":"CEO Credits", "nav.process":"Workflow", "nav.contact":"Contact", "nav.cta":"Get a Quote",
    "hero.title":'We bring every<br>story <span class="o">to life</span>',
    "hero.sub":"A full-service Thai dubbing studio since 2001 — films, series, animation, documentaries and vocal work, powered by 300+ professional voice artists and world-class sound standards (2.0 / 5.1).",
    "hero.cta1":"See Our Work", "hero.cta2":"Contact the Studio",
    stat1:"Movies dubbed", stat2:"Series episodes", stat3:"Voice artists", stat4:"Years in the industry",
    hint:"— Live showreel · hover to pause —",
    "ab.title":'About <span class="o">CHAOR MA KOK</span>',
    "ab.story":"Chaor Ma Kok has been in the entertainment business since 2001, established by Mr. Sansern Pokesombat. We provide Thai sound dubbing, editing and mixing for motion pictures, television, vocal work, series and cartoon series.",
    "ab.vq":'"Every movie has a life. Every character has a soul."',
    "ab.vd":"Our vision — dubbing gives lives and souls to movies for Thai audiences. We pay attention and focus on every detail of our dubbing.",
    "ab.dirt":"DUBBING DIRECTORS —",
    "ab.m1t":"World-class standard","ab.m1d":"We work to the standard of world-class studios, in both 2.0 and 5.1.",
    "ab.m2t":"Grow professionals","ab.m2d":"We cultivate professional dubbing directors and voice actors for the industry.",
    "ab.m3t":"Every generation","ab.m3d":"We respectfully maximize senior voice artists while consistently bringing in junior talent.",
    "ab.m4t":"Cutting-edge tech","ab.m4d":"We keep the cutting edge of technology for high-quality sound editing and mixing.",
    "ab.n1":"Professional voice artists","ab.n2":"Dubbing directors","ab.n3":"Multi-language translators","ab.n4":"Vocal teams",
    "ab.n5":"Recording studios","ab.n6":"Editing + mixing rooms","ab.n7":"Animation & docu episodes","ab.n8":"Dubbing hours per year",
    "ab.gal.t":"Inside the studio","ab.gal.d":"Our recording booths, editing suites and mixing rooms",
    "ab.team.t":"Our team","ab.team.d":"The voice artists, dubbing directors, translators and sound engineers of CHAOR MA KOK",
    "sv.title":'We dub <span class="o">everything</span> that speaks',
    "sv.sub":"From Hollywood blockbusters to cartoon series — we handle the full chain: script adaptation, voice direction, recording, editing and the final mix.",
    "sv1.t":"Film Dubbing","sv1.d":"Thai dubbing for more than 300 theatrical and streaming releases, mixed to cinema standards in 2.0 and 5.1.",
    "sv2.t":"Series Dubbing","sv2.d":"More than 1,000 shows and 20,000+ episodes of experience, with consistent character voices delivered on schedule for every platform.",
    "sv3.t":"Animation & Cartoon Series","sv3.d":"More than 10,000 episodes of cartoons and animation dubbed — with character insight, timing and seamless lip-sync.",
    "sv4.t":"Documentary & TV","sv4.d":"Narration for documentaries and television programs, delivered with credible, natural voices.",
    "sv5.t":"Vocal","sv5.d":"Three in-house vocal teams for movie and cartoon theme songs and every kind of singing work.",
    "sv6.t":"Editing & Mixing","sv6.d":"4 editing rooms and 3 mixing rooms with the latest technology — platform-spec mixes, QC-checked on every file.",
    "wk.title":'Work that <span class="o">passed through us</span>',
    "wk.sub":"Thai dubbing delivered by the CHAOR MA KOK studio — tentpole features plus Korean, Western and Chinese series.",
    "wk.note":"* A partial list of credits. Posters are the property of their respective studios/distributors, shown as a portfolio record only.",
    "wk.g1":"Movies","wk.g2":"Korean Series","wk.g3":"Western Series","wk.g4":"Chinese Series",
    "wk.ceolink":"See the CEO's directing credits",
    "sp.head":'Special <span class="o">Projects</span>',
    "sp.got.sub":"Directing the special Thai dub featuring Thailand's leading celebrities and artists as the main cast of the global hit series.",
    "sp.c1":"Mario Maurer","sp.c2":"Bank Preeti","sp.c3":"Bee Namthip","sp.c4":"Pleng Chontida","sp.c5":"Tu Nantida","sp.c6":"Ploychompoo",
    "cat.film":"Movie","cat.series":"Series","cat.series.kr":"Korean Series","cat.series.west":"Western Series","cat.series.cn":"Chinese Series",
    "cat.animation":"Animation","cat.docu":"Documentary",
    "md.cat":"Category","md.by":"Credit",
    "md.byCompany":"Thai dub produced by CHAOR MA KOK studio",
    "md.byCeo":"Dubbing directed by Sansern Pokesombat",
    "md.tagCompany":"Studio production","md.tagCeo":"CEO directing credit",
    "md.close":"Close",
    "ceo.badge":"Blockbusters",
    "ceo.name":'Sansern Pokesombat <span class="o">"Jern"</span>',
    "ceo.role":"Founder & Managing Director — Dubbing Director",
    "ceo.quote":'"My goal is simple: to help elevate our dubbing quality to the international stage."',
    "ceo.bio":"With over two decades in Thailand's localization industry as both dubbing director and voice actor, he has directed more than 300 blockbuster movies while dedicating himself to supporting new talent — believing in natural delivery and the right local nuances that make stories feel real.",
    "ceo.ch1":"Stage Actor","ceo.ch2":"Voice Artist & Vocalist","ceo.ch3":"DJ","ceo.ch4":"Dubbing Director","ceo.ch5":"Content Creator","ceo.ch6":"Studio Owner",
    "ceo.f3t":"Social",
    "ceo.workslink":"See all directing credits",
    "cw.title":'The CEO\'s <span class="o">directing credits</span>',
    "cw.sub":"Titles Mr. Sansern Pokesombat directed for other studios and distributors — listed separately from CHAOR MA KOK's own studio productions.",
    "cw.g1":"Movies","cw.g2":"Series","cw.g3":"Animation & Documentary",
    "tl.title":'Dubbing directing credits, <span class="o">year by year</span>',
    "pc.title":'From original script to Thai voice <span class="o">in 4 steps</span>',
    "pc1.t":"Translate & Adapt","pc1.d":"A team of more than 50 specialist translators adapts every line for natural delivery and accurate lip-sync.",
    "pc2.t":"Cast the Voices","pc2.d":"We match each character from a roster of more than 300 professional voice artists.",
    "pc3.t":"Record","pc3.d":"Recording in 4 treated studios with a dubbing director supervising every step in detail.",
    "pc4.t":"Mix & Deliver","pc4.d":"Edited and mixed in 2.0 and 5.1 to platform spec, QC-checked, always on time.",
    "sc.title":'Your content is <span class="o">always safe</span>',
    "sc.sub":"We protect pre-release material with studio-grade security measures across the entire facility.",
    "sc1.t":"36 CCTV Cameras","sc1.d":"Operating 24/7, covering every area around the studio.",
    "sc2.t":"Keycard Entry","sc2.d":"Only authorized CMK staff are permitted to access the studio area.",
    "sc3.t":"Sensors & Alarms","sc3.d":"Motion sensors, sprinklers and security alarms — fully installed and functional.",
    "pv.a.title":'A Thai dubbing studio<br><span class="o">since 2001</span>',
    "pv.a.sub":"Founded by Mr. Sansern Pokesombat — full-service Thai dubbing, editing and mixing, delivered by a professional team in world-class studios.",
    "pv.a.vd":"Our vision — giving lives and souls to every story for Thai audiences.",
    "pv.a.btn":"Explore the studio",
    "pv.c.f1":"Blockbuster movies","pv.c.f2":"Years in dubbing","pv.c.f3":"Dubbing director",
    "pv.c.btn":"View full profile",
    "cta.t":"Ready to start a project with us?",
    "cta.d":"Send us the details — we reply within 24 hours.",
    "cta.btn":"Contact the Studio",
    "ct.title":"Have a project? Let's talk.",
    "ct.sub":"Send us the material, runtime and deadline — we'll reply with a quote within 24 hours.",
    "ct.mailbtn":"Email Us","ct.telbtn":"Call the Office",
    "ct.addr.t":"Studio Address","ct.addr.d":"193/1 Somdet Phra Chao Taksin 9/3, Samre, Thonburi, Bangkok 10600, Thailand",
    "ct.map":"Open in Google Maps",
    "ct.tel.t":"Office Phone","ct.mail.t":"Email","ct.social.t":"Social Media",
    ft:"We bring movies to life."
  }
};

function setLang(l){
  const dict = I18N[l];
  if(!dict) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if(dict[k] !== undefined) el.textContent = dict[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if(dict[k] !== undefined) el.innerHTML = dict[k];
  });
  // poster tags are data-driven, not markup-driven
  document.querySelectorAll('.poster .tag[data-tag]').forEach(el => {
    const k = 'cat.' + el.getAttribute('data-tag');
    if(dict[k] !== undefined) el.textContent = dict[k];
  });
  document.documentElement.lang = l;
  document.getElementById('btn-th')?.classList.toggle('on', l === 'th');
  document.getElementById('btn-en')?.classList.toggle('on', l === 'en');
  try{ localStorage.setItem('cmk-lang', l); }catch(e){}
}

/* apply saved language on load (always run once so data-driven tags fill in) */
(function(){
  let saved = 'th';
  try{ saved = localStorage.getItem('cmk-lang') || 'th'; }catch(e){}
  setLang(saved);
})();
