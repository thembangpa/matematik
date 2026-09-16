/* ------------------------------------------------------------------
   Matematik 1.–6. klasse — app (hash router, i18n, progress, rendering)
   No build step. Content lives in js/content/*.js, widgets in js/widgets.js
   Routes:  #/            home (choose level)
            #/trin/<lvl>  level page (areas, topics, grade filter)
            #/<topicId>   topic page
            #/kilder      sources
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  var C = window.CONTENT;
  var W = window.WIDGETS || {};

  var UI = {
    da: {
      siteTitle: 'Matematik 1.–6. klasse',
      home: 'Forside',
      sources: 'Kilder og om siden',
      heroTitle: 'Matematik i 1.–6. klasse',
      heroLead: 'Alt det, du skal kunne i matematik – forklaret enkelt, med eksempler og opgaver. Indholdet følger Fælles Mål fra Børne- og Undervisningsministeriet. Vælg dit klassetrin:',
      levelOpen: 'Gå til emnerne →',
      mustTitle: 'Det allervigtigste',
      mustIntro: 'Fælles Mål har tre „opmærksomhedspunkter“ for dette trinforløb. Det er de færdigheder, som skolen skal være særligt opmærksom på, at alle elever har:',
      goalLabel: 'Kompetencemål:',
      progressOf: 'af',
      topicsDone: 'emner gennemført',
      filterLabel: 'Vis emner for:',
      filterAll: 'Alle',
      phase: 'Fase',
      typically: 'typisk',
      phaseWhy: 'Hvorfor „typisk“?',
      whatGoal: 'Hvad skal du kunne? (fra Fælles Mål)',
      goalSrc: 'Kilde: Fælles Mål – Matematik, færdigheds- og vidensmål (vejledende),',
      keyWords: 'Vigtige ord',
      explain: 'Forklaring',
      example: 'Eksempel',
      practice: 'Prøv selv',
      tryIt: 'Prøv det',
      showAnswer: 'Vis svar',
      hideAnswer: 'Skjul svar',
      answer: 'Svar:',
      doneLabel: 'Jeg kan dette nu ✓',
      prev: 'Forrige',
      next: 'Næste',
      backLevel: 'Tilbage til oversigten',
      footer: 'Bygget på Fælles Mål for matematik (Børne- og Undervisningsministeriet). Se',
      footerLink: 'kilder',
      notFound: 'Siden findes ikke.',
      langSwitch: 'EN',
      resetProgress: 'Nulstil fremskridt',
      resetConfirm: 'Vil du slette alle flueben?'
    },
    en: {
      siteTitle: 'Maths Grades 1–6',
      home: 'Home',
      sources: 'Sources & about',
      heroTitle: 'Maths in grades 1–6',
      heroLead: 'Everything you need to know in maths – explained simply, with examples and practice. The content follows Fælles Mål (the Danish national curriculum) from the Ministry of Children and Education. Choose your level:',
      levelOpen: 'Go to the topics →',
      mustTitle: 'The most important things',
      mustIntro: 'Fælles Mål has three "attention points" for this trinforløb. These are the skills the school must make sure every pupil has:',
      goalLabel: 'Competence goal:',
      progressOf: 'of',
      topicsDone: 'topics completed',
      filterLabel: 'Show topics for:',
      filterAll: 'All',
      phase: 'Phase',
      typically: 'typically',
      phaseWhy: 'Why "typically"?',
      whatGoal: 'What should you be able to do? (from Fælles Mål)',
      goalSrc: 'Source: Fælles Mål – Mathematics, skills and knowledge goals (advisory, translated from Danish),',
      keyWords: 'Key words',
      explain: 'Explanation',
      example: 'Example',
      practice: 'Try it yourself',
      tryIt: 'Try it',
      showAnswer: 'Show answer',
      hideAnswer: 'Hide answer',
      answer: 'Answer:',
      doneLabel: 'I can do this now ✓',
      prev: 'Previous',
      next: 'Next',
      backLevel: 'Back to the overview',
      footer: 'Built on Fælles Mål for mathematics (Danish Ministry of Children and Education). See',
      footerLink: 'sources',
      notFound: 'Page not found.',
      langSwitch: 'DA',
      resetProgress: 'Reset progress',
      resetConfirm: 'Delete all check marks?'
    }
  };

  var lang = (function () {
    try { return localStorage.getItem('lang') === 'en' ? 'en' : 'da'; } catch (e) { return 'da'; }
  })();

  function t(key) { return UI[lang][key]; }
  function L(obj) { // pick language from {da, en}; fall back to the other
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] != null ? obj[lang] : (obj.da != null ? obj.da : (obj.en || ''));
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function gradeLabel(g) { return lang === 'da' ? g + '. klasse' : 'grade ' + g; }

  /* ---------- progress (localStorage) ---------- */
  function getDone() {
    try { return JSON.parse(localStorage.getItem('progress') || '[]'); } catch (e) { return []; }
  }
  function setDone(list) {
    try { localStorage.setItem('progress', JSON.stringify(list)); } catch (e) { /* ignore */ }
  }
  function isDone(id) { return getDone().indexOf(id) !== -1; }
  function toggleDone(id, on) {
    var list = getDone().filter(function (x) { return x !== id; });
    if (on) list.push(id);
    setDone(list);
  }

  /* ---------- structure helpers ---------- */
  function levelById(id) { for (var i = 0; i < C.levels.length; i++) if (C.levels[i].id === id) return C.levels[i]; return null; }
  function levelOf(topicId) {
    for (var i = 0; i < C.levels.length; i++) {
      var lv = C.levels[i];
      for (var j = 0; j < lv.areas.length; j++) if (lv.areas[j].topics.indexOf(topicId) !== -1) return lv;
    }
    return null;
  }
  function areaOf(topicId) {
    var lv = levelOf(topicId); if (!lv) return null;
    for (var j = 0; j < lv.areas.length; j++) if (lv.areas[j].topics.indexOf(topicId) !== -1) return lv.areas[j];
    return null;
  }
  function topicIds(lv) {
    var ids = [];
    lv.areas.forEach(function (a) { a.topics.forEach(function (id) { if (C.topics[id]) ids.push(id); }); });
    return ids;
  }
  var currentLevelId = (function () {
    try { return localStorage.getItem('level') || 'mellemtrin'; } catch (e) { return 'mellemtrin'; }
  })();
  function setCurrentLevel(id) {
    currentLevelId = id;
    try { localStorage.setItem('level', id); } catch (e) { /* ignore */ }
  }
  function gradesOf(lv, tp) { return (tp.phase || []).map(function (p) { return lv.grades[p - 1]; }); }
  function phaseTag(lv, tp) {
    if (!tp.phase || !tp.phase.length) return '';
    var grades = gradesOf(lv, tp);
    var gtxt = grades.length === 1 ? gradeLabel(grades[0]) : (lang === 'da' ? grades[0] + '.–' + grades[grades.length - 1] + '. klasse' : 'grades ' + grades[0] + '–' + grades[grades.length - 1]);
    return '<span class="phase-tag" title="' + esc(L(C.phaseNote)) + '">' + t('phase') + ' ' + tp.phase.join('–') + ' · ' + t('typically') + ' ' + gtxt + '</span>';
  }

  /* ---------- sidebar ---------- */
  function renderSidebar(activeId) {
    var lv = levelById(currentLevelId) || C.levels[0];
    var html = '<a class="side-link side-home' + (activeId === '__home' ? ' active' : '') + '" href="#/">🏠 ' + t('home') + '</a>';
    html += '<div class="level-switch">';
    C.levels.forEach(function (l) {
      html += '<a href="#/trin/' + l.id + '" class="' + (l.id === lv.id ? 'on' : '') + '">' + esc(L(l.title)) + '</a>';
    });
    html += '</div>';
    var n = 0;
    lv.areas.forEach(function (a) {
      html += '<div class="side-group area-' + a.id + '">';
      html += '<div class="side-title"><span class="dot" style="background:var(--c)"></span>' + esc(L(a.title)) + '</div>';
      a.topics.forEach(function (id) {
        var tp = C.topics[id]; if (!tp) return; n++;
        html += '<a class="side-link' + (activeId === id ? ' active' : '') + '" href="#/' + id + '">'
          + '<span class="num">' + n + '</span><span>' + esc(L(tp.title)) + '</span>'
          + (isDone(id) ? '<span class="done">✓</span>' : '') + '</a>';
      });
      html += '</div>';
    });
    html += '<a class="side-link' + (activeId === '__kilder' ? ' active' : '') + '" href="#/kilder">📚 ' + t('sources') + '</a>';
    document.getElementById('sidebar').innerHTML = html;
  }

  /* ---------- home: choose level ---------- */
  function renderHome() {
    var done = getDone();
    var html = '<div class="page">';
    html += '<div class="hero"><h1>' + t('heroTitle') + '</h1><p class="lead">' + t('heroLead') + '</p></div>';
    html += '<div class="level-grid">';
    C.levels.forEach(function (lv) {
      var ids = topicIds(lv);
      var d = ids.filter(function (id) { return done.indexOf(id) !== -1; }).length;
      html += '<a class="level-card" href="#/trin/' + lv.id + '">';
      html += '<div class="grades">' + lv.grades.map(function (g) { return '<span>' + g + '</span>'; }).join('') + '</div>';
      html += '<h2>' + esc(L(lv.title)) + '</h2><div class="sub">' + esc(L(lv.name)) + ' · ' + esc(L(lv.after)) + '</div>';
      html += '<p>' + L(lv.intro) + '</p>';
      html += '<div class="progress"><span style="width:' + (ids.length ? Math.round(100 * d / ids.length) : 0) + '%"></span></div>';
      html += '<div class="progress-label">' + d + ' ' + t('progressOf') + ' ' + ids.length + ' ' + t('topicsDone') + '</div>';
      html += '<div class="cta">' + t('levelOpen') + '</div></a>';
    });
    html += '</div>';
    html += '<div class="tip"><div class="icon">ℹ️</div><div><p>' + L(C.phaseNote) + '</p></div></div>';
    if (done.length) {
      html += '<p style="margin-top:18px"><button id="resetBtn" class="ghost">' + t('resetProgress') + '</button></p>';
    }
    html += '</div>';
    document.getElementById('main').innerHTML = html;
    var rb = document.getElementById('resetBtn');
    if (rb) rb.addEventListener('click', function () { if (confirm(t('resetConfirm'))) { setDone([]); render(); } });
  }

  /* ---------- level page ---------- */
  var gradeFilter = 0; // 0 = all
  function renderLevel(lv) {
    var done = getDone();
    var html = '<div class="page">';
    html += '<div class="crumbs"><a href="#/">' + t('home') + '</a> › ' + esc(L(lv.title)) + '</div>';
    html += '<div class="hero"><h1>' + esc(L(lv.title)) + ' <span class="hero-sub">' + esc(L(lv.name)) + '</span></h1><p class="lead">' + L(lv.intro) + '</p></div>';

    html += '<div class="card accent area-kompetencer"><h2>⭐ ' + t('mustTitle') + ' (' + esc(L(lv.after)) + ')</h2><p>' + t('mustIntro') + '</p><ol class="must-list">';
    lv.attentionPoints.forEach(function (p) {
      html += '<li>' + esc(L(p.text)) + '<span class="where">' + esc(L(p.where)) + '</span></li>';
    });
    html += '</ol></div>';

    html += '<div class="filter"><span>' + t('filterLabel') + '</span>';
    html += '<button class="chip' + (gradeFilter === 0 ? ' on' : '') + '" data-g="0">' + t('filterAll') + '</button>';
    lv.grades.forEach(function (g) { html += '<button class="chip' + (gradeFilter === g ? ' on' : '') + '" data-g="' + g + '">' + gradeLabel(g) + '</button>'; });
    html += '<details class="why"><summary>' + t('phaseWhy') + '</summary><p>' + L(C.phaseNote) + '</p></details></div>';

    html += '<div class="area-grid">';
    var n = 0;
    lv.areas.forEach(function (a) {
      var ids = a.topics.filter(function (id) { return C.topics[id]; });
      var d = ids.filter(function (id) { return done.indexOf(id) !== -1; }).length;
      html += '<div class="area-card area-' + a.id + '"><h2>' + esc(L(a.title)) + '</h2>';
      html += '<p class="goal">' + t('goalLabel') + ' „' + esc(L(a.goal)) + '“</p>';
      html += '<p>' + L(a.intro) + '</p><ol start="' + (n + 1) + '">';
      ids.forEach(function (id) {
        n++;
        var tp = C.topics[id];
        var grades = gradesOf(lv, tp);
        var dim = gradeFilter && grades.indexOf(gradeFilter) === -1;
        html += '<li class="' + (done.indexOf(id) !== -1 ? 'done' : '') + (dim ? ' dim' : '') + '"><a href="#/' + id + '">' + esc(L(tp.title)) + '</a>'
          + (grades.length ? '<span class="mini-grades">' + grades.map(function (g) { return '<i class="' + (gradeFilter === g ? 'on' : '') + '">' + g + '</i>'; }).join('') + '</span>' : '') + '</li>';
      });
      html += '</ol>';
      html += '<div class="progress"><span style="width:' + (ids.length ? Math.round(100 * d / ids.length) : 0) + '%"></span></div>';
      html += '<div class="progress-label">' + d + ' ' + t('progressOf') + ' ' + ids.length + ' ' + t('topicsDone') + '</div>';
      html += '</div>';
    });
    html += '</div></div>';
    var main = document.getElementById('main');
    main.innerHTML = html;
    main.querySelectorAll('.filter .chip').forEach(function (b) {
      b.addEventListener('click', function () { gradeFilter = +this.getAttribute('data-g'); var y = window.scrollY; renderLevel(lv); window.scrollTo(0, y); });
    });
  }

  /* ---------- topic ---------- */
  function renderSection(sec, idx) {
    var h = '';
    var badge = function (label) { return '<span class="badge">' + label + '</span>'; };
    switch (sec.type) {
      case 'text':
        h += '<section class="section"><h2>' + (sec.title ? esc(L(sec.title)) : t('explain')) + '</h2>' + L(sec.body) + '</section>';
        break;
      case 'example':
        h += '<section class="section"><h2>' + badge(t('example')) + (sec.title ? esc(L(sec.title)) : '') + '</h2>';
        h += '<div class="example"><div class="problem">' + L(sec.problem) + '</div>';
        var steps = L(sec.steps);
        if (steps && steps.length) { h += '<ol class="steps">'; steps.forEach(function (s) { h += '<li>' + s + '</li>'; }); h += '</ol>'; }
        if (sec.answer) h += '<div class="answer">' + t('answer') + ' ' + L(sec.answer) + '</div>';
        h += '</div></section>';
        break;
      case 'tip':
        h += '<section class="section"><div class="tip"><div class="icon">' + (sec.icon || '💡') + '</div><div>' + L(sec.body) + '</div></div></section>';
        break;
      case 'widget':
        h += '<section class="section"><h2>' + badge(t('tryIt')) + (sec.title ? esc(L(sec.title)) : '') + '</h2>';
        h += '<div class="widget" data-widget="' + sec.widget + '" data-opts=\'' + esc(JSON.stringify(sec.opts || {})) + '\'></div></section>';
        break;
      case 'practice':
        h += '<section class="section practice"><h2>' + badge(t('practice')) + (sec.title ? esc(L(sec.title)) : '') + '</h2>';
        (sec.items || []).forEach(function (it, i) {
          var id = 'ans-' + idx + '-' + i;
          h += '<div class="item"><div class="q"><span class="n">' + (i + 1) + '</span>' + L(it.q) + '</div>';
          h += '<button class="reveal" data-target="' + id + '">' + t('showAnswer') + '</button>';
          h += '<div class="a" id="' + id + '" hidden><b>' + t('answer') + '</b> ' + L(it.a) + '</div></div>';
        });
        h += '</section>';
        break;
      case 'fig':
        h += '<div class="fig">' + L(sec.svg) + (sec.caption ? '<div class="cap">' + L(sec.caption) + '</div>' : '') + '</div>';
        break;
    }
    return h;
  }

  function renderTopic(id) {
    var tp = C.topics[id];
    var lv = levelOf(id);
    var area = areaOf(id);
    var ids = topicIds(lv);
    var pos = ids.indexOf(id);
    var html = '<div class="page area-' + area.id + '">';
    html += '<div class="crumbs"><a href="#/">' + t('home') + '</a> › <a href="#/trin/' + lv.id + '">' + esc(L(lv.title)) + '</a> › ' + esc(L(area.title)) + '</div>';
    html += '<div class="topic-head"><div class="area-label">' + esc(L(area.title)) + '</div><h1>' + esc(L(tp.title)) + '</h1>';
    if (tp.summary) html += '<p class="summary">' + L(tp.summary) + '</p>';
    html += '<div class="tags">' + phaseTag(lv, tp) + '</div>';
    html += '</div>';

    if (tp.goals) {
      html += '<div class="goalbox"><h3>🎯 ' + t('whatGoal') + '</h3><ul>';
      L(tp.goals).forEach(function (g) { html += '<li>' + esc(g) + '</li>'; });
      html += '</ul><div class="src">' + t('goalSrc') + ' ' + esc(L(lv.after)) + '.</div></div>';
    }

    if (tp.terms && tp.terms.length) {
      html += '<section class="section"><h2>' + t('keyWords') + '</h2><div class="terms">';
      tp.terms.forEach(function (tm) {
        var main = lang === 'da' ? tm.da : tm.en;
        var other = lang === 'da' ? tm.en : tm.da;
        html += '<div class="term"><b>' + esc(main) + ' <span class="other">(' + esc(other) + ')</span></b>' + (tm.def ? '<span class="def">' + L(tm.def) + '</span>' : '') + '</div>';
      });
      html += '</div></section>';
    }

    (tp.sections || []).forEach(function (sec, i) { html += renderSection(sec, i); });

    var done = isDone(id);
    html += '<div class="done-box' + (done ? ' is-done' : '') + '"><input type="checkbox" id="doneChk"' + (done ? ' checked' : '') + '><label for="doneChk">' + t('doneLabel') + '</label></div>';

    html += '<div class="pager">';
    if (pos > 0) html += '<a class="prev" href="#/' + ids[pos - 1] + '"><small>← ' + t('prev') + '</small>' + esc(L(C.topics[ids[pos - 1]].title)) + '</a>';
    else html += '<a class="prev" href="#/trin/' + lv.id + '"><small>← ' + t('prev') + '</small>' + t('backLevel') + '</a>';
    if (pos < ids.length - 1) html += '<a class="next" href="#/' + ids[pos + 1] + '"><small>' + t('next') + ' →</small>' + esc(L(C.topics[ids[pos + 1]].title)) + '</a>';
    else html += '<a class="next" href="#/trin/' + lv.id + '"><small>' + t('next') + ' →</small>' + t('backLevel') + '</a>';
    html += '</div></div>';

    var main = document.getElementById('main');
    main.innerHTML = html;
    wrapTables(main);

    main.querySelectorAll('.reveal').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var a = document.getElementById(btn.getAttribute('data-target'));
        var hidden = a.hasAttribute('hidden');
        if (hidden) a.removeAttribute('hidden'); else a.setAttribute('hidden', '');
        btn.textContent = hidden ? t('hideAnswer') : t('showAnswer');
      });
    });
    var chk = document.getElementById('doneChk');
    chk.addEventListener('change', function () {
      toggleDone(id, chk.checked);
      chk.parentNode.classList.toggle('is-done', chk.checked);
      renderSidebar(id);
    });
    main.querySelectorAll('.widget[data-widget]').forEach(function (el) {
      var name = el.getAttribute('data-widget');
      var opts = {};
      try { opts = JSON.parse(el.getAttribute('data-opts') || '{}'); } catch (e) { /* ignore */ }
      if (W[name]) W[name](el, lang, opts); else el.innerHTML = '<p class="mini">(widget "' + esc(name) + '")</p>';
    });
  }

  // wide tables scroll sideways instead of breaking the page on phones
  function wrapTables(root) {
    root.querySelectorAll('table').forEach(function (tb) {
      if (tb.parentNode.classList && tb.parentNode.classList.contains('tw')) return;
      var d = document.createElement('div'); d.className = 'tw';
      tb.parentNode.insertBefore(d, tb); d.appendChild(tb);
    });
  }

  /* ---------- sources page ---------- */
  function renderSources() {
    document.getElementById('main').innerHTML = '<div class="page"><h1>' + t('sources') + '</h1>' + L(C.about) + '</div>';
  }

  /* ---------- router ---------- */
  function route() {
    var h = location.hash || '#/';
    var m = h.match(/^#\/([^?#]*)/);
    return m ? m[1].replace(/\/$/, '') : '';
  }

  function render() {
    var r = route();
    document.documentElement.lang = lang;
    document.getElementById('brandText').textContent = t('siteTitle');
    document.getElementById('langBtn').textContent = t('langSwitch');
    document.getElementById('footer').innerHTML = t('footer') + ' <a href="#/kilder">' + t('footerLink') + '</a>.';
    document.title = t('siteTitle');

    var main = document.getElementById('main');
    if (r === '') { renderSidebar('__home'); renderHome(); }
    else if (r === 'kilder') { renderSidebar('__kilder'); renderSources(); }
    else if (r.indexOf('trin/') === 0 && levelById(r.slice(5))) {
      var lv = levelById(r.slice(5)); setCurrentLevel(lv.id); gradeFilter = 0;
      renderSidebar('__level'); renderLevel(lv); document.title = L(lv.title) + ' – ' + t('siteTitle');
    }
    else if (C.topics[r] && levelOf(r)) {
      setCurrentLevel(levelOf(r).id);
      renderSidebar(r); renderTopic(r); document.title = L(C.topics[r].title) + ' – ' + t('siteTitle');
    }
    else { renderSidebar(''); main.innerHTML = '<div class="page"><h1>404</h1><p>' + t('notFound') + '</p><p><a href="#/">' + t('home') + '</a></p></div>'; }

    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('menuBtn').setAttribute('aria-expanded', 'false');
    window.scrollTo(0, 0);
  }

  /* ---------- events ---------- */
  window.addEventListener('hashchange', render);
  document.getElementById('langBtn').addEventListener('click', function () {
    lang = lang === 'da' ? 'en' : 'da';
    try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
    render();
  });
  document.getElementById('menuBtn').addEventListener('click', function () {
    var sb = document.getElementById('sidebar');
    var open = sb.classList.toggle('open');
    this.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.getElementById('sidebar').addEventListener('click', function (e) {
    if (e.target.closest('a')) this.classList.remove('open');
  });
  document.getElementById('main').addEventListener('click', function () {
    var sb = document.getElementById('sidebar');
    if (sb.classList.contains('open')) { sb.classList.remove('open'); document.getElementById('menuBtn').setAttribute('aria-expanded', 'false'); }
  });

  render();
})();
