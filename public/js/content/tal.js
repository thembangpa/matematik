/* ------------------------------------------------------------------
   Tal og algebra — 8 topics.
   "goals" quote the færdigheds- og vidensmål (efter 6. klassetrin) from
   Fælles Mål – Matematik; explanations follow Læseplan §5.2 (4.–6. kl.).
   ------------------------------------------------------------------ */
(function () {
  var T = window.CONTENT.topics;
  function fr(n, d) { return '<span class="frac"><span>' + n + '</span><span>' + d + '</span></span>'; }
  function m(s) { return '<span class="math">' + s + '</span>'; }

  /* ================================================================
     1. De fire regningsarter
     ================================================================ */
  T['regnearter'] = {
    title: { da: 'De fire regningsarter', en: 'The four operations' },
    phase: [1, 2],
    summary: {
      da: 'Plus, minus, gange og division – hvornår bruger du hvad, i hvilken rækkefølge, og hvordan tjekker du dit svar med et overslag?',
      en: 'Add, subtract, multiply and divide – when to use which, in what order, and how to check your answer with an estimate.'
    },
    goals: {
      da: [
        'Eleven kan udføre beregninger med de fire regningsarter inden for naturlige tal, herunder beregninger vedrørende hverdagsøkonomi.',
        'Eleven kan vælge hensigtsmæssig regningsart til løsning af enkle hverdagsproblemer og opstille et simpelt regneudtryk. (opmærksomhedspunkt)',
        'Eleven kan gennemføre regneprocesser inden for alle fire regningsarter med inddragelse af overslag og lommeregner. (opmærksomhedspunkt)'
      ],
      en: [
        'The pupil can carry out calculations with the four operations on natural numbers, including calculations about everyday finances.',
        'The pupil can choose the appropriate operation to solve simple everyday problems and write a simple calculation expression. (attention point)',
        'The pupil can carry out calculations in all four operations, using estimation and a calculator. (attention point)'
      ]
    },
    terms: [
      { da: 'addition (plus)', en: 'addition', def: { da: 'At lægge sammen. 7 + 5 = 12', en: 'Adding together. 7 + 5 = 12' } },
      { da: 'subtraktion (minus)', en: 'subtraction', def: { da: 'At trække fra. 12 − 5 = 7', en: 'Taking away. 12 − 5 = 7' } },
      { da: 'multiplikation (gange)', en: 'multiplication', def: { da: 'Lige store grupper lagt sammen. 4 · 6 = 24', en: 'Equal groups added together. 4 × 6 = 24' } },
      { da: 'division (dividere)', en: 'division', def: { da: 'At dele ligeligt. 24 : 6 = 4', en: 'Sharing equally. 24 ÷ 6 = 4' } },
      { da: 'regneudtryk', en: 'calculation expression', def: { da: 'Regnestykket skrevet med tal og tegn, fx 100 − 3 · 18', en: 'The calculation written with numbers and symbols, e.g. 100 − 3 × 18' } },
      { da: 'overslag', en: 'estimate', def: { da: 'Et hurtigt, omtrentligt svar med afrundede tal', en: 'A quick, rough answer using rounded numbers' } },
      { da: 'regnearternes hierarki', en: 'order of operations', def: { da: 'Rækkefølgen: parenteser, gange/division, plus/minus', en: 'The order: brackets, multiply/divide, add/subtract' } },
      { da: 'naturlige tal', en: 'natural numbers', def: { da: 'Tallene 0, 1, 2, 3, 4 … (hele, ikke-negative tal)', en: 'The numbers 0, 1, 2, 3, 4 … (whole, non-negative numbers)' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Hvilken regningsart skal jeg bruge?', en: 'Which operation do I need?' },
        body: {
          da: '<p>Det vigtigste er ikke at regne hurtigt – det er at <b>vælge den rigtige regningsart</b> og skrive et regneudtryk, der passer til situationen. Spørg dig selv, hvad der sker i historien:</p>'
            + '<table><tr><th>Hvad sker der?</th><th>Regningsart</th><th>Eksempel</th></tr>'
            + '<tr><td>Noget lægges sammen, kommer til, i alt</td><td><b>Plus</b> (+)</td><td>Du har 45 kr. og får 30 kr. → ' + m('45 + 30 = 75') + '</td></tr>'
            + '<tr><td>Noget tages væk, forskel, hvor meget er tilbage/mangler</td><td><b>Minus</b> (−)</td><td>Du har 75 kr. og bruger 28 kr. → ' + m('75 − 28 = 47') + '</td></tr>'
            + '<tr><td>Lige mange, flere gange (grupper, rækker, pr. stk.)</td><td><b>Gange</b> (·)</td><td>6 poser med 8 boller → ' + m('6 · 8 = 48') + '</td></tr>'
            + '<tr><td>Deles ligeligt, hvor mange i hver, hvor mange gange går det op</td><td><b>Division</b> (:)</td><td>48 boller til 6 personer → ' + m('48 : 6 = 8') + '</td></tr></table>'
            + '<p>Tip: Gange og division hører sammen (' + m('6 · 8 = 48') + ', så ' + m('48 : 6 = 8') + '). Plus og minus hører sammen (' + m('45 + 30 = 75') + ', så ' + m('75 − 30 = 45') + '). Du kan bruge det til at tjekke dine svar.</p>',
          en: '<p>The most important thing is not calculating fast – it is <b>choosing the right operation</b> and writing an expression that fits the situation. Ask yourself what is happening in the story:</p>'
            + '<table><tr><th>What is happening?</th><th>Operation</th><th>Example</th></tr>'
            + '<tr><td>Things are put together, added, in total</td><td><b>Add</b> (+)</td><td>You have 45 kr. and get 30 kr. → ' + m('45 + 30 = 75') + '</td></tr>'
            + '<tr><td>Something is taken away, a difference, how much is left/missing</td><td><b>Subtract</b> (−)</td><td>You have 75 kr. and spend 28 kr. → ' + m('75 − 28 = 47') + '</td></tr>'
            + '<tr><td>Equal amounts, several times (groups, rows, per item)</td><td><b>Multiply</b> (×)</td><td>6 bags of 8 buns → ' + m('6 × 8 = 48') + '</td></tr>'
            + '<tr><td>Shared equally, how many each, how many times does it fit</td><td><b>Divide</b> (÷)</td><td>48 buns for 6 people → ' + m('48 ÷ 6 = 8') + '</td></tr></table>'
            + '<p>Tip: Multiplication and division belong together (' + m('6 × 8 = 48') + ', so ' + m('48 ÷ 6 = 8') + '). Addition and subtraction belong together (' + m('45 + 30 = 75') + ', so ' + m('75 − 30 = 45') + '). Use this to check your answers.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Hverdagsøkonomi – skriv regneudtrykket først', en: 'Everyday money – write the expression first' },
        problem: {
          da: 'Du køber 3 is til 18 kr. stykket og en sodavand til 15 kr. Du betaler med en 100-kroneseddel. Hvor meget får du tilbage?',
          en: 'You buy 3 ice creams at 18 kr. each and a soda for 15 kr. You pay with a 100 kr. note. How much change do you get?'
        },
        steps: {
          da: [
            'Isene koster i alt: ' + m('3 · 18 = 54') + ' kr.',
            'Alt i alt: ' + m('54 + 15 = 69') + ' kr.',
            'Tilbage: ' + m('100 − 69 = 31') + ' kr.',
            'Som ét regneudtryk: ' + m('100 − (3 · 18 + 15) = 31') + '. Parentesen viser, at vi først finder, hvad det hele koster.',
            'Overslag som tjek: 3 is ≈ 60 kr., plus 15 er ≈ 75 kr. Tilbage ≈ 25 kr. Vores svar på 31 kr. er tæt på – det passer.'
          ],
          en: [
            'The ice creams cost: ' + m('3 × 18 = 54') + ' kr.',
            'Altogether: ' + m('54 + 15 = 69') + ' kr.',
            'Change: ' + m('100 − 69 = 31') + ' kr.',
            'As one expression: ' + m('100 − (3 × 18 + 15) = 31') + '. The brackets show that we first find the total cost.',
            'Estimate to check: 3 ice creams ≈ 60 kr., plus 15 is ≈ 75 kr. Change ≈ 25 kr. Our answer of 31 kr. is close – it fits.'
          ]
        },
        answer: { da: '31 kr.', en: '31 kr.' }
      },
      {
        type: 'text',
        title: { da: 'Regnearternes hierarki – rækkefølgen', en: 'Order of operations' },
        body: {
          da: '<p>Når et regneudtryk har flere regningsarter, er der en fast rækkefølge:</p>'
            + '<ol><li><b>Parenteser</b> først.</li><li><b>Potenser</b> (fx ' + m('3²') + ') – dem lærer du om under <a href="#/potenser-pi">Potenser og pi</a>.</li><li><b>Gange og division</b> – fra venstre mod højre.</li><li><b>Plus og minus</b> – fra venstre mod højre.</li></ol>'
            + '<p>Eksempel: ' + m('2 + 3 · 4') + '. Gange først: ' + m('3 · 4 = 12') + '. Så plus: ' + m('2 + 12 = 14') + '. <b>Ikke</b> 20!</p>'
            + '<p>Med parentes: ' + m('(2 + 3) · 4 = 5 · 4 = 20') + '. Parentesen ændrer altså svaret.</p>'
            + '<p>Et længere eksempel: ' + m('40 − 12 : 4 + 2 · 5') + ' → ' + m('40 − 3 + 10') + ' → ' + m('37 + 10 = 47') + '.</p>',
          en: '<p>When an expression has several operations, there is a fixed order:</p>'
            + '<ol><li><b>Brackets</b> first.</li><li><b>Powers</b> (e.g. ' + m('3²') + ') – see <a href="#/potenser-pi">Powers and pi</a>.</li><li><b>Multiplication and division</b> – from left to right.</li><li><b>Addition and subtraction</b> – from left to right.</li></ol>'
            + '<p>Example: ' + m('2 + 3 × 4') + '. Multiply first: ' + m('3 × 4 = 12') + '. Then add: ' + m('2 + 12 = 14') + '. <b>Not</b> 20!</p>'
            + '<p>With brackets: ' + m('(2 + 3) × 4 = 5 × 4 = 20') + '. So the brackets change the answer.</p>'
            + '<p>A longer example: ' + m('40 − 12 ÷ 4 + 2 × 5') + ' → ' + m('40 − 3 + 10') + ' → ' + m('37 + 10 = 47') + '.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Gode strategier til hovedregning', en: 'Good strategies for mental maths' },
        body: {
          da: '<p><b>Del tallene op i tiere og enere.</b> ' + m('48 + 34') + ': Der er ' + m('40 + 30 = 70') + ' og ' + m('8 + 4 = 12') + '. Så ' + m('70 + 12 = 82') + '.</p>'
            + '<p><b>Flyt lidt over, så det bliver rundt.</b> ' + m('48 + 34') + ': Læg 2 til 48, så det bliver 50, og træk 2 fra 34, så det bliver 32. ' + m('50 + 32 = 82') + '. Samme svar!</p>'
            + '<p><b>Gange: del det store tal op.</b> ' + m('23 · 4') + ' = ' + m('20 · 4 + 3 · 4 = 80 + 12 = 92') + '.</p>'
            + '<p><b>Division: find et tal, der går op.</b> ' + m('96 : 4') + ' = ' + m('(80 + 16) : 4 = 20 + 4 = 24') + '.</p>'
            + '<p><b>Minus: tæl op fra det lille tal.</b> ' + m('83 − 67') + ': Fra 67 op til 70 er 3, fra 70 til 83 er 13. I alt 16.</p>'
            + '<p>Der er ikke én rigtig metode. Vælg den, der er nemmest for dig – og tjek med en anden metode, hvis du er i tvivl.</p>',
          en: '<p><b>Split the numbers into tens and ones.</b> ' + m('48 + 34') + ': There is ' + m('40 + 30 = 70') + ' and ' + m('8 + 4 = 12') + '. So ' + m('70 + 12 = 82') + '.</p>'
            + '<p><b>Move a bit over to make a round number.</b> ' + m('48 + 34') + ': Add 2 to 48 to make 50, and take 2 from 34 to make 32. ' + m('50 + 32 = 82') + '. Same answer!</p>'
            + '<p><b>Multiplying: split the big number.</b> ' + m('23 × 4') + ' = ' + m('20 × 4 + 3 × 4 = 80 + 12 = 92') + '.</p>'
            + '<p><b>Dividing: find a number that divides evenly.</b> ' + m('96 ÷ 4') + ' = ' + m('(80 + 16) ÷ 4 = 20 + 4 = 24') + '.</p>'
            + '<p><b>Subtracting: count up from the small number.</b> ' + m('83 − 67') + ': From 67 up to 70 is 3, from 70 to 83 is 13. In total 16.</p>'
            + '<p>There is no single correct method. Choose the one that is easiest for you – and check with another method if in doubt.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Overslag og lommeregner', en: 'Estimating and the calculator' },
        body: {
          da: '<p>Et <b>overslag</b> er et hurtigt, omtrentligt svar. Du runder tallene af, så de er nemme at regne med:</p>'
            + '<p>' + m('398 + 205') + ' ≈ ' + m('400 + 200 = 600') + '. &nbsp; ' + m('19 · 31') + ' ≈ ' + m('20 · 30 = 600') + '. &nbsp; ' + m('1.190 : 4') + ' ≈ ' + m('1.200 : 4 = 300') + '.</p>'
            + '<p>Overslag bruger du til to ting:</p><ul><li>Når det er nok at vide <i>cirka</i> – fx om du har penge nok i butikken.</li><li>Til at <b>tjekke lommeregneren</b>. Hvis du taster forkert, opdager du det, fordi svaret ikke ligner dit overslag.</li></ul>'
            + '<p>Regel: <b>Lav altid et overslag, før du bruger lommeregneren.</b> Hvis lommeregneren siger ' + m('19 · 31 = 5.890') + ', ved du med det samme, at du har tastet forkert (det skulle være omkring 600).</p>',
          en: '<p>An <b>estimate</b> is a quick, rough answer. You round the numbers so they are easy to work with:</p>'
            + '<p>' + m('398 + 205') + ' ≈ ' + m('400 + 200 = 600') + '. &nbsp; ' + m('19 × 31') + ' ≈ ' + m('20 × 30 = 600') + '. &nbsp; ' + m('1,190 ÷ 4') + ' ≈ ' + m('1,200 ÷ 4 = 300') + '.</p>'
            + '<p>You use estimates for two things:</p><ul><li>When knowing <i>roughly</i> is enough – e.g. whether you have enough money in the shop.</li><li>To <b>check the calculator</b>. If you press a wrong key, you notice because the answer does not look like your estimate.</li></ul>'
            + '<p>Rule: <b>Always estimate before you use the calculator.</b> If the calculator says ' + m('19 × 31 = 5,890') + ', you know at once that you typed something wrong (it should be around 600).</p>'
        }
      },
      { type: 'widget', widget: 'arith', title: { da: 'Regnetræner', en: 'Calculation trainer' } },
      {
        type: 'practice',
        items: [
          { q: { da: 'Skriv et regneudtryk (du behøver ikke regne det ud): En klasse på 24 elever skal deles i hold med 4 på hvert. Hvor mange hold?', en: 'Write an expression (you do not have to calculate it): A class of 24 pupils is split into teams of 4. How many teams?' },
            a: { da: m('24 : 4') + ' (= 6 hold). Det er division, fordi vi deler ligeligt.', en: m('24 ÷ 4') + ' (= 6 teams). It is division because we share equally.' } },
          { q: { da: 'Regn ud: ' + m('5 + 4 · 6'), en: 'Calculate: ' + m('5 + 4 × 6') },
            a: { da: '29. Gange først (' + m('4 · 6 = 24') + '), så plus (' + m('5 + 24 = 29') + ').', en: '29. Multiply first (' + m('4 × 6 = 24') + '), then add (' + m('5 + 24 = 29') + ').' } },
          { q: { da: 'Regn ud: ' + m('(5 + 4) · 6'), en: 'Calculate: ' + m('(5 + 4) × 6') },
            a: { da: '54. Parentesen først: ' + m('9 · 6 = 54') + '.', en: '54. Brackets first: ' + m('9 × 6 = 54') + '.' } },
          { q: { da: 'Lav et overslag: ' + m('412 · 19'), en: 'Estimate: ' + m('412 × 19') },
            a: { da: 'Cirka ' + m('400 · 20 = 8.000') + '. (Det præcise svar er 7.828.)', en: 'About ' + m('400 × 20 = 8,000') + '. (The exact answer is 7,828.)' } },
          { q: { da: 'Sara sparer 35 kr. om ugen i 12 uger. Så køber hun en trøje til 299 kr. Skriv regneudtrykket og regn ud, hvor meget hun har tilbage.', en: 'Sara saves 35 kr. a week for 12 weeks. Then she buys a jumper for 299 kr. Write the expression and work out how much she has left.' },
            a: { da: m('35 · 12 − 299 = 420 − 299 = 121') + ' kr. Overslag: ' + m('35 · 12 ≈ 35 · 10 + 35 · 2 = 420') + ', minus 300 giver ca. 120. Passer.', en: m('35 × 12 − 299 = 420 − 299 = 121') + ' kr. Estimate: ' + m('35 × 12 ≈ 35 × 10 + 35 × 2 = 420') + ', minus 300 gives about 120. Fits.' } },
          { q: { da: 'Lommeregneren viser ' + m('73 · 42 = 306') + '. Kan det passe? Brug et overslag.', en: 'The calculator shows ' + m('73 × 42 = 306') + '. Can that be right? Use an estimate.' },
            a: { da: 'Nej. ' + m('70 · 40 = 2.800') + ', så svaret skal være omkring 3.000. Du har nok tastet 73 + 42 + … eller trykket forkert. (Rigtigt: 3.066.)', en: 'No. ' + m('70 × 40 = 2,800') + ', so the answer should be around 3,000. You probably pressed a wrong key. (Correct: 3,066.)' } }
        ]
      }
    ]
  };

  /* ================================================================
     2. Brøker
     ================================================================ */
  T['broeker'] = {
    title: { da: 'Brøker', en: 'Fractions' },
    phase: [1, 2],
    summary: {
      da: 'En brøk kan være en del af en helhed, et tal på tallinjen, en division – og et forhold. Lær at forkorte, forlænge, sammenligne og regne med brøker.',
      en: 'A fraction can be part of a whole, a number on the number line, a division – and a ratio. Learn to simplify, expand, compare and calculate with fractions.'
    },
    goals: {
      da: [
        'Eleven kan anvende decimaltal og brøker i hverdagssituationer.',
        'Eleven har viden om brøkbegrebet og decimaltals opbygning i titalssystemet.',
        'Eleven kan udvikle metoder til beregninger med decimaltal, enkle brøker og negative hele tal.'
      ],
      en: [
        'The pupil can use decimals and fractions in everyday situations.',
        'The pupil has knowledge of the fraction concept and the structure of decimals in the base-10 system.',
        'The pupil can develop methods for calculating with decimals, simple fractions and negative whole numbers.'
      ]
    },
    terms: [
      { da: 'brøk', en: 'fraction', def: { da: 'Et tal skrevet som tæller over nævner, fx ' + fr(3, 4), en: 'A number written as numerator over denominator, e.g. ' + fr(3, 4) } },
      { da: 'tæller', en: 'numerator', def: { da: 'Tallet øverst – hvor mange dele du har', en: 'The top number – how many parts you have' } },
      { da: 'nævner', en: 'denominator', def: { da: 'Tallet nederst – hvor mange dele helheden er delt i', en: 'The bottom number – how many parts the whole is divided into' } },
      { da: 'ligeværdige brøker', en: 'equivalent fractions', def: { da: 'Brøker med samme værdi, fx ' + fr(1, 2) + ' = ' + fr(2, 4), en: 'Fractions with the same value, e.g. ' + fr(1, 2) + ' = ' + fr(2, 4) } },
      { da: 'forkorte', en: 'simplify (reduce)', def: { da: 'Dividere tæller og nævner med samme tal', en: 'Divide numerator and denominator by the same number' } },
      { da: 'forlænge', en: 'expand', def: { da: 'Gange tæller og nævner med samme tal', en: 'Multiply numerator and denominator by the same number' } },
      { da: 'helhed', en: 'the whole', def: { da: 'Det, brøken er en del af – en pizza, en klasse, 20 kr.', en: 'What the fraction is part of – a pizza, a class, 20 kr.' } },
      { da: 'uægte brøk', en: 'improper fraction', def: { da: 'Tælleren er større end nævneren, fx ' + fr(7, 4) + ' = 1' + fr(3, 4), en: 'Numerator bigger than denominator, e.g. ' + fr(7, 4) + ' = 1' + fr(3, 4) } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Hvad er en brøk? Fire måder at se det på', en: 'What is a fraction? Four ways to see it' },
        body: {
          da: '<p>En brøk som ' + fr(3, 4) + ' består af en <b>tæller</b> (3) over en <b>nævner</b> (4). Nævneren fortæller, hvor mange lige store dele helheden er delt i. Tælleren fortæller, hvor mange af delene vi taler om.</p>'
            + '<p>Læseplanen siger, at brøker kan forstås på fire måder – og det er en god idé at kende dem alle:</p>'
            + '<ol>'
            + '<li><b>Del af en helhed.</b> ' + fr(3, 4) + ' af en pizza: pizzaen er delt i 4 lige store stykker, og du har 3 af dem.</li>'
            + '<li><b>Et tal på tallinjen.</b> ' + fr(3, 4) + ' ligger mellem 0 og 1 – tre fjerdedele af vejen hen til 1. Brøker er rigtige tal, ligesom 2 og 17.</li>'
            + '<li><b>En division.</b> ' + fr(3, 4) + ' betyder også ' + m('3 : 4') + '. Deler 4 personer 3 pizzaer, får hver ' + fr(3, 4) + ' pizza. Og ' + m('3 : 4 = 0,75') + '.</li>'
            + '<li><b>Et forhold.</b> „3 ud af 4 elever cykler“ – 3 ud af hver 4.</li>'
            + '</ol>',
          en: '<p>A fraction like ' + fr(3, 4) + ' has a <b>numerator</b> (3) over a <b>denominator</b> (4). The denominator tells how many equal parts the whole is divided into. The numerator tells how many of those parts we are talking about.</p>'
            + '<p>The Danish curriculum says fractions can be understood in four ways – and it is a good idea to know them all:</p>'
            + '<ol>'
            + '<li><b>Part of a whole.</b> ' + fr(3, 4) + ' of a pizza: the pizza is cut into 4 equal pieces and you have 3 of them.</li>'
            + '<li><b>A number on the number line.</b> ' + fr(3, 4) + ' lies between 0 and 1 – three quarters of the way to 1. Fractions are real numbers, just like 2 and 17.</li>'
            + '<li><b>A division.</b> ' + fr(3, 4) + ' also means ' + m('3 ÷ 4') + '. If 4 people share 3 pizzas, each gets ' + fr(3, 4) + ' of a pizza. And ' + m('3 ÷ 4 = 0.75') + '.</li>'
            + '<li><b>A ratio.</b> "3 out of 4 pupils cycle" – 3 out of every 4.</li>'
            + '</ol>'
        }
      },
      {
        type: 'fig',
        svg: '<svg viewBox="0 0 560 170" width="560" height="170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="14">'
          + '<g transform="translate(80,80)">'
          + '<path d="M0,0 L60,0 A60,60 0 0,1 0,60 Z" fill="#c9d8fb" stroke="#2f6fed" stroke-width="2"/>'
          + '<path d="M0,0 L0,60 A60,60 0 0,1 -60,0 Z" fill="#c9d8fb" stroke="#2f6fed" stroke-width="2"/>'
          + '<path d="M0,0 L-60,0 A60,60 0 0,1 0,-60 Z" fill="#c9d8fb" stroke="#2f6fed" stroke-width="2"/>'
          + '<path d="M0,0 L0,-60 A60,60 0 0,1 60,0 Z" fill="none" stroke="#2f6fed" stroke-width="2" stroke-dasharray="4 3"/>'
          + '<text x="0" y="80" text-anchor="middle" fill="currentColor">3 / 4</text></g>'
          + '<g transform="translate(200,90)">'
          + '<line x1="0" y1="0" x2="320" y2="0" stroke="currentColor" stroke-width="2"/>'
          + '<g stroke="currentColor" stroke-width="2"><line x1="0" y1="-8" x2="0" y2="8"/><line x1="80" y1="-6" x2="80" y2="6"/><line x1="160" y1="-6" x2="160" y2="6"/><line x1="240" y1="-6" x2="240" y2="6"/><line x1="320" y1="-8" x2="320" y2="8"/></g>'
          + '<circle cx="240" cy="0" r="6" fill="#2f6fed"/>'
          + '<g fill="currentColor" text-anchor="middle"><text x="0" y="26">0</text><text x="80" y="26">1/4</text><text x="160" y="26">2/4</text><text x="240" y="26" font-weight="bold">3/4</text><text x="320" y="26">1</text></g>'
          + '</g></svg>',
        caption: { da: 'Tre fjerdedele som del af en helhed – og som et punkt på tallinjen.', en: 'Three quarters as part of a whole – and as a point on the number line.' }
      },
      {
        type: 'text',
        title: { da: 'Ligeværdige brøker: forlænge og forkorte', en: 'Equivalent fractions: expanding and simplifying' },
        body: {
          da: '<p>' + fr(1, 2) + ', ' + fr(2, 4) + ' og ' + fr(4, 8) + ' er <b>samme størrelse</b> – halvdelen af pizzaen, bare skåret i flere stykker. De er <b>ligeværdige</b>.</p>'
            + '<p><b>Forlænge</b>: gang tæller og nævner med det samme tal. ' + fr(1, 2) + ' → gang med 3 → ' + fr(3, 6) + '.</p>'
            + '<p><b>Forkorte</b>: divider tæller og nævner med det samme tal. ' + fr(6, 8) + ' → divider med 2 → ' + fr(3, 4) + '. Når man ikke kan forkorte mere, er brøken <i>uforkortelig</i>.</p>'
            + '<p>Hvorfor virker det? Fordi du ganger (eller dividerer) med noget, der er lig med 1: ' + fr(3, 3) + ' = 1. Og at gange med 1 ændrer ikke værdien.</p>',
          en: '<p>' + fr(1, 2) + ', ' + fr(2, 4) + ' and ' + fr(4, 8) + ' are <b>the same size</b> – half the pizza, just cut into more pieces. They are <b>equivalent</b>.</p>'
            + '<p><b>Expand</b>: multiply numerator and denominator by the same number. ' + fr(1, 2) + ' → multiply by 3 → ' + fr(3, 6) + '.</p>'
            + '<p><b>Simplify</b>: divide numerator and denominator by the same number. ' + fr(6, 8) + ' → divide by 2 → ' + fr(3, 4) + '. When you cannot simplify any more, the fraction is in its <i>simplest form</i>.</p>'
            + '<p>Why does it work? Because you multiply (or divide) by something equal to 1: ' + fr(3, 3) + ' = 1. And multiplying by 1 does not change the value.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Sammenligne brøker', en: 'Comparing fractions' },
        body: {
          da: '<p><b>Samme nævner:</b> den med den største tæller er størst. ' + fr(5, 8) + ' &gt; ' + fr(3, 8) + '.</p>'
            + '<p><b>Samme tæller:</b> den med den <i>mindste</i> nævner er størst (færre, men større stykker). ' + fr(1, 3) + ' &gt; ' + fr(1, 5) + '.</p>'
            + '<p><b>Forskellige nævnere:</b> forlæng til en fælles nævner. Er ' + fr(2, 3) + ' eller ' + fr(3, 4) + ' størst? Fælles nævner 12: ' + fr(2, 3) + ' = ' + fr(8, 12) + ' og ' + fr(3, 4) + ' = ' + fr(9, 12) + '. Så ' + fr(3, 4) + ' er størst.</p>'
            + '<p><b>Eller lav dem om til decimaltal:</b> ' + fr(2, 3) + ' = ' + m('2 : 3 ≈ 0,67') + ' og ' + fr(3, 4) + ' = ' + m('3 : 4 = 0,75') + '. Læseplanen nævner netop denne metode – den er ofte den nemmeste med lommeregner.</p>',
          en: '<p><b>Same denominator:</b> the one with the bigger numerator is bigger. ' + fr(5, 8) + ' &gt; ' + fr(3, 8) + '.</p>'
            + '<p><b>Same numerator:</b> the one with the <i>smaller</i> denominator is bigger (fewer, but bigger pieces). ' + fr(1, 3) + ' &gt; ' + fr(1, 5) + '.</p>'
            + '<p><b>Different denominators:</b> expand to a common denominator. Which is bigger, ' + fr(2, 3) + ' or ' + fr(3, 4) + '? Common denominator 12: ' + fr(2, 3) + ' = ' + fr(8, 12) + ' and ' + fr(3, 4) + ' = ' + fr(9, 12) + '. So ' + fr(3, 4) + ' is bigger.</p>'
            + '<p><b>Or convert to decimals:</b> ' + fr(2, 3) + ' = ' + m('2 ÷ 3 ≈ 0.67') + ' and ' + fr(3, 4) + ' = ' + m('3 ÷ 4 = 0.75') + '. The curriculum mentions exactly this method – it is often the easiest with a calculator.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Brøkdel af et tal', en: 'A fraction of an amount' },
        problem: { da: 'Hvad er ' + fr(3, 4) + ' af 20 kr.?', en: 'What is ' + fr(3, 4) + ' of 20 kr.?' },
        steps: {
          da: [
            'Find én fjerdedel: divider med nævneren. ' + m('20 : 4 = 5') + ' kr.',
            'Tag tre af dem: gang med tælleren. ' + m('5 · 3 = 15') + ' kr.',
            'Husk: brøkdelen afhænger af helheden. ' + fr(1, 2) + ' af 10 kr. er 5 kr., men ' + fr(1, 2) + ' af 100 kr. er 50 kr.'
          ],
          en: [
            'Find one quarter: divide by the denominator. ' + m('20 ÷ 4 = 5') + ' kr.',
            'Take three of them: multiply by the numerator. ' + m('5 × 3 = 15') + ' kr.',
            'Remember: the fraction depends on the whole. ' + fr(1, 2) + ' of 10 kr. is 5 kr., but ' + fr(1, 2) + ' of 100 kr. is 50 kr.'
          ]
        },
        answer: { da: '15 kr.', en: '15 kr.' }
      },
      {
        type: 'text',
        title: { da: 'Plus og minus med brøker', en: 'Adding and subtracting fractions' },
        body: {
          da: '<p><b>Samme nævner:</b> læg tællerne sammen – nævneren bliver den samme. ' + fr(1, 4) + ' + ' + fr(2, 4) + ' = ' + fr(3, 4) + '. (Tænk: 1 stykke + 2 stykker = 3 stykker, og stykkerne er stadig fjerdedele.)</p>'
            + '<p><b>Forskellige nævnere:</b> forlæng først, så nævnerne bliver ens. ' + fr(1, 2) + ' + ' + fr(1, 4) + ' = ' + fr(2, 4) + ' + ' + fr(1, 4) + ' = ' + fr(3, 4) + '.</p>'
            + '<p>Minus virker på samme måde: ' + fr(5, 6) + ' − ' + fr(1, 3) + ' = ' + fr(5, 6) + ' − ' + fr(2, 6) + ' = ' + fr(3, 6) + ' = ' + fr(1, 2) + '.</p>'
            + '<p>Typisk fejl: at lægge nævnerne sammen. ' + fr(1, 4) + ' + ' + fr(1, 4) + ' er <b>ikke</b> ' + fr(2, 8) + ' – to kvarte pizzaer er en halv pizza, altså ' + fr(2, 4) + ' = ' + fr(1, 2) + '.</p>',
          en: '<p><b>Same denominator:</b> add the numerators – the denominator stays the same. ' + fr(1, 4) + ' + ' + fr(2, 4) + ' = ' + fr(3, 4) + '. (Think: 1 piece + 2 pieces = 3 pieces, and the pieces are still quarters.)</p>'
            + '<p><b>Different denominators:</b> expand first so the denominators match. ' + fr(1, 2) + ' + ' + fr(1, 4) + ' = ' + fr(2, 4) + ' + ' + fr(1, 4) + ' = ' + fr(3, 4) + '.</p>'
            + '<p>Subtracting works the same way: ' + fr(5, 6) + ' − ' + fr(1, 3) + ' = ' + fr(5, 6) + ' − ' + fr(2, 6) + ' = ' + fr(3, 6) + ' = ' + fr(1, 2) + '.</p>'
            + '<p>Common mistake: adding the denominators. ' + fr(1, 4) + ' + ' + fr(1, 4) + ' is <b>not</b> ' + fr(2, 8) + ' – two quarter pizzas make half a pizza, so ' + fr(2, 4) + ' = ' + fr(1, 2) + '.</p>'
        }
      },
      { type: 'widget', widget: 'fraction', title: { da: 'Brøk-udforsker', en: 'Fraction explorer' } },
      {
        type: 'practice',
        items: [
          { q: { da: 'Forkort ' + fr(8, 12) + ' så meget som muligt.', en: 'Simplify ' + fr(8, 12) + ' as much as possible.' },
            a: { da: fr(2, 3) + '. Divider tæller og nævner med 4.', en: fr(2, 3) + '. Divide numerator and denominator by 4.' } },
          { q: { da: 'Hvilken er størst: ' + fr(3, 5) + ' eller ' + fr(2, 3) + '?', en: 'Which is bigger: ' + fr(3, 5) + ' or ' + fr(2, 3) + '?' },
            a: { da: fr(2, 3) + '. Fælles nævner 15: ' + fr(9, 15) + ' og ' + fr(10, 15) + '. Eller som decimaltal: 0,6 og ca. 0,67.', en: fr(2, 3) + '. Common denominator 15: ' + fr(9, 15) + ' and ' + fr(10, 15) + '. Or as decimals: 0.6 and about 0.67.' } },
          { q: { da: 'Hvad er ' + fr(2, 5) + ' af 35?', en: 'What is ' + fr(2, 5) + ' of 35?' },
            a: { da: '14. ' + m('35 : 5 = 7') + ', og ' + m('7 · 2 = 14') + '.', en: '14. ' + m('35 ÷ 5 = 7') + ', and ' + m('7 × 2 = 14') + '.' } },
          { q: { da: 'Regn ud: ' + fr(1, 3) + ' + ' + fr(1, 6), en: 'Calculate: ' + fr(1, 3) + ' + ' + fr(1, 6) },
            a: { da: fr(1, 2) + '. Forlæng ' + fr(1, 3) + ' til ' + fr(2, 6) + '. ' + fr(2, 6) + ' + ' + fr(1, 6) + ' = ' + fr(3, 6) + ' = ' + fr(1, 2) + '.', en: fr(1, 2) + '. Expand ' + fr(1, 3) + ' to ' + fr(2, 6) + '. ' + fr(2, 6) + ' + ' + fr(1, 6) + ' = ' + fr(3, 6) + ' = ' + fr(1, 2) + '.' } },
          { q: { da: 'I en klasse med 24 elever går 18 til sport. Hvilken brøkdel er det? Forkort.', en: 'In a class of 24 pupils, 18 do sport. What fraction is that? Simplify.' },
            a: { da: fr(18, 24) + ' = ' + fr(3, 4) + '. Tre ud af fire elever går til sport.', en: fr(18, 24) + ' = ' + fr(3, 4) + '. Three out of four pupils do sport.' } },
          { q: { da: 'Skriv ' + fr(7, 4) + ' som et blandet tal.', en: 'Write ' + fr(7, 4) + ' as a mixed number.' },
            a: { da: '1' + fr(3, 4) + '. Fire fjerdedele er én hel, og der er 3 fjerdedele tilbage.', en: '1' + fr(3, 4) + '. Four quarters make one whole, with 3 quarters left over.' } }
        ]
      }
    ]
  };

  /* ================================================================
     3. Decimaltal
     ================================================================ */
  T['decimaltal'] = {
    title: { da: 'Decimaltal', en: 'Decimals' },
    phase: [1, 2],
    summary: {
      da: 'Tal med komma: tiendedele, hundrededele og tusindedele. Decimaltal er brøker med nævner 10, 100 og 1000.',
      en: 'Numbers with a decimal point: tenths, hundredths and thousandths. Decimals are fractions with denominator 10, 100 and 1000.'
    },
    goals: {
      da: [
        'Eleven kan anvende decimaltal og brøker i hverdagssituationer.',
        'Eleven har viden om brøkbegrebet og decimaltals opbygning i titalssystemet.',
        'Eleven kan udvikle metoder til beregninger med decimaltal, enkle brøker og negative hele tal.'
      ],
      en: [
        'The pupil can use decimals and fractions in everyday situations.',
        'The pupil has knowledge of the fraction concept and the structure of decimals in the base-10 system.',
        'The pupil can develop methods for calculating with decimals, simple fractions and negative whole numbers.'
      ]
    },
    terms: [
      { da: 'decimaltal', en: 'decimal (number)', def: { da: 'Et tal med komma, fx 3,75', en: 'A number with a decimal point, e.g. 3.75' } },
      { da: 'decimalkomma', en: 'decimal point', def: { da: 'På dansk bruges komma: 3,75. På engelsk bruges punktum: 3.75', en: 'In Danish a comma is used: 3,75. In English a point: 3.75' } },
      { da: 'tiendedele', en: 'tenths', def: { da: 'Første plads efter kommaet. 0,3 = ' + fr(3, 10), en: 'First place after the point. 0.3 = ' + fr(3, 10) } },
      { da: 'hundrededele', en: 'hundredths', def: { da: 'Anden plads efter kommaet. 0,07 = ' + fr(7, 100), en: 'Second place after the point. 0.07 = ' + fr(7, 100) } },
      { da: 'tusindedele', en: 'thousandths', def: { da: 'Tredje plads efter kommaet. 0,002 = ' + fr(2, 1000), en: 'Third place after the point. 0.002 = ' + fr(2, 1000) } },
      { da: 'afrunde', en: 'round (off)', def: { da: 'Gøre et tal enklere: 3,46 ≈ 3,5', en: 'Make a number simpler: 3.46 ≈ 3.5' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Titalssystemet fortsætter efter kommaet', en: 'The base-10 system continues after the point' },
        body: {
          da: '<p>Du kender tiere, hundreder og tusinder til venstre for enerne. Hver plads er 10 gange større end den til højre. Det fortsætter til højre for kommaet – hver plads er 10 gange <i>mindre</i>:</p>'
            + '<table><tr><th>tusinder</th><th>hundreder</th><th>tiere</th><th>enere</th><th>,</th><th>tiendedele</th><th>hundrededele</th><th>tusindedele</th></tr>'
            + '<tr class="num"><td>1.000</td><td>100</td><td>10</td><td>1</td><td>,</td><td>' + fr(1, 10) + ' = 0,1</td><td>' + fr(1, 100) + ' = 0,01</td><td>' + fr(1, 1000) + ' = 0,001</td></tr>'
            + '<tr><td></td><td></td><td>2</td><td>3</td><td>,</td><td>7</td><td>5</td><td></td></tr></table>'
            + '<p>Tallet i nederste række er <b>23,75</b>: 2 tiere, 3 enere, 7 tiendedele og 5 hundrededele. Det er det samme som ' + m('23 + 0,7 + 0,05') + '.</p>'
            + '<p><b>Husk på dansk:</b> Vi skriver komma i decimaltal (3,5) og punktum i store tal (1.250). På engelsk er det omvendt (3.5 og 1,250). Lommeregnere og computere bruger ofte den engelske måde!</p>',
          en: '<p>You know tens, hundreds and thousands to the left of the ones. Each place is 10 times bigger than the one to its right. This continues to the right of the decimal point – each place is 10 times <i>smaller</i>:</p>'
            + '<table><tr><th>thousands</th><th>hundreds</th><th>tens</th><th>ones</th><th>.</th><th>tenths</th><th>hundredths</th><th>thousandths</th></tr>'
            + '<tr class="num"><td>1,000</td><td>100</td><td>10</td><td>1</td><td>.</td><td>' + fr(1, 10) + ' = 0.1</td><td>' + fr(1, 100) + ' = 0.01</td><td>' + fr(1, 1000) + ' = 0.001</td></tr>'
            + '<tr><td></td><td></td><td>2</td><td>3</td><td>.</td><td>7</td><td>5</td><td></td></tr></table>'
            + '<p>The number in the bottom row is <b>23.75</b>: 2 tens, 3 ones, 7 tenths and 5 hundredths. That is the same as ' + m('23 + 0.7 + 0.05') + '.</p>'
            + '<p><b>Remember, in Danish:</b> a comma is used for decimals (3,5) and a full stop in large numbers (1.250). In English it is the other way round (3.5 and 1,250). Calculators and computers often use the English way!</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Decimaltal er brøker', en: 'Decimals are fractions' },
        body: {
          da: '<p>Et decimaltal er bare en brøk med nævner 10, 100 eller 1000:</p>'
            + '<table><tr><th>Brøk</th><th>Decimaltal</th><th>Forklaring</th></tr>'
            + '<tr><td>' + fr(1, 10) + '</td><td>0,1</td><td>en tiendedel</td></tr>'
            + '<tr><td>' + fr(1, 2) + ' = ' + fr(5, 10) + '</td><td>0,5</td><td>en halv = fem tiendedele</td></tr>'
            + '<tr><td>' + fr(1, 4) + ' = ' + fr(25, 100) + '</td><td>0,25</td><td>en kvart = 25 hundrededele</td></tr>'
            + '<tr><td>' + fr(3, 4) + ' = ' + fr(75, 100) + '</td><td>0,75</td><td>tre kvarte</td></tr>'
            + '<tr><td>' + fr(1, 5) + ' = ' + fr(2, 10) + '</td><td>0,2</td><td>en femtedel</td></tr>'
            + '<tr><td>' + fr(1, 3) + '</td><td>0,333…</td><td>går ikke op – decimalerne fortsætter</td></tr></table>'
            + '<p>Brøk → decimaltal: divider tæller med nævner. ' + fr(3, 8) + ' = ' + m('3 : 8 = 0,375') + '.</p>'
            + '<p>Decimaltal → brøk: læs pladsen. 0,35 er 35 hundrededele = ' + fr(35, 100) + ' = ' + fr(7, 20) + '.</p>',
          en: '<p>A decimal is just a fraction with denominator 10, 100 or 1000:</p>'
            + '<table><tr><th>Fraction</th><th>Decimal</th><th>Explanation</th></tr>'
            + '<tr><td>' + fr(1, 10) + '</td><td>0.1</td><td>one tenth</td></tr>'
            + '<tr><td>' + fr(1, 2) + ' = ' + fr(5, 10) + '</td><td>0.5</td><td>a half = five tenths</td></tr>'
            + '<tr><td>' + fr(1, 4) + ' = ' + fr(25, 100) + '</td><td>0.25</td><td>a quarter = 25 hundredths</td></tr>'
            + '<tr><td>' + fr(3, 4) + ' = ' + fr(75, 100) + '</td><td>0.75</td><td>three quarters</td></tr>'
            + '<tr><td>' + fr(1, 5) + ' = ' + fr(2, 10) + '</td><td>0.2</td><td>one fifth</td></tr>'
            + '<tr><td>' + fr(1, 3) + '</td><td>0.333…</td><td>does not divide evenly – the decimals go on</td></tr></table>'
            + '<p>Fraction → decimal: divide numerator by denominator. ' + fr(3, 8) + ' = ' + m('3 ÷ 8 = 0.375') + '.</p>'
            + '<p>Decimal → fraction: read the place. 0.35 is 35 hundredths = ' + fr(35, 100) + ' = ' + fr(7, 20) + '.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Sammenligne decimaltal', en: 'Comparing decimals' },
        body: {
          da: '<p>Hvad er størst: 0,5 eller 0,45? Mange tænker „45 er større end 5“ – men det er forkert. Giv tallene lige mange decimaler ved at sætte nuller på: <b>0,50</b> og <b>0,45</b>. 50 hundrededele er mere end 45 hundrededele, så <b>0,5 er størst</b>.</p>'
            + '<p>Sammenlign plads for plads fra venstre: først enerne, så tiendedelene, så hundrededelene. 3,7 &gt; 3,68 fordi 7 tiendedele &gt; 6 tiendedele.</p>'
            + '<p>På tallinjen: mellem 0 og 1 ligger 0,1, 0,2, … 0,9. Mellem 0,4 og 0,5 ligger 0,41, 0,42 … 0,49. Der er altid plads til flere tal imellem.</p>',
          en: '<p>Which is bigger: 0.5 or 0.45? Many people think "45 is bigger than 5" – but that is wrong. Give the numbers the same number of decimals by adding zeros: <b>0.50</b> and <b>0.45</b>. 50 hundredths is more than 45 hundredths, so <b>0.5 is bigger</b>.</p>'
            + '<p>Compare place by place from the left: first the ones, then the tenths, then the hundredths. 3.7 &gt; 3.68 because 7 tenths &gt; 6 tenths.</p>'
            + '<p>On the number line: between 0 and 1 lie 0.1, 0.2, … 0.9. Between 0.4 and 0.5 lie 0.41, 0.42 … 0.49. There is always room for more numbers in between.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Plus og minus – sæt kommaerne under hinanden', en: 'Adding and subtracting – line up the decimal points' },
        problem: { da: 'En bog koster 124,50 kr. og en blyant 8,75 kr. Hvad koster det tilsammen? Og hvor meget dyrere er bogen?', en: 'A book costs 124.50 kr. and a pencil 8.75 kr. How much altogether? And how much more expensive is the book?' },
        steps: {
          da: [
            'Skriv tallene under hinanden med kommaerne lige over hinanden. Fyld op med nuller, så de har lige mange decimaler.',
            'Plus: ' + m('124,50 + 8,75 = 133,25') + ' kr. (50 + 75 hundrededele = 125 hundrededele = 1 krone og 25 øre – der veksles op til enerne.)',
            'Minus: ' + m('124,50 − 8,75 = 115,75') + ' kr.',
            'Overslag: ' + m('125 + 9 ≈ 134') + ' og ' + m('125 − 9 ≈ 116') + '. Passer.'
          ],
          en: [
            'Write the numbers under each other with the decimal points lined up. Fill with zeros so they have the same number of decimals.',
            'Add: ' + m('124.50 + 8.75 = 133.25') + ' kr. (50 + 75 hundredths = 125 hundredths = 1 krone and 25 øre – carry to the ones.)',
            'Subtract: ' + m('124.50 − 8.75 = 115.75') + ' kr.',
            'Estimate: ' + m('125 + 9 ≈ 134') + ' and ' + m('125 − 9 ≈ 116') + '. Fits.'
          ]
        },
        answer: { da: '133,25 kr. tilsammen; bogen er 115,75 kr. dyrere.', en: '133.25 kr. altogether; the book is 115.75 kr. more expensive.' }
      },
      {
        type: 'text',
        title: { da: 'Gange og dividere med 10, 100 og 1000', en: 'Multiplying and dividing by 10, 100 and 1000' },
        body: {
          da: '<p>Når du ganger med 10, bliver hver plads 10 gange større – kommaet flytter <b>én plads til højre</b>. Dividerer du med 10, flytter det én plads til venstre.</p>'
            + '<table><tr><th></th><th>· 10</th><th>· 100</th><th>· 1000</th><th>: 10</th><th>: 100</th></tr>'
            + '<tr><td>3,5</td><td>35</td><td>350</td><td>3.500</td><td>0,35</td><td>0,035</td></tr>'
            + '<tr><td>0,42</td><td>4,2</td><td>42</td><td>420</td><td>0,042</td><td>0,0042</td></tr></table>'
            + '<p>Det er praktisk til enheder: 2,5 m = ' + m('2,5 · 100 = 250') + ' cm. Og 750 g = ' + m('750 : 1000 = 0,75') + ' kg.</p>'
            + '<p><b>Gange to decimaltal</b> (fx ' + m('2,5 · 1,2') + '): regn uden komma (' + m('25 · 12 = 300') + '), og sæt så kommaet, så der er lige så mange decimaler som i de to tal tilsammen (1 + 1 = 2): <b>3,00 = 3</b>. Tjek med overslag: 2,5 · 1 ≈ 2,5, så 3 er rimeligt.</p>',
          en: '<p>When you multiply by 10, every place becomes 10 times bigger – the decimal point moves <b>one place to the right</b>. When you divide by 10, it moves one place to the left.</p>'
            + '<table><tr><th></th><th>× 10</th><th>× 100</th><th>× 1000</th><th>÷ 10</th><th>÷ 100</th></tr>'
            + '<tr><td>3.5</td><td>35</td><td>350</td><td>3,500</td><td>0.35</td><td>0.035</td></tr>'
            + '<tr><td>0.42</td><td>4.2</td><td>42</td><td>420</td><td>0.042</td><td>0.0042</td></tr></table>'
            + '<p>This is handy for units: 2.5 m = ' + m('2.5 × 100 = 250') + ' cm. And 750 g = ' + m('750 ÷ 1000 = 0.75') + ' kg.</p>'
            + '<p><b>Multiplying two decimals</b> (e.g. ' + m('2.5 × 1.2') + '): calculate without the point (' + m('25 × 12 = 300') + '), then place the point so there are as many decimals as in the two numbers together (1 + 1 = 2): <b>3.00 = 3</b>. Check with an estimate: 2.5 × 1 ≈ 2.5, so 3 is reasonable.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Afrunding', en: 'Rounding' },
        body: {
          da: '<p>Se på cifret <i>lige efter</i> den plads, du runder til. Er det 5 eller mere, runder du op. Er det 4 eller mindre, runder du ned.</p>'
            + '<ul><li>3,46 med én decimal → 3,<b>5</b> (6 er mindst 5 → op)</li><li>3,43 med én decimal → 3,<b>4</b> (3 er under 5 → ned)</li><li>12,98 til helt tal → <b>13</b></li><li>7,25 kr. – priser i butikker rundes til nærmeste 50 øre, når du betaler kontant: 7,00 kr. eller 7,50 kr.</li></ul>',
          en: '<p>Look at the digit <i>right after</i> the place you are rounding to. If it is 5 or more, round up. If it is 4 or less, round down.</p>'
            + '<ul><li>3.46 to one decimal → 3.<b>5</b> (6 is at least 5 → up)</li><li>3.43 to one decimal → 3.<b>4</b> (3 is under 5 → down)</li><li>12.98 to a whole number → <b>13</b></li><li>7.25 kr. – in Danish shops cash prices are rounded to the nearest 50 øre: 7.00 kr. or 7.50 kr.</li></ul>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Skriv 0,6 som brøk (forkortet).', en: 'Write 0.6 as a fraction (simplified).' }, a: { da: fr(6, 10) + ' = ' + fr(3, 5), en: fr(6, 10) + ' = ' + fr(3, 5) } },
          { q: { da: 'Hvilket tal er størst: 0,8 eller 0,75?', en: 'Which is bigger: 0.8 or 0.75?' }, a: { da: '0,8. Skriv 0,80 – 80 hundrededele er mere end 75 hundrededele.', en: '0.8. Write 0.80 – 80 hundredths is more than 75 hundredths.' } },
          { q: { da: 'Regn ud: ' + m('4,7 + 2,85'), en: 'Calculate: ' + m('4.7 + 2.85') }, a: { da: '7,55. Skriv 4,70 + 2,85.', en: '7.55. Write 4.70 + 2.85.' } },
          { q: { da: 'Regn ud: ' + m('10 − 3,4'), en: 'Calculate: ' + m('10 − 3.4') }, a: { da: '6,6. Skriv 10,0 − 3,4.', en: '6.6. Write 10.0 − 3.4.' } },
          { q: { da: 'Skriv ' + fr(5, 8) + ' som decimaltal.', en: 'Write ' + fr(5, 8) + ' as a decimal.' }, a: { da: '0,625 (' + m('5 : 8') + ').', en: '0.625 (' + m('5 ÷ 8') + ').' } },
          { q: { da: '1,75 km er hvor mange meter?', en: '1.75 km is how many metres?' }, a: { da: '1.750 m. Gang med 1000 – kommaet flytter tre pladser.', en: '1,750 m. Multiply by 1000 – the point moves three places.' } },
          { q: { da: 'Rund 8,449 af til én decimal.', en: 'Round 8.449 to one decimal.' }, a: { da: '8,4. Cifret efter tiendedelene er 4, så vi runder ned. (Vi kigger kun på det ene ciffer – ikke på 49.)', en: '8.4. The digit after the tenths is 4, so we round down. (We only look at that one digit – not at 49.)' } }
        ]
      }
    ]
  };

  /* ================================================================
     4. Procent
     ================================================================ */
  T['procent'] = {
    title: { da: 'Procent', en: 'Percent' },
    phase: [3],
    summary: {
      da: 'Procent betyder „pr. hundrede“. Lær at skifte mellem brøk, decimaltal og procent, og at regne rabat og procentdele ud.',
      en: 'Percent means "per hundred". Learn to switch between fractions, decimals and percent, and to work out discounts and percentages.'
    },
    goals: {
      da: [
        'Eleven kan anvende procent, enkle potenser og pi.',
        'Eleven har viden om procentbegrebet, enkle potenser og pi.',
        'Eleven kan udføre beregninger med procent, herunder med digitale værktøjer.'
      ],
      en: [
        'The pupil can use percent, simple powers and pi.',
        'The pupil has knowledge of the percent concept, simple powers and pi.',
        'The pupil can carry out calculations with percent, including with digital tools.'
      ]
    },
    terms: [
      { da: 'procent (%)', en: 'percent (%)', def: { da: 'Hundrededele. 25 % = ' + fr(25, 100), en: 'Hundredths. 25% = ' + fr(25, 100) } },
      { da: 'rabat', en: 'discount', def: { da: 'Det, prisen sættes ned med', en: 'The amount the price is reduced by' } },
      { da: 'procentdel', en: 'percentage (share)', def: { da: 'Hvor mange procent en del udgør af helheden', en: 'How many percent a part is of the whole' } },
      { da: 'omskrive', en: 'convert', def: { da: 'Skrive samme tal på en anden måde: ' + fr(1, 4) + ' = 0,25 = 25 %', en: 'Write the same number in another way: ' + fr(1, 4) + ' = 0.25 = 25%' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Procent er hundrededele', en: 'Percent means hundredths' },
        body: {
          da: '<p>„Procent“ kommer fra latin og betyder <b>pr. hundrede</b>. 25 % betyder 25 ud af 100 – altså brøken ' + fr(25, 100) + ', som er det samme som ' + fr(1, 4) + ' og 0,25. Læseplanen kalder procent for „en særlig anvendelse af brøkbegrebet“ – så hvis du forstår brøker, forstår du procent.</p>'
            + '<p>De her skal du kunne udenad:</p>'
            + '<table><tr><th>Procent</th><th>Brøk</th><th>Decimaltal</th><th>Sådan tænker du</th></tr>'
            + '<tr><td>100 %</td><td>1</td><td>1</td><td>det hele</td></tr>'
            + '<tr><td>50 %</td><td>' + fr(1, 2) + '</td><td>0,5</td><td>halvdelen</td></tr>'
            + '<tr><td>25 %</td><td>' + fr(1, 4) + '</td><td>0,25</td><td>en kvart – divider med 4</td></tr>'
            + '<tr><td>75 %</td><td>' + fr(3, 4) + '</td><td>0,75</td><td>tre kvarte</td></tr>'
            + '<tr><td>10 %</td><td>' + fr(1, 10) + '</td><td>0,1</td><td>en tiendedel – divider med 10</td></tr>'
            + '<tr><td>20 %</td><td>' + fr(1, 5) + '</td><td>0,2</td><td>en femtedel – divider med 5</td></tr>'
            + '<tr><td>1 %</td><td>' + fr(1, 100) + '</td><td>0,01</td><td>en hundrededel – divider med 100</td></tr></table>',
          en: '<p>"Percent" comes from Latin and means <b>per hundred</b>. 25% means 25 out of 100 – the fraction ' + fr(25, 100) + ', which is the same as ' + fr(1, 4) + ' and 0.25. The Danish curriculum calls percent "a special use of the fraction concept" – so if you understand fractions, you understand percent.</p>'
            + '<p>Know these by heart:</p>'
            + '<table><tr><th>Percent</th><th>Fraction</th><th>Decimal</th><th>How to think</th></tr>'
            + '<tr><td>100%</td><td>1</td><td>1</td><td>the whole thing</td></tr>'
            + '<tr><td>50%</td><td>' + fr(1, 2) + '</td><td>0.5</td><td>half</td></tr>'
            + '<tr><td>25%</td><td>' + fr(1, 4) + '</td><td>0.25</td><td>a quarter – divide by 4</td></tr>'
            + '<tr><td>75%</td><td>' + fr(3, 4) + '</td><td>0.75</td><td>three quarters</td></tr>'
            + '<tr><td>10%</td><td>' + fr(1, 10) + '</td><td>0.1</td><td>a tenth – divide by 10</td></tr>'
            + '<tr><td>20%</td><td>' + fr(1, 5) + '</td><td>0.2</td><td>a fifth – divide by 5</td></tr>'
            + '<tr><td>1%</td><td>' + fr(1, 100) + '</td><td>0.01</td><td>a hundredth – divide by 100</td></tr></table>'
        }
      },
      {
        type: 'text',
        title: { da: 'Skift mellem brøk, decimaltal og procent', en: 'Switching between fraction, decimal and percent' },
        body: {
          da: '<ul>'
            + '<li><b>Brøk → decimaltal:</b> divider. ' + fr(3, 5) + ' = ' + m('3 : 5 = 0,6') + '</li>'
            + '<li><b>Decimaltal → procent:</b> gang med 100. ' + m('0,6 = 60 %') + '</li>'
            + '<li><b>Procent → decimaltal:</b> divider med 100. ' + m('35 % = 0,35') + '</li>'
            + '<li><b>Procent → brøk:</b> skriv over 100 og forkort. ' + m('35 %') + ' = ' + fr(35, 100) + ' = ' + fr(7, 20) + '</li>'
            + '</ul><p>Så ' + fr(3, 5) + ' = 0,6 = 60 % er tre måder at skrive det samme tal på.</p>',
          en: '<ul>'
            + '<li><b>Fraction → decimal:</b> divide. ' + fr(3, 5) + ' = ' + m('3 ÷ 5 = 0.6') + '</li>'
            + '<li><b>Decimal → percent:</b> multiply by 100. ' + m('0.6 = 60%') + '</li>'
            + '<li><b>Percent → decimal:</b> divide by 100. ' + m('35% = 0.35') + '</li>'
            + '<li><b>Percent → fraction:</b> write over 100 and simplify. ' + m('35%') + ' = ' + fr(35, 100) + ' = ' + fr(7, 20) + '</li>'
            + '</ul><p>So ' + fr(3, 5) + ' = 0.6 = 60% are three ways of writing the same number.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Procent af et tal – 10 %-metoden', en: 'Percent of an amount – the 10% method' },
        problem: { da: 'Hvad er 30 % af 250 kr.?', en: 'What is 30% of 250 kr.?' },
        steps: {
          da: [
            'Find 10 % først: divider med 10. ' + m('250 : 10 = 25') + ' kr.',
            '30 % er 3 gange så meget: ' + m('3 · 25 = 75') + ' kr.',
            'Med lommeregner: ' + m('250 · 0,30 = 75') + ' kr. (30 % = 0,30). Begge metoder giver det samme.',
            'Bonus: 5 % er halvdelen af 10 % (12,50 kr.), og 1 % er 250 : 100 = 2,50 kr. Med de byggesten kan du finde alle procenter.'
          ],
          en: [
            'Find 10% first: divide by 10. ' + m('250 ÷ 10 = 25') + ' kr.',
            '30% is 3 times as much: ' + m('3 × 25 = 75') + ' kr.',
            'With a calculator: ' + m('250 × 0.30 = 75') + ' kr. (30% = 0.30). Both methods give the same.',
            'Bonus: 5% is half of 10% (12.50 kr.), and 1% is 250 ÷ 100 = 2.50 kr. With these building blocks you can find any percentage.'
          ]
        },
        answer: { da: '75 kr.', en: '75 kr.' }
      },
      {
        type: 'example',
        title: { da: 'Rabat', en: 'Discount' },
        problem: { da: 'En trøje koster 200 kr. Der er 25 % rabat. Hvad koster den nu?', en: 'A jumper costs 200 kr. There is a 25% discount. What does it cost now?' },
        steps: {
          da: [
            'Rabatten: 25 % af 200 kr. = en kvart = ' + m('200 : 4 = 50') + ' kr.',
            'Ny pris: ' + m('200 − 50 = 150') + ' kr.',
            'Genvej: Hvis du får 25 % rabat, betaler du 75 %. ' + m('200 · 0,75 = 150') + ' kr.'
          ],
          en: [
            'The discount: 25% of 200 kr. = a quarter = ' + m('200 ÷ 4 = 50') + ' kr.',
            'New price: ' + m('200 − 50 = 150') + ' kr.',
            'Shortcut: If you get 25% off, you pay 75%. ' + m('200 × 0.75 = 150') + ' kr.'
          ]
        },
        answer: { da: '150 kr.', en: '150 kr.' }
      },
      {
        type: 'example',
        title: { da: 'Hvor mange procent er det?', en: 'What percentage is it?' },
        problem: { da: 'I en klasse på 40 elever har 12 briller. Hvor mange procent er det?', en: 'In a class of 40 pupils, 12 wear glasses. What percentage is that?' },
        steps: {
          da: [
            'Skriv det som brøk: del ud af helhed = ' + fr(12, 40) + '.',
            'Lav det om til decimaltal: ' + m('12 : 40 = 0,30') + '.',
            'Lav det om til procent: ' + m('0,30 = 30 %') + '.',
            'Tjek: 10 % af 40 er 4, så 30 % er 12. Passer.'
          ],
          en: [
            'Write it as a fraction: part out of whole = ' + fr(12, 40) + '.',
            'Convert to a decimal: ' + m('12 ÷ 40 = 0.30') + '.',
            'Convert to percent: ' + m('0.30 = 30%') + '.',
            'Check: 10% of 40 is 4, so 30% is 12. Fits.'
          ]
        },
        answer: { da: '30 %', en: '30%' }
      },
      {
        type: 'tip',
        body: {
          da: '<p><b>Overslag med procent:</b> 19 % af 302 kr. er cirka 20 % af 300 kr. = 60 kr. Brug overslaget til at tjekke lommeregneren. Og husk: procenter i en butik regnes altid af <i>den oprindelige pris</i>.</p>',
          en: '<p><b>Estimating with percent:</b> 19% of 302 kr. is about 20% of 300 kr. = 60 kr. Use the estimate to check the calculator. And remember: shop percentages are always taken of <i>the original price</i>.</p>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Skriv 45 % som decimaltal og som forkortet brøk.', en: 'Write 45% as a decimal and as a simplified fraction.' }, a: { da: '0,45 og ' + fr(45, 100) + ' = ' + fr(9, 20) + '.', en: '0.45 and ' + fr(45, 100) + ' = ' + fr(9, 20) + '.' } },
          { q: { da: 'Hvad er 10 % af 840 kr.? Og 5 %?', en: 'What is 10% of 840 kr.? And 5%?' }, a: { da: '84 kr. og 42 kr.', en: '84 kr. and 42 kr.' } },
          { q: { da: 'Hvad er 40 % af 60?', en: 'What is 40% of 60?' }, a: { da: '24. 10 % er 6, så 40 % er 4 · 6 = 24. Eller 60 · 0,4 = 24.', en: '24. 10% is 6, so 40% is 4 × 6 = 24. Or 60 × 0.4 = 24.' } },
          { q: { da: 'Et spil koster 400 kr. og sættes ned med 15 %. Hvad er den nye pris?', en: 'A game costs 400 kr. and is reduced by 15%. What is the new price?' }, a: { da: '340 kr. Rabat: 10 % = 40 kr., 5 % = 20 kr., i alt 60 kr. ' + m('400 − 60 = 340') + '.', en: '340 kr. Discount: 10% = 40 kr., 5% = 20 kr., total 60 kr. ' + m('400 − 60 = 340') + '.' } },
          { q: { da: '18 ud af 24 elever cykler til skole. Hvor mange procent?', en: '18 out of 24 pupils cycle to school. What percentage?' }, a: { da: '75 %. ' + fr(18, 24) + ' = ' + fr(3, 4) + ' = 0,75 = 75 %.', en: '75%. ' + fr(18, 24) + ' = ' + fr(3, 4) + ' = 0.75 = 75%.' } },
          { q: { da: 'Lav et overslag: 48 % af 199 kr.', en: 'Estimate: 48% of 199 kr.' }, a: { da: 'Cirka 50 % af 200 kr. = 100 kr. (Præcist: 95,52 kr.)', en: 'About 50% of 200 kr. = 100 kr. (Exactly: 95.52 kr.)' } }
        ]
      }
    ]
  };

  /* ================================================================
     5. Negative tal
     ================================================================ */
  T['negative-tal'] = {
    title: { da: 'Negative tal', en: 'Negative numbers' },
    phase: [2],
    summary: {
      da: 'Tal under nul: minusgrader, kælderetager og gæld. Lær at placere dem på tallinjen og regne med dem.',
      en: 'Numbers below zero: minus degrees, basement floors and debt. Learn to place them on the number line and calculate with them.'
    },
    goals: {
      da: [
        'Eleven kan anvende negative hele tal.',
        'Eleven har viden om negative hele tal.',
        'Eleven kan udvikle metoder til beregninger med decimaltal, enkle brøker og negative hele tal.'
      ],
      en: [
        'The pupil can use negative whole numbers.',
        'The pupil has knowledge of negative whole numbers.',
        'The pupil can develop methods for calculating with decimals, simple fractions and negative whole numbers.'
      ]
    },
    terms: [
      { da: 'negative tal', en: 'negative numbers', def: { da: 'Tal mindre end 0, fx −3', en: 'Numbers less than 0, e.g. −3' } },
      { da: 'positive tal', en: 'positive numbers', def: { da: 'Tal større end 0, fx 3', en: 'Numbers greater than 0, e.g. 3' } },
      { da: 'tallinje', en: 'number line', def: { da: 'En linje med tallene i rækkefølge – negative til venstre for 0', en: 'A line with the numbers in order – negatives to the left of 0' } },
      { da: 'hele tal', en: 'integers', def: { da: '… −3, −2, −1, 0, 1, 2, 3 …', en: '… −3, −2, −1, 0, 1, 2, 3 …' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Hvor møder du negative tal?', en: 'Where do you meet negative numbers?' },
        body: {
          da: '<ul><li><b>Temperatur:</b> −5 °C er 5 grader under frysepunktet.</li>'
            + '<li><b>Elevatoren:</b> etage −1 er kælderen, én etage under stueetagen (0).</li>'
            + '<li><b>Penge:</b> står der −50 kr. på kontoen, skylder du 50 kr.</li>'
            + '<li><b>Højde:</b> Danmarks laveste punkt ligger under havets overflade – ca. −7 m.</li>'
            + '<li><b>Tid:</b> „T minus 10 sekunder“ før en raket letter.</li></ul>'
            + '<p>Læseplanen siger, at negative tal introduceres „med udgangspunkt i hverdagsanvendelser“ og „ved brug af tallinjen“. Så tænk altid på et termometer eller en tallinje.</p>',
          en: '<ul><li><b>Temperature:</b> −5 °C is 5 degrees below freezing.</li>'
            + '<li><b>The lift:</b> floor −1 is the basement, one floor below the ground floor (0).</li>'
            + '<li><b>Money:</b> if your account shows −50 kr., you owe 50 kr.</li>'
            + '<li><b>Height:</b> Denmark\'s lowest point is below sea level – about −7 m.</li>'
            + '<li><b>Time:</b> "T minus 10 seconds" before a rocket launches.</li></ul>'
            + '<p>The Danish curriculum says negative numbers are introduced "based on everyday uses" and "using the number line". So always picture a thermometer or a number line.</p>'
        }
      },
      {
        type: 'fig',
        svg: '<svg viewBox="0 0 600 90" width="600" height="90" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="14">'
          + '<line x1="20" y1="40" x2="580" y2="40" stroke="currentColor" stroke-width="2"/>'
          + '<polygon points="580,40 570,34 570,46" fill="currentColor"/><polygon points="20,40 30,34 30,46" fill="currentColor"/>'
          + (function () { var s = ''; for (var i = -10; i <= 10; i++) { var x = 300 + i * 26; s += '<line x1="' + x + '" y1="' + (i === 0 ? 30 : 34) + '" x2="' + x + '" y2="' + (i === 0 ? 50 : 46) + '" stroke="currentColor" stroke-width="' + (i === 0 ? 3 : 1.5) + '"/>'; if (i % 2 === 0) s += '<text x="' + x + '" y="70" text-anchor="middle" fill="currentColor"' + (i === 0 ? ' font-weight="bold"' : '') + '>' + (i < 0 ? '−' + (-i) : i) + '</text>'; } return s; })()
          + '<rect x="40" y="6" width="120" height="18" rx="4" fill="#c9d8fb"/><text x="100" y="19" text-anchor="middle" font-size="12" fill="#1c2430">negative ← mindre</text>'
          + '<rect x="440" y="6" width="120" height="18" rx="4" fill="#d9f3e6"/><text x="500" y="19" text-anchor="middle" font-size="12" fill="#1c2430">større → positive</text>'
          + '</svg>',
        caption: { da: 'Tallinjen. Jo længere til venstre, jo mindre er tallet.', en: 'The number line. The further left, the smaller the number.' }
      },
      {
        type: 'text',
        title: { da: 'Rækkefølge: hvad er størst?', en: 'Order: which is bigger?' },
        body: {
          da: '<p>På tallinjen bliver tallene <b>større mod højre</b> og <b>mindre mod venstre</b>. Derfor:</p>'
            + '<p class="big">' + m('−7 &lt; −2 &lt; 0 &lt; 3') + '</p>'
            + '<p>Typisk fejl: „−7 er større end −2, fordi 7 er større end 2.“ Nej! −7 °C er <i>koldere</i> end −2 °C. At skylde 7 kr. er <i>værre</i> end at skylde 2 kr. Så −7 er mindre end −2.</p>'
            + '<p>Alle negative tal er mindre end 0, og 0 er mindre end alle positive tal.</p>',
          en: '<p>On the number line, numbers get <b>bigger to the right</b> and <b>smaller to the left</b>. Therefore:</p>'
            + '<p class="big">' + m('−7 &lt; −2 &lt; 0 &lt; 3') + '</p>'
            + '<p>Common mistake: "−7 is bigger than −2 because 7 is bigger than 2." No! −7 °C is <i>colder</i> than −2 °C. Owing 7 kr. is <i>worse</i> than owing 2 kr. So −7 is less than −2.</p>'
            + '<p>All negative numbers are less than 0, and 0 is less than all positive numbers.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Plus og minus på tallinjen', en: 'Adding and subtracting on the number line' },
        body: {
          da: '<p><b>Plus = gå til højre. Minus = gå til venstre.</b> Start ved det første tal, og gå det antal skridt, det andet tal siger.</p>'
            + '<ul>'
            + '<li>' + m('3 − 5') + ': Start i 3, gå 5 til venstre → <b>−2</b>. (Du har 3 kr. og bruger 5 kr. – du skylder 2 kr.)</li>'
            + '<li>' + m('−2 + 6') + ': Start i −2, gå 6 til højre → <b>4</b>. (Det er −2 °C og bliver 6 grader varmere.)</li>'
            + '<li>' + m('−3 − 2') + ': Start i −3, gå 2 til venstre → <b>−5</b>. (Det er −3 °C og bliver 2 grader koldere.)</li>'
            + '<li>' + m('−4 + 4') + ': Start i −4, gå 4 til højre → <b>0</b>.</li>'
            + '</ul>'
            + '<p>På mellemtrinnet arbejder du med <i>enkle</i> regnestykker som disse. Gange og division med negative tal kommer i 7.–9. klasse.</p>',
          en: '<p><b>Adding = move right. Subtracting = move left.</b> Start at the first number and take as many steps as the second number says.</p>'
            + '<ul>'
            + '<li>' + m('3 − 5') + ': Start at 3, move 5 left → <b>−2</b>. (You have 3 kr. and spend 5 kr. – you owe 2 kr.)</li>'
            + '<li>' + m('−2 + 6') + ': Start at −2, move 6 right → <b>4</b>. (It is −2 °C and gets 6 degrees warmer.)</li>'
            + '<li>' + m('−3 − 2') + ': Start at −3, move 2 left → <b>−5</b>. (It is −3 °C and gets 2 degrees colder.)</li>'
            + '<li>' + m('−4 + 4') + ': Start at −4, move 4 right → <b>0</b>.</li>'
            + '</ul>'
            + '<p>In grades 4–6 you work with <i>simple</i> calculations like these. Multiplying and dividing negative numbers comes in grades 7–9.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Temperaturforskel', en: 'Temperature difference' },
        problem: { da: 'Om morgenen er det −4 °C. Om eftermiddagen er det 6 °C. Hvor mange grader er temperaturen steget?', en: 'In the morning it is −4 °C. In the afternoon it is 6 °C. By how many degrees has the temperature risen?' },
        steps: {
          da: [
            'Tegn eller forestil dig et termometer. Fra −4 op til 0 er der 4 grader.',
            'Fra 0 op til 6 er der 6 grader.',
            'I alt: ' + m('4 + 6 = 10') + ' grader.',
            'Som regnestykke: ' + m('6 − (−4) = 10') + '. At trække et negativt tal fra er det samme som at lægge til – men det er nemmest at tælle på tallinjen.'
          ],
          en: [
            'Draw or picture a thermometer. From −4 up to 0 is 4 degrees.',
            'From 0 up to 6 is 6 degrees.',
            'Total: ' + m('4 + 6 = 10') + ' degrees.',
            'As a calculation: ' + m('6 − (−4) = 10') + '. Subtracting a negative number is the same as adding – but counting on the number line is easiest.'
          ]
        },
        answer: { da: '10 grader', en: '10 degrees' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Sæt tallene i rækkefølge fra mindst til størst: 4, −6, 0, −1, 2', en: 'Put in order from smallest to biggest: 4, −6, 0, −1, 2' }, a: { da: '−6, −1, 0, 2, 4', en: '−6, −1, 0, 2, 4' } },
          { q: { da: 'Regn ud: ' + m('2 − 7'), en: 'Calculate: ' + m('2 − 7') }, a: { da: '−5', en: '−5' } },
          { q: { da: 'Regn ud: ' + m('−8 + 3'), en: 'Calculate: ' + m('−8 + 3') }, a: { da: '−5', en: '−5' } },
          { q: { da: 'Regn ud: ' + m('−1 − 6'), en: 'Calculate: ' + m('−1 − 6') }, a: { da: '−7', en: '−7' } },
          { q: { da: 'Det er −3 °C. Temperaturen falder 5 grader. Hvad er temperaturen nu?', en: 'It is −3 °C. The temperature drops 5 degrees. What is the temperature now?' }, a: { da: '−8 °C. ' + m('−3 − 5 = −8') + '.', en: '−8 °C. ' + m('−3 − 5 = −8') + '.' } },
          { q: { da: 'Du har 20 kr. på kontoen og køber noget til 35 kr. Hvad står der på kontoen nu?', en: 'You have 20 kr. in your account and buy something for 35 kr. What does the account show now?' }, a: { da: '−15 kr. Du skylder 15 kr.', en: '−15 kr. You owe 15 kr.' } },
          { q: { da: 'Hvor stor er forskellen mellem −6 °C og 5 °C?', en: 'What is the difference between −6 °C and 5 °C?' }, a: { da: '11 grader (6 op til 0, og 5 videre).', en: '11 degrees (6 up to 0, and 5 more).' } }
        ]
      }
    ]
  };

  /* ================================================================
     6. Potenser og pi
     ================================================================ */
  T['potenser-pi'] = {
    title: { da: 'Potenser og pi', en: 'Powers and pi' },
    phase: [3],
    summary: {
      da: 'Kvadrattal og kubiktal – og det særlige tal π, som gemmer sig i alle cirkler.',
      en: 'Square numbers and cube numbers – and the special number π hidden in every circle.'
    },
    goals: {
      da: [
        'Eleven kan anvende procent, enkle potenser og pi.',
        'Eleven har viden om procentbegrebet, enkle potenser og pi.'
      ],
      en: [
        'The pupil can use percent, simple powers and pi.',
        'The pupil has knowledge of the percent concept, simple powers and pi.'
      ]
    },
    terms: [
      { da: 'potens', en: 'power', def: { da: 'Gentagen gange: 2⁴ = 2 · 2 · 2 · 2', en: 'Repeated multiplication: 2⁴ = 2 × 2 × 2 × 2' } },
      { da: 'grundtal', en: 'base', def: { da: 'Tallet, der ganges: i 2⁴ er grundtallet 2', en: 'The number being multiplied: in 2⁴ the base is 2' } },
      { da: 'eksponent', en: 'exponent', def: { da: 'Det lille tal – hvor mange gange: i 2⁴ er eksponenten 4', en: 'The small number – how many times: in 2⁴ the exponent is 4' } },
      { da: 'kvadrattal / „i anden“', en: 'square number / squared', def: { da: '3² = 3 · 3 = 9', en: '3² = 3 × 3 = 9' } },
      { da: 'kubiktal / „i tredje“', en: 'cube number / cubed', def: { da: '2³ = 2 · 2 · 2 = 8', en: '2³ = 2 × 2 × 2 = 8' } },
      { da: 'pi (π)', en: 'pi (π)', def: { da: 'Omkreds : diameter for enhver cirkel ≈ 3,14', en: 'Circumference ÷ diameter of any circle ≈ 3.14' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'En potens er gentagen gange', en: 'A power is repeated multiplication' },
        body: {
          da: '<p>' + m('3²') + ' læses „tre i anden“ og betyder ' + m('3 · 3 = 9') + '. Det lille 2-tal (eksponenten) siger, hvor mange gange grundtallet skal ganges med sig selv.</p>'
            + '<p>' + m('2³') + ' læses „to i tredje“ og betyder ' + m('2 · 2 · 2 = 8') + '.</p>'
            + '<p><b>Typisk fejl:</b> ' + m('3²') + ' er <b>ikke</b> ' + m('3 · 2 = 6') + '. Og ' + m('2³') + ' er ikke ' + m('2 · 3 = 6') + '. Det er gange <i>med sig selv</i>.</p>'
            + '<table><tr><th>Kvadrattal</th><td>1² = 1</td><td>2² = 4</td><td>3² = 9</td><td>4² = 16</td><td>5² = 25</td><td>6² = 36</td><td>7² = 49</td><td>8² = 64</td><td>9² = 81</td><td>10² = 100</td></tr>'
            + '<tr><th>Kubiktal</th><td>1³ = 1</td><td>2³ = 8</td><td>3³ = 27</td><td>4³ = 64</td><td>5³ = 125</td><td colspan="5">10³ = 1.000</td></tr></table>'
            + '<p>I regnearternes hierarki regnes potenser <i>før</i> gange og division: ' + m('2 · 3² = 2 · 9 = 18') + ' (ikke 36).</p>',
          en: '<p>' + m('3²') + ' is read "three squared" and means ' + m('3 × 3 = 9') + '. The small 2 (the exponent) says how many times the base is multiplied by itself.</p>'
            + '<p>' + m('2³') + ' is read "two cubed" and means ' + m('2 × 2 × 2 = 8') + '.</p>'
            + '<p><b>Common mistake:</b> ' + m('3²') + ' is <b>not</b> ' + m('3 × 2 = 6') + '. And ' + m('2³') + ' is not ' + m('2 × 3 = 6') + '. It is multiplying <i>by itself</i>.</p>'
            + '<table><tr><th>Square numbers</th><td>1² = 1</td><td>2² = 4</td><td>3² = 9</td><td>4² = 16</td><td>5² = 25</td><td>6² = 36</td><td>7² = 49</td><td>8² = 64</td><td>9² = 81</td><td>10² = 100</td></tr>'
            + '<tr><th>Cube numbers</th><td>1³ = 1</td><td>2³ = 8</td><td>3³ = 27</td><td>4³ = 64</td><td>5³ = 125</td><td colspan="5">10³ = 1,000</td></tr></table>'
            + '<p>In the order of operations, powers come <i>before</i> multiplication and division: ' + m('2 × 3² = 2 × 9 = 18') + ' (not 36).</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Hvorfor hedder det kvadrat og kubik?', en: 'Why "square" and "cube"?' },
        body: {
          da: '<p>Læseplanen siger, at potenser på mellemtrinnet mest handler om <b>kvadrattal og kubiktal i forbindelse med areal og rumfang</b>. Og det giver mening:</p>'
            + '<ul><li>Et <b>kvadrat</b> med siden 4 cm har arealet ' + m('4 · 4 = 4² = 16') + ' cm². Derfor „kvadrattal“ – og derfor hedder enheden kvadrat<b>centimeter</b> og skrives cm<sup>2</sup>.</li>'
            + '<li>En <b>terning</b> (på latin „kubus“) med siden 3 cm har rumfanget ' + m('3 · 3 · 3 = 3³ = 27') + ' cm³. Derfor „kubiktal“ – og enheden kubik<b>centimeter</b>, cm<sup>3</sup>.</li></ul>'
            + '<p>Så når du ser et lille 2 eller 3 på en enhed, er det en potens: m² er „meter gange meter“.</p>',
          en: '<p>The Danish curriculum says powers in grades 4–6 are mostly about <b>square and cube numbers in connection with area and volume</b>. And that makes sense:</p>'
            + '<ul><li>A <b>square</b> with side 4 cm has area ' + m('4 × 4 = 4² = 16') + ' cm². Hence "square number" – and hence the unit is called square <b>centimetres</b> and written cm<sup>2</sup>.</li>'
            + '<li>A <b>cube</b> with side 3 cm has volume ' + m('3 × 3 × 3 = 3³ = 27') + ' cm³. Hence "cube number" – and the unit cubic <b>centimetres</b>, cm<sup>3</sup>.</li></ul>'
            + '<p>So when you see a small 2 or 3 on a unit, it is a power: m² is "metres times metres".</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Pi – tallet i alle cirkler', en: 'Pi – the number in every circle' },
        body: {
          da: '<p>Mål omkredsen af en cirkel (fx med en snor) og dens diameter. Divider omkredsen med diameteren. Du får cirka <b>3,14</b> – <i>uanset hvor stor cirklen er</i>. En kop, et cykelhjul, en pizza: altid ca. 3,14.</p>'
            + '<p>Det tal kaldes <b>pi</b> og skrives med det græske bogstav <b>π</b>. Pi er ikke præcis 3,14 – decimalerne fortsætter i det uendelige uden mønster: 3,14159265… I skolen bruger du 3,14 eller π-knappen på lommeregneren.</p>'
            + '<p>Derfor gælder for alle cirkler: <b>omkreds = π · diameter</b>. Det bruger du under <a href="#/cirkler">Cirkler</a>.</p>',
          en: '<p>Measure the circumference of a circle (e.g. with a string) and its diameter. Divide the circumference by the diameter. You get about <b>3.14</b> – <i>no matter how big the circle is</i>. A cup, a bicycle wheel, a pizza: always about 3.14.</p>'
            + '<p>That number is called <b>pi</b> and written with the Greek letter <b>π</b>. Pi is not exactly 3.14 – the decimals go on forever without a pattern: 3.14159265… At school you use 3.14 or the π button on the calculator.</p>'
            + '<p>So for every circle: <b>circumference = π × diameter</b>. You use this in <a href="#/cirkler">Circles</a>.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Regn med potenser', en: 'Calculating with powers' },
        problem: { da: 'Regn ud: ' + m('5² + 2³') + ' og ' + m('10² − 3²'), en: 'Calculate: ' + m('5² + 2³') + ' and ' + m('10² − 3²') },
        steps: {
          da: [
            m('5² = 5 · 5 = 25') + ' og ' + m('2³ = 2 · 2 · 2 = 8') + '. Så ' + m('25 + 8 = 33') + '.',
            m('10² = 100') + ' og ' + m('3² = 9') + '. Så ' + m('100 − 9 = 91') + '.'
          ],
          en: [
            m('5² = 5 × 5 = 25') + ' and ' + m('2³ = 2 × 2 × 2 = 8') + '. So ' + m('25 + 8 = 33') + '.',
            m('10² = 100') + ' and ' + m('3² = 9') + '. So ' + m('100 − 9 = 91') + '.'
          ]
        },
        answer: { da: '33 og 91', en: '33 and 91' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Hvad er ' + m('7²') + '?', en: 'What is ' + m('7²') + '?' }, a: { da: '49', en: '49' } },
          { q: { da: 'Hvad er ' + m('4³') + '?', en: 'What is ' + m('4³') + '?' }, a: { da: '64 (' + m('4 · 4 · 4') + ')', en: '64 (' + m('4 × 4 × 4') + ')' } },
          { q: { da: 'Skriv ' + m('6 · 6 · 6 · 6') + ' som potens.', en: 'Write ' + m('6 × 6 × 6 × 6') + ' as a power.' }, a: { da: m('6⁴'), en: m('6⁴') } },
          { q: { da: 'Et kvadrat har siden 9 cm. Hvad er arealet?', en: 'A square has side 9 cm. What is the area?' }, a: { da: '81 cm² (' + m('9²') + ')', en: '81 cm² (' + m('9²') + ')' } },
          { q: { da: 'En terning har siden 5 cm. Hvad er rumfanget?', en: 'A cube has side 5 cm. What is the volume?' }, a: { da: '125 cm³ (' + m('5³') + ')', en: '125 cm³ (' + m('5³') + ')' } },
          { q: { da: 'Regn ud: ' + m('3 + 2 · 4²'), en: 'Calculate: ' + m('3 + 2 × 4²') }, a: { da: '35. Potens først (16), så gange (32), så plus (35).', en: '35. Power first (16), then multiply (32), then add (35).' } },
          { q: { da: 'En cirkel har diameteren 10 cm. Cirka hvor lang er omkredsen?', en: 'A circle has diameter 10 cm. Roughly how long is the circumference?' }, a: { da: 'Ca. 31,4 cm (' + m('3,14 · 10') + ').', en: 'About 31.4 cm (' + m('3.14 × 10') + ').' } }
        ]
      }
    ]
  };

  /* ================================================================
     7. Ligninger
     ================================================================ */
  T['ligninger'] = {
    title: { da: 'Ligninger', en: 'Equations' },
    phase: [1],
    summary: {
      da: 'Lighedstegnet betyder „lige meget på begge sider“. Find den ubekendte med gæt-og-prøv-efter, ved at tænke baglæns – eller med en balancevægt.',
      en: 'The equals sign means "the same on both sides". Find the unknown by guess-and-check, by thinking backwards – or with a balance scale.'
    },
    goals: {
      da: [
        'Eleven kan finde løsninger til enkle ligninger med uformelle metoder.',
        'Eleven har viden om lighedstegnets betydning og om uformelle metoder til løsning af enkle ligninger.'
      ],
      en: [
        'The pupil can find solutions to simple equations using informal methods.',
        'The pupil has knowledge of the meaning of the equals sign and of informal methods for solving simple equations.'
      ]
    },
    terms: [
      { da: 'ligning', en: 'equation', def: { da: 'To udtryk med lighedstegn imellem, hvor der er et ukendt tal: x + 5 = 12', en: 'Two expressions with an equals sign between them and an unknown number: x + 5 = 12' } },
      { da: 'lighedstegn (=)', en: 'equals sign (=)', def: { da: 'Betyder „har samme værdi som“', en: 'Means "has the same value as"' } },
      { da: 'den ubekendte', en: 'the unknown', def: { da: 'Det tal, vi leder efter – ofte kaldet x', en: 'The number we are looking for – often called x' } },
      { da: 'løsning', en: 'solution', def: { da: 'Det tal, der får ligningen til at passe', en: 'The number that makes the equation true' } },
      { da: 'gæt og prøv efter', en: 'guess and check', def: { da: 'Prøv et tal, tjek, om det passer, og ret gættet', en: 'Try a number, check if it works, and adjust your guess' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Hvad betyder lighedstegnet egentlig?', en: 'What does the equals sign really mean?' },
        body: {
          da: '<p>Mange tror, at „=“ betyder „og nu kommer svaret“. Men læseplanen understreger, at lighedstegnet betyder, at <b>udtrykkene på venstre og højre side har samme værdi</b> – som en vægt i balance.</p>'
            + '<p>' + m('3 + 4 = 7') + ' betyder: venstre side er 7 værd, og højre side er 7 værd. Derfor er det også helt fint at skrive ' + m('7 = 3 + 4') + ' eller ' + m('3 + 4 = 5 + 2') + '.</p>'
            + '<p><b>Typisk fejl:</b> ' + m('3 + 4 = 7 + 2 = 9') + '. Det er forkert, for 3 + 4 er ikke 9! Skriv i stedet ' + m('3 + 4 = 7') + ' og derefter ' + m('7 + 2 = 9') + '.</p>',
          en: '<p>Many people think "=" means "and here comes the answer". But the Danish curriculum stresses that the equals sign means <b>the expressions on the left and right have the same value</b> – like a scale in balance.</p>'
            + '<p>' + m('3 + 4 = 7') + ' means: the left side is worth 7, and the right side is worth 7. So it is perfectly fine to write ' + m('7 = 3 + 4') + ' or ' + m('3 + 4 = 5 + 2') + '.</p>'
            + '<p><b>Common mistake:</b> ' + m('3 + 4 = 7 + 2 = 9') + '. That is wrong, because 3 + 4 is not 9! Instead write ' + m('3 + 4 = 7') + ' and then ' + m('7 + 2 = 9') + '.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Hvad er en ligning?', en: 'What is an equation?' },
        body: {
          da: '<p>En ligning er et regnestykke, hvor ét tal mangler. Det manglende tal kalder vi <b>den ubekendte</b> og skriver ofte som <b>x</b> (men det kan være et hvilket som helst bogstav – eller en tom kasse □).</p>'
            + '<p class="big">' + m('x + 5 = 12') + '</p>'
            + '<p>Spørgsmålet er: „Hvilket tal plus 5 giver 12?“ Svaret er ' + m('x = 7') + ', for ' + m('7 + 5 = 12') + '. 7 er ligningens <b>løsning</b>.</p>'
            + '<p>At <i>løse</i> en ligning betyder at finde det tal, der får begge sider til at være lige meget værd.</p>',
          en: '<p>An equation is a calculation where one number is missing. We call the missing number <b>the unknown</b> and usually write it as <b>x</b> (but it can be any letter – or an empty box □).</p>'
            + '<p class="big">' + m('x + 5 = 12') + '</p>'
            + '<p>The question is: "Which number plus 5 gives 12?" The answer is ' + m('x = 7') + ', because ' + m('7 + 5 = 12') + '. 7 is the <b>solution</b> of the equation.</p>'
            + '<p>To <i>solve</i> an equation means finding the number that makes both sides worth the same.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Tre måder at løse en ligning på', en: 'Three ways to solve an equation' },
        body: {
          da: '<p><b>1. Gæt og prøv efter.</b> ' + m('3 · x = 21') + '. Gæt x = 5: ' + m('3 · 5 = 15') + ' – for lidt. Gæt x = 8: ' + m('3 · 8 = 24') + ' – for meget. Gæt x = 7: ' + m('3 · 7 = 21') + ' ✓.</p>'
            + '<p><b>2. Tænk baglæns.</b> ' + m('x + 5 = 12') + '. Der er lagt 5 til x, og det gav 12. Så gør det modsatte: ' + m('12 − 5 = 7') + '. Ved ' + m('3 · x = 21') + ' er x ganget med 3, så divider: ' + m('21 : 3 = 7') + '.</p>'
            + '<p><b>3. Balancevægten.</b> Forestil dig en vægt: På venstre skål ligger x og 5 lodder, på højre 12 lodder. Vægten er i balance. Fjerner du 5 lodder fra <i>begge</i> skåle, er den stadig i balance: x alene = 7 lodder. Reglen er: <b>gør det samme på begge sider</b>.</p>'
            + '<p><b>Tjek altid:</b> Sæt løsningen ind i ligningen. ' + m('7 + 5 = 12') + ' ✓.</p>',
          en: '<p><b>1. Guess and check.</b> ' + m('3 × x = 21') + '. Guess x = 5: ' + m('3 × 5 = 15') + ' – too little. Guess x = 8: ' + m('3 × 8 = 24') + ' – too much. Guess x = 7: ' + m('3 × 7 = 21') + ' ✓.</p>'
            + '<p><b>2. Think backwards.</b> ' + m('x + 5 = 12') + '. 5 was added to x and that gave 12. So do the opposite: ' + m('12 − 5 = 7') + '. In ' + m('3 × x = 21') + ', x was multiplied by 3, so divide: ' + m('21 ÷ 3 = 7') + '.</p>'
            + '<p><b>3. The balance scale.</b> Picture a scale: on the left pan there is x and 5 weights, on the right 12 weights. The scale balances. Remove 5 weights from <i>both</i> pans and it still balances: x alone = 7 weights. The rule: <b>do the same to both sides</b>.</p>'
            + '<p><b>Always check:</b> put the solution back into the equation. ' + m('7 + 5 = 12') + ' ✓.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Ligning med to trin', en: 'A two-step equation' },
        problem: { da: 'Løs ligningen ' + m('2 · x + 4 = 14'), en: 'Solve the equation ' + m('2 × x + 4 = 14') },
        steps: {
          da: [
            'Tænk baglæns. Sidst blev der lagt 4 til. Fjern 4 fra begge sider: ' + m('2 · x = 10') + '.',
            'Nu er x ganget med 2. Divider begge sider med 2: ' + m('x = 5') + '.',
            'Tjek: ' + m('2 · 5 + 4 = 10 + 4 = 14') + ' ✓'
          ],
          en: [
            'Think backwards. The last thing done was adding 4. Remove 4 from both sides: ' + m('2 × x = 10') + '.',
            'Now x is multiplied by 2. Divide both sides by 2: ' + m('x = 5') + '.',
            'Check: ' + m('2 × 5 + 4 = 10 + 4 = 14') + ' ✓'
          ]
        },
        answer: { da: 'x = 5', en: 'x = 5' }
      },
      {
        type: 'example',
        title: { da: 'Fra hverdag til ligning', en: 'From everyday life to an equation' },
        problem: { da: 'Emma har nogle penge. Hun får 25 kr. af sin mormor og har nu 60 kr. Hvor meget havde hun før?', en: 'Emma has some money. Her grandmother gives her 25 kr. and now she has 60 kr. How much did she have before?' },
        steps: {
          da: [
            'Kald det ukendte beløb x. Historien siger: x plus 25 giver 60. Ligning: ' + m('x + 25 = 60') + '.',
            'Tænk baglæns: ' + m('60 − 25 = 35') + '.',
            'Tjek: ' + m('35 + 25 = 60') + ' ✓'
          ],
          en: [
            'Call the unknown amount x. The story says: x plus 25 gives 60. Equation: ' + m('x + 25 = 60') + '.',
            'Think backwards: ' + m('60 − 25 = 35') + '.',
            'Check: ' + m('35 + 25 = 60') + ' ✓'
          ]
        },
        answer: { da: 'Emma havde 35 kr.', en: 'Emma had 35 kr.' }
      },
      { type: 'widget', widget: 'guess', title: { da: 'Gæt og prøv efter', en: 'Guess and check' } },
      {
        type: 'practice',
        items: [
          { q: { da: 'Løs: ' + m('x + 8 = 20'), en: 'Solve: ' + m('x + 8 = 20') }, a: { da: 'x = 12', en: 'x = 12' } },
          { q: { da: 'Løs: ' + m('x − 7 = 15'), en: 'Solve: ' + m('x − 7 = 15') }, a: { da: 'x = 22 (tænk baglæns: 15 + 7)', en: 'x = 22 (think backwards: 15 + 7)' } },
          { q: { da: 'Løs: ' + m('4 · x = 36'), en: 'Solve: ' + m('4 × x = 36') }, a: { da: 'x = 9', en: 'x = 9' } },
          { q: { da: 'Løs: ' + m('x : 5 = 6'), en: 'Solve: ' + m('x ÷ 5 = 6') }, a: { da: 'x = 30 (6 · 5)', en: 'x = 30 (6 × 5)' } },
          { q: { da: 'Løs: ' + m('3 · x − 2 = 13'), en: 'Solve: ' + m('3 × x − 2 = 13') }, a: { da: 'x = 5. Først ' + m('3 · x = 15') + ', så ' + m('x = 5') + '. Tjek: 15 − 2 = 13 ✓', en: 'x = 5. First ' + m('3 × x = 15') + ', then ' + m('x = 5') + '. Check: 15 − 2 = 13 ✓' } },
          { q: { da: 'Er det rigtigt at skrive ' + m('5 + 5 = 10 + 3 = 13') + '? Hvorfor/hvorfor ikke?', en: 'Is it correct to write ' + m('5 + 5 = 10 + 3 = 13') + '? Why/why not?' }, a: { da: 'Nej. 5 + 5 er ikke 13. Skriv ' + m('5 + 5 = 10') + ' og ' + m('10 + 3 = 13') + ' hver for sig.', en: 'No. 5 + 5 is not 13. Write ' + m('5 + 5 = 10') + ' and ' + m('10 + 3 = 13') + ' separately.' } },
          { q: { da: 'Tre ens bøger og en blyant til 12 kr. koster i alt 96 kr. Skriv en ligning, og find prisen på en bog.', en: 'Three identical books and a 12 kr. pencil cost 96 kr. in total. Write an equation and find the price of one book.' }, a: { da: m('3 · x + 12 = 96') + '. ' + m('3 · x = 84') + ', så ' + m('x = 28') + ' kr.', en: m('3 × x + 12 = 96') + '. ' + m('3 × x = 84') + ', so ' + m('x = 28') + ' kr.' } }
        ]
      }
    ]
  };

  /* ================================================================
     8. Variable og formler
     ================================================================ */
  T['variable-formler'] = {
    title: { da: 'Variable og formler', en: 'Variables and formulas' },
    phase: [2, 3],
    summary: {
      da: 'Et bogstav kan stå for et tal, der kan skifte. Med variable kan du skrive formler og beskrive sammenhænge – som i klassikeren med centicubestængerne.',
      en: 'A letter can stand for a number that can change. With variables you can write formulas and describe relationships – like the classic centicube rods.'
    },
    goals: {
      da: [
        'Eleven kan anvende enkle algebraiske udtryk til beregninger.',
        'Eleven har viden om variables rolle i formler og om brug af variable i digitale værktøjer.',
        'Eleven kan anvende variable til at beskrive enkle sammenhænge.',
        'Eleven har viden om variables rolle i beskrivelse af sammenhænge.'
      ],
      en: [
        'The pupil can use simple algebraic expressions in calculations.',
        'The pupil has knowledge of the role of variables in formulas and the use of variables in digital tools.',
        'The pupil can use variables to describe simple relationships.',
        'The pupil has knowledge of the role of variables in describing relationships.'
      ]
    },
    terms: [
      { da: 'variabel', en: 'variable', def: { da: 'Et bogstav, der står for et tal, som kan variere (skifte)', en: 'A letter standing for a number that can vary (change)' } },
      { da: 'formel', en: 'formula', def: { da: 'En regel skrevet med variable, fx A = l · b', en: 'A rule written with variables, e.g. A = l × w' } },
      { da: 'udtryk', en: 'expression', def: { da: 'Tal og variable sat sammen med regnetegn, fx 4 · c + 2', en: 'Numbers and variables joined by operation signs, e.g. 4 × c + 2' } },
      { da: 'sammenhæng', en: 'relationship', def: { da: 'Hvordan én størrelse afhænger af en anden', en: 'How one quantity depends on another' } },
      { da: 'proportional', en: 'proportional', def: { da: 'Dobbelt så meget af det ene giver dobbelt så meget af det andet', en: 'Twice as much of one gives twice as much of the other' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Et bogstav i stedet for et tal', en: 'A letter instead of a number' },
        body: {
          da: '<p>I en ligning står x for <i>ét bestemt</i> tal, som vi skal finde. En <b>variabel</b> er anderledes: den er en <b>pladsholder</b>, der kan stå for mange forskellige tal.</p>'
            + '<p>Eksempel – <b>formlen for arealet af et rektangel</b>: ' + m('A = l · b') + ' (areal = længde gange bredde). Her er l og b variable. Sæt tal ind, og du får arealet:</p>'
            + '<ul><li>l = 5 og b = 3 → ' + m('A = 5 · 3 = 15') + '</li><li>l = 10 og b = 2 → ' + m('A = 10 · 2 = 20') + '</li></ul>'
            + '<p>Formlen virker for <i>alle</i> rektangler. Det er det smarte ved variable.</p>'
            + '<p>To skrivemåder, du skal kende: ' + m('2a') + ' betyder ' + m('2 · a') + ' (gangetegnet udelades), og ' + m('a²') + ' betyder ' + m('a · a') + '.</p>',
          en: '<p>In an equation, x stands for <i>one particular</i> number that we have to find. A <b>variable</b> is different: it is a <b>placeholder</b> that can stand for many different numbers.</p>'
            + '<p>Example – <b>the formula for the area of a rectangle</b>: ' + m('A = l × w') + ' (area = length times width). Here l and w are variables. Put numbers in and you get the area:</p>'
            + '<ul><li>l = 5 and w = 3 → ' + m('A = 5 × 3 = 15') + '</li><li>l = 10 and w = 2 → ' + m('A = 10 × 2 = 20') + '</li></ul>'
            + '<p>The formula works for <i>all</i> rectangles. That is the clever thing about variables.</p>'
            + '<p>Two notations to know: ' + m('2a') + ' means ' + m('2 × a') + ' (the times sign is left out), and ' + m('a²') + ' means ' + m('a × a') + '.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Centicubestængerne – find reglen', en: 'The centicube rods – find the rule' },
        body: {
          da: '<p>Det her eksempel er taget fra ministeriets undervisningsvejledning – det bruges i 6. klasse til at opdage variable.</p>'
            + '<p>Byg en stang af centicubes (små terninger). Tæl, hvor mange <b>sideflader</b> der er udenpå stangen. En stang med 1 terning har 6 flader. Med 2 terninger: 10 (to flader gemmer sig, hvor terningerne mødes). Og så videre:</p>'
            + '<table><tr><th>Antal centicubes (c)</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>…</td><td>10</td></tr>'
            + '<tr><th>Antal sideflader (a)</th><td>6</td><td>10</td><td>14</td><td>18</td><td>22</td><td>26</td><td>…</td><td>?</td></tr></table>'
            + '<p><b>Lodret mønster:</b> Hver gang der kommer én terning mere, kommer der 4 flader mere.</p>'
            + '<p><b>Vandret mønster (genvejen):</b> Hver terning bidrager med 4 flader (top, bund, for, bag) – og så er der 2 ender. Altså: <i>gang antallet med 4 og læg 2 til</i>.</p>'
            + '<p class="big">' + m('a = c · 4 + 2') + '</p>'
            + '<p>Nu kan du svare uden at bygge: 10 centicubes → ' + m('10 · 4 + 2 = 42') + ' sideflader. Kan en stang have 40 sideflader? ' + m('40 − 2 = 38') + ', og 38 kan ikke deles med 4 – så nej. 42? ' + m('(42 − 2) : 4 = 10') + ' – ja, 10 terninger.</p>',
          en: '<p>This example comes from the Ministry\'s teaching guide – it is used in 6th grade to discover variables.</p>'
            + '<p>Build a rod from centicubes (small cubes). Count how many <b>faces</b> are on the outside of the rod. A rod of 1 cube has 6 faces. With 2 cubes: 10 (two faces are hidden where the cubes meet). And so on:</p>'
            + '<table><tr><th>Number of cubes (c)</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>…</td><td>10</td></tr>'
            + '<tr><th>Number of faces (a)</th><td>6</td><td>10</td><td>14</td><td>18</td><td>22</td><td>26</td><td>…</td><td>?</td></tr></table>'
            + '<p><b>Vertical pattern:</b> Every time one more cube is added, 4 more faces appear.</p>'
            + '<p><b>Horizontal pattern (the shortcut):</b> Each cube contributes 4 faces (top, bottom, front, back) – plus the 2 ends. So: <i>multiply the number by 4 and add 2</i>.</p>'
            + '<p class="big">' + m('a = c × 4 + 2') + '</p>'
            + '<p>Now you can answer without building: 10 cubes → ' + m('10 × 4 + 2 = 42') + ' faces. Can a rod have 40 faces? ' + m('40 − 2 = 38') + ', and 38 is not divisible by 4 – so no. 42? ' + m('(42 − 2) ÷ 4 = 10') + ' – yes, 10 cubes.</p>'
        }
      },
      {
        type: 'fig',
        svg: '<svg viewBox="0 0 420 130" width="420" height="130" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13">'
          + (function () { var s = ''; for (var i = 0; i < 4; i++) { var x = 60 + i * 60; s += '<g><rect x="' + x + '" y="50" width="60" height="50" fill="#c9d8fb" stroke="#2f6fed" stroke-width="2"/>'; s += '<polygon points="' + x + ',50 ' + (x + 18) + ',32 ' + (x + 78) + ',32 ' + (x + 60) + ',50" fill="#a9c1f7" stroke="#2f6fed" stroke-width="2"/>'; if (i === 3) s += '<polygon points="' + (x + 60) + ',50 ' + (x + 78) + ',32 ' + (x + 78) + ',82 ' + (x + 60) + ',100" fill="#8fb0f3" stroke="#2f6fed" stroke-width="2"/>'; s += '</g>'; } return s; })()
          + '<text x="30" y="80" text-anchor="middle" fill="currentColor">c = 4</text>'
          + '<text x="200" y="122" text-anchor="middle" fill="currentColor">a = 4 · 4 + 2 = 18</text>'
          + '</svg>',
        caption: { da: 'En stang af 4 centicubes: 4 flader på hver terning + 2 ender = 18 sideflader.', en: 'A rod of 4 centicubes: 4 faces on each cube + 2 ends = 18 faces.' }
      },
      {
        type: 'text',
        title: { da: 'Sammenhænge: tabel, formel og graf', en: 'Relationships: table, formula and graph' },
        body: {
          da: '<p>Slik koster 80 kr. pr. kilo. Prisen <b>afhænger af</b> vægten. Det kan vises på tre måder:</p>'
            + '<p><b>Tabel:</b></p><table><tr><th>Vægt i kg (k)</th><td>0,5</td><td>1</td><td>2</td><td>3</td></tr><tr><th>Pris i kr. (p)</th><td>40</td><td>80</td><td>160</td><td>240</td></tr></table>'
            + '<p><b>Formel:</b> ' + m('p = 80 · k') + '. Sæt en vægt ind, og du får prisen.</p>'
            + '<p><b>Graf:</b> Sæt punkterne (0,5; 40), (1; 80), (2; 160) af i et <a href="#/koordinatsystem">koordinatsystem</a> med k hen ad x-aksen og p op ad y-aksen. De ligger på en ret linje gennem (0, 0).</p>'
            + '<p>Sammenhængen er <b>proportional</b>: dobbelt så meget slik koster dobbelt så meget. Ikke alle sammenhænge er sådan – centicube-reglen ' + m('a = c · 4 + 2') + ' er det fx ikke (2 terninger giver 10 flader, men 4 terninger giver 18, ikke 20). Den giver stadig en ret linje, men den går ikke gennem (0, 0).</p>',
          en: '<p>Sweets cost 80 kr. per kilo. The price <b>depends on</b> the weight. This can be shown in three ways:</p>'
            + '<p><b>Table:</b></p><table><tr><th>Weight in kg (k)</th><td>0.5</td><td>1</td><td>2</td><td>3</td></tr><tr><th>Price in kr. (p)</th><td>40</td><td>80</td><td>160</td><td>240</td></tr></table>'
            + '<p><b>Formula:</b> ' + m('p = 80 × k') + '. Put in a weight and you get the price.</p>'
            + '<p><b>Graph:</b> Plot the points (0.5, 40), (1, 80), (2, 160) in a <a href="#/koordinatsystem">coordinate system</a> with k along the x-axis and p up the y-axis. They lie on a straight line through (0, 0).</p>'
            + '<p>The relationship is <b>proportional</b>: twice as many sweets cost twice as much. Not all relationships are like that – the centicube rule ' + m('a = c × 4 + 2') + ' is not (2 cubes give 10 faces, but 4 cubes give 18, not 20). It still gives a straight line, but not through (0, 0).</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Brug en formel', en: 'Use a formula' },
        problem: { da: 'Omkredsen af et rektangel er ' + m('O = 2 · l + 2 · b') + '. Find omkredsen, når l = 7 cm og b = 4 cm.', en: 'The perimeter of a rectangle is ' + m('P = 2 × l + 2 × w') + '. Find the perimeter when l = 7 cm and w = 4 cm.' },
        steps: {
          da: [
            'Sæt tallene ind i stedet for bogstaverne: ' + m('O = 2 · 7 + 2 · 4') + '.',
            'Regn ud (gange før plus): ' + m('14 + 8 = 22') + '.',
            'Husk enheden: 22 cm. Tjek ved at tænke: 7 + 4 + 7 + 4 = 22 ✓'
          ],
          en: [
            'Put the numbers in place of the letters: ' + m('P = 2 × 7 + 2 × 4') + '.',
            'Calculate (multiply before add): ' + m('14 + 8 = 22') + '.',
            'Remember the unit: 22 cm. Check by thinking: 7 + 4 + 7 + 4 = 22 ✓'
          ]
        },
        answer: { da: '22 cm', en: '22 cm' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Formlen for arealet af et rektangel er ' + m('A = l · b') + '. Find A, når l = 12 og b = 5.', en: 'The area formula for a rectangle is ' + m('A = l × w') + '. Find A when l = 12 and w = 5.' }, a: { da: 'A = 60', en: 'A = 60' } },
          { q: { da: 'Hvad er værdien af ' + m('3 · n + 1') + ', når n = 6?', en: 'What is the value of ' + m('3 × n + 1') + ' when n = 6?' }, a: { da: '19', en: '19' } },
          { q: { da: 'Centicubestang: hvor mange sideflader har en stang med 25 centicubes? (' + m('a = c · 4 + 2') + ')', en: 'Centicube rod: how many faces does a rod of 25 cubes have? (' + m('a = c × 4 + 2') + ')' }, a: { da: '102', en: '102' } },
          { q: { da: 'En stang har 50 sideflader. Hvor mange centicubes er der?', en: 'A rod has 50 faces. How many cubes are there?' }, a: { da: '12. ' + m('(50 − 2) : 4 = 12') + '.', en: '12. ' + m('(50 − 2) ÷ 4 = 12') + '.' } },
          { q: { da: 'En bus kører 60 km i timen. Skriv en formel for strækningen s efter t timer, og find s, når t = 2,5.', en: 'A bus travels 60 km per hour. Write a formula for the distance s after t hours, and find s when t = 2.5.' }, a: { da: m('s = 60 · t') + '. ' + m('s = 60 · 2,5 = 150') + ' km.', en: m('s = 60 × t') + '. ' + m('s = 60 × 2.5 = 150') + ' km.' } },
          { q: { da: 'Tabel: n = 1, 2, 3, 4 giver 5, 8, 11, 14. Hvad er reglen? Skriv den som formel.', en: 'Table: n = 1, 2, 3, 4 gives 5, 8, 11, 14. What is the rule? Write it as a formula.' }, a: { da: 'Der lægges 3 til hver gang, og det starter 2 over 3-tabellen: ' + m('3 · n + 2') + '. Tjek: n = 4 → 14 ✓', en: '3 is added each time, and it starts 2 above the 3 times table: ' + m('3 × n + 2') + '. Check: n = 4 → 14 ✓' } }
        ]
      }
    ]
  };
})();
