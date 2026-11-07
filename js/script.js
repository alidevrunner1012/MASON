(function(){
var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
var root=document.documentElement;root.classList.add('lock');
var app=$('#app'),land=$('#land'),started=false;
function enter(){
  if(started)return;started=true;
  app.hidden=false;$$('img[data-i]').forEach(function(i){i.src=IMG[i.dataset.i]});
  scrollTo(0,0);land.classList.add('gone');
  setTimeout(function(){root.classList.remove('lock');frame()},950);
  frame();
}
$('#enter').onclick=enter;$('#skip').onclick=enter;
addEventListener('keydown',function(e){if(!started&&e.key==='Enter')enter();if(e.key==='Escape')$('#lb').classList.remove('on')});
/* lightbox */
var lb=$('#lb');
document.addEventListener('click',function(e){var f=e.target.closest('.b figure,.t');if(!f)return;var im=f.querySelector('img.top')||f.querySelector('img');lb.firstChild.src=IMG[im.dataset.i];lb.classList.add('on')});
lb.onclick=function(){lb.classList.remove('on')};
/* scrub */
var sc=$$('[data-s]'),hero=$('#hero'),pin=$('#pin');
var names=[['Wireframe','Every render starts as lines.'],['Clay model','Form and proportion, no colour yet.'],['Textures and materials','Stone, glass, roof tiles and greenery go on.'],['Lighting and post','Light, depth and colour grading.']];
var cl=function(v){return Math.min(1,Math.max(0,v))};
var links=$$('#nav a'),secs=links.map(function(a){return $(a.getAttribute('href'))});
function frame(){
  if(!started)return;
  var vh=innerHeight,y=scrollY,max=Math.max(1,root.scrollHeight-vh);
  root.style.setProperty('--g',cl(y/max));
  var hp=cl(y/(hero.offsetHeight-vh)),s=hp*4,k=Math.min(3,Math.floor(s)),cur=hp>=1?1:cl(s-k);
  for(var i=0;i<4;i++)pin.style.setProperty('--w'+i,cl(s-i));
  pin.style.setProperty('--cur',cur);pin.style.setProperty('--so',(hp>0&&hp<1)?1:0);pin.style.setProperty('--hp',cl((hp-.5)/.4));
  $('#st').textContent=names[k][0];$('#sd').textContent=names[k][1];
  var inHero=y<hero.offsetHeight-vh*.3,act=-1;
  secs.forEach(function(e,i){if(e.getBoundingClientRect().top<vh*.4)act=i});
  $('#mode').textContent=inHero?names[k][0]:(act>=0?links[act].textContent:'Shaded');
  $('#fr').textContent=('000'+Math.round(cl(y/max)*1000)).slice(-4);
  links.forEach(function(a,i){a.classList.toggle('on',i===act)});
  sc.forEach(function(e){
    var r=e.getBoundingClientRect();
        var p=cl((vh*.95-r.top)/(r.height*.75+vh*.25));p=Math.round(p*200)/200;
    if(e._p!==p){e._p=p;e.style.setProperty('--p',p);e.style.setProperty('--so',(p>.01&&p<.99)?1:0)}
    if(e.classList.contains('tools'))[].forEach.call(e.children,function(c,i){var q=cl(p*1.6-i*.25);c.style.setProperty('--p',q);c.classList.toggle('on',q>.9)});
  });
}
var t=false;addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(function(){t=false;frame()})}},{passive:true});
addEventListener('resize',frame);
})();