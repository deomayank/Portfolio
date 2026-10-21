(() => {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const list = document.getElementById('project-list');
  if (!list) return;
  const searchInput = document.getElementById('project-search');
  const filterBox = document.getElementById('category-filters');
  const resultsCount = document.getElementById('results-count');
  const noResults = document.getElementById('no-results');
  const clearButton = document.getElementById('clear-search');
  const total = document.getElementById('project-total');
  const dialog = document.getElementById('project-dialog');
  const dialogContent = document.getElementById('dialog-content');
  const dialogKicker = document.getElementById('dialog-kicker');
  const toast = document.getElementById('site-toast');
  let activeCategory = 'all';
  let toastTimer;
  if (total) total.textContent = String(projects.length).padStart(2, '0');
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = value => String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9+#.\s-]/g,' ').replace(/[-_]/g,' ').replace(/\s+/g,' ').trim();
  function editDistance(a,b){
    if(a===b)return 0;if(!a.length)return b.length;if(!b.length)return a.length;
    let prev=Array.from({length:b.length+1},(_,i)=>i);
    for(let i=1;i<=a.length;i++){const cur=[i];for(let j=1;j<=b.length;j++)cur[j]=Math.min(cur[j-1]+1,prev[j]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));prev=cur;}return prev[b.length];
  }
  function tokenScore(query, corpus){
    const words=[...new Set(normalize(corpus).split(' ').filter(Boolean))];
    return query.split(' ').filter(Boolean).reduce((sum,q)=>{
      if(!q)return sum;
      if(corpus.includes(q))return sum+1.0;
      let best=0;
      for(const w of words){if(Math.abs(w.length-q.length)>2)continue;const d=editDistance(q,w);const score=1-d/Math.max(q.length,w.length);if(score>best)best=score;}
      return sum+(best>=.66?best*.78:0);
    },0)/Math.max(1,query.split(' ').filter(Boolean).length);
  }
  function scoreProject(project, query){
    const q=normalize(query);if(!q)return 1;
    const title=normalize(project.title), category=normalize(project.categoryLabel), summary=normalize(project.summary), tech=normalize((project.technologies||[]).join(' ')), search=normalize(project.search||'');
    const corpus=normalize([project.title,project.categoryLabel,project.summary,project.problem,project.approach,project.outcome,project.role,(project.technologies||[]).join(' '),project.search].join(' '));
    const exactPhrase=corpus.includes(q)?1:0;const titleScore=tokenScore(q,title);const summaryScore=tokenScore(q,summary);const techScore=tokenScore(q,tech);const catScore=tokenScore(q,category);const broadScore=tokenScore(q,search+' '+corpus);
    return exactPhrase*2.8+titleScore*2.5+techScore*1.25+summaryScore*1.2+catScore*.45+broadScore*.65;
  }
  function notify(message){if(!toast)return;toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3200);}
  function linkAction(project, key, label){
    const url=project.links && project.links[key];
    if(key==='documentation')return `<button class="project-action primary" type="button" data-action="details" data-id="${escapeHTML(project.id)}">${label}<span aria-hidden="true">↗</span></button>`;
    if(url && /^https:\/\//i.test(url))return `<a class="project-action" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true">↗</span></a>`;
    return `<button class="project-action" type="button" data-action="missing" data-label="${escapeHTML(label)}">${label}<span aria-hidden="true">↗</span></button>`;
  }
  function card(project){
    return `<article class="project-card" style="--visual-bg:${escapeHTML(project.visualBg||'#252820')};--visual-fg:${escapeHTML(project.visualFg||'#d4f36a')}">
      <div class="project-visual" aria-hidden="true"><span class="project-monogram">${escapeHTML(project.monogram||'M.')}</span><small>CASE / ${escapeHTML(project.number)}</small></div>
      <div class="project-copy"><div class="project-meta"><span class="project-number">${escapeHTML(project.number)} / 09</span><span class="project-category">${escapeHTML(project.categoryLabel)}</span></div><h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.summary)}</p><div class="project-outcome"><span class="outcome-mark" aria-hidden="true">↗</span><span><strong>Outcome</strong> — ${escapeHTML(project.outcome)}</span></div><div class="project-tags">${(project.technologies||[]).slice(0,5).map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div></div>
      <div class="project-actions">${linkAction(project,'documentation','Documentation')}${linkAction(project,'website','Project website')}${linkAction(project,'source','Source code')}</div>
    </article>`;
  }
  function render(){
    const query=searchInput ? searchInput.value.trim() : '';
    let found=projects.filter(p=>activeCategory==='all'||p.category===activeCategory).map(p=>({...p,_score:scoreProject(p,query)}));
    if(query)found=found.filter(p=>p._score>=.34).sort((a,b)=>b._score-a._score||a.number.localeCompare(b.number));
    else found.sort((a,b)=>a.number.localeCompare(b.number));
    list.innerHTML=found.map(card).join('');
    if(resultsCount)resultsCount.textContent=`${found.length} of ${projects.length} projects`;
    if(noResults)noResults.hidden=found.length>0;
    list.hidden=found.length===0;
    if(filterBox){filterBox.querySelectorAll('[data-category]').forEach(btn=>{const selected=btn.dataset.category===activeCategory;btn.classList.toggle('selected',selected);btn.setAttribute('aria-pressed',String(selected));const count=btn.querySelector('span');if(count&&btn.dataset.category==='all')count.textContent=String(projects.length).padStart(2,'0');});}
  }
  function openDetails(id){
    const p=projects.find(x=>x.id===id);if(!p||!dialog||!dialogContent)return;
    if(dialogKicker)dialogKicker.textContent=`PROJECT NOTES / ${p.number}`;
    const links=[['Documentation','documentation'],['Project website','website'],['Source code','source']].filter(([_,k])=>p.links&&p.links[k]&&/^https:\/\//i.test(p.links[k]));
    dialogContent.innerHTML=`<div class="detail-category">${escapeHTML(p.categoryLabel)} · CASE ${escapeHTML(p.number)}</div><h2 id="dialog-title">${escapeHTML(p.title)}</h2><p class="detail-summary">${escapeHTML(p.summary)}</p><div class="detail-grid"><section class="detail-block"><h3>The problem</h3><p>${escapeHTML(p.problem)}</p></section><section class="detail-block"><h3>Approach</h3><p>${escapeHTML(p.approach)}</p></section><section class="detail-block"><h3>My contribution</h3><p>${escapeHTML(p.role)}</p></section><section class="detail-block"><h3>Tools & methods</h3><ul>${(p.technologies||[]).map(t=>`<li>${escapeHTML(t)}</li>`).join('')}</ul></section></div><div class="detail-outcome"><span>MEASURED OUTCOME</span><p>${escapeHTML(p.outcome)}</p></div>${links.length?`<div class="dialog-links">${links.map(([label,k])=>`<a href="${escapeHTML(p.links[k])}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join('')}</div>`:''}`;
    if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');
  }
  if(filterBox)filterBox.addEventListener('click',e=>{const btn=e.target.closest('[data-category]');if(!btn)return;activeCategory=btn.dataset.category;render();});
  if(searchInput)searchInput.addEventListener('input',render);
  if(clearButton)clearButton.addEventListener('click',()=>{if(searchInput)searchInput.value='';activeCategory='all';render();searchInput?.focus();});
  list.addEventListener('click',e=>{const btn=e.target.closest('[data-action]');if(!btn)return;if(btn.dataset.action==='details')openDetails(btn.dataset.id);if(btn.dataset.action==='missing')notify(`${btn.dataset.label} link has not been configured yet. No public URL was provided for this project.`);});
  document.querySelectorAll('[data-close-dialog]').forEach(btn=>btn.addEventListener('click',()=>dialog?.close()));
  if(dialog){dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.addEventListener('close',()=>{const active=document.activeElement;if(active&&active.blur)active.blur();});}
  document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'&&searchInput){e.preventDefault();searchInput.focus();}if(e.key==='Escape'&&dialog?.open)dialog.close();});
  render();
})();
