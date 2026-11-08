import { chromium } from '/home/user/sodashop/node_modules/playwright/index.mjs';
const D=process.argv[2], OUT=process.argv[3];
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const sizes={feed:{w:1080,h:1080,u:10.8,pad:'60px 70px',gap:'26px',jh:'250px',jr:'30px',jt:'20px',rt:'0',rs:'380px',cjh:'300px'},story:{w:1080,h:1920,u:12,pad:'230px 70px 260px',gap:'60px',jh:'420px',jr:'40px',jt:'200px',rt:'0',rs:'620px',cjh:'500px'}};
for (const ad of ['a','b','c']) for (const [k,s] of Object.entries(sizes)) {
  const p = await b.newPage({ viewport:{width:s.w,height:s.h} });
  await p.goto(`file://${D}/${ad}.html`,{waitUntil:'networkidle'});
  await p.addStyleTag({content:`:root{--foot:${k==='feed'?'none':'flex'};--di:${k==='feed'?'74%':'88%'};--w:${s.w}px;--h:${s.h}px;--u:${s.u}px;--pad:${s.pad};--gap:${s.gap};--jh:${ad==='c'?s.cjh:s.jh};--jr:${s.jr};--jt:${s.jt};--rt:${s.rt};--rs:${s.rs}}`});
  await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(800);
  const over = await p.evaluate(()=>{const w=document.querySelector('.wrap'); return w.scrollHeight>w.clientHeight+2;});
  await p.screenshot({path:`${OUT}/${ad}-${k}.png`});
  console.log(ad,k,'overflow:',over);
  await p.close();
}
await b.close();
