/* ------------------------------------------------------------------
   Site structure: two levels (trinforløb), each with four areas.
   Competence goals ("kompetencemål") and attention points
   ("opmærksomhedspunkter") are quoted verbatim from:
   Fælles Mål – Matematik (Børne- og Undervisningsministeriet, 2019,
   with the 2025 note), https://uvm.dk/media/ko0dtyah/240513-faellesmaal-matematik.pdf
   English versions are translations.

   Fælles Mål sets goals per trinforløb (grades 1–3, grades 4–6), not per
   grade, and splits each into three ordered "faser". Each topic carries
   `phase: [..]`; the site maps fase 1/2/3 to the first/middle/last year of
   the trinforløb as a *guide* and says so on the page.
   ------------------------------------------------------------------ */
window.CONTENT = {
  levels: [
    {
      id: 'indskoling',
      title: { da: '1.–3. klasse', en: 'Grades 1–3' },
      name: { da: 'Indskolingen', en: 'Early years' },
      after: { da: 'Fælles Mål efter 3. klassetrin', en: 'Fælles Mål after grade 3' },
      grades: [1, 2, 3],
      intro: {
        da: 'Tal op til 1000, plus og minus, de første gangestykker, figurer, måling af længde, tid og vægt, tælle op og vise data – og at forstå chance.',
        en: 'Numbers up to 1000, adding and subtracting, first multiplication, shapes, measuring length, time and weight, counting and showing data – and understanding chance.'
      },
      attentionPoints: [
        { text: { da: 'Eleverne kan anvende trecifrede tal til at beskrive antal og rækkefølge.', en: 'Pupils can use three-digit numbers to describe quantity and order.' }, where: { da: 'Tal og algebra / Tal', en: 'Numbers and algebra / Numbers' } },
        { text: { da: 'Eleven kan addere og subtrahere enkle naturlige tal med hovedregning og lommeregner.', en: 'The pupil can add and subtract simple natural numbers using mental maths and a calculator.' }, where: { da: 'Tal og algebra / Regnestrategier', en: 'Numbers and algebra / Calculation strategies' } },
        { text: { da: 'Eleven kan anslå og måle længde, tid og vægt i enkle hverdagssammenhænge.', en: 'The pupil can estimate and measure length, time and weight in simple everyday contexts.' }, where: { da: 'Geometri og måling / Måling', en: 'Geometry and measurement / Measurement' } }
      ],
      areas: [
        {
          id: 'tal',
          title: { da: 'Tal og algebra', en: 'Numbers and algebra' },
          goal: { da: 'Eleven kan udvikle metoder til beregninger med naturlige tal.', en: 'The pupil can develop methods for calculating with natural numbers.' },
          intro: { da: 'Tælle, tiere og hundreder, plus og minus, gange og dele, mønstre – og de første halve og kvarte.', en: 'Counting, tens and hundreds, adding and subtracting, multiplying and sharing, patterns – and the first halves and quarters.' },
          topics: ['tal-og-antal', 'plus-og-minus', 'gange-og-division', 'moenstre-regneregler', 'halve-og-kvarte']
        },
        {
          id: 'geometri',
          title: { da: 'Geometri og måling', en: 'Geometry and measurement' },
          goal: { da: 'Eleven kan anvende geometriske begreber og måle.', en: 'The pupil can use geometric concepts and measure.' },
          intro: { da: 'Figurer, tegne og spejle, hvor ting er, klokken, meter og kilo – og de første skridt med omkreds og areal.', en: 'Shapes, drawing and mirroring, where things are, the clock, metres and kilos – and first steps with perimeter and area.' },
          topics: ['figurer', 'tegne-og-bygge', 'placeringer', 'laengde-tid-vaegt', 'omkreds-areal-intro']
        },
        {
          id: 'statistik',
          title: { da: 'Statistik og sandsynlighed', en: 'Statistics and probability' },
          goal: { da: 'Eleven kan udføre enkle statistiske undersøgelser og udtrykke intuitive chancestørrelser.', en: 'The pupil can carry out simple statistical investigations and express intuitive ideas of chance.' },
          intro: { da: 'Tælle op, lave tabeller og stolpediagrammer – og tale om chance: muligt, umuligt, lige stor chance.', en: 'Counting up, making tables and bar charts – and talking about chance: possible, impossible, equally likely.' },
          topics: ['taelle-og-vise', 'chance']
        },
        {
          id: 'kompetencer',
          title: { da: 'Matematiske kompetencer', en: 'Mathematical competencies' },
          goal: { da: 'Eleven kan handle hensigtsmæssigt i situationer med matematik.', en: 'The pupil can act appropriately in situations involving mathematics.' },
          intro: { da: 'Regnehistorier: forstå, tegne, regne, forklare hvorfor – og bruge klodser, tallinje og lommeregner.', en: 'Story problems: understand, draw, calculate, explain why – and use blocks, a number line and a calculator.' },
          topics: ['regnehistorier']
        }
      ]
    },
    {
      id: 'mellemtrin',
      title: { da: '4.–6. klasse', en: 'Grades 4–6' },
      name: { da: 'Mellemtrinnet', en: 'Middle years' },
      after: { da: 'Fælles Mål efter 6. klassetrin', en: 'Fælles Mål after grade 6' },
      grades: [4, 5, 6],
      intro: {
        da: 'Brøker, decimaltal og procent, negative tal, ligninger, vinkler, areal og rumfang, koordinatsystemet, statistik og sandsynlighed.',
        en: 'Fractions, decimals and percent, negative numbers, equations, angles, area and volume, the coordinate system, statistics and probability.'
      },
      attentionPoints: [
        { text: { da: 'Eleven kan vælge hensigtsmæssig regningsart til løsning af enkle hverdagsproblemer og opstille et simpelt regneudtryk.', en: 'The pupil can choose the appropriate operation to solve simple everyday problems and write a simple calculation expression.' }, where: { da: 'Tal og algebra / Regnestrategier', en: 'Numbers and algebra / Calculation strategies' } },
        { text: { da: 'Eleven kan gennemføre regneprocesser inden for alle fire regningsarter med inddragelse af overslag og lommeregner.', en: 'The pupil can carry out calculations in all four operations, using estimation and a calculator.' }, where: { da: 'Tal og algebra / Regnestrategier', en: 'Numbers and algebra / Calculation strategies' } },
        { text: { da: 'Eleven kan uddrage relevante oplysninger i enkle matematikholdige tekster.', en: 'The pupil can extract relevant information from simple texts containing mathematics.' }, where: { da: 'Matematiske kompetencer / Kommunikation', en: 'Mathematical competencies / Communication' } }
      ],
      areas: [
        {
          id: 'tal',
          title: { da: 'Tal og algebra', en: 'Numbers and algebra' },
          goal: { da: 'Eleven kan anvende rationale tal og variable i beskrivelser og beregninger.', en: 'The pupil can use rational numbers and variables in descriptions and calculations.' },
          intro: { da: 'De fire regningsarter, brøker, decimaltal, procent, negative tal, potenser, ligninger og formler.', en: 'The four operations, fractions, decimals, percent, negative numbers, powers, equations and formulas.' },
          topics: ['regnearter', 'broeker', 'decimaltal', 'procent', 'negative-tal', 'potenser-pi', 'ligninger', 'variable-formler']
        },
        {
          id: 'geometri',
          title: { da: 'Geometri og måling', en: 'Geometry and measurement' },
          goal: { da: 'Eleven kan anvende geometriske metoder og beregne enkle mål.', en: 'The pupil can use geometric methods and calculate simple measures.' },
          intro: { da: 'Vinkler, figurer, omkreds, areal, cirkler, rumfang, koordinatsystemet, flytninger, måling og tegning.', en: 'Angles, shapes, perimeter, area, circles, volume, the coordinate system, transformations, measuring and drawing.' },
          topics: ['vinkler-polygoner', 'omkreds-areal', 'cirkler', 'rumlige-figurer', 'koordinatsystem', 'flytninger', 'maaling', 'tegning']
        },
        {
          id: 'statistik',
          title: { da: 'Statistik og sandsynlighed', en: 'Statistics and probability' },
          goal: { da: 'Eleven kan udføre egne statistiske undersøgelser og bestemme statistiske sandsynligheder.', en: 'The pupil can carry out their own statistical investigations and determine statistical probabilities.' },
          intro: { da: 'Tabeller og diagrammer, hyppighed og frekvens, typetal og middeltal, egne undersøgelser og sandsynlighed.', en: 'Tables and charts, counts and frequencies, mode and mean, your own investigations and probability.' },
          topics: ['diagrammer', 'deskriptorer', 'undersoegelse', 'sandsynlighed']
        },
        {
          id: 'kompetencer',
          title: { da: 'Matematiske kompetencer', en: 'Mathematical competencies' },
          goal: { da: 'Eleven kan handle med overblik i sammensatte situationer med matematik.', en: 'The pupil can act with an overview in complex situations involving mathematics.' },
          intro: { da: 'Sådan angriber du et matematisk problem: forstå, oversætte, regne, tjekke og forklare.', en: 'How to tackle a maths problem: understand, translate, calculate, check and explain.' },
          topics: ['problemloesning']
        }
      ]
    }
  ],

  /* Official fase → typical grade, per level (1..3 → grades[0..2]) */
  phaseNote: {
    da: 'Fælles Mål deler hvert trinforløb i tre faser (1, 2, 3), som viser rækkefølgen i stoffet. Faserne er ikke officielt bundet til bestemte klassetrin, men i praksis kommer fase 1 typisk først i trinforløbet og fase 3 sidst. Klassetrinnene her er derfor en vejledende tolkning – spørg skolen, hvis du er i tvivl om, hvad der undervises i hvornår.',
    en: 'Fælles Mål splits each trinforløb into three phases (1, 2, 3) that show the order of the content. The phases are not officially tied to specific grades, but in practice phase 1 typically comes first in the trinforløb and phase 3 last. The grades shown here are therefore a guiding interpretation – ask the school if in doubt about what is taught when.'
  },

  about: {
    da: '<p>Denne side er lavet som studiemateriale til børn i 1.–6. klasse på en dansk friskole. Alt fagligt indhold er valgt ud fra de officielle danske læreplaner for matematik – der er ikke tilføjet emner, som ikke står i dem.</p>'
      + '<h2>Sådan er siden bygget op</h2>'
      + '<p>Fælles Mål beskriver matematik i fire <b>kompetenceområder</b>. Hvert område har et <b>kompetencemål</b> (bindende), som er udfoldet i <b>færdigheds- og vidensmål</b> (vejledende fra 1. januar 2025). Målene er sat for <b>trinforløb</b> – „efter 3. klassetrin“ (1.–3. klasse) og „efter 6. klassetrin“ (4.–6. klasse) – ikke for hvert enkelt klassetrin. Emnerne på denne side svarer til færdigheds- og vidensområderne i de to trinforløb, og forklaringerne følger den vejledende læseplan.</p>'
      + '<h2>Hvad med 1., 2., 4. og 5. klasse?</h2>'
      + '<p>Fælles Mål deler hvert trinforløb i tre <b>faser</b>. Faserne viser rækkefølgen i stoffet, men er ikke officielt bundet til bestemte klassetrin. På siden er hvert emne mærket med sin fase, og der er et filter pr. klassetrin, som bruger tolkningen fase 1 ≈ første år (1. og 4. klasse), fase 2 ≈ andet år (2. og 5. klasse), fase 3 ≈ sidste år (3. og 6. klasse). Det er en vejledende tolkning – skolens egen årsplan afgør, hvad der undervises i hvornår.</p>'
      + '<h2>Gælder Fælles Mål på en friskole?</h2>'
      + '<p>En friskole skal give undervisning, der <i>står mål med</i> folkeskolens. Skolen kan følge Fælles Mål direkte eller lave egne slutmål, som svarer til kompetencemålene i Fælles Mål. Derfor er Fælles Mål det rigtige udgangspunkt, uanset hvilken skole man går på. Spørg evt. skolen, om den bruger egne delmål.</p>'
      + '<h2>Kilder</h2>'
      + '<ul>'
      + '<li><a href="https://uvm.dk/media/ko0dtyah/240513-faellesmaal-matematik.pdf" target="_blank" rel="noopener">Fælles Mål – Matematik</a> (Børne- og Undervisningsministeriet, 2019, med note om reglerne fra 2025). Kompetencemål, færdigheds- og vidensmål og opmærksomhedspunkter efter 3. og 6. klassetrin.</li>'
      + '<li><a href="https://emu.dk/sites/default/files/2020-09/GSK_L%C3%A6seplan_Matematik.pdf" target="_blank" rel="noopener">Læseplan for faget matematik</a> (emu.dk, 2019). Afsnit 5.1 beskriver indholdet for 1.–3. klasse, afsnit 5.2 for 4.–6. klasse.</li>'
      + '<li><a href="https://emu.dk/sites/default/files/2020-09/GSK_Vejledning_Matematik.pdf" target="_blank" rel="noopener">Undervisningsvejledning for faget matematik</a> (emu.dk, 2019). Flere af eksemplerne på siden (Albert og lommepengene, 48 + 34, trafiktælling, dyreløb med terninger, centicubestænger, arealer på sømbræt) stammer herfra.</li>'
      + '<li><a href="https://uvm.dk/grundskole/folkeskolen/fag-og-indhold/fag-emner-og-tvaergaaende-temaer/faelles-maal/" target="_blank" rel="noopener">Fælles Mål – uvm.dk</a>. Oversigt over, hvad der er bindende og vejledende.</li>'
      + '<li><a href="https://emu.dk/grundskole/matematik/faghaefte-faelles-maal-laeseplan-og-vejledning" target="_blank" rel="noopener">Matematik – faghæfte, emu.dk</a>.</li>'
      + '<li><a href="https://uvm.dk/grundskole/frie-grundskoler/indhold-og-rammer/frie-grundskolers-maal-og-planer-for-undervisningen/" target="_blank" rel="noopener">Frie grundskolers mål og planer for undervisningen – uvm.dk</a>.</li>'
      + '</ul>'
      + '<h2>Om tal og tegn på dansk</h2>'
      + '<p>På dansk skrives decimaltal med komma (<span class="math">3,5</span>) og store tal med punktum (<span class="math">1.250</span>). Gange skrives med en prik (<span class="math">4 · 3</span>), og division skrives ofte med kolon (<span class="math">12 : 3</span>). I den engelske udgave af siden bruges de engelske skrivemåder (<span class="math">3.5</span>, <span class="math">1,250</span>, <span class="math">4 × 3</span>, <span class="math">12 ÷ 3</span>).</p>'
      + '<h2>Fremskridt</h2>'
      + '<p>Fluebenene („Jeg kan dette nu“) gemmes kun i din egen browser. Der sendes ingen data nogen steder hen.</p>',
    en: '<p>This site was made as study material for children in grades 1–6 at a Danish friskole. All subject content is chosen from the official Danish mathematics curriculum – nothing has been added that is not in it.</p>'
      + '<h2>How the site is organised</h2>'
      + '<p>Fælles Mål describes mathematics in four <b>competence areas</b>. Each area has a <b>competence goal</b> (binding), which is broken down into <b>skills and knowledge goals</b> (advisory since 1 January 2025). The goals are set per <b>trinforløb</b> – "after grade 3" (grades 1–3) and "after grade 6" (grades 4–6) – not per individual grade. The topics on this site correspond to the skills and knowledge areas of the two trinforløb, and the explanations follow the advisory curriculum (læseplan).</p>'
      + '<h2>What about grades 1, 2, 4 and 5?</h2>'
      + '<p>Fælles Mål splits each trinforløb into three <b>phases</b>. The phases show the order of the content but are not officially tied to specific grades. On this site every topic is marked with its phase, and there is a per-grade filter that uses the interpretation phase 1 ≈ first year (grades 1 and 4), phase 2 ≈ second year (grades 2 and 5), phase 3 ≈ last year (grades 3 and 6). This is a guiding interpretation – the school\'s own yearly plan decides what is taught when.</p>'
      + '<h2>Does Fælles Mål apply at a friskole?</h2>'
      + '<p>A friskole must provide teaching that <i>measures up to</i> the public school. It may follow Fælles Mål directly or set its own final goals, which must correspond to the competence goals in Fælles Mål. So Fælles Mål is the right starting point regardless of school. You can ask the school whether it uses its own intermediate goals.</p>'
      + '<h2>Sources</h2>'
      + '<ul>'
      + '<li><a href="https://uvm.dk/media/ko0dtyah/240513-faellesmaal-matematik.pdf" target="_blank" rel="noopener">Fælles Mål – Matematik</a> (Ministry of Children and Education, 2019, with a note on the 2025 rules). Competence goals, skills/knowledge goals and attention points after grades 3 and 6.</li>'
      + '<li><a href="https://emu.dk/sites/default/files/2020-09/GSK_L%C3%A6seplan_Matematik.pdf" target="_blank" rel="noopener">Læseplan for faget matematik</a> (emu.dk, 2019). Section 5.1 describes the content for grades 1–3, section 5.2 for grades 4–6.</li>'
      + '<li><a href="https://emu.dk/sites/default/files/2020-09/GSK_Vejledning_Matematik.pdf" target="_blank" rel="noopener">Undervisningsvejledning for faget matematik</a> (emu.dk, 2019). Several examples on this site (Albert and his pocket money, 48 + 34, the traffic count, the animal race with dice, centicube rods, areas on a geoboard) come from here.</li>'
      + '<li><a href="https://uvm.dk/grundskole/folkeskolen/fag-og-indhold/fag-emner-og-tvaergaaende-temaer/faelles-maal/" target="_blank" rel="noopener">Fælles Mål – uvm.dk</a>. Overview of what is binding and advisory.</li>'
      + '<li><a href="https://emu.dk/grundskole/matematik/faghaefte-faelles-maal-laeseplan-og-vejledning" target="_blank" rel="noopener">Mathematics – subject guide, emu.dk</a>.</li>'
      + '<li><a href="https://uvm.dk/grundskole/frie-grundskoler/indhold-og-rammer/frie-grundskolers-maal-og-planer-for-undervisningen/" target="_blank" rel="noopener">Goals and plans at free schools – uvm.dk</a>.</li>'
      + '</ul>'
      + '<h2>About numbers and symbols in Danish</h2>'
      + '<p>In Danish, decimals are written with a comma (<span class="math">3,5</span>) and large numbers with a full stop (<span class="math">1.250</span>). Multiplication is written with a dot (<span class="math">4 · 3</span>) and division often with a colon (<span class="math">12 : 3</span>). The English version of this site uses English notation (<span class="math">3.5</span>, <span class="math">1,250</span>, <span class="math">4 × 3</span>, <span class="math">12 ÷ 3</span>). Knowing both is useful when switching between school and home.</p>'
      + '<h2>Progress</h2>'
      + '<p>The check marks ("I can do this now") are stored only in your own browser. No data is sent anywhere.</p>'
  },

  topics: {}
};
