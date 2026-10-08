(()=>{'use strict';
const TOTAL=11,root='assets/pages/',src=n=>`${root}page-${String(n).padStart(2,'0')}.webp`;
const $=id=>document.getElementById(id),left=$('leftPage'),right=$('rightPage'),turn=$('turning');
const spreads=[[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]];
const mobile=()=>window.matchMedia('(max-width:600px)').matches;
let current=1,animating=false,thumbOpen=false,zoomScale=1,toastTimer;
function displayPage(element,n){element.innerHTML=n?`<img src="${src(n)}" alt="Blackout Fabrics หน้า ${n}" draggable="false" />`:`<div class="blank-page"><span>PROFACE STUDIO</span><strong>THE BEAUTY<br>OF THE CURTAIN.</strong></div>`}
function spreadFor(n){return n===1?0:Math.floor(n/2)}
function currentPair(){return mobile()?[0,current]:spreads[spreadFor(current)]}
function render(){const [l,r]=currentPair();displayPage(left,l);displayPage(right,r);const pos=mobile()?current:spreadFor(current)*2||1;$('pageLabel').innerHTML=`${String(pos).padStart(2,'0')} <i>/</i> ${TOTAL}`;$('pageSlider').value=current;$('viewModeLabel').textContent=mobile()?'SINGLE-PAGE VIEW':'DOUBLE-PAGE VIEW';const atStart=current===1,atEnd=current===11;['prevEdge','prevBtn','firstBtn'].forEach(id=>$(id).disabled=atStart);['nextEdge','nextBtn','lastBtn'].forEach(id=>$(id).disabled=atEnd);document.querySelectorAll('.thumb').forEach(el=>el.classList.toggle('selected',Number(el.dataset.page)===current));history.replaceState(null,'',`#page=${current}`)}
function goto(n,animate=false){n=Math.max(1,Math.min(TOTAL,n));if(animating||n===current)return;const old=current;const oldPair=currentPair();let dest=n;if(!mobile()&&animate)dest=spreads[spreadFor(n)][1];const forward=n>old;const newPair=mobile()?[0,n]:spreads[spreadFor(n)];if(!animate||Math.abs(spreadFor(n)-spreadFor(old))>1&&!mobile()){current=n;render();return}animating=true;turn.className='turning active '+(forward?'forward':'backward')+(forward?'':' reverse');if(forward){displayPage(left,newPair[0]);displayPage(right,newPair[1]);turn.innerHTML=`<div class="face front"><img src="${src(oldPair[1])}" alt="" /></div><div class="face back">${newPair[0]?`<img src="${src(newPair[0])}" alt=""/>`:''}</div>`}else{displayPage(left,newPair[0]);displayPage(right,newPair[1]);turn.innerHTML=`<div class="face front">${oldPair[0]?`<img src="${src(oldPair[0])}" alt=""/>`:''}</div><div class="face back"><img src="${src(newPair[1])}" alt=""/></div>`}setTimeout(()=>{current=n;turn.className='turning';turn.innerHTML='';animating=false;render()},650)}
function step(d){if(mobile())goto(current+d,true);else{const i=spreadFor(current)+d;if(i>=0&&i<spreads.length)goto(spreads[i][1],true)}}
$('nextEdge').onclick=$('nextBtn').onclick=()=>step(1);$('prevEdge').onclick=$('prevBtn').onclick=()=>step(-1);$('firstBtn').onclick=()=>goto(1);$('lastBtn').onclick=()=>goto(11);$('pageSlider').oninput=e=>goto(Number(e.target.value));
function notify(s){const t=$('toast');t.textContent=s;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2200)}
$('shareBtn').onclick=async()=>{try{await navigator.clipboard.writeText(location.href);notify('คัดลอกลิงก์เรียบร้อยแล้ว')}catch(e){window.prompt('คัดลอกลิงก์นี้',location.href)}};
const thumbGrid=$('thumbGrid');for(let n=1;n<=TOTAL;n++){const btn=document.createElement('button');btn.className='thumb';btn.dataset.page=n;btn.innerHTML=`<img loading="lazy" src="${src(n)}" alt="ตัวอย่างหน้า ${n}"><span>หน้า ${n}</span>`;btn.onclick=()=>{goto(n);toggleThumb(false)};thumbGrid.appendChild(btn)}
function toggleThumb(force){thumbOpen=force===undefined?!thumbOpen:force;$('thumbPanel').hidden=!thumbOpen;document.querySelectorAll('.thumb').forEach(el=>el.classList.toggle('selected',Number(el.dataset.page)===current))}$('thumbBtn').onclick=()=>toggleThumb();$('closeThumb').onclick=()=>toggleThumb(false);
function setZoom(){zoomScale=Math.max(.5,Math.min(3,zoomScale));$('zoomLevel').textContent=`${Math.round(zoomScale*100)}%`;const vh=Math.max(500,window.innerHeight-130);$('zoomImage').style.height=`${Math.round(vh*zoomScale)}px`}
function openZoom(){zoomScale=.9;$('zoomImage').src=src(currentPair()[1]);$('lightboxLabel').textContent=`หน้า ${currentPair()[1]} / ${TOTAL}`;$('lightbox').hidden=false;document.body.style.overflow='hidden';setZoom()}
function closeZoom(){$('lightbox').hidden=true;document.body.style.overflow=''}
$('zoomBtn').onclick=openZoom;$('closeZoom').onclick=closeZoom;$('zoomIn').onclick=()=>{zoomScale+=.25;setZoom()};$('zoomOut').onclick=()=>{zoomScale-=.25;setZoom()};$('zoomViewport').addEventListener('wheel',e=>{if(e.ctrlKey){e.preventDefault();zoomScale+=e.deltaY>0?-.1:.1;setZoom()}},{passive:false});
$('fullscreenBtn').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch(e){notify('เบราว์เซอร์นี้ไม่รองรับเต็มหน้าจอ')}};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeZoom();toggleThumb(false)}if(!$('lightbox').hidden)return;if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)});
window.matchMedia('(max-width:600px)').addEventListener('change',()=>{if(!animating)render()});
const initial=Number(new URLSearchParams(location.hash.slice(1)).get('page'));current=Number.isInteger(initial)&&initial>=1&&initial<=TOTAL?initial:1;render();
for(let n=2;n<=3;n++){const im=new Image();im.src=src(n)}
})();
