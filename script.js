'use strict';
const KEY='hackstart.v1';
const $=(s,r=document)=>r.querySelector(s);
const ME='Сіз';
function h(t,a={},...c){const e=document.createElement(t);for(const k in a){const v=a[k];if(k==='class')e.className=v;else if(k.startsWith('on'))e.addEventListener(k.slice(2),v);else if(v!==false&&v!=null)e.setAttribute(k,v)}c.flat(9).filter(x=>x!==false&&x!=null).forEach(x=>e.append(x.nodeType?x:document.createTextNode(x)));return e}
const clear=e=>{while(e&&e.firstChild)e.removeChild(e.firstChild)};
const today=()=>new Date().toISOString().slice(0,10);
const CATS=[['ai','🤖','Жасанды интеллект','Машиналық оқыту, чат-боттар және ақылды құралдар'],['it','💻','Бағдарламалау және IT','Веб, бэкенд, ашық кодты жобалар'],['biz','🚀','Стартаптар және бизнес','Идеядан өнімге дейінгі жол'],['dsn','🎨','Дизайн және шығармашылық','UI/UX, графика, бейне'],['edu','📚','Білім беру','Оқыту платформалары мен курстар'],['eco','🌱','Экология','Таза қоршаған орта үшін шешімдер'],['med','🩺','Денсаулық сақтау','Медицина және салауатты өмір'],['soc','🤝','Әлеуметтік инновациялар','Қоғамға пайдалы жобалар'],['rob','🦾','Робототехника','Роботтар, Arduino, IoT'],['game','🎮','Ойын әзірлеу','Ойын логикасы, арт және дыбыс'],['sci','🔬','Ғылым және технология','Зерттеулер мен эксперименттер'],['sec','🛡️','Киберқауіпсіздік','Қауіпсіздік және деректерді қорғау'],['mob','📱','Мобильді қосымшалар','Android, iOS және кросс-платформа'],['fin','💳','Қаржы технологиялары','Төлем және қаржы шешімдері'],['city','🏙️','Smart City','Ақылды қала жүйелері']];
const catName=id=>(CATS.find(c=>c[0]===id)||[])[2]||'';
const STAT={active:'Белсенді',new:'Жаңа',plan:'Жоспарлануда'};
const TS=['Орындалуы керек','Орындалып жатыр','Аяқталды'];
const PEOPLE=['Айдар','Әсел','Данияр','Мадина','Нұрлан','Томирис','Ерлан','Алия','Бекзат','Дана'];
function seedGroup(id,cat,name,desc,leader,skills,n,status,idea){const members=[{n:leader,s:skills.slice(0,2),r:'Жетекші'}];for(let i=1;i<n;i++)members.push({n:PEOPLE[(id+i)%10],s:[skills[i%skills.length]],r:'Қатысушы'});
 return{id,cat,name,desc,idea:idea||desc,leader,skills,max:12,type:'open',members,pending:[],status,created:'2026-0'+(1+id%9)+'-1'+(id%9),msgs:[{a:leader,t:'Сәлем! Топқа қош келдіңдер.',d:'2026-10-01'}],tasks:[{id:1,t:'Бастапқы зерттеу',d:'Нарық пен аналогтарды қарап шығу',w:leader,due:'2026-11-15',s:1}],plan:[['Идеяны тұжырымдау',1],['Прототип жасау',id%2===0],['Сынақ және пікір жинау',0],['Іске қосу',0]]}}
const G=[[1,'ai','Qazaq AI Lab','Қазақ тіліне арналған жасанды интеллект құралдарын бірге дамытайық.','Айдос',['Python','AI','UI/UX'],8,'active'],[2,'ai','Smart Assistant','Қазақша дауыстық көмекші жасаймыз.','Мадина',['Python','NLP'],5,'active'],[3,'ai','AI Education','Оқушыларға арналған AI жаттығулары.','Әсел',['AI','Педагогика'],6,'new'],[4,'ai','Future Tech','Болашақ технологиялары туралы зерттеулер.','Ерлан',['AI','Зерттеу'],4,'plan'],[5,'it','CodeCraft KZ','Жаңадан бастаушыларға арналған код клубы.','Данияр',['JavaScript','Git'],9,'active'],[6,'it','Web Developers','Заманауи веб-жобалар жасаймыз.','Алия',['HTML','CSS','JavaScript'],7,'active'],[7,'it','Mobile App Studio','Қолданбаларды бірге жасау студиясы.','Нұрлан',['Flutter','UI/UX'],5,'new'],[8,'it','Open Source KZ','Қазақстандық ашық кодты жобалар.','Бекзат',['Git','Python'],6,'active'],[9,'biz','Startup Qadam','Стартап құруға алғашқы қадамдар.','Томирис',['Маркетинг','Бизнес'],8,'active'],[10,'biz','Young Entrepreneurs','Жас кәсіпкерлер қауымдастығы.','Дана',['Сату','Бизнес'],6,'active'],[11,'biz','Business Lab','Бизнес-модельдерді сынау зертханасы.','Ерлан',['Талдау','Қаржы'],4,'new'],[12,'biz','Idea to Product','Идеядан өнімге дейін бірге жүреміз.','Алия',['Product','UI/UX'],5,'plan'],[13,'eco','EcoFuture','Экологиялық бастамалар мен акциялар.','Әсел',['Экология','Дизайн'],7,'active'],[14,'eco','Green Kazakhstan','Қазақстанды жасыл ету жобасы.','Нұрлан',['Экология','GIS'],5,'new'],[15,'eco','Smart Recycling','Қоқысты сұрыптау қосымшасы.','Данияр',['Mobile','IoT'],4,'active']].map(a=>seedGroup(...a));
const IDEAS=[[1,'Қазақша OCR','Ескі қолжазбаларды цифрландыратын құрал','ai','Айдос',24],[2,'Ауыл мектептеріне онлайн тәлімгер','Тәлімгерлер мен оқушыларды байланыстыру','edu','Әсел',31],[3,'Қоқыс сұрыптау картасы','Қалада контейнерлер орнын көрсететін карта','eco','Данияр',18],[4,'Шағын бизнеске арналған есепші-бот','Күнделікті табыс-шығысты есептейді','fin','Дана',15],[5,'Қауіпсіз құпиясөз менеджері','Қазақ тіліндегі интерфейспен','sec','Бекзат',12]].map(a=>({id:a[0],t:a[1],d:a[2],cat:a[3],a:a[4],v:a[5],date:'2026-09-2'+a[0],gid:null,cm:['Керемет идея!']}));
const defState=()=>({groups:G,ideas:IDEAS,notes:[{id:1,t:'HackStart-қа қош келдіңіз!',d:today(),r:0}],profile:{name:'Қонақ пайдаланушы',bio:'Өзім туралы қысқаша жазыңыз.',interests:['Технология'],skills:['JavaScript']},voted:[],saved:[],score:{proj:{},ratings:{},expert:[],ai:{}},chat:[]});
let S;
function load(){try{const r=JSON.parse(localStorage.getItem(KEY));if(r&&r.groups&&r.ideas&&r.profile){r.score=r.score||{proj:{},ratings:{},expert:[],ai:{}};r.chat=r.chat||[];return r}}catch(e){console.warn('Сақтау қатесі',e)}return defState()}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){console.warn('Сақтау мүмкін болмады',e)}}
const ui={cat:'all',gid:null,tab:'Шолу'};
function toast(m){const t=$('#toast');t.textContent=m;t.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>t.hidden=true,2600)}
function notify(t){S.notes.unshift({id:Date.now(),t,d:today(),r:0});save();renderNotif()}
const colors=['#2C7873','#3f9c95','#1f8f6a','#5aa9a4','#0b6b66','#4d9a8f'];
const avatar=(n,lg)=>{const i=[...n].reduce((a,c)=>a+c.charCodeAt(0),0);return h('span',{class:'av'+(lg?' lg':''),style:'background:'+colors[i%6],title:n},n.trim().slice(0,1).toUpperCase())};
const isMem=g=>g.members.some(m=>m.n===ME);
const grp=id=>S.groups.find(g=>g.id===id);
const prog=g=>g.plan.length?Math.round(g.plan.filter(p=>p[1]).length/g.plan.length*100):0;
const tags=(a,c='')=>a.map(x=>h('span',{class:'tag '+c},x));

