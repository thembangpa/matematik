/* ------------------------------------------------------------------
   Geometri og måling — 8 topics.
   "goals" quote the færdigheds- og vidensmål (efter 6. klassetrin) from
   Fælles Mål – Matematik; explanations follow Læseplan §5.2 (4.–6. kl.)
   and examples from the Undervisningsvejledning (areas on a geoboard).
   ------------------------------------------------------------------ */
(function () {
  var T = window.CONTENT.topics;
  function fr(n, d) { return '<span class="frac"><span>' + n + '</span><span>' + d + '</span></span>'; }
  function m(s) { return '<span class="math">' + s + '</span>'; }
  var G = '#1d9a6c', GS = '#bfe9d6', GS2 = '#8fd4b5';

  /* ================================================================
     9. Vinkler og polygoner
     ================================================================ */
  T['vinkler-polygoner'] = {
    title: { da: 'Vinkler og polygoner', en: 'Angles and polygons' },
    phase: [1, 2],
    summary: {
      da: 'Spidse, rette og stumpe vinkler. Trekanter og firkanter sorteret efter sider og vinkler – og hvorfor vinkelsummen i en trekant altid er 180°.',
      en: 'Acute, right and obtuse angles. Triangles and quadrilaterals sorted by sides and angles – and why the angles of a triangle always add up to 180°.'
    },
    goals: {
      da: [
        'Eleven kan kategorisere polygoner efter sidelængder og vinkler.',
        'Eleven har viden om vinkeltyper og sider i enkle polygoner.',
        'Eleven kan undersøge geometriske egenskaber ved plane figurer.',
        'Eleven har viden om vinkelmål, linjers indbyrdes beliggenhed og metoder til undersøgelse af figurer, herunder med dynamisk geometriprogram.'
      ],
      en: [
        'The pupil can categorise polygons by side lengths and angles.',
        'The pupil has knowledge of angle types and sides in simple polygons.',
        'The pupil can investigate geometric properties of plane figures.',
        'The pupil has knowledge of angle measurement, the relative position of lines, and methods for investigating figures, including with dynamic geometry software.'
      ]
    },
    terms: [
      { da: 'vinkel', en: 'angle', def: { da: 'Åbningen mellem to linjer, der mødes. Måles i grader (°)', en: 'The opening between two lines that meet. Measured in degrees (°)' } },
      { da: 'spids vinkel', en: 'acute angle', def: { da: 'Mindre end 90°', en: 'Less than 90°' } },
      { da: 'ret vinkel', en: 'right angle', def: { da: 'Præcis 90° – som et hjørne på et stykke papir', en: 'Exactly 90° – like the corner of a sheet of paper' } },
      { da: 'stump vinkel', en: 'obtuse angle', def: { da: 'Mellem 90° og 180°', en: 'Between 90° and 180°' } },
      { da: 'polygon', en: 'polygon', def: { da: 'En lukket, plan figur sat sammen af rette linjestykker', en: 'A closed flat shape made of straight line segments' } },
      { da: 'parallelle linjer', en: 'parallel lines', def: { da: 'Linjer med samme afstand overalt – de mødes aldrig', en: 'Lines that stay the same distance apart – they never meet' } },
      { da: 'vinkelrette linjer', en: 'perpendicular lines', def: { da: 'Linjer, der mødes i en ret vinkel (90°)', en: 'Lines that meet at a right angle (90°)' } },
      { da: 'vinkelsum', en: 'angle sum', def: { da: 'Alle vinklerne i en figur lagt sammen', en: 'All the angles in a shape added together' } },
      { da: 'vinkelmåler', en: 'protractor', def: { da: 'Redskab til at måle vinkler', en: 'Tool for measuring angles' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Vinkler måles i grader', en: 'Angles are measured in degrees' },
        body: {
          da: '<p>En hel omgang er <b>360°</b>. En halv omgang er 180° – en lige linje. En kvart omgang er 90° – en <b>ret vinkel</b>, som hjørnet på et stykke papir. Vinkler måler du med en <b>vinkelmåler</b>: læg midtpunktet i vinklens spids, og 0-linjen langs det ene ben.</p>'
            + '<table><tr><th>Vinkeltype</th><th>Størrelse</th><th>Sådan husker du det</th></tr>'
            + '<tr><td><b>Spids</b></td><td>under 90°</td><td>spids som en pizza-slice</td></tr>'
            + '<tr><td><b>Ret</b></td><td>præcis 90°</td><td>et hjørne – markeres med en lille firkant</td></tr>'
            + '<tr><td><b>Stump</b></td><td>mellem 90° og 180°</td><td>„stump“ = ikke spids, mere åben</td></tr>'
            + '<tr><td><b>Lige</b></td><td>præcis 180°</td><td>en lige linje</td></tr></table>',
          en: '<p>A full turn is <b>360°</b>. Half a turn is 180° – a straight line. A quarter turn is 90° – a <b>right angle</b>, like the corner of a sheet of paper. You measure angles with a <b>protractor</b>: put the centre on the vertex and the 0-line along one arm.</p>'
            + '<table><tr><th>Angle type</th><th>Size</th><th>How to remember</th></tr>'
            + '<tr><td><b>Acute</b></td><td>under 90°</td><td>sharp like a pizza slice</td></tr>'
            + '<tr><td><b>Right</b></td><td>exactly 90°</td><td>a corner – marked with a small square</td></tr>'
            + '<tr><td><b>Obtuse</b></td><td>between 90° and 180°</td><td>blunt, wide open</td></tr>'
            + '<tr><td><b>Straight</b></td><td>exactly 180°</td><td>a straight line</td></tr></table>'
        }
      },
      {
        type: 'fig',
        svg: '<svg viewBox="0 0 600 150" width="600" height="150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="14" fill="currentColor">'
          + '<g transform="translate(30,110)"><line x1="0" y1="0" x2="110" y2="0" stroke="currentColor" stroke-width="2"/><line x1="0" y1="0" x2="85" y2="-70" stroke="currentColor" stroke-width="2"/><path d="M30,0 A30,30 0 0,0 22.6,-18.6" fill="none" stroke="' + G + '" stroke-width="2"/><text x="55" y="28" text-anchor="middle">spids · acute</text><text x="40" y="-6" font-size="12" fill="' + G + '">40°</text></g>'
          + '<g transform="translate(180,110)"><line x1="0" y1="0" x2="110" y2="0" stroke="currentColor" stroke-width="2"/><line x1="0" y1="0" x2="0" y2="-90" stroke="currentColor" stroke-width="2"/><rect x="0" y="-18" width="18" height="18" fill="none" stroke="' + G + '" stroke-width="2"/><text x="55" y="28" text-anchor="middle">ret · right</text><text x="24" y="-24" font-size="12" fill="' + G + '">90°</text></g>'
          + '<g transform="translate(330,110)"><line x1="0" y1="0" x2="110" y2="0" stroke="currentColor" stroke-width="2"/><line x1="0" y1="0" x2="-60" y2="-75" stroke="currentColor" stroke-width="2"/><path d="M30,0 A30,30 0 0,0 -19,-23" fill="none" stroke="' + G + '" stroke-width="2"/><text x="40" y="28" text-anchor="middle">stump · obtuse</text><text x="8" y="-30" font-size="12" fill="' + G + '">130°</text></g>'
          + '<g transform="translate(470,110)"><line x1="-20" y1="0" x2="110" y2="0" stroke="currentColor" stroke-width="2"/><circle cx="45" cy="0" r="3"/><path d="M75,0 A30,30 0 0,0 15,0" fill="none" stroke="' + G + '" stroke-width="2"/><text x="45" y="28" text-anchor="middle">lige · straight</text><text x="45" y="-36" font-size="12" fill="' + G + '" text-anchor="middle">180°</text></g>'
          + '</svg>',
        caption: { da: 'De fire vinkeltyper.', en: 'The four angle types.' }
      },
      {
        type: 'text',
        title: { da: 'Linjer: parallelle og vinkelrette', en: 'Lines: parallel and perpendicular' },
        body: {
          da: '<p><b>Parallelle linjer</b> løber ved siden af hinanden med samme afstand hele vejen – som togskinner. De mødes aldrig. På tegninger markeres parallelle linjer ofte med små pile.</p>'
            + '<p><b>Vinkelrette linjer</b> mødes i en ret vinkel (90°) – som de to sider i et hjørne på et bord.</p>'
            + '<p>I et rektangel er de modstående sider parallelle, og nabosiderne er vinkelrette på hinanden.</p>',
          en: '<p><b>Parallel lines</b> run alongside each other at the same distance all the way – like railway tracks. They never meet. In drawings, parallel lines are often marked with small arrows.</p>'
            + '<p><b>Perpendicular lines</b> meet at a right angle (90°) – like the two edges at the corner of a table.</p>'
            + '<p>In a rectangle, opposite sides are parallel, and neighbouring sides are perpendicular to each other.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Polygoner: navne efter antal sider', en: 'Polygons: named by number of sides' },
        body: {
          da: '<p>En <b>polygon</b> er en lukket figur, der kun består af rette linjestykker. Den får navn efter antallet af sider (og hjørner):</p>'
            + '<table><tr><th>Sider</th><td>3</td><td>4</td><td>5</td><td>6</td><td>8</td></tr>'
            + '<tr><th>Navn</th><td>trekant</td><td>firkant</td><td>femkant</td><td>sekskant</td><td>ottekant</td></tr></table>'
            + '<p>En polygon er <b>regulær</b>, hvis alle sider er lige lange og alle vinkler lige store – fx et kvadrat eller en ligesidet trekant. En cirkel er <i>ikke</i> en polygon, for den har ingen rette sider.</p>',
          en: '<p>A <b>polygon</b> is a closed shape made only of straight line segments. It is named after its number of sides (and corners):</p>'
            + '<table><tr><th>Sides</th><td>3</td><td>4</td><td>5</td><td>6</td><td>8</td></tr>'
            + '<tr><th>Name</th><td>triangle (trekant)</td><td>quadrilateral (firkant)</td><td>pentagon (femkant)</td><td>hexagon (sekskant)</td><td>octagon (ottekant)</td></tr></table>'
            + '<p>A polygon is <b>regular</b> if all sides are the same length and all angles are equal – e.g. a square or an equilateral triangle. A circle is <i>not</i> a polygon, because it has no straight sides.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Trekanter', en: 'Triangles' },
        body: {
          da: '<p>Trekanter kan sorteres på to måder – <b>efter sider</b> og <b>efter vinkler</b>:</p>'
            + '<table><tr><th>Efter sider</th><th>Betyder</th></tr>'
            + '<tr><td><b>Ligesidet</b></td><td>alle 3 sider lige lange (og alle vinkler 60°)</td></tr>'
            + '<tr><td><b>Ligebenet</b></td><td>2 sider lige lange</td></tr>'
            + '<tr><td><b>Uligesidet</b></td><td>alle sider forskellige</td></tr></table>'
            + '<table><tr><th>Efter vinkler</th><th>Betyder</th></tr>'
            + '<tr><td><b>Spidsvinklet</b></td><td>alle vinkler under 90°</td></tr>'
            + '<tr><td><b>Retvinklet</b></td><td>én vinkel er 90°</td></tr>'
            + '<tr><td><b>Stumpvinklet</b></td><td>én vinkel er over 90°</td></tr></table>'
            + '<p><b>Vinkelsummen i en trekant er altid 180°.</b> Prøv selv: Klip en trekant ud af papir, riv de tre hjørner af, og læg dem ved siden af hinanden – de danner en lige linje (180°). Det gælder for alle trekanter. Med et dynamisk geometriprogram kan du trække i hjørnerne og se, at summen altid bliver 180°.</p>',
          en: '<p>Triangles can be sorted in two ways – <b>by sides</b> and <b>by angles</b>:</p>'
            + '<table><tr><th>By sides</th><th>Meaning</th></tr>'
            + '<tr><td><b>Equilateral</b> (ligesidet)</td><td>all 3 sides equal (and all angles 60°)</td></tr>'
            + '<tr><td><b>Isosceles</b> (ligebenet)</td><td>2 sides equal</td></tr>'
            + '<tr><td><b>Scalene</b> (uligesidet)</td><td>all sides different</td></tr></table>'
            + '<table><tr><th>By angles</th><th>Meaning</th></tr>'
            + '<tr><td><b>Acute-angled</b> (spidsvinklet)</td><td>all angles under 90°</td></tr>'
            + '<tr><td><b>Right-angled</b> (retvinklet)</td><td>one angle is 90°</td></tr>'
            + '<tr><td><b>Obtuse-angled</b> (stumpvinklet)</td><td>one angle is over 90°</td></tr></table>'
            + '<p><b>The angles of a triangle always add up to 180°.</b> Try it: cut a triangle out of paper, tear off the three corners and lay them next to each other – they form a straight line (180°). This works for every triangle. With dynamic geometry software you can drag the corners and see that the sum is always 180°.</p>'
        }
      },
      {
        type: 'fig',
        svg: '<svg viewBox="0 0 600 150" width="600" height="150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">'
          + '<g transform="translate(20,20)"><polygon points="60,0 0,104 120,104" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><text x="60" y="125" text-anchor="middle">ligesidet · equilateral</text><text x="60" y="80" text-anchor="middle" font-size="11">60° 60° 60°</text></g>'
          + '<g transform="translate(180,20)"><polygon points="60,0 15,104 105,104" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><text x="60" y="125" text-anchor="middle">ligebenet · isosceles</text></g>'
          + '<g transform="translate(330,20)"><polygon points="0,104 0,14 120,104" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><rect x="0" y="88" width="16" height="16" fill="none" stroke="' + G + '" stroke-width="2"/><text x="60" y="125" text-anchor="middle">retvinklet · right-angled</text></g>'
          + '<g transform="translate(470,20)"><polygon points="0,104 40,30 120,104" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><text x="60" y="125" text-anchor="middle">spidsvinklet · acute</text></g>'
          + '</svg>',
        caption: { da: 'Fire slags trekanter.', en: 'Four kinds of triangle.' }
      },
      {
        type: 'text',
        title: { da: 'Firkanter', en: 'Quadrilaterals' },
        body: {
          da: '<table><tr><th>Firkant</th><th>Sider</th><th>Vinkler</th><th>Parallelle sider</th></tr>'
            + '<tr><td><b>Kvadrat</b></td><td>alle 4 lige lange</td><td>alle 90°</td><td>2 par</td></tr>'
            + '<tr><td><b>Rektangel</b></td><td>modstående sider lige lange</td><td>alle 90°</td><td>2 par</td></tr>'
            + '<tr><td><b>Parallelogram</b></td><td>modstående sider lige lange</td><td>modstående vinkler lige store</td><td>2 par</td></tr>'
            + '<tr><td><b>Rombe</b></td><td>alle 4 lige lange</td><td>modstående vinkler lige store</td><td>2 par</td></tr>'
            + '<tr><td><b>Trapez</b></td><td>–</td><td>–</td><td>1 par</td></tr></table>'
            + '<p>Bemærk: Et kvadrat er også et rektangel (alle vinkler er 90°) og også en rombe (alle sider er lige lange). Navnene overlapper.</p>'
            + '<p><b>Vinkelsummen i en firkant er 360°.</b> Hvorfor? Tegn en diagonal – så er firkanten delt i to trekanter, og ' + m('2 · 180° = 360°') + '. På samme måde kan en femkant deles i 3 trekanter (540°) og en sekskant i 4 trekanter (720°).</p>',
          en: '<table><tr><th>Quadrilateral</th><th>Sides</th><th>Angles</th><th>Parallel sides</th></tr>'
            + '<tr><td><b>Square</b> (kvadrat)</td><td>all 4 equal</td><td>all 90°</td><td>2 pairs</td></tr>'
            + '<tr><td><b>Rectangle</b> (rektangel)</td><td>opposite sides equal</td><td>all 90°</td><td>2 pairs</td></tr>'
            + '<tr><td><b>Parallelogram</b></td><td>opposite sides equal</td><td>opposite angles equal</td><td>2 pairs</td></tr>'
            + '<tr><td><b>Rhombus</b> (rombe)</td><td>all 4 equal</td><td>opposite angles equal</td><td>2 pairs</td></tr>'
            + '<tr><td><b>Trapezium</b> (trapez)</td><td>–</td><td>–</td><td>1 pair</td></tr></table>'
            + '<p>Note: A square is also a rectangle (all angles 90°) and also a rhombus (all sides equal). The names overlap.</p>'
            + '<p><b>The angles of a quadrilateral add up to 360°.</b> Why? Draw a diagonal – the quadrilateral is split into two triangles, and ' + m('2 × 180° = 360°') + '. In the same way a pentagon can be split into 3 triangles (540°) and a hexagon into 4 triangles (720°).</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Find den manglende vinkel', en: 'Find the missing angle' },
        problem: { da: 'En trekant har vinklerne 50° og 60°. Hvor stor er den tredje vinkel? Og: En firkant har vinklerne 90°, 90° og 110°. Hvad er den fjerde?', en: 'A triangle has angles 50° and 60°. How big is the third angle? And: A quadrilateral has angles 90°, 90° and 110°. What is the fourth?' },
        steps: {
          da: [
            'Trekant: vinkelsum 180°. ' + m('50 + 60 = 110') + '. ' + m('180 − 110 = 70°') + '.',
            'Firkant: vinkelsum 360°. ' + m('90 + 90 + 110 = 290') + '. ' + m('360 − 290 = 70°') + '.'
          ],
          en: [
            'Triangle: angle sum 180°. ' + m('50 + 60 = 110') + '. ' + m('180 − 110 = 70°') + '.',
            'Quadrilateral: angle sum 360°. ' + m('90 + 90 + 110 = 290') + '. ' + m('360 − 290 = 70°') + '.'
          ]
        },
        answer: { da: '70° og 70°', en: '70° and 70°' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Er en vinkel på 95° spids, ret eller stump?', en: 'Is a 95° angle acute, right or obtuse?' }, a: { da: 'Stump (over 90°).', en: 'Obtuse (over 90°).' } },
          { q: { da: 'En trekant har vinklerne 90° og 35°. Find den tredje.', en: 'A triangle has angles 90° and 35°. Find the third.' }, a: { da: '55°. Og trekanten er retvinklet.', en: '55°. And the triangle is right-angled.' } },
          { q: { da: 'Kan en trekant have to rette vinkler? Forklar.', en: 'Can a triangle have two right angles? Explain.' }, a: { da: 'Nej. To rette vinkler er allerede 180°, så der er 0° til den tredje – det bliver ikke en trekant.', en: 'No. Two right angles already make 180°, leaving 0° for the third – it would not be a triangle.' } },
          { q: { da: 'Hvad hedder en trekant, hvor to sider er lige lange?', en: 'What is a triangle with two equal sides called?' }, a: { da: 'Ligebenet.', en: 'Isosceles (ligebenet).' } },
          { q: { da: 'Hvilke firkanter har fire rette vinkler?', en: 'Which quadrilaterals have four right angles?' }, a: { da: 'Rektangel og kvadrat (kvadratet er et særligt rektangel).', en: 'Rectangle and square (the square is a special rectangle).' } },
          { q: { da: 'Hvad er vinkelsummen i en sekskant?', en: 'What is the angle sum of a hexagon?' }, a: { da: '720°. En sekskant kan deles i 4 trekanter: ' + m('4 · 180°') + '.', en: '720°. A hexagon can be split into 4 triangles: ' + m('4 × 180°') + '.' } },
          { q: { da: 'En ligesidet trekant: hvor stor er hver vinkel?', en: 'An equilateral triangle: how big is each angle?' }, a: { da: '60° (' + m('180 : 3') + ').', en: '60° (' + m('180 ÷ 3') + ').' } }
        ]
      }
    ]
  };

  /* ================================================================
     10. Omkreds og areal
     ================================================================ */
  T['omkreds-areal'] = {
    title: { da: 'Omkreds og areal', en: 'Perimeter and area' },
    phase: [1, 2],
    summary: {
      da: 'Omkreds er vejen rundt om. Areal er, hvor meget flade der er indeni. Lær formlerne for rektangel, trekant og parallelogram – og hvorfor de virker.',
      en: 'Perimeter is the way round the outside. Area is how much surface is inside. Learn the formulas for rectangles, triangles and parallelograms – and why they work.'
    },
    goals: {
      da: [
        'Eleven kan anslå og bestemme omkreds og areal.',
        'Eleven har viden om forskellige metoder til at anslå og bestemme omkreds og areal, herunder metoder med digitale værktøjer.'
      ],
      en: [
        'The pupil can estimate and determine perimeter and area.',
        'The pupil has knowledge of different methods for estimating and determining perimeter and area, including methods with digital tools.'
      ]
    },
    terms: [
      { da: 'omkreds (O)', en: 'perimeter (P)', def: { da: 'Længden hele vejen rundt om figuren. Måles i cm, m …', en: 'The length all the way round the shape. Measured in cm, m …' } },
      { da: 'areal (A)', en: 'area (A)', def: { da: 'Størrelsen af fladen. Måles i cm², m² …', en: 'The size of the surface. Measured in cm², m² …' } },
      { da: 'grundlinje (g)', en: 'base (b)', def: { da: 'Den side, figuren „står på“', en: 'The side the shape "stands on"' } },
      { da: 'højde (h)', en: 'height (h)', def: { da: 'Afstanden fra grundlinjen op til toppen – vinkelret på grundlinjen', en: 'The distance from the base up to the top – perpendicular to the base' } },
      { da: 'kvadratcentimeter (cm²)', en: 'square centimetre (cm²)', def: { da: 'Et kvadrat på 1 cm × 1 cm', en: 'A square of 1 cm × 1 cm' } },
      { da: 'anslå', en: 'estimate', def: { da: 'Give et omtrentligt bud', en: 'Give a rough guess' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Omkreds: gå hele vejen rundt', en: 'Perimeter: walk all the way round' },
        body: {
          da: '<p><b>Omkredsen</b> er, hvor langt du går, hvis du går hele vejen rundt om figuren. Du finder den ved at <b>lægge alle siderne sammen</b>.</p>'
            + '<p>Rektangel med længde 5 cm og bredde 3 cm: ' + m('5 + 3 + 5 + 3 = 16') + ' cm. Som formel: ' + m('O = 2 · l + 2 · b') + '.</p>'
            + '<p>Kvadrat med siden 4 cm: ' + m('4 · 4 = 16') + ' cm. Trekant med siderne 3, 4 og 5 cm: ' + m('3 + 4 + 5 = 12') + ' cm.</p>'
            + '<p>Omkreds måles i <b>længdeenheder</b>: mm, cm, m, km.</p>',
          en: '<p>The <b>perimeter</b> is how far you walk if you go all the way round the shape. You find it by <b>adding all the sides</b>.</p>'
            + '<p>Rectangle with length 5 cm and width 3 cm: ' + m('5 + 3 + 5 + 3 = 16') + ' cm. As a formula: ' + m('P = 2 × l + 2 × w') + '.</p>'
            + '<p>Square with side 4 cm: ' + m('4 × 4 = 16') + ' cm. Triangle with sides 3, 4 and 5 cm: ' + m('3 + 4 + 5 = 12') + ' cm.</p>'
            + '<p>Perimeter is measured in <b>length units</b>: mm, cm, m, km.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Areal: tæl kvadraterne', en: 'Area: count the squares' },
        body: {
          da: '<p><b>Arealet</b> er, hvor meget flade der er inde i figuren. Vi måler det ved at tælle, hvor mange <b>enhedskvadrater</b> (fx 1 cm × 1 cm) der kan ligge inde i figuren.</p>'
            + '<p>I et rektangel på 5 cm × 3 cm ligger kvadraterne i 3 rækker med 5 i hver: ' + m('3 · 5 = 15') + ' kvadrater. Derfor er formlen ' + m('A = l · b') + ' – det er bare en hurtig måde at tælle kvadrater på.</p>'
            + '<p>Areal måles i <b>kvadrat-enheder</b>: cm², m², km². (Læs mere om det lille 2-tal under <a href="#/potenser-pi">Potenser</a>.)</p>',
          en: '<p>The <b>area</b> is how much surface there is inside the shape. We measure it by counting how many <b>unit squares</b> (e.g. 1 cm × 1 cm) fit inside.</p>'
            + '<p>In a 5 cm × 3 cm rectangle the squares lie in 3 rows of 5: ' + m('3 × 5 = 15') + ' squares. That is why the formula is ' + m('A = l × w') + ' – it is just a fast way of counting squares.</p>'
            + '<p>Area is measured in <b>square units</b>: cm², m², km². (Read more about the little 2 under <a href="#/potenser-pi">Powers</a>.)</p>'
        }
      },
      {
        type: 'fig',
        svg: '<svg viewBox="0 0 560 190" width="560" height="190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">'
          + '<g transform="translate(48,30)">'
          + (function () { var s = ''; for (var r = 0; r < 3; r++) for (var c = 0; c < 5; c++) s += '<rect x="' + (c * 30) + '" y="' + (r * 30) + '" width="30" height="30" fill="' + GS + '" stroke="' + G + '" stroke-width="1.5"/>'; return s; })()
          + '<text x="75" y="112" text-anchor="middle">5 cm</text><text x="-8" y="50" text-anchor="end">3 cm</text>'
          + '<text x="75" y="135" text-anchor="middle">A = 5 · 3 = 15 cm²</text><text x="75" y="155" text-anchor="middle">O = 5 + 3 + 5 + 3 = 16 cm</text></g>'
          + '<g transform="translate(260,30)">'
          + '<rect x="0" y="0" width="120" height="90" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/>'
          + '<polygon points="0,90 120,90 120,0" fill="' + GS2 + '" stroke="' + G + '" stroke-width="2"/>'
          + '<text x="60" y="112" text-anchor="middle">g = 4</text><text x="-8" y="50" text-anchor="end">h = 3</text>'
          + '<text x="60" y="135" text-anchor="middle">Trekant = ½ rektangel</text><text x="60" y="155" text-anchor="middle">A = ½ · 4 · 3 = 6</text></g>'
          + '<g transform="translate(430,30)">'
          + '<polygon points="30,0 120,0 90,90 0,90" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/>'
          + '<polygon points="0,90 30,0 30,90" fill="' + GS2 + '" stroke="' + G + '" stroke-width="2" stroke-dasharray="4 3"/>'
          + '<line x1="30" y1="0" x2="30" y2="90" stroke="' + G + '" stroke-width="1.5" stroke-dasharray="4 3"/>'
          + '<text x="60" y="112" text-anchor="middle">g = 3</text>'
          + '<text x="60" y="135" text-anchor="middle">Flyt trekanten →</text><text x="60" y="155" text-anchor="middle">A = g · h = 3 · 3 = 9</text></g>'
          + '</svg>',
        caption: { da: 'Rektanglet tælles i kvadrater. Trekanten er halvdelen af et rektangel. Parallelogrammet kan laves om til et rektangel.', en: 'The rectangle is counted in squares. The triangle is half a rectangle. The parallelogram can be turned into a rectangle.' }
      },
      {
        type: 'text',
        title: { da: 'Trekant og parallelogram – hvorfor formlerne virker', en: 'Triangle and parallelogram – why the formulas work' },
        body: {
          da: '<p>Undervisningsvejledningen forklarer arealformler sådan her (med figurer på et sømbræt):</p>'
            + '<ul><li><b>En retvinklet trekant er altid halvdelen af et rektangel.</b> Tegn rektanglet færdigt, og du kan se, at trekanten fylder præcis halvdelen. Derfor: ' + m('A = ½ · g · h') + ' (grundlinje gange højde, delt med 2).</li>'
            + '<li><b>Et parallelogram kan altid laves om til et rektangel med samme areal.</b> Klip en trekant af den ene ende, og sæt den på den anden ende. Derfor: ' + m('A = g · h') + '. Bemærk: h er den <i>lodrette</i> højde – ikke den skrå side!</li>'
            + '<li><b>Enhver trekant er halvdelen af et parallelogram.</b> Så ' + m('A = ½ · g · h') + ' gælder for <i>alle</i> trekanter, ikke kun de retvinklede.</li></ul>'
            + '<p>Det er vigtigere at forstå <i>hvorfor</i> end at huske formlen udenad. Hvis du glemmer formlen, kan du altid finde den igen ved at tegne.</p>',
          en: '<p>The Ministry\'s teaching guide explains area formulas like this (with shapes on a geoboard):</p>'
            + '<ul><li><b>A right-angled triangle is always half of a rectangle.</b> Complete the rectangle and you can see the triangle fills exactly half. Therefore: ' + m('A = ½ × b × h') + ' (base times height, divided by 2).</li>'
            + '<li><b>A parallelogram can always be turned into a rectangle with the same area.</b> Cut a triangle off one end and attach it to the other end. Therefore: ' + m('A = b × h') + '. Note: h is the <i>vertical</i> height – not the slanted side!</li>'
            + '<li><b>Any triangle is half of a parallelogram.</b> So ' + m('A = ½ × b × h') + ' works for <i>all</i> triangles, not just right-angled ones.</li></ul>'
            + '<p>Understanding <i>why</i> matters more than memorising the formula. If you forget the formula, you can always find it again by drawing.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Sammensat figur', en: 'Composite shape' },
        problem: { da: 'En L-formet have består af et rektangel på 8 m × 5 m og et rektangel på 4 m × 3 m, der sidder sammen. Hvad er arealet?', en: 'An L-shaped garden is made of an 8 m × 5 m rectangle and a 4 m × 3 m rectangle joined together. What is the area?' },
        steps: {
          da: [
            'Del figuren op i rektangler, du kan regne på.',
            'Første rektangel: ' + m('8 · 5 = 40') + ' m².',
            'Andet rektangel: ' + m('4 · 3 = 12') + ' m².',
            'Læg sammen: ' + m('40 + 12 = 52') + ' m².',
            'Læseplanen nævner netop „enkle figurer, der kan opdeles i trekanter“ – samme idé: del op, regn hver del, læg sammen.'
          ],
          en: [
            'Split the shape into rectangles you can calculate.',
            'First rectangle: ' + m('8 × 5 = 40') + ' m².',
            'Second rectangle: ' + m('4 × 3 = 12') + ' m².',
            'Add: ' + m('40 + 12 = 52') + ' m².',
            'The Danish curriculum mentions "simple shapes that can be split into triangles" – same idea: split, calculate each part, add up.'
          ]
        },
        answer: { da: '52 m²', en: '52 m²' }
      },
      {
        type: 'example',
        title: { da: 'Anslå areal', en: 'Estimate an area' },
        problem: { da: 'Et værelse er 3,9 m langt og 5,1 m bredt. Cirka hvor mange kvadratmeter er det?', en: 'A room is 3.9 m long and 5.1 m wide. Roughly how many square metres is it?' },
        steps: {
          da: ['Rund af: 3,9 ≈ 4 og 5,1 ≈ 5.', m('4 · 5 = 20') + ' m². (Præcist: 19,89 m² – overslaget er rigtig godt.)'],
          en: ['Round: 3.9 ≈ 4 and 5.1 ≈ 5.', m('4 × 5 = 20') + ' m². (Exactly: 19.89 m² – the estimate is very good.)']
        },
        answer: { da: 'ca. 20 m²', en: 'about 20 m²' }
      },
      {
        type: 'tip',
        body: {
          da: '<p><b>Omkreds og areal er to forskellige ting.</b> Et rektangel på 4 × 4 har omkreds 16 og areal 16. Et rektangel på 2 × 6 har <i>også</i> omkreds 16 – men areal 12. Samme omkreds, forskelligt areal!</p>',
          en: '<p><b>Perimeter and area are two different things.</b> A 4 × 4 rectangle has perimeter 16 and area 16. A 2 × 6 rectangle <i>also</i> has perimeter 16 – but area 12. Same perimeter, different area!</p>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Et rektangel er 9 cm langt og 4 cm bredt. Find omkreds og areal.', en: 'A rectangle is 9 cm long and 4 cm wide. Find the perimeter and area.' }, a: { da: 'O = 26 cm, A = 36 cm².', en: 'P = 26 cm, A = 36 cm².' } },
          { q: { da: 'Et kvadrat har omkredsen 20 cm. Hvad er arealet?', en: 'A square has perimeter 20 cm. What is the area?' }, a: { da: 'Siden er ' + m('20 : 4 = 5') + ' cm, så A = 25 cm².', en: 'The side is ' + m('20 ÷ 4 = 5') + ' cm, so A = 25 cm².' } },
          { q: { da: 'En trekant har grundlinjen 10 cm og højden 6 cm. Find arealet.', en: 'A triangle has base 10 cm and height 6 cm. Find the area.' }, a: { da: '30 cm² (' + m('½ · 10 · 6') + ').', en: '30 cm² (' + m('½ × 10 × 6') + ').' } },
          { q: { da: 'Et parallelogram har grundlinjen 7 cm, den skrå side er 5 cm, og højden er 4 cm. Find arealet.', en: 'A parallelogram has base 7 cm, slanted side 5 cm and height 4 cm. Find the area.' }, a: { da: '28 cm² (' + m('7 · 4') + '). Den skrå side bruges ikke til areal – kun til omkreds.', en: '28 cm² (' + m('7 × 4') + '). The slanted side is not used for area – only for perimeter.' } },
          { q: { da: 'En fodboldbane er ca. 100 m × 64 m. Anslå arealet.', en: 'A football pitch is about 100 m × 64 m. Estimate the area.' }, a: { da: 'Ca. ' + m('100 · 60 = 6.000') + ' m² (præcist 6.400 m²).', en: 'About ' + m('100 × 60 = 6,000') + ' m² (exactly 6,400 m²).' } },
          { q: { da: 'Tegn (eller forestil dig) et rektangel med areal 24 cm². Hvilke længder og bredder kan det have, hvis siderne er hele tal?', en: 'Draw (or imagine) a rectangle with area 24 cm². What lengths and widths can it have, if the sides are whole numbers?' }, a: { da: '1 × 24, 2 × 12, 3 × 8, 4 × 6. De har alle areal 24 – men forskellige omkredse (50, 28, 22, 20).', en: '1 × 24, 2 × 12, 3 × 8, 4 × 6. They all have area 24 – but different perimeters (50, 28, 22, 20).' } }
        ]
      }
    ]
  };

  /* ================================================================
     11. Cirkler
     ================================================================ */
  T['cirkler'] = {
    title: { da: 'Cirkler', en: 'Circles' },
    phase: [3],
    summary: {
      da: 'Radius, diameter og det magiske tal π. Sådan finder du omkreds og areal af en cirkel.',
      en: 'Radius, diameter and the magic number π. How to find the circumference and area of a circle.'
    },
    goals: {
      da: [
        'Eleven kan bestemme omkreds og areal af cirkler.',
        'Eleven har viden om metoder til at bestemme omkreds og areal af cirkler.'
      ],
      en: [
        'The pupil can determine the circumference and area of circles.',
        'The pupil has knowledge of methods for determining the circumference and area of circles.'
      ]
    },
    terms: [
      { da: 'centrum', en: 'centre', def: { da: 'Midtpunktet af cirklen', en: 'The middle point of the circle' } },
      { da: 'radius (r)', en: 'radius (r)', def: { da: 'Afstanden fra centrum ud til cirklen', en: 'The distance from the centre to the circle' } },
      { da: 'diameter (d)', en: 'diameter (d)', def: { da: 'Tværs over cirklen gennem centrum. d = 2 · r', en: 'Straight across through the centre. d = 2 × r' } },
      { da: 'omkreds (O)', en: 'circumference (C)', def: { da: 'Længden rundt om cirklen', en: 'The length around the circle' } },
      { da: 'pi (π)', en: 'pi (π)', def: { da: 'Omkreds : diameter ≈ 3,14 for alle cirkler', en: 'Circumference ÷ diameter ≈ 3.14 for every circle' } },
      { da: 'passer', en: 'compasses', def: { da: 'Redskab til at tegne cirkler', en: 'Tool for drawing circles' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Cirklens dele', en: 'Parts of a circle' },
        body: {
          da: '<p>En cirkel er alle de punkter, der har <i>samme afstand</i> til et midtpunkt – <b>centrum</b>. Den afstand kaldes <b>radius</b>. Når du tegner med en passer, er afstanden mellem passerens ben radius.</p>'
            + '<p><b>Diameteren</b> går tværs over cirklen gennem centrum. Den er dobbelt så lang som radius: ' + m('d = 2 · r') + '. Har cirklen radius 4 cm, er diameteren 8 cm.</p>',
          en: '<p>A circle is all the points that have the <i>same distance</i> to a middle point – the <b>centre</b>. That distance is called the <b>radius</b>. When you draw with compasses, the distance between the legs is the radius.</p>'
            + '<p>The <b>diameter</b> goes straight across the circle through the centre. It is twice as long as the radius: ' + m('d = 2 × r') + '. If the circle has radius 4 cm, the diameter is 8 cm.</p>'
        }
      },
      {
        type: 'fig',
        svg: '<svg viewBox="0 0 300 220" width="300" height="220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="14" fill="currentColor">'
          + '<circle cx="150" cy="110" r="85" fill="' + GS + '" stroke="' + G + '" stroke-width="3"/>'
          + '<circle cx="150" cy="110" r="4" fill="' + G + '"/>'
          + '<line x1="150" y1="110" x2="235" y2="110" stroke="' + G + '" stroke-width="2.5"/><text x="195" y="102" text-anchor="middle">r</text>'
          + '<line x1="90" y1="170" x2="210" y2="50" stroke="#1c2430" stroke-width="2" stroke-dasharray="5 4"/><text x="120" y="70" text-anchor="middle">d</text>'
          + '<text x="150" y="130" text-anchor="middle" font-size="12">centrum</text>'
          + '<text x="150" y="213" text-anchor="middle">O = π · d</text>'
          + '</svg>',
        caption: { da: 'Radius (r), diameter (d) og omkreds (O).', en: 'Radius (r), diameter (d) and circumference.' }
      },
      {
        type: 'text',
        title: { da: 'Omkreds: undersøg selv, hvor π kommer fra', en: 'Circumference: find out for yourself where π comes from' },
        body: {
          da: '<p>Læseplanen foreslår, at π introduceres ved at <i>undersøge forholdet mellem omkreds og diameter</i>. Prøv det:</p>'
            + '<ol><li>Find nogle runde ting: en kop, et låg, en cykel, en tallerken.</li><li>Mål omkredsen med en snor eller et målebånd.</li><li>Mål diameteren med en lineal.</li><li>Regn ' + m('omkreds : diameter') + ' ud med lommeregner.</li></ol>'
            + '<p>Du får cirka 3,1 hver gang – lidt over 3. Jo mere præcist du måler, jo tættere kommer du på <b>3,14</b>. Det tal er <b>π</b> (pi).</p>'
            + '<p class="big">' + m('O = π · d') + ' &nbsp; eller &nbsp; ' + m('O = 2 · π · r') + '</p>'
            + '<p>Hurtigt overslag: omkredsen er lidt mere end 3 gange diameteren.</p>',
          en: '<p>The Danish curriculum suggests introducing π by <i>investigating the ratio between circumference and diameter</i>. Try it:</p>'
            + '<ol><li>Find some round things: a cup, a lid, a bicycle wheel, a plate.</li><li>Measure the circumference with a string or tape measure.</li><li>Measure the diameter with a ruler.</li><li>Calculate ' + m('circumference ÷ diameter') + ' on a calculator.</li></ol>'
            + '<p>You get about 3.1 every time – a bit more than 3. The more accurately you measure, the closer you get to <b>3.14</b>. That number is <b>π</b> (pi).</p>'
            + '<p class="big">' + m('C = π × d') + ' &nbsp; or &nbsp; ' + m('C = 2 × π × r') + '</p>'
            + '<p>Quick estimate: the circumference is a bit more than 3 times the diameter.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Cykelhjul', en: 'Bicycle wheel' },
        problem: { da: 'Et cykelhjul har diameteren 70 cm. Hvor langt kører cyklen, når hjulet drejer én omgang?', en: 'A bicycle wheel has diameter 70 cm. How far does the bike travel when the wheel turns once?' },
        steps: {
          da: [
            'Én omgang = hjulets omkreds.',
            m('O = π · d = 3,14 · 70 ≈ 220') + ' cm.',
            'Det er cirka 2,2 m. Overslag: 3 · 70 = 210, så 220 er rimeligt.'
          ],
          en: [
            'One turn = the circumference of the wheel.',
            m('C = π × d = 3.14 × 70 ≈ 220') + ' cm.',
            'That is about 2.2 m. Estimate: 3 × 70 = 210, so 220 is reasonable.'
          ]
        },
        answer: { da: 'ca. 220 cm = 2,2 m', en: 'about 220 cm = 2.2 m' }
      },
      {
        type: 'text',
        title: { da: 'Areal af en cirkel', en: 'Area of a circle' },
        body: {
          da: '<p class="big">' + m('A = π · r · r = π · r²') + '</p>'
            + '<p>Bemærk: det er <b>radius</b>, der bruges – ikke diameteren! Det er den mest almindelige fejl. Får du diameteren oplyst, så halvér den først.</p>'
            + '<p>Cirkel med radius 5 cm: ' + m('A = 3,14 · 5 · 5 = 3,14 · 25 = 78,5') + ' cm².</p>'
            + '<p>Hvorfor cirka? Tegn et kvadrat med siden r i hvert „hjørne“ af cirklen – der er plads til lidt mere end 3 af dem inde i cirklen. Så arealet er lidt mere end ' + m('3 · r²') + '.</p>',
          en: '<p class="big">' + m('A = π × r × r = π × r²') + '</p>'
            + '<p>Note: it is the <b>radius</b> that is used – not the diameter! That is the most common mistake. If you are given the diameter, halve it first.</p>'
            + '<p>Circle with radius 5 cm: ' + m('A = 3.14 × 5 × 5 = 3.14 × 25 = 78.5') + ' cm².</p>'
            + '<p>Why roughly? Draw a square with side r in each "corner" of the circle – a bit more than 3 of them fit inside the circle. So the area is a bit more than ' + m('3 × r²') + '.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Pizza', en: 'Pizza' },
        problem: { da: 'En pizza har diameteren 30 cm. Hvad er dens areal?', en: 'A pizza has diameter 30 cm. What is its area?' },
        steps: {
          da: [
            'Find radius først: ' + m('r = 30 : 2 = 15') + ' cm.',
            m('A = π · r² = 3,14 · 15 · 15 = 3,14 · 225 = 706,5') + ' cm².',
            'Overslag: ' + m('3 · 225 = 675') + '. Passer.'
          ],
          en: [
            'Find the radius first: ' + m('r = 30 ÷ 2 = 15') + ' cm.',
            m('A = π × r² = 3.14 × 15 × 15 = 3.14 × 225 = 706.5') + ' cm².',
            'Estimate: ' + m('3 × 225 = 675') + '. Fits.'
          ]
        },
        answer: { da: 'ca. 706,5 cm² (≈ 707 cm²)', en: 'about 706.5 cm² (≈ 707 cm²)' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'En cirkel har radius 6 cm. Hvad er diameteren?', en: 'A circle has radius 6 cm. What is the diameter?' }, a: { da: '12 cm', en: '12 cm' } },
          { q: { da: 'En cirkel har diameteren 20 cm. Find omkredsen (brug π ≈ 3,14).', en: 'A circle has diameter 20 cm. Find the circumference (use π ≈ 3.14).' }, a: { da: '62,8 cm', en: '62.8 cm' } },
          { q: { da: 'En cirkel har radius 10 cm. Find omkreds og areal.', en: 'A circle has radius 10 cm. Find the circumference and area.' }, a: { da: 'O = ' + m('2 · 3,14 · 10 = 62,8') + ' cm. A = ' + m('3,14 · 100 = 314') + ' cm².', en: 'C = ' + m('2 × 3.14 × 10 = 62.8') + ' cm. A = ' + m('3.14 × 100 = 314') + ' cm².' } },
          { q: { da: 'En rund bordplade har diameteren 1,2 m. Hvad er arealet?', en: 'A round table top has diameter 1.2 m. What is the area?' }, a: { da: 'r = 0,6 m. ' + m('A = 3,14 · 0,6 · 0,6 = 3,14 · 0,36 ≈ 1,13') + ' m².', en: 'r = 0.6 m. ' + m('A = 3.14 × 0.6 × 0.6 = 3.14 × 0.36 ≈ 1.13') + ' m².' } },
          { q: { da: 'Du måler en dåse: omkreds 26 cm, diameter 8,3 cm. Hvad får du, når du dividerer? Hvad viser det?', en: 'You measure a tin: circumference 26 cm, diameter 8.3 cm. What do you get when you divide? What does it show?' }, a: { da: m('26 : 8,3 ≈ 3,13') + ' – tæt på π. Målinger er aldrig helt præcise, men forholdet er altid omkring 3,14.', en: m('26 ÷ 8.3 ≈ 3.13') + ' – close to π. Measurements are never perfectly exact, but the ratio is always around 3.14.' } },
          { q: { da: 'Hvilken er størst: en pizza med diameter 30 cm eller to pizzaer med diameter 20 cm?', en: 'Which is bigger: one pizza of diameter 30 cm or two pizzas of diameter 20 cm?' }, a: { da: 'Den store: ' + m('3,14 · 15² ≈ 707') + ' cm². De to små: ' + m('2 · 3,14 · 10² ≈ 628') + ' cm². Arealet vokser hurtigere end diameteren.', en: 'The big one: ' + m('3.14 × 15² ≈ 707') + ' cm². The two small ones: ' + m('2 × 3.14 × 10² ≈ 628') + ' cm². Area grows faster than the diameter.' } }
        ]
      }
    ]
  };

  /* ================================================================
     12. Rumlige figurer og rumfang
     ================================================================ */
  T['rumlige-figurer'] = {
    title: { da: 'Rumlige figurer og rumfang', en: '3D shapes and volume' },
    phase: [2, 3],
    summary: {
      da: 'Kasser, terninger, prismer, cylindre og pyramider. Tæl sideflader, kanter og hjørner, fold udfoldninger – og regn rumfang ud.',
      en: 'Boxes, cubes, prisms, cylinders and pyramids. Count faces, edges and vertices, fold nets – and calculate volume.'
    },
    goals: {
      da: [
        'Eleven kan undersøge geometriske egenskaber ved rumlige figurer.',
        'Eleven har viden om polyedre og cylindere.',
        'Eleven kan anslå og bestemme rumfang.',
        'Eleven har viden om metoder til at anslå og bestemme rumfang.'
      ],
      en: [
        'The pupil can investigate geometric properties of solid figures.',
        'The pupil has knowledge of polyhedra and cylinders.',
        'The pupil can estimate and determine volume.',
        'The pupil has knowledge of methods for estimating and determining volume.'
      ]
    },
    terms: [
      { da: 'rumlig figur', en: '3D shape (solid)', def: { da: 'En figur, der fylder i rummet – har længde, bredde og højde', en: 'A shape that takes up space – has length, width and height' } },
      { da: 'polyeder', en: 'polyhedron', def: { da: 'En rumlig figur, hvor alle sideflader er flade polygoner', en: 'A solid where all faces are flat polygons' } },
      { da: 'sideflade', en: 'face', def: { da: 'En flad side på figuren', en: 'A flat side of the shape' } },
      { da: 'kant', en: 'edge', def: { da: 'Linjen, hvor to sideflader mødes', en: 'The line where two faces meet' } },
      { da: 'hjørne', en: 'vertex (corner)', def: { da: 'Punktet, hvor kanter mødes', en: 'The point where edges meet' } },
      { da: 'kasse', en: 'cuboid (box)', def: { da: 'Rumlig figur med 6 rektangulære sideflader', en: 'Solid with 6 rectangular faces' } },
      { da: 'terning', en: 'cube', def: { da: 'Kasse, hvor alle 6 sideflader er kvadrater', en: 'Box where all 6 faces are squares' } },
      { da: 'prisme', en: 'prism', def: { da: 'Samme tværsnit hele vejen igennem – som en toblerone', en: 'Same cross-section all the way through – like a Toblerone' } },
      { da: 'udfoldning', en: 'net', def: { da: 'Figuren klippet op og foldet ud, så den ligger fladt', en: 'The shape cut open and unfolded so it lies flat' } },
      { da: 'rumfang (V)', en: 'volume (V)', def: { da: 'Hvor meget plads figuren fylder. Måles i cm³, m³, liter', en: 'How much space the shape takes up. Measured in cm³, m³, litres' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Kend figurerne', en: 'Know the shapes' },
        body: {
          da: '<table><tr><th>Figur</th><th>Sideflader</th><th>Kanter</th><th>Hjørner</th><th>Hverdagseksempel</th></tr>'
            + '<tr><td><b>Terning</b></td><td>6 kvadrater</td><td>12</td><td>8</td><td>en spilleterning</td></tr>'
            + '<tr><td><b>Kasse</b></td><td>6 rektangler</td><td>12</td><td>8</td><td>en skotøjsæske</td></tr>'
            + '<tr><td><b>Trekantet prisme</b></td><td>2 trekanter + 3 rektangler = 5</td><td>9</td><td>6</td><td>en toblerone-pakke</td></tr>'
            + '<tr><td><b>Firkantet pyramide</b></td><td>1 kvadrat + 4 trekanter = 5</td><td>8</td><td>5</td><td>pyramiderne i Egypten</td></tr>'
            + '<tr><td><b>Cylinder</b></td><td>2 cirkler + 1 buet flade</td><td>–</td><td>–</td><td>en dåse</td></tr>'
            + '<tr><td><b>Kegle</b></td><td>1 cirkel + 1 buet flade</td><td>–</td><td>1 spids</td><td>en vaffelis</td></tr>'
            + '<tr><td><b>Kugle</b></td><td>1 buet flade</td><td>–</td><td>–</td><td>en bold</td></tr></table>'
            + '<p>Figurer, der <b>kun</b> har flade sideflader, kaldes <b>polyedre</b> (terning, kasse, prisme, pyramide). Cylinder, kegle og kugle har buede flader og er derfor ikke polyedre.</p>'
            + '<p>En terning er et <b>regulært polyeder</b>: alle sideflader er ens (kvadrater), og alle hjørner ser ens ud. Læseplanen nævner, at man sidst på mellemtrinnet undersøger regulære polyedre og deres udfoldninger.</p>',
          en: '<table><tr><th>Shape</th><th>Faces</th><th>Edges</th><th>Vertices</th><th>Everyday example</th></tr>'
            + '<tr><td><b>Cube</b> (terning)</td><td>6 squares</td><td>12</td><td>8</td><td>a dice</td></tr>'
            + '<tr><td><b>Cuboid</b> (kasse)</td><td>6 rectangles</td><td>12</td><td>8</td><td>a shoebox</td></tr>'
            + '<tr><td><b>Triangular prism</b></td><td>2 triangles + 3 rectangles = 5</td><td>9</td><td>6</td><td>a Toblerone box</td></tr>'
            + '<tr><td><b>Square pyramid</b></td><td>1 square + 4 triangles = 5</td><td>8</td><td>5</td><td>the pyramids of Egypt</td></tr>'
            + '<tr><td><b>Cylinder</b></td><td>2 circles + 1 curved surface</td><td>–</td><td>–</td><td>a tin</td></tr>'
            + '<tr><td><b>Cone</b> (kegle)</td><td>1 circle + 1 curved surface</td><td>–</td><td>1 apex</td><td>an ice cream cone</td></tr>'
            + '<tr><td><b>Sphere</b> (kugle)</td><td>1 curved surface</td><td>–</td><td>–</td><td>a ball</td></tr></table>'
            + '<p>Shapes with <b>only</b> flat faces are called <b>polyhedra</b> (cube, cuboid, prism, pyramid). Cylinder, cone and sphere have curved surfaces and are therefore not polyhedra.</p>'
            + '<p>A cube is a <b>regular polyhedron</b>: all faces are identical (squares) and all vertices look the same. The curriculum mentions investigating regular polyhedra and their nets at the end of grade 6.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Udfoldninger', en: 'Nets' },
        body: {
          da: '<p>Klipper du en æske op langs kanterne og folder den ud, får du en <b>udfoldning</b>. En terning folder ud til 6 kvadrater – fx i et kors. Men ikke alle måder at lægge 6 kvadrater på kan foldes til en terning! Prøv selv med papir: Hvilke af dine tegninger virker?</p>'
            + '<p>Udfoldningen viser også, hvor meget papir der skal til for at lave æsken (overfladens areal).</p>',
          en: '<p>If you cut a box open along its edges and unfold it, you get a <b>net</b>. A cube unfolds into 6 squares – for example in a cross. But not every way of arranging 6 squares can be folded into a cube! Try it with paper: which of your drawings work?</p>'
            + '<p>The net also shows how much paper is needed to make the box (the surface area).</p>'
        }
      },
      {
        type: 'fig',
        svg: '<svg viewBox="0 0 520 200" width="520" height="200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">'
          + '<g transform="translate(20,10)">'
          + (function () { var s = ''; var cells = [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2], [1, 3]]; cells.forEach(function (c) { s += '<rect x="' + (c[0] * 42) + '" y="' + (c[1] * 42) + '" width="42" height="42" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/>'; }); return s; })()
          + '<text x="63" y="190" text-anchor="middle">udfoldning · net</text></g>'
          + '<g transform="translate(200,20)"><text x="40" y="70" font-size="26">→</text></g>'
          + '<g transform="translate(300,40)">'
          + '<rect x="0" y="40" width="90" height="90" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/>'
          + '<polygon points="0,40 35,5 125,5 90,40" fill="' + GS2 + '" stroke="' + G + '" stroke-width="2"/>'
          + '<polygon points="90,40 125,5 125,95 90,130" fill="#6cc39c" stroke="' + G + '" stroke-width="2"/>'
          + '<text x="62" y="160" text-anchor="middle">terning · cube</text></g>'
          + '</svg>',
        caption: { da: 'Seks kvadrater i et kors kan foldes til en terning.', en: 'Six squares in a cross can be folded into a cube.' }
      },
      {
        type: 'text',
        title: { da: 'Rumfang: tæl terningerne', en: 'Volume: count the cubes' },
        body: {
          da: '<p><b>Rumfang</b> er, hvor meget plads en figur fylder. Ligesom areal tælles i kvadrater, tælles rumfang i <b>enhedsterninger</b> – fx centicubes på 1 cm × 1 cm × 1 cm = 1 cm³.</p>'
            + '<p>Byg en kasse af centicubes: 4 lange, 3 brede og 2 høje. I det nederste lag ligger ' + m('4 · 3 = 12') + ' terninger. Der er 2 lag: ' + m('12 · 2 = 24') + ' terninger. Rumfanget er 24 cm³.</p>'
            + '<p class="big">' + m('V = l · b · h') + '</p>'
            + '<p>Læseplanen siger, at eleverne skal nå frem til at kunne „formulere en generel metode til at beregne rumfanget af en kasse ud fra kassens sidelængder“ – og det er præcis denne formel: længde gange bredde giver bunden, og gange højden giver antallet af lag.</p>'
            + '<p>Rumfang måles i <b>kubik-enheder</b>: cm³, dm³, m³.</p>',
          en: '<p><b>Volume</b> is how much space a shape takes up. Just as area is counted in squares, volume is counted in <b>unit cubes</b> – e.g. centicubes of 1 cm × 1 cm × 1 cm = 1 cm³.</p>'
            + '<p>Build a box from centicubes: 4 long, 3 wide and 2 high. The bottom layer has ' + m('4 × 3 = 12') + ' cubes. There are 2 layers: ' + m('12 × 2 = 24') + ' cubes. The volume is 24 cm³.</p>'
            + '<p class="big">' + m('V = l × w × h') + '</p>'
            + '<p>The Danish curriculum says pupils should be able to "formulate a general method for calculating the volume of a box from its side lengths" – and that is exactly this formula: length times width gives the bottom, and times the height gives the number of layers.</p>'
            + '<p>Volume is measured in <b>cubic units</b>: cm³, dm³, m³.</p>'
        }
      },
      {
        type: 'fig',
        svg: '<svg viewBox="0 0 360 190" width="360" height="190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">'
          + '<g transform="translate(60,30)">'
          + (function () { var s = ''; var u = 34, dx = 14, dy = -10; for (var z = 0; z < 2; z++) for (var y = 2; y >= 0; y--) for (var x = 0; x < 4; x++) { var ox = x * u + y * dx, oy = (1 - z) * u + (2 - y) * -dy + 40; s += '<rect x="' + ox + '" y="' + oy + '" width="' + u + '" height="' + u + '" fill="' + GS + '" stroke="' + G + '" stroke-width="1.5"/>'; s += '<polygon points="' + ox + ',' + oy + ' ' + (ox + dx) + ',' + (oy + dy) + ' ' + (ox + u + dx) + ',' + (oy + dy) + ' ' + (ox + u) + ',' + oy + '" fill="' + GS2 + '" stroke="' + G + '" stroke-width="1.5"/>'; s += '<polygon points="' + (ox + u) + ',' + oy + ' ' + (ox + u + dx) + ',' + (oy + dy) + ' ' + (ox + u + dx) + ',' + (oy + dy + u) + ' ' + (ox + u) + ',' + (oy + u) + '" fill="#6cc39c" stroke="' + G + '" stroke-width="1.5"/>'; } return s; })()
          + '<text x="70" y="150" text-anchor="middle">l = 4</text><text x="215" y="120" text-anchor="start">b = 3</text><text x="-10" y="80" text-anchor="end">h = 2</text>'
          + '</g><text x="180" y="182" text-anchor="middle">V = 4 · 3 · 2 = 24 cm³</text></svg>',
        caption: { da: 'En kasse bygget af 24 centicubes: 2 lag med 12 i hvert.', en: 'A box built from 24 centicubes: 2 layers of 12.' }
      },
      {
        type: 'example',
        title: { da: 'Skotøjsæske', en: 'Shoebox' },
        problem: { da: 'En skotøjsæske er 30 cm lang, 20 cm bred og 12 cm høj. Hvad er rumfanget?', en: 'A shoebox is 30 cm long, 20 cm wide and 12 cm high. What is the volume?' },
        steps: {
          da: [m('V = 30 · 20 · 12') + '.', m('30 · 20 = 600') + ', og ' + m('600 · 12 = 7.200') + ' cm³.', 'Overslag: ' + m('30 · 20 · 10 = 6.000') + ' – 7.200 er rimeligt.'],
          en: [m('V = 30 × 20 × 12') + '.', m('30 × 20 = 600') + ', and ' + m('600 × 12 = 7,200') + ' cm³.', 'Estimate: ' + m('30 × 20 × 10 = 6,000') + ' – 7,200 is reasonable.']
        },
        answer: { da: '7.200 cm³', en: '7,200 cm³' }
      },
      {
        type: 'text',
        title: { da: 'Liter og kubikcentimeter', en: 'Litres and cubic centimetres' },
        body: {
          da: '<p>Væsker måles i liter. Sammenhængen med rumfang er:</p>'
            + '<p class="big">' + m('1 L = 1 dm³ = 1.000 cm³') + '</p>'
            + '<p>En terning på 10 cm × 10 cm × 10 cm rummer præcis 1 liter. Og ' + m('1 m³ = 1.000 L') + '.</p>'
            + '<p>Eksempel: Et akvarium er 50 cm × 30 cm × 40 cm. ' + m('V = 50 · 30 · 40 = 60.000') + ' cm³ = <b>60 liter</b>.</p>'
            + '<p><b>Prismer</b> virker på samme måde som kasser: rumfang = <i>grundfladens areal · højden</i>. En kasse er bare et prisme med rektangulær bund. (Samme idé virker for en cylinder med cirkelbund.)</p>',
          en: '<p>Liquids are measured in litres. The link to volume is:</p>'
            + '<p class="big">' + m('1 L = 1 dm³ = 1,000 cm³') + '</p>'
            + '<p>A cube of 10 cm × 10 cm × 10 cm holds exactly 1 litre. And ' + m('1 m³ = 1,000 L') + '.</p>'
            + '<p>Example: An aquarium is 50 cm × 30 cm × 40 cm. ' + m('V = 50 × 30 × 40 = 60,000') + ' cm³ = <b>60 litres</b>.</p>'
            + '<p><b>Prisms</b> work the same way as boxes: volume = <i>area of the base × height</i>. A box is just a prism with a rectangular base. (The same idea works for a cylinder with a circular base.)</p>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Hvor mange sideflader, kanter og hjørner har en kasse?', en: 'How many faces, edges and vertices does a cuboid have?' }, a: { da: '6 sideflader, 12 kanter, 8 hjørner.', en: '6 faces, 12 edges, 8 vertices.' } },
          { q: { da: 'En terning har siden 4 cm. Find rumfanget.', en: 'A cube has side 4 cm. Find the volume.' }, a: { da: '64 cm³ (' + m('4 · 4 · 4 = 4³') + ').', en: '64 cm³ (' + m('4 × 4 × 4 = 4³') + ').' } },
          { q: { da: 'En kasse er 8 cm × 5 cm × 3 cm. Find rumfanget.', en: 'A box is 8 cm × 5 cm × 3 cm. Find the volume.' }, a: { da: '120 cm³', en: '120 cm³' } },
          { q: { da: 'En mælkekarton er cirka 7 cm × 7 cm × 20 cm indvendigt. Cirka hvor mange liter rummer den?', en: 'A milk carton is about 7 cm × 7 cm × 20 cm inside. Roughly how many litres does it hold?' }, a: { da: m('7 · 7 · 20 = 980') + ' cm³ ≈ 1.000 cm³ = ca. 1 liter.', en: m('7 × 7 × 20 = 980') + ' cm³ ≈ 1,000 cm³ = about 1 litre.' } },
          { q: { da: 'Hvilken rumlig figur har 2 cirkler som endeflader?', en: 'Which solid has 2 circles as its end faces?' }, a: { da: 'En cylinder.', en: 'A cylinder.' } },
          { q: { da: 'Et svømmebassin er 25 m × 10 m × 2 m. Hvor mange liter vand er der i, når det er fyldt?', en: 'A swimming pool is 25 m × 10 m × 2 m. How many litres of water does it hold when full?' }, a: { da: m('25 · 10 · 2 = 500') + ' m³ = ' + m('500 · 1.000 = 500.000') + ' L.', en: m('25 × 10 × 2 = 500') + ' m³ = ' + m('500 × 1,000 = 500,000') + ' L.' } },
          { q: { da: 'Er en kugle et polyeder? Hvorfor/hvorfor ikke?', en: 'Is a sphere a polyhedron? Why/why not?' }, a: { da: 'Nej – et polyeder har kun flade sideflader, og en kugle er buet hele vejen rundt.', en: 'No – a polyhedron has only flat faces, and a sphere is curved all over.' } }
        ]
      }
    ]
  };

  /* ================================================================
     13. Koordinatsystemet
     ================================================================ */
  T['koordinatsystem'] = {
    title: { da: 'Koordinatsystemet', en: 'The coordinate system' },
    phase: [1, 2],
    summary: {
      da: 'To tallinjer, der krydser hinanden. Med et koordinatsæt (x, y) kan du beskrive præcis, hvor et punkt ligger – først i første kvadrant, så i hele systemet med negative tal.',
      en: 'Two number lines crossing each other. With a coordinate pair (x, y) you can say exactly where a point is – first in the first quadrant, then in the whole system with negative numbers.'
    },
    goals: {
      da: [
        'Eleven kan beskrive placeringer i koordinatsystemets første kvadrant.',
        'Eleven har viden om koordinatsystemets første kvadrant.',
        'Eleven kan beskrive placeringer i hele koordinatsystemet.',
        'Eleven har viden om hele koordinatsystemet.'
      ],
      en: [
        'The pupil can describe positions in the first quadrant of the coordinate system.',
        'The pupil has knowledge of the first quadrant of the coordinate system.',
        'The pupil can describe positions in the whole coordinate system.',
        'The pupil has knowledge of the whole coordinate system.'
      ]
    },
    terms: [
      { da: 'koordinatsystem', en: 'coordinate system', def: { da: 'To tallinjer (akser), der står vinkelret på hinanden', en: 'Two number lines (axes) at right angles to each other' } },
      { da: 'x-akse', en: 'x-axis', def: { da: 'Den vandrette akse', en: 'The horizontal axis' } },
      { da: 'y-akse', en: 'y-axis', def: { da: 'Den lodrette akse', en: 'The vertical axis' } },
      { da: 'origo (begyndelsespunkt)', en: 'origin', def: { da: 'Punktet (0, 0), hvor akserne krydser', en: 'The point (0, 0) where the axes cross' } },
      { da: 'koordinatsæt', en: 'coordinate pair', def: { da: 'To tal (x, y), der beskriver et punkt', en: 'Two numbers (x, y) describing a point' } },
      { da: 'kvadrant', en: 'quadrant', def: { da: 'En af de fire dele, akserne deler planen i', en: 'One of the four parts the axes divide the plane into' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Sådan læser du et koordinatsæt', en: 'How to read a coordinate pair' },
        body: {
          da: '<p>Et koordinatsystem er to tallinjer, der krydser hinanden i <b>origo</b> (0, 0). Den vandrette hedder <b>x-aksen</b>, den lodrette <b>y-aksen</b>.</p>'
            + '<p>Et punkt beskrives med et <b>koordinatsæt</b> (x, y). Husk rækkefølgen: <b>først hen, så op</b>. Punktet (2, 3) ligger 2 hen ad x-aksen og 3 op ad y-aksen. (3, 2) er et <i>andet</i> punkt!</p>'
            + '<p>Den del af koordinatsystemet, hvor både x og y er positive, hedder <b>første kvadrant</b>. Det er der, man starter.</p>',
          en: '<p>A coordinate system is two number lines crossing at the <b>origin</b> (0, 0). The horizontal one is the <b>x-axis</b>, the vertical one the <b>y-axis</b>.</p>'
            + '<p>A point is described by a <b>coordinate pair</b> (x, y). Remember the order: <b>first along, then up</b>. The point (2, 3) is 2 along the x-axis and 3 up the y-axis. (3, 2) is a <i>different</i> point!</p>'
            + '<p>The part of the coordinate system where both x and y are positive is called the <b>first quadrant</b>. That is where you start.</p>'
        }
      },
      {
        type: 'fig',
        svg: (function () {
          var s = '<svg viewBox="0 0 300 260" width="300" height="260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">';
          var ox = 40, oy = 220, u = 36;
          for (var i = 0; i <= 6; i++) { s += '<line x1="' + (ox + i * u) + '" y1="' + oy + '" x2="' + (ox + i * u) + '" y2="' + (oy - 6 * u) + '" stroke="#dfe4ec" stroke-width="1"/><line x1="' + ox + '" y1="' + (oy - i * u) + '" x2="' + (ox + 6 * u) + '" y2="' + (oy - i * u) + '" stroke="#dfe4ec" stroke-width="1"/>'; }
          s += '<line x1="' + ox + '" y1="' + oy + '" x2="' + (ox + 6 * u + 10) + '" y2="' + oy + '" stroke="currentColor" stroke-width="2"/><line x1="' + ox + '" y1="' + oy + '" x2="' + ox + '" y2="' + (oy - 6 * u - 10) + '" stroke="currentColor" stroke-width="2"/>';
          for (var j = 1; j <= 6; j++) { s += '<text x="' + (ox + j * u) + '" y="' + (oy + 16) + '" text-anchor="middle">' + j + '</text><text x="' + (ox - 10) + '" y="' + (oy - j * u + 4) + '" text-anchor="end">' + j + '</text>'; }
          s += '<text x="' + (ox - 10) + '" y="' + (oy + 16) + '" text-anchor="end">0</text><text x="' + (ox + 6 * u + 14) + '" y="' + (oy + 4) + '">x</text><text x="' + (ox - 4) + '" y="' + (oy - 6 * u - 14) + '">y</text>';
          var pts = [[2, 3, 'A (2, 3)'], [5, 1, 'B (5, 1)'], [3, 5, 'C (3, 5)']];
          pts.forEach(function (p) { s += '<circle cx="' + (ox + p[0] * u) + '" cy="' + (oy - p[1] * u) + '" r="5" fill="' + G + '"/><text x="' + (ox + p[0] * u + 8) + '" y="' + (oy - p[1] * u - 8) + '" font-weight="bold">' + p[2] + '</text>'; });
          s += '<line x1="' + (ox + 2 * u) + '" y1="' + oy + '" x2="' + (ox + 2 * u) + '" y2="' + (oy - 3 * u) + '" stroke="' + G + '" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="' + ox + '" y1="' + (oy - 3 * u) + '" x2="' + (ox + 2 * u) + '" y2="' + (oy - 3 * u) + '" stroke="' + G + '" stroke-width="1.5" stroke-dasharray="4 3"/>';
          return s + '</svg>';
        })(),
        caption: { da: 'Første kvadrant. A ligger 2 hen og 3 op: (2, 3).', en: 'The first quadrant. A is 2 along and 3 up: (2, 3).' }
      },
      {
        type: 'text',
        title: { da: 'Hele koordinatsystemet – med negative tal', en: 'The whole coordinate system – with negative numbers' },
        body: {
          da: '<p>Når du kender <a href="#/negative-tal">negative tal</a>, kan akserne forlænges: x-aksen mod venstre og y-aksen nedad. Nu er der <b>fire kvadranter</b>, og punkter kan have negative koordinater:</p>'
            + '<ul><li>(3, 2): 3 til højre, 2 op → 1. kvadrant</li><li>(−3, 2): 3 til <b>venstre</b>, 2 op → 2. kvadrant</li><li>(−3, −2): 3 til venstre, 2 <b>ned</b> → 3. kvadrant</li><li>(3, −2): 3 til højre, 2 ned → 4. kvadrant</li></ul>'
            + '<p>Punkter på akserne: (4, 0) ligger på x-aksen, (0, −3) ligger på y-aksen.</p>',
          en: '<p>Once you know <a href="#/negative-tal">negative numbers</a>, the axes can be extended: the x-axis to the left and the y-axis downwards. Now there are <b>four quadrants</b>, and points can have negative coordinates:</p>'
            + '<ul><li>(3, 2): 3 to the right, 2 up → 1st quadrant</li><li>(−3, 2): 3 to the <b>left</b>, 2 up → 2nd quadrant</li><li>(−3, −2): 3 to the left, 2 <b>down</b> → 3rd quadrant</li><li>(3, −2): 3 to the right, 2 down → 4th quadrant</li></ul>'
            + '<p>Points on the axes: (4, 0) is on the x-axis, (0, −3) is on the y-axis.</p>'
        }
      },
      {
        type: 'fig',
        svg: (function () {
          var s = '<svg viewBox="0 0 320 320" width="320" height="320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12" fill="currentColor">';
          var ox = 160, oy = 160, u = 30;
          for (var i = -4; i <= 4; i++) { s += '<line x1="' + (ox + i * u) + '" y1="' + (oy - 4 * u) + '" x2="' + (ox + i * u) + '" y2="' + (oy + 4 * u) + '" stroke="#dfe4ec"/><line x1="' + (ox - 4 * u) + '" y1="' + (oy + i * u) + '" x2="' + (ox + 4 * u) + '" y2="' + (oy + i * u) + '" stroke="#dfe4ec"/>'; }
          s += '<line x1="' + (ox - 4 * u - 10) + '" y1="' + oy + '" x2="' + (ox + 4 * u + 10) + '" y2="' + oy + '" stroke="currentColor" stroke-width="2"/><line x1="' + ox + '" y1="' + (oy + 4 * u + 10) + '" x2="' + ox + '" y2="' + (oy - 4 * u - 10) + '" stroke="currentColor" stroke-width="2"/>';
          for (var j = -4; j <= 4; j++) { if (j === 0) continue; var lab = j < 0 ? '−' + (-j) : j; s += '<text x="' + (ox + j * u) + '" y="' + (oy + 14) + '" text-anchor="middle">' + lab + '</text><text x="' + (ox - 6) + '" y="' + (oy - j * u + 4) + '" text-anchor="end">' + lab + '</text>'; }
          s += '<text x="' + (ox + 4 * u + 12) + '" y="' + (oy + 4) + '">x</text><text x="' + (ox + 6) + '" y="' + (oy - 4 * u - 12) + '">y</text>';
          s += '<text x="' + (ox + 2 * u) + '" y="' + (oy - 3.4 * u) + '" text-anchor="middle" fill="#5b6675">1. kvadrant</text><text x="' + (ox - 2 * u) + '" y="' + (oy - 3.4 * u) + '" text-anchor="middle" fill="#5b6675">2. kvadrant</text><text x="' + (ox - 2 * u) + '" y="' + (oy + 3.7 * u) + '" text-anchor="middle" fill="#5b6675">3. kvadrant</text><text x="' + (ox + 2 * u) + '" y="' + (oy + 3.7 * u) + '" text-anchor="middle" fill="#5b6675">4. kvadrant</text>';
          var pts = [[3, 2, '(3, 2)'], [-3, 2, '(−3, 2)'], [-3, -2, '(−3, −2)'], [3, -2, '(3, −2)']];
          pts.forEach(function (p) { s += '<circle cx="' + (ox + p[0] * u) + '" cy="' + (oy - p[1] * u) + '" r="5" fill="' + G + '"/><text x="' + (ox + p[0] * u + (p[0] > 0 ? 8 : -8)) + '" y="' + (oy - p[1] * u - 8) + '" text-anchor="' + (p[0] > 0 ? 'start' : 'end') + '" font-weight="bold">' + p[2] + '</text>'; });
          return s + '</svg>';
        })(),
        caption: { da: 'Hele koordinatsystemet med de fire kvadranter.', en: 'The whole coordinate system with the four quadrants.' }
      },
      {
        type: 'example',
        title: { da: 'Tegn en figur ud fra koordinater', en: 'Draw a shape from coordinates' },
        problem: { da: 'Afsæt punkterne A(1, 1), B(5, 1) og C(3, 4), og forbind dem. Hvilken figur får du? Hvad er dens areal?', en: 'Plot the points A(1, 1), B(5, 1) and C(3, 4) and join them. What shape do you get? What is its area?' },
        steps: {
          da: [
            'A: 1 hen, 1 op. B: 5 hen, 1 op. C: 3 hen, 4 op.',
            'Forbind A–B–C–A: en trekant. A og B ligger på samme højde (y = 1), så AB er vandret og er grundlinjen: ' + m('5 − 1 = 4') + '.',
            'Højden er fra y = 1 op til y = 4: ' + m('4 − 1 = 3') + '.',
            'Areal: ' + m('½ · 4 · 3 = 6') + '. Trekanten er ligebenet, for C ligger lige midt over AB.'
          ],
          en: [
            'A: 1 along, 1 up. B: 5 along, 1 up. C: 3 along, 4 up.',
            'Join A–B–C–A: a triangle. A and B are at the same height (y = 1), so AB is horizontal and is the base: ' + m('5 − 1 = 4') + '.',
            'The height is from y = 1 up to y = 4: ' + m('4 − 1 = 3') + '.',
            'Area: ' + m('½ × 4 × 3 = 6') + '. The triangle is isosceles, because C is right above the middle of AB.'
          ]
        },
        answer: { da: 'En ligebenet trekant med areal 6.', en: 'An isosceles triangle with area 6.' }
      },
      { type: 'widget', widget: 'coord', title: { da: 'Find punktet', en: 'Find the point' } },
      {
        type: 'practice',
        items: [
          { q: { da: 'Hvad hedder punktet, hvor akserne krydser, og hvad er dets koordinater?', en: 'What is the point where the axes cross called, and what are its coordinates?' }, a: { da: 'Origo (begyndelsespunktet), (0, 0).', en: 'The origin, (0, 0).' } },
          { q: { da: 'Er (4, 1) og (1, 4) det samme punkt?', en: 'Are (4, 1) and (1, 4) the same point?' }, a: { da: 'Nej. (4, 1) er 4 hen og 1 op. (1, 4) er 1 hen og 4 op. Rækkefølgen betyder noget.', en: 'No. (4, 1) is 4 along and 1 up. (1, 4) is 1 along and 4 up. The order matters.' } },
          { q: { da: 'I hvilken kvadrant ligger (−2, 5)? Og (4, −1)?', en: 'In which quadrant is (−2, 5)? And (4, −1)?' }, a: { da: '(−2, 5) er i 2. kvadrant (venstre, op). (4, −1) er i 4. kvadrant (højre, ned).', en: '(−2, 5) is in the 2nd quadrant (left, up). (4, −1) is in the 4th quadrant (right, down).' } },
          { q: { da: 'Punkterne (1, 1), (5, 1) og (5, 4) er tre hjørner i et rektangel. Hvad er det fjerde hjørne?', en: 'The points (1, 1), (5, 1) and (5, 4) are three corners of a rectangle. What is the fourth corner?' }, a: { da: '(1, 4).', en: '(1, 4).' } },
          { q: { da: 'Hvor langt er der fra (2, 3) til (7, 3)?', en: 'How far is it from (2, 3) to (7, 3)?' }, a: { da: '5 enheder – punkterne har samme y, så afstanden er ' + m('7 − 2') + ' langs x.', en: '5 units – the points have the same y, so the distance is ' + m('7 − 2') + ' along x.' } },
          { q: { da: 'Slik koster 80 kr. pr. kg (se <a href="#/variable-formler">Variable og formler</a>). Skriv tre punkter (kg, kr.), du kan afsætte i et koordinatsystem.', en: 'Sweets cost 80 kr. per kg (see <a href="#/variable-formler">Variables and formulas</a>). Write three points (kg, kr.) you could plot in a coordinate system.' }, a: { da: 'Fx (0, 0), (1, 80), (2, 160). De ligger på en ret linje gennem origo.', en: 'E.g. (0, 0), (1, 80), (2, 160). They lie on a straight line through the origin.' } }
        ]
      }
    ]
  };

  /* ================================================================
     14. Flytninger og mønstre
     ================================================================ */
  T['flytninger'] = {
    title: { da: 'Flytninger og mønstre', en: 'Transformations and patterns' },
    phase: [3],
    summary: {
      da: 'Spejling, parallelforskydning og drejning – tre måder at flytte en figur på uden at ændre dens form. Sådan laver man mønstre.',
      en: 'Reflection, translation and rotation – three ways to move a shape without changing its form. That is how patterns are made.'
    },
    goals: {
      da: [
        'Eleven kan fremstille mønstre med spejlinger, parallelforskydninger og drejninger.',
        'Eleven har viden om metoder til at fremstille mønstre med spejlinger, parallelforskydninger og drejninger, herunder med digitale værktøjer.'
      ],
      en: [
        'The pupil can create patterns using reflections, translations and rotations.',
        'The pupil has knowledge of methods for creating patterns with reflections, translations and rotations, including with digital tools.'
      ]
    },
    terms: [
      { da: 'flytning', en: 'transformation', def: { da: 'At flytte en figur uden at ændre form eller størrelse', en: 'Moving a shape without changing its form or size' } },
      { da: 'spejling', en: 'reflection', def: { da: 'Figuren vendes om en linje – som i et spejl', en: 'The shape is flipped over a line – as in a mirror' } },
      { da: 'spejlingsakse', en: 'mirror line (line of reflection)', def: { da: 'Linjen, der spejles i', en: 'The line you reflect in' } },
      { da: 'parallelforskydning', en: 'translation', def: { da: 'Figuren skubbes – samme retning og afstand for alle punkter', en: 'The shape is slid – same direction and distance for every point' } },
      { da: 'drejning', en: 'rotation', def: { da: 'Figuren drejes om et punkt med en bestemt vinkel', en: 'The shape is turned around a point by a certain angle' } },
      { da: 'drejningspunkt', en: 'centre of rotation', def: { da: 'Punktet, der drejes omkring', en: 'The point you turn around' } },
      { da: 'symmetri', en: 'symmetry', def: { da: 'Når en figur ser ens ud på begge sider af en linje', en: 'When a shape looks the same on both sides of a line' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Tre flytninger', en: 'Three transformations' },
        body: {
          da: '<p>En <b>flytning</b> ændrer <i>hvor</i> figuren ligger, men ikke <i>hvordan</i> den ser ud. Størrelse, sidelængder og vinkler er de samme før og efter.</p>'
            + '<table><tr><th>Flytning</th><th>Sådan gør du</th><th>Kendetegn</th></tr>'
            + '<tr><td><b>Spejling</b></td><td>Vend figuren om en linje (spejlingsaksen). Hvert punkt ender lige så langt fra aksen – bare på den anden side.</td><td>Figuren bliver „spejlvendt“ – som et B, der bliver til ᗺ.</td></tr>'
            + '<tr><td><b>Parallelforskydning</b></td><td>Skub figuren – fx 3 til højre og 2 op. Alle punkter flyttes lige langt i samme retning.</td><td>Figuren vender stadig samme vej.</td></tr>'
            + '<tr><td><b>Drejning</b></td><td>Drej figuren om et punkt (drejningspunktet) med en vinkel, fx 90° eller 180°.</td><td>Figuren peger i en ny retning.</td></tr></table>',
          en: '<p>A <b>transformation</b> changes <i>where</i> the shape is, but not <i>what</i> it looks like. Size, side lengths and angles are the same before and after.</p>'
            + '<table><tr><th>Transformation</th><th>How</th><th>Tell-tale sign</th></tr>'
            + '<tr><td><b>Reflection</b></td><td>Flip the shape over a line (the mirror line). Each point ends up just as far from the line – on the other side.</td><td>The shape is "mirrored" – like a B that becomes ᗺ.</td></tr>'
            + '<tr><td><b>Translation</b></td><td>Slide the shape – e.g. 3 right and 2 up. Every point moves the same distance in the same direction.</td><td>The shape still faces the same way.</td></tr>'
            + '<tr><td><b>Rotation</b></td><td>Turn the shape around a point (the centre of rotation) by an angle, e.g. 90° or 180°.</td><td>The shape points in a new direction.</td></tr></table>'
        }
      },
      {
        type: 'fig',
        svg: (function () {
          var F = 'M0,0 L0,-40 L24,-40 L24,-32 L8,-32 L8,-24 L20,-24 L20,-16 L8,-16 L8,0 Z'; // letter F
          var s = '<svg viewBox="0 0 600 160" width="600" height="160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">';
          // reflection
          s += '<g transform="translate(20,20)"><path d="' + F + '" transform="translate(20,70)" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><line x1="80" y1="10" x2="80" y2="90" stroke="#1c2430" stroke-width="1.5" stroke-dasharray="5 4"/><path d="' + F + '" transform="translate(140,70) scale(-1,1)" fill="' + GS2 + '" stroke="' + G + '" stroke-width="2"/><text x="80" y="120" text-anchor="middle">spejling · reflection</text></g>';
          // translation
          s += '<g transform="translate(220,20)"><path d="' + F + '" transform="translate(10,70)" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><path d="' + F + '" transform="translate(90,40)" fill="' + GS2 + '" stroke="' + G + '" stroke-width="2"/><line x1="40" y1="60" x2="110" y2="30" stroke="#1c2430" stroke-width="1.5" marker-end="url(#arr)"/><text x="70" y="120" text-anchor="middle">parallelforskydning · translation</text></g>';
          // rotation
          s += '<g transform="translate(430,20)"><path d="' + F + '" transform="translate(30,70)" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><circle cx="60" cy="70" r="3"/><path d="' + F + '" transform="translate(90,70) rotate(90)" fill="' + GS2 + '" stroke="' + G + '" stroke-width="2"/><path d="M60,40 A30,30 0 0,1 90,70" fill="none" stroke="#1c2430" stroke-width="1.5" stroke-dasharray="4 3"/><text x="70" y="120" text-anchor="middle">drejning · rotation (90°)</text></g>';
          s += '<defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#1c2430"/></marker></defs>';
          return s + '</svg>';
        })(),
        caption: { da: 'Samme figur – flyttet på tre måder.', en: 'The same shape – moved in three ways.' }
      },
      {
        type: 'text',
        title: { da: 'Flytninger i koordinatsystemet', en: 'Transformations in the coordinate system' },
        body: {
          da: '<p>Læseplanen siger, at eleverne bruger <a href="#/koordinatsystem">koordinatsystemet</a> til at beskrive, hvor flyttede figurer ender. Her er reglerne for de enkleste flytninger:</p>'
            + '<ul>'
            + '<li><b>Parallelforskydning</b> 3 til højre og 2 op: læg 3 til x og 2 til y. (1, 1) → (4, 3).</li>'
            + '<li><b>Spejling i y-aksen:</b> x skifter fortegn. (3, 2) → (−3, 2).</li>'
            + '<li><b>Spejling i x-aksen:</b> y skifter fortegn. (3, 2) → (3, −2).</li>'
            + '<li><b>Drejning 180° om origo:</b> begge skifter fortegn. (3, 2) → (−3, −2). (Figuren vender på hovedet.)</li>'
            + '</ul>',
          en: '<p>The Danish curriculum says pupils use the <a href="#/koordinatsystem">coordinate system</a> to describe where moved shapes end up. Here are the rules for the simplest transformations:</p>'
            + '<ul>'
            + '<li><b>Translation</b> 3 right and 2 up: add 3 to x and 2 to y. (1, 1) → (4, 3).</li>'
            + '<li><b>Reflection in the y-axis:</b> x changes sign. (3, 2) → (−3, 2).</li>'
            + '<li><b>Reflection in the x-axis:</b> y changes sign. (3, 2) → (3, −2).</li>'
            + '<li><b>Rotation 180° about the origin:</b> both change sign. (3, 2) → (−3, −2). (The shape turns upside down.)</li>'
            + '</ul>'
        }
      },
      {
        type: 'example',
        title: { da: 'Flyt en trekant', en: 'Move a triangle' },
        problem: { da: 'Trekanten har hjørnerne A(1, 1), B(4, 1) og C(1, 3). Find hjørnerne efter (a) en parallelforskydning 2 til højre og 3 op, og (b) en spejling i y-aksen.', en: 'The triangle has corners A(1, 1), B(4, 1) and C(1, 3). Find the corners after (a) a translation 2 right and 3 up, and (b) a reflection in the y-axis.' },
        steps: {
          da: [
            '(a) Læg 2 til x og 3 til y: A′(3, 4), B′(6, 4), C′(3, 6).',
            '(b) Skift fortegn på x: A′(−1, 1), B′(−4, 1), C′(−1, 3).',
            'Tjek: Tegn begge – trekanterne har samme størrelse og form som den oprindelige.'
          ],
          en: [
            '(a) Add 2 to x and 3 to y: A′(3, 4), B′(6, 4), C′(3, 6).',
            '(b) Change the sign of x: A′(−1, 1), B′(−4, 1), C′(−1, 3).',
            'Check: draw both – the triangles have the same size and shape as the original.'
          ]
        },
        answer: { da: '(a) (3, 4), (6, 4), (3, 6). (b) (−1, 1), (−4, 1), (−1, 3).', en: '(a) (3, 4), (6, 4), (3, 6). (b) (−1, 1), (−4, 1), (−1, 3).' }
      },
      {
        type: 'text',
        title: { da: 'Mønstre', en: 'Patterns' },
        body: {
          da: '<p>Mønstre laves ved at gentage flytninger:</p>'
            + '<ul><li><b>Fliser på et gulv</b>: den samme flise <i>parallelforskydes</i> igen og igen.</li>'
            + '<li><b>En sommerfugl</b> eller et ansigt: den ene halvdel er en <i>spejling</i> af den anden.</li>'
            + '<li><b>Et snefnug</b> eller et vindmøllehjul: samme figur <i>drejet</i> om midten flere gange (fx 6 gange 60°).</li>'
            + '<li><b>En bort</b> langs en væg: ofte en blanding – en figur, der spejles og så forskydes.</li></ul>'
            + '<p><b>Prøv selv:</b> Tegn en lille figur på ternet papir. Lav et mønster ved kun at bruge parallelforskydning. Lav et andet, hvor du kun spejler. Kan du beskrive med ord (eller koordinater), hvad du har gjort? Det kan også gøres i et dynamisk geometriprogram.</p>',
          en: '<p>Patterns are made by repeating transformations:</p>'
            + '<ul><li><b>Floor tiles</b>: the same tile is <i>translated</i> again and again.</li>'
            + '<li><b>A butterfly</b> or a face: one half is a <i>reflection</i> of the other.</li>'
            + '<li><b>A snowflake</b> or a windmill: the same shape <i>rotated</i> about the centre several times (e.g. 6 times 60°).</li>'
            + '<li><b>A border</b> along a wall: often a mix – a shape that is reflected and then translated.</li></ul>'
            + '<p><b>Try it:</b> Draw a small shape on squared paper. Make a pattern using only translation. Make another where you only reflect. Can you describe in words (or coordinates) what you did? It can also be done in dynamic geometry software.</p>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Bogstavet „b“ spejles i en lodret linje. Hvilket bogstav ligner det nu?', en: 'The letter "b" is reflected in a vertical line. Which letter does it look like now?' }, a: { da: '„d“.', en: '"d".' } },
          { q: { da: 'Punktet (2, 5) parallelforskydes 4 til venstre og 1 ned. Hvor ender det?', en: 'The point (2, 5) is translated 4 left and 1 down. Where does it end up?' }, a: { da: '(−2, 4).', en: '(−2, 4).' } },
          { q: { da: 'Punktet (−3, 4) spejles i x-aksen. Hvor ender det?', en: 'The point (−3, 4) is reflected in the x-axis. Where does it end up?' }, a: { da: '(−3, −4).', en: '(−3, −4).' } },
          { q: { da: 'Hvilken flytning er brugt, når fliserne i et badeværelse ligger i lige rækker?', en: 'Which transformation is used when bathroom tiles lie in straight rows?' }, a: { da: 'Parallelforskydning.', en: 'Translation.' } },
          { q: { da: 'En figur drejes 90° fire gange om det samme punkt. Hvor er den så?', en: 'A shape is rotated 90° four times about the same point. Where is it then?' }, a: { da: 'Tilbage, hvor den startede: ' + m('4 · 90° = 360°') + ' = en hel omgang.', en: 'Back where it started: ' + m('4 × 90° = 360°') + ' = a full turn.' } },
          { q: { da: 'Ændrer en spejling figurens areal?', en: 'Does a reflection change the area of a shape?' }, a: { da: 'Nej. Ingen af de tre flytninger ændrer størrelse, sidelængder, vinkler eller areal.', en: 'No. None of the three transformations change size, side lengths, angles or area.' } }
        ]
      }
    ]
  };

  /* ================================================================
     15. Måling og enheder
     ================================================================ */
  T['maaling'] = {
    title: { da: 'Måling og enheder', en: 'Measurement and units' },
    phase: [1, 2, 3],
    summary: {
      da: 'Længde, vægt, rumfang og tid. Omregn mellem enheder, regn tidsforskelle ud, og lær at anslå et fornuftigt svar.',
      en: 'Length, weight, capacity and time. Convert between units, work out time differences, and learn to estimate a sensible answer.'
    },
    goals: {
      da: [
        'Fra læseplanen: Eleverne bygger videre på målingsbegrebet – „at estimere og måle længder, vægt, tid og vinkler, anvende relevante måleenheder og måleinstrumenter samt kunne vurdere et måleresultat ud fra målingens nøjagtighed“.',
        'Fra læseplanen: Eleverne skal kunne „beregne enkle mål (fx beregninger vedrørende tidsforskelle, omkreds og areal)“.'
      ],
      en: [
        'From the curriculum: Pupils build on the concept of measurement – "estimating and measuring lengths, weight, time and angles, using relevant units and instruments, and judging a measurement by its accuracy".',
        'From the curriculum: Pupils should be able to "calculate simple measures (e.g. calculations concerning time differences, perimeter and area)".'
      ]
    },
    terms: [
      { da: 'enhed', en: 'unit', def: { da: 'Det, vi måler i: cm, kg, minutter …', en: 'What we measure in: cm, kg, minutes …' } },
      { da: 'omregne', en: 'convert', def: { da: 'Skrive samme mål i en anden enhed: 2,5 m = 250 cm', en: 'Write the same measure in another unit: 2.5 m = 250 cm' } },
      { da: 'anslå / estimere', en: 'estimate', def: { da: 'Give et fornuftigt bud uden at måle præcist', en: 'Give a sensible guess without measuring exactly' } },
      { da: 'måleinstrument', en: 'measuring instrument', def: { da: 'Lineal, målebånd, vægt, ur, vinkelmåler, målebæger', en: 'Ruler, tape measure, scales, clock, protractor, measuring jug' } },
      { da: 'nøjagtighed', en: 'accuracy', def: { da: 'Hvor præcis en måling er', en: 'How exact a measurement is' } },
      { da: 'døgn', en: 'day (24 hours)', def: { da: '24 timer', en: '24 hours' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Længde, vægt og rumfang – enhederne hænger sammen med 10, 100 og 1000', en: 'Length, weight and capacity – the units are linked by 10, 100 and 1000' },
        body: {
          da: '<table><tr><th>Længde</th><th>Vægt</th><th>Rumfang (væske)</th></tr>'
            + '<tr><td>1 km = 1.000 m</td><td>1 t (ton) = 1.000 kg</td><td>1 L = 10 dL</td></tr>'
            + '<tr><td>1 m = 10 dm = 100 cm</td><td>1 kg = 1.000 g</td><td>1 L = 100 cL = 1.000 mL</td></tr>'
            + '<tr><td>1 cm = 10 mm</td><td>1 g = 1.000 mg</td><td>1 L = 1.000 cm³</td></tr></table>'
            + '<p><b>Fra stor til lille enhed: gang.</b> 2,5 m → cm: ' + m('2,5 · 100 = 250') + ' cm. &nbsp; 3 kg → g: ' + m('3 · 1.000 = 3.000') + ' g.</p>'
            + '<p><b>Fra lille til stor enhed: divider.</b> 3.400 m → km: ' + m('3.400 : 1.000 = 3,4') + ' km. &nbsp; 750 mL → L: ' + m('750 : 1.000 = 0,75') + ' L.</p>'
            + '<p>Det er de samme kommaflytninger som under <a href="#/decimaltal">Decimaltal</a>.</p>',
          en: '<table><tr><th>Length</th><th>Weight</th><th>Capacity (liquid)</th></tr>'
            + '<tr><td>1 km = 1,000 m</td><td>1 t (tonne) = 1,000 kg</td><td>1 L = 10 dL</td></tr>'
            + '<tr><td>1 m = 10 dm = 100 cm</td><td>1 kg = 1,000 g</td><td>1 L = 100 cL = 1,000 mL</td></tr>'
            + '<tr><td>1 cm = 10 mm</td><td>1 g = 1,000 mg</td><td>1 L = 1,000 cm³</td></tr></table>'
            + '<p><b>From a big to a small unit: multiply.</b> 2.5 m → cm: ' + m('2.5 × 100 = 250') + ' cm. &nbsp; 3 kg → g: ' + m('3 × 1,000 = 3,000') + ' g.</p>'
            + '<p><b>From a small to a big unit: divide.</b> 3,400 m → km: ' + m('3,400 ÷ 1,000 = 3.4') + ' km. &nbsp; 750 mL → L: ' + m('750 ÷ 1,000 = 0.75') + ' L.</p>'
            + '<p>These are the same decimal-point moves as in <a href="#/decimaltal">Decimals</a>.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Tid – her gælder 60, ikke 10!', en: 'Time – here it is 60, not 10!' },
        body: {
          da: '<p>' + m('1 døgn = 24 timer') + ', ' + m('1 time = 60 minutter') + ', ' + m('1 minut = 60 sekunder') + '. 1 uge = 7 døgn, 1 år = 12 måneder ≈ 365 døgn.</p>'
            + '<p><b>Typisk fejl:</b> 1,5 time er <b>1 time og 30 minutter</b> – ikke 1 time og 50 minutter. Og 2 timer 45 minutter er 2,75 timer (45 er tre kvarte af 60). Tid er ikke et decimalsystem.</p>'
            + '<p>På et digitalt ur: 14:30 er halv tre om eftermiddagen. Efter 12:00 tæller vi videre: 13, 14, … 23. Så 19:00 er klokken 7 om aftenen.</p>',
          en: '<p>' + m('1 day = 24 hours') + ', ' + m('1 hour = 60 minutes') + ', ' + m('1 minute = 60 seconds') + '. 1 week = 7 days, 1 year = 12 months ≈ 365 days.</p>'
            + '<p><b>Common mistake:</b> 1.5 hours is <b>1 hour and 30 minutes</b> – not 1 hour and 50 minutes. And 2 hours 45 minutes is 2.75 hours (45 is three quarters of 60). Time is not a decimal system.</p>'
            + '<p>On a 24-hour clock: 14:30 is half past two in the afternoon. After 12:00 we keep counting: 13, 14, … 23. So 19:00 is 7 o\'clock in the evening.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Tidsforskel – tæl op i trin', en: 'Time difference – count up in steps' },
        problem: { da: 'Toget afgår 8:45 og ankommer 11:20. Hvor lang tid tager turen?', en: 'The train leaves at 8:45 and arrives at 11:20. How long does the journey take?' },
        steps: {
          da: [
            'Fra 8:45 til 9:00: 15 minutter.',
            'Fra 9:00 til 11:00: 2 timer.',
            'Fra 11:00 til 11:20: 20 minutter.',
            'I alt: 2 timer og ' + m('15 + 20 = 35') + ' minutter.',
            'Undgå at regne 11,20 − 8,45 som decimaltal – det giver et forkert svar (2,75), fordi der er 60 minutter på en time.'
          ],
          en: [
            'From 8:45 to 9:00: 15 minutes.',
            'From 9:00 to 11:00: 2 hours.',
            'From 11:00 to 11:20: 20 minutes.',
            'Total: 2 hours and ' + m('15 + 20 = 35') + ' minutes.',
            'Avoid calculating 11.20 − 8.45 as decimals – it gives a wrong answer (2.75), because there are 60 minutes in an hour.'
          ]
        },
        answer: { da: '2 timer og 35 minutter', en: '2 hours and 35 minutes' }
      },
      {
        type: 'example',
        title: { da: 'Omregning', en: 'Converting' },
        problem: { da: 'Skriv 1.250 g i kg, 0,75 L i dL og mL, og 2 km 350 m i meter.', en: 'Write 1,250 g in kg, 0.75 L in dL and mL, and 2 km 350 m in metres.' },
        steps: {
          da: [m('1.250 g = 1.250 : 1.000 = 1,25') + ' kg.', m('0,75 L = 0,75 · 10 = 7,5') + ' dL = ' + m('0,75 · 1.000 = 750') + ' mL.', m('2 km 350 m = 2.000 + 350 = 2.350') + ' m.'],
          en: [m('1,250 g = 1,250 ÷ 1,000 = 1.25') + ' kg.', m('0.75 L = 0.75 × 10 = 7.5') + ' dL = ' + m('0.75 × 1,000 = 750') + ' mL.', m('2 km 350 m = 2,000 + 350 = 2,350') + ' m.']
        },
        answer: { da: '1,25 kg; 7,5 dL = 750 mL; 2.350 m', en: '1.25 kg; 7.5 dL = 750 mL; 2,350 m' }
      },
      {
        type: 'text',
        title: { da: 'Anslå, vælg redskab, vurder nøjagtighed', en: 'Estimate, choose a tool, judge accuracy' },
        body: {
          da: '<p><b>Anslå først.</b> Nogle „målestokke“, du har på dig: en dør er ca. 2 m høj, et A4-ark er ca. 30 cm langt, en 1-liters mælkekarton vejer ca. 1 kg, et langt skridt er ca. 1 m.</p>'
            + '<p><b>Vælg enhed og redskab, der passer:</b></p>'
            + '<table><tr><th>Skal måles</th><th>Enhed</th><th>Redskab</th></tr>'
            + '<tr><td>en blyants længde</td><td>cm / mm</td><td>lineal</td></tr>'
            + '<tr><td>et værelses længde</td><td>m</td><td>målebånd</td></tr>'
            + '<tr><td>afstanden til en anden by</td><td>km</td><td>kort / bil</td></tr>'
            + '<tr><td>et æble</td><td>g</td><td>køkkenvægt</td></tr>'
            + '<tr><td>en person</td><td>kg</td><td>badevægt</td></tr>'
            + '<tr><td>saft til en opskrift</td><td>dL / mL</td><td>målebæger</td></tr>'
            + '<tr><td>et hjørne på en figur</td><td>grader (°)</td><td>vinkelmåler</td></tr></table>'
            + '<p><b>Vurder nøjagtigheden.</b> Med en lineal kan du måle til nærmeste millimeter, så „12,3 cm“ er et ærligt svar – „12,3471 cm“ er det ikke. Måler du et værelse med et målebånd, er „4,2 m“ fint. Sig, hvor præcist du har målt.</p>',
          en: '<p><b>Estimate first.</b> Some "rulers" you always have with you: a door is about 2 m high, an A4 sheet is about 30 cm long, a 1-litre milk carton weighs about 1 kg, a long step is about 1 m.</p>'
            + '<p><b>Choose a unit and tool that fit:</b></p>'
            + '<table><tr><th>To measure</th><th>Unit</th><th>Tool</th></tr>'
            + '<tr><td>the length of a pencil</td><td>cm / mm</td><td>ruler</td></tr>'
            + '<tr><td>the length of a room</td><td>m</td><td>tape measure</td></tr>'
            + '<tr><td>the distance to another town</td><td>km</td><td>map / car</td></tr>'
            + '<tr><td>an apple</td><td>g</td><td>kitchen scales</td></tr>'
            + '<tr><td>a person</td><td>kg</td><td>bathroom scales</td></tr>'
            + '<tr><td>juice for a recipe</td><td>dL / mL</td><td>measuring jug</td></tr>'
            + '<tr><td>a corner of a shape</td><td>degrees (°)</td><td>protractor</td></tr></table>'
            + '<p><b>Judge the accuracy.</b> With a ruler you can measure to the nearest millimetre, so "12.3 cm" is an honest answer – "12.3471 cm" is not. If you measure a room with a tape measure, "4.2 m" is fine. Say how precisely you measured.</p>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Skriv 3,2 km i meter.', en: 'Write 3.2 km in metres.' }, a: { da: '3.200 m', en: '3,200 m' } },
          { q: { da: 'Skriv 45 mm i cm.', en: 'Write 45 mm in cm.' }, a: { da: '4,5 cm', en: '4.5 cm' } },
          { q: { da: 'En opskrift skal bruge 2,5 dL fløde. Hvor mange mL er det?', en: 'A recipe needs 2.5 dL of cream. How many mL is that?' }, a: { da: '250 mL (1 dL = 100 mL).', en: '250 mL (1 dL = 100 mL).' } },
          { q: { da: 'Fodboldtræningen starter 16:15 og varer 1 time og 45 minutter. Hvornår slutter den?', en: 'Football practice starts at 16:15 and lasts 1 hour 45 minutes. When does it end?' }, a: { da: '18:00. 16:15 + 1 time = 17:15, + 45 min = 18:00.', en: '18:00. 16:15 + 1 hour = 17:15, + 45 min = 18:00.' } },
          { q: { da: 'Hvor lang tid er der fra 22:40 til 07:10 næste morgen?', en: 'How long is it from 22:40 to 07:10 the next morning?' }, a: { da: '8 timer og 30 minutter. 22:40 → 23:00 (20 min), → 07:00 (8 timer), → 07:10 (10 min).', en: '8 hours 30 minutes. 22:40 → 23:00 (20 min), → 07:00 (8 hours), → 07:10 (10 min).' } },
          { q: { da: 'Er 0,5 timer det samme som 50 minutter?', en: 'Is 0.5 hours the same as 50 minutes?' }, a: { da: 'Nej – 0,5 time er en halv time = 30 minutter.', en: 'No – 0.5 hours is half an hour = 30 minutes.' } },
          { q: { da: 'Fire pakker mel vejer 500 g hver. Hvor mange kg er det i alt?', en: 'Four bags of flour weigh 500 g each. How many kg in total?' }, a: { da: '2 kg (' + m('4 · 500 = 2.000') + ' g).', en: '2 kg (' + m('4 × 500 = 2,000') + ' g).' } }
        ]
      }
    ]
  };

  /* ================================================================
     16. Geometrisk tegning
     ================================================================ */
  T['tegning'] = {
    title: { da: 'Geometrisk tegning', en: 'Geometric drawing' },
    phase: [1, 2, 3],
    summary: {
      da: 'Skitser og præcise tegninger, tegning ud fra givne mål, plantegninger i målestoksforhold og isometrisk tegning af rumlige figurer.',
      en: 'Sketches and accurate drawings, drawing from given measurements, floor plans to scale, and isometric drawing of 3D shapes.'
    },
    goals: {
      da: [
        'Eleven kan gengive træk fra omverdenen ved tegning samt tegne ud fra givne betingelser.',
        'Eleven kan anvende skitser og præcise tegninger.',
        'Eleven kan tegne rumlige figurer med forskellige metoder.',
        'Eleven har viden om geometriske tegneformer til gengivelse af rumlighed.'
      ],
      en: [
        'The pupil can reproduce features of the surroundings by drawing, and draw from given conditions.',
        'The pupil can use sketches and accurate drawings.',
        'The pupil can draw solid figures using different methods.',
        'The pupil has knowledge of geometric drawing methods for representing three-dimensionality.'
      ]
    },
    terms: [
      { da: 'skitse', en: 'sketch', def: { da: 'En hurtig tegning, der viser idéen – med målene skrevet på', en: 'A quick drawing that shows the idea – with measurements written on' } },
      { da: 'præcis tegning', en: 'accurate drawing', def: { da: 'Tegnet med lineal, passer og vinkelmåler i de rigtige mål', en: 'Drawn with ruler, compasses and protractor to the correct measurements' } },
      { da: 'plantegning', en: 'floor plan', def: { da: 'Tegning set ovenfra, fx af et værelse', en: 'Drawing seen from above, e.g. of a room' } },
      { da: 'målestoksforhold', en: 'scale', def: { da: '1:50 betyder, at 1 cm på tegningen er 50 cm i virkeligheden', en: '1:50 means 1 cm on the drawing is 50 cm in reality' } },
      { da: 'isometrisk tegning', en: 'isometric drawing', def: { da: 'Tegning af rumlige figurer på trekantet prikpapir', en: 'Drawing of 3D shapes on triangular dot paper' } },
      { da: 'dynamisk geometriprogram', en: 'dynamic geometry software', def: { da: 'Et program, hvor du kan tegne figurer og trække i dem', en: 'A program where you can draw shapes and drag them around' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Skitse eller præcis tegning?', en: 'Sketch or accurate drawing?' },
        body: {
          da: '<p>En <b>skitse</b> laver du hurtigt i hånden. Den behøver ikke være i de rigtige mål – men du skriver målene på. Skitser bruger du, når du skal <i>forstå</i> en opgave eller planlægge noget.</p>'
            + '<p>En <b>præcis tegning</b> laver du med lineal, passer og vinkelmåler – eller i et dynamisk geometriprogram. Her <i>er</i> alle længder og vinkler rigtige. Præcise tegninger bruger du, når du fx skal måle noget på tegningen eller bygge efter den.</p>'
            + '<p>Begge dele er vigtige. Tit starter man med en skitse og laver bagefter den præcise tegning.</p>',
          en: '<p>A <b>sketch</b> is done quickly by hand. It does not have to be to scale – but you write the measurements on it. You use sketches when you need to <i>understand</i> a problem or plan something.</p>'
            + '<p>An <b>accurate drawing</b> is made with ruler, compasses and protractor – or in dynamic geometry software. Here all lengths and angles <i>are</i> correct. You use accurate drawings when, for example, you need to measure something on the drawing or build from it.</p>'
            + '<p>Both are important. Often you start with a sketch and then make the accurate drawing.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Tegn ud fra givne betingelser', en: 'Draw from given conditions' },
        body: {
          da: '<p><b>Opgave: Tegn en trekant med siderne 5 cm, 4 cm og 3 cm.</b></p>'
            + '<ol><li>Tegn en linje på 5 cm med lineal. Det er grundlinjen. Kald enderne A og B.</li>'
            + '<li>Sæt passeren til 4 cm. Sæt spidsen i A, og tegn en bue over linjen.</li>'
            + '<li>Sæt passeren til 3 cm. Sæt spidsen i B, og tegn en bue, der krydser den første.</li>'
            + '<li>Der, hvor buerne krydser, er det tredje hjørne C. Forbind A–C og B–C.</li></ol>'
            + '<p>Mål vinklen ved C med vinkelmåleren: den er 90°. En trekant med siderne 3, 4 og 5 er altid retvinklet!</p>'
            + '<p><b>Opgave: Tegn et rektangel på 6 cm × 4 cm.</b> Tegn 6 cm, brug vinkelmåleren (eller hjørnet af linealen) til at lave 90° i hver ende, tegn 4 cm op fra begge ender, og forbind toppen. Tjek: er de modstående sider lige lange?</p>',
          en: '<p><b>Task: Draw a triangle with sides 5 cm, 4 cm and 3 cm.</b></p>'
            + '<ol><li>Draw a 5 cm line with a ruler. This is the base. Call the ends A and B.</li>'
            + '<li>Set the compasses to 4 cm. Put the point on A and draw an arc above the line.</li>'
            + '<li>Set the compasses to 3 cm. Put the point on B and draw an arc that crosses the first one.</li>'
            + '<li>Where the arcs cross is the third corner C. Join A–C and B–C.</li></ol>'
            + '<p>Measure the angle at C with the protractor: it is 90°. A triangle with sides 3, 4 and 5 is always right-angled!</p>'
            + '<p><b>Task: Draw a 6 cm × 4 cm rectangle.</b> Draw 6 cm, use the protractor (or the corner of the ruler) to make 90° at each end, draw 4 cm up from both ends, and join the top. Check: are the opposite sides equal?</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Plantegning og målestoksforhold', en: 'Floor plans and scale' },
        body: {
          da: '<p>En <b>plantegning</b> viser noget set lige ovenfra – fx dit værelse med seng, bord og dør. Fordi værelset er meget større end papiret, tegner man i et <b>målestoksforhold</b>.</p>'
            + '<p><b>1:50</b> betyder: 1 cm på tegningen = 50 cm i virkeligheden. Et værelse på 4 m × 3 m (400 cm × 300 cm) bliver på tegningen ' + m('400 : 50 = 8') + ' cm × ' + m('300 : 50 = 6') + ' cm.</p>'
            + '<p>Den anden vej: Måler du 3 cm på en 1:50-tegning, er det ' + m('3 · 50 = 150') + ' cm = 1,5 m i virkeligheden.</p>'
            + '<p>Kort bruger større tal: på et kort i 1:25.000 er 4 cm lig med ' + m('4 · 25.000 = 100.000') + ' cm = 1 km.</p>',
          en: '<p>A <b>floor plan</b> shows something seen straight from above – e.g. your room with bed, desk and door. Because the room is much bigger than the paper, you draw it to a <b>scale</b>.</p>'
            + '<p><b>1:50</b> means: 1 cm on the drawing = 50 cm in reality. A room of 4 m × 3 m (400 cm × 300 cm) becomes ' + m('400 ÷ 50 = 8') + ' cm × ' + m('300 ÷ 50 = 6') + ' cm on the drawing.</p>'
            + '<p>The other way: if you measure 3 cm on a 1:50 drawing, that is ' + m('3 × 50 = 150') + ' cm = 1.5 m in reality.</p>'
            + '<p>Maps use bigger numbers: on a 1:25,000 map, 4 cm equals ' + m('4 × 25,000 = 100,000') + ' cm = 1 km.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Isometrisk tegning – rumlige figurer på papir', en: 'Isometric drawing – 3D shapes on paper' },
        body: {
          da: '<p>Hvordan tegner man en terning, så den <i>ser</i> rumlig ud? Én metode er <b>isometrisk tegning</b> på trekantet prikpapir (isometrisk net):</p>'
            + '<ul><li>Lodrette kanter tegnes <b>lodret</b>.</li><li>Vandrette kanter tegnes <b>skråt</b> – langs prikkerne, 30° op til højre eller venstre.</li><li>Alle kanter tegnes i deres rigtige længde (samme antal prikker).</li></ul>'
            + '<p>Du kan også lave en <b>skitse</b>: tegn forsiden som et kvadrat, tegn et kvadrat forskudt lidt op og til højre, og forbind hjørnerne. Eller tegn en <b>udfoldning</b> (se <a href="#/rumlige-figurer">Rumlige figurer</a>). Læseplanen nævner også „enkel projektionstegning“ og „tegninger i forskellige størrelsesforhold“.</p>',
          en: '<p>How do you draw a cube so that it <i>looks</i> 3D? One method is <b>isometric drawing</b> on triangular dot paper (an isometric grid):</p>'
            + '<ul><li>Vertical edges are drawn <b>vertically</b>.</li><li>Horizontal edges are drawn <b>at a slant</b> – along the dots, 30° up to the right or left.</li><li>All edges are drawn at their real length (same number of dots).</li></ul>'
            + '<p>You can also make a <b>sketch</b>: draw the front as a square, draw another square shifted a little up and to the right, and join the corners. Or draw a <b>net</b> (see <a href="#/rumlige-figurer">3D shapes</a>). The curriculum also mentions "simple projection drawing" and "drawings at different scales".</p>'
        }
      },
      {
        type: 'fig',
        svg: (function () {
          var s = '<svg viewBox="0 0 420 200" width="420" height="200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">';
          // isometric dot grid
          var dx = 20, dy = 11.55;
          for (var r = 0; r < 15; r++) for (var c = 0; c < 20; c++) { var x = 10 + c * dx + (r % 2) * dx / 2, y = 10 + r * dy; if (x < 410 && y < 175) s += '<circle cx="' + x + '" cy="' + y + '" r="1.3" fill="#9aa5b5"/>'; }
          // cube on grid: edge length 3 units (60px along 30deg)
          var cx = 200, cy = 150, L = 60, ux = L * Math.cos(Math.PI / 6), uy = L * Math.sin(Math.PI / 6);
          var A = [cx, cy], B = [cx + ux, cy - uy], C = [cx, cy - 2 * uy], D = [cx - ux, cy - uy];
          var top = function (p) { return [p[0], p[1] - L]; };
          s += '<polygon points="' + A + ' ' + B + ' ' + top(B) + ' ' + top(A) + '" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/>';
          s += '<polygon points="' + A + ' ' + D + ' ' + top(D) + ' ' + top(A) + '" fill="' + GS2 + '" stroke="' + G + '" stroke-width="2"/>';
          s += '<polygon points="' + top(A) + ' ' + top(B) + ' ' + top(C) + ' ' + top(D) + '" fill="#6cc39c" stroke="' + G + '" stroke-width="2"/>';
          s += '<text x="210" y="192" text-anchor="middle">isometrisk tegning af en terning · isometric cube</text>';
          return s + '</svg>';
        })(),
        caption: { da: 'På isometrisk prikpapir er lodrette kanter lodrette, og vandrette kanter går skråt langs prikkerne.', en: 'On isometric dot paper, vertical edges are vertical and horizontal edges slant along the dots.' }
      },
      {
        type: 'example',
        title: { da: 'Målestoksforhold', en: 'Scale' },
        problem: { da: 'Du tegner en plantegning af et klasselokale på 9 m × 7 m i målestoksforhold 1:100. Hvor stor bliver tegningen? Og hvor lang er en tavle, der er 4 cm på tegningen?', en: 'You draw a floor plan of a 9 m × 7 m classroom at a scale of 1:100. How big is the drawing? And how long is a whiteboard that is 4 cm on the drawing?' },
        steps: {
          da: ['1:100 betyder, at 1 cm = 100 cm = 1 m. Så 9 m bliver 9 cm og 7 m bliver 7 cm.', 'Tavlen: ' + m('4 · 100 = 400') + ' cm = 4 m.'],
          en: ['1:100 means 1 cm = 100 cm = 1 m. So 9 m becomes 9 cm and 7 m becomes 7 cm.', 'The whiteboard: ' + m('4 × 100 = 400') + ' cm = 4 m.']
        },
        answer: { da: 'Tegningen er 9 cm × 7 cm. Tavlen er 4 m.', en: 'The drawing is 9 cm × 7 cm. The whiteboard is 4 m.' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Hvilke redskaber bruger du til en præcis tegning af en trekant med givne sidelængder?', en: 'Which tools do you use for an accurate drawing of a triangle with given side lengths?' }, a: { da: 'Lineal og passer (og evt. vinkelmåler til at tjekke).', en: 'Ruler and compasses (and perhaps a protractor to check).' } },
          { q: { da: 'En tegning er i 1:50. En seng er 2 m lang. Hvor lang er den på tegningen?', en: 'A drawing is at 1:50. A bed is 2 m long. How long is it on the drawing?' }, a: { da: '4 cm (' + m('200 : 50') + ').', en: '4 cm (' + m('200 ÷ 50') + ').' } },
          { q: { da: 'På et kort i 1:25.000 måler du 6 cm mellem to byer. Hvor langt er der i virkeligheden?', en: 'On a 1:25,000 map you measure 6 cm between two towns. How far is it in reality?' }, a: { da: m('6 · 25.000 = 150.000') + ' cm = 1,5 km.', en: m('6 × 25,000 = 150,000') + ' cm = 1.5 km.' } },
          { q: { da: 'Tegn en trekant med siderne 6 cm, 8 cm og 10 cm (brug passer). Mål den største vinkel. Hvad får du?', en: 'Draw a triangle with sides 6 cm, 8 cm and 10 cm (use compasses). Measure the biggest angle. What do you get?' }, a: { da: '90°. Det er en retvinklet trekant (6-8-10 er 3-4-5 ganget med 2).', en: '90°. It is a right-angled triangle (6-8-10 is 3-4-5 doubled).' } },
          { q: { da: 'Hvad er forskellen på en skitse og en præcis tegning?', en: 'What is the difference between a sketch and an accurate drawing?' }, a: { da: 'Skitsen er hurtig og omtrentlig, med målene skrevet på. Den præcise tegning har de rigtige længder og vinkler, lavet med redskaber eller et program.', en: 'The sketch is quick and approximate, with measurements written on. The accurate drawing has the correct lengths and angles, made with tools or software.' } },
          { q: { da: 'Lav en plantegning af dit eget værelse i 1:50. Mål med målebånd. Hvor stort bliver papiret, du skal bruge?', en: 'Make a floor plan of your own room at 1:50. Measure with a tape measure. How big will the paper need to be?' }, a: { da: 'Et værelse på fx 3,5 m × 3 m bliver 7 cm × 6 cm – det passer nemt på et A4-ark.', en: 'A room of e.g. 3.5 m × 3 m becomes 7 cm × 6 cm – it fits easily on an A4 sheet.' } }
        ]
      }
    ]
  };
})();
