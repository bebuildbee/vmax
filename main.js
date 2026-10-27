const LOGIN='https://vmax-d-production.up.railway.app/login';
const I='<svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="10" fill="#ffaf03"/><circle cx="20" cy="20" r="11" fill="none" stroke="#023047" stroke-width="3.5"/><path d="M14.5 16.5l5.5 8.5 5.5-8.5" fill="none" stroke="#023047" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const L=[['index.html','What is VMax','home'],['docs.html','Documentation','docs'],['support.html','Support','support'],['discover.html','Discover','discover']];
const p=document.body.dataset.page,n=document.getElementById('nav');
n.innerHTML=`<a class="logo" href="index.html">${I}<b>VMax</b></a><ul>${L.map(l=>`<li><a href="${l[0]}"${l[2]==p?' aria-current="page"':''}>${l[1]}</a></li>`).join('')}</ul><a class="btn" href="${LOGIN}">Sign in</a>`;
const sc=()=>n.classList.toggle('solid',p!=='home'||scrollY>40);sc();addEventListener('scroll',sc,{passive:true});
document.getElementById('foot').innerHTML=`<img src="assets/allobank.png" alt="Allo Bank"><span>VMax is in use at Allo Bank.</span><nav><a href="${LOGIN}">Sign in</a><a href="support.html">Support</a></nav>`;
document.querySelectorAll('.vid').forEach(v=>{const m=v.querySelector('.media'),h=m.innerHTML;
const play=()=>{const im=m.querySelector('img');if(im&&im.naturalWidth)m.style.aspectRatio=im.naturalWidth+'/'+im.naturalHeight;m.innerHTML=`<iframe src="https://drive.google.com/file/d/${v.dataset.drive}/preview" allow="autoplay" allowfullscreen title="VMax video"></iframe>`};
v.shut=()=>{v.classList.remove('open');m.innerHTML=h;m.style.aspectRatio=''};
v.addEventListener('click',e=>{if(v.classList.contains('open')){if(e.target.closest('.x'))v.shut();return}
if(m.querySelector('iframe'))return;
document.querySelectorAll('.vid.open').forEach(o=>o.shut());
const bp=v.querySelector('.bp');if(bp)v.classList.add('open');play();if(bp)v.scrollIntoView({behavior:'smooth',block:'start'})})});
