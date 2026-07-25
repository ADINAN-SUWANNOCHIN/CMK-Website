/* CHAOR MA KOK — shared scripts (posters, effects, i18n) */

/* ---------- real credits (posters extracted from the company profile) ---------- */
const POSTERS = [
  // first 14 feed the 3D drum
  {en:"Avatar: The Way of Water",            tag:"Film",      img:"avatar-2.jpg"},
  {en:"Black Panther: Wakanda Forever",      tag:"Film",      img:"wakanda-forever.jpg"},
  {en:"Guardians of the Galaxy Vol. 3",      tag:"Film",      img:"guardians-3.jpg"},
  {en:"Mission: Impossible – Dead Reckoning",tag:"Film",      img:"mission-impossible.jpg"},
  {en:"Indiana Jones and the Dial of Destiny",tag:"Film",     img:"indiana-jones.jpg"},
  {en:"Fast X",                              tag:"Film",      img:"fast-x.jpg"},
  {en:"Thor: Love and Thunder",              tag:"Film",      img:"thor-4.jpg"},
  {en:"Spider-Man: Far From Home",           tag:"Film",      img:"spiderman-ffh.jpg"},
  {en:"Venom: Let There Be Carnage",         tag:"Film",      img:"venom-2.jpg"},
  {en:"Transformers: Rise of the Beasts",    tag:"Film",      img:"transformers.jpg"},
  {en:"Goblin",                              tag:"Series",    img:"goblin.jpg"},
  {en:"Hotel Del Luna",                      tag:"Series",    img:"hotel-del-luna.jpg"},
  {en:"Vincenzo",                            tag:"Series",    img:"vincenzo.jpg"},
  {en:"Tekken: Bloodline",                   tag:"Animation", img:"tekken.jpg"},
  // more films
  {en:"Doctor Strange in the Multiverse of Madness",tag:"Film",img:"doctor-strange-2.jpg"},
  {en:"Ant-Man and the Wasp: Quantumania",   tag:"Film",      img:"quantumania.jpg"},
  {en:"The Boogeyman",                       tag:"Film",      img:"boogeyman.jpg"},
  {en:"The Creator",                         tag:"Film",      img:"the-creator.jpg"},
  {en:"Jung_E",                              tag:"Film",      img:"jung-e.jpg"},
  {en:"The Menu",                            tag:"Film",      img:"the-menu.jpg"},
  {en:"Sonic the Hedgehog",                  tag:"Film",      img:"sonic.jpg"},
  {en:"Fantasy Island",                      tag:"Film",      img:"fantasy-island.jpg"},
  {en:"Bad Boys for Life",                   tag:"Film",      img:"bad-boys-for-life.jpg"},
  {en:"Wonder Woman 1984",                   tag:"Film",      img:"ww84.jpg"},
  {en:"Monster Hunter",                      tag:"Film",      img:"monster-hunter.jpg"},
  // more series
  {en:"From Me to You",                      tag:"Series",    img:"from-me-to-you.jpg"},
  {en:"The Makanai: Cooking for the Maiko House",tag:"Series",img:"makanai.jpg"},
  {en:"The Night Agent",                     tag:"Series",    img:"night-agent.jpg"},
  {en:"Sanctuary",                           tag:"Series",    img:"sanctuary.jpg"},
  {en:"Mr. Midnight: Beware the Monsters",   tag:"Series",    img:"mr-midnight.jpg"},
  {en:"Big Mouth",                           tag:"Series",    img:"big-mouth.jpg"},
  {en:"The Penthouse: War in Life",          tag:"Series",    img:"penthouse.jpg"},
  {en:"Link: Eat, Love, Kill",               tag:"Series",    img:"link.jpg"},
  // animation & documentaries
  {en:"Kitti Katz",                          tag:"Animation", img:"kitti-katz.jpg"},
  {en:"Clifford the Big Red Dog",            tag:"Animation", img:"clifford.jpg"},
  {en:"Spirit Rangers",                      tag:"Animation", img:"spirit-rangers.jpg"},
  {en:"Phineas and Ferb",                    tag:"Animation", img:"phineas-ferb.jpg"},
  {en:"Kim Possible",                        tag:"Animation", img:"kim-possible.jpg"},
  {en:"Bluey",                               tag:"Animation", img:"bluey.jpg"},
  {en:"American Dragon: Jake Long",          tag:"Animation", img:"jake-long.jpg"},
  {en:"Bananas in Pyjamas",                  tag:"Animation", img:"bananas.jpg"},
  {en:"America the Beautiful",               tag:"Docu",      img:"america-beautiful.jpg"},
  {en:"Chasing Waves",                       tag:"Docu",      img:"chasing-waves.jpg"},
];

