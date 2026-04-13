
// ---- EMAILJS INIT ----
emailjs.init('aiSn66a-RzGBv65hn');

// ---- PROTECTION ----
document.addEventListener('contextmenu', e => { e.preventDefault(); e.stopPropagation(); return false; }, true);
document.addEventListener('selectstart', e => { e.preventDefault(); return false; }, true);
document.addEventListener('dragstart', e => { e.preventDefault(); return false; }, true);
window.addEventListener('contextmenu', e => { e.preventDefault(); e.stopPropagation(); return false; }, true);

// ---- DATA ----
const DATA = {
  mariage:[
    {u:'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',l:'Château de la Loire · 2024'},
    {u:'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',l:'Provence · 2024'},
    {u:'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80',l:'Bordeaux · 2023'},
    {u:'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80',l:'Nice · 2024'},
    {u:'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',l:'Lyon · 2023'},
    {u:'https://images.unsplash.com/photo-1561656735-33f319d977f3?auto=format&fit=crop&w=600&q=80',l:'Normandie · 2024'},
    {u:'https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=600&q=80',l:'Alsace · 2024'},
    {u:'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80',l:'Côte d\'Azur · 2023'},
    {u:'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=600&q=80',l:'Paris · 2024'},
    {u:'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=600&q=80',l:'Dordogne · 2024'},
  ],
  couple:[
    {u:'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80',l:'Provence · 2024'},
    {u:'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=600&q=80',l:'Paris · 2024'},
    {u:'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=600&q=80',l:'Loire · 2024'},
    {u:'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=600&q=80',l:'Alpes · 2024'},
    {u:'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80',l:'Bretagne · 2024'},
    {u:'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',l:'Normandie · 2023'},
    {u:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',l:'Paris · 2024'},
    {u:'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=600&q=80',l:'Midi · 2024'},
    {u:'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&w=600&q=80',l:'Alsace · 2023'},
    {u:'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=600&q=80',l:'Bordeaux · 2023'},
  ],
  ceremonie:[
    {u:'https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&w=600&q=80',l:'Paris · 2024'},
    {u:'https://images.unsplash.com/photo-1504438190342-5951e134ffee?auto=format&fit=crop&w=600&q=80',l:'Provence · 2024'},
    {u:'https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=600&q=80',l:'Loire · 2024'},
    {u:'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=600&q=80',l:'Nice · 2023'},
    {u:'https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?auto=format&fit=crop&w=600&q=80',l:'Bordeaux · 2024'},
    {u:'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=600&q=80',l:'Lyon · 2024'},
    {u:'https://images.unsplash.com/photo-1551620628-b73b0dce6c55?auto=format&fit=crop&w=600&q=80',l:'Bretagne · 2023'},
    {u:'https://images.unsplash.com/photo-1601135148271-a0a0d608ab69?auto=format&fit=crop&w=600&q=80',l:'Côte d\'Azur · 2024'},
    {u:'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=600&q=80',l:'Alsace · 2024'},
    {u:'https://images.unsplash.com/photo-1542729779-11d2c1d26c6a?auto=format&fit=crop&w=600&q=80',l:'Normandie · 2024'},
  ]
};

// ---- LIGHTBOX ----
let lbPhotos=[], lbIdx=0;
function openLB(arr,i){lbPhotos=arr;lbIdx=i;updLB();document.getElementById('lightbox').classList.add('active');document.body.style.overflow='hidden';}
function updLB(){const p=lbPhotos[lbIdx];document.getElementById('lb-img').src=p.u;document.getElementById('lb-cnt').textContent=(lbIdx+1)+' / '+lbPhotos.length;}
function lbNav(d){lbIdx=(lbIdx+d+lbPhotos.length)%lbPhotos.length;updLB();}
function closeLB(){document.getElementById('lightbox').classList.remove('active');document.body.style.overflow='';}
document.getElementById('lightbox').addEventListener('click',e=>{if(e.target===e.currentTarget)closeLB();});
document.addEventListener('keydown',e=>{if(!document.getElementById('lightbox').classList.contains('active'))return;if(e.key==='ArrowRight')lbNav(1);if(e.key==='ArrowLeft')lbNav(-1);if(e.key==='Escape')closeLB();});

// ---- BUILD MASONRY ----
function buildMasonry(id,cat){
  const el=document.getElementById(id);el.innerHTML='';
  DATA[cat].forEach((p,i)=>{
    const d=document.createElement('div');d.className='m-item';
    const alt=p.a||p.l;
    d.innerHTML='<img src="'+p.u+'" alt="'+alt+'" loading="lazy" title="'+alt+'" decoding="async"><div class="m-ov"><span class="m-lbl">'+p.l+'</span></div>';
    d.addEventListener('click',()=>openLB(DATA[cat],i));
    el.appendChild(d);
  });
}

// ---- PREVIEW GRID ----
function buildPrev(cat){
  const el=document.getElementById('prevGrid');el.innerHTML='';
  DATA[cat].slice(0,4).forEach((p,i)=>{
    const d=document.createElement('div');d.className='photo-card';
    const alt=p.a||p.l;
    d.innerHTML='<img src="'+p.u+'" alt="'+alt+'" loading="lazy" title="'+alt+'" decoding="async"><div class="photo-card-ov"><span class="photo-lbl">'+p.l+'</span></div>';
    d.addEventListener('click',()=>openLB(DATA[cat],i));
    el.appendChild(d);
  });
}
function filterPrev(cat,btn){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');buildPrev(cat);
}

// ---- GALLERY TABS ----
function switchGal(cat,btn){
  document.querySelectorAll('.gal-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  document.querySelectorAll('.gal-sec').forEach(s=>s.classList.remove('active'));
  document.getElementById('gal-'+cat).classList.add('active');
}

// ---- PAGES ----
function showPage(name, pkg){
  try { document.querySelectorAll('.page').forEach(p=>p.classList.remove('active')); } catch(e){}
  const target = document.getElementById('page-'+name);
  if(target) target.classList.add('active');
  window.scrollTo(0,0);
  const nav=document.getElementById('navbar');
  if(nav) {
    if(name==='home'){nav.classList.remove('solid','scrolled');}
    else{nav.classList.add('solid');nav.classList.remove('scrolled');}
  }
  setTimeout(initReveals,100);
  // Auto-select package if provided
  if(pkg && name==='booking'){
    setTimeout(()=>{
      try {
        const items = document.querySelectorAll('.ps-item');
        if(items && items.length) {
          items.forEach(item=>{
            const nameEl = item.querySelector('.ps-name');
            if(!nameEl) return;
            const itemName = nameEl.textContent;
            const match = pkg.includes(itemName);
            item.classList.toggle('sel', match);
            const check = item.querySelector('.ps-check');
            if(check) check.textContent = match ? '✓' : '';
          });
          selPkgName = pkg;
        }
      } catch(e){}
    }, 100);
  }
}
function scrollTo2(id){setTimeout(()=>{const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});},120);}

