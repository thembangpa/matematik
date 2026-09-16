/* ------------------------------------------------------------------
   Statistik og sandsynlighed — 4 topics.
   "goals" quote the færdigheds- og vidensmål (efter 6. klassetrin) from
   Fælles Mål – Matematik; explanations follow Læseplan §5.2 (4.–6. kl.)
   and the dice example ("dyreløb") from the Undervisningsvejledning.
   Data sets used in examples are illustrative.
   ------------------------------------------------------------------ */
(function () {
  var T = window.CONTENT.topics;
  function fr(n, d) { return '<span class="frac"><span>' + n + '</span><span>' + d + '</span></span>'; }
  function m(s) { return '<span class="math">' + s + '</span>'; }
  var O = '#e8842b', OS = '#f8d7b8';

  /* ================================================================
     17. Tabeller og diagrammer
     ================================================================ */
  T['diagrammer'] = {
    title: { da: 'Tabeller og diagrammer', en: 'Tables and charts' },
    phase: [1],
    summary: {
      da: 'Søjlediagram, kurvediagram og cirkeldiagram: hvornår bruger man hvilket, og hvordan aflæser man dem rigtigt?',
      en: 'Bar chart, line graph and pie chart: when to use which, and how to read them correctly.'
    },
    goals: {
      da: [
        'Eleven kan anvende og tolke grafiske fremstillinger af data.',
        'Eleven har viden om grafisk fremstilling af data.',
        'Eleven kan uddrage relevante oplysninger i enkle matematikholdige tekster. (opmærksomhedspunkt)'
      ],
      en: [
        'The pupil can use and interpret graphical representations of data.',
        'The pupil has knowledge of graphical representation of data.',
        'The pupil can extract relevant information from simple texts containing mathematics. (attention point)'
      ]
    },
    terms: [
      { da: 'data', en: 'data', def: { da: 'Oplysninger, man har samlet – fx svar eller målinger', en: 'Information that has been collected – e.g. answers or measurements' } },
      { da: 'tabel', en: 'table', def: { da: 'Data ordnet i rækker og kolonner', en: 'Data arranged in rows and columns' } },
      { da: 'søjlediagram', en: 'bar chart', def: { da: 'Søjler, hvis højde viser antallet', en: 'Bars whose height shows the amount' } },
      { da: 'kurvediagram', en: 'line graph', def: { da: 'Punkter forbundet med linjer – viser udvikling over tid', en: 'Points joined by lines – shows change over time' } },
      { da: 'cirkeldiagram', en: 'pie chart', def: { da: 'En cirkel delt i „lagkagestykker“ – viser dele af en helhed', en: 'A circle cut into "slices" – shows parts of a whole' } },
      { da: 'akse', en: 'axis', def: { da: 'Linjerne med tal eller navne langs kanten af et diagram', en: 'The lines with numbers or names along the edge of a chart' } },
      { da: 'aflæse', en: 'read off', def: { da: 'Finde et tal i et diagram', en: 'Find a number from a chart' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Tre slags diagrammer – og hvornår man bruger dem', en: 'Three kinds of chart – and when to use them' },
        body: {
          da: '<table><tr><th>Diagram</th><th>Bruges til</th><th>Eksempel</th></tr>'
            + '<tr><td><b>Søjlediagram</b> (eller pindediagram)</td><td>at sammenligne antal i forskellige grupper</td><td>Hvor mange har hund, kat, fisk?</td></tr>'
            + '<tr><td><b>Kurvediagram</b></td><td>at vise, hvordan noget ændrer sig over tid</td><td>Temperaturen hen over dagen</td></tr>'
            + '<tr><td><b>Cirkeldiagram</b></td><td>at vise, hvor stor en del af helheden hver gruppe er</td><td>Hvordan klassens tid fordeles på fag</td></tr></table>'
            + '<p><b>Tjekliste, når du aflæser et diagram:</b></p>'
            + '<ol><li>Hvad er <b>overskriften</b> – hvad handler det om?</li><li>Hvad står der på <b>akserne</b>? Hvilken <b>enhed</b> (antal, kr., °C, %)?</li><li>Hvor meget er ét trin på aksen? (1? 10? 100?)</li><li>Start aksen ved 0?</li></ol>',
          en: '<table><tr><th>Chart</th><th>Used for</th><th>Example</th></tr>'
            + '<tr><td><b>Bar chart</b></td><td>comparing amounts in different groups</td><td>How many have a dog, cat, fish?</td></tr>'
            + '<tr><td><b>Line graph</b></td><td>showing how something changes over time</td><td>Temperature through the day</td></tr>'
            + '<tr><td><b>Pie chart</b></td><td>showing how big a part of the whole each group is</td><td>How the class\'s time is split between subjects</td></tr></table>'
            + '<p><b>Checklist when reading a chart:</b></p>'
            + '<ol><li>What is the <b>title</b> – what is it about?</li><li>What is on the <b>axes</b>? What <b>unit</b> (number, kr., °C, %)?</li><li>How much is one step on the axis? (1? 10? 100?)</li><li>Does the axis start at 0?</li></ol>'
        }
      },
      {
        type: 'fig',
        svg: (function () {
          var data = [['Hund', 8], ['Kat', 6], ['Fisk', 3], ['Andet', 2], ['Ingen', 5]];
          var s = '<svg viewBox="0 0 420 240" width="420" height="240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">';
          var ox = 50, oy = 200, h = 160, w = 50, gap = 20, max = 10;
          s += '<text x="220" y="18" text-anchor="middle" font-weight="bold">Kæledyr i 6. klasse (eksempel)</text>';
          for (var i = 0; i <= max; i += 2) { var y = oy - i / max * h; s += '<line x1="' + ox + '" y1="' + y + '" x2="' + (ox + 5 * (w + gap)) + '" y2="' + y + '" stroke="#dfe4ec"/><text x="' + (ox - 8) + '" y="' + (y + 4) + '" text-anchor="end">' + i + '</text>'; }
          s += '<line x1="' + ox + '" y1="' + oy + '" x2="' + (ox + 5 * (w + gap)) + '" y2="' + oy + '" stroke="currentColor" stroke-width="2"/><line x1="' + ox + '" y1="' + oy + '" x2="' + ox + '" y2="' + (oy - h - 10) + '" stroke="currentColor" stroke-width="2"/>';
          data.forEach(function (d, i) { var x = ox + gap / 2 + i * (w + gap), bh = d[1] / max * h; s += '<rect x="' + x + '" y="' + (oy - bh) + '" width="' + w + '" height="' + bh + '" fill="' + O + '" rx="3"/><text x="' + (x + w / 2) + '" y="' + (oy - bh - 5) + '" text-anchor="middle" font-weight="bold">' + d[1] + '</text><text x="' + (x + w / 2) + '" y="' + (oy + 16) + '" text-anchor="middle">' + d[0] + '</text>'; });
          s += '<text x="' + (ox - 30) + '" y="' + (oy - h / 2) + '" transform="rotate(-90 ' + (ox - 30) + ' ' + (oy - h / 2) + ')" text-anchor="middle">Antal elever</text>';
          return s + '</svg>';
        })(),
        caption: { da: 'Søjlediagram. Hver søjle viser antallet af elever i en gruppe. I alt 8 + 6 + 3 + 2 + 5 = 24 elever.', en: 'Bar chart. Each bar shows the number of pupils in a group. In total 8 + 6 + 3 + 2 + 5 = 24 pupils.' }
      },
      {
        type: 'example',
        title: { da: 'Aflæs søjlediagrammet', en: 'Read the bar chart' },
        problem: { da: 'Brug diagrammet ovenfor. (a) Hvor mange flere har hund end kat? (b) Hvor mange elever er der i klassen? (c) Hvor mange har et kæledyr?', en: 'Use the chart above. (a) How many more have a dog than a cat? (b) How many pupils are in the class? (c) How many have a pet?' },
        steps: {
          da: [
            '(a) Hund: 8. Kat: 6. ' + m('8 − 6 = 2') + ' flere.',
            '(b) Læg alle søjler sammen: ' + m('8 + 6 + 3 + 2 + 5 = 24') + '.',
            '(c) Alle undtagen „Ingen“: ' + m('24 − 5 = 19') + '.'
          ],
          en: [
            '(a) Dog: 8. Cat: 6. ' + m('8 − 6 = 2') + ' more.',
            '(b) Add all the bars: ' + m('8 + 6 + 3 + 2 + 5 = 24') + '.',
            '(c) Everyone except "Ingen" (none): ' + m('24 − 5 = 19') + '.'
          ]
        },
        answer: { da: '(a) 2 (b) 24 (c) 19', en: '(a) 2 (b) 24 (c) 19' }
      },
      {
        type: 'fig',
        svg: (function () {
          var pts = [[6, 4], [9, 8], [12, 13], [15, 15], [18, 12], [21, 8]];
          var s = '<svg viewBox="0 0 420 230" width="420" height="230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">';
          var ox = 50, oy = 190, w = 330, h = 150;
          s += '<text x="220" y="18" text-anchor="middle" font-weight="bold">Temperatur en dag i maj (eksempel)</text>';
          for (var t = 0; t <= 16; t += 4) { var y = oy - t / 16 * h; s += '<line x1="' + ox + '" y1="' + y + '" x2="' + (ox + w) + '" y2="' + y + '" stroke="#dfe4ec"/><text x="' + (ox - 8) + '" y="' + (y + 4) + '" text-anchor="end">' + t + '°</text>'; }
          s += '<line x1="' + ox + '" y1="' + oy + '" x2="' + (ox + w) + '" y2="' + oy + '" stroke="currentColor" stroke-width="2"/><line x1="' + ox + '" y1="' + oy + '" x2="' + ox + '" y2="' + (oy - h - 10) + '" stroke="currentColor" stroke-width="2"/>';
          var X = function (hr) { return ox + (hr - 6) / 15 * w; }, Y = function (t) { return oy - t / 16 * h; };
          var path = pts.map(function (p, i) { return (i ? 'L' : 'M') + X(p[0]) + ',' + Y(p[1]); }).join(' ');
          s += '<path d="' + path + '" fill="none" stroke="' + O + '" stroke-width="2.5"/>';
          pts.forEach(function (p) { s += '<circle cx="' + X(p[0]) + '" cy="' + Y(p[1]) + '" r="4" fill="' + O + '"/><text x="' + X(p[0]) + '" y="' + (oy + 16) + '" text-anchor="middle">kl. ' + p[0] + '</text>'; });
          return s + '</svg>';
        })(),
        caption: { da: 'Kurvediagram. Punkterne er målinger; linjerne viser udviklingen. Varmest kl. 15 (15 °C).', en: 'Line graph. The points are measurements; the lines show the change. Warmest at 15:00 (15 °C).' }
      },
      {
        type: 'text',
        title: { da: 'Cirkeldiagram: dele af en helhed', en: 'Pie chart: parts of a whole' },
        body: {
          da: '<p>I et cirkeldiagram er hele cirklen = <b>100 %</b> = alle data. Et stykke på en kvart cirkel er 25 %, en halv cirkel er 50 %.</p>'
            + '<p>Hele cirklen er 360°, så 25 % svarer til ' + m('360 · 0,25 = 90°') + ' – en ret vinkel. 10 % svarer til 36°.</p>'
            + '<p>Cirkeldiagrammer er gode til at se <i>andele</i>, men du kan ikke se det præcise antal, medmindre det står skrevet på. Med 24 elever er 25 % = 6 elever.</p>',
          en: '<p>In a pie chart the whole circle = <b>100%</b> = all the data. A slice that is a quarter of the circle is 25%, half a circle is 50%.</p>'
            + '<p>The whole circle is 360°, so 25% corresponds to ' + m('360 × 0.25 = 90°') + ' – a right angle. 10% corresponds to 36°.</p>'
            + '<p>Pie charts are good for seeing <i>shares</i>, but you cannot see the exact number unless it is written on. With 24 pupils, 25% = 6 pupils.</p>'
        }
      },
      {
        type: 'tip',
        icon: '🔍',
        body: {
          da: '<p><b>Vær kritisk.</b> Hvis y-aksen ikke starter ved 0, kan små forskelle se kæmpestore ud. Tjek altid tallene. Og spørg: hvem har lavet diagrammet, og hvad vil de gerne vise?</p>',
          en: '<p><b>Be critical.</b> If the y-axis does not start at 0, small differences can look huge. Always check the numbers. And ask: who made the chart, and what do they want to show?</p>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Du vil vise, hvordan din højde har ændret sig fra 0 til 12 år. Hvilket diagram passer bedst?', en: 'You want to show how your height has changed from age 0 to 12. Which chart fits best?' }, a: { da: 'Et kurvediagram – det viser udvikling over tid.', en: 'A line graph – it shows change over time.' } },
          { q: { da: 'I kurvediagrammet ovenfor: hvor mange grader steg temperaturen fra kl. 6 til kl. 15?', en: 'In the line graph above: by how many degrees did the temperature rise from 6:00 to 15:00?' }, a: { da: '11 grader (fra 4 °C til 15 °C).', en: '11 degrees (from 4 °C to 15 °C).' } },
          { q: { da: 'I et cirkeldiagram over 40 elever fylder „cykler til skole“ halvdelen af cirklen. Hvor mange elever cykler?', en: 'In a pie chart of 40 pupils, "cycle to school" fills half the circle. How many pupils cycle?' }, a: { da: '20 elever (50 % af 40).', en: '20 pupils (50% of 40).' } },
          { q: { da: 'Et stykke i et cirkeldiagram er 90°. Hvor mange procent er det?', en: 'A slice of a pie chart is 90°. What percentage is that?' }, a: { da: '25 % (90 er en fjerdedel af 360).', en: '25% (90 is a quarter of 360).' } },
          { q: { da: 'Lav en tabel med kæledyrs-tallene fra søjlediagrammet, og tilføj en kolonne med procent (af 24).', en: 'Make a table with the pet numbers from the bar chart, and add a column with percent (of 24).' }, a: { da: 'Hund 8 (33 %), kat 6 (25 %), fisk 3 (12,5 %), andet 2 (8 %), ingen 5 (21 %). Fx ' + m('8 : 24 ≈ 0,33 = 33 %') + '.', en: 'Dog 8 (33%), cat 6 (25%), fish 3 (12.5%), other 2 (8%), none 5 (21%). E.g. ' + m('8 ÷ 24 ≈ 0.33 = 33%') + '.' } },
          { q: { da: 'En avis viser et søjlediagram, hvor y-aksen starter ved 95. Søjlerne viser 96 og 100. Ser forskellen stor eller lille ud? Hvad er den i virkeligheden?', en: 'A newspaper shows a bar chart where the y-axis starts at 95. The bars show 96 and 100. Does the difference look big or small? What is it really?' }, a: { da: 'Den ser stor ud (den ene søjle er 5 gange højere), men forskellen er kun 4 ud af ca. 100 – altså ca. 4 %.', en: 'It looks big (one bar is 5 times taller), but the difference is only 4 out of about 100 – about 4%.' } }
        ]
      }
    ]
  };

  /* ================================================================
     18. Hyppighed, frekvens, typetal, middeltal, variationsbredde
     ================================================================ */
  T['deskriptorer'] = {
    title: { da: 'Hyppighed, frekvens, typetal og middeltal', en: 'Counts, frequencies, mode and mean' },
    phase: [3],
    summary: {
      da: 'Fem ord, der beskriver et datasæt: hyppighed, frekvens, typetal, middeltal og variationsbredde. Med dem kan du sammenligne to klasser – selvom de ikke er lige store.',
      en: 'Five words that describe a data set: count (hyppighed), frequency, mode, mean and range. With them you can compare two classes – even if they are not the same size.'
    },
    goals: {
      da: [
        'Eleven kan sammenligne datasæt ud fra hyppigheder, frekvenser og enkle statistiske deskriptorer.',
        'Eleven har viden om hyppighed, frekvens og enkle statistiske deskriptorer.'
      ],
      en: [
        'The pupil can compare data sets using counts, frequencies and simple statistical descriptors.',
        'The pupil has knowledge of counts, frequencies and simple statistical descriptors.'
      ]
    },
    terms: [
      { da: 'hyppighed', en: 'count (absolute frequency)', def: { da: 'Hvor mange gange en værdi forekommer', en: 'How many times a value occurs' } },
      { da: 'frekvens', en: 'frequency (relative)', def: { da: 'Hyppighed delt med det samlede antal – ofte i procent', en: 'Count divided by the total – often as a percentage' } },
      { da: 'typetal', en: 'mode', def: { da: 'Den værdi, der forekommer flest gange', en: 'The value that occurs most often' } },
      { da: 'middeltal', en: 'mean (average)', def: { da: 'Summen af alle værdier delt med antallet', en: 'The sum of all values divided by how many there are' } },
      { da: 'variationsbredde', en: 'range', def: { da: 'Største værdi minus mindste værdi', en: 'Biggest value minus smallest value' } },
      { da: 'datasæt', en: 'data set', def: { da: 'En samling af data, fx alle skostørrelser i klassen', en: 'A collection of data, e.g. all the shoe sizes in the class' } },
      { da: 'hyppighedstabel', en: 'frequency table', def: { da: 'Tabel, der viser hver værdi og dens hyppighed', en: 'Table showing each value and its count' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Hyppighed og frekvens – forskellen er vigtig', en: 'Count and frequency – the difference matters' },
        body: {
          da: '<p><b>Hyppighed</b> er et antal: 8 elever har en hund. <b>Frekvens</b> er en andel: ' + m('8 : 24 ≈ 0,33') + ' – altså 33 % af klassen.</p>'
            + '<p class="big">' + m('frekvens = hyppighed : samlet antal') + '</p>'
            + '<p><b>Hvorfor have begge?</b> Fordi frekvenser gør det muligt at <b>sammenligne grupper af forskellig størrelse</b>. I 6.A har 8 ud af 24 en hund (33 %). I 6.B har 9 ud af 30 en hund (30 %). 6.B har flere hunde (hyppighed 9 mod 8) – men en <i>mindre andel</i> (frekvens 30 % mod 33 %).</p>'
            + '<p>Alle frekvenser i et datasæt giver tilsammen 1 (= 100 %).</p>',
          en: '<p><b>Count</b> (hyppighed) is a number: 8 pupils have a dog. <b>Frequency</b> (frekvens) is a share: ' + m('8 ÷ 24 ≈ 0.33') + ' – i.e. 33% of the class.</p>'
            + '<p class="big">' + m('frequency = count ÷ total') + '</p>'
            + '<p><b>Why have both?</b> Because frequencies let you <b>compare groups of different sizes</b>. In 6.A, 8 out of 24 have a dog (33%). In 6.B, 9 out of 30 have a dog (30%). 6.B has more dogs (count 9 vs 8) – but a <i>smaller share</i> (frequency 30% vs 33%).</p>'
            + '<p>All the frequencies in a data set add up to 1 (= 100%).</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Typetal, middeltal og variationsbredde', en: 'Mode, mean and range' },
        body: {
          da: '<p>Læseplanen nævner tre „enkle deskriptorer“, du skal kende. De beskriver et helt datasæt med ét tal hver:</p>'
            + '<ul>'
            + '<li><b>Typetal</b> – den <i>typiske</i> værdi: den, der forekommer flest gange. (Kan der være to? Ja, hvis to værdier er lige hyppige.)</li>'
            + '<li><b>Middeltal</b> (gennemsnit) – læg alle værdier sammen, og divider med antallet af værdier. Tænk: „hvis alle havde lige meget“.</li>'
            + '<li><b>Variationsbredde</b> – største værdi minus mindste. Fortæller, hvor <i>spredte</i> data er.</li>'
            + '</ul>',
          en: '<p>The Danish curriculum names three "simple descriptors" you need to know. Each describes a whole data set with one number:</p>'
            + '<ul>'
            + '<li><b>Mode</b> (typetal) – the <i>typical</i> value: the one that occurs most often. (Can there be two? Yes, if two values are equally common.)</li>'
            + '<li><b>Mean</b> (middeltal, average) – add all the values and divide by how many values there are. Think: "if everyone had the same amount".</li>'
            + '<li><b>Range</b> (variationsbredde) – biggest value minus smallest. Tells how <i>spread out</i> the data is.</li>'
            + '</ul>'
        }
      },
      {
        type: 'example',
        title: { da: 'Skostørrelser i en gruppe', en: 'Shoe sizes in a group' },
        problem: { da: 'Otte elever har skostørrelserne 36, 37, 37, 38, 38, 38, 39, 40. Lav en hyppighedstabel, og find typetal, middeltal og variationsbredde.', en: 'Eight pupils have shoe sizes 36, 37, 37, 38, 38, 38, 39, 40. Make a frequency table and find the mode, mean and range.' },
        steps: {
          da: [
            '<b>Hyppighedstabel:</b><table><tr><th>Størrelse</th><td>36</td><td>37</td><td>38</td><td>39</td><td>40</td><th>I alt</th></tr><tr><th>Hyppighed</th><td>1</td><td>2</td><td>3</td><td>1</td><td>1</td><td>8</td></tr><tr><th>Frekvens</th><td>12,5 %</td><td>25 %</td><td>37,5 %</td><td>12,5 %</td><td>12,5 %</td><td>100 %</td></tr></table>',
            '<b>Typetal:</b> 38 (forekommer 3 gange – flest).',
            '<b>Middeltal:</b> ' + m('(36 + 37 + 37 + 38 + 38 + 38 + 39 + 40) : 8 = 303 : 8 = 37,875') + ' ≈ 37,9.',
            '<b>Variationsbredde:</b> ' + m('40 − 36 = 4') + '.',
            'Bemærk: middeltallet 37,9 er ikke en skostørrelse, nogen har. Det er fint – det er et beregnet tal.'
          ],
          en: [
            '<b>Frequency table:</b><table><tr><th>Size</th><td>36</td><td>37</td><td>38</td><td>39</td><td>40</td><th>Total</th></tr><tr><th>Count</th><td>1</td><td>2</td><td>3</td><td>1</td><td>1</td><td>8</td></tr><tr><th>Frequency</th><td>12.5%</td><td>25%</td><td>37.5%</td><td>12.5%</td><td>12.5%</td><td>100%</td></tr></table>',
            '<b>Mode:</b> 38 (occurs 3 times – the most).',
            '<b>Mean:</b> ' + m('(36 + 37 + 37 + 38 + 38 + 38 + 39 + 40) ÷ 8 = 303 ÷ 8 = 37.875') + ' ≈ 37.9.',
            '<b>Range:</b> ' + m('40 − 36 = 4') + '.',
            'Note: the mean 37.9 is not a shoe size anyone has. That is fine – it is a calculated number.'
          ]
        },
        answer: { da: 'Typetal 38, middeltal ≈ 37,9, variationsbredde 4.', en: 'Mode 38, mean ≈ 37.9, range 4.' }
      },
      {
        type: 'example',
        title: { da: 'Sammenlign to datasæt', en: 'Compare two data sets' },
        problem: { da: 'To hold har fået point i en quiz. Hold A: 6, 7, 7, 8, 7. Hold B: 2, 10, 9, 4, 10. Hvilket hold klarede sig bedst? Hvilket var mest jævnt?', en: 'Two teams scored points in a quiz. Team A: 6, 7, 7, 8, 7. Team B: 2, 10, 9, 4, 10. Which team did best? Which was most even?' },
        steps: {
          da: [
            'Middeltal A: ' + m('35 : 5 = 7') + '. Middeltal B: ' + m('35 : 5 = 7') + '. Samme gennemsnit!',
            'Variationsbredde A: ' + m('8 − 6 = 2') + '. Variationsbredde B: ' + m('10 − 2 = 8') + '.',
            'Typetal A: 7. Typetal B: 10.',
            'Konklusion: I gennemsnit er holdene lige gode. Hold A er meget jævnt (alle omkring 7). Hold B svinger meget – nogle rigtig gode, nogle rigtig dårlige. Middeltallet alene fortæller ikke hele historien.'
          ],
          en: [
            'Mean A: ' + m('35 ÷ 5 = 7') + '. Mean B: ' + m('35 ÷ 5 = 7') + '. Same average!',
            'Range A: ' + m('8 − 6 = 2') + '. Range B: ' + m('10 − 2 = 8') + '.',
            'Mode A: 7. Mode B: 10.',
            'Conclusion: On average the teams are equally good. Team A is very even (all around 7). Team B varies a lot – some very good, some very poor. The mean alone does not tell the whole story.'
          ]
        },
        answer: { da: 'Lige gode i gennemsnit; hold A er mest jævnt.', en: 'Equally good on average; team A is most even.' }
      },
      { type: 'widget', widget: 'stats', title: { da: 'Statistik-lommeregner', en: 'Statistics calculator' } },
      {
        type: 'practice',
        items: [
          { q: { da: 'Fem venner har 3, 5, 5, 8 og 9 kr. i lommen. Find middeltal, typetal og variationsbredde.', en: 'Five friends have 3, 5, 5, 8 and 9 kr. in their pockets. Find the mean, mode and range.' }, a: { da: 'Middeltal ' + m('30 : 5 = 6') + ' kr., typetal 5 kr., variationsbredde ' + m('9 − 3 = 6') + ' kr.', en: 'Mean ' + m('30 ÷ 5 = 6') + ' kr., mode 5 kr., range ' + m('9 − 3 = 6') + ' kr.' } },
          { q: { da: 'I en klasse på 25 elever spiller 10 fodbold. Hvad er hyppigheden, og hvad er frekvensen?', en: 'In a class of 25 pupils, 10 play football. What is the count, and what is the frequency?' }, a: { da: 'Hyppighed 10. Frekvens ' + m('10 : 25 = 0,4 = 40 %') + '.', en: 'Count 10. Frequency ' + m('10 ÷ 25 = 0.4 = 40%') + '.' } },
          { q: { da: 'I 5. klasse (20 elever) cykler 12. I 6. klasse (28 elever) cykler 14. Hvilken klasse har den største andel cyklister?', en: 'In grade 5 (20 pupils) 12 cycle. In grade 6 (28 pupils) 14 cycle. Which class has the bigger share of cyclists?' }, a: { da: '5. klasse: 60 %. 6. klasse: 50 %. 5. klasse har den største andel, selvom 6. klasse har flere cyklister.', en: 'Grade 5: 60%. Grade 6: 50%. Grade 5 has the bigger share, even though grade 6 has more cyclists.' } },
          { q: { da: 'Fire tal har middeltallet 10. Tre af dem er 8, 9 og 11. Hvad er det fjerde?', en: 'Four numbers have mean 10. Three of them are 8, 9 and 11. What is the fourth?' }, a: { da: '12. Summen skal være ' + m('4 · 10 = 40') + ', og ' + m('40 − 28 = 12') + '.', en: '12. The sum must be ' + m('4 × 10 = 40') + ', and ' + m('40 − 28 = 12') + '.' } },
          { q: { da: 'Kan typetallet og middeltallet være det samme tal?', en: 'Can the mode and the mean be the same number?' }, a: { da: 'Ja, fx 4, 5, 5, 6: typetal 5, middeltal 20 : 4 = 5.', en: 'Yes, e.g. 4, 5, 5, 6: mode 5, mean 20 ÷ 4 = 5.' } },
          { q: { da: 'Temperaturerne i en uge var 12, 14, 15, 15, 13, 11 og 18 grader. Find variationsbredden og middeltallet.', en: 'The temperatures in a week were 12, 14, 15, 15, 13, 11 and 18 degrees. Find the range and the mean.' }, a: { da: 'Variationsbredde ' + m('18 − 11 = 7') + '. Middeltal ' + m('98 : 7 = 14') + ' grader.', en: 'Range ' + m('18 − 11 = 7') + '. Mean ' + m('98 ÷ 7 = 14') + ' degrees.' } }
        ]
      }
    ]
  };

  /* ================================================================
     19. Din egen statistiske undersøgelse
     ================================================================ */
  T['undersoegelse'] = {
    title: { da: 'Din egen undersøgelse', en: 'Your own investigation' },
    phase: [2],
    summary: {
      da: 'Fra spørgsmål til svar i seks trin: stil et spørgsmål, lav et spørgeskema, indsaml, ordn, præsenter og fortæl, hvad du fandt ud af.',
      en: 'From question to answer in six steps: ask a question, make a questionnaire, collect, organise, present and tell what you found out.'
    },
    goals: {
      da: [
        'Eleven kan gennemføre og præsentere egne statistiske undersøgelser.',
        'Eleven har viden om metoder til at behandle og præsentere data, herunder med digitale værktøjer.'
      ],
      en: [
        'The pupil can carry out and present their own statistical investigations.',
        'The pupil has knowledge of methods for processing and presenting data, including with digital tools.'
      ]
    },
    terms: [
      { da: 'statistisk undersøgelse', en: 'statistical investigation', def: { da: 'At samle data for at besvare et spørgsmål', en: 'Collecting data to answer a question' } },
      { da: 'spørgeskema', en: 'questionnaire', def: { da: 'En liste med spørgsmål, som mange skal svare på', en: 'A list of questions for many people to answer' } },
      { da: 'indsamle', en: 'collect', def: { da: 'Få svarene ind', en: 'Get the answers in' } },
      { da: 'ordne', en: 'organise', def: { da: 'Tælle op og sætte i tabel', en: 'Count up and put in a table' } },
      { da: 'præsentere', en: 'present', def: { da: 'Vise resultaterne med diagrammer og tal', en: 'Show the results with charts and numbers' } },
      { da: 'tolke', en: 'interpret', def: { da: 'Forklare, hvad resultaterne betyder', en: 'Explain what the results mean' } },
      { da: 'regneark', en: 'spreadsheet', def: { da: 'Et program med rækker og kolonner, der kan regne og tegne diagrammer', en: 'A program with rows and columns that can calculate and draw charts' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'De seks trin', en: 'The six steps' },
        body: {
          da: '<ol>'
            + '<li><b>Spørgsmål.</b> Hvad vil du vide? Det skal kunne besvares med tal. Fx: „Hvordan kommer eleverne i 6. klasse i skole?“ eller „Hvor mange timer sover eleverne om natten?“</li>'
            + '<li><b>Plan og spørgeskema.</b> Hvem skal spørges? Hvilke svarmuligheder? Skriv spørgsmålene ned (på papir eller i et digitalt skema).</li>'
            + '<li><b>Indsaml.</b> Spørg alle i gruppen. Skriv svarene ned med det samme – fx med streger i en tælletabel.</li>'
            + '<li><b>Ordn.</b> Lav en <a href="#/deskriptorer">hyppighedstabel</a>, og regn frekvenser ud. Et regneark kan hjælpe.</li>'
            + '<li><b>Præsenter.</b> Vælg et passende <a href="#/diagrammer">diagram</a>, og find typetal, middeltal og variationsbredde, hvis det giver mening.</li>'
            + '<li><b>Tolk og fortæl.</b> Hvad viser tallene? Hvad overraskede dig? Hvad kan du <i>ikke</i> konkludere? (Hvis du kun har spurgt din egen klasse, ved du ikke noget om andre klasser.)</li>'
            + '</ol>',
          en: '<ol>'
            + '<li><b>Question.</b> What do you want to know? It must be answerable with numbers. E.g.: "How do the pupils in grade 6 get to school?" or "How many hours do pupils sleep at night?"</li>'
            + '<li><b>Plan and questionnaire.</b> Who will you ask? What answer options? Write the questions down (on paper or in a digital form).</li>'
            + '<li><b>Collect.</b> Ask everyone in the group. Write the answers down straight away – e.g. with tally marks.</li>'
            + '<li><b>Organise.</b> Make a <a href="#/deskriptorer">frequency table</a> and calculate frequencies. A spreadsheet can help.</li>'
            + '<li><b>Present.</b> Choose a suitable <a href="#/diagrammer">chart</a>, and find the mode, mean and range if that makes sense.</li>'
            + '<li><b>Interpret and tell.</b> What do the numbers show? What surprised you? What can you <i>not</i> conclude? (If you only asked your own class, you know nothing about other classes.)</li>'
            + '</ol>'
        }
      },
      {
        type: 'text',
        title: { da: 'Gode spørgsmål i et spørgeskema', en: 'Good questions in a questionnaire' },
        body: {
          da: '<ul>'
            + '<li><b>Ét spørgsmål ad gangen.</b> Ikke: „Kan du lide fodbold og håndbold?“</li>'
            + '<li><b>Svarmuligheder, der ikke overlapper.</b> Ikke „0–1 time, 1–2 timer“ (hvor hører 1 time hjemme?). Bedre: „under 1 time / 1–2 timer / mere end 2 timer“.</li>'
            + '<li><b>Alle skal kunne svare.</b> Husk fx „andet“ eller „ved ikke“.</li>'
            + '<li><b>Ikke ledende.</b> Ikke: „Er du også enig i, at der er for meget lektier?“</li>'
            + '</ul>'
            + '<p>Undervisningsvejledningen fortæller om en 6. klasse, der læste et avisdiagram om 12-åriges medieforbrug, blev uenige om, hvad det viste, og derfor lavede deres eget spørgeskema til alle skolens 6. klasser. Data blev bearbejdet i et regneark, og til sidst sammenlignede de deres resultater med avisens. Det er en rigtig god model for en undersøgelse.</p>',
          en: '<ul>'
            + '<li><b>One question at a time.</b> Not: "Do you like football and handball?"</li>'
            + '<li><b>Answer options that do not overlap.</b> Not "0–1 hour, 1–2 hours" (where does 1 hour belong?). Better: "under 1 hour / 1–2 hours / more than 2 hours".</li>'
            + '<li><b>Everyone must be able to answer.</b> Remember "other" or "don\'t know".</li>'
            + '<li><b>Not leading.</b> Not: "Don\'t you agree there is too much homework?"</li>'
            + '</ul>'
            + '<p>The Ministry\'s teaching guide describes a 6th-grade class that read a newspaper chart about 12-year-olds\' media use, disagreed about what it showed, and so made their own questionnaire for all the school\'s 6th-grade classes. The data was processed in a spreadsheet, and finally they compared their results with the newspaper\'s. That is a very good model for an investigation.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'En hel lille undersøgelse', en: 'A complete small investigation' },
        problem: { da: 'Spørgsmål: „Hvordan kommer eleverne i 6. klasse i skole?“ 24 elever svarer: gang 9, cykel 10, bil 4, bus 1.', en: 'Question: "How do the pupils in grade 6 get to school?" 24 pupils answer: walk 9, bike 10, car 4, bus 1.' },
        steps: {
          da: [
            '<b>Ordn:</b><table><tr><th>Transport</th><th>Hyppighed</th><th>Frekvens</th></tr><tr><td>Gang</td><td>9</td><td>' + m('9 : 24 = 37,5 %') + '</td></tr><tr><td>Cykel</td><td>10</td><td>' + m('10 : 24 ≈ 41,7 %') + '</td></tr><tr><td>Bil</td><td>4</td><td>' + m('4 : 24 ≈ 16,7 %') + '</td></tr><tr><td>Bus</td><td>1</td><td>' + m('1 : 24 ≈ 4,2 %') + '</td></tr><tr><th>I alt</th><th>24</th><th>100 %</th></tr></table>',
            '<b>Præsenter:</b> Et søjlediagram med fire søjler (9, 10, 4, 1) – eller et cirkeldiagram, hvis du vil vise andelene. Typetal: cykel.',
            '<b>Tolk:</b> Næsten 8 ud af 10 (79 %) går eller cykler. Kun én tager bus. Spørgsmål til videre undersøgelse: Er det anderledes om vinteren? Bor dem, der kører i bil, længere væk?',
            '<b>Hvad kan vi ikke sige:</b> Vi ved ikke, om det gælder for andre klasser eller andre skoler.'
          ],
          en: [
            '<b>Organise:</b><table><tr><th>Transport</th><th>Count</th><th>Frequency</th></tr><tr><td>Walk</td><td>9</td><td>' + m('9 ÷ 24 = 37.5%') + '</td></tr><tr><td>Bike</td><td>10</td><td>' + m('10 ÷ 24 ≈ 41.7%') + '</td></tr><tr><td>Car</td><td>4</td><td>' + m('4 ÷ 24 ≈ 16.7%') + '</td></tr><tr><td>Bus</td><td>1</td><td>' + m('1 ÷ 24 ≈ 4.2%') + '</td></tr><tr><th>Total</th><th>24</th><th>100%</th></tr></table>',
            '<b>Present:</b> A bar chart with four bars (9, 10, 4, 1) – or a pie chart if you want to show the shares. Mode: bike.',
            '<b>Interpret:</b> Almost 8 out of 10 (79%) walk or cycle. Only one takes the bus. Questions for further investigation: Is it different in winter? Do those who come by car live further away?',
            '<b>What we cannot say:</b> We do not know if this holds for other classes or other schools.'
          ]
        },
        answer: { da: 'De fleste (79 %) går eller cykler; typetallet er cykel.', en: 'Most (79%) walk or cycle; the mode is bike.' }
      },
      {
        type: 'text',
        title: { da: 'Regneark som hjælpemiddel', en: 'Spreadsheets as a tool' },
        body: {
          da: '<p>Læseplanen siger, at data skal kunne behandles „med digitale værktøjer“ – i praksis oftest et <b>regneark</b>. Sådan bruger du det:</p>'
            + '<ul><li>Skriv svarmulighederne i én kolonne og hyppighederne i den næste.</li><li>Lad regnearket regne summen og frekvenserne (hyppighed delt med sum).</li><li>Markér tallene, og vælg „indsæt diagram“ – så tegner programmet søjle- eller cirkeldiagrammet for dig.</li><li>Har du rå tal (fx alle skostørrelser i en kolonne), kan regnearket finde middeltal, største og mindste værdi med indbyggede funktioner.</li></ul>'
            + '<p>Fordelen: Ændrer du et tal, opdateres diagrammet og alle beregninger automatisk.</p>',
          en: '<p>The Danish curriculum says data should be processed "with digital tools" – in practice usually a <b>spreadsheet</b>. Here is how to use it:</p>'
            + '<ul><li>Write the answer options in one column and the counts in the next.</li><li>Let the spreadsheet calculate the sum and the frequencies (count divided by sum).</li><li>Select the numbers and choose "insert chart" – the program draws the bar or pie chart for you.</li><li>If you have raw numbers (e.g. all shoe sizes in a column), the spreadsheet can find the mean, biggest and smallest values with built-in functions.</li></ul>'
            + '<p>The advantage: if you change a number, the chart and all calculations update automatically.</p>'
        }
      },
      {
        type: 'practice',
        title: { da: 'Planlæg din egen', en: 'Plan your own' },
        items: [
          { q: { da: 'Formulér et spørgsmål om din klasse, som kan besvares med tal.', en: 'Formulate a question about your class that can be answered with numbers.' }, a: { da: 'Fx: „Hvor mange søskende har eleverne?“, „Hvilket fag er det bedste?“, „Hvor lang tid bruger eleverne på at komme i skole?“', en: 'E.g.: "How many siblings do pupils have?", "Which subject is the best?", "How long does it take pupils to get to school?"' } },
          { q: { da: 'Spørgsmålet er: „Hvor lang tid bruger du på lektier om dagen?“ Lav gode svarmuligheder.', en: 'The question is: "How long do you spend on homework per day?" Make good answer options.' }, a: { da: 'Fx: under 15 min / 15–30 min / 31–60 min / mere end 60 min. Ingen overlap, og alle kan svare.', en: 'E.g.: under 15 min / 15–30 min / 31–60 min / more than 60 min. No overlap, and everyone can answer.' } },
          { q: { da: 'Hvad er galt med spørgsmålet: „Synes du ikke også, at frikvartererne er for korte?“', en: 'What is wrong with the question: "Don\'t you also think the breaks are too short?"' }, a: { da: 'Det er ledende – det lægger op til at svare ja. Bedre: „Hvad synes du om længden på frikvartererne? for korte / passende / for lange“.', en: 'It is leading – it pushes you to answer yes. Better: "What do you think of the length of the breaks? too short / about right / too long".' } },
          { q: { da: 'Du har spurgt 20 elever om deres yndlingsfrugt: æble 7, banan 6, pære 2, andet 5. Hvilket diagram vil du bruge, og hvad er typetallet?', en: 'You asked 20 pupils about their favourite fruit: apple 7, banana 6, pear 2, other 5. Which chart would you use, and what is the mode?' }, a: { da: 'Søjlediagram (eller cirkeldiagram for andele). Typetal: æble.', en: 'Bar chart (or pie chart for shares). Mode: apple.' } },
          { q: { da: 'Du har kun spurgt din egen klasse. Kan du konkludere noget om hele skolen?', en: 'You only asked your own class. Can you conclude anything about the whole school?' }, a: { da: 'Nej – kun om din klasse. For at sige noget om skolen skal du spørge elever fra alle klassetrin.', en: 'No – only about your class. To say something about the school you would need to ask pupils from all grades.' } }
        ]
      }
    ]
  };

  /* ================================================================
     20. Sandsynlighed
     ================================================================ */
  T['sandsynlighed'] = {
    title: { da: 'Sandsynlighed', en: 'Probability' },
    phase: [1, 2, 3],
    summary: {
      da: 'Hvor stor er chancen? Fra umuligt til sikkert, fra terningkast til simulering – og hvorfor 7 er den mest almindelige sum med to terninger.',
      en: 'How likely is it? From impossible to certain, from dice throws to simulation – and why 7 is the most common total with two dice.'
    },
    goals: {
      da: [
        'Eleven kan undersøge tilfældighed og chancestørrelser gennem eksperimenter.',
        'Eleven kan undersøge chancestørrelser ved simulering af chanceeksperimenter.',
        'Eleven kan beskrive sandsynlighed ved brug af frekvens.',
        'Eleven har viden om sammenhængen mellem frekvenser og sandsynlighed.'
      ],
      en: [
        'The pupil can investigate randomness and chance through experiments.',
        'The pupil can investigate chance by simulating chance experiments.',
        'The pupil can describe probability using frequency.',
        'The pupil has knowledge of the relationship between frequencies and probability.'
      ]
    },
    terms: [
      { da: 'sandsynlighed', en: 'probability', def: { da: 'Et tal mellem 0 og 1, der siger, hvor sikkert noget sker', en: 'A number between 0 and 1 saying how likely something is' } },
      { da: 'tilfældighed', en: 'randomness', def: { da: 'Når man ikke kan forudsige det enkelte resultat', en: 'When you cannot predict the individual result' } },
      { da: 'udfald', en: 'outcome', def: { da: 'Ét muligt resultat af et eksperiment, fx „terningen viser 4“', en: 'One possible result of an experiment, e.g. "the die shows 4"' } },
      { da: 'hændelse', en: 'event', def: { da: 'Det, vi interesserer os for, fx „terningen viser et lige tal“', en: 'What we are interested in, e.g. "the die shows an even number"' } },
      { da: 'den sikre hændelse', en: 'the certain event', def: { da: 'Sker altid – sandsynlighed 1', en: 'Always happens – probability 1' } },
      { da: 'den umulige hændelse', en: 'the impossible event', def: { da: 'Sker aldrig – sandsynlighed 0', en: 'Never happens – probability 0' } },
      { da: 'lige stor chance', en: 'equally likely', def: { da: 'Når alle udfald har samme sandsynlighed', en: 'When all outcomes have the same probability' } },
      { da: 'chanceeksperiment', en: 'chance experiment', def: { da: 'Et forsøg med tilfældigt resultat, fx et terningkast', en: 'A trial with a random result, e.g. a dice throw' } },
      { da: 'simulering', en: 'simulation', def: { da: 'At lade en computer „kaste terningen“ mange tusinde gange', en: 'Letting a computer "throw the die" many thousands of times' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Fra umuligt til sikkert', en: 'From impossible to certain' },
        body: {
          da: '<p><b>Sandsynlighed</b> er et tal, der siger, hvor stor chancen er for, at noget sker. Skalaen går fra <b>0</b> (umuligt) til <b>1</b> (sikkert). Man kan skrive det som brøk, decimaltal eller procent.</p>'
            + '<table><tr><th>Ord</th><th>Sandsynlighed</th><th>Eksempel</th></tr>'
            + '<tr><td>umuligt (den umulige hændelse)</td><td>0 = 0 %</td><td>at slå en 7’er med én terning</td></tr>'
            + '<tr><td>lille chance</td><td>fx ' + fr(1, 6) + ' ≈ 17 %</td><td>at slå en 6’er</td></tr>'
            + '<tr><td>lige stor chance (fifty-fifty)</td><td>' + fr(1, 2) + ' = 50 %</td><td>plat eller krone</td></tr>'
            + '<tr><td>stor chance</td><td>fx ' + fr(5, 6) + ' ≈ 83 %</td><td>at <i>ikke</i> slå en 6’er</td></tr>'
            + '<tr><td>sikkert (den sikre hændelse)</td><td>1 = 100 %</td><td>at slå et tal mellem 1 og 6</td></tr></table>'
            + '<p>Når alle udfald er <b>lige sandsynlige</b> (en ærlig terning, en ærlig mønt), kan du regne sandsynligheden ud: ' + m('antal gunstige udfald : antal mulige udfald') + '. „Lige tal på en terning“: 3 gunstige (2, 4, 6) ud af 6 mulige = ' + fr(3, 6) + ' = ' + fr(1, 2) + '.</p>',
          en: '<p><b>Probability</b> is a number that says how big the chance is that something happens. The scale runs from <b>0</b> (impossible) to <b>1</b> (certain). You can write it as a fraction, decimal or percentage.</p>'
            + '<table><tr><th>Words</th><th>Probability</th><th>Example</th></tr>'
            + '<tr><td>impossible (the impossible event)</td><td>0 = 0%</td><td>throwing a 7 with one die</td></tr>'
            + '<tr><td>small chance</td><td>e.g. ' + fr(1, 6) + ' ≈ 17%</td><td>throwing a 6</td></tr>'
            + '<tr><td>equally likely (fifty-fifty)</td><td>' + fr(1, 2) + ' = 50%</td><td>heads or tails</td></tr>'
            + '<tr><td>big chance</td><td>e.g. ' + fr(5, 6) + ' ≈ 83%</td><td><i>not</i> throwing a 6</td></tr>'
            + '<tr><td>certain (the certain event)</td><td>1 = 100%</td><td>throwing a number from 1 to 6</td></tr></table>'
            + '<p>When all outcomes are <b>equally likely</b> (a fair die, a fair coin), you can calculate the probability: ' + m('favourable outcomes ÷ possible outcomes') + '. "Even number on a die": 3 favourable (2, 4, 6) out of 6 possible = ' + fr(3, 6) + ' = ' + fr(1, 2) + '.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Sandsynlighed som frekvens: forudsig, prøv, sammenlign', en: 'Probability as frequency: predict, try, compare' },
        body: {
          da: '<p>Læseplanen beskriver arbejdsmåden sådan: <b>forudsig</b> resultatet af et chanceeksperiment, <b>begrund</b> dit gæt, <b>gennemfør</b> eksperimentet, og <b>sammenlign</b> med gættet.</p>'
            + '<p><b>Eksempel:</b> „Hvor mange 6’ere får jeg i 30 kast?“ Forudsigelse: sandsynligheden er ' + fr(1, 6) + ', så cirka ' + m('30 : 6 = 5') + '. Kast 30 gange, og skriv op i en hyppighedstabel. Måske får du 3, måske 7. Det er <b>tilfældighed</b> – det passer sjældent præcis.</p>'
            + '<p>Efter forsøget kan du regne <b>frekvensen</b>: fik du 4 seksere i 30 kast, er frekvensen ' + m('4 : 30 ≈ 0,13') + '. Sandsynligheden var ' + fr(1, 6) + ' ≈ 0,17. Tæt på, men ikke ens.</p>'
            + '<p><b>Jo flere gange, jo tættere på.</b> Kaster du 600 gange, ligger frekvensen meget tæt på ' + fr(1, 6) + '. Det er derfor, man simulerer på computer: tusindvis af kast på et sekund. Det er også sådan, sandsynlighed bruges i virkeligheden – vejrudsigten „30 % chance for regn“ bygger på, hvor tit det har regnet i lignende situationer.</p>',
          en: '<p>The Danish curriculum describes the method like this: <b>predict</b> the result of a chance experiment, <b>justify</b> your guess, <b>carry out</b> the experiment, and <b>compare</b> with the guess.</p>'
            + '<p><b>Example:</b> "How many 6s will I get in 30 throws?" Prediction: the probability is ' + fr(1, 6) + ', so about ' + m('30 ÷ 6 = 5') + '. Throw 30 times and record in a frequency table. Maybe you get 3, maybe 7. That is <b>randomness</b> – it rarely fits exactly.</p>'
            + '<p>After the experiment you can calculate the <b>frequency</b>: if you got 4 sixes in 30 throws, the frequency is ' + m('4 ÷ 30 ≈ 0.13') + '. The probability was ' + fr(1, 6) + ' ≈ 0.17. Close, but not the same.</p>'
            + '<p><b>The more times, the closer.</b> If you throw 600 times, the frequency is very close to ' + fr(1, 6) + '. That is why we simulate on a computer: thousands of throws in a second. It is also how probability is used in real life – the weather forecast "30% chance of rain" is based on how often it has rained in similar situations.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'To terninger: hvorfor vinder 7 så tit?', en: 'Two dice: why does 7 win so often?' },
        body: {
          da: '<p>Undervisningsvejledningen beskriver et spil, „dyreløb“: dyr står på baner nummereret 2–12, man slår med to terninger, og dyret på banen med <i>summen</i> rykker frem. Banerne 6, 7 og 8 vinder næsten altid. Hvorfor?</p>'
            + '<p>Der er ' + m('6 · 6 = 36') + ' lige sandsynlige udfald (rød terning, blå terning). Tæl, hvor mange der giver hver sum:</p>'
            + '<table><tr><th>Sum</th><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>'
            + '<tr><th>Antal måder</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td><b>6</b></td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td></tr>'
            + '<tr><th>Sandsynlighed</th><td>' + fr(1, 36) + '</td><td>' + fr(2, 36) + '</td><td>' + fr(3, 36) + '</td><td>' + fr(4, 36) + '</td><td>' + fr(5, 36) + '</td><td><b>' + fr(6, 36) + '</b></td><td>' + fr(5, 36) + '</td><td>' + fr(4, 36) + '</td><td>' + fr(3, 36) + '</td><td>' + fr(2, 36) + '</td><td>' + fr(1, 36) + '</td></tr></table>'
            + '<p>Sum 7 kan laves på 6 måder: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1. Sum 2 kun på én måde: 1+1. Derfor er 7 seks gange så sandsynlig som 2. Bemærk, at 3+4 og 4+3 tæller som to forskellige udfald – forestil dig, at terningerne har hver sin farve.</p>'
            + '<p>Prøv det i simulatoren nedenfor. Med få kast er søjlerne ujævne; med mange kast ligner de „bakken“ i tabellen.</p>',
          en: '<p>The Ministry\'s teaching guide describes a game, the "animal race": animals stand on lanes numbered 2–12, you throw two dice, and the animal on the lane matching the <i>total</i> moves forward. Lanes 6, 7 and 8 almost always win. Why?</p>'
            + '<p>There are ' + m('6 × 6 = 36') + ' equally likely outcomes (red die, blue die). Count how many give each total:</p>'
            + '<table><tr><th>Total</th><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>'
            + '<tr><th>Number of ways</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td><b>6</b></td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td></tr>'
            + '<tr><th>Probability</th><td>' + fr(1, 36) + '</td><td>' + fr(2, 36) + '</td><td>' + fr(3, 36) + '</td><td>' + fr(4, 36) + '</td><td>' + fr(5, 36) + '</td><td><b>' + fr(6, 36) + '</b></td><td>' + fr(5, 36) + '</td><td>' + fr(4, 36) + '</td><td>' + fr(3, 36) + '</td><td>' + fr(2, 36) + '</td><td>' + fr(1, 36) + '</td></tr></table>'
            + '<p>A total of 7 can be made in 6 ways: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1. A total of 2 in only one way: 1+1. So 7 is six times as likely as 2. Note that 3+4 and 4+3 count as two different outcomes – imagine the dice have different colours.</p>'
            + '<p>Try it in the simulator below. With few throws the bars are uneven; with many throws they look like the "hill" in the table.</p>'
        }
      },
      { type: 'widget', widget: 'dice', title: { da: 'Terningsimulator – to terninger', en: 'Dice simulator – two dice' } },
      {
        type: 'example',
        title: { da: 'Er spillet fair?', en: 'Is the game fair?' },
        problem: { da: 'To spillere slår med to terninger. A vinder, hvis summen er 7. B vinder, hvis summen er 12. Er det fair? Kan du lave et fair spil?', en: 'Two players throw two dice. A wins if the total is 7. B wins if the total is 12. Is it fair? Can you make a fair game?' },
        steps: {
          da: [
            'A vinder i 6 af 36 udfald, B kun i 1 af 36. A vinder cirka 6 gange så tit. Ikke fair.',
            'Et fair spil: A vinder på <i>lige</i> sum, B på <i>ulige</i> sum. Lige summer (2, 4, 6, 8, 10, 12): ' + m('1 + 3 + 5 + 5 + 3 + 1 = 18') + ' måder. Ulige summer (3, 5, 7, 9, 11): ' + m('2 + 4 + 6 + 4 + 2 = 18') + ' måder. 18 mod 18 – fair!',
            'Tjek med et eksperiment: spil 50 gange, og se, om begge vinder cirka lige tit. Læseplanen nævner netop at undersøge, „om et chancespil er fair, ved at gennemføre spillet mange gange“.'
          ],
          en: [
            'A wins in 6 of 36 outcomes, B in only 1 of 36. A wins about 6 times as often. Not fair.',
            'A fair game: A wins on an <i>even</i> total, B on an <i>odd</i> total. Even totals (2, 4, 6, 8, 10, 12): ' + m('1 + 3 + 5 + 5 + 3 + 1 = 18') + ' ways. Odd totals (3, 5, 7, 9, 11): ' + m('2 + 4 + 6 + 4 + 2 = 18') + ' ways. 18 vs 18 – fair!',
            'Check with an experiment: play 50 times and see if both win about equally often. The Danish curriculum mentions investigating "whether a game of chance is fair by playing it many times".'
          ]
        },
        answer: { da: 'Ikke fair (6 mod 1). Lige/ulige sum er fair (18 mod 18).', en: 'Not fair (6 vs 1). Even/odd total is fair (18 vs 18).' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Hvad er sandsynligheden for at slå 1, 2 eller 3 med én terning?', en: 'What is the probability of throwing 1, 2 or 3 with one die?' }, a: { da: fr(3, 6) + ' = ' + fr(1, 2) + ' = 50 %.', en: fr(3, 6) + ' = ' + fr(1, 2) + ' = 50%.' } },
          { q: { da: 'En pose har 3 røde og 7 blå kugler. Du tager én uden at kigge. Hvad er sandsynligheden for rød?', en: 'A bag has 3 red and 7 blue marbles. You take one without looking. What is the probability of red?' }, a: { da: fr(3, 10) + ' = 0,3 = 30 %.', en: fr(3, 10) + ' = 0.3 = 30%.' } },
          { q: { da: 'Giv et eksempel på en sikker hændelse og en umulig hændelse ved kast med én terning.', en: 'Give an example of a certain event and an impossible event when throwing one die.' }, a: { da: 'Sikker: „et tal fra 1 til 6“. Umulig: „et tal over 6“ (eller „0“).', en: 'Certain: "a number from 1 to 6". Impossible: "a number above 6" (or "0").' } },
          { q: { da: 'Du slår plat eller krone 20 gange og får krone 13 gange. Hvad er frekvensen for krone? Betyder det, at mønten er uærlig?', en: 'You toss a coin 20 times and get heads 13 times. What is the frequency of heads? Does it mean the coin is unfair?' }, a: { da: m('13 : 20 = 0,65') + '. Nej – med kun 20 kast er det helt normalt at ligge et stykke fra 0,5. Kast 200 gange, og se igen.', en: m('13 ÷ 20 = 0.65') + '. No – with only 20 tosses it is quite normal to be some way from 0.5. Toss 200 times and look again.' } },
          { q: { da: 'Med to terninger: hvilken sum er lige så sandsynlig som 4?', en: 'With two dice: which total is just as likely as 4?' }, a: { da: '10. Begge kan laves på 3 måder (' + fr(3, 36) + ').', en: '10. Both can be made in 3 ways (' + fr(3, 36) + ').' } },
          { q: { da: 'I dyreløbet står dit dyr på bane 2. Er det et godt valg? Hvilken bane ville du vælge?', en: 'In the animal race your animal is on lane 2. Is that a good choice? Which lane would you choose?' }, a: { da: 'Nej – sum 2 sker kun i 1 af 36 kast. Vælg bane 7 (6 af 36).', en: 'No – a total of 2 happens in only 1 of 36 throws. Choose lane 7 (6 of 36).' } },
          { q: { da: 'Du kaster en terning 60 gange. Hvor mange 5’ere forventer du cirka? Og hvorfor får du sjældent præcis det tal?', en: 'You throw a die 60 times. About how many 5s do you expect? And why do you rarely get exactly that number?' }, a: { da: 'Ca. ' + m('60 : 6 = 10') + '. Fordi hvert kast er tilfældigt – forventningen gælder i gennemsnit over mange forsøg.', en: 'About ' + m('60 ÷ 6 = 10') + '. Because each throw is random – the expectation holds on average over many trials.' } }
        ]
      }
    ]
  };
})();