/* ---- Модальды терезе ---- */
function modal(title,body,wide){const root=$('#modalRoot');const close=()=>{clear(root);document.removeEventListener('keydown',esc)};const esc=e=>{if(e.key==='Escape')close()};
 document.addEventListener('keydown',esc);const ov=h('div',{class:'ov',onclick:e=>{if(e.target===ov)close()}},h('div',{class:'modal'+(wide?' wide':''),role:'dialog','aria-modal':'true'},h('h3',{},title),body));clear(root);root.append(ov);return close}
const field=(l,i,id)=>h('div',{class:'f'},h('label',{for:id},l),i,h('div',{class:'err',id:id+'E'}));
const val=id=>($('#'+id)||{}).value?.trim()||'';
const csv=s=>s.split(',').map(x=>x.trim()).filter(Boolean);
function showErr(map){let bad=false;for(const id in map){const e=$('#'+id+'E');if(e)e.textContent=map[id]||'';if(map[id])bad=true}return bad}
const catSelect=(id,all)=>{const s=h('select',{id},all?h('option',{value:'all'},'Барлық категориялар'):null,CATS.map(c=>h('option',{value:c[0]},c[2])));return s};

/* ---- Топ әрекеттері ---- */
function join(id){const g=grp(id);if(!g||isMem(g))return;
 if(g.members.length>=g.max)return toast('Топта бос орын жоқ');
 if(g.type==='request'){const i=g.pending.indexOf(ME);if(i>=0){g.pending.splice(i,1);toast('Өтініш қайтарып алынды')}else{g.pending.push(ME);toast('Өтініш жіберілді (демо режимде)')}save();return renderAll()}
 g.members.push({n:ME,s:S.profile.skills.slice(0,3),r:'Қатысушы'});save();notify('Сіз «'+g.name+'» тобына сәтті қосылдыңыз.');toast('Топқа сәтті қосылдыңыз!');renderAll()}
function leave(id){const g=grp(id);if(!g||g.leader===ME)return toast('Жетекші топтан шыға алмайды');g.members=g.members.filter(m=>m.n!==ME);save();toast('Топтан шықтыңыз');renderAll()}
function groupCard(g){const full=g.members.length>=g.max,mem=isMem(g),pend=g.pending.includes(ME);
 return h('article',{class:'card'},h('div',{class:'meta'},catName(g.cat)),h('h3',{},g.name),h('p',{},g.desc),h('div',{class:'meta'},'Жетекші: '+g.leader),
  h('div',{class:'avs'},g.members.slice(0,5).map(m=>avatar(m.n)),h('span',{class:'meta'},g.members.length+' қатысушы')),
  h('div',{},tags(g.skills),h('span',{class:'tag g'},STAT[g.status])),
  h('div',{class:'acts'},h('button',{class:'btn ghost',onclick:()=>openWS(g.id)},'Топты көру'),
   mem?h('button',{class:'btn danger',disabled:g.leader===ME,onclick:()=>leave(g.id)},'Топтан шығу'):h('button',{class:'btn primary',disabled:full,onclick:()=>join(g.id)},full?'Толық':pend?'Өтінішті қайтару':g.type==='request'?'Өтініш беру':'Топқа қосылу')))}
const fill=(el,items,msg)=>{if(!el)return;clear(el);items.length?el.append(...items):el.append(h('div',{class:'empty'},msg))};

/* ---- Басты бет бөлімдері ---- */
function renderCats(){fill($('#catGrid'),CATS.map(c=>{const n=S.groups.filter(g=>g.cat===c[0]).length;return h('article',{class:'card'},h('div',{class:'ico'},c[1]),h('h3',{},c[2]),h('p',{},c[3]),h('div',{class:'meta'},n+' топ'),h('button',{class:'btn ghost',onclick:()=>{ui.cat=c[0];$('#gCat').value=c[0];renderGroups();location.hash='#groups'}},'Қарау'))}))}
function renderStats(){const users=new Set(S.groups.flatMap(g=>g.members.map(m=>m.n)));const e=$('#stats');clear(e);
 [[S.groups.length,'топ'],[users.size,'демо қатысушы'],[S.ideas.length,'идея'],[S.groups.reduce((a,g)=>a+g.tasks.length,0),'тапсырма']].forEach(s=>e.append(h('div',{class:'stat'},h('b',{},s[0]),h('span',{},s[1]+' (демо деректер)'))))}
function renderGroups(){const q=val('gSearch').toLowerCase(),cat=$('#gCat').value,sort=$('#gSort').value;
 let l=S.groups.filter(g=>(cat==='all'||g.cat===cat)&&(!q||(g.name+g.desc+g.skills.join(' ')).toLowerCase().includes(q)));
 l.sort((a,b)=>sort==='name'?a.name.localeCompare(b.name,'kk'):sort==='new'?b.id-a.id:b.members.length-a.members.length);
 $('#groupsSub').textContent=(cat==='all'?'Барлық категория':catName(cat))+' бойынша '+l.length+' топ табылды.';
 fill($('#groupGrid'),l.map(groupCard),'Бұл категорияда топ жоқ. Алғашқы топты өзің құр!');
 fill($('#newGroups'),[...S.groups].sort((a,b)=>b.id-a.id).slice(0,3).map(groupCard),'Топ жоқ');
 ui.cat=cat}