// ---- BOOKING ----
let selPkgName='Éternité — 2200€';
function selPkg(el,name){
  selPkgName=name;
  document.querySelectorAll('.ps-item').forEach(p=>{p.classList.remove('sel');const c=p.querySelector('.ps-check');if(c)c.textContent='';});
  el.classList.add('sel');el.querySelector('.ps-check').textContent='✓';
}
function submitBk(){
  const n = document.getElementById('bkNames').value;
  const e = document.getElementById('bkEmail').value;
  if(!n || !e){ alert('Merci de renseigner votre nom et email.'); return; }
  
  const btn = document.querySelector('.bk-submit');
  btn.textContent = 'Envoi en cours...';
  btn.disabled = true;

  const params = {
    from_name: n,
    from_email: e,
    phone: document.getElementById('bkPhone').value || '',
    wedding_date: document.getElementById('bkDate').value || '',
    package: selPkgName || '',
    venue: document.getElementById('bkVenue').value || '',
    guests: document.getElementById('bkGuests').value || '',
    message: document.getElementById('bkMsg').value || ''
  };

  emailjs.send('service_tsjr244', 'template_zhj2796', params)
    .then(() => {
      document.getElementById('bkForm').style.display = 'none';
      document.getElementById('bkSuccess').classList.add('show');
      window.scrollTo({top: 400, behavior: 'smooth'});
    })
    .catch((err) => {
      btn.textContent = 'Envoyer ma demande de réservation →';
      btn.disabled = false;
      alert('Une erreur est survenue. Merci de réessayer ou de me contacter directement.');
      console.error('EmailJS error:', err);
    });
}

// ---- NAV SCROLL ----
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('navbar');
  if(document.getElementById('page-home').classList.contains('active')){
    nav.classList.toggle('scrolled',window.scrollY>60);
  }
});

// ---- REVEALS ----
function initReveals(){
  const els=document.querySelectorAll('.page.active .reveal');
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.1});
  els.forEach(el=>{el.classList.remove('visible');obs.observe(el);});
}

