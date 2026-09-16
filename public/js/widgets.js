/* ------------------------------------------------------------------
   Interactive widgets. Each is a function (el, lang, opts) that renders
   into `el`. All state is local; nothing is stored or sent anywhere.
   ------------------------------------------------------------------ */
(function () {
  'use strict';
  var W = window.WIDGETS = {};

  function S(lang, da, en) { return lang === 'da' ? da : en; }
  function num(lang, x, dec) { // format per language: da → 1.234,5  en → 1,234.5
    var s = (dec != null ? Number(x).toFixed(dec) : String(x));
    var parts = s.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'da' ? '.' : ',');
    return parts.length > 1 ? parts.join(lang === 'da' ? ',' : '.') : parts[0];
  }
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function h(el, html) { el.innerHTML = html; return el; }
  function q(el, sel) { return el.querySelector(sel); }
  function parseNum(v) { return parseFloat(String(v).replace(',', '.')); }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }

  /* ---------------- Arithmetic trainer ---------------- */
  W.arith = function (el, lang, opts) {
    opts = opts || {};
    var small = !!opts.small; // grades 1–3: numbers up to 100, plus/minus only
    var mul = S(lang, '·', '×'), div = S(lang, ':', '÷');
    var cur = null, score = 0, tries = 0;
    function make(kind) {
      var a, b, ans, txt;
      if (small && kind === 'plus') { a = rnd(2, 60); b = rnd(2, 40); ans = a + b; txt = a + ' + ' + b; }
      else if (small && kind === 'minus') { a = rnd(10, 100); b = rnd(1, a - 1); ans = a - b; txt = a + ' − ' + b; }
      else if (kind === 'plus') { a = rnd(12, 480); b = rnd(12, 480); ans = a + b; txt = a + ' + ' + b; }
      else if (kind === 'minus') { a = rnd(50, 600); b = rnd(12, a - 1); ans = a - b; txt = a + ' − ' + b; }
      else if (kind === 'gange') { a = rnd(3, 12); b = rnd(4, 30); ans = a * b; txt = b + ' ' + mul + ' ' + a; }
      else if (kind === 'div') { b = rnd(3, 12); ans = rnd(4, 25); a = b * ans; txt = a + ' ' + div + ' ' + b; }
      else { // hierarki
        a = rnd(2, 9); b = rnd(2, 9); var c = rnd(2, 12);
        if (Math.random() < 0.5) { ans = c + a * b; txt = c + ' + ' + a + ' ' + mul + ' ' + b; }
        else { ans = (c + a) * b; txt = '(' + c + ' + ' + a + ') ' + mul + ' ' + b; }
      }
      return { txt: txt, ans: ans };
    }
    function render() {
      h(el, '<div class="row"><label>' + S(lang, 'Type:', 'Type:') + ' <select id="kind">'
        + '<option value="plus">' + S(lang, 'Plus', 'Add') + '</option><option value="minus">' + S(lang, 'Minus', 'Subtract') + '</option>'
        + (small ? '' : '<option value="gange">' + S(lang, 'Gange', 'Multiply') + '</option><option value="div">' + S(lang, 'Division', 'Divide') + '</option>'
        + '<option value="hier">' + S(lang, 'Regnehierarki', 'Order of operations') + '</option>') + '<option value="mix">' + S(lang, 'Blandet', 'Mixed') + '</option></select></label>'
        + '<button class="btn" id="new">' + S(lang, 'Ny opgave', 'New problem') + '</button></div>'
        + '<div class="row"><span class="big" id="prob" style="font-family:var(--mono)"></span>'
        + '<input type="text" id="ans" inputmode="numeric" placeholder="?" style="width:110px"> <button class="btn" id="chk">' + S(lang, 'Tjek', 'Check') + '</button></div>'
        + '<div class="out"><span class="msg" id="msg" hidden></span></div>'
        + '<p class="mini" id="score"></p>'
        + '<p class="mini">' + S(lang, 'Tip: lav et overslag i hovedet, før du svarer.', 'Tip: estimate in your head before you answer.') + '</p>');
      q(el, '#new').addEventListener('click', next);
      q(el, '#kind').addEventListener('change', next);
      q(el, '#chk').addEventListener('click', check);
      q(el, '#ans').addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
      next();
    }
    function next() {
      var k = q(el, '#kind').value;
      if (k === 'mix') k = small ? ['plus', 'minus'][rnd(0, 1)] : ['plus', 'minus', 'gange', 'div', 'hier'][rnd(0, 4)];
      cur = make(k);
      q(el, '#prob').textContent = cur.txt + ' = ';
      q(el, '#ans').value = ''; q(el, '#ans').focus();
      q(el, '#msg').setAttribute('hidden', '');
    }
    function check() {
      var v = parseNum(q(el, '#ans').value);
      var msg = q(el, '#msg'); msg.removeAttribute('hidden');
      tries++;
      if (v === cur.ans) { score++; msg.className = 'msg ok'; msg.textContent = S(lang, 'Rigtigt! ✓', 'Correct! ✓'); }
      else { msg.className = 'msg no'; msg.textContent = S(lang, 'Ikke helt. Prøv igen – eller tryk „Ny opgave“. (Svar: ' + cur.ans + ')', 'Not quite. Try again – or press "New problem". (Answer: ' + cur.ans + ')'); }
      q(el, '#score').textContent = S(lang, 'Rigtige: ', 'Correct: ') + score + ' / ' + tries;
    }
    render();
  };

  /* ---------------- Fraction explorer ---------------- */
  W.fraction = function (el, lang) {
    h(el, '<div class="row"><label>' + S(lang, 'Tæller', 'Numerator') + ' <input type="range" id="n" min="0" max="12" value="3"> <b id="nv">3</b></label>'
      + '<label>' + S(lang, 'Nævner', 'Denominator') + ' <input type="range" id="d" min="1" max="12" value="4"> <b id="dv">4</b></label></div>'
      + '<div class="grid2"><div id="pic"></div><div id="info"></div></div>');
    function draw() {
      var n = +q(el, '#n').value, d = +q(el, '#d').value;
      q(el, '#nv').textContent = n; q(el, '#dv').textContent = d;
      // bar
      var w = 300, hgt = 44, s = '<svg viewBox="0 0 ' + w + ' 130" width="' + w + '" height="130" font-family="sans-serif" font-size="13">';
      var whole = Math.floor(n / d), rem = n % d;
      for (var i = 0; i < d; i++) {
        var x = i * (w / d);
        var shaded = n >= d ? true : i < n; // one whole bar shown; extra wholes are described in text
        s += '<rect x="' + x + '" y="10" width="' + (w / d) + '" height="' + hgt + '" fill="' + (shaded ? 'var(--c, #2f6fed)' : 'transparent') + '" stroke="currentColor" stroke-width="1.5"/>';
      }
      s += '<text x="0" y="75" fill="currentColor">' + (n >= d ? S(lang, 'Mere end én hel: ', 'More than one whole: ') + whole + S(lang, ' hele og ', ' whole and ') + rem + '/' + d : S(lang, 'Farvet: ', 'Shaded: ') + n + S(lang, ' af ', ' of ') + d + S(lang, ' dele', ' parts')) + '</text>';
      // pie
      var cx = 60, cy = 105, r = 22;
      if (n <= d) {
        s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="transparent" stroke="currentColor" stroke-width="1.5"/>';
        if (n === d) s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="var(--c, #2f6fed)"/>';
        else if (n > 0) { var a = 2 * Math.PI * n / d; var x2 = cx + r * Math.sin(a), y2 = cy - r * Math.cos(a); s += '<path d="M' + cx + ',' + cy + ' L' + cx + ',' + (cy - r) + ' A' + r + ',' + r + ' 0 ' + (n / d > 0.5 ? 1 : 0) + ',1 ' + x2 + ',' + y2 + ' Z" fill="var(--c, #2f6fed)"/>'; }
        for (var k = 0; k < d; k++) { var ang = 2 * Math.PI * k / d; s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + r * Math.sin(ang)) + '" y2="' + (cy - r * Math.cos(ang)) + '" stroke="currentColor" stroke-width="1"/>'; }
      }
      s += '</svg>';
      q(el, '#pic').innerHTML = s;
      var g = gcd(n, d), dec = n / d, pct = dec * 100;
      var info = '<p class="big"><span class="frac"><span>' + n + '</span><span>' + d + '</span></span> = ' + num(lang, dec, 3).replace(/[,.]?0+$/, '') + ' = ' + num(lang, pct, 1).replace(/[,.]0$/, '') + S(lang, ' %', '%') + '</p>';
      if (g > 1) info += '<p>' + S(lang, 'Forkortet: ', 'Simplified: ') + '<span class="frac"><span>' + (n / g) + '</span><span>' + (d / g) + '</span></span> (' + S(lang, 'divider med', 'divide by') + ' ' + g + ')</p>';
      else if (n > 0) info += '<p>' + S(lang, 'Kan ikke forkortes.', 'Cannot be simplified.') + '</p>';
      if (n > d) info += '<p>' + S(lang, 'Uægte brøk. Som blandet tal: ', 'Improper fraction. As a mixed number: ') + whole + (rem ? ' <span class="frac"><span>' + rem + '</span><span>' + d + '</span></span>' : '') + '</p>';
      info += '<p class="mini">' + S(lang, 'Prøv: sæt tæller 1, nævner 2 – og så tæller 2, nævner 4. Samme farvede areal!', 'Try: numerator 1, denominator 2 – then numerator 2, denominator 4. Same shaded area!') + '</p>';
      q(el, '#info').innerHTML = info;
    }
    q(el, '#n').addEventListener('input', draw); q(el, '#d').addEventListener('input', draw);
    draw();
  };

  /* ---------------- Guess-and-check equations ---------------- */
  W.guess = function (el, lang) {
    var mul = S(lang, '·', '×');
    var eq, attempts;
    function make() {
      var x = rnd(2, 15), a = rnd(2, 9), b = rnd(1, 20), t = rnd(0, 2);
      if (t === 0) eq = { txt: 'x + ' + b + ' = ' + (x + b), x: x };
      else if (t === 1) eq = { txt: a + ' ' + mul + ' x = ' + (a * x), x: x };
      else eq = { txt: a + ' ' + mul + ' x + ' + b + ' = ' + (a * x + b), x: x };
      attempts = 0;
    }
    function render() {
      h(el, '<p>' + S(lang, 'Find x. Skriv et gæt – jeg fortæller, om det er for stort eller for lille.', 'Find x. Type a guess – I will tell you if it is too big or too small.') + '</p>'
        + '<div class="row"><span class="big" id="eq" style="font-family:var(--mono)"></span>'
        + '<label>x = <input type="text" id="g" inputmode="numeric" style="width:80px"></label>'
        + '<button class="btn" id="try">' + S(lang, 'Prøv', 'Try') + '</button><button class="btn secondary" id="new">' + S(lang, 'Ny ligning', 'New equation') + '</button></div>'
        + '<div class="out"><span class="msg" id="msg" hidden></span></div><p class="mini" id="log"></p>');
      q(el, '#try').addEventListener('click', tryIt);
      q(el, '#g').addEventListener('keydown', function (e) { if (e.key === 'Enter') tryIt(); });
      q(el, '#new').addEventListener('click', function () { make(); show(); });
      make(); show();
    }
    function show() { q(el, '#eq').textContent = eq.txt; q(el, '#g').value = ''; q(el, '#msg').setAttribute('hidden', ''); q(el, '#log').textContent = ''; q(el, '#g').focus(); }
    function tryIt() {
      var v = parseNum(q(el, '#g').value); if (isNaN(v)) return;
      attempts++;
      var msg = q(el, '#msg'); msg.removeAttribute('hidden');
      if (v === eq.x) { msg.className = 'msg ok'; msg.textContent = S(lang, 'Rigtigt! x = ' + v + ' – fundet på ' + attempts + ' forsøg. Tjek ved at sætte det ind i ligningen.', 'Correct! x = ' + v + ' – found in ' + attempts + ' tries. Check by putting it back into the equation.'); }
      else if (v < eq.x) { msg.className = 'msg no'; msg.textContent = S(lang, v + ' er for lille – prøv et større tal.', v + ' is too small – try a bigger number.'); }
      else { msg.className = 'msg no'; msg.textContent = S(lang, v + ' er for stort – prøv et mindre tal.', v + ' is too big – try a smaller number.'); }
      q(el, '#log').textContent = S(lang, 'Forsøg: ', 'Tries: ') + attempts;
    }
    render();
  };

  /* ---------------- Coordinate quiz ---------------- */
  W.coord = function (el, lang) {
    var size = 320, u = 32, half = 5, target, mode = 'find';
    function fmt(x) { return x < 0 ? '−' + (-x) : String(x); }
    function render() {
      h(el, '<div class="row"><label><input type="radio" name="cm" value="find" checked> ' + S(lang, 'Klik på det punkt, jeg beder om', 'Click the point I ask for') + '</label>'
        + '<label><input type="radio" name="cm" value="read"> ' + S(lang, 'Aflæs koordinaterne', 'Read the coordinates') + '</label>'
        + '<label><input type="checkbox" id="neg"> ' + S(lang, 'Med negative tal', 'With negative numbers') + '</label></div>'
        + '<p id="task" style="font-weight:600"></p>'
        + '<div id="svgwrap"></div>'
        + '<div class="row" id="readrow" hidden>( <input type="text" id="rx" style="width:60px" inputmode="numeric"> , <input type="text" id="ry" style="width:60px" inputmode="numeric"> ) <button class="btn" id="rchk">' + S(lang, 'Tjek', 'Check') + '</button></div>'
        + '<div class="out"><span class="msg" id="msg" hidden></span></div>'
        + '<div class="row"><button class="btn secondary" id="new">' + S(lang, 'Nyt punkt', 'New point') + '</button></div>');
      el.querySelectorAll('input[name=cm]').forEach(function (r) { r.addEventListener('change', function () { mode = this.value; next(); }); });
      q(el, '#neg').addEventListener('change', next);
      q(el, '#new').addEventListener('click', next);
      q(el, '#rchk').addEventListener('click', checkRead);
      next();
    }
    function grid(showTarget) {
      var neg = q(el, '#neg').checked;
      var ox = neg ? size / 2 : 30, oy = neg ? size / 2 : size - 30;
      var lo = neg ? -half : 0, hi = neg ? half : 8;
      var s = '<svg viewBox="0 0 ' + size + ' ' + size + '" width="' + size + '" height="' + size + '" style="cursor:crosshair;max-width:100%" id="cs" font-family="sans-serif" font-size="11">';
      for (var i = lo; i <= hi; i++) {
        s += '<line x1="' + (ox + i * u) + '" y1="' + (oy - hi * u) + '" x2="' + (ox + i * u) + '" y2="' + (oy - lo * u) + '" stroke="#dfe4ec"/>';
        s += '<line x1="' + (ox + lo * u) + '" y1="' + (oy - i * u) + '" x2="' + (ox + hi * u) + '" y2="' + (oy - i * u) + '" stroke="#dfe4ec"/>';
        if (i !== 0) { s += '<text x="' + (ox + i * u) + '" y="' + (oy + 13) + '" text-anchor="middle" fill="currentColor">' + fmt(i) + '</text><text x="' + (ox - 5) + '" y="' + (oy - i * u + 4) + '" text-anchor="end" fill="currentColor">' + fmt(i) + '</text>'; }
      }
      s += '<line x1="' + (ox + lo * u) + '" y1="' + oy + '" x2="' + (ox + hi * u + 6) + '" y2="' + oy + '" stroke="currentColor" stroke-width="2"/><line x1="' + ox + '" y1="' + (oy - lo * u) + '" x2="' + ox + '" y2="' + (oy - hi * u - 6) + '" stroke="currentColor" stroke-width="2"/>';
      s += '<text x="' + (ox + hi * u + 8) + '" y="' + (oy + 4) + '" fill="currentColor">x</text><text x="' + (ox + 6) + '" y="' + (oy - hi * u - 6) + '" fill="currentColor">y</text>';
      if (showTarget) s += '<circle cx="' + (ox + target.x * u) + '" cy="' + (oy - target.y * u) + '" r="6" fill="var(--c, #1d9a6c)"/>';
      s += '</svg>';
      var wrap = q(el, '#svgwrap'); wrap.innerHTML = s;
      var svg = q(el, '#cs');
      svg.addEventListener('click', function (e) {
        if (mode !== 'find') return;
        var pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
        var p = pt.matrixTransform(svg.getScreenCTM().inverse());
        var gx = Math.round((p.x - ox) / u), gy = Math.round((oy - p.y) / u);
        var msg = q(el, '#msg'); msg.removeAttribute('hidden');
        if (gx === target.x && gy === target.y) { msg.className = 'msg ok'; msg.textContent = S(lang, 'Rigtigt! (' + fmt(gx) + ', ' + fmt(gy) + ') ✓', 'Correct! (' + fmt(gx) + ', ' + fmt(gy) + ') ✓'); grid(true); }
        else { msg.className = 'msg no'; msg.textContent = S(lang, 'Du klikkede på (' + fmt(gx) + ', ' + fmt(gy) + '). Husk: først hen ad x, så op ad y.', 'You clicked (' + fmt(gx) + ', ' + fmt(gy) + '). Remember: first along x, then up y.'); }
      });
    }
    function next() {
      var neg = q(el, '#neg').checked;
      target = neg ? { x: rnd(-half, half), y: rnd(-half, half) } : { x: rnd(0, 8), y: rnd(0, 8) };
      q(el, '#msg').setAttribute('hidden', '');
      if (mode === 'find') {
        q(el, '#task').textContent = S(lang, 'Klik på punktet (' + fmt(target.x) + ', ' + fmt(target.y) + ')', 'Click the point (' + fmt(target.x) + ', ' + fmt(target.y) + ')');
        q(el, '#readrow').setAttribute('hidden', ''); grid(false);
      } else {
        q(el, '#task').textContent = S(lang, 'Hvilke koordinater har det grønne punkt?', 'What are the coordinates of the green point?');
        q(el, '#readrow').removeAttribute('hidden'); q(el, '#rx').value = ''; q(el, '#ry').value = ''; grid(true);
      }
    }
    function checkRead() {
      var x = parseNum(q(el, '#rx').value.replace('−', '-')), y = parseNum(q(el, '#ry').value.replace('−', '-'));
      var msg = q(el, '#msg'); msg.removeAttribute('hidden');
      if (x === target.x && y === target.y) { msg.className = 'msg ok'; msg.textContent = S(lang, 'Rigtigt! ✓', 'Correct! ✓'); }
      else { msg.className = 'msg no'; msg.textContent = S(lang, 'Ikke helt. Tæl hen ad x-aksen først, så op (eller ned) ad y-aksen.', 'Not quite. Count along the x-axis first, then up (or down) the y-axis.'); }
    }
    render();
  };

  /* ---------------- Statistics calculator ---------------- */
  W.stats = function (el, lang) {
    h(el, '<p>' + S(lang, 'Skriv tal adskilt med mellemrum eller komma, fx skostørrelser eller point:', 'Type numbers separated by spaces or commas, e.g. shoe sizes or points:') + '</p>'
      + '<div class="row"><input type="text" id="data" style="width:100%;max-width:420px" value="36 37 37 38 38 38 39 40"> <button class="btn" id="go">' + S(lang, 'Beregn', 'Calculate') + '</button></div>'
      + '<div class="out" id="out"></div>');
    function go() {
      var raw = q(el, '#data').value.split(/[\s;]+/).filter(Boolean);
      // In Danish, "3,5" is a decimal; but "3, 5" is a list. Treat comma-with-space as separator, comma-without-space as decimal.
      var vals = [];
      raw.forEach(function (tok) { tok.split(/,(?=\s)|,$/).forEach(function (t) { t = t.replace(/,$/, ''); if (!t) return; var v = parseFloat(t.replace(',', '.')); if (!isNaN(v)) vals.push(v); }); });
      if (!vals.length) { q(el, '#out').innerHTML = '<p class="mini">' + S(lang, 'Skriv nogle tal først.', 'Type some numbers first.') + '</p>'; return; }
      var n = vals.length, sum = vals.reduce(function (a, b) { return a + b; }, 0), mean = sum / n;
      var mn = Math.min.apply(null, vals), mx = Math.max.apply(null, vals);
      var freq = {}; vals.forEach(function (v) { freq[v] = (freq[v] || 0) + 1; });
      var keys = Object.keys(freq).map(Number).sort(function (a, b) { return a - b; });
      var maxF = Math.max.apply(null, keys.map(function (k) { return freq[k]; }));
      var modes = keys.filter(function (k) { return freq[k] === maxF; });
      var t = '<table><tr><th>' + S(lang, 'Værdi', 'Value') + '</th><th>' + S(lang, 'Hyppighed', 'Count') + '</th><th>' + S(lang, 'Frekvens', 'Frequency') + '</th></tr>';
      keys.forEach(function (k) { t += '<tr><td>' + num(lang, k) + '</td><td>' + freq[k] + '</td><td>' + num(lang, 100 * freq[k] / n, 1) + ' %</td></tr>'; });
      t += '<tr><th>' + S(lang, 'I alt', 'Total') + '</th><th>' + n + '</th><th>100' + S(lang, ' %', '%') + '</th></tr></table>';
      t += '<ul><li><b>' + S(lang, 'Typetal', 'Mode') + ':</b> ' + modes.map(function (k) { return num(lang, k); }).join(S(lang, ' og ', ' and ')) + (maxF === 1 ? ' <span class="mini">(' + S(lang, 'alle værdier forekommer lige tit', 'all values occur equally often') + ')</span>' : '') + '</li>'
        + '<li><b>' + S(lang, 'Middeltal', 'Mean') + ':</b> ' + num(lang, sum) + ' : ' + n + ' = ' + num(lang, mean, 2).replace(/[,.]?0+$/, '') + '</li>'
        + '<li><b>' + S(lang, 'Variationsbredde', 'Range') + ':</b> ' + num(lang, mx) + ' − ' + num(lang, mn) + ' = ' + num(lang, mx - mn) + '</li></ul>';
      // bar chart of counts
      t += '<div class="bars">' + keys.map(function (k) { return '<div class="bar"><i style="height:' + (100 * freq[k] / maxF) + '%"></i><b>' + num(lang, k) + '</b><span>' + freq[k] + '</span></div>'; }).join('') + '</div>';
      q(el, '#out').innerHTML = t;
    }
    q(el, '#go').addEventListener('click', go);
    q(el, '#data').addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    go();
  };

  /* ---------------- Two-dice simulator ---------------- */
  W.dice = function (el, lang, opts) {
    opts = opts || {};
    var one = opts.dice === 1; // one die: outcomes 1..6, each 1/6
    var lo = one ? 1 : 2, hi = one ? 6 : 12, denom = one ? 6 : 36;
    var counts, total = 0;
    var expected = one ? [0, 1, 1, 1, 1, 1, 1] : [0, 0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]; // ways out of denom
    function reset() { counts = []; for (var i = 0; i <= 12; i++) counts[i] = 0; total = 0; }
    function roll(n) { for (var i = 0; i < n; i++) { counts[one ? rnd(1, 6) : rnd(1, 6) + rnd(1, 6)]++; } total += n; draw(); }
    function render() {
      h(el, '<p>' + (one ? S(lang, 'Gæt først: hvor mange 6’ere får du i 30 kast? Kast så 30 gange – og bagefter mange flere.', 'Guess first: how many 6s will you get in 30 rolls? Then roll 30 times – and afterwards many more.') : S(lang, 'Forudsig først: hvilken sum tror du kommer flest gange? Kast så – få gange, og derefter mange.', 'Predict first: which total do you think will come up most? Then roll – a few times, then many.')) + '</p>'
        + '<div class="row"><button class="btn" data-n="1">' + S(lang, 'Kast 1 gang', 'Roll once') + '</button><button class="btn" data-n="10">10</button>' + (one ? '<button class="btn" data-n="30">30</button>' : '') + '<button class="btn" data-n="100">100</button><button class="btn" data-n="1000">' + num(lang, 1000) + '</button><button class="btn" data-n="10000">' + num(lang, 10000) + '</button><button class="btn secondary" id="reset">' + S(lang, 'Nulstil', 'Reset') + '</button>'
        + '<label><input type="checkbox" id="showexp"> ' + S(lang, 'Vis forventet', 'Show expected') + '</label></div>'
        + '<div id="chart"></div><div id="table"></div>');
      el.querySelectorAll('button[data-n]').forEach(function (b) { b.addEventListener('click', function () { roll(+this.getAttribute('data-n')); }); });
      q(el, '#reset').addEventListener('click', function () { reset(); draw(); });
      q(el, '#showexp').addEventListener('change', draw);
      reset(); draw();
    }
    function draw() {
      var showExp = q(el, '#showexp').checked;
      var maxC = Math.max(1, Math.max.apply(null, counts));
      var bars = '<div class="bars">';
      for (var s = lo; s <= hi; s++) {
        var pct = total ? 100 * counts[s] / maxC : 0;
        var expPct = showExp && total ? 100 * (expected[s] / denom * total) / maxC : 0;
        bars += '<div class="bar" style="position:relative">'
          + (showExp && total ? '<i style="height:' + Math.min(100, expPct) + '%;background:transparent;border:2px dashed var(--muted);position:absolute;bottom:22px;left:0;right:0;border-bottom:0;border-radius:4px 4px 0 0"></i>' : '')
          + '<i style="height:' + pct + '%"></i><b>' + s + '</b></div>';
      }
      bars += '</div>';
      var t = '<p class="mini">' + S(lang, 'Antal kast: ', 'Number of rolls: ') + '<b>' + num(lang, total) + '</b>' + (showExp ? ' · ' + S(lang, 'stiplet = forventet (antal måder : ' + denom + ')', 'dashed = expected (ways ÷ ' + denom + ')') : '') + '</p>';
      if (total) {
        t += '<table><tr><th>' + (one ? S(lang, 'Øjne', 'Face') : S(lang, 'Sum', 'Total')) + '</th>';
        for (var i = lo; i <= hi; i++) t += '<td class="num">' + i + '</td>';
        t += '</tr><tr><th>' + S(lang, 'Hyppighed', 'Count') + '</th>';
        for (i = lo; i <= hi; i++) t += '<td class="num">' + counts[i] + '</td>';
        t += '</tr><tr><th>' + S(lang, 'Frekvens', 'Frequency') + '</th>';
        for (i = lo; i <= hi; i++) t += '<td class="num">' + num(lang, 100 * counts[i] / total, 1) + S(lang, ' %', '%') + '</td>';
        t += '</tr><tr><th>' + S(lang, 'Sandsynlighed', 'Probability') + '</th>';
        for (i = lo; i <= hi; i++) t += '<td class="num">' + num(lang, 100 * expected[i] / denom, 1) + S(lang, ' %', '%') + '</td>';
        t += '</tr></table>';
        if (one) {
          t += '<p>' + S(lang, 'Du har fået <b>' + counts[6] + '</b> seksere i ' + num(lang, total) + ' kast. Forventet cirka ' + num(lang, total / 6, 1) + ' (hvert sjette kast). ' + (total < 100 ? 'Kast flere gange – kommer du tættere på?' : 'Med mange kast bliver alle seks søjler næsten lige høje.'),
            'You have got <b>' + counts[6] + '</b> sixes in ' + num(lang, total) + ' rolls. Expected about ' + num(lang, total / 6, 1) + ' (every sixth roll). ' + (total < 100 ? 'Roll more – do you get closer?' : 'With many rolls all six bars become almost equally tall.')) + '</p>';
        } else {
          var best = 2; for (i = 3; i <= 12; i++) if (counts[i] > counts[best]) best = i;
          t += '<p>' + S(lang, 'Hyppigste sum indtil nu: <b>' + best + '</b>. Frekvensen for 7 er ' + num(lang, 100 * counts[7] / total, 1) + ' % – sandsynligheden er 6/36 ≈ 16,7 %. ' + (total < 100 ? 'Kast flere gange og se, om de nærmer sig hinanden.' : 'Jo flere kast, jo tættere ligger frekvens og sandsynlighed på hinanden.'),
            'Most common total so far: <b>' + best + '</b>. The frequency of 7 is ' + num(lang, 100 * counts[7] / total, 1) + '% – the probability is 6/36 ≈ 16.7%. ' + (total < 100 ? 'Roll more times and see if they get closer.' : 'The more rolls, the closer frequency and probability get.')) + '</p>';
        }
      }
      q(el, '#chart').innerHTML = bars; q(el, '#table').innerHTML = t;
    }
    render();
  };

  /* ---------------- Hundred square (1.–3. klasse) ---------------- */
  W.hundred = function (el, lang) {
    var step = 0, picked = null;
    h(el, '<p class="mini">' + S(lang, 'Klik på et tal. Vælg en tabel, og se mønstret.', 'Click a number. Choose a table and see the pattern.') + '</p>'
      + '<div class="row" id="steps">' + [2, 3, 5, 9, 10].map(function (k) { return '<button class="btn secondary" data-s="' + k + '">' + k + S(lang, '-tabellen', ' times') + '</button>'; }).join('') + '<button class="btn secondary" data-s="0">' + S(lang, 'Ryd', 'Clear') + '</button></div>'
      + '<div class="hsq" id="grid"></div><p id="info"></p>');
    function draw() {
      var g = '';
      for (var n = 1; n <= 100; n++) {
        var cls = 'c' + (step && n % step === 0 ? ' on' : '') + (picked === n ? ' pick' : '');
        g += '<button class="' + cls + '" data-n="' + n + '">' + n + '</button>';
      }
      q(el, '#grid').innerHTML = g;
      el.querySelectorAll('#grid button').forEach(function (b) { b.addEventListener('click', function () { picked = +this.getAttribute('data-n'); info(); draw(); }); });
    }
    function info() {
      var n = picked; if (!n) return;
      var tens = Math.floor(n / 10), ones = n % 10;
      var txt = n === 100 ? S(lang, '100 = 10 tiere = 1 hundred.', '100 = 10 tens = 1 hundred.')
        : S(lang, n + ' = ' + tens + ' tiere og ' + ones + ' enere (' + (tens * 10) + ' + ' + ones + '). ' + (n % 2 === 0 ? 'Lige tal.' : 'Ulige tal.') + ' 10 mere er ' + (n + 10) + ' – lige nedenunder!',
          n + ' = ' + tens + ' tens and ' + ones + ' ones (' + (tens * 10) + ' + ' + ones + '). ' + (n % 2 === 0 ? 'Even number.' : 'Odd number.') + ' 10 more is ' + (n + 10) + ' – right below!');
      q(el, '#info').innerHTML = txt;
    }
    el.querySelectorAll('#steps button').forEach(function (b) { b.addEventListener('click', function () { step = +this.getAttribute('data-s'); draw(); }); });
    draw();
  };

  /* ---------------- Bonds to 10 / 20 ---------------- */
  W.tenfriends = function (el, lang) {
    var target = 10, n, score = 0, tries = 0;
    h(el, '<div class="row"><label><input type="radio" name="tf" value="10" checked> ' + S(lang, 'Tiervenner (10)', 'Bonds to 10') + '</label><label><input type="radio" name="tf" value="20"> ' + S(lang, 'Tyvevenner (20)', 'Bonds to 20') + '</label></div>'
      + '<div class="row"><span class="big" id="q" style="font-family:var(--mono)"></span><input type="text" id="a" inputmode="numeric" style="width:70px"> <button class="btn" id="chk">' + S(lang, 'Tjek', 'Check') + '</button><button class="btn secondary" id="new">' + S(lang, 'Ny', 'New') + '</button></div>'
      + '<div id="dots" style="margin:8px 0"></div><div class="out"><span class="msg" id="msg" hidden></span></div><p class="mini" id="sc"></p>');
    function next() {
      n = rnd(0, target); q(el, '#q').textContent = n + ' + ? = ' + target; q(el, '#a').value = ''; q(el, '#msg').setAttribute('hidden', ''); q(el, '#a').focus();
      var d = '';
      for (var i = 0; i < target; i++) d += '<span style="display:inline-block;width:18px;height:18px;border-radius:50%;margin:2px;background:' + (i < n ? 'var(--c,#2f6fed)' : 'var(--surface-2)') + ';border:1.5px solid var(--line)' + (i === 9 && target === 20 ? ';margin-right:14px' : '') + '"></span>';
      q(el, '#dots').innerHTML = d;
    }
    function check() {
      var v = parseNum(q(el, '#a').value); if (isNaN(v)) return;
      tries++; var msg = q(el, '#msg'); msg.removeAttribute('hidden');
      if (v === target - n) { score++; msg.className = 'msg ok'; msg.textContent = S(lang, 'Rigtigt! ' + n + ' og ' + v + ' er venner – de giver ' + target + '.', 'Correct! ' + n + ' and ' + v + ' are bonds – they make ' + target + '.'); }
      else { msg.className = 'msg no'; msg.textContent = S(lang, 'Ikke helt. Tæl de tomme prikker.', 'Not quite. Count the empty dots.'); }
      q(el, '#sc').textContent = S(lang, 'Rigtige: ', 'Correct: ') + score + ' / ' + tries;
    }
    el.querySelectorAll('input[name=tf]').forEach(function (r) { r.addEventListener('change', function () { target = +this.value; next(); }); });
    q(el, '#chk').addEventListener('click', check); q(el, '#new').addEventListener('click', next);
    q(el, '#a').addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
    next();
  };

  /* ---------------- Times table trainer ---------------- */
  W.tables = function (el, lang) {
    var mul = S(lang, '·', '×'), table = 2, a, b, score = 0, tries = 0;
    var opts = [2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (k) { return '<option value="' + k + '">' + k + S(lang, '-tabellen', ' times table') + '</option>'; }).join('') + '<option value="0">' + S(lang, 'Blandet', 'Mixed') + '</option>';
    h(el, '<div class="row"><label>' + S(lang, 'Tabel:', 'Table:') + ' <select id="tb">' + opts + '</select></label><label><input type="checkbox" id="div"> ' + S(lang, 'Også division', 'Also division') + '</label></div>'
      + '<div class="row"><span class="big" id="q" style="font-family:var(--mono)"></span><input type="text" id="a" inputmode="numeric" style="width:80px"> <button class="btn" id="chk">' + S(lang, 'Tjek', 'Check') + '</button><button class="btn secondary" id="new">' + S(lang, 'Ny', 'New') + '</button></div>'
      + '<div class="out"><span class="msg" id="msg" hidden></span></div><p class="mini" id="sc"></p>');
    var cur;
    function next() {
      var t = +q(el, '#tb').value; a = t || rnd(2, 10); b = rnd(1, 10);
      if (q(el, '#div').checked && Math.random() < 0.5) cur = { txt: (a * b) + ' ' + S(lang, ':', '÷') + ' ' + a + ' = ', ans: b };
      else cur = { txt: b + ' ' + mul + ' ' + a + ' = ', ans: a * b };
      q(el, '#q').textContent = cur.txt; q(el, '#a').value = ''; q(el, '#msg').setAttribute('hidden', ''); q(el, '#a').focus();
    }
    function check() {
      var v = parseNum(q(el, '#a').value); if (isNaN(v)) return;
      tries++; var msg = q(el, '#msg'); msg.removeAttribute('hidden');
      if (v === cur.ans) { score++; msg.className = 'msg ok'; msg.textContent = S(lang, 'Rigtigt! ✓', 'Correct! ✓'); }
      else { msg.className = 'msg no'; msg.textContent = S(lang, 'Ikke helt – tæl i ' + a + '-spring: ' + [1, 2, 3, 4, 5].map(function (k) { return a * k; }).join(', ') + ' … (Svar: ' + cur.ans + ')', 'Not quite – count in ' + a + 's: ' + [1, 2, 3, 4, 5].map(function (k) { return a * k; }).join(', ') + ' … (Answer: ' + cur.ans + ')'); }
      q(el, '#sc').textContent = S(lang, 'Rigtige: ', 'Correct: ') + score + ' / ' + tries;
    }
    q(el, '#tb').addEventListener('change', next); q(el, '#div').addEventListener('change', next);
    q(el, '#chk').addEventListener('click', check); q(el, '#new').addEventListener('click', next);
    q(el, '#a').addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
    next();
  };

  /* ---------------- Clock (read the analogue clock) ---------------- */
  W.clock = function (el, lang) {
    var level = 'half', hh, mm, score = 0, tries = 0;
    function danish(hr, min) { // Danish way of saying the time
      var nxt = hr % 12 + 1, cur = hr % 12 === 0 ? 12 : hr % 12;
      if (min === 0) return 'klokken ' + cur;
      if (min === 15) return 'kvart over ' + cur;
      if (min === 30) return 'halv ' + nxt;
      if (min === 45) return 'kvart i ' + nxt;
      if (min < 30) return min + ' minutter over ' + cur;
      return (60 - min) + ' minutter i ' + nxt;
    }
    function english(hr, min) {
      var nxt = hr % 12 + 1, cur = hr % 12 === 0 ? 12 : hr % 12;
      if (min === 0) return cur + " o'clock";
      if (min === 15) return 'quarter past ' + cur;
      if (min === 30) return 'half past ' + cur;
      if (min === 45) return 'quarter to ' + nxt;
      if (min < 30) return min + ' past ' + cur;
      return (60 - min) + ' to ' + nxt;
    }
    function digital(hr, min) { return hr + ':' + (min < 10 ? '0' : '') + min; }
    function face(hr, min) {
      var cx = 100, cy = 100, r = 90, s = '<svg viewBox="0 0 200 200" width="200" height="200" font-family="sans-serif" font-size="14">';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="var(--surface)" stroke="currentColor" stroke-width="3"/>';
      for (var i = 0; i < 60; i++) { var a = i * Math.PI / 30, big = i % 5 === 0; s += '<line x1="' + (cx + (r - (big ? 10 : 5)) * Math.sin(a)) + '" y1="' + (cy - (r - (big ? 10 : 5)) * Math.cos(a)) + '" x2="' + (cx + (r - 2) * Math.sin(a)) + '" y2="' + (cy - (r - 2) * Math.cos(a)) + '" stroke="currentColor" stroke-width="' + (big ? 2 : 1) + '"/>'; }
      for (var k = 1; k <= 12; k++) { var ak = k * Math.PI / 6; s += '<text x="' + (cx + (r - 24) * Math.sin(ak)) + '" y="' + (cy - (r - 24) * Math.cos(ak) + 5) + '" text-anchor="middle" font-weight="bold" fill="currentColor">' + k + '</text>'; }
      var ah = ((hr % 12) + min / 60) * Math.PI / 6, am = min * Math.PI / 30;
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + 45 * Math.sin(ah)) + '" y2="' + (cy - 45 * Math.cos(ah)) + '" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>';
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + 68 * Math.sin(am)) + '" y2="' + (cy - 68 * Math.cos(am)) + '" stroke="var(--c,#1d9a6c)" stroke-width="4" stroke-linecap="round"/>';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="5" fill="currentColor"/></svg>';
      return s;
    }
    function pick() {
      hh = rnd(1, 12);
      mm = level === 'hour' ? 0 : level === 'half' ? [0, 30][rnd(0, 1)] : level === 'quarter' ? [0, 15, 30, 45][rnd(0, 3)] : rnd(0, 11) * 5;
    }
    function options() {
      var set = {}; set[digital(hh, mm)] = 1; var arr = [digital(hh, mm)];
      var guard = 0;
      while (arr.length < 4 && guard++ < 50) {
        var h2 = rnd(1, 12), m2 = level === 'hour' ? 0 : level === 'half' ? [0, 30][rnd(0, 1)] : level === 'quarter' ? [0, 15, 30, 45][rnd(0, 3)] : rnd(0, 11) * 5;
        if (Math.random() < 0.5) { h2 = hh; if (m2 === mm) m2 = (m2 + 30) % 60; } else { m2 = mm; if (h2 === hh) h2 = h2 % 12 + 1; }
        var d = digital(h2, m2); if (!set[d]) { set[d] = 1; arr.push(d); }
      }
      return arr.sort(function () { return Math.random() - 0.5; });
    }
    function render() {
      h(el, '<div class="row"><label>' + S(lang, 'Sværhed:', 'Level:') + ' <select id="lv"><option value="hour">' + S(lang, 'Hele timer', 'Whole hours') + '</option><option value="half" selected>' + S(lang, 'Hele og halve', 'Hours and halves') + '</option><option value="quarter">' + S(lang, 'Kvarter', 'Quarters') + '</option><option value="five">' + S(lang, '5 minutter', '5 minutes') + '</option></select></label></div>'
        + '<div class="grid2"><div id="face"></div><div><p><b>' + S(lang, 'Hvad er klokken?', 'What time is it?') + '</b></p><div id="opts" class="row"></div><div class="out"><span class="msg" id="msg" hidden></span></div><p class="mini" id="sc"></p><button class="btn secondary" id="new">' + S(lang, 'Nyt ur', 'New clock') + '</button></div></div>');
      q(el, '#lv').addEventListener('change', function () { level = this.value; next(); });
      q(el, '#new').addEventListener('click', next);
      next();
    }
    function next() {
      pick(); q(el, '#face').innerHTML = face(hh, mm); q(el, '#msg').setAttribute('hidden', '');
      q(el, '#opts').innerHTML = options().map(function (o) { return '<button class="btn secondary" data-o="' + o + '">' + o + '</button>'; }).join('');
      el.querySelectorAll('#opts button').forEach(function (b) { b.addEventListener('click', function () { answer(this.getAttribute('data-o')); }); });
    }
    function answer(o) {
      tries++; var msg = q(el, '#msg'); msg.removeAttribute('hidden');
      var say = S(lang, danish(hh, mm), english(hh, mm));
      if (o === digital(hh, mm)) { score++; msg.className = 'msg ok'; msg.textContent = S(lang, 'Rigtigt! Klokken er ' + o + ' – „' + say + '“.', 'Correct! It is ' + o + ' – "' + say + '".'); }
      else { msg.className = 'msg no'; msg.textContent = S(lang, 'Ikke helt. Den korte viser = timer, den lange = minutter. Klokken er ' + digital(hh, mm) + ' – „' + say + '“.', 'Not quite. Short hand = hours, long hand = minutes. It is ' + digital(hh, mm) + ' – "' + say + '".'); }
      q(el, '#sc').textContent = S(lang, 'Rigtige: ', 'Correct: ') + score + ' / ' + tries;
    }
    render();
  };
})();