function ideaCard(i,inGroup){const v=S.voted.includes(i.id),sv=S.saved.includes(i.id);
 return h('article',{class:'card'},h('div',{class:'meta'},i.cat?catName(i.cat):'Топ идеясы'),h('h3',{},i.t),h('p',{},i.d),h('div',{class:'meta'},'Автор: '+i.a+' · '+i.date),
  h('div',{class:'acts'},h('button',{class:'btn '+(v?'primary':'ghost'),onclick:()=>vote(i.id)},'▲ '+i.v),h('button',{class:'btn ghost',onclick:()=>comments(i.id)},'Пікір: '+i.cm.length),
  !inGroup&&h('button',{class:'btn ghost',onclick:()=>{const k=S.saved.indexOf(i.id);k>=0?S.saved.splice(k,1):S.saved.push(i.id);save();renderIdeas()}},sv?'Сақталған':'Сақтау')))}
function vote(id){const i=S.ideas.find(x=>x.id===id),k=S.voted.indexOf(id);if(k>=0){S.voted.splice(k,1);i.v--}else{S.voted.push(id);i.v++;if(i.a===ME)notify('Сіздің идеяңызға дауыс берілді.')}save();renderIdeas();if(ui.gid)renderWS()}
function comments(id){const i=S.ideas.find(x=>x.id===id);const list=h('div',{class:'stack'});const draw=()=>{fill(list,i.cm.map(c=>h('div',{class:'msg'},c)),'Пікір әлі жоқ')};draw();
 const inp=h('input',{placeholder:'Пікіріңізді жазыңыз',maxlength:300});const close=modal(i.t,h('div',{},list,h('div',{class:'f',style:'margin-top:12px'},inp),h('div',{class:'row'},h('button',{class:'btn primary',onclick:()=>{const t=inp.value.trim();if(!t)return toast('Пікір бос болмауы керек');i.cm.push(t);inp.value='';save();draw();renderIdeas();if(ui.gid)renderWS()}},'Жіберу'),h('button',{class:'btn ghost',onclick:()=>close()},'Жабу'))))}
function renderIdeas(){const q=val('iSearch').toLowerCase(),c=$('#iCat').value,sv=$('#iSaved').checked;
 const l=S.ideas.filter(i=>(c==='all'||i.cat===c)&&(!sv||S.saved.includes(i.id))&&(!q||(i.t+i.d).toLowerCase().includes(q))).sort((a,b)=>b.v-a.v);
 fill($('#ideaGrid'),l.map(i=>ideaCard(i)),'Идеялар табылмады');renderStats();renderProjects()}
function renderProjects(){fill($('#projGrid'),[...S.groups].sort((a,b)=>prog(b)-prog(a)).slice(0,6).map(g=>h('article',{class:'card'},h('h3',{},g.name),h('p',{},g.idea),h('div',{class:'bar'},h('i',{style:'width:'+prog(g)+'%'})),h('div',{class:'meta'},'Прогресс: '+prog(g)+'%'),h('button',{class:'btn ghost',onclick:()=>openWS(g.id,'Жоспар')},'Жоспарды ашу'))),'Жоба жоқ')}
function renderNotif(){const p=$('#notifPanel'),un=S.notes.filter(n=>!n.r).length,b=$('#notifCount');b.hidden=!un;b.textContent=un;clear(p);
 p.append(h('button',{class:'btn ghost sm',onclick:()=>{S.notes.forEach(n=>n.r=1);save();renderNotif()}},'Барлығын оқылды деп белгілеу'));
 S.notes.length?S.notes.slice(0,20).forEach(n=>p.append(h('div',{class:'it'+(n.r?'':' un'),onclick:()=>{n.r=1;save();renderNotif()}},n.t,h('small',{},n.d)))):p.append(h('div',{class:'empty'},'Хабарландыру жоқ'))}
function renderAll(){renderCats();renderGroups();renderIdeas();renderNotif();if(ui.gid)renderWS();renderScore();renderChat()}

/* ---- Топ құру ---- */
function createGroup(){const ids=['gnN','gnD','gnI','gnS','gnM'];
 const f=h('div',{},field('Топ атауы',h('input',{id:'gnN',maxlength:50}),'gnN'),field('Сипаттамасы',h('textarea',{id:'gnD'}),'gnD'),field('Негізгі идеясы',h('textarea',{id:'gnI'}),'gnI'),field('Категориясы',catSelect('gnC'),'gnC'),field('Қажетті дағдылар (үтірмен бөліңіз)',h('input',{id:'gnS',placeholder:'Python, UI/UX'}),'gnS'),field('Қатысушылардың максималды саны',h('input',{id:'gnM',type:'number',min:2,max:50,value:10}),'gnM'),
  field('Қосылу түрі',h('select',{id:'gnT'},h('option',{value:'open'},'Ашық топ'),h('option',{value:'request'},'Өтініш арқылы қосылу')),'gnT'),
  h('div',{class:'row'},h('button',{class:'btn primary',onclick:()=>{const m=+val('gnM');const bad=showErr({gnN:val('gnN').length<3?'Атауы кемінде 3 таңба':'',gnD:val('gnD').length<10?'Сипаттама кемінде 10 таңба':'',gnI:val('gnI').length<10?'Негізгі идеяны жазыңыз':'',gnS:csv(val('gnS')).length?'':'Кемінде бір дағды көрсетіңіз',gnM:m>=2&&m<=50?'':'2-ден 50-ге дейін сан енгізіңіз'});if(bad)return;
   const g={id:Date.now(),cat:$('#gnC').value,name:val('gnN'),desc:val('gnD'),idea:val('gnI'),leader:ME,skills:csv(val('gnS')),max:m,type:$('#gnT').value,members:[{n:ME,s:S.profile.skills,r:'Жетекші'}],pending:[],status:'new',created:today(),msgs:[],tasks:[],plan:[['Идеяны тұжырымдау',0],['Прототип жасау',0],['Іске қосу',0]]};
   S.groups.push(g);save();notify('«'+g.name+'» тобы құрылды.');close();toast('Топ сәтті құрылды!');renderAll();location.hash='#groups'}},'Топты құру'),h('button',{class:'btn ghost',onclick:()=>close()},'Болдырмау')));
 const close=modal('Жаңа топ құру',f)}