function posterEl(p){
  const d = document.createElement('div');
  d.className = 'poster';
  const art = p.img
    ? `<img class="ph" src="assets/${p.img}" alt="${p.en}">`
    : `<div class="art ${p.art}"></div>`;
  // No studio credit line here: some titles were directed by the CEO but
  // recorded elsewhere, so a blanket "dubbed by" claim would overstate it.
  d.innerHTML = `${art}
    <span class="tag">${p.tag}</span><span class="mk">CM</span>
    <div class="tt"><b>${p.en}</b></div>`;
  d.setAttribute('title', p.en);
  return d;
}

/* ---------- 3D drum (index hero) ---------- */
(function(){
  const ring = document.getElementById('ring');
  if(!ring) return;
  const N = 14, W = 170;
  const R = Math.round(W / (2 * Math.tan(Math.PI / N))) + 26;
  for (let i = 0; i < N; i++){
    const card = document.createElement('div');
    card.className = 'card3d';
    card.style.transform = `rotateY(${(360/N)*i}deg) translateZ(${R}px)`;
    const p = posterEl(POSTERS[i % POSTERS.length]);
    p.style.borderRadius = '10px';
    card.appendChild(p);
    ring.appendChild(card);
  }
})();

/* ---------- marquee walls (duplicate for seamless loop) ---------- */
(function(){
  const r1 = document.getElementById('row1');
  const r2 = document.getElementById('row2');
  if(!r1 || !r2) return;
  const films = POSTERS.filter(p => p.tag === 'Film');
  const shows = POSTERS.filter(p => p.tag !== 'Film');
  [films, films].flat().forEach(p => r1.appendChild(posterEl(p)));
  [shows, shows].flat().forEach(p => r2.appendChild(posterEl(p)));
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
    "nav.home":"หน้าแรก", "nav.about":"เกี่ยวกับเรา", "nav.services":"บริการ", "nav.works":"ผลงาน", "nav.ceo":"ผู้บริหาร", "nav.process":"ขั้นตอน", "nav.contact":"ติดต่อ", "nav.cta":"ขอใบเสนอราคา",
    "hero.title":'เสียงที่ทำให้<br>ทุกเรื่องราว <span class="o">มีชีวิต</span>',
    "hero.sub":"สตูดิโอพากย์เสียงครบวงจรตั้งแต่ปี 2001 — ภาพยนตร์ ซีรีส์ แอนิเมชัน สารคดี และงานร้อง ด้วยทีมนักพากย์มืออาชีพกว่า 250 ชีวิต บนมาตรฐานเสียงระดับเวิลด์คลาส (2.0 / 5.1 / Dolby Atmos)",
    "hero.cta1":"ดูผลงานของเรา", "hero.cta2":"ติดต่อสตูดิโอ",
    stat1:"ภาพยนตร์ที่พากย์", stat2:"ตอนซีรีส์ จาก 1,000+ เรื่อง", stat3:"นักพากย์มืออาชีพ", stat4:"ปีในวงการ (ตั้งแต่ 2001)",
    hint:"— ผลงานหมุนอยู่ · แตะเพื่อหยุด —",
    "ab.title":'รู้จัก <span class="o">CHAOR MA KOK</span>',
    "ab.story":"CHAOR MA KOK อยู่ในธุรกิจบันเทิงมาตั้งแต่ปี 2001 ก่อตั้งโดยคุณสรรเสริญ โภคสมบัติ ให้บริการพากย์เสียง ตัดต่อ และมิกซ์เสียงภาษาไทย ครอบคลุมภาพยนตร์ โทรทัศน์ งานร้อง ซีรีส์ และการ์ตูนซีรีส์",
    "ab.vq":'"Every movie has a life. Every character has a soul."',
    "ab.vd":"วิสัยทัศน์ของเรา — การพากย์คือการมอบชีวิตและจิตวิญญาณให้ทุกเรื่องราวเพื่อผู้ชมชาวไทย เราใส่ใจและพิถีพิถันในทุกรายละเอียดของงานพากย์",
    "ab.dirt":"DUBBING DIRECTORS —",
    "ab.m1t":"มาตรฐานระดับโลก","ab.m1d":"ทำงานด้วยมาตรฐานเดียวกับสตูดิโอระดับโลก ทั้งระบบ 2.0 / 5.1 / Dolby Atmos",
    "ab.m2t":"สร้างมืออาชีพ","ab.m2d":"บ่มเพาะผู้กำกับการพากย์และนักพากย์มืออาชีพรุ่นใหม่ให้วงการ",
    "ab.m3t":"ทุกรุ่นมีเวที","ab.m3d":"ดึงศักยภาพนักพากย์รุ่นใหญ่อย่างให้เกียรติ ควบคู่การเปิดโอกาสให้นักพากย์รุ่นเยาว์อย่างต่อเนื่อง",
    "ab.m4t":"เทคโนโลยีล้ำสมัย","ab.m4d":"ใช้เทคโนโลยีระดับแนวหน้าเพื่องานตัดต่อและมิกซ์เสียงคุณภาพสูงสุด",
    "ab.n1":"นักพากย์มืออาชีพ","ab.n2":"ผู้กำกับการพากย์","ab.n3":"นักแปลหลายภาษา","ab.n4":"ทีมงานร้อง (Vocal)",
    "ab.n5":"สตูดิโอบันทึกเสียง","ab.n6":"ห้องตัดต่อ + ห้องมิกซ์","ab.n7":"ตอนแอนิเมชัน & สารคดี","ab.n8":"ชั่วโมงพากย์ต่อปี",
    "sv.title":'เราพากย์<span class="o">ทุกอย่าง</span>ที่มีเสียง',
    "sv.sub":"ตั้งแต่บล็อกบัสเตอร์ฮอลลีวูดจนถึงการ์ตูนซีรีส์ เราดูแลครบวงจร — แปลบท กำกับการพากย์ บันทึกเสียง ตัดต่อ จนถึงมิกซ์ขั้นสุดท้าย",
    "sv1.t":"พากย์ภาพยนตร์","sv1.d":"พากย์ไทยหนังโรงและสตรีมมิงกว่า 200 เรื่อง มาตรฐานเสียงระดับโรงภาพยนตร์ 2.0 / 5.1 / Dolby Atmos",
    "sv2.t":"พากย์ซีรีส์","sv2.d":"ประสบการณ์กว่า 1,000 เรื่อง 20,000+ ตอน คุมโทนเสียงตัวละครให้สม่ำเสมอ ส่งงานทันออนแอร์ทุกแพลตฟอร์ม",
    "sv3.t":"แอนิเมชัน & การ์ตูนซีรีส์","sv3.d":"พากย์การ์ตูนและแอนิเมชันมาแล้วกว่า 10,000 ตอน เข้าใจคาแรกเตอร์ จังหวะ และงานลิปซิงก์ที่เนียนสนิท",
    "sv4.t":"สารคดี & รายการทีวี","sv4.d":"เสียงบรรยายสารคดีและรายการโทรทัศน์ ด้วยน้ำเสียงที่น่าเชื่อถือและเป็นธรรมชาติ",
    "sv5.t":"งานร้อง (Vocal)","sv5.d":"ทีมนักร้องประจำสตูดิโอ 2 ทีม สำหรับเพลงประกอบภาพยนตร์ การ์ตูน และงานร้องทุกรูปแบบ",
    "sv6.t":"ตัดต่อ & มิกซ์เสียง","sv6.d":"ห้องตัดต่อ 3 ห้อง ห้องมิกซ์ 2 ห้อง พร้อมเทคโนโลยีล่าสุด มิกซ์ตามสเปกทุกแพลตฟอร์ม ผ่าน QC ทุกไฟล์",
    "wk.title":'ผลงานที่<span class="o">ผ่านมือเรา</span>',
    "wk.sub":"ผลงานจริงบางส่วนที่สตูดิโอเราดูแล — จากหนังฟอร์มยักษ์ฮอลลีวูด ซีรีส์ดังจากทุกชาติ ถึงแอนิเมชันขวัญใจทั้งบ้าน",
    "wk.note":"* แสดงผลงานเพียงบางส่วน — ภาพโปสเตอร์เป็นลิขสิทธิ์ของสตูดิโอ/ผู้จัดจำหน่ายแต่ละราย ใช้เพื่อบันทึกประวัติผลงานเท่านั้น",
    "sp.sub":"กำกับการพากย์เสียงเวอร์ชันพิเศษ โดยเหล่าดาราและศิลปินแถวหน้าของไทยมารับบทตัวละครหลักของซีรีส์ระดับโลก",
    "sp.c1":"มาริโอ้ เมาเร่อ","sp.c2":"แบงค์ ปรีติ","sp.c3":"บี น้ำทิพย์","sp.c4":"เพลง ชนม์ทิดา","sp.c5":"ตู่ นันทิดา","sp.c6":"พลอยชมพู",
    "ceo.badge":"Blockbusters",
    "ceo.name":'สรรเสริญ โภคสมบัติ <span class="o">"เจิ๋น"</span>',
    "ceo.role":"ผู้ก่อตั้ง & กรรมการผู้จัดการ — ผู้กำกับการพากย์อันดับ 1 ของประเทศไทย",
    "ceo.quote":'"เป้าหมายของผมเรียบง่าย — ยกระดับคุณภาพงานพากย์ไทยสู่เวทีสากล"',
    "ceo.bio":"กว่าสองทศวรรษในวงการโลคัลไลเซชันไทย ทั้งในบทบาทผู้กำกับการพากย์และนักพากย์ ผ่านงานภาพยนตร์บล็อกบัสเตอร์มาแล้วกว่า 400 เรื่อง พร้อมทุ่มเทปั้นนักพากย์รุ่นใหม่ให้วงการ ด้วยความเชื่อในเสียงพากย์ที่เป็นธรรมชาติและเก็บรายละเอียดท้องถิ่นได้อย่างแนบเนียน",
    "ceo.ch1":"นักแสดงละครเวที","ceo.ch2":"นักพากย์ & นักร้อง","ceo.ch3":"ดีเจ","ceo.ch4":"ผู้กำกับการพากย์บริหาร","ceo.ch5":"คอนเทนต์ครีเอเตอร์","ceo.ch6":"ครูสอนพากย์","ceo.ch7":"เจ้าของสตูดิโอ",
    "ceo.f1t":"เกิด","ceo.f1d":"28 พฤศจิกายน 1968 · กรุงเทพมหานคร",
    "ceo.f2t":"การศึกษา","ceo.f2d":"นิเทศศาสตร์ มหาวิทยาลัยกรุงเทพ · ร.ร.สวนกุหลาบวิทยาลัย · ร.ร.จินดามณี",
    "ceo.f3t":"โซเชียล",
    "tl.title":'ผลงานกำกับการพากย์<span class="o">ปีต่อปี</span>',
    "pc.title":'จากบทต้นฉบับ สู่เสียงไทย<span class="o">ใน 4 ขั้นตอน</span>',
    "pc1.t":"แปล & ปรับบท","pc1.d":"แปลบทโดยทีมนักแปลเฉพาะทางกว่า 50 คน ปรับสำนวนให้เข้าปากและตรงลิปซิงก์",
    "pc2.t":"แคสต์นักพากย์","pc2.d":"คัดเสียงที่ใช่จากทีมนักพากย์กว่า 250 คน ให้ตรงคาแรกเตอร์ที่สุด",
    "pc3.t":"บันทึกเสียง","pc3.d":"อัดเสียงใน 4 สตูดิโอมาตรฐาน พร้อมผู้กำกับการพากย์คุมทุกเทกอย่างละเอียด",
    "pc4.t":"มิกซ์ & ส่งมอบ","pc4.d":"ตัดต่อและมิกซ์ 2.0 / 5.1 / Atmos ตามสเปกแพลตฟอร์ม ผ่าน QC แล้วส่งมอบตรงเวลาเสมอ",
    "sc.title":'คอนเทนต์ของคุณ<span class="o">ปลอดภัยเสมอ</span>',
    "sc.sub":"เราดูแลไฟล์งานก่อนฉายด้วยมาตรการความปลอดภัยรอบสตูดิโอแบบเดียวกับสตูดิโอระดับโลก",
    "sc1.t":"กล้อง CCTV 36 ตัว","sc1.d":"บันทึกภาพตลอด 24 ชั่วโมงทุกวัน ครอบคลุมทุกพื้นที่โดยรอบสตูดิโอ",
    "sc2.t":"ระบบคีย์การ์ด","sc2.d":"เข้าพื้นที่สตูดิโอได้เฉพาะพนักงาน CMK ที่ได้รับอนุญาตเท่านั้น",
    "sc3.t":"เซนเซอร์ & ระบบเตือนภัย","sc3.d":"Motion sensor สปริงเกอร์ดับเพลิง และสัญญาณกันขโมย ติดตั้งครบและพร้อมใช้งานเสมอ",
    "pv.a.title":'สตูดิโอพากย์ไทย<br><span class="o">ตั้งแต่ปี 2001</span>',
    "pv.a.sub":"ก่อตั้งโดยคุณสรรเสริญ โภคสมบัติ ให้บริการพากย์เสียง ตัดต่อ และมิกซ์เสียงภาษาไทยครบวงจร ด้วยทีมงานมืออาชีพและสตูดิโอมาตรฐานระดับโลก",
    "pv.a.vd":"วิสัยทัศน์ของเรา — มอบชีวิตและจิตวิญญาณให้ทุกเรื่องราวเพื่อผู้ชมชาวไทย",
    "pv.a.btn":"ดูเรื่องราวของเรา",
    "pv.c.f1":"ภาพยนตร์บล็อกบัสเตอร์","pv.c.f2":"ปีในวงการพากย์","pv.c.f3":"ผู้กำกับการพากย์ของไทย",
    "pv.c.btn":"ดูโปรไฟล์เต็ม",
    "cta.t":"พร้อมเริ่มโปรเจกต์กับเราไหม?",
    "cta.d":"ส่งรายละเอียดงานมาคุยกันได้เลย — เราตอบกลับภายใน 24 ชั่วโมง",
    "cta.btn":"ติดต่อสตูดิโอ",
    "ct.title":"มีโปรเจกต์ในมือ? คุยกับเราได้เลย",
    "ct.sub":"ส่งรายละเอียดงาน ความยาว และกำหนดส่ง แล้วเราจะตอบกลับพร้อมใบเสนอราคาภายใน 24 ชั่วโมง",
    "ct.mailbtn":"ส่งอีเมลหาเรา","ct.telbtn":"โทรเลย",
    "ct.addr.t":"ที่อยู่สตูดิโอ","ct.addr.d":"193/1 ซอยสมเด็จพระเจ้าตากสิน 9/3 แขวงสำเหร่ เขตธนบุรี กรุงเทพฯ 10600",
    "ct.tel.t":"โทรศัพท์","ct.mail.t":"อีเมล","ct.web.t":"เว็บไซต์ & โซเชียล",
    ft:"เราทำให้หนังมีชีวิต — We bring movies to life."
  },
  en: {
    brandsub:"DUBBING STUDIO · SINCE 2001",
    "nav.home":"Home", "nav.about":"About", "nav.services":"Services", "nav.works":"Our Work", "nav.ceo":"Meet the CEO", "nav.process":"Workflow", "nav.contact":"Contact", "nav.cta":"Get a Quote",
    // Line breaks are tuned to the 588px hero column: at the clamped display
    // size each line must stay under it, or the headline wraps to 4 lines and
    // pushes the hero past the viewport (Thai is short enough to be safe).
    "hero.title":'We bring every<br>story <span class="o">to life</span>',
    "hero.sub":"A full-service Thai dubbing studio since 2001 — films, series, animation, documentaries and vocal work, powered by 250+ professional voice artists and world-class sound standards (2.0 / 5.1 / Dolby Atmos).",
    "hero.cta1":"See Our Work", "hero.cta2":"Contact the Studio",
    // Kept short so the four stats stay on one row inside the hero column
    // (the fuller figures live in the services and about copy).
    stat1:"Movies dubbed", stat2:"Series episodes", stat3:"Voice artists", stat4:"Years in the industry",
    hint:"— Live showreel · hover to pause —",
    "ab.title":'About <span class="o">CHAOR MA KOK</span>',
    "ab.story":"Chaor Ma Kok has been in the entertainment business since 2001, established by Mr. Sansern Pokesombat. We provide Thai sound dubbing, editing and mixing for motion pictures, television, vocal work, series and cartoon series.",
    "ab.vq":'"Every movie has a life. Every character has a soul."',
    "ab.vd":"Our vision — dubbing gives lives and souls to movies for Thai audiences. We pay attention and focus on every detail of our dubbing.",
    "ab.dirt":"DUBBING DIRECTORS —",
    "ab.m1t":"World-class standard","ab.m1d":"We work to the standard of world-class studios — 2.0 / 5.1 / Dolby Atmos.",
    "ab.m2t":"Grow professionals","ab.m2d":"We cultivate professional dubbing directors and voice actors for the industry.",
    "ab.m3t":"Every generation","ab.m3d":"We respectfully maximize senior voice artists while consistently bringing in junior talent.",
    "ab.m4t":"Cutting-edge tech","ab.m4d":"We keep the cutting edge of technology for high-quality sound editing and mixing.",
    "ab.n1":"Professional voice artists","ab.n2":"Dubbing directors","ab.n3":"Multi-language translators","ab.n4":"Vocal teams",
    "ab.n5":"Recording studios","ab.n6":"Editing + mixing rooms","ab.n7":"Animation & docu episodes","ab.n8":"Dubbing hours per year",
    "sv.title":'We dub <span class="o">everything</span> that speaks',
    "sv.sub":"From Hollywood blockbusters to cartoon series — we handle the full chain: script adaptation, voice direction, recording, editing and the final mix.",
    "sv1.t":"Film Dubbing","sv1.d":"Thai dubbing for 200+ theatrical and streaming releases, mixed to cinema standards — 2.0 / 5.1 / Dolby Atmos.",
    "sv2.t":"Series Dubbing","sv2.d":"1,000+ shows and 20,000+ episodes of experience, with consistent character voices delivered on schedule for every platform.",
    "sv3.t":"Animation & Cartoon Series","sv3.d":"Over 10,000 episodes of cartoons and animation dubbed — with character insight, timing and seamless lip-sync.",
    "sv4.t":"Documentary & TV","sv4.d":"Narration for documentaries and television programs, delivered with a credible, natural tone.",
    "sv5.t":"Vocal","sv5.d":"Two in-house vocal teams for movie and cartoon theme songs and every kind of singing work.",
    "sv6.t":"Editing & Mixing","sv6.d":"3 editing rooms and 2 mixing rooms with the latest technology — platform-spec mixes, QC-checked on every file.",
    "wk.title":'Work that <span class="o">passed through us</span>',
    "wk.sub":"A selection of real credits our studio has handled — Hollywood tentpoles, hit series from every country, and family-favorite animation.",
    "wk.note":"* A partial list of credits. Posters are the property of their respective studios/distributors, shown as a portfolio record only.",
    "sp.sub":"Directing the special Thai dub featuring Thailand's leading celebrities and artists as the main cast of the global hit series.",
    "sp.c1":"Mario Maurer","sp.c2":"Bank Preeti","sp.c3":"Bee Namthip","sp.c4":"Pleng Chontida","sp.c5":"Tu Nantida","sp.c6":"Ploychompoo",
    "ceo.badge":"Blockbusters",
    "ceo.name":'Sansern Pokesombat <span class="o">"Jern"</span>',
    "ceo.role":"Founder & Managing Director — Thailand's No.1 Dubbing Director",
    "ceo.quote":'"My goal is simple: to help elevate our dubbing quality to the international stage."',
    "ceo.bio":"With over two decades in Thailand's localization industry as both dubbing director and voice actor, he has directed 400+ blockbuster movies while dedicating himself to supporting new talent — believing in natural delivery and the right local nuances that make stories feel real.",
    "ceo.ch1":"Stage Actor","ceo.ch2":"Voice Artist & Vocalist","ceo.ch3":"DJ","ceo.ch4":"Executive Dubbing Director","ceo.ch5":"Content Creator","ceo.ch6":"Dubbing Teacher","ceo.ch7":"Studio Owner",
    "ceo.f1t":"Born","ceo.f1d":"November 28, 1968 · Bangkok, Thailand",
    "ceo.f2t":"Education","ceo.f2d":"B.A. Communication Arts, Bangkok University · Suankularb Wittayalai School · Jindamanee School",
    "ceo.f3t":"Social",
    "tl.title":'Dubbing directing credits, <span class="o">year by year</span>',
    "pc.title":'From original script to Thai voice <span class="o">in 4 steps</span>',
    "pc1.t":"Translate & Adapt","pc1.d":"A team of 50+ specialist translators adapts every line for natural delivery and accurate lip-sync.",
    "pc2.t":"Cast the Voices","pc2.d":"We match each character from a roster of 250 professional voice artists.",
    "pc3.t":"Record","pc3.d":"Sessions in 4 treated studios with a dubbing director supervising every take.",
    "pc4.t":"Mix & Deliver","pc4.d":"Edited and mixed in 2.0 / 5.1 / Atmos to platform spec, QC-checked, always on time.",
    "sc.title":'Your content is <span class="o">always safe</span>',
    "sc.sub":"We protect pre-release material with studio-grade security measures across the entire facility.",
    "sc1.t":"36 CCTV Cameras","sc1.d":"Operating 24/7, covering every area around the studio.",
    "sc2.t":"Keycard Entry","sc2.d":"Only authorized CMK staff are permitted to access the studio area.",
    "sc3.t":"Sensors & Alarms","sc3.d":"Motion sensors, sprinklers and security alarms — fully installed and functional.",
    "pv.a.title":'A Thai dubbing studio<br><span class="o">since 2001</span>',
    "pv.a.sub":"Founded by Mr. Sansern Pokesombat — full-service Thai dubbing, editing and mixing, delivered by a professional team in world-class studios.",
    "pv.a.vd":"Our vision — giving lives and souls to every story for Thai audiences.",
    "pv.a.btn":"Explore the studio",
    "pv.c.f1":"Blockbuster movies","pv.c.f2":"Years in dubbing","pv.c.f3":"Dubbing director in Thailand",
    "pv.c.btn":"View full profile",
    "cta.t":"Ready to start a project with us?",
    "cta.d":"Send us the details — we reply within 24 hours.",
    "cta.btn":"Contact the Studio",
    "ct.title":"Have a project? Let's talk.",
    "ct.sub":"Send us the material, runtime and deadline — we'll reply with a quote within 24 hours.",
    "ct.mailbtn":"Email Us","ct.telbtn":"Call Now",
    "ct.addr.t":"Studio Address","ct.addr.d":"193/1 Somdet Phra Chao Taksin 9/3, Samre, Thonburi, Bangkok 10600, Thailand",
    "ct.tel.t":"Phone","ct.mail.t":"Email","ct.web.t":"Website & Social",
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
  document.documentElement.lang = l;
  document.getElementById('btn-th')?.classList.toggle('on', l === 'th');
  document.getElementById('btn-en')?.classList.toggle('on', l === 'en');
  try{ localStorage.setItem('cmk-lang', l); }catch(e){}
}

/* apply saved language on load */
(function(){
  let saved = 'th';
  try{ saved = localStorage.getItem('cmk-lang') || 'th'; }catch(e){}
  if(saved !== 'th') setLang(saved);
})();
