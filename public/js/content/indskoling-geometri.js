/* ------------------------------------------------------------------
   1.–3. klasse — Geometri og måling (5 topics).
   "goals" quote the færdigheds- og vidensmål (efter 3. klassetrin) from
   Fælles Mål – Matematik; explanations follow Læseplan §5.1 (1.–3. kl.).
   ------------------------------------------------------------------ */
(function () {
  var T = window.CONTENT.topics;
  function m(s) { return '<span class="math">' + s + '</span>'; }
  var G = '#1d9a6c', GS = '#bfe9d6', GS2 = '#8fd4b5';

  /* ================================================================
     Figurer: flade og rumlige
     ================================================================ */
  T['figurer'] = {
    title: { da: 'Figurer – flade og rumlige', en: 'Shapes – flat and solid' },
    phase: [1, 2, 3],
    summary: {
      da: 'Trekanter, firkanter og cirkler – tæl sider og hjørner. Og de rumlige figurer: terning, kasse, kugle og cylinder. Hvilke flade figurer gemmer sig på dem?',
      en: 'Triangles, quadrilaterals and circles – count sides and corners. And the solid shapes: cube, box, sphere and cylinder. Which flat shapes hide on them?'
    },
    goals: {
      da: [
        'Eleven kan kategorisere figurer.',
        'Eleven kan kategorisere plane figurer efter geometriske egenskaber.',
        'Eleven kan opdage sammenhænge mellem plane og enkle rumlige figurer.',
        'Eleven har viden om geometriske egenskaber ved enkle rumlige figurer.'
      ],
      en: [
        'The pupil can categorise shapes.',
        'The pupil can categorise plane shapes by geometric properties.',
        'The pupil can discover relationships between plane shapes and simple solid shapes.',
        'The pupil has knowledge of geometric properties of simple solid shapes.'
      ]
    },
    terms: [
      { da: 'plan figur (flad figur)', en: 'plane shape (flat shape)', def: { da: 'En figur, der kan ligge fladt på papiret', en: 'A shape that can lie flat on paper' } },
      { da: 'side', en: 'side', def: { da: 'En af stregerne rundt om figuren', en: 'One of the lines around the shape' } },
      { da: 'hjørne', en: 'corner (vertex)', def: { da: 'Der, hvor to sider mødes', en: 'Where two sides meet' } },
      { da: 'trekant / firkant / femkant', en: 'triangle / quadrilateral / pentagon', def: { da: 'Figurer med 3 / 4 / 5 sider', en: 'Shapes with 3 / 4 / 5 sides' } },
      { da: 'kvadrat', en: 'square', def: { da: 'Firkant med 4 lige lange sider og 4 „rette“ hjørner', en: 'Quadrilateral with 4 equal sides and 4 "square" corners' } },
      { da: 'rektangel', en: 'rectangle', def: { da: 'Firkant med 4 rette hjørner – som en dør', en: 'Quadrilateral with 4 square corners – like a door' } },
      { da: 'rumlig figur', en: 'solid shape (3D)', def: { da: 'En figur, der fylder – man kan holde den i hånden', en: 'A shape that takes up space – you can hold it in your hand' } },
      { da: 'terning / kasse / kugle / cylinder', en: 'cube / box (cuboid) / sphere / cylinder', def: { da: 'Spilleterning / skotøjsæske / bold / dåse', en: 'Dice / shoebox / ball / tin' } },
      { da: 'sideflade', en: 'face', def: { da: 'En flad side på en rumlig figur', en: 'A flat side on a solid shape' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Sortér figurer', en: 'Sort the shapes' },
        body: {
          da: '<p>Læseplanen siger, at man i 1. klasse starter med at sortere klodser og brikker efter det, man selv lægger mærke til: farve, størrelse, form. Efterhånden kigger man på det <b>matematiske</b>: hvor mange <b>sider</b> og <b>hjørner</b> har figuren?</p>'
            + '<table><tr><th>Figur</th><th>Sider</th><th>Hjørner</th><th>Kender du den fra …</th></tr>'
            + '<tr><td><b>Trekant</b></td><td>3</td><td>3</td><td>et vejskilt, et stykke pizza</td></tr>'
            + '<tr><td><b>Firkant</b> (kvadrat, rektangel …)</td><td>4</td><td>4</td><td>et vindue, en bog, en flise</td></tr>'
            + '<tr><td><b>Femkant</b></td><td>5</td><td>5</td><td>lapperne på en fodbold</td></tr>'
            + '<tr><td><b>Sekskant</b></td><td>6</td><td>6</td><td>en bikube-celle</td></tr>'
            + '<tr><td><b>Cirkel</b></td><td>ingen lige sider</td><td>ingen</td><td>en mønt, et ur, en tallerken</td></tr></table>'
            + '<p>En figur med lige sider hedder med et fint ord en <b>polygon</b>. Cirklen er ikke en polygon – den er rund hele vejen.</p>'
            + '<p><b>Kvadrat eller rektangel?</b> Begge har 4 rette hjørner (som hjørnet på et stykke papir). I et kvadrat er alle 4 sider lige lange. I et rektangel er de to modstående sider lige lange – som en dør. Et kvadrat er altså et særligt rektangel.</p>',
          en: '<p>The curriculum says that in grade 1 you start by sorting blocks and tiles by what you notice yourself: colour, size, shape. Gradually you look at the <b>mathematical</b> things: how many <b>sides</b> and <b>corners</b> does the shape have?</p>'
            + '<table><tr><th>Shape</th><th>Sides</th><th>Corners</th><th>You know it from …</th></tr>'
            + '<tr><td><b>Triangle</b> (trekant)</td><td>3</td><td>3</td><td>a road sign, a slice of pizza</td></tr>'
            + '<tr><td><b>Quadrilateral</b> (firkant: square, rectangle …)</td><td>4</td><td>4</td><td>a window, a book, a tile</td></tr>'
            + '<tr><td><b>Pentagon</b> (femkant)</td><td>5</td><td>5</td><td>the patches on a football</td></tr>'
            + '<tr><td><b>Hexagon</b> (sekskant)</td><td>6</td><td>6</td><td>a honeycomb cell</td></tr>'
            + '<tr><td><b>Circle</b> (cirkel)</td><td>no straight sides</td><td>none</td><td>a coin, a clock, a plate</td></tr></table>'
            + '<p>A shape with straight sides is called a <b>polygon</b>. The circle is not a polygon – it is round all the way.</p>'
            + '<p><b>Square or rectangle?</b> Both have 4 square corners (like the corner of a sheet of paper). In a square all 4 sides are equal. In a rectangle the two opposite sides are equal – like a door. So a square is a special rectangle.</p>'
        }
      },
      {
        type: 'fig',
        svg: '<svg viewBox="0 0 560 130" width="560" height="130" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">'
          + '<polygon points="50,15 15,85 85,85" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><text x="50" y="110" text-anchor="middle">trekant</text>'
          + '<rect x="120" y="20" width="65" height="65" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><text x="152" y="110" text-anchor="middle">kvadrat</text>'
          + '<rect x="215" y="30" width="90" height="55" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><text x="260" y="110" text-anchor="middle">rektangel</text>'
          + '<polygon points="370,15 405,40 392,82 348,82 335,40" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><text x="370" y="110" text-anchor="middle">femkant</text>'
          + '<polygon points="470,15 500,32 500,68 470,85 440,68 440,32" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><text x="470" y="110" text-anchor="middle">sekskant</text>'
          + '<circle cx="535" cy="50" r="30" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><text x="535" y="110" text-anchor="middle">cirkel</text>'
          + '</svg>',
        caption: { da: 'Tæl sider og hjørner: 3, 4, 4, 5, 6 – og cirklen har ingen.', en: 'Count sides and corners: 3, 4, 4, 5, 6 – and the circle has none.' }
      },
      {
        type: 'text',
        title: { da: 'Rumlige figurer – og de flade figurer på dem', en: 'Solid shapes – and the flat shapes on them' },
        body: {
          da: '<p>En tegning af et kvadrat er flad. En <b>terning</b> (spilleterning) kan du holde i hånden – den er <b>rumlig</b>. Sidst i 3. klasse undersøger man rumlige figurer og finder de flade figurer, der gemmer sig på dem:</p>'
            + '<table><tr><th>Rumlig figur</th><th>Ligner</th><th>Flade figurer på den</th><th>Kan den rulle?</th></tr>'
            + '<tr><td><b>Terning</b></td><td>en spilleterning</td><td>6 kvadrater</td><td>nej</td></tr>'
            + '<tr><td><b>Kasse</b></td><td>en skotøjsæske, en mælkekarton</td><td>6 rektangler</td><td>nej</td></tr>'
            + '<tr><td><b>Cylinder</b></td><td>en dåse, et rør</td><td>2 cirkler (i enderne)</td><td>ja, på siden</td></tr>'
            + '<tr><td><b>Kugle</b></td><td>en bold</td><td>ingen – rund overalt</td><td>ja, alle veje</td></tr>'
            + '<tr><td><b>Kegle</b></td><td>en vaffelis, en kegle på vejen</td><td>1 cirkel</td><td>ja, i en bue</td></tr>'
            + '<tr><td><b>Pyramide</b></td><td>pyramiderne i Egypten</td><td>1 firkant + 4 trekanter</td><td>nej</td></tr></table>'
            + '<p><b>Prøv:</b> Klip en tom mælkekarton eller æske op langs kanterne, og fold den ud. Hvilke flade figurer består den af? Kan du folde den sammen igen? Læseplanen kalder det „opbygning og udfoldning af kasser“.</p>'
            + '<p><b>Prøv også:</b> Dyp en terning, en dåse og en kegle i maling, og tryk dem på papir. Hvilke aftryk får du?</p>',
          en: '<p>A drawing of a square is flat. A <b>cube</b> (a dice) you can hold in your hand – it is <b>solid</b>. At the end of grade 3 you investigate solid shapes and find the flat shapes hiding on them:</p>'
            + '<table><tr><th>Solid shape</th><th>Looks like</th><th>Flat shapes on it</th><th>Can it roll?</th></tr>'
            + '<tr><td><b>Cube</b> (terning)</td><td>a dice</td><td>6 squares</td><td>no</td></tr>'
            + '<tr><td><b>Box</b> (kasse)</td><td>a shoebox, a milk carton</td><td>6 rectangles</td><td>no</td></tr>'
            + '<tr><td><b>Cylinder</b></td><td>a tin, a tube</td><td>2 circles (at the ends)</td><td>yes, on its side</td></tr>'
            + '<tr><td><b>Sphere</b> (kugle)</td><td>a ball</td><td>none – round everywhere</td><td>yes, every way</td></tr>'
            + '<tr><td><b>Cone</b> (kegle)</td><td>an ice cream cone, a traffic cone</td><td>1 circle</td><td>yes, in a curve</td></tr>'
            + '<tr><td><b>Pyramid</b></td><td>the pyramids of Egypt</td><td>1 square + 4 triangles</td><td>no</td></tr></table>'
            + '<p><b>Try:</b> Cut an empty milk carton or box open along the edges and unfold it. Which flat shapes is it made of? Can you fold it back up? The curriculum calls this "building and unfolding boxes".</p>'
            + '<p><b>Also try:</b> Dip a cube, a tin and a cone in paint and press them on paper. What prints do you get?</p>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Hvor mange sider og hjørner har en firkant?', en: 'How many sides and corners does a quadrilateral have?' }, a: { da: '4 sider og 4 hjørner.', en: '4 sides and 4 corners.' } },
          { q: { da: 'Hvilken figur har 3 hjørner?', en: 'Which shape has 3 corners?' }, a: { da: 'En trekant.', en: 'A triangle.' } },
          { q: { da: 'Find 3 ting derhjemme, der er rektangler, og 3 ting, der er cirkler.', en: 'Find 3 things at home that are rectangles and 3 that are circles.' }, a: { da: 'Fx dør, bog, tv – og tallerken, mønt, ur.', en: 'E.g. door, book, TV – and plate, coin, clock.' } },
          { q: { da: 'Hvad er forskellen på et kvadrat og et rektangel?', en: 'What is the difference between a square and a rectangle?' }, a: { da: 'I kvadratet er alle 4 sider lige lange. I rektanglet er kun de modstående sider lige lange. Begge har 4 rette hjørner.', en: 'In the square all 4 sides are equal. In the rectangle only the opposite sides are equal. Both have 4 square corners.' } },
          { q: { da: 'Hvilke flade figurer er der på en terning? Hvor mange?', en: 'Which flat shapes are on a cube? How many?' }, a: { da: '6 kvadrater.', en: '6 squares.' } },
          { q: { da: 'Hvilken rumlig figur er en dåse? Hvilke flade figurer har den i enderne?', en: 'Which solid shape is a tin? Which flat shapes are at its ends?' }, a: { da: 'En cylinder – med en cirkel i hver ende.', en: 'A cylinder – with a circle at each end.' } },
          { q: { da: 'Hvorfor kan en kugle rulle, men ikke en terning?', en: 'Why can a sphere roll but not a cube?' }, a: { da: 'Kuglen er rund overalt. Terningen har flade sider og hjørner, der stopper den.', en: 'The sphere is round everywhere. The cube has flat faces and corners that stop it.' } }
        ]
      }
    ]
  };

  /* ================================================================
     Tegne, bygge og spejle
     ================================================================ */
  T['tegne-og-bygge'] = {
    title: { da: 'Tegne, bygge og spejle', en: 'Drawing, building and mirroring' },
    phase: [1, 2, 3],
    summary: {
      da: 'Tegn figurer efter en beskrivelse, byg med klodser, fold og klip – og find spejlingssymmetri i bogstaver, sommerfugle og bygninger.',
      en: 'Draw shapes from a description, build with blocks, fold and cut – and find mirror symmetry in letters, butterflies and buildings.'
    },
    goals: {
      da: [
        'Eleven kan beskrive egne tegninger af omverdenen med geometrisk sprog.',
        'Eleven kan tegne enkle plane figurer ud fra givne betingelser og plane figurer, der gengiver enkle træk fra omverdenen.',
        'Eleven kan bygge og tegne rumlige figurer.',
        'Eleven kan beskrive og fremstille figurer og mønstre med spejlingssymmetri.'
      ],
      en: [
        'The pupil can describe their own drawings of the surroundings using geometric language.',
        'The pupil can draw simple plane shapes from given conditions, and plane shapes that reproduce simple features of the surroundings.',
        'The pupil can build and draw solid shapes.',
        'The pupil can describe and create shapes and patterns with mirror symmetry.'
      ]
    },
    terms: [
      { da: 'lineal', en: 'ruler', def: { da: 'Til at tegne lige streger og måle', en: 'For drawing straight lines and measuring' } },
      { da: 'skitse', en: 'sketch', def: { da: 'En hurtig tegning', en: 'A quick drawing' } },
      { da: 'spejlingssymmetri', en: 'mirror symmetry', def: { da: 'Når de to halvdele er hinandens spejlbillede', en: 'When the two halves are mirror images of each other' } },
      { da: 'symmetriakse', en: 'line of symmetry', def: { da: 'Linjen, man kan folde langs, så halvdelene passer', en: 'The line you can fold along so the halves match' } },
      { da: 'byggevejledning', en: 'building instructions', def: { da: 'Tegninger, der viser, hvordan noget bygges – som til LEGO', en: 'Drawings that show how to build something – like for LEGO' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Tegn efter en beskrivelse', en: 'Draw from a description' },
        body: {
          da: '<p>I starten tegner man bare det, man ser: sit hus, sit værelse, vejen til skole. Efterhånden bliver tegningerne mere <b>præcise</b> – med lineal og rigtige mål. Læseplanen siger, at man også kan bruge et <b>dynamisk geometriprogram</b> på computer eller tablet.</p>'
            + '<p><b>Prøv at tegne:</b></p>'
            + '<ul><li>„En firkant med fire lige lange sider.“ (Hvad hedder den? Et kvadrat.)</li>'
            + '<li>„Et rektangel, der er 6 cm langt og 3 cm bredt.“ Brug linealen!</li>'
            + '<li>„En trekant, hvor to sider er lige lange.“</li>'
            + '<li>„Et hus af et kvadrat og en trekant.“</li></ul>'
            + '<p>Bagefter: <b>beskriv</b> din tegning med de rigtige ord – sider, hjørner, lige lange, rund, større end.</p>'
            + '<p>Du kan også <b>folde og klippe</b>: fold et papir én gang, klip en form, fold ud – hvad får du? Læseplanen nævner netop „folde, klippe og forme“.</p>',
          en: '<p>At first you just draw what you see: your house, your room, the way to school. Gradually the drawings become more <b>accurate</b> – with a ruler and real measurements. The curriculum says you can also use <b>dynamic geometry software</b> on a computer or tablet.</p>'
            + '<p><b>Try drawing:</b></p>'
            + '<ul><li>"A quadrilateral with four equal sides." (What is it called? A square.)</li>'
            + '<li>"A rectangle 6 cm long and 3 cm wide." Use the ruler!</li>'
            + '<li>"A triangle where two sides are equal."</li>'
            + '<li>"A house made of a square and a triangle."</li></ul>'
            + '<p>Afterwards: <b>describe</b> your drawing with the right words – sides, corners, equal length, round, bigger than.</p>'
            + '<p>You can also <b>fold and cut</b>: fold a paper once, cut a shape, unfold – what do you get? The curriculum mentions exactly "folding, cutting and shaping".</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Spejlingssymmetri', en: 'Mirror symmetry' },
        body: {
          da: '<p>Når du folder et papir én gang, klipper en figur og folder ud, får du to halvdele, der er <b>præcis ens – bare spejlvendte</b>. Det er <b>spejlingssymmetri</b>. Foldelinjen kaldes <b>symmetriaksen</b>.</p>'
            + '<p>Symmetri er overalt (læseplanen siger: i naturen, i bygninger og i kunst):</p>'
            + '<ul><li>En <b>sommerfugl</b> – de to vinger er ens.</li>'
            + '<li>Et <b>ansigt</b> – nogenlunde.</li>'
            + '<li><b>Bogstaver:</b> A, H, M, T, V, W har en lodret symmetriakse. B, C, D, E har en vandret. Hvad med F og G? Ingen!</li>'
            + '<li>Et <b>kvadrat</b> har hele 4 symmetriakser. En <b>cirkel</b> har uendeligt mange.</li></ul>'
            + '<p><b>Test med et spejl:</b> Stil et lille spejl lodret midt på figuren. Hvis spejlbilledet plus den halvdel, du kan se, ligner hele figuren, er der symmetri.</p>'
            + '<p><b>Lav dit eget:</b> Tegn en halv figur op ad en foldelinje på ternet papir, og tegn spejlbilledet på den anden side – tæl tern for at ramme rigtigt.</p>',
          en: '<p>When you fold a paper once, cut a shape and unfold it, you get two halves that are <b>exactly the same – just mirrored</b>. That is <b>mirror symmetry</b>. The fold line is called the <b>line of symmetry</b>.</p>'
            + '<p>Symmetry is everywhere (the curriculum says: in nature, in buildings and in art):</p>'
            + '<ul><li>A <b>butterfly</b> – the two wings are the same.</li>'
            + '<li>A <b>face</b> – more or less.</li>'
            + '<li><b>Letters:</b> A, H, M, T, V, W have a vertical line of symmetry. B, C, D, E have a horizontal one. What about F and G? None!</li>'
            + '<li>A <b>square</b> has 4 lines of symmetry. A <b>circle</b> has infinitely many.</li></ul>'
            + '<p><b>Test with a mirror:</b> Stand a small mirror upright in the middle of the shape. If the reflection plus the half you can see looks like the whole shape, there is symmetry.</p>'
            + '<p><b>Make your own:</b> Draw half a shape against a fold line on squared paper, and draw the mirror image on the other side – count squares to get it right.</p>'
        }
      },
      {
        type: 'fig',
        svg: '<svg viewBox="0 0 480 150" width="480" height="150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">'
          + '<g transform="translate(20,10)"><path d="M60,20 C30,0 5,25 25,55 C5,80 35,105 60,80 C85,105 115,80 95,55 C115,25 90,0 60,20 Z" fill="' + GS + '" stroke="' + G + '" stroke-width="2"/><line x1="60" y1="5" x2="60" y2="115" stroke="#1c2430" stroke-width="1.5" stroke-dasharray="5 4"/><text x="60" y="135" text-anchor="middle">sommerfugl</text></g>'
          + '<g transform="translate(170,10)"><text x="45" y="85" font-size="72" font-weight="bold" text-anchor="middle" fill="' + GS2 + '" stroke="' + G + '" stroke-width="1.5">A</text><line x1="45" y1="15" x2="45" y2="105" stroke="#1c2430" stroke-width="1.5" stroke-dasharray="5 4"/><text x="45" y="135" text-anchor="middle">lodret akse</text></g>'
          + '<g transform="translate(290,10)"><text x="45" y="85" font-size="72" font-weight="bold" text-anchor="middle" fill="' + GS2 + '" stroke="' + G + '" stroke-width="1.5">E</text><line x1="5" y1="59" x2="90" y2="59" stroke="#1c2430" stroke-width="1.5" stroke-dasharray="5 4"/><text x="45" y="135" text-anchor="middle">vandret akse</text></g>'
          + '<g transform="translate(400,10)"><text x="35" y="85" font-size="72" font-weight="bold" text-anchor="middle" fill="' + GS2 + '" stroke="' + G + '" stroke-width="1.5">F</text><text x="35" y="135" text-anchor="middle">ingen</text></g>'
          + '</svg>',
        caption: { da: 'Symmetriakser: sommerfuglen og A har en lodret, E har en vandret – og F har ingen.', en: 'Lines of symmetry: the butterfly and A have a vertical one, E a horizontal one – and F has none.' }
      },
      {
        type: 'text',
        title: { da: 'Byg og tegn rumlige figurer', en: 'Build and draw solid shapes' },
        body: {
          da: '<p>Sidst i 3. klasse bygger og tegner man rumlige figurer – med klodser, pap eller træpinde (læseplanen nævner „brikker, pap eller træpinde“).</p>'
            + '<ul><li><b>Byg</b> en kasse af 12 tændstikker eller sugerør (kanterne) og modellervoks (hjørnerne). Hvor mange hjørner skal du bruge? 8.</li>'
            + '<li><b>Byg</b> en trappe eller et tårn af centicubes, og lav en <b>byggevejledning</b>: tegn, hvordan det ser ud forfra og oppefra, så en ven kan bygge det samme.</li>'
            + '<li><b>Tegn</b> en terning: tegn et kvadrat, tegn et kvadrat magen til lidt op og til højre, og forbind hjørnerne. Nu ser den rumlig ud!</li>'
            + '<li><b>Tegn</b> en udfoldning af en terning: 6 kvadrater i et kors. Klip den ud, og fold – bliver det en terning?</li></ul>',
          en: '<p>At the end of grade 3 you build and draw solid shapes – with blocks, card or wooden sticks (the curriculum mentions "tiles, cardboard or wooden sticks").</p>'
            + '<ul><li><b>Build</b> a box from 12 matchsticks or straws (the edges) and modelling clay (the corners). How many corners do you need? 8.</li>'
            + '<li><b>Build</b> a staircase or tower from centicubes, and make <b>building instructions</b>: draw what it looks like from the front and from above, so a friend can build the same.</li>'
            + '<li><b>Draw</b> a cube: draw a square, draw an identical square a little up and to the right, and join the corners. Now it looks solid!</li>'
            + '<li><b>Draw</b> a net of a cube: 6 squares in a cross. Cut it out and fold – does it make a cube?</li></ul>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Tegn et rektangel, der er 5 cm langt og 2 cm bredt. Hvor mange rette hjørner har det?', en: 'Draw a rectangle 5 cm long and 2 cm wide. How many square corners does it have?' }, a: { da: '4.', en: '4.' } },
          { q: { da: 'Hvilke af bogstaverne har en lodret symmetriakse: H, L, M, N, T?', en: 'Which of these letters have a vertical line of symmetry: H, L, M, N, T?' }, a: { da: 'H, M og T.', en: 'H, M and T.' } },
          { q: { da: 'Fold et papir, klip en halv hjerteform ved folden, og fold ud. Hvorfor bliver hjertet symmetrisk?', en: 'Fold a paper, cut half a heart at the fold, and unfold. Why is the heart symmetrical?' }, a: { da: 'Fordi begge halvdele blev klippet på én gang – de er spejlbilleder af hinanden, og folden er symmetriaksen.', en: 'Because both halves were cut at once – they are mirror images of each other, and the fold is the line of symmetry.' } },
          { q: { da: 'Hvor mange symmetriakser har et kvadrat? Prøv at folde et kvadratisk papir.', en: 'How many lines of symmetry does a square have? Try folding a square piece of paper.' }, a: { da: '4 – to gennem midten af siderne og to gennem hjørnerne.', en: '4 – two through the middles of the sides and two through the corners.' } },
          { q: { da: 'Du skal bygge en kasse af sugerør og modellervoks. Hvor mange sugerør (kanter) og hvor mange kugler (hjørner)?', en: 'You are building a box from straws and modelling clay. How many straws (edges) and how many balls (corners)?' }, a: { da: '12 sugerør og 8 kugler.', en: '12 straws and 8 balls.' } },
          { q: { da: 'Beskriv en tegning af et hus med geometriske ord.', en: 'Describe a drawing of a house using geometric words.' }, a: { da: 'Fx: „Væggene er et kvadrat, taget er en trekant, døren er et rektangel, og vinduet er rundt – en cirkel.“', en: 'E.g.: "The walls are a square, the roof is a triangle, the door is a rectangle, and the window is round – a circle."' } }
        ]
      }
    ]
  };

  /* ================================================================
     Placeringer og retninger
     ================================================================ */
  T['placeringer'] = {
    title: { da: 'Placeringer og retninger', en: 'Positions and directions' },
    phase: [1, 3],
    summary: {
      da: 'Over, under, ved siden af, til venstre for … Og hvordan man finder et felt i et gitternet – som i et spil sænke slagskibe.',
      en: 'Above, below, next to, to the left of … And how to find a square in a grid – like in a game of battleships.'
    },
    goals: {
      da: [
        'Eleven kan beskrive objekters placering i forhold til hinanden.',
        'Eleven har viden om forholdsord, der kan beskrive placeringer.',
        'Eleven kan beskrive positioner i et gitternet.',
        'Eleven har viden om angivelse af placeringer i gitternet.'
      ],
      en: [
        'The pupil can describe the position of objects in relation to each other.',
        'The pupil has knowledge of prepositions that describe positions.',
        'The pupil can describe positions in a grid.',
        'The pupil has knowledge of how positions are given in a grid.'
      ]
    },
    terms: [
      { da: 'forholdsord', en: 'preposition', def: { da: 'Små ord, der siger hvor: over, under, ved siden af, mellem', en: 'Little words that say where: above, below, next to, between' } },
      { da: 'venstre / højre', en: 'left / right', def: { da: 'Din venstre hånd er den, der laver et L med tommel og pegefinger', en: 'Your left hand is the one that makes an L with thumb and index finger' } },
      { da: 'gitternet', en: 'grid', def: { da: 'Et net af felter i rækker og kolonner', en: 'A net of squares in rows and columns' } },
      { da: 'række / kolonne', en: 'row / column', def: { da: 'Vandret linje af felter / lodret linje af felter', en: 'Horizontal line of squares / vertical line of squares' } },
      { da: 'felt', en: 'square (cell)', def: { da: 'Ét lille rum i gitternettet, fx B3', en: 'One small box in the grid, e.g. B3' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Hvor er det? Forholdsordene', en: 'Where is it? The prepositions' },
        body: {
          da: '<p>Læseplanen nævner en hel liste af ord, man skal kunne bruge til at sige, hvor noget er: <b>over, under, ved siden af, på, foran, bagved, indenfor, udenfor, mellem, langs</b> – og retningerne <b>venstre, højre, op, ned</b>.</p>'
            + '<p><b>Leg:</b> Én beskriver, hvor bamsen skal stå, og den anden gør det. „Sæt bamsen <i>under</i> stolen.“ „Læg bogen <i>mellem</i> koppen og lampen.“ „Stil koppen <i>til højre for</i> tallerkenen.“</p>'
            + '<p><b>Sværere:</b> Beskriv vejen fra døren til dit bord: „Gå ligeud, drej til venstre ved reolen, og mit bord er det andet på højre hånd.“</p>'
            + '<p><b>Husk venstre og højre:</b> Hold hænderne op med håndfladerne væk fra dig. Den hånd, hvor tommel og pegefinger laver et L, er <b>L</b>-venstre… hmm, på dansk hedder det <i>venstre</i>, men L-tricket virker stadig, hvis du tænker på engelsk „Left“.</p>',
          en: '<p>The curriculum lists a whole set of words you should be able to use to say where something is: <b>above, below, next to, on, in front of, behind, inside, outside, between, along</b> – and the directions <b>left, right, up, down</b>.</p>'
            + '<p><b>Game:</b> One person describes where the teddy should go, the other does it. "Put the teddy <i>under</i> the chair." "Put the book <i>between</i> the cup and the lamp." "Stand the cup <i>to the right of</i> the plate."</p>'
            + '<p><b>Harder:</b> Describe the way from the door to your desk: "Go straight ahead, turn left at the bookcase, and my desk is the second on the right."</p>'
            + '<p><b>Remembering left and right:</b> Hold your hands up with the palms facing away. The hand where thumb and index finger make an L is <b>L</b>eft.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Find feltet i gitternettet', en: 'Find the square in the grid' },
        body: {
          da: '<p>Sidst i 3. klasse lærer man at finde et bestemt felt i et <b>gitternet</b>. Kolonnerne har bogstaver (A, B, C …), og rækkerne har tal (1, 2, 3 …). Feltet <b>B3</b> er der, hvor kolonne B og række 3 mødes.</p>'
            + '<p>Det bruges i:</p>'
            + '<ul><li><b>Sænke slagskibe</b> – „Jeg skyder på D5!“</li>'
            + '<li><b>Skak</b> – brikkerne står på felter som e4.</li>'
            + '<li><b>Kort</b> – „Svømmehallen ligger i felt C2.“</li>'
            + '<li><b>Regneark</b> – hver celle har et navn som B3.</li></ul>'
            + '<p>Husk rækkefølgen: <b>først bogstavet (hen), så tallet (op)</b>. I 4. klasse bliver gitternettet til et <a href="#/koordinatsystem">koordinatsystem</a>, hvor begge dele er tal: (2, 3).</p>',
          en: '<p>At the end of grade 3 you learn to find a particular square in a <b>grid</b>. The columns have letters (A, B, C …) and the rows have numbers (1, 2, 3 …). The square <b>B3</b> is where column B and row 3 meet.</p>'
            + '<p>It is used in:</p>'
            + '<ul><li><b>Battleships</b> – "I fire at D5!"</li>'
            + '<li><b>Chess</b> – the pieces stand on squares like e4.</li>'
            + '<li><b>Maps</b> – "The swimming pool is in square C2."</li>'
            + '<li><b>Spreadsheets</b> – every cell has a name like B3.</li></ul>'
            + '<p>Remember the order: <b>first the letter (along), then the number (up)</b>. In grade 4 the grid becomes a <a href="#/koordinatsystem">coordinate system</a>, where both parts are numbers: (2, 3).</p>'
        }
      },
      {
        type: 'fig',
        svg: (function () {
          var s = '<svg viewBox="0 0 300 250" width="300" height="250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="14" fill="currentColor">';
          var ox = 40, oy = 20, u = 40, cols = 'ABCDE';
          for (var r = 0; r < 5; r++) for (var c = 0; c < 5; c++) { var hi = (c === 1 && r === 2) || (c === 3 && r === 0); s += '<rect x="' + (ox + c * u) + '" y="' + (oy + (4 - r) * u) + '" width="' + u + '" height="' + u + '" fill="' + (hi ? GS : 'transparent') + '" stroke="' + G + '" stroke-width="1.5"/>'; }
          for (var i = 0; i < 5; i++) { s += '<text x="' + (ox + i * u + u / 2) + '" y="' + (oy + 5 * u + 18) + '" text-anchor="middle" font-weight="bold">' + cols[i] + '</text><text x="' + (ox - 12) + '" y="' + (oy + (4 - i) * u + u / 2 + 5) + '" text-anchor="end" font-weight="bold">' + (i + 1) + '</text>'; }
          s += '<text x="' + (ox + 1 * u + u / 2) + '" y="' + (oy + 2 * u + u / 2 + 5) + '" text-anchor="middle" font-size="22">🚢</text>';
          s += '<text x="' + (ox + 3 * u + u / 2) + '" y="' + (oy + 4 * u + u / 2 + 5) + '" text-anchor="middle" font-size="22">⭐</text>';
          return s + '</svg>';
        })(),
        caption: { da: 'Skibet står i B3, og stjernen er i D1. Først bogstavet, så tallet.', en: 'The ship is at B3, and the star is at D1. First the letter, then the number.' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Læg en blyant på bordet. Læg et viskelæder til venstre for den og en bog bag den. Beskriv med ord, hvor tingene ligger.', en: 'Put a pencil on the table. Put an eraser to the left of it and a book behind it. Describe in words where the things are.' }, a: { da: 'Fx: „Viskelæderet ligger til venstre for blyanten. Bogen ligger bagved blyanten. Blyanten ligger mellem viskelæderet og … “', en: 'E.g.: "The eraser is to the left of the pencil. The book is behind the pencil. The pencil is between the eraser and …"' } },
          { q: { da: 'I gitternettet ovenfor: hvilket felt ligger lige over skibet?', en: 'In the grid above: which square is directly above the ship?' }, a: { da: 'B4.', en: 'B4.' } },
          { q: { da: 'Hvilket felt ligger til højre for stjernen?', en: 'Which square is to the right of the star?' }, a: { da: 'E1.', en: 'E1.' } },
          { q: { da: 'Er C2 og B3 det samme felt?', en: 'Are C2 and B3 the same square?' }, a: { da: 'Nej. C2 er kolonne C, række 2. B3 er kolonne B, række 3.', en: 'No. C2 is column C, row 2. B3 is column B, row 3.' } },
          { q: { da: 'Tegn et gitternet med kolonner A–D og rækker 1–4. Sæt et kryds i A4 og et i D1. Hvad ligger i midten mellem dem?', en: 'Draw a grid with columns A–D and rows 1–4. Put a cross at A4 and one at D1. What lies in the middle between them?' }, a: { da: 'Felterne B3 og C2 ligger på linjen imellem.', en: 'The squares B3 and C2 lie on the line between them.' } },
          { q: { da: 'Beskriv vejen fra din hoveddør til dit værelse med ordene ligeud, venstre, højre.', en: 'Describe the way from your front door to your room using straight ahead, left, right.' }, a: { da: 'Dit eget svar – prøv, om en anden kan følge beskrivelsen!', en: 'Your own answer – test whether someone else can follow the description!' } }
        ]
      }
    ]
  };

  /* ================================================================
     Længde, tid og vægt
     ================================================================ */
  T['laengde-tid-vaegt'] = {
    title: { da: 'Længde, tid og vægt', en: 'Length, time and weight' },
    phase: [1, 2],
    summary: {
      da: 'Mål med fødder og blyanter – og med lineal, målebånd og vægt. Lær klokken, kalenderen og enhederne meter, centimeter, gram og kilo.',
      en: 'Measure with feet and pencils – and with a ruler, tape measure and scales. Learn the clock, the calendar and the units metre, centimetre, gram and kilo.'
    },
    goals: {
      da: [
        'Eleven kan beskrive længde, tid og vægt.',
        'Eleven kan anslå og måle længde, tid og vægt.',
        'Eleven har viden om standardiserede og ikke-standardiserede måleenheder for længde, tid og vægt samt om analoge og digitale måleredskaber.',
        'Eleven kan anslå og måle længde, tid og vægt i enkle hverdagssammenhænge. (opmærksomhedspunkt)'
      ],
      en: [
        'The pupil can describe length, time and weight.',
        'The pupil can estimate and measure length, time and weight.',
        'The pupil has knowledge of standard and non-standard units for length, time and weight, and of analogue and digital measuring tools.',
        'The pupil can estimate and measure length, time and weight in simple everyday contexts. (attention point)'
      ]
    },
    terms: [
      { da: 'måle', en: 'measure', def: { da: 'Finde ud af, hvor langt, tungt eller længe noget er', en: 'Find out how long, heavy or how much time something is' } },
      { da: 'anslå', en: 'estimate', def: { da: 'Gætte fornuftigt uden at måle', en: 'Guess sensibly without measuring' } },
      { da: 'enhed', en: 'unit', def: { da: 'Det, man måler i: cm, m, kg, minutter', en: 'What you measure in: cm, m, kg, minutes' } },
      { da: 'meter (m) / centimeter (cm)', en: 'metre (m) / centimetre (cm)', def: { da: '1 m = 100 cm. En dør er ca. 2 m. En finger er ca. 1 cm bred', en: '1 m = 100 cm. A door is about 2 m. A finger is about 1 cm wide' } },
      { da: 'kilogram (kg) / gram (g)', en: 'kilogram (kg) / gram (g)', def: { da: '1 kg = 1000 g. En liter mælk vejer ca. 1 kg', en: '1 kg = 1000 g. A litre of milk weighs about 1 kg' } },
      { da: 'time / minut', en: 'hour / minute', def: { da: '1 time = 60 minutter', en: '1 hour = 60 minutes' } },
      { da: 'analogt / digitalt ur', en: 'analogue / digital clock', def: { da: 'Ur med visere / ur med tal (14:30)', en: 'Clock with hands / clock with numbers (14:30)' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Først sammenligne, så måle', en: 'First compare, then measure' },
        body: {
          da: '<p>Læseplanen siger, at man starter med at <b>sammenligne</b>: Hvem er højest? Hvad er tungest? Hvad tager længst tid? Man bruger ord som <b>kortere/længere, højere/lavere, lettere/tungere, hurtigere/langsommere, tidligere/senere</b>.</p>'
            + '<p>Så måler man med ting, man har ved hånden – <b>ikke-standardiserede enheder</b>: „Bordet er 6 blyanter langt.“ „Gangen er 20 skridt.“ Men så opdager man et problem: din lillebrors skridt er kortere end dine! Derfor har vi <b>standardiserede enheder</b>, som er ens for alle:</p>'
            + '<table><tr><th>Længde</th><th>Vægt</th><th>Tid</th></tr>'
            + '<tr><td>millimeter (mm) – tyk som et kort</td><td>gram (g) – en vingummi</td><td>sekund (s) – sig „enogtyve“</td></tr>'
            + '<tr><td>centimeter (cm) – en finger bred</td><td>kilogram (kg) – en liter mælk</td><td>minut (min) – 60 sekunder</td></tr>'
            + '<tr><td>meter (m) – et stort skridt</td><td></td><td>time – 60 minutter</td></tr>'
            + '<tr><td>kilometer (km) – 1000 m, ca. 12 minutters gang</td><td></td><td>døgn – 24 timer</td></tr></table>'
            + '<p>' + m('1 m = 100 cm') + ', ' + m('1 cm = 10 mm') + ', ' + m('1 km = 1000 m') + ', ' + m('1 kg = 1000 g') + '.</p>'
            + '<p><b>Redskaber:</b> lineal og målebånd (længde), køkkenvægt og badevægt (vægt), ur og stopur (tid). Nogle er <b>analoge</b> (visere, en pil på vægten), andre <b>digitale</b> (viser tal). Du skal kunne bruge begge slags.</p>',
          en: '<p>The curriculum says you start by <b>comparing</b>: Who is tallest? What is heaviest? What takes longest? You use words like <b>shorter/longer, taller/lower, lighter/heavier, faster/slower, earlier/later</b>.</p>'
            + '<p>Then you measure with things you have at hand – <b>non-standard units</b>: "The table is 6 pencils long." "The corridor is 20 steps." But then you discover a problem: your little brother\'s steps are shorter than yours! That is why we have <b>standard units</b>, which are the same for everyone:</p>'
            + '<table><tr><th>Length</th><th>Weight</th><th>Time</th></tr>'
            + '<tr><td>millimetre (mm) – as thick as a card</td><td>gram (g) – a wine gum</td><td>second (s) – say "twenty-one"</td></tr>'
            + '<tr><td>centimetre (cm) – a finger wide</td><td>kilogram (kg) – a litre of milk</td><td>minute (min) – 60 seconds</td></tr>'
            + '<tr><td>metre (m) – a big step</td><td></td><td>hour – 60 minutes</td></tr>'
            + '<tr><td>kilometre (km) – 1000 m, about a 12-minute walk</td><td></td><td>day – 24 hours</td></tr></table>'
            + '<p>' + m('1 m = 100 cm') + ', ' + m('1 cm = 10 mm') + ', ' + m('1 km = 1000 m') + ', ' + m('1 kg = 1000 g') + '.</p>'
            + '<p><b>Tools:</b> ruler and tape measure (length), kitchen scales and bathroom scales (weight), clock and stopwatch (time). Some are <b>analogue</b> (hands, a pointer on the scales), others <b>digital</b> (show numbers). You should be able to use both kinds.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Klokken', en: 'The clock' },
        body: {
          da: '<p>Et <b>analogt ur</b> har to visere. Den <b>korte</b> viser timer. Den <b>lange</b> viser minutter. Når den lange viser peger lige op på 12, er klokken „hel“.</p>'
            + '<table><tr><th>Lang viser peger på</th><th>Vi siger</th><th>Digitalt</th></tr>'
            + '<tr><td>12</td><td>klokken er <b>tre</b></td><td>3:00</td></tr>'
            + '<tr><td>3</td><td><b>kvart over</b> tre</td><td>3:15</td></tr>'
            + '<tr><td>6</td><td><b>halv fire</b> (en halv time før fire!)</td><td>3:30</td></tr>'
            + '<tr><td>9</td><td><b>kvart i</b> fire</td><td>3:45</td></tr></table>'
            + '<p><b>Pas på „halv“:</b> På dansk betyder „halv fire“ 3:30 – en halv time <i>før</i> fire. (På engelsk siger man „half past three“ – en halv time <i>efter</i> tre. Samme klokkeslæt, to måder at sige det på!)</p>'
            + '<p>Den lange viser går én hel omgang på 60 minutter. Fra tal til tal er der 5 minutter: peger den på 2, er det 10 minutter over. Peger den på 4, er det 20 minutter over.</p>'
            + '<p><b>Digitalt ur:</b> 14:30 – timerne før kolon, minutterne efter. Efter 12 middag fortsætter tallene: 13, 14, 15 … så 14:30 er halv tre om eftermiddagen.</p>'
            + '<p><b>Kalender:</b> 7 dage i en uge, 12 måneder i et år, ca. 30 dage i en måned, 365 dage i et år. Kan du månederne i rækkefølge?</p>',
          en: '<p>An <b>analogue clock</b> has two hands. The <b>short</b> one shows hours. The <b>long</b> one shows minutes. When the long hand points straight up at 12, it is "o\'clock".</p>'
            + '<table><tr><th>Long hand points at</th><th>We say (Danish)</th><th>Digital</th></tr>'
            + '<tr><td>12</td><td>klokken er <b>tre</b> – three o\'clock</td><td>3:00</td></tr>'
            + '<tr><td>3</td><td><b>kvart over</b> tre – quarter past three</td><td>3:15</td></tr>'
            + '<tr><td>6</td><td><b>halv fire</b> – half past three</td><td>3:30</td></tr>'
            + '<tr><td>9</td><td><b>kvart i</b> fire – quarter to four</td><td>3:45</td></tr></table>'
            + '<p><b>Watch out for "halv":</b> In Danish "halv fire" means 3:30 – half an hour <i>before</i> four. In English we say "half past three" – half an hour <i>after</i> three. Same time, two ways of saying it!</p>'
            + '<p>The long hand goes one full turn in 60 minutes. From number to number is 5 minutes: if it points at 2, it is 10 minutes past. At 4, it is 20 minutes past.</p>'
            + '<p><b>Digital clock:</b> 14:30 – hours before the colon, minutes after. After 12 noon the numbers continue: 13, 14, 15 … so 14:30 is half past two in the afternoon.</p>'
            + '<p><b>Calendar:</b> 7 days in a week, 12 months in a year, about 30 days in a month, 365 days in a year. Can you say the months in order?</p>'
        }
      },
      { type: 'widget', widget: 'clock', title: { da: 'Hvad er klokken?', en: 'What time is it?' } },
      {
        type: 'example',
        title: { da: 'Anslå først – mål så', en: 'Estimate first – then measure' },
        problem: { da: 'Hvor langt er dit bord? Hvor meget vejer din skoletaske? Hvor lang tid tager det at børste tænder?', en: 'How long is your desk? How much does your school bag weigh? How long does it take to brush your teeth?' },
        steps: {
          da: [
            '<b>Anslå:</b> Bordet er cirka som mine to underarme – måske 1 m? Tasken føles som 3 liter mælk – måske 3 kg? Tandbørstning føles som … 2 minutter?',
            '<b>Vælg redskab og enhed:</b> målebånd i cm, badevægt i kg, stopur (eller mobilen) i minutter og sekunder.',
            '<b>Mål:</b> Bordet: 120 cm = 1 m og 20 cm. Tasken: 2,5 kg. Tandbørstning: 1 minut og 40 sekunder.',
            '<b>Sammenlign:</b> Var dit gæt tæt på? Det bliver du bedre til, jo mere du måler.'
          ],
          en: [
            '<b>Estimate:</b> The desk is about my two forearms – maybe 1 m? The bag feels like 3 litres of milk – maybe 3 kg? Brushing teeth feels like … 2 minutes?',
            '<b>Choose a tool and unit:</b> tape measure in cm, bathroom scales in kg, stopwatch (or phone) in minutes and seconds.',
            '<b>Measure:</b> The desk: 120 cm = 1 m and 20 cm. The bag: 2.5 kg. Brushing: 1 minute 40 seconds.',
            '<b>Compare:</b> Was your guess close? You get better at it the more you measure.'
          ]
        },
        answer: { da: 'Dine egne målinger – skriv dem ned!', en: 'Your own measurements – write them down!' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Hvilken enhed passer bedst: længden af en bus – cm, m eller km?', en: 'Which unit fits best: the length of a bus – cm, m or km?' }, a: { da: 'Meter (ca. 12 m).', en: 'Metres (about 12 m).' } },
          { q: { da: 'Hvad vejer mest: 1 kg fjer eller 1 kg sten?', en: 'What weighs more: 1 kg of feathers or 1 kg of stones?' }, a: { da: 'Lige meget – begge er 1 kg! (Fjerene fylder bare mere.)', en: 'The same – both are 1 kg! (The feathers just take up more room.)' } },
          { q: { da: 'Hvor mange cm er 2 m?', en: 'How many cm is 2 m?' }, a: { da: '200 cm.', en: '200 cm.' } },
          { q: { da: 'Den lange viser peger på 6, og den korte er mellem 7 og 8. Hvad er klokken?', en: 'The long hand points at 6, and the short hand is between 7 and 8. What time is it?' }, a: { da: 'Halv otte (7:30).', en: 'Half past seven (7:30).' } },
          { q: { da: 'Skriv „kvart i ni“ med tal.', en: 'Write "quarter to nine" in numbers.' }, a: { da: '8:45.', en: '8:45.' } },
          { q: { da: 'Skolen starter 8:00, og der er 45 minutter til frikvarter. Hvornår er der frikvarter?', en: 'School starts at 8:00, and it is 45 minutes until break. When is break?' }, a: { da: '8:45.', en: '8:45.' } },
          { q: { da: 'Mål din fod i cm. Hvor mange af dine fødder er dit værelse langt? Mål så med målebånd. Passer det?', en: 'Measure your foot in cm. How many of your feet long is your room? Then measure with a tape measure. Does it match?' }, a: { da: 'Fx fod 22 cm, værelse 15 fødder → ca. 15 · 22 = 330 cm = 3,3 m.', en: 'E.g. foot 22 cm, room 15 feet → about 15 × 22 = 330 cm = 3.3 m.' } },
          { q: { da: 'Hvor mange dage er der i 2 uger? Hvor mange måneder i et halvt år?', en: 'How many days are there in 2 weeks? How many months in half a year?' }, a: { da: '14 dage og 6 måneder.', en: '14 days and 6 months.' } }
        ]
      }
    ]
  };

  /* ================================================================
     Omkreds og areal – de første skridt
     ================================================================ */
  T['omkreds-areal-intro'] = {
    title: { da: 'Omkreds og areal – de første skridt', en: 'Perimeter and area – first steps' },
    phase: [3],
    summary: {
      da: 'Hvor langt er der rundt om? Hvor mange tern kan der ligge indeni? Sammenlign figurer – og find ud af, om det nye klasselokale er større end det gamle.',
      en: 'How far is it around the outside? How many squares fit inside? Compare shapes – and find out whether the new classroom is bigger than the old one.'
    },
    goals: {
      da: [
        'Eleven kan sammenligne enkle geometriske figurers omkreds og areal.',
        'Eleven har viden om måleenheder for areal.'
      ],
      en: [
        'The pupil can compare the perimeter and area of simple geometric shapes.',
        'The pupil has knowledge of units for area.'
      ]
    },
    terms: [
      { da: 'omkreds', en: 'perimeter', def: { da: 'Længden hele vejen rundt om en figur', en: 'The length all the way round a shape' } },
      { da: 'areal', en: 'area', def: { da: 'Hvor meget flade der er inde i figuren', en: 'How much surface there is inside the shape' } },
      { da: 'kvadratcentimeter (cm²)', en: 'square centimetre (cm²)', def: { da: 'Et tern på 1 cm × 1 cm', en: 'A square of 1 cm × 1 cm' } },
      { da: 'kvadratmeter (m²)', en: 'square metre (m²)', def: { da: 'Et kvadrat på 1 m × 1 m – ca. et lille bord', en: 'A square of 1 m × 1 m – about a small table' } },
      { da: 'kvadratnet (ternet papir)', en: 'square grid (squared paper)', def: { da: 'Papir med tern, man kan tælle', en: 'Paper with squares you can count' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Omkreds: gå hele vejen rundt', en: 'Perimeter: walk all the way round' },
        body: {
          da: '<p><b>Omkredsen</b> er, hvor langt du går, hvis du går hele vejen rundt om figuren langs kanten. Tegn en figur på ternet papir, og tæl <b>tern-kanter</b> rundt om.</p>'
            + '<p>Et rektangel på 4 tern × 2 tern: 4 + 2 + 4 + 2 = <b>12</b> kanter rundt om.</p>'
            + '<p>I virkeligheden måler du med målebånd: omkredsen af bordet er 80 cm + 60 cm + 80 cm + 60 cm = 280 cm.</p>',
          en: '<p>The <b>perimeter</b> is how far you walk if you go all the way round the shape along the edge. Draw a shape on squared paper and count the <b>square edges</b> around it.</p>'
            + '<p>A rectangle of 4 squares × 2 squares: 4 + 2 + 4 + 2 = <b>12</b> edges around.</p>'
            + '<p>In real life you measure with a tape measure: the perimeter of the table is 80 cm + 60 cm + 80 cm + 60 cm = 280 cm.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Areal: hvor mange tern indeni?', en: 'Area: how many squares inside?' },
        body: {
          da: '<p><b>Arealet</b> er, hvor meget flade der er inde i figuren. Læseplanen siger, at man starter med at måle areal med ting som <b>avissider, brikker og kvadratnet</b> – og senere med rigtige enheder: <b>kvadratcentimeter</b> og <b>kvadratmeter</b>.</p>'
            + '<ul><li>„Hvor mange avissider skal der til for at dække gulvet?“</li>'
            + '<li>„Hvor mange brikker kan der ligge på bordet?“</li>'
            + '<li>Tegn figuren på ternet papir, og <b>tæl ternene</b> indeni. Rektanglet på 4 × 2 tern har 8 tern indeni – arealet er 8 tern. Er ternene 1 cm store, er arealet 8 cm².</li></ul>'
            + '<p>Læseplanen giver et eksempel: Elever i 1. eller 2. klasse undersøger, <i>om deres nye klasselokale er større end det gamle</i>. Hvordan kan man finde ud af det? Tæl fliser på gulvet! Eller læg avissider ud. Eller mål med skridt på langs og på tværs.</p>',
          en: '<p>The <b>area</b> is how much surface there is inside the shape. The curriculum says you start by measuring area with things like <b>newspaper pages, tiles and square grids</b> – and later with real units: <b>square centimetres</b> and <b>square metres</b>.</p>'
            + '<ul><li>"How many newspaper pages does it take to cover the floor?"</li>'
            + '<li>"How many tiles fit on the table?"</li>'
            + '<li>Draw the shape on squared paper and <b>count the squares</b> inside. The 4 × 2 rectangle has 8 squares inside – the area is 8 squares. If the squares are 1 cm, the area is 8 cm².</li></ul>'
            + '<p>The curriculum gives an example: pupils in grade 1 or 2 investigate <i>whether their new classroom is bigger than the old one</i>. How can you find out? Count the floor tiles! Or lay out newspaper pages. Or measure in steps lengthways and across.</p>'
        }
      },
      {
        type: 'fig',
        svg: (function () {
          var s = '<svg viewBox="0 0 460 170" width="460" height="170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">';
          var u = 28;
          // shape A: 4x2
          for (var r = 0; r < 2; r++) for (var c = 0; c < 4; c++) s += '<rect x="' + (20 + c * u) + '" y="' + (30 + r * u) + '" width="' + u + '" height="' + u + '" fill="' + GS + '" stroke="' + G + '" stroke-width="1.5"/>';
          s += '<text x="76" y="112" text-anchor="middle">A: 8 tern indeni</text><text x="76" y="130" text-anchor="middle">12 kanter rundt om</text>';
          // shape B: L-shape 3x3 minus 1
          var cells = [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2]];
          cells.forEach(function (p) { s += '<rect x="' + (200 + p[0] * u) + '" y="' + (20 + p[1] * u) + '" width="' + u + '" height="' + u + '" fill="' + GS2 + '" stroke="' + G + '" stroke-width="1.5"/>'; });
          s += '<text x="242" y="130" text-anchor="middle">B: 8 tern indeni</text><text x="242" y="148" text-anchor="middle">12 kanter rundt om</text>';
          // shape C: 1x8 strip
          for (var k = 0; k < 4; k++) s += '<rect x="' + (330 + k * u) + '" y="30" width="' + u + '" height="' + u + '" fill="' + GS + '" stroke="' + G + '" stroke-width="1.5"/>';
          s += '<text x="386" y="112" text-anchor="middle">C: 4 tern indeni</text><text x="386" y="130" text-anchor="middle">10 kanter rundt om</text>';
          return s + '</svg>';
        })(),
        caption: { da: 'A og B har samme areal (8 tern) og samme omkreds (12). C er mindre. Tæl selv efter!', en: 'A and B have the same area (8 squares) and the same perimeter (12). C is smaller. Count for yourself!' }
      },
      {
        type: 'example',
        title: { da: 'Sammenlign to figurer', en: 'Compare two shapes' },
        problem: { da: 'Figur 1 er et rektangel på 6 tern × 1 tern. Figur 2 er et kvadrat på 3 tern × 3 tern. Hvilken har det største areal? Hvilken har den største omkreds?', en: 'Shape 1 is a rectangle of 6 squares × 1 square. Shape 2 is a square of 3 × 3 squares. Which has the bigger area? Which has the bigger perimeter?' },
        steps: {
          da: [
            'Areal: tæl tern. Figur 1: 6 tern. Figur 2: 9 tern. <b>Figur 2 er størst.</b>',
            'Omkreds: tæl kanter. Figur 1: 6 + 1 + 6 + 1 = 14. Figur 2: 3 + 3 + 3 + 3 = 12. <b>Figur 1 har den længste vej rundt.</b>',
            'Så den lange, tynde figur har mindre flade – men længere omkreds. Omkreds og areal er to forskellige ting!'
          ],
          en: [
            'Area: count squares. Shape 1: 6 squares. Shape 2: 9 squares. <b>Shape 2 is bigger.</b>',
            'Perimeter: count edges. Shape 1: 6 + 1 + 6 + 1 = 14. Shape 2: 3 + 3 + 3 + 3 = 12. <b>Shape 1 has the longer way round.</b>',
            'So the long, thin shape has less surface – but a longer perimeter. Perimeter and area are two different things!'
          ]
        },
        answer: { da: 'Areal: figur 2. Omkreds: figur 1.', en: 'Area: shape 2. Perimeter: shape 1.' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Tegn et rektangel på 5 tern × 2 tern. Hvad er arealet i tern? Hvad er omkredsen i kanter?', en: 'Draw a rectangle of 5 × 2 squares. What is the area in squares? The perimeter in edges?' }, a: { da: 'Areal 10 tern. Omkreds 5 + 2 + 5 + 2 = 14.', en: 'Area 10 squares. Perimeter 5 + 2 + 5 + 2 = 14.' } },
          { q: { da: 'Tegn to forskellige figurer, der begge har areal 6 tern.', en: 'Draw two different shapes that both have area 6 squares.' }, a: { da: 'Fx 6 × 1, 3 × 2, eller en L-form med 6 tern.', en: 'E.g. 6 × 1, 3 × 2, or an L-shape of 6 squares.' } },
          { q: { da: 'Hvor mange kvadratmeter er dit værelse cirka? Mål på langs og på tværs i meter, og tegn det på ternet papir (1 tern = 1 m).', en: 'Roughly how many square metres is your room? Measure lengthways and across in metres, and draw it on squared paper (1 square = 1 m).' }, a: { da: 'Fx 4 m × 3 m → 12 tern → ca. 12 m².', en: 'E.g. 4 m × 3 m → 12 squares → about 12 m².' } },
          { q: { da: 'Hvilken enhed bruger man til arealet af et frimærke? Og af en fodboldbane?', en: 'Which unit is used for the area of a stamp? And of a football pitch?' }, a: { da: 'cm² og m².', en: 'cm² and m².' } },
          { q: { da: 'Kan to figurer have samme omkreds, men forskelligt areal? Tegn et eksempel.', en: 'Can two shapes have the same perimeter but different area? Draw an example.' }, a: { da: 'Ja. 4 × 1 (omkreds 10, areal 4) og 3 × 2 (omkreds 10, areal 6).', en: 'Yes. 4 × 1 (perimeter 10, area 4) and 3 × 2 (perimeter 10, area 6).' } }
        ]
      }
    ]
  };
})();