/* ---- Идея қосу ---- */
function addIdea(gid){const f=h('div',{},field('Идея атауы',h('input',{id:'inT',maxlength:80}),'inT'),field('Сипаттамасы',h('textarea',{id:'inD'}),'inD'),gid?null:field('Категориясы',catSelect('inC'),'inC'),
 h('div',{class:'row'},h('button',{class:'btn primary',onclick:()=>{if(showErr({inT:val('inT').length<3?'Атауы кемінде 3 таңба':'',inD:val('inD').length<10?'Сипаттама кемінде 10 таңба':''}))return;
  S.ideas.unshift({id:Date.now(),t:val('inT'),d:val('inD'),cat:gid?grp(gid).cat:$('#inC').value,a:ME,v:0,date:today(),gid:gid||null,cm:[]});save();notify('Жаңа идея жарияланды.');close();toast('Идея жарияланды');renderAll()}},'Жариялау'),h('button',{class:'btn ghost',onclick:()=>close()},'Болдырмау')));
 const close=modal('Жаңа идея ұсыну',f)}

/* ---- Топтың жұмыс кеңістігі ---- */
function openWS(id,tab){ui.gid=id;ui.tab=tab||'Шолу';renderWS();$('#wsRoot').hidden=false;document.body.style.overflow='hidden'}
function closeWS(){ui.gid=null;$('#wsRoot').hidden=true;document.body.style.overflow='';renderAll()}
const needMem=g=>isMem(g)||(toast('Алдымен топқа қосылыңыз'),false);
function renderWS(){const g=grp(ui.gid),root=$('#wsRoot');if(!g)return closeWS();clear(root);const mem=isMem(g);
 const tabs=['Шолу','Идеялар','Талқылау','Тапсырмалар','Жоспар','Қатысушылар'];const body=h('div',{});
 root.append(h('div',{class:'ws-in'},h('button',{class:'btn ghost sm',onclick:closeWS},'← Артқа'),h('div',{class:'between',style:'margin-top:16px'},h('div',{},h('h2',{},g.name),h('p',{class:'sub'},g.desc),h('div',{},tags(g.skills),h('span',{class:'tag g'},STAT[g.status]),h('span',{class:'tag v'},'Жетекші: '+g.leader),h('span',{class:'tag v'},g.members.length+'/'+g.max+' қатысушы'))),
  mem?h('button',{class:'btn danger',disabled:g.leader===ME,onclick:()=>{leave(g.id)}},'Топтан шығу'):h('button',{class:'btn primary',onclick:()=>join(g.id)},'Топқа қосылу')),
  h('div',{class:'tabs',role:'tablist'},tabs.map(t=>h('button',{class:t===ui.tab?'on':'',role:'tab',onclick:()=>{ui.tab=t;renderWS()}},t))),body));
 const T={Шолу(){body.append(h('div',{class:'stack'},h('div',{class:'card'},h('h3',{},'Топтың мақсаты'),h('p',{},g.desc)),h('div',{class:'card'},h('h3',{},'Негізгі идея'),h('p',{},g.idea)),h('div',{class:'card'},h('h3',{},'Прогресс: '+prog(g)+'%'),h('div',{class:'bar'},h('i',{style:'width:'+prog(g)+'%'}))),h('div',{class:'card'},h('h3',{},'Соңғы әрекеттер'),h('p',{},g.msgs.length+' хабарлама, '+g.tasks.length+' тапсырма, '+S.ideas.filter(i=>i.gid===g.id).length+' идея'))))},
 Идеялар(){body.append(h('button',{class:'btn primary',onclick:()=>needMem(g)&&addIdea(g.id)},'Жаңа идея ұсыну'),h('div',{class:'grid',style:'margin-top:16px'},S.ideas.filter(i=>i.gid===g.id).map(i=>ideaCard(i,1)),!S.ideas.some(i=>i.gid===g.id)&&h('div',{class:'empty'},'Бұл топта идея әлі жоқ')))},
 Талқылау(){const inp=h('input',{placeholder:'Хабарлама жазыңыз…',maxlength:400});const send=()=>{if(!needMem(g))return;const t=inp.value.trim();if(!t)return toast('Хабарлама бос болмауы керек');g.msgs.push({a:ME,t,d:today()});save();renderWS()};inp.addEventListener('keydown',e=>{if(e.key==='Enter')send()});
  body.append(h('div',{class:'stack'},g.msgs.length?g.msgs.map(m=>h('div',{class:'msg'+(m.a===ME?' me':'')},h('b',{},m.a+' · '+m.d),h('div',{},m.t))):h('div',{class:'empty'},'Алғашқы хабарламаны жазыңыз'),h('div',{class:'row'},h('div',{style:'flex:1'},inp),h('button',{class:'btn primary',onclick:send},'Жіберу'))))},
 Тапсырмалар(){const ids=['tkT','tkD','tkDue'];const who=h('select',{id:'tkW'},g.members.map(m=>h('option',{},m.n)));
  const form=h('div',{class:'card'},h('h3',{},'Тапсырма қосу'),field('Атауы',h('input',{id:'tkT'}),'tkT'),field('Сипаттамасы',h('input',{id:'tkD'}),'tkD'),field('Жауапты адам',who,'tkW'),field('Соңғы мерзімі',h('input',{id:'tkDue',type:'date'}),'tkDue'),field('Мәртебесі',h('select',{id:'tkS'},TS.map((s,i)=>h('option',{value:i},s))),'tkS'),
   h('button',{class:'btn primary',onclick:()=>{if(!needMem(g))return;if(showErr({tkT:val('tkT').length<3?'Атауы кемінде 3 таңба':'',tkDue:val('tkDue')?'':'Мерзімді таңдаңыз'}))return;g.tasks.push({id:Date.now(),t:val('tkT'),d:val('tkD'),w:who.value,due:val('tkDue'),s:+$('#tkS').value});save();notify('Тапсырма қосылды.');renderWS()}},'Қосу'));
  body.append(h('div',{class:'stack'},form,g.tasks.map(t=>h('div',{class:'card task'},h('div',{},h('h3',{},t.t),h('p',{},t.d),h('div',{class:'meta'},'Жауапты: '+t.w+' · Мерзімі: '+t.due)),h('div',{class:'row'},h('select',{onchange:e=>{t.s=+e.target.value;save();renderWS()},'aria-label':'Мәртебе'},TS.map((s,i)=>h('option',{value:i,selected:t.s===i},s))),h('button',{class:'btn danger sm',onclick:()=>{g.tasks=g.tasks.filter(x=>x.id!==t.id);save();renderWS()}},'Жою'))))))},
 Жоспар(){body.append(h('div',{class:'stack'},h('div',{class:'bar'},h('i',{style:'width:'+prog(g)+'%'})),g.plan.map((p,i)=>h('label',{class:'card chk'},h('input',{type:'checkbox',checked:p[1]?'checked':null,onchange:e=>{if(!needMem(g)){e.target.checked=!!p[1];return}p[1]=e.target.checked?1:0;save();renderWS()}}),(i+1)+'-кезең: '+p[0]))))},
 Қатысушылар(){body.append(h('div',{class:'grid'},g.members.map(m=>h('div',{class:'card'},h('div',{class:'row'},avatar(m.n,1),h('div',{},h('h3',{},m.n),h('div',{class:'meta'},m.r))),h('div',{},tags(m.s))))))}};
 T[ui.tab]()}

