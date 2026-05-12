
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

const state = {
  q: "",
  chip: "all",
  kcalMax: "",
  proteinMin: "",
  sort: "popular",
  favoritesOnly: false,
  selectedId: null,
};

const favKey = "creami_premium_favorites_v1";
const notesKey = "creami_premium_notes_v1";
let favorites = JSON.parse(localStorage.getItem(favKey) || "[]");
let notes = JSON.parse(localStorage.getItem(notesKey) || "{}");

const recipes = window.RECIPES || [];

function saveFavs(){ localStorage.setItem(favKey, JSON.stringify(favorites)); }
function saveNotes(){ localStorage.setItem(notesKey, JSON.stringify(notes)); }
function isFav(id){ return favorites.includes(id); }
function toggleFav(id){
  favorites = isFav(id) ? favorites.filter(x => x !== id) : [...favorites, id];
  saveFavs();
  render();
  const selected = recipes.find(r => r.id === state.selectedId) || recipes[0];
  if(selected) renderDetail(selected);
}

function macroValue(v, unit="g"){ return v === null || v === undefined ? "—" : `${v}${unit}`; }
function kcalDisplay(r){
  if(r.kcalKnown) return String(r.kcal);
  return r.kcal ? `${r.kcal}*` : "—";
}
function textBlob(r){
  return [
    r.title, r.titleOriginal, r.macroOriginal,
    ...(r.tags||[]), ...(r.base||[]), ...(r.mixins||[]), ...(r.instructions||[])
  ].join(" ").toLowerCase();
}
function matches(r){
  const blob = textBlob(r);
  if(state.q && !blob.includes(state.q.toLowerCase())) return false;
  if(state.chip !== "all" && !(r.tags||[]).includes(state.chip)) return false;
  if(state.kcalMax && Number(r.kcal || 99999) > Number(state.kcalMax)) return false;
  if(state.proteinMin){
    if(r.protein === null || r.protein === undefined) return false;
    if(Number(r.protein) < Number(state.proteinMin)) return false;
  }
  if(state.favoritesOnly && !isFav(r.id)) return false;
  return true;
}
function sorted(list){
  const arr = [...list];
  switch(state.sort){
    case "kcalAsc": return arr.sort((a,b)=>(a.kcal||9999)-(b.kcal||9999));
    case "kcalDesc": return arr.sort((a,b)=>(b.kcal||0)-(a.kcal||0));
    case "proteinDesc": return arr.sort((a,b)=>(b.protein||-1)-(a.protein||-1));
    case "az": return arr.sort((a,b)=>a.title.localeCompare(b.title, "fr"));
    default: return arr.sort((a,b)=>{
      const fav = Number(isFav(b.id))-Number(isFav(a.id));
      if(fav) return fav;
      return (b.protein||0)-(a.protein||0);
    });
  }
}
function tagClass(tag){
  if(["chocolat","brownie","oreo"].includes(tag)) return "red";
  if(["très protéiné","moins de 400 kcal"].includes(tag)) return "blue";
  return "";
}
function card(r){
  const active = state.selectedId === r.id ? " active" : "";
  const tags = (r.tags||[]).slice(0,4).map(t => `<span class="tag ${tagClass(t)}">${t}</span>`).join("");
  return `
  <article class="recipe-card${active}" data-id="${r.id}" style="display:grid !important; grid-template-columns:minmax(145px, 38%) 1fr !important; min-height:168px !important; opacity:1 !important; visibility:visible !important;">
    <div class="card-img" style="background-image:url('${r.image}'); display:block !important; min-height:168px !important; background-size:cover !important; background-position:center !important;">
      <button class="favorite ${isFav(r.id) ? "on" : ""}" data-fav="${r.id}" aria-label="Favori">${isFav(r.id) ? "♥" : "♡"}</button>
    </div>
    <div class="card-body" style="display:block !important; opacity:1 !important; visibility:visible !important;">
      <h3 class="card-title">${escapeHtml(r.title)}</h3>
      <p class="card-sub">${escapeHtml(r.titleOriginal || "Ninja Creami Deluxe")}</p>
      <div class="macro-row">
        <div class="macro kcal"><em>KCAL</em><b>${kcalDisplay(r)}</b><small>par pot deluxe</small></div>
        <div class="macro prot"><em>PROT</em><b>${macroValue(r.protein)}</b><small>par pot deluxe</small></div>
      </div>
      <div class="card-mini-macros">
        <span>${macroValue(r.carbs)} gluc.</span>
        <span>${r.fatDisplay ? r.fatDisplay+"g" : macroValue(r.fat)} lip.</span>
      </div>
      <div class="tags">${tags}</div>
    </div>
  </article>`;
}
function render(){
  const list = sorted(recipes.filter(matches));
  $("#resultCount").textContent = `${list.length} recette${list.length>1?"s":""} trouvée${list.length>1?"s":""}`;
  $("#cards").innerHTML = list.map(card).join("") || `<div class="detail-empty">Aucune recette trouvée.</div>`;
  $$("#cards .recipe-card").forEach(el => {
    el.addEventListener("click", (e) => {
      if(e.target.closest("[data-fav]")) return;
      const r = recipes.find(x => x.id === el.dataset.id);
      openRecipe(r);
    });
  });
  $$("[data-fav]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      toggleFav(btn.dataset.fav);
    });
  });
  $("#favoritesToggle").classList.toggle("active", state.favoritesOnly);
}
function openRecipe(r){
  state.selectedId = r.id;
  if(window.innerWidth <= 980){
    const overlay = $("#mobileOverlay");
    overlay.hidden = false;
    overlay.innerHTML = `<aside class="detail"></aside>`;
    renderDetail(r, $(".detail", overlay));
    document.body.style.overflow = "hidden";
  }else{
    renderDetail(r);
  }
  render();
}
function closeMobile(){
  const overlay = $("#mobileOverlay");
  overlay.hidden = true;
  overlay.innerHTML = "";
  document.body.style.overflow = "";
}
function li(items){
  return (items||[]).map(x => `<li>${escapeHtml(x)}</li>`).join("");
}
function ol(items){
  return (items||[]).map(x => `<li>${escapeHtml(x)}</li>`).join("");
}
function renderDetail(r, root=$("#detail")){
  if(!r){ root.innerHTML = `<div class="detail-empty">Choisis une recette.</div>`; return; }
  const tags = (r.tags||[]).slice(0,5).map(t => `<span class="tag ${tagClass(t)}">${t}</span>`).join("");
  root.innerHTML = `
    <div class="detail-hero" style="background-image:url('${r.image}')">
      <div class="detail-actions">
        <button class="circle backBtn" aria-label="Retour">‹</button>
        <button class="circle favoriteDetail ${isFav(r.id) ? "on" : ""}" aria-label="Favori">${isFav(r.id) ? "♥" : "♡"}</button>
      </div>
      <div class="hero-title">
        <span class="label">Ninja Creami Deluxe</span>
        <h2>${escapeHtml(r.title)}</h2>
        <p>${escapeHtml(r.titleOriginal || "")}</p>
      </div>
    </div>
    <div class="detail-content">
      <div class="macro-strip">
        <div class="macro kcal"><em>KCAL</em><b>${kcalDisplay(r)}</b><small>${r.kcalKnown ? "par pot" : "ancien index*"}</small></div>
        <div class="macro prot"><em>PROT</em><b>${macroValue(r.protein)}</b><small>par pot</small></div>
        <div class="macro small"><em>GLUC</em><b>${macroValue(r.carbs)}</b><small>par pot</small></div>
        <div class="macro small"><em>LIP</em><b>${r.fatDisplay ? r.fatDisplay+"g" : "—"}</b><small>par pot</small></div>
      </div>

      <div class="meta-row">
        <div class="meta"><span>⏱</span><div>Préparation<b>2-5 min</b></div></div>
        <div class="meta"><span>❄</span><div>Congélation<b>16h+</b></div></div>
        <div class="meta"><span>🍨</span><div>Portion<b>1 pot Deluxe</b></div></div>
      </div>

      <div class="tags">${tags}</div>

      <section class="section">
        <h3>Ingrédients / Base</h3>
        <ul>${li(r.base)}</ul>
      </section>

      <section class="section">
        <h3>Instructions</h3>
        <ol>${ol(r.instructions)}</ol>
      </section>

      <section class="section">
        <h3>Mix-ins</h3>
        <ul>${li(r.mixins)}</ul>
      </section>

      <section class="section tip">
        <h3>Astuce / vérification</h3>
        <p>${escapeHtml(r.note || "")}</p>
        <p><strong>Macro source :</strong> ${escapeHtml(r.macroOriginal || "Non renseigné")}</p>
      </section>

      <section class="section">
        <h3>Notes perso</h3>
        <textarea class="note-field" data-note="${r.id}" placeholder="Ajoute ta variante, ton avis, ou un ajustement de texture...">${escapeHtml(notes[r.id] || "")}</textarea>
      </section>

      ${r.recipeImage ? `<a class="source-link" href="${r.recipeImage}" target="_blank" rel="noopener">Voir la fiche image d’origine</a>` : ""}
    </div>
  `;
  $(".favoriteDetail", root).addEventListener("click", () => toggleFav(r.id));
  $(".backBtn", root).addEventListener("click", () => {
    if(root.closest("#mobileOverlay")) closeMobile();
    else document.querySelector(".browse").scrollIntoView({behavior:"smooth", block:"start"});
  });
  $(".note-field", root).addEventListener("input", (e) => {
    notes[r.id] = e.target.value;
    saveNotes();
  });
}
function escapeHtml(s){
  return String(s ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}
function bind(){
  $("#searchInput").addEventListener("input", e => { state.q = e.target.value; render(); });
  $("#kcalMax").addEventListener("input", e => { state.kcalMax = e.target.value; render(); });
  $("#proteinMin").addEventListener("input", e => { state.proteinMin = e.target.value; render(); });
  $("#sortSelect").addEventListener("change", e => { state.sort = e.target.value; render(); });
  $("#resetBtn").addEventListener("click", () => {
    Object.assign(state, {q:"", chip:"all", kcalMax:"", proteinMin:"", sort:"popular", favoritesOnly:false});
    $("#searchInput").value = "";
    $("#kcalMax").value = "";
    $("#proteinMin").value = "";
    $("#sortSelect").value = "popular";
    $$(".chip").forEach(b => b.classList.toggle("active", b.dataset.chip === "all"));
    render();
  });
  $("#favoritesToggle").addEventListener("click", () => { state.favoritesOnly = !state.favoritesOnly; render(); });
  $$(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      state.chip = btn.dataset.chip;
      $$(".chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render();
    });
  });
  $("#mobileOverlay").addEventListener("click", e => {
    if(e.target.id === "mobileOverlay") closeMobile();
  });
  window.addEventListener("keydown", e => {
    if(e.key === "Escape" && !$("#mobileOverlay").hidden) closeMobile();
  });
}
bind();
state.selectedId = recipes[0]?.id || null;
render();
renderDetail(recipes[0]);