// ---- CURSOR ----
const cr=document.getElementById('cursor');
let lastPetal=0;

function spawnPetal(x,y,burst=false){
  const p=document.createElement('div');
  p.className='petal'+(burst?' burst':'');
  const angle=Math.random()*360;
  const w=5+Math.random()*7;
  const h=w*1.4+Math.random()*4;
  const op=0.4+Math.random()*0.45;
  const dur=(0.7+Math.random()*0.6)+'s';
  const colors=['rgba(210,40,70,VAR)','rgba(235,80,100,VAR)','rgba(190,20,55,VAR)','rgba(220,60,90,VAR)'];
  const col=colors[Math.floor(Math.random()*colors.length)];
  const ox=(Math.random()-0.5)*18;
  const oy=(Math.random()-0.5)*18;
  let css=`left:${x+ox}px;top:${y+oy}px;width:${w}px;height:${h}px;--r:${angle}deg;--op:${op};--dur:${dur};transform:rotate(${angle}deg);background:radial-gradient(ellipse at 40% 30%,${col.replace('VAR','0.85')},${col.replace('VAR','0.1')});`;
  if(burst){
    const tx=(Math.random()-0.5)*80;
    const ty=(Math.random()-0.5)*80;
    css+=`--tx:${tx}px;--ty:${ty}px;`;
  }
  p.style.cssText=css;
  document.body.appendChild(p);
  setTimeout(()=>p.remove(),1400);
}

document.addEventListener('mousemove',e=>{
  cr.style.left=e.clientX+'px';
  cr.style.top=e.clientY+'px';
  const now=Date.now();
  if(now-lastPetal>40){
    lastPetal=now;
    const count=cr.classList.contains('hovering')?2:1;
    for(let i=0;i<count;i++) spawnPetal(e.clientX,e.clientY);
  }
});

// Click heart burst
document.addEventListener('click',e=>{
  for(let i=0;i<7;i++) spawnHeart(e.clientX,e.clientY);
});

// Multi-touch hearts on mobile
let touchStartY = 0;
let touchMoved = false;

document.addEventListener('touchstart', e=>{
  touchStartY = e.touches[0].clientY;
  touchMoved = false;
  // Spawn hearts immediately on tap start
  Array.from(e.touches).forEach(touch=>{
    for(let i=0;i<5;i++) spawnHeart(touch.clientX, touch.clientY);
  });
},{passive:true});

document.addEventListener('touchmove', e=>{
  // Detect scroll (vertical movement > 10px = scrolling, no hearts)
  const dy = Math.abs(e.touches[0].clientY - touchStartY);
  if(dy > 10){ touchMoved = true; return; }
  const now=Date.now();
  if(now - (window._lastTouch||0) < 80) return;
  window._lastTouch = now;
  Array.from(e.touches).forEach(touch=>{
    spawnHeart(touch.clientX, touch.clientY);
  });
},{passive:true});

function spawnHeart(x,y){
  const h=document.createElement('div');
  h.className='click-heart';
  const angle=(Math.random()-0.5)*55;
  const tx=(Math.random()-0.5)*100;
  const ty=-(25+Math.random()*55);
  const size=12+Math.random()*16;
  const dur=(0.65+Math.random()*0.55)+'s';
  const opacity=0.55+Math.random()*0.4;
  const colors=['rgba(210,40,75','rgba(235,80,110','rgba(190,20,60','rgba(220,100,130'];
  const col=colors[Math.floor(Math.random()*colors.length)];
  h.style.cssText=`left:${x}px;top:${y}px;width:${size}px;height:${size}px;--tx:${tx}px;--ty:${ty}px;--r:${angle}deg;--dur:${dur};`;
  h.innerHTML=`<svg viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><path d="M12 20 C12 20 2 13 2 7 C2 4 4 2 7 2 C9 2 11 3.5 12 5 C13 3.5 15 2 17 2 C20 2 22 4 22 7 C22 13 12 20 12 20 Z" stroke="${col},${opacity})" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>`;
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),1300);
}

// Hovering state
try {
  document.querySelectorAll('a,button,.nav-links a,.nav-cta,.tab-btn,.gal-tab,.photo-card,.m-item,.ps-item,.pkg-btn,.btn-gold,.btn-ghost').forEach(el=>{
    if(!el) return;
    el.addEventListener('mouseenter',()=>{ if(cr) cr.classList.add('hovering'); });
    el.addEventListener('mouseleave',()=>{ if(cr) cr.classList.remove('hovering'); });
  });
} catch(e){}