/* ---- Профиль ---- */
function profile(){const p=S.profile,mine=S.groups.filter(isMem),made=S.groups.filter(g=>g.leader===ME),ideas=S.ideas.filter(i=>i.a===ME);
 const list=(a,f)=>a.length?a.map(f):h('div',{class:'meta'},'Әзірге жоқ');
 const close=modal('Профиль',h('div',{class:'stack'},h('div',{class:'row'},avatar(p.name,1),h('div',{},h('h3',{style:'margin:0'},p.name),h('div',{class:'meta'},p.bio))),h('div',{},h('b',{},'Қызығушылықтары: '),tags(p.interests)),h('div',{},h('b',{},'Дағдылары: '),tags(p.skills,'v')),
  h('div',{},h('b',{},'Қатысатын топтары: '),list(mine,g=>h('div',{class:'meta'},'• '+g.name))),h('div',{},h('b',{},'Құрған топтары: '),list(made,g=>h('div',{class:'meta'},'• '+g.name))),h('div',{},h('b',{},'Жариялаған идеялары: '),list(ideas,i=>h('div',{class:'meta'},'• '+i.t))),
  h('div',{class:'row'},h('button',{class:'btn primary',onclick:()=>{close();editProfile()}},'Профильді өңдеу'),h('button',{class:'btn ghost',onclick:()=>{if(confirm('Барлық демо деректерді бастапқы күйге келтіру?')){S=defState();save();close();renderAll()}}},'Демо деректерді тазалау'))),1)}
function editProfile(){const p=S.profile;const close=modal('Профильді өңдеу',h('div',{},field('Аты-жөні',h('input',{id:'pfN',value:p.name,maxlength:60}),'pfN'),field('Өзі туралы',h('textarea',{id:'pfB'},p.bio),'pfB'),field('Қызығушылықтары (үтірмен)',h('input',{id:'pfI',value:p.interests.join(', ')}),'pfI'),field('Дағдылары (үтірмен)',h('input',{id:'pfS',value:p.skills.join(', ')}),'pfS'),
  h('div',{class:'row'},h('button',{class:'btn primary',onclick:()=>{if(showErr({pfN:val('pfN').length<2?'Атыңызды жазыңыз':''}))return;S.profile={name:val('pfN'),bio:val('pfB'),interests:csv(val('pfI')),skills:csv(val('pfS'))};save();close();toast('Профиль сақталды')}},'Сақтау'),h('button',{class:'btn ghost',onclick:()=>close()},'Болдырмау'))))}

/* ---- Іздеу ---- */
function searchUI(){const out=h('div',{class:'stack',style:'margin-top:14px'});const inp=h('input',{placeholder:'Топтар, категориялар, идеялар, жобалар…',type:'search'});
 const run=()=>{const q=inp.value.trim().toLowerCase();clear(out);if(!q)return;const r=[];
  CATS.filter(c=>(c[2]+c[3]).toLowerCase().includes(q)).forEach(c=>r.push(['Категория',c[2],()=>{ui.cat=c[0];$('#gCat').value=c[0];renderGroups();location.hash='#groups'}]));
  S.groups.filter(g=>(g.name+g.desc+g.idea).toLowerCase().includes(q)).forEach(g=>{r.push(['Топ',g.name,()=>openWS(g.id)]);r.push(['Жоба',g.name+' ('+prog(g)+'%)',()=>openWS(g.id,'Жоспар')])});
  S.ideas.filter(i=>(i.t+i.d).toLowerCase().includes(q)).forEach(i=>r.push(['Идея',i.t,()=>{location.hash='#ideas';$('#iSearch').value=i.t;renderIdeas()}]));
  r.length?r.slice(0,20).forEach(x=>out.append(h('button',{class:'card',style:'text-align:left;cursor:pointer;padding:12px 16px',onclick:()=>{close();x[2]()}},h('span',{class:'meta'},x[0]),h('b',{},x[1])))):out.append(h('div',{class:'empty'},'Іздеу бойынша нәтиже табылмады'))};
 inp.addEventListener('input',run);const close=modal('Іздеу',h('div',{},inp,out));inp.focus()}

/* ---- Іске қосу ---- */
function init(){S=load();
 [['#gCat',1],['#iCat',1]].forEach(([s])=>{const e=$(s);e.append(h('option',{value:'all'},'Барлық категориялар'),...CATS.map(c=>h('option',{value:c[0]},c[2])))});
 ['#gSearch','#gSort','#gCat'].forEach(s=>$(s).addEventListener('input',renderGroups));['#iSearch','#iCat','#iSaved'].forEach(s=>$(s).addEventListener('input',renderIdeas));
 $('#createBtn').addEventListener('click',createGroup);document.querySelectorAll('[data-create]').forEach(b=>b.addEventListener('click',createGroup));
 $('#addIdeaBtn').addEventListener('click',()=>addIdea());$('#searchBtn').addEventListener('click',searchUI);$('#profileBtn').addEventListener('click',profile);
 $('#notifBtn').addEventListener('click',e=>{e.stopPropagation();const p=$('#notifPanel');p.hidden=!p.hidden});
 document.addEventListener('click',e=>{if(!e.target.closest('.dd-wrap'))$('#notifPanel').hidden=true});
 $('#burger').addEventListener('click',()=>$('#menu').classList.toggle('open'));$('#menu').addEventListener('click',()=>$('#menu').classList.remove('open'));
 renderAll();extraInit()}
document.addEventListener('DOMContentLoaded',init);

/* ======== Hack-көмекші және HackStart Score ========
 Нақты AI үшін серверлік endpoint қажет (API кілті браузерде сақталмайды). Мекенжайды осында көрсетіңіз:
 chat:  POST {message,history[]}  -> {reply}
 score: POST {name,goal,desc,ps,evidence,mat,criteria[{id,max}]} -> {criteria:[{id,score,evidence,level,weak,advice,next}],strengths[],weaknesses[],improvements[],next_steps[]}
 Бос болса, AI қосылмаған деп көрсетіледі. */
