/* Sélecteur de langue des pages bilingues.
   Chaque langue est une <section lang="xx" data-title="…">, et un bouton
   <button data-lang="xx"> dans .lang-switch. Langue initiale : le #hash
   (#en, ou une ancre #en-… ), sinon celle du navigateur, sinon l'anglais. */
(function () {
  var sections = Array.prototype.slice.call(document.querySelectorAll('section[lang]'));
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.lang-switch button[data-lang]'));
  if (!sections.length) return;
  var langs = sections.map(function (s) { return s.lang; });

  function show(lang, keepHash) {
    sections.forEach(function (s) {
      var on = s.lang === lang;
      s.classList.toggle('active', on);
      if (on && s.dataset.title) document.title = s.dataset.title;
    });
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    document.documentElement.lang = lang;
    if (!keepHash) history.replaceState(null, '', '#' + lang);
  }

  function fromHash() {
    var h = location.hash.slice(1);
    if (langs.indexOf(h) !== -1) return h;
    var prefix = h.split('-')[0];
    return langs.indexOf(prefix) !== -1 ? prefix : null;
  }

  function fromBrowser() {
    var nav = (navigator.language || '').toLowerCase().split('-')[0];
    return langs.indexOf(nav) !== -1 ? nav : null;
  }

  // Navigateur dans une autre langue : l'anglais s'il existe, comme avant.
  var fallback = langs.indexOf('en') !== -1 ? 'en' : langs[0];
  show(fromHash() || fromBrowser() || fallback, true);

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { show(b.dataset.lang); window.scrollTo(0, 0); });
  });
  window.addEventListener('hashchange', function () {
    var l = fromHash();
    if (l) show(l, true);
  });
})();