// ---- CALENDAR ----
let calYear = new Date().getFullYear();
let calMonth = new Date().getMonth();
let calSelected = null;
let takenDates = [];
try { takenDates = JSON.parse(localStorage.getItem('takenDates') || '[]'); } catch(e) { takenDates = []; }

const MONTHS_FR = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

function renderCal() {
  const label = document.getElementById('calMonthLabel');
  const grid = document.getElementById('calGrid');
  if(!label||!grid) return;
  label.textContent = MONTHS_FR[calMonth] + ' ' + calYear;
  grid.innerHTML = '';
  const today = new Date(); today.setHours(0,0,0,0);
  const firstDay = new Date(calYear, calMonth, 1);
  // Monday-first: 0=Mon ... 6=Sun
  let startDow = firstDay.getDay(); // 0=Sun
  startDow = startDow === 0 ? 6 : startDow - 1;
  const daysInMonth = new Date(calYear, calMonth+1, 0).getDate();
  // Empty cells
  for(let i=0;i<startDow;i++){
    const e=document.createElement('div');e.className='cal-cell cal-empty';grid.appendChild(e);
  }
  for(let d=1;d<=daysInMonth;d++){
    const cell=document.createElement('div');
    cell.className='cal-cell';
    cell.textContent=d;
    const dateStr=calYear+'-'+String(calMonth+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    const thisDate=new Date(calYear,calMonth,d);
    if(thisDate < today){ cell.classList.add('cal-past'); }
    else if(takenDates.includes(dateStr)){ cell.classList.add('cal-taken'); }
    else {
      if(dateStr===calSelected) cell.classList.add('cal-selected');
      if(thisDate.getTime()===today.getTime()) cell.classList.add('cal-today');
      cell.addEventListener('click',()=>selectCalDate(dateStr,d));
    }
    grid.appendChild(cell);
  }
}

function selectCalDate(dateStr, day) {
  calSelected = dateStr;
  renderCal();
  const info = document.getElementById('calSelectedInfo');
  const dateEl = document.getElementById('calSelectedDate');
  const [y,m,d2] = dateStr.split('-');
  dateEl.textContent = day + ' ' + MONTHS_FR[parseInt(m)-1] + ' ' + y;
  info.classList.add('show');
  // Auto-fill the date field in the form
  const bkDate = document.getElementById('bkDate');
  if(bkDate) bkDate.value = dateStr;
}

function calNav(dir) {
  calMonth += dir;
  if(calMonth > 11){ calMonth=0; calYear++; }
  if(calMonth < 0){ calMonth=11; calYear--; }
  renderCal();
}

function scrollToForm() {
  document.getElementById('bkForm').scrollIntoView({behavior:'smooth', block:'start'});
}

function addTakenDate() {
  const input = document.getElementById('adminDateInput');
  const val = input.value;
  if(!val || takenDates.includes(val)) return;
  takenDates.push(val);
  try { localStorage.setItem('takenDates', JSON.stringify(takenDates)); } catch(e) {}
  input.value = '';
  renderCal();
  renderTakenList();
}

function removeTakenDate(dateStr) {
  takenDates = takenDates.filter(d=>d!==dateStr);
  try { localStorage.setItem('takenDates', JSON.stringify(takenDates)); } catch(e) {}
  renderCal();
  renderTakenList();
}

function renderTakenList() {
  const list = document.getElementById('takenList');
  if(!list) return;
  list.innerHTML = '';
  if(takenDates.length===0){
    list.innerHTML='<span style="font-size:12px;color:var(--warm-gray);font-style:italic;">Aucune date réservée pour le moment</span>';
    return;
  }
  [...takenDates].sort().forEach(dateStr=>{
    const [y,m,d]=dateStr.split('-');
    const tag=document.createElement('div');
    tag.className='cal-taken-tag';
    tag.innerHTML=`${d} ${MONTHS_FR[parseInt(m)-1]} ${y} <button onclick="removeTakenDate('${dateStr}')">×</button>`;
    list.appendChild(tag);
  });
}

// ---- ADMIN TOGGLE ----
function toggleAdmin(){
  const panel = document.getElementById('adminPanel');
  if(panel.style.display === 'none'){
    panel.style.display = 'block';
    document.getElementById('adminAuth').style.display = 'block';
    document.getElementById('adminContent').style.display = 'none';
    document.getElementById('adminPwd').value = '';
    setTimeout(()=>document.getElementById('adminPwd').focus(), 100);
  } else {
    panel.style.display = 'none';
  }
}

function checkAdminPwd(){
  const pwd = document.getElementById('adminPwd').value;
  if(pwd === 'CN2025'){
    document.getElementById('adminAuth').style.display = 'none';
    document.getElementById('adminContent').style.display = 'block';
    renderTakenList();
  } else {
    document.getElementById('adminPwd').style.border = '1px solid rgba(180,50,50,0.5)';
    document.getElementById('adminPwd').value = '';
    document.getElementById('adminPwd').placeholder = 'Code incorrect...';
  }
}

// ===== AUDIO PLAYER =====
const bgAudio = document.getElementById('bgAudio');

if (bgAudio) {
    bgAudio.src = "the_mountain-wedding-487025.mp3";   // ←←← Ligne importante
    bgAudio.volume = 0.2;      // Volume de base (entre 0 et 1)
    bgAudio.loop = true;       // La musique tourne en boucle
}

// Fonction pour play/pause (si tu as déjà un bouton)
function toggleAudio() {
    if (!bgAudio) return;
    
    if (bgAudio.paused) {
        bgAudio.play().catch(e => console.log("Lecture bloquée :", e));
    } else {
        bgAudio.pause();
    }
}

// ---- RING VOLUME CANVAS ----
const apRing = document.getElementById('apRingWrap');
const apCanvas = document.getElementById('apVolCanvas');
const apVolPct = document.getElementById('apVolPct');
let apCtx = apCanvas ? apCanvas.getContext('2d') : null;
let ringDragging = false;
let ringVol = 0.2;
const R = 36, RADIUS = 26, LINE_W = 6;
const START_A = 210 * Math.PI / 180;
const END_A_MAX = (210 + 300) * Math.PI / 180;

function drawRing(vol) {
  if(!apCtx) return;
  apCtx.clearRect(0, 0, 72, 72);
  apCtx.beginPath();
  apCtx.arc(R, R, RADIUS, START_A, END_A_MAX);
  apCtx.strokeStyle = 'rgba(184,154,106,0.15)';
  apCtx.lineWidth = LINE_W;
  apCtx.lineCap = 'round';
  apCtx.stroke();
  if(vol > 0.01) {
    const endAngle = START_A + (vol * (END_A_MAX - START_A));
    const grad = apCtx.createLinearGradient(R-RADIUS, R, R+RADIUS, R);
    if(vol < 0.4){ grad.addColorStop(0,'rgba(140,110,60,0.6)');grad.addColorStop(1,'rgba(184,154,106,0.9)'); }
    else if(vol < 0.7){ grad.addColorStop(0,'rgba(160,125,70,0.7)');grad.addColorStop(0.5,'rgba(200,165,100,0.95)');grad.addColorStop(1,'rgba(220,185,120,1)'); }
    else { grad.addColorStop(0,'rgba(184,154,106,0.8)');grad.addColorStop(0.5,'rgba(230,195,130,1)');grad.addColorStop(1,'rgba(255,225,160,1)'); }
    apCtx.beginPath();
    apCtx.arc(R, R, RADIUS, START_A, endAngle);
    apCtx.strokeStyle = grad;
    apCtx.lineWidth = LINE_W;
    apCtx.lineCap = 'round';
    apCtx.stroke();
    const dotX = R + RADIUS * Math.cos(endAngle);
    const dotY = R + RADIUS * Math.sin(endAngle);
    apCtx.beginPath();
    apCtx.arc(dotX, dotY, 5, 0, Math.PI*2);
    apCtx.fillStyle = vol > 0.7 ? 'rgba(255,225,160,1)' : '#B89A6A';
    apCtx.shadowBlur = vol > 0.6 ? 8 : 0;
    apCtx.shadowColor = 'rgba(255,200,100,0.8)';
    apCtx.fill();
    apCtx.shadowBlur = 0;
  }
  apCtx.beginPath();
  apCtx.arc(R, R, 2.5, 0, Math.PI*2);
  apCtx.fillStyle = 'rgba(184,154,106,0.5)';
  apCtx.fill();
  if(apVolPct) apVolPct.textContent = Math.round(vol*100) + '%';
}

function getVolFromPoint(cx, cy) {
  if(!apRing) return ringVol;
  const rect = apRing.getBoundingClientRect();
  const cx2 = rect.left + rect.width/2;
  const cy2 = rect.top + rect.height/2;
  let angle = Math.atan2(cy - cy2, cx - cx2);
  if(angle < 0) angle += 2*Math.PI;
  let rel = angle - START_A;
  if(rel < 0) rel += 2*Math.PI;
  return Math.max(0, Math.min(1, rel / (END_A_MAX - START_A)));
}

if(apRing) {
  apRing.addEventListener('mousedown', e => { ringDragging=true; ringVol=getVolFromPoint(e.clientX,e.clientY); bgAudio.volume=ringVol; drawRing(ringVol); });
  document.addEventListener('mousemove', e => { if(!ringDragging) return; ringVol=getVolFromPoint(e.clientX,e.clientY); bgAudio.volume=ringVol; drawRing(ringVol); });
  document.addEventListener('mouseup', () => ringDragging=false);
}
drawRing(0.2);

// ---- SPLASH SCREEN ----
function enterSite() {
  const splash = document.getElementById('splashScreen');
  if(!splash || splash._entered) return;
  splash._entered = true;
  document.body.classList.remove('splash-visible');
  const ap = document.getElementById('audioPlayer');
  if(ap) ap.style.display = '';
  bgAudio.play().then(()=>{
    apPlaying = true;
    if(apWaves) apWaves.classList.remove('paused');
    if(apIconPlay) apIconPlay.style.display = 'none';
    if(apIconPause) apIconPause.style.display = '';
  }).catch(()=>{});
  splash.style.animation = 'splashExit 0.8s ease forwards';
  splash.style.pointerEvents = 'none';
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  setTimeout(() => { try { splash.remove(); } catch(e){} }, 900);
}

// Bind splash button
(function bindSplash() {
  const btn = document.getElementById('splashBtn');
  const splash = document.getElementById('splashScreen');
  function doEnter(e) { e.preventDefault(); e.stopPropagation(); enterSite(); }
  if(btn) {
    btn.addEventListener('click', doEnter);
    btn.addEventListener('touchend', doEnter, {passive:false});
  }
  if(splash) {
    splash.addEventListener('click', doEnter);
    splash.addEventListener('touchend', doEnter, {passive:false});
  }
})();

// Hide audio player while splash visible
if(document.getElementById('splashScreen')) {
  const ap = document.getElementById('audioPlayer');
  if(ap) ap.style.display = 'none';
}

// 
// ---- EMAIL (built in JS to avoid Cloudflare) ----
(function(){
  const u='nunezcedric', d='sfr', t='fr';
  const addr = u + String.fromCharCode(64) + d + '.' + t;
  try { document.querySelectorAll('.email-reveal').forEach(el => {
    el.textContent = addr;
    el.onclick = () => { window.location.href = 'mailto:' + addr; };
  }); } catch(e){}
})();

// ---- LEGAL MODAL ----
function openLegal() {
  document.getElementById('legalModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  // Re-render emails
  try {
    const u='nunezcedric', d='sfr', t='fr';
    const addr = u + String.fromCharCode(64) + d + '.' + t;
    document.querySelectorAll('.email-reveal').forEach(el => {
      el.textContent = addr;
      el.onclick = () => { window.location.href = 'mailto:' + addr; };
    });
  } catch(e){}
}
function closeLegal() {
  document.getElementById('legalModal').classList.remove('open');
  document.body.classList.remove('splash-visible');
}

// ---- COOKIES ----
function acceptCookies() {
  try { localStorage.setItem('cookiesAccepted', '1'); } catch(e){}
  const banner = document.getElementById('cookieBanner');
  if(banner) { banner.style.opacity='0'; banner.style.transition='opacity 0.5s'; setTimeout(()=>banner.remove(), 500); }
}
(function() {
  try { if(localStorage.getItem('cookiesAccepted')) { const b = document.getElementById('cookieBanner'); if(b) b.remove(); } } catch(e){}
})();

// ---- SCROLL TO TOP ON LOAD ----
window.scrollTo(0, 0);
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

// ---- INIT ----
try { buildPrev('mariage'); } catch(e){}
try { buildMasonry('mas-mariage','mariage'); } catch(e){}
try { buildMasonry('mas-couple','couple'); } catch(e){}
try { buildMasonry('mas-ceremonie','ceremonie'); } catch(e){}
try { buildMasonry('mas-naissance','naissance'); } catch(e){}
try { initReveals(); } catch(e){}
renderCal();
renderTakenList();

// Force all reveals visible immediately on load
window.addEventListener('load', () => {
  try {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    document.querySelectorAll('img').forEach(img => { img.loading = 'eager'; });
    initReveals();
  } catch(e){}
});