const AI_CFG={chat:'',score:''};
const CRIT=[['rel','Өзектілігі',20,'Жоба қандай нақты мәселені шешеді? Мәселе қаншалықты маңызды және өзекті?','мәселенің ауқымы, мақсатты аудитория, деректер'],['inn','Инновация',15,'Идеяның жаңашылдығы қандай? Қолданыстағы шешімдерден несімен ерекшеленеді?','аналогтармен салыстыру, бірегей тәсіл'],['fea','Іске асыру мүмкіндігі',15,'Жобаны шынайы өмірде жүзеге асыруға бола ма? Технология, ресурс, жоспар нақты ма?','технология, ресурс, мерзім, команда'],['evi','Нақты дәлелдер',15,'Сауалнама, тәжірибе, прототип, зерттеу арқылы тиімділік көрсетілді ме?','прототип, сауалнама, зерттеу нәтижелері'],['soc','Қоғамға пайдасы',15,'Жоба адамдардың өмірін қалай жақсартады? Қанша адамға пайда әкелуі мүмкін?','пайда көретін адам саны, әсер ету тереңдігі'],['pot','Даму әлеуеті',10,'Жобаны басқа қалаларға, өңірлерге немесе жаңа пайдаланушыларға кеңейтуге бола ма?','масштабталуы, бейімделуі'],['pre','Таныстырылым сапасы',10,'Мақсат, шешім, ерекшелік және нәтижелер түсінікті көрсетілген бе?','құрылым, анықтық, нәтижелер']];
const LV=['Жеткілікті','Ішінара жеткілікті','Жеткіліксіз','Дәлел ұсынылмаған'];
const U={pid:null,tab:'Жоба',expert:false,aiErr:''};
const SC=()=>S.score;
const pj=id=>SC().proj[id]||{goal:'',desc:'',ps:'',evidence:'',mat:''};
const txt=(s,n)=>String(s==null?'':s).slice(0,n||600);
function busy(b,label,fn){const o=b.textContent;b.classList.add('busy');b.disabled=true;b.textContent=label;return Promise.resolve(fn()).finally(()=>{b.classList.remove('busy');b.disabled=false;b.textContent=o})}

/* ---- Чат ---- */
const CHIPS=['Python білетін команда тап','Идеямды қалай дамытамын?','Жоба жоспарын құр','HackStart Score деген не?'];
function renderChat(){const log=$('#chatLog');if(!log)return;clear(log);const aiOn=!!AI_CFG.chat;const m=$('#aiMode');m.textContent=aiOn?'AI қосылған':'Жергілікті режим: AI қосылмаған';m.className='mode'+(aiOn?' on':'');
 const hello=h('div',{class:'bub'},'Сәлем! Мен Hack-көмекшімін. Идеяңды дамытуға көмектесуге дайынмын!');log.append(hello);
 S.chat.slice(-40).forEach(c=>log.append(h('div',{class:'bub '+(c.r==='u'?'u':c.e?'err':'')},c.t,c.a&&c.a.length?h('div',{class:'acts'},c.a.map(a=>h('button',{class:'btn ghost',onclick:()=>chatAct(a)},a.l))):null)));
 log.scrollTop=log.scrollHeight;const ch=$('#chips');clear(ch);CHIPS.forEach(t=>ch.append(h('button',{onclick:()=>{$('#chatIn').value=t;sendChat()}},t)))}
function chatAct(a){if(a.t==='ws')openWS(a.v);else if(a.t==='join'){const g=grp(a.v);g&&join(g.id)}else if(a.t==='go')location.hash=a.v}
const STOP=new Set(['және','үшін','керек','маған','тап','команда','топ','білетін','бар','жоба','қосыл','іздеп','көмектес']);
function localReply(q){const t=q.toLowerCase();
 if(/score|баға|бағала/.test(t))return{t:'HackStart Score жобаны 7 критерий бойынша 100 баллмен бағалайды. Қолданушылар, сарапшылар және AI бағасы бөлек көрсетіледі. Әр балл дәлелмен байланыстырылады.',a:[{l:'Score бөліміне өту',t:'go',v:'#score'}]};
 if(/жоспар/.test(t))return{t:'Жалпы жоспар үлгісі (нақты жобаңызға бейімдеңіз):\n1) Мәселені және аудиторияны анықтау\n2) Бәсекелестерді зерттеу\n3) Прототип жасау\n4) 30+ адамнан пікір жинау\n5) Жақсарту және іске қосу\nТопта «Жоспар» қойындысына осыларды енгізе аласыз.',a:[]};
 if(/идея|дамыт/.test(t)&&!/команда|топ/.test(t))return{t:'Идеяны дамыту үшін өзіңізге мына сұрақтарды қойыңыз:\n• Қандай нақты мәселені шешесіз?\n• Кім пайдаланады және оны қалай білесіз?\n• Қолданыстағы шешімдерден несімен ерекшеленеді?\n• Қандай дәлел (сауалнама, прототип) бар?\nЖауаптарыңызды жазсаңыз, Score бөлімінде бағалап көре аласыз.',a:[{l:'Идея қосу',t:'go',v:'#ideas'}]};
 const w=t.split(/[^\p{L}\p{N}+#]+/u).filter(x=>x.length>2&&!STOP.has(x));
 const r=S.groups.map(g=>{const hay=(g.name+' '+g.desc+' '+catName(g.cat)).toLowerCase(),sk=g.skills.join(' ').toLowerCase();return{g,s:w.reduce((a,x)=>a+(sk.includes(x)?2:0)+(hay.includes(x)?1:0),0)}}).filter(x=>x.s>0).sort((a,b)=>b.s-a.s).slice(0,3);
 if(r.length)return{t:'Сіздің сұранысыңызға сәйкес келетін топтар (дағды мен сипаттама бойынша жергілікті іздеу):',a:r.flatMap(x=>[{l:x.g.name+' — көру',t:'ws',v:x.g.id},!isMem(x.g)&&{l:(x.g.type==='request'?'Өтініш беру: ':'Қосылу: ')+x.g.name,t:'join',v:x.g.id}].filter(Boolean))};
 return{t:'Мен қазір жергілікті режимде жұмыс істеймін: AI қосылмаған, сондықтан еркін сұрақтарға жауап бере алмаймын. Дағдыңызды жазсаңыз (мысалы, «Python»), сәйкес топтарды табамын. Сондай-ақ идея, жоспар және Score бойынша бағыт бере аламын.',a:[]}}
async function sendChat(){const inp=$('#chatIn'),q=inp.value.trim();if(!q)return toast('Хабарлама бос болмауы керек');inp.value='';S.chat.push({r:'u',t:q});save();renderChat();
 const log=$('#chatLog'),ty=h('div',{class:'bub typing'},h('i'),h('i'),h('i'));log.append(ty);log.scrollTop=log.scrollHeight;$('#robot').classList.add('talk');$('#chatSend').disabled=true;
 let out;try{if(AI_CFG.chat){const c=new AbortController();setTimeout(()=>c.abort(),30000);const r=await fetch(AI_CFG.chat,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:q,history:S.chat.slice(-10)}),signal:c.signal});if(!r.ok)throw new Error('HTTP '+r.status);const d=await r.json();out={t:txt(d.reply,2000)||'Бос жауап келді',a:[]}}else{await new Promise(r=>setTimeout(r,500));out=localReply(q)}}
 catch(e){out={e:1,t:'Байланыс қатесі: AI серверіне қосыла алмадым ('+e.message+'). Кейінірек қайталаңыз.',a:[]}}
 S.chat.push({r:'b',...out});save();$('#robot').classList.remove('talk');$('#chatSend').disabled=false;renderChat()}

