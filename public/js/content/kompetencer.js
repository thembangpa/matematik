/* ------------------------------------------------------------------
   Matematiske kompetencer — 1 topic (problem solving).
   Covers the six competencies from Fælles Mål: problembehandling,
   modellering, ræsonnement og tankegang, repræsentation og
   symbolbehandling, kommunikation, hjælpemidler. The four modelling
   steps and the reasoning sentence forms are quoted from Læseplan §5.2.
   ------------------------------------------------------------------ */
(function () {
  var T = window.CONTENT.topics;
  function m(s) { return '<span class="math">' + s + '</span>'; }

  T['problemloesning'] = {
    title: { da: 'Sådan løser du et matematisk problem', en: 'How to solve a maths problem' },
    phase: [1, 2, 3],
    summary: {
      da: 'Forstå, oversæt, regn, tjek, forklar. De seks matematiske kompetencer samlet i én arbejdsmåde – med tricks til tekstopgaver og til at vælge det rigtige hjælpemiddel.',
      en: 'Understand, translate, calculate, check, explain. The six mathematical competencies gathered into one way of working – with tricks for word problems and for choosing the right tool.'
    },
    goals: {
      da: [
        'Problembehandling: Eleven kan opstille og løse matematiske problemer og anvende forskellige strategier til matematisk problemløsning.',
        'Modellering: Eleven kan gennemføre enkle modelleringsprocesser og anvende enkle matematiske modeller.',
        'Ræsonnement og tankegang: Eleven kan anvende ræsonnementer til at udvikle og efterprøve hypoteser.',
        'Repræsentation og symbolbehandling: Eleven kan oversætte mellem hverdagssprog og udtryk med matematiske symboler.',
        'Kommunikation: Eleven kan læse og skrive enkle tekster med og om matematik og anvende fagord og begreber.',
        'Hjælpemidler: Eleven kan vælge hjælpemidler efter formål.',
        'Eleven kan uddrage relevante oplysninger i enkle matematikholdige tekster. (opmærksomhedspunkt)'
      ],
      en: [
        'Problem solving: The pupil can pose and solve mathematical problems and use different strategies for mathematical problem solving.',
        'Modelling: The pupil can carry out simple modelling processes and use simple mathematical models.',
        'Reasoning and thinking: The pupil can use reasoning to develop and test hypotheses.',
        'Representation and symbols: The pupil can translate between everyday language and expressions with mathematical symbols.',
        'Communication: The pupil can read and write simple texts with and about mathematics and use subject terms and concepts.',
        'Tools: The pupil can choose tools according to purpose.',
        'The pupil can extract relevant information from simple texts containing mathematics. (attention point)'
      ]
    },
    terms: [
      { da: 'problem', en: 'problem', def: { da: 'En opgave, der ikke kan løses bare ved at følge en kendt opskrift', en: 'A task that cannot be solved just by following a known recipe' } },
      { da: 'strategi', en: 'strategy', def: { da: 'En måde at angribe et problem på', en: 'A way of attacking a problem' } },
      { da: 'modellering', en: 'modelling', def: { da: 'At oversætte et virkeligt problem til matematik – og tilbage igen', en: 'Translating a real problem into maths – and back again' } },
      { da: 'ræsonnement', en: 'reasoning', def: { da: 'En forklaring på, hvorfor noget må være rigtigt', en: 'An explanation of why something must be true' } },
      { da: 'hypotese', en: 'hypothesis', def: { da: 'En påstand, du tror er sand, men som skal efterprøves', en: 'A claim you think is true but which must be tested' } },
      { da: 'regneudtryk', en: 'calculation expression', def: { da: 'Opgaven skrevet med tal og regnetegn', en: 'The problem written with numbers and operation signs' } },
      { da: 'hjælpemiddel', en: 'tool (aid)', def: { da: 'Lommeregner, regneark, lineal, passer, geometriprogram …', en: 'Calculator, spreadsheet, ruler, compasses, geometry software …' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'De fire trin (modellering)', en: 'The four steps (modelling)' },
        body: {
          da: '<p>Læseplanen beskriver en <b>modelleringsproces</b> i fire trin. Det er en god opskrift til næsten alle opgaver, der handler om virkeligheden:</p>'
            + '<table><tr><th>Trin</th><th>Læseplanen siger</th><th>Det betyder</th></tr>'
            + '<tr><td>1</td><td>Opstilling af et problem fra omverdenen</td><td><b>Forstå.</b> Hvad er spørgsmålet? Hvad ved jeg? Hvad skal jeg finde?</td></tr>'
            + '<tr><td>2</td><td>Oversættelse af problemet til en matematisk model</td><td><b>Oversæt.</b> Skriv et regneudtryk, en ligning, en tegning eller en tabel.</td></tr>'
            + '<tr><td>3</td><td>Matematisk behandling af modellen</td><td><b>Regn.</b> Løs det – med hovedregning, lommeregner eller tegning.</td></tr>'
            + '<tr><td>4</td><td>Tolkning af den matematiske model i forhold til det oprindelige problem</td><td><b>Tjek og forklar.</b> Giver svaret mening i virkeligheden? Husk enheden. Skriv svaret som en sætning.</td></tr></table>'
            + '<p>Det sværeste er som regel trin 2. Det er også det, opmærksomhedspunktet handler om: „opstille et simpelt regneudtryk“. Det er <i>udtrykket</i>, der viser, at du har forstået opgaven – ikke resultatet.</p>',
          en: '<p>The Danish curriculum describes a <b>modelling process</b> in four steps. It is a good recipe for almost every problem about the real world:</p>'
            + '<table><tr><th>Step</th><th>The curriculum says</th><th>What it means</th></tr>'
            + '<tr><td>1</td><td>Posing a problem from the surrounding world</td><td><b>Understand.</b> What is the question? What do I know? What must I find?</td></tr>'
            + '<tr><td>2</td><td>Translating the problem into a mathematical model</td><td><b>Translate.</b> Write an expression, an equation, a drawing or a table.</td></tr>'
            + '<tr><td>3</td><td>Mathematical treatment of the model</td><td><b>Calculate.</b> Solve it – mentally, with a calculator or by drawing.</td></tr>'
            + '<tr><td>4</td><td>Interpreting the mathematical model in relation to the original problem</td><td><b>Check and explain.</b> Does the answer make sense in reality? Remember the unit. Write the answer as a sentence.</td></tr></table>'
            + '<p>The hardest step is usually step 2. That is also what the attention point is about: "write a simple calculation expression". It is the <i>expression</i> that shows you understood the problem – not the result.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Læs opgaven rigtigt (tekster med matematik)', en: 'Read the problem properly (texts with maths)' },
        body: {
          da: '<p>Tekstopgaver – og tekster i andre fag, i aviser og på nettet – gemmer ofte tallene mellem en masse andre ord. Sådan finder du det vigtige:</p>'
            + '<ol><li><b>Læs hele teksten</b> én gang uden at regne.</li>'
            + '<li><b>Understreg tallene</b> og det, de hører til (kr., elever, cm …).</li>'
            + '<li><b>Find spørgsmålet.</b> Hvad bliver der spurgt om? Sæt ring om det.</li>'
            + '<li><b>Streg det ud, du ikke skal bruge.</b> Der er tit oplysninger, som bare er med for at fylde.</li>'
            + '<li><b>Læs diagrammer og tabeller</b> lige så omhyggeligt som teksten – se på overskrift, akser og enheder.</li></ol>'
            + '<p><b>Eksempel:</b> <i>„Mette er 12 år og går i 6. klasse med 23 andre elever. Klassen skal på tur til en zoo, hvor en billet koster 95 kr. Bussen koster 1.800 kr. Skolen betaler bussen. Hvad koster billetterne til hele klassen?“</i></p>'
            + '<p>Vigtigt: 23 andre + Mette = <b>24 elever</b>. Billet <b>95 kr.</b> Spørgsmål: billetter til hele klassen. Ikke vigtigt: Mettes alder, busprisen (skolen betaler). Regneudtryk: ' + m('24 · 95 = 2.280') + ' kr.</p>',
          en: '<p>Word problems – and texts in other subjects, in newspapers and online – often hide the numbers among lots of other words. Here is how to find what matters:</p>'
            + '<ol><li><b>Read the whole text</b> once without calculating.</li>'
            + '<li><b>Underline the numbers</b> and what they belong to (kr., pupils, cm …).</li>'
            + '<li><b>Find the question.</b> What is being asked? Circle it.</li>'
            + '<li><b>Cross out what you do not need.</b> There is often information that is only there as filler.</li>'
            + '<li><b>Read charts and tables</b> as carefully as the text – look at the title, axes and units.</li></ol>'
            + '<p><b>Example:</b> <i>"Mette is 12 and is in grade 6 with 23 other pupils. The class is going on a trip to a zoo, where a ticket costs 95 kr. The bus costs 1,800 kr. The school pays for the bus. What do the tickets for the whole class cost?"</i></p>'
            + '<p>Important: 23 others + Mette = <b>24 pupils</b>. Ticket <b>95 kr.</b> Question: tickets for the whole class. Not important: Mette\'s age, the bus price (the school pays). Expression: ' + m('24 × 95 = 2,280') + ' kr.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Strategier, når du sidder fast', en: 'Strategies when you are stuck' },
        body: {
          da: '<p>Læseplanen nævner to grundstrategier: at <b>konkretisere problemet med repræsentationer</b> (tegninger, tabeller, konkrete ting) og at <b>dele problemet op i mindre dele</b>. Her er værktøjskassen:</p>'
            + '<ul>'
            + '<li><b>Tegn det.</b> En hurtig skitse af situationen gør ofte svaret tydeligt.</li>'
            + '<li><b>Lav en tabel.</b> Især når noget gentages eller vokser (som centicubestængerne).</li>'
            + '<li><b>Del op i bidder.</b> Regn først det ene ud, så det næste. Skriv mellemresultater ned.</li>'
            + '<li><b>Gæt og prøv efter.</b> Lav et fornuftigt gæt, tjek det, og ret gættet.</li>'
            + '<li><b>Prøv med lettere tal først.</b> Kan du ikke overskue 3,75 kg til 89,50 kr./kg, så prøv 4 kg til 90 kr. – det viser dig, hvad du skal gange og dividere.</li>'
            + '<li><b>Regn baglæns.</b> Kender du slutresultatet, kan du gå tilbage trin for trin.</li>'
            + '<li><b>Forklar det for en anden.</b> Når du siger det højt, opdager du tit selv, hvad der mangler.</li>'
            + '</ul>'
            + '<p>Nogle opgaver er <b>åbne</b>: de har flere rigtige svar eller kan løses på flere måder. Det er ikke snyd – det er tit sådan, matematik ser ud i virkeligheden.</p>',
          en: '<p>The Danish curriculum names two basic strategies: <b>making the problem concrete with representations</b> (drawings, tables, physical objects) and <b>splitting the problem into smaller parts</b>. Here is the toolbox:</p>'
            + '<ul>'
            + '<li><b>Draw it.</b> A quick sketch of the situation often makes the answer obvious.</li>'
            + '<li><b>Make a table.</b> Especially when something repeats or grows (like the centicube rods).</li>'
            + '<li><b>Split it into chunks.</b> Work out one thing first, then the next. Write down the intermediate results.</li>'
            + '<li><b>Guess and check.</b> Make a sensible guess, check it, and adjust.</li>'
            + '<li><b>Try easier numbers first.</b> If 3.75 kg at 89.50 kr./kg is too much, try 4 kg at 90 kr. – it shows you what to multiply and divide.</li>'
            + '<li><b>Work backwards.</b> If you know the end result, you can go back step by step.</li>'
            + '<li><b>Explain it to someone else.</b> Saying it out loud often shows you what is missing.</li>'
            + '</ul>'
            + '<p>Some problems are <b>open</b>: they have several correct answers or can be solved in several ways. That is not cheating – it is often what maths looks like in real life.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Hele vejen igennem', en: 'All the way through' },
        problem: { da: 'Klassen skal på tur. Bussen koster 1.800 kr. Der er 24 elever, og skolen betaler 600 kr. af bussen. Resten deles ligeligt mellem eleverne. Hvor meget skal hver elev betale?', en: 'The class is going on a trip. The bus costs 1,800 kr. There are 24 pupils, and the school pays 600 kr. of the bus. The rest is shared equally between the pupils. How much does each pupil pay?' },
        steps: {
          da: [
            '<b>Forstå:</b> Vi kender busprisen (1.800), skolens andel (600) og antallet af elever (24). Vi skal finde beløbet pr. elev.',
            '<b>Oversæt:</b> Først trækkes skolens andel fra, så deles resten: ' + m('(1.800 − 600) : 24') + '.',
            '<b>Regn:</b> ' + m('1.200 : 24 = 50') + '.',
            '<b>Tjek:</b> Overslag: 1.200 : 24 ≈ 1.200 : 25 = 48. Tæt på 50 – passer. Og 24 · 50 = 1.200 ✓. Giver det mening? 50 kr. pr. elev for en bustur – ja.',
            '<b>Forklar:</b> „Hver elev skal betale 50 kr.“'
          ],
          en: [
            '<b>Understand:</b> We know the bus price (1,800), the school\'s share (600) and the number of pupils (24). We must find the amount per pupil.',
            '<b>Translate:</b> First subtract the school\'s share, then share the rest: ' + m('(1,800 − 600) ÷ 24') + '.',
            '<b>Calculate:</b> ' + m('1,200 ÷ 24 = 50') + '.',
            '<b>Check:</b> Estimate: 1,200 ÷ 24 ≈ 1,200 ÷ 25 = 48. Close to 50 – fits. And 24 × 50 = 1,200 ✓. Does it make sense? 50 kr. per pupil for a bus trip – yes.',
            '<b>Explain:</b> "Each pupil pays 50 kr."'
          ]
        },
        answer: { da: '50 kr. pr. elev', en: '50 kr. per pupil' }
      },
      {
        type: 'text',
        title: { da: 'Ræsonnement: „Hvis …, så …, fordi …“', en: 'Reasoning: "If …, then …, because …"' },
        body: {
          da: '<p>At <b>ræsonnere</b> er at forklare, <i>hvorfor</i> noget er rigtigt – ikke bare at sige svaret. Læseplanen giver to sætningsformer, du kan bruge:</p>'
            + '<ul><li>Når du forklarer: <b>„Hvis jeg …, så må der ske det, at …, fordi …“</b></li>'
            + '<li>Når du afviser en påstand: <b>„Det kan ikke passe, for når jeg …, så bliver …“</b></li></ul>'
            + '<p><b>Eksempel på en hypotese, der skal efterprøves:</b> „Hvis jeg fordobler siden i et kvadrat, bliver arealet dobbelt så stort.“</p>'
            + '<p>Efterprøv: Side 2 → areal ' + m('2 · 2 = 4') + '. Side 4 → areal ' + m('4 · 4 = 16') + '. 16 er ikke det dobbelte af 4 – det er <i>fire</i> gange så meget. <b>„Det kan ikke passe, for når jeg fordobler siden, bliver arealet fire gange så stort.“</b> Hypotesen var forkert – og det fandt vi ud af ved at prøve.</p>'
            + '<p>Et ræsonnement kan også være, hvorfor en regel altid virker: „Hver centicube har 4 frie sider, og stangen har 2 ender – derfor er det altid 4 gange antallet plus 2.“</p>',
          en: '<p>To <b>reason</b> is to explain <i>why</i> something is true – not just to state the answer. The Danish curriculum gives two sentence forms you can use:</p>'
            + '<ul><li>When explaining: <b>"If I …, then … must happen, because …"</b></li>'
            + '<li>When rejecting a claim: <b>"That cannot be right, because when I …, then … becomes …"</b></li></ul>'
            + '<p><b>Example of a hypothesis to be tested:</b> "If I double the side of a square, the area doubles."</p>'
            + '<p>Test: Side 2 → area ' + m('2 × 2 = 4') + '. Side 4 → area ' + m('4 × 4 = 16') + '. 16 is not double 4 – it is <i>four</i> times as much. <b>"That cannot be right, because when I double the side, the area becomes four times as big."</b> The hypothesis was wrong – and we found out by trying.</p>'
            + '<p>Reasoning can also be why a rule always works: "Each centicube has 4 free faces, and the rod has 2 ends – so it is always 4 times the number plus 2."</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Vælg det rigtige hjælpemiddel', en: 'Choose the right tool' },
        body: {
          da: '<table><tr><th>Situation</th><th>Hjælpemiddel</th></tr>'
            + '<tr><td>Små, pæne tal (' + m('25 · 4') + ', ' + m('120 : 6') + ')</td><td><b>Hovedregning</b></td></tr>'
            + '<tr><td>„Har jeg penge nok?“ – cirka er nok</td><td><b>Overslag</b></td></tr>'
            + '<tr><td>Grimme tal (' + m('37,5 · 89,95') + ') eller mange decimaler</td><td><b>Lommeregner</b> – men lav et overslag først</td></tr>'
            + '<tr><td>Mange tal, der skal lægges sammen, eller et diagram</td><td><b>Regneark</b></td></tr>'
            + '<tr><td>Tegne en figur præcist eller undersøge vinkler</td><td><b>Dynamisk geometriprogram</b> eller lineal, passer og vinkelmåler</td></tr>'
            + '<tr><td>Måle noget i virkeligheden</td><td><b>Lineal, målebånd, vægt, ur</b></td></tr></table>'
            + '<p><b>Læseplanens råd om lommeregneren:</b> Du skal kende dens knapper – <i>og</i> have en realistisk forventning til svaret. „I situationer, hvor en præcis beregning er nødvendig, kan et overslag hjælpe til at opdage evt. slåfejl på lommeregneren.“ Så: overslag først, lommeregner bagefter, sammenlign.</p>',
          en: '<table><tr><th>Situation</th><th>Tool</th></tr>'
            + '<tr><td>Small, neat numbers (' + m('25 × 4') + ', ' + m('120 ÷ 6') + ')</td><td><b>Mental maths</b></td></tr>'
            + '<tr><td>"Do I have enough money?" – roughly is enough</td><td><b>Estimate</b></td></tr>'
            + '<tr><td>Awkward numbers (' + m('37.5 × 89.95') + ') or many decimals</td><td><b>Calculator</b> – but estimate first</td></tr>'
            + '<tr><td>Many numbers to add up, or a chart</td><td><b>Spreadsheet</b></td></tr>'
            + '<tr><td>Draw a shape accurately or investigate angles</td><td><b>Dynamic geometry software</b> or ruler, compasses and protractor</td></tr>'
            + '<tr><td>Measure something real</td><td><b>Ruler, tape measure, scales, clock</b></td></tr></table>'
            + '<p><b>The curriculum\'s advice about the calculator:</b> You must know its buttons – <i>and</i> have a realistic expectation of the answer. "In situations where an exact calculation is needed, an estimate can help you spot typing errors on the calculator." So: estimate first, calculator second, compare.</p>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Skriv kun regneudtrykket (regn ikke): „En pose med 6 boller koster 24 kr. Hvad koster én bolle?“', en: 'Write only the expression (do not calculate): "A bag of 6 buns costs 24 kr. What does one bun cost?"' }, a: { da: m('24 : 6') + '. (Division, fordi prisen deles ligeligt på 6 boller.)', en: m('24 ÷ 6') + '. (Division, because the price is shared equally over 6 buns.)' } },
          { q: { da: 'Skriv kun regneudtrykket: „Jonas har 150 kr. Han køber 3 tegneserier til 35 kr. stykket. Hvor meget har han tilbage?“', en: 'Write only the expression: "Jonas has 150 kr. He buys 3 comics at 35 kr. each. How much does he have left?"' }, a: { da: m('150 − 3 · 35') + ' (= 45 kr.).', en: m('150 − 3 × 35') + ' (= 45 kr.).' } },
          { q: { da: '„Line er 148 cm høj. Hun løber 3 gange om ugen, hver gang 2,5 km. I sidste uge løb hun kun 2 gange. Hvor langt løb hun i sidste uge?“ Hvilke tal skal bruges, og hvilke ikke?', en: '"Line is 148 cm tall. She runs 3 times a week, 2.5 km each time. Last week she only ran twice. How far did she run last week?" Which numbers are needed, and which are not?' }, a: { da: 'Brug: 2 gange og 2,5 km → ' + m('2 · 2,5 = 5') + ' km. Ikke: 148 cm og „3 gange om ugen“.', en: 'Use: 2 times and 2.5 km → ' + m('2 × 2.5 = 5') + ' km. Not: 148 cm and "3 times a week".' } },
          { q: { da: 'Hypotese: „Når man lægger to ulige tal sammen, får man altid et ulige tal.“ Efterprøv den.', en: 'Hypothesis: "When you add two odd numbers, you always get an odd number." Test it.' }, a: { da: 'Det kan ikke passe, for når jeg lægger 3 + 5 sammen, bliver det 8 – et lige tal. Hypotesen er forkert. (To ulige tal giver altid et lige tal.)', en: 'That cannot be right, because when I add 3 + 5, it becomes 8 – an even number. The hypothesis is wrong. (Two odd numbers always give an even number.)' } },
          { q: { da: 'Lommeregneren viser, at 48 pizzaer til 79 kr. koster 379 kr. Hvad gør du?', en: 'The calculator shows that 48 pizzas at 79 kr. cost 379 kr. What do you do?' }, a: { da: 'Laver et overslag: ' + m('50 · 80 = 4.000') + '. 379 er helt forkert – tast igen. (Rigtigt: 3.792 kr.)', en: 'Make an estimate: ' + m('50 × 80 = 4,000') + '. 379 is completely wrong – type it again. (Correct: 3,792 kr.)' } },
          { q: { da: 'En opgave lyder: „Lav et rektangel med omkreds 20 cm.“ Hvor mange rigtige svar er der?', en: 'A task says: "Make a rectangle with perimeter 20 cm." How many correct answers are there?' }, a: { da: 'Mange – det er en åben opgave. Fx 1 × 9, 2 × 8, 3 × 7, 4 × 6, 5 × 5 (og alle med decimaler). Alle har omkreds 20.', en: 'Many – it is an open task. E.g. 1 × 9, 2 × 8, 3 × 7, 4 × 6, 5 × 5 (and all the ones with decimals). All have perimeter 20.' } },
          { q: { da: 'Du skal finde ud af, hvor mange liter der er i en stor kasse på 45 cm × 32 cm × 28 cm. Hvilke hjælpemidler vælger du – og hvorfor?', en: 'You must find how many litres fit in a large box of 45 cm × 32 cm × 28 cm. Which tools do you choose – and why?' }, a: { da: 'Overslag i hovedet (' + m('50 · 30 · 30 = 45.000') + ' cm³ ≈ 45 L), så lommeregner til det præcise (40.320 cm³ ≈ 40 L). Tallene er for grimme til hovedregning alene.', en: 'Mental estimate (' + m('50 × 30 × 30 = 45,000') + ' cm³ ≈ 45 L), then a calculator for the exact answer (40,320 cm³ ≈ 40 L). The numbers are too awkward for mental maths alone.' } }
        ]
      }
    ]
  };
})();