/* ---- Score ---- */
function renderScore(){const root=$('#scoreRoot');if(!root)return;clear(root);if(!S.groups.length)return root.append(h('div',{class:'empty'},'Алдымен жоба (топ) құрыңыз'));
 if(!grp(U.pid))U.pid=S.groups[0].id;const g=grp(U.pid);
 const sel=h('select',{'aria-label':'Жоба',onchange:e=>{U.pid=+e.target.value;U.aiErr='';renderScore()}},S.groups.map(x=>h('option',{value:x.id,selected:x.id===U.pid},x.name)));
 root.append(h('div',{class:'tools'},sel),h('div',{class:'tabs'},Object.keys(ST).map(t=>h('button',{class:t===U.tab?'on':'',onclick:()=>{U.tab=t;renderScore()}},t))),ST[U.tab](g))}
const ST={
 Жоба(g){const p=pj(g.id);const f=h('div',{class:'card'},h('h3',{},g.name),field('Жобаның мақсаты',h('input',{id:'spG',value:p.goal,maxlength:300}),'spG'),field('Сипаттамасы',h('textarea',{id:'spD'},p.desc||g.desc),'spD'),field('Мәселе мен шешім',h('textarea',{id:'spP'},p.ps),'spP'),field('Нақты дәлелдер (сауалнама, тәжірибе, зерттеу нәтижесі)',h('textarea',{id:'spE'},p.evidence),'spE'),field('Материалдар (прототип, сілтеме немесе сипаттама)',h('input',{id:'spM',value:p.mat,maxlength:300}),'spM'),
  h('button',{class:'btn primary',onclick:()=>{if(showErr({spD:val('spD').length<10?'Сипаттама кемінде 10 таңба':''}))return;SC().proj[g.id]={goal:val('spG'),desc:val('spD'),ps:val('spP'),evidence:val('spE'),mat:val('spM')};save();toast('Жоба деректері сақталды')}},'Сақтау'));
  return h('div',{class:'stack'},f,h('h3',{},'Бағалау критерийлері (барлығы 100 балл)'),h('div',{class:'grid'},CRIT.map(c=>h('div',{class:'card'},h('h3',{},c[1]),h('span',{class:'tag g'},'Максимум: '+c[2]+' балл'),h('p',{},c[3]),h('div',{class:'meta'},'Әсер ететін факторлар: '+c[4])))))},
 Қолданушылар(g){const rs=SC().ratings[g.id]||{},list=Object.entries(rs),my=rs[ME];let st=my?my.stars:0;const own=g.leader===ME;const row=h('div',{class:'stars'});const draw=()=>{clear(row);for(let i=1;i<=5;i++)row.append(h('button',{class:i<=st?'on':'','aria-label':i+' жұлдыз',onclick:()=>{st=i;draw()}},'★'))};draw();
  const cm=h('textarea',{id:'urC',maxlength:500,placeholder:'Пікіріңіз'},my?my.comment:'');
  return h('div',{class:'stack'},h('div',{class:'card'},h('h3',{},'Қолданушылардың бағасы (5 жұлдыздық шкала)'),h('div',{class:'big'},list.length?(list.reduce((a,[,r])=>a+r.stars,0)/list.length).toFixed(1)+' / 5':'Баға жоқ'),h('div',{class:'meta'},list.length+' баға. Бір пайдаланушыға бір жоба бойынша бір белсенді баға: қайта бағаласаңыз, ескісі ауыстырылады. Бұл демода бір браузер = бір пайдаланушы; нақты қорғау үшін авторизация мен сервер қажет.')),
   own?h('div',{class:'warn'},'Өз жобаңызды бағалай алмайсыз.'):h('div',{class:'card'},h('h3',{},my?'Бағаңызды жаңарту':'Баға беру'),row,h('div',{class:'f'},cm),h('button',{class:'btn primary',onclick:()=>{if(!st)return toast('Жұлдыз санын таңдаңыз');rs[ME]={stars:st,comment:cm.value.trim(),date:today()};SC().ratings[g.id]=rs;save();toast('Баға сақталды');renderScore()}},'Жіберу')),
   list.map(([a,r])=>h('div',{class:'msg'},h('b',{},a+' · '+'★'.repeat(r.stars)+' · '+r.date),h('div',{},r.comment||'Пікір жазылмаған'))))},
 Сарапшы(g){const ex=SC().expert.filter(e=>e.pid===g.id),my=ex.find(e=>e.a===ME);const own=g.leader===ME;
  const head=h('div',{class:'warn'},'Демо: сарапшы режимі тек интерфейс деңгейінде. Нақты рөлдерді тексеру серверде болуы керек, әйтпесе кез келген адам сарапшы бола алады.');
  const list=ex.map(e=>h('div',{class:'card'},h('h3',{},e.a+': '+e.total+' / 100'),h('div',{class:'meta'},e.date),CRIT.map(c=>h('div',{class:'meta'},c[1]+': '+e.scores[c[0]]+'/'+c[2]+(e.comments[c[0]]?' — '+e.comments[c[0]]:''))),h('p',{},'Қорытынды пікір: '+(e.final||'жоқ'))));
  if(!U.expert)return h('div',{class:'stack'},head,h('button',{class:'btn ghost',onclick:()=>{U.expert=true;renderScore()}},'Сарапшы ретінде бағалау (демо)'),list);
  if(own)return h('div',{class:'stack'},head,h('div',{class:'warn'},'Өз жобаңызды бағалай алмайсыз.'),list);
  const tot=h('div',{class:'big'});const inp={},cms={};const upd=()=>{tot.textContent=CRIT.reduce((a,c)=>a+clamp(inp[c[0]].value,c[2]),0)+' / 100'};
  const rows=CRIT.map(c=>{inp[c[0]]=h('input',{type:'number',min:0,max:c[2],value:my?my.scores[c[0]]:0,'aria-label':c[1],oninput:upd});cms[c[0]]=h('input',{placeholder:'Түсініктеме',maxlength:300,value:my?my.comments[c[0]]:''});return h('div',{class:'f'},h('div',{class:'crit'},h('b',{},c[1]+' (макс. '+c[2]+')'),inp[c[0]]),cms[c[0]])});
  const fin=h('textarea',{placeholder:'Қорытынды пікір',maxlength:600},my?my.final:'');upd();
  return h('div',{class:'stack'},head,h('div',{class:'card'},h('h3',{},'Сарапшы бағасы'),rows,tot,h('div',{class:'f'},fin),h('button',{class:'btn primary',onclick:()=>{const sc={},cs={};CRIT.forEach(c=>{sc[c[0]]=clamp(inp[c[0]].value,c[2]);cs[c[0]]=cms[c[0]].value.trim()});
   const rec={pid:g.id,a:ME,scores:sc,comments:cs,final:fin.value.trim(),total:Object.values(sc).reduce((a,b)=>a+b,0),date:today()};SC().expert=SC().expert.filter(e=>!(e.pid===g.id&&e.a===ME));SC().expert.push(rec);save();toast('Сарапшы бағасы сақталды');renderScore()}},'Бағаны сақтау')),list)},
 'AI талдауы'(g){const r=SC().ai[g.id];const btn=h('button',{class:'btn primary',onclick:e=>busy(e.target,'Талдануда…',()=>runAI(g))},'AI талдауын іске қосу');
  const note=!AI_CFG.score?h('div',{class:'warn'},'AI талдауы қосылмаған. Нақты талдау үшін API кілті сақталатын серверлік endpoint қажет, оның мекенжайын script.js ішіндегі AI_CFG.score өрісіне жазыңыз. Қазір баға ойдан шығарылмайды.'):null;
  return h('div',{class:'stack'},note,btn,U.aiErr?h('div',{class:'warn'},U.aiErr):null,r?aiView(r):h('div',{class:'empty'},'AI талдауы әлі жасалмаған'))},
 Қорытынды(g){const rs=Object.values(SC().ratings[g.id]||{}),ex=SC().expert.filter(e=>e.pid===g.id),ai=SC().ai[g.id];
  const avgU=rs.length?rs.reduce((a,r)=>a+r.stars,0)/rs.length:null,avgE=ex.length?ex.reduce((a,e)=>a+e.total,0)/ex.length:null,aiT=ai?ai.criteria.reduce((a,c)=>a+c.score,0):null;
  const box=(t,v,max,n,why)=>h('div',{class:'card'},h('h3',{},t),h('div',{class:'big'},v==null?'Баға жоқ':(+v).toFixed(1)+' / '+max),h('div',{class:'bar'},h('i',{style:'width:'+(v==null?0:v/max*100)+'%'})),h('div',{class:'meta'},n),h('p',{},why));
  return h('div',{class:'stack'},h('div',{class:'grid'},box('Қолданушылар',avgU,5,rs.length+' баға','Қатысушылардың 1–5 жұлдыздық орташа бағасы: аудиторияға қызықтылығын көрсетеді.'),box('Сарапшылар',avgE,100,ex.length+' сарапшы','Жеті критерий бойынша сарапшылардың жалпы балдарының орташасы.'),box('AI',aiT,100,ai?'AI талдауы':'AI талдауы жасалмаған','Дәлелдерге негізделген AI ұсынған балл. Сарапшы бағасына теңестірілмейді.')),h('div',{class:'warn'},'Үш баға әдейі біріктірілмейді: шкалалары әртүрлі (5 және 100). Біріктірілген санға салмақтарды әкімші белгілеуі керек, соны айтсаңыз қосамын.'))}};
const clamp=(v,max)=>Math.max(0,Math.min(max,Math.round(+v||0)));
function cleanAI(d){const arr=a=>(Array.isArray(a)?a:[]).map(x=>txt(x,300)).slice(0,8);const cs=Array.isArray(d&&d.criteria)?d.criteria:[];if(!cs.length)throw new Error('жауап пішімі дұрыс емес');
 return{criteria:CRIT.map(c=>{const x=cs.find(k=>k&&k.id===c[0])||{};return{id:c[0],score:clamp(x.score,c[2]),evidence:txt(x.evidence,500)||'Дәлел ұсынылмаған',level:LV.includes(x.level)?x.level:'Жеткіліксіз',weak:txt(x.weak,400),advice:txt(x.advice,400),next:txt(x.next,400)}}),strengths:arr(d.strengths),weaknesses:arr(d.weaknesses),improvements:arr(d.improvements),next_steps:arr(d.next_steps)}}
async function runAI(g){U.aiErr='';try{if(!AI_CFG.score)throw new Error('AI endpoint көрсетілмеген');const c=new AbortController();setTimeout(()=>c.abort(),45000);const r=await fetch(AI_CFG.score,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:g.name,...pj(g.id),criteria:CRIT.map(c=>({id:c[0],max:c[2]}))}),signal:c.signal});if(!r.ok)throw new Error('HTTP '+r.status);SC().ai[g.id]=cleanAI(await r.json());save();toast('AI талдауы дайын')}catch(e){U.aiErr='AI талдауы орындалмады: '+e.message}renderScore()}
function aiView(r){const tot=r.criteria.reduce((a,c)=>a+c.score,0);const ul=(t,a)=>a.length?h('div',{class:'card'},h('h3',{},t),h('ul',{},a.map(x=>h('li',{},x)))):null;
 return h('div',{class:'stack'},h('div',{class:'card'},h('h3',{},'AI бағасы'),h('div',{class:'big'},tot+' / 100'),h('div',{class:'bar'},h('i',{style:'width:'+tot+'%'}))),CRIT.map((c,i)=>{const x=r.criteria[i];return h('div',{class:'card'},h('h3',{},c[1]+': '+x.score+'/'+c[2]),h('div',{class:'bar'},h('i',{style:'width:'+x.score/c[2]*100+'%'})),h('p',{},'Дәлел: '+x.evidence),h('p',{},'Дәлел деңгейі: '+x.level),x.weak&&h('p',{},'Әлсіз тұсы: '+x.weak),x.advice&&h('p',{},'AI ұсынысы: '+x.advice),x.next&&h('p',{},'Келесі қадам: '+x.next))}),ul('Күшті жақтары',r.strengths),ul('Әлсіз тұстары',r.weaknesses),ul('Жақсарту ұсыныстары',r.improvements),ul('Келесі қадамдар',r.next_steps))}

function extraInit(){$('#chatSend').addEventListener('click',sendChat);$('#chatIn').addEventListener('keydown',e=>{if(e.key==='Enter')sendChat()});
 $('#chatClear').addEventListener('click',()=>{S.chat=[];save();renderChat()});
 if('IntersectionObserver'in window){const links=[...document.querySelectorAll('#menu a')];const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});links.forEach(a=>{const t=$(a.getAttribute('href'));t&&io.observe(t)})}}
