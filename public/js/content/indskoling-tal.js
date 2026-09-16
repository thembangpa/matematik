/* ------------------------------------------------------------------
   1.–3. klasse — Tal og algebra (5 topics).
   "goals" quote the færdigheds- og vidensmål (efter 3. klassetrin) from
   Fælles Mål – Matematik; explanations follow Læseplan §5.1 (1.–3. kl.)
   and examples from the Undervisningsvejledning (Albert, 48 + 34).
   ------------------------------------------------------------------ */
(function () {
  var T = window.CONTENT.topics;
  function fr(n, d) { return '<span class="frac"><span>' + n + '</span><span>' + d + '</span></span>'; }
  function m(s) { return '<span class="math">' + s + '</span>'; }
  var B = '#2f6fed', BS = '#c9d8fb';

  /* ================================================================
     Tal, antal og rækkefølge
     ================================================================ */
  T['tal-og-antal'] = {
    title: { da: 'Tal, antal og rækkefølge', en: 'Numbers, counting and order' },
    phase: [1, 2],
    summary: {
      da: 'Tælle frem og tilbage, enere, tiere og hundreder, tallinjen – og at sætte tal i rækkefølge helt op til 1000.',
      en: 'Counting forwards and backwards, ones, tens and hundreds, the number line – and putting numbers in order all the way to 1000.'
    },
    goals: {
      da: [
        'Eleven kan anvende naturlige tal til at beskrive antal og rækkefølge.',
        'Eleven kan anvende flercifrede naturlige tal til at beskrive antal og rækkefølge.',
        'Eleven har viden om naturlige tals opbygning i titalssystemet.',
        'Eleverne kan anvende trecifrede tal til at beskrive antal og rækkefølge. (opmærksomhedspunkt)'
      ],
      en: [
        'The pupil can use natural numbers to describe quantity and order.',
        'The pupil can use multi-digit natural numbers to describe quantity and order.',
        'The pupil has knowledge of how natural numbers are built in the base-10 system.',
        'Pupils can use three-digit numbers to describe quantity and order. (attention point)'
      ]
    },
    terms: [
      { da: 'antal', en: 'quantity (how many)', def: { da: 'Hvor mange der er: 5 æbler', en: 'How many there are: 5 apples' } },
      { da: 'rækkefølge', en: 'order', def: { da: 'Hvad der kommer først, dernæst, sidst: 1., 2., 3.', en: 'What comes first, next, last: 1st, 2nd, 3rd' } },
      { da: 'ciffer', en: 'digit', def: { da: 'De ti tegn 0–9, som tal skrives med', en: 'The ten symbols 0–9 that numbers are written with' } },
      { da: 'enere, tiere, hundreder', en: 'ones, tens, hundreds', def: { da: 'Pladserne i et tal. I 247 er der 2 hundreder, 4 tiere og 7 enere', en: 'The places in a number. In 247 there are 2 hundreds, 4 tens and 7 ones' } },
      { da: 'tallinje', en: 'number line', def: { da: 'En linje med tallene i rækkefølge', en: 'A line with the numbers in order' } },
      { da: 'større end / mindre end', en: 'greater than / less than', def: { da: 'Tegnene > og <. Det åbne gab peger mod det største tal: 8 > 3', en: 'The signs > and <. The open side points to the bigger number: 8 > 3' } },
      { da: 'afrunde', en: 'round', def: { da: 'Sige et tal cirka: 48 er cirka 50', en: 'Say a number roughly: 48 is about 50' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Tælle – frem, tilbage og i spring', en: 'Counting – forwards, backwards and in jumps' },
        body: {
          da: '<p>Tal bruges til to ting: at sige <b>hvor mange</b> (antal: „der er 12 børn“) og at sige <b>hvilket nummer i rækken</b> (rækkefølge: „Ida kom på 3. pladsen“).</p>'
            + '<p>Læseplanen siger, at man i 1. klasse skal øve <b>tælleremser</b> – både forfra og bagfra. Prøv:</p>'
            + '<ul><li>Tæl fra 1 til 20. Tæl så baglæns fra 20 til 0.</li>'
            + '<li>Tæl i <b>2-spring</b>: 2, 4, 6, 8, 10 … (det er de lige tal).</li>'
            + '<li>Tæl i <b>5-spring</b>: 5, 10, 15, 20, 25 …</li>'
            + '<li>Tæl i <b>10-spring</b>: 10, 20, 30 … 100. Og videre: 110, 120 …</li>'
            + '<li>Start et sjovt sted: tæl fra 37 til 52. Fra 98 til 112.</li></ul>'
            + '<p>Når du kan tælle i spring, bliver plus og gange meget nemmere senere.</p>',
          en: '<p>Numbers are used for two things: to say <b>how many</b> (quantity: "there are 12 children") and to say <b>which number in the row</b> (order: "Ida came 3rd").</p>'
            + '<p>The Danish curriculum says that in grade 1 you practise <b>counting sequences</b> – both forwards and backwards. Try:</p>'
            + '<ul><li>Count from 1 to 20. Then count backwards from 20 to 0.</li>'
            + '<li>Count in <b>2s</b>: 2, 4, 6, 8, 10 … (those are the even numbers).</li>'
            + '<li>Count in <b>5s</b>: 5, 10, 15, 20, 25 …</li>'
            + '<li>Count in <b>10s</b>: 10, 20, 30 … 100. And on: 110, 120 …</li>'
            + '<li>Start somewhere odd: count from 37 to 52. From 98 to 112.</li></ul>'
            + '<p>Once you can count in jumps, adding and multiplying become much easier later.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Enere, tiere og hundreder', en: 'Ones, tens and hundreds' },
        body: {
          da: '<p>Vi har kun ti cifre: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Alligevel kan vi skrive alle tal. Det kan vi, fordi <b>pladsen</b> et ciffer står på, bestemmer, hvad det er værd:</p>'
            + '<table><tr><th>hundreder</th><th>tiere</th><th>enere</th><th>tallet</th></tr>'
            + '<tr><td></td><td></td><td>7</td><td>7</td></tr>'
            + '<tr><td></td><td>4</td><td>7</td><td>47 = 40 + 7</td></tr>'
            + '<tr><td>2</td><td>4</td><td>7</td><td>247 = 200 + 40 + 7</td></tr>'
            + '<tr><td>2</td><td>0</td><td>7</td><td>207 = 200 + 7 (nullet holder pladsen!)</td></tr></table>'
            + '<p>Tænk på <b>penge</b>: 247 kr. er 2 hundredkronesedler, 4 tikroner og 7 enkroner. Eller på <b>klodser</b>: en hundredplade, fire tistænger og syv enere.</p>'
            + '<p>10 enere er det samme som 1 tier. 10 tiere er det samme som 1 hundred. 10 hundreder er 1 tusind (1000).</p>'
            + '<p><b>Opgave:</b> Byg tallet 135 med legepenge eller klodser. Hvad sker der, hvis du lægger 10 til? (145). Hvis du lægger 100 til? (235).</p>',
          en: '<p>We only have ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Yet we can write every number. That works because the <b>place</b> a digit stands in decides what it is worth:</p>'
            + '<table><tr><th>hundreds</th><th>tens</th><th>ones</th><th>the number</th></tr>'
            + '<tr><td></td><td></td><td>7</td><td>7</td></tr>'
            + '<tr><td></td><td>4</td><td>7</td><td>47 = 40 + 7</td></tr>'
            + '<tr><td>2</td><td>4</td><td>7</td><td>247 = 200 + 40 + 7</td></tr>'
            + '<tr><td>2</td><td>0</td><td>7</td><td>207 = 200 + 7 (the zero holds the place!)</td></tr></table>'
            + '<p>Think of <b>money</b>: 247 kr. is 2 hundred-kroner notes, 4 ten-kroner coins and 7 one-kroner coins. Or of <b>blocks</b>: one hundred-plate, four ten-rods and seven ones.</p>'
            + '<p>10 ones are the same as 1 ten. 10 tens are the same as 1 hundred. 10 hundreds are 1 thousand (1000).</p>'
            + '<p><b>Task:</b> Build the number 135 with play money or blocks. What happens if you add 10? (145). If you add 100? (235).</p>'
        }
      },
      {
        type: 'fig',
        svg: (function () {
          var s = '<svg viewBox="0 0 520 150" width="520" height="150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">';
          // 2 hundred plates
          for (var p = 0; p < 2; p++) { var ox = 20 + p * 90; for (var r = 0; r < 10; r++) for (var c = 0; c < 10; c++) s += '<rect x="' + (ox + c * 8) + '" y="' + (20 + r * 8) + '" width="8" height="8" fill="' + BS + '" stroke="' + B + '" stroke-width=".6"/>'; }
          s += '<text x="105" y="125" text-anchor="middle">2 hundreder = 200</text>';
          // 4 ten rods
          for (var t = 0; t < 4; t++) { for (var k = 0; k < 10; k++) s += '<rect x="' + (220 + t * 16) + '" y="' + (20 + k * 8) + '" width="10" height="8" fill="' + BS + '" stroke="' + B + '" stroke-width=".8"/>'; }
          s += '<text x="252" y="125" text-anchor="middle">4 tiere = 40</text>';
          // 7 ones
          for (var o = 0; o < 7; o++) s += '<rect x="' + (330 + (o % 4) * 14) + '" y="' + (60 + Math.floor(o / 4) * 14) + '" width="10" height="10" fill="' + BS + '" stroke="' + B + '" stroke-width=".8"/>';
          s += '<text x="356" y="125" text-anchor="middle">7 enere = 7</text>';
          s += '<text x="460" y="70" text-anchor="middle" font-size="26" font-weight="bold">247</text>';
          return s + '</svg>';
        })(),
        caption: { da: 'Tallet 247 bygget af hundredplader, tistænger og enere.', en: 'The number 247 built from hundred-plates, ten-rods and ones.' }
      },
      {
        type: 'text',
        title: { da: 'Tallinjen: hvad er størst?', en: 'The number line: which is bigger?' },
        body: {
          da: '<p>På en <b>tallinje</b> står tallene i rækkefølge. Jo længere til højre, jo større er tallet. Det gør det nemt at sammenligne:</p>'
            + '<ul><li>Se på <b>hundrederne</b> først: 312 er større end 298, fordi 3 hundreder er mere end 2 hundreder – selvom 98 „ser stort ud“.</li>'
            + '<li>Er hundrederne ens, så se på <b>tierne</b>: 247 er mindre end 261.</li>'
            + '<li>Er tierne også ens, så se på <b>enerne</b>: 247 er mindre end 249.</li></ul>'
            + '<p>Vi skriver det med tegn: ' + m('298 &lt; 312') + ' (298 er mindre end 312) og ' + m('312 &gt; 298') + '. Det åbne gab i tegnet peger altid mod det største tal – som en krokodillemund, der vil have det største.</p>'
            + '<p><b>Afrunding:</b> 48 ligger tættest på 50, så „48 er cirka 50“. 231 ligger tættest på 200 – cirka 200. Læseplanen nævner netop at „afrunde tal til nærmeste tier og hundrede“.</p>',
          en: '<p>On a <b>number line</b> the numbers stand in order. The further right, the bigger the number. That makes comparing easy:</p>'
            + '<ul><li>Look at the <b>hundreds</b> first: 312 is bigger than 298, because 3 hundreds is more than 2 hundreds – even though 98 "looks big".</li>'
            + '<li>If the hundreds are the same, look at the <b>tens</b>: 247 is less than 261.</li>'
            + '<li>If the tens are also the same, look at the <b>ones</b>: 247 is less than 249.</li></ul>'
            + '<p>We write it with signs: ' + m('298 &lt; 312') + ' (298 is less than 312) and ' + m('312 &gt; 298') + '. The open side of the sign always points to the bigger number – like a crocodile mouth that wants the biggest one.</p>'
            + '<p><b>Rounding:</b> 48 is closest to 50, so "48 is about 50". 231 is closest to 200 – about 200. The curriculum mentions exactly "rounding numbers to the nearest ten and hundred".</p>'
        }
      },
      { type: 'widget', widget: 'hundred', title: { da: 'Hundredtavlen', en: 'The hundred square' } },
      {
        type: 'example',
        title: { da: 'Læs et trecifret tal', en: 'Read a three-digit number' },
        problem: { da: 'Hvad er tallet 508? Og hvad sker der, hvis du bytter om på cifrene til 850?', en: 'What is the number 508? And what happens if you swap the digits to 850?' },
        steps: {
          da: [
            '508: 5 hundreder, 0 tiere og 8 enere. ' + m('500 + 8 = 508') + '. Vi siger „fem hundrede og otte“.',
            '850: 8 hundreder, 5 tiere og 0 enere. ' + m('800 + 50 = 850') + '. „Otte hundrede og halvtreds“.',
            'Samme cifre – men pladserne er byttet, så 850 er meget større end 508.'
          ],
          en: [
            '508: 5 hundreds, 0 tens and 8 ones. ' + m('500 + 8 = 508') + '. We say "five hundred and eight".',
            '850: 8 hundreds, 5 tens and 0 ones. ' + m('800 + 50 = 850') + '. "Eight hundred and fifty".',
            'Same digits – but the places are swapped, so 850 is much bigger than 508.'
          ]
        },
        answer: { da: '508 = 500 + 8. 850 = 800 + 50. 850 > 508.', en: '508 = 500 + 8. 850 = 800 + 50. 850 > 508.' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Tæl videre: 96, 97, 98, ___, ___, ___', en: 'Keep counting: 96, 97, 98, ___, ___, ___' }, a: { da: '99, 100, 101', en: '99, 100, 101' } },
          { q: { da: 'Tæl baglæns i 10-spring fra 120: 120, 110, ___, ___, ___', en: 'Count backwards in 10s from 120: 120, 110, ___, ___, ___' }, a: { da: '100, 90, 80', en: '100, 90, 80' } },
          { q: { da: 'Hvor mange tiere og enere er der i 63?', en: 'How many tens and ones are there in 63?' }, a: { da: '6 tiere og 3 enere (60 + 3).', en: '6 tens and 3 ones (60 + 3).' } },
          { q: { da: 'Skriv tallet: 3 hundreder, 0 tiere og 5 enere.', en: 'Write the number: 3 hundreds, 0 tens and 5 ones.' }, a: { da: '305', en: '305' } },
          { q: { da: 'Sæt < eller > mellem tallene: 187 ___ 178', en: 'Put < or > between the numbers: 187 ___ 178' }, a: { da: '187 > 178 (samme hundreder; 8 tiere er mere end 7 tiere).', en: '187 > 178 (same hundreds; 8 tens is more than 7 tens).' } },
          { q: { da: 'Sæt tallene i rækkefølge fra mindst til størst: 420, 402, 240, 24', en: 'Put in order from smallest to biggest: 420, 402, 240, 24' }, a: { da: '24, 240, 402, 420', en: '24, 240, 402, 420' } },
          { q: { da: 'Rund 73 af til nærmeste tier. Rund 349 af til nærmeste hundrede.', en: 'Round 73 to the nearest ten. Round 349 to the nearest hundred.' }, a: { da: '70 og 300.', en: '70 and 300.' } },
          { q: { da: 'Hvilket tal er 10 mere end 295?', en: 'Which number is 10 more than 295?' }, a: { da: '305 – tierne bliver 10, så det bliver til en hundred mere.', en: '305 – the tens become 10, which makes one more hundred.' } }
        ]
      }
    ]
  };

  /* ================================================================
     Plus og minus
     ================================================================ */
  T['plus-og-minus'] = {
    title: { da: 'Plus og minus', en: 'Adding and subtracting' },
    phase: [1, 2],
    summary: {
      da: 'Tiervenner, tælle videre, dele tal op i tiere og enere – smarte måder at regne plus og minus i hovedet på. Og hvornår lommeregneren er en god hjælp.',
      en: 'Number bonds to 10, counting on, splitting numbers into tens and ones – clever ways to add and subtract in your head. And when the calculator is a good help.'
    },
    goals: {
      da: [
        'Eleven kan foretage enkle beregninger med naturlige tal.',
        'Eleven kan udvikle metoder til addition og subtraktion med naturlige tal.',
        'Eleven har viden om strategier til hovedregning, overslagsregning samt regning med skriftlige notater og digitale værktøjer.',
        'Eleven kan addere og subtrahere enkle naturlige tal med hovedregning og lommeregner. (opmærksomhedspunkt)'
      ],
      en: [
        'The pupil can carry out simple calculations with natural numbers.',
        'The pupil can develop methods for adding and subtracting natural numbers.',
        'The pupil has knowledge of strategies for mental maths, estimation, calculating with written notes and digital tools.',
        'The pupil can add and subtract simple natural numbers using mental maths and a calculator. (attention point)'
      ]
    },
    terms: [
      { da: 'plus (+) / at lægge sammen', en: 'plus (+) / adding', def: { da: '3 + 4 = 7', en: '3 + 4 = 7' } },
      { da: 'minus (−) / at trække fra', en: 'minus (−) / subtracting', def: { da: '7 − 4 = 3', en: '7 − 4 = 3' } },
      { da: 'tiervenner', en: 'number bonds to 10', def: { da: 'To tal, der tilsammen giver 10: 3 og 7, 6 og 4', en: 'Two numbers that make 10 together: 3 and 7, 6 and 4' } },
      { da: 'fordobling', en: 'doubling', def: { da: 'Det samme tal to gange: 6 + 6 = 12', en: 'The same number twice: 6 + 6 = 12' } },
      { da: 'hovedregning', en: 'mental maths', def: { da: 'At regne i hovedet uden at skrive', en: 'Calculating in your head without writing' } },
      { da: 'overslag', en: 'estimate', def: { da: 'Et hurtigt cirka-svar', en: 'A quick rough answer' } },
      { da: 'forskel', en: 'difference', def: { da: 'Hvor meget større det ene tal er end det andet', en: 'How much bigger one number is than the other' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Tiervenner – det vigtigste at kunne udenad', en: 'Number bonds to 10 – the most important thing to know by heart' },
        body: {
          da: '<p><b>Tiervenner</b> er par af tal, der tilsammen giver 10. Kan du dem udenad, bliver næsten al hovedregning nemmere:</p>'
            + '<p class="big">0+10 &nbsp; 1+9 &nbsp; 2+8 &nbsp; 3+7 &nbsp; 4+6 &nbsp; 5+5</p>'
            + '<p>Brug fingrene: hold 3 fingre nede – hvor mange er oppe? 7. Så 3 og 7 er tiervenner.</p>'
            + '<p>Det samme gælder for <b>fordoblinger</b>: 1+1, 2+2, 3+3 … 10+10. Og „nabo-fordoblinger“: 6 + 7 er det samme som 6 + 6 og 1 mere = 13.</p>',
          en: '<p><b>Number bonds to 10</b> are pairs of numbers that make 10 together. If you know them by heart, almost all mental maths gets easier:</p>'
            + '<p class="big">0+10 &nbsp; 1+9 &nbsp; 2+8 &nbsp; 3+7 &nbsp; 4+6 &nbsp; 5+5</p>'
            + '<p>Use your fingers: fold 3 fingers down – how many are up? 7. So 3 and 7 are bonds to 10.</p>'
            + '<p>The same goes for <b>doubles</b>: 1+1, 2+2, 3+3 … 10+10. And "near doubles": 6 + 7 is the same as 6 + 6 and 1 more = 13.</p>'
        }
      },
      { type: 'widget', widget: 'tenfriends', title: { da: 'Find tiervennen', en: 'Find the bond to 10' } },
      {
        type: 'text',
        title: { da: 'Fra at tælle alle til at regne', en: 'From counting everything to calculating' },
        body: {
          da: '<p>Undervisningsvejledningen viser med et eksempel fra 1. klasse, hvordan man bliver bedre og bedre til plus. Opgaven er: <i>Albert har 7 kroner. Han får 10 kroner mere. Hvor mange har han nu?</i></p>'
            + '<ol>'
            + '<li><b>Tæl alle:</b> Læg 7 klodser, læg 10 klodser, tæl alle sammen: 1, 2, 3 … 17. Det virker, men det er langsomt.</li>'
            + '<li><b>Tæl videre:</b> Start ved 7 og tæl 10 videre: 8, 9, 10 … 17. Hurtigere! Endnu bedre: start ved det <i>største</i> tal (10) og tæl 7 videre – det er lige meget, hvilket tal der står først.</li>'
            + '<li><b>Brug det, du ved:</b> „Jeg ved, at 10 + 5 er 15. Så skal jeg bare have 2 mere. Det er 17.“</li>'
            + '</ol>'
            + '<p>Alle tre måder er rigtige. Målet er, at du efterhånden bruger de hurtige, når du er klar til det.</p>',
          en: '<p>The Ministry\'s teaching guide uses an example from grade 1 to show how you get better and better at adding. The problem is: <i>Albert has 7 kroner. He gets 10 kroner more. How many does he have now?</i></p>'
            + '<ol>'
            + '<li><b>Count everything:</b> Put out 7 blocks, put out 10 blocks, count them all: 1, 2, 3 … 17. It works, but it is slow.</li>'
            + '<li><b>Count on:</b> Start at 7 and count 10 more: 8, 9, 10 … 17. Faster! Even better: start at the <i>bigger</i> number (10) and count 7 on – it does not matter which number comes first.</li>'
            + '<li><b>Use what you know:</b> "I know 10 + 5 is 15. So I just need 2 more. That is 17."</li>'
            + '</ol>'
            + '<p>All three ways are correct. The aim is that you gradually use the fast ones when you are ready.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Større tal: del op i tiere og enere', en: 'Bigger numbers: split into tens and ones' },
        body: {
          da: '<p>Undervisningsvejledningen viser tre måder at regne ' + m('48 + 34') + ' på:</p>'
            + '<ul>'
            + '<li><b>Tæl i tiere og enere:</b> 48 → 58 → 68 → 78 (tre tiere), så 79, 80, 81, 82 (fire enere). Svar: 82.</li>'
            + '<li><b>Del begge tal op:</b> ' + m('40 + 30 = 70') + ' og ' + m('8 + 4 = 12') + '. ' + m('70 + 12 = 82') + '.</li>'
            + '<li><b>Gør det ene tal rundt:</b> Læg 2 til 48, så det bliver 50. Tag 2 fra 34, så det bliver 32. ' + m('50 + 32 = 82') + '.</li>'
            + '</ul>'
            + '<p><b>Minus</b> virker på samme måde. ' + m('82 − 34') + ': Tag 30 fra 82 → 52. Tag 4 fra 52 → 48. Eller tæl <i>op</i> fra 34: til 40 er 6, til 80 er 40, til 82 er 2. I alt 48.</p>'
            + '<p>Læseplanen siger, at der <i>ikke</i> sigtes mod „standardiserede algoritmer“ (at stille op under hinanden) i 1.–3. klasse. Det vigtige er, at du forstår, hvad du gør, og at du kan skrive dine egne små noter undervejs.</p>',
          en: '<p>The Ministry\'s teaching guide shows three ways of working out ' + m('48 + 34') + ':</p>'
            + '<ul>'
            + '<li><b>Count in tens and ones:</b> 48 → 58 → 68 → 78 (three tens), then 79, 80, 81, 82 (four ones). Answer: 82.</li>'
            + '<li><b>Split both numbers:</b> ' + m('40 + 30 = 70') + ' and ' + m('8 + 4 = 12') + '. ' + m('70 + 12 = 82') + '.</li>'
            + '<li><b>Make one number round:</b> Add 2 to 48 to make 50. Take 2 from 34 to make 32. ' + m('50 + 32 = 82') + '.</li>'
            + '</ul>'
            + '<p><b>Subtracting</b> works the same way. ' + m('82 − 34') + ': Take 30 from 82 → 52. Take 4 from 52 → 48. Or count <i>up</i> from 34: to 40 is 6, to 80 is 40, to 82 is 2. In total 48.</p>'
            + '<p>The curriculum says grades 1–3 do <i>not</i> aim at "standard algorithms" (column methods). What matters is that you understand what you are doing and can write your own little notes along the way.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Plus og minus hører sammen', en: 'Adding and subtracting belong together' },
        body: {
          da: '<p>Hvis ' + m('8 + 5 = 13') + ', så er ' + m('13 − 5 = 8') + ' og ' + m('13 − 8 = 5') + '. Det er den samme „talfamilie“. Kender du den ene, kender du dem alle.</p>'
            + '<p>Minus kan betyde tre forskellige ting (læseplanen kalder det <i>ændring</i>, <i>sammenlægning</i> og <i>sammenligning</i>):</p>'
            + '<ul><li><b>Noget forsvinder:</b> „Jeg havde 13 kr. og brugte 5.“ → ' + m('13 − 5') + '</li>'
            + '<li><b>Hvor meget mangler:</b> „Jeg har 8 kr. og skal bruge 13.“ → ' + m('13 − 8') + ' (eller: tæl op fra 8 til 13)</li>'
            + '<li><b>Forskel:</b> „Mia er 13 år, Noah er 8. Hvor meget ældre er Mia?“ → ' + m('13 − 8') + '</li></ul>'
            + '<p><b>Overslag og lommeregner:</b> Skal du regne ' + m('198 + 305') + ', så tænk først „det er cirka 200 + 300 = 500“. Tast så på lommeregneren og tjek: 503. Passer! Lommeregneren er et godt værktøj – men du skal altid vide cirka, hvad svaret bliver.</p>',
          en: '<p>If ' + m('8 + 5 = 13') + ', then ' + m('13 − 5 = 8') + ' and ' + m('13 − 8 = 5') + '. It is the same "number family". If you know one, you know them all.</p>'
            + '<p>Subtraction can mean three different things (the curriculum calls them <i>change</i>, <i>combining</i> and <i>comparing</i>):</p>'
            + '<ul><li><b>Something goes away:</b> "I had 13 kr. and spent 5." → ' + m('13 − 5') + '</li>'
            + '<li><b>How much is missing:</b> "I have 8 kr. and need 13." → ' + m('13 − 8') + ' (or: count up from 8 to 13)</li>'
            + '<li><b>Difference:</b> "Mia is 13, Noah is 8. How much older is Mia?" → ' + m('13 − 8') + '</li></ul>'
            + '<p><b>Estimating and the calculator:</b> If you need ' + m('198 + 305') + ', first think "that is about 200 + 300 = 500". Then type it into the calculator and check: 503. Fits! The calculator is a good tool – but you must always know roughly what the answer will be.</p>'
        }
      },
      { type: 'widget', widget: 'arith', opts: { small: true }, title: { da: 'Regnetræner – små tal', en: 'Calculation trainer – small numbers' } },
      {
        type: 'practice',
        items: [
          { q: { da: 'Hvad er tiervennen til 4? Og til 9?', en: 'What is the bond to 10 for 4? And for 9?' }, a: { da: '6 og 1.', en: '6 and 1.' } },
          { q: { da: m('7 + 8') + ' – brug en fordobling.', en: m('7 + 8') + ' – use a double.' }, a: { da: '15. 7 + 7 = 14, og 1 mere.', en: '15. 7 + 7 = 14, and 1 more.' } },
          { q: { da: m('9 + 6') + ' – brug en tiervenn.', en: m('9 + 6') + ' – use a bond to 10.' }, a: { da: '15. 9 + 1 = 10, og så de 5, der er tilbage af 6.', en: '15. 9 + 1 = 10, then the 5 left over from 6.' } },
          { q: { da: m('36 + 27'), en: m('36 + 27') }, a: { da: '63. Fx 30 + 20 = 50 og 6 + 7 = 13. 50 + 13 = 63.', en: '63. E.g. 30 + 20 = 50 and 6 + 7 = 13. 50 + 13 = 63.' } },
          { q: { da: m('50 − 23'), en: m('50 − 23') }, a: { da: '27. Tag 20 fra 50 → 30. Tag 3 → 27.', en: '27. Take 20 from 50 → 30. Take 3 → 27.' } },
          { q: { da: 'Emil har 15 kr. En is koster 22 kr. Hvor meget mangler han?', en: 'Emil has 15 kr. An ice cream costs 22 kr. How much is he short?' }, a: { da: '7 kr. Tæl op fra 15: til 20 er 5, til 22 er 2.', en: '7 kr. Count up from 15: to 20 is 5, to 22 is 2.' } },
          { q: { da: 'Lav et overslag: ' + m('297 + 402') + '. Tjek så med lommeregner.', en: 'Estimate: ' + m('297 + 402') + '. Then check with a calculator.' }, a: { da: 'Cirka 300 + 400 = 700. Præcist: 699.', en: 'About 300 + 400 = 700. Exactly: 699.' } },
          { q: { da: 'Skriv talfamilien for 6, 9 og 15.', en: 'Write the number family for 6, 9 and 15.' }, a: { da: '6 + 9 = 15, 9 + 6 = 15, 15 − 6 = 9, 15 − 9 = 6.', en: '6 + 9 = 15, 9 + 6 = 15, 15 − 6 = 9, 15 − 9 = 6.' } }
        ]
      }
    ]
  };

  /* ================================================================
     Gange og division
     ================================================================ */
  T['gange-og-division'] = {
    title: { da: 'Gange og division', en: 'Multiplying and dividing' },
    phase: [2, 3],
    summary: {
      da: 'Gange er lige store grupper lagt sammen. Division er at dele ligeligt. Lær tabellerne med hop på tallinjen – og se, hvordan gange og division hænger sammen.',
      en: 'Multiplying is equal groups added together. Dividing is sharing equally. Learn the tables with jumps on the number line – and see how multiplying and dividing are linked.'
    },
    goals: {
      da: [
        'Eleven kan udvikle metoder til multiplikation og division med naturlige tal.',
        'Eleven har viden om strategier til multiplikation og division.',
        'Eleven har viden om sammenhænge mellem de fire regningsarter.'
      ],
      en: [
        'The pupil can develop methods for multiplying and dividing natural numbers.',
        'The pupil has knowledge of strategies for multiplication and division.',
        'The pupil has knowledge of the relationships between the four operations.'
      ]
    },
    terms: [
      { da: 'gange (·)', en: 'multiply (×)', def: { da: '3 · 4 betyder 3 grupper med 4 i hver = 12', en: '3 × 4 means 3 groups of 4 = 12' } },
      { da: 'gangetabel', en: 'times table', def: { da: 'Fx 5-tabellen: 5, 10, 15, 20 …', en: 'E.g. the 5 times table: 5, 10, 15, 20 …' } },
      { da: 'dividere (:)', en: 'divide (÷)', def: { da: '12 : 3 betyder 12 delt i 3 lige store bunker = 4 i hver', en: '12 ÷ 3 means 12 shared into 3 equal piles = 4 each' } },
      { da: 'fordobling / halvering', en: 'doubling / halving', def: { da: 'Gange med 2 / dividere med 2', en: 'Multiply by 2 / divide by 2' } },
      { da: 'gentagen addition', en: 'repeated addition', def: { da: '4 + 4 + 4 er det samme som 3 · 4', en: '4 + 4 + 4 is the same as 3 × 4' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Gange er lige store grupper', en: 'Multiplying is equal groups' },
        body: {
          da: '<p>Tre poser med 4 æbler i hver. Hvor mange æbler? Du kan lægge sammen: ' + m('4 + 4 + 4 = 12') + '. Eller du kan <b>gange</b>: ' + m('3 · 4 = 12') + ' („tre gange fire“). Gange er bare en hurtig måde at lægge det samme tal sammen mange gange.</p>'
            + '<p>Læseplanen siger, at gange og division kommer <i>sidst</i> i 1.–3. klasse, og at man forbereder det med <b>gentagen addition, fordobling, halvering og deling</b>. Så start her:</p>'
            + '<ul><li><b>Fordobling:</b> 2 · 6 = 6 + 6 = 12. Det dobbelte af 8 er 16.</li>'
            + '<li><b>Tæl i spring:</b> 5-tabellen er bare at tælle i 5-spring: 5, 10, 15, 20, 25 … Så ' + m('4 · 5 = 20') + ' (fire spring).</li>'
            + '<li><b>Tegn det:</b> 3 rækker med 4 prikker i hver. Tæl prikkerne: 12. Drej tegningen – nu er det 4 rækker med 3 i hver. Stadig 12! Derfor er ' + m('3 · 4 = 4 · 3') + '. Rækkefølgen er ligegyldig, når man ganger (læseplanen nævner præcis denne opdagelse).</li></ul>',
          en: '<p>Three bags with 4 apples in each. How many apples? You can add: ' + m('4 + 4 + 4 = 12') + '. Or you can <b>multiply</b>: ' + m('3 × 4 = 12') + ' ("three times four"). Multiplying is just a fast way of adding the same number many times.</p>'
            + '<p>The curriculum says multiplying and dividing come <i>last</i> in grades 1–3, and are prepared for with <b>repeated addition, doubling, halving and sharing</b>. So start here:</p>'
            + '<ul><li><b>Doubling:</b> 2 × 6 = 6 + 6 = 12. Double 8 is 16.</li>'
            + '<li><b>Count in jumps:</b> the 5 times table is just counting in 5s: 5, 10, 15, 20, 25 … So ' + m('4 × 5 = 20') + ' (four jumps).</li>'
            + '<li><b>Draw it:</b> 3 rows with 4 dots in each. Count the dots: 12. Turn the drawing – now it is 4 rows of 3. Still 12! That is why ' + m('3 × 4 = 4 × 3') + '. The order does not matter when multiplying (the curriculum mentions exactly this discovery).</li></ul>'
        }
      },
      {
        type: 'fig',
        svg: (function () {
          var s = '<svg viewBox="0 0 480 130" width="480" height="130" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">';
          for (var r = 0; r < 3; r++) for (var c = 0; c < 4; c++) s += '<circle cx="' + (30 + c * 28) + '" cy="' + (25 + r * 28) + '" r="10" fill="' + BS + '" stroke="' + B + '" stroke-width="2"/>';
          s += '<text x="72" y="118" text-anchor="middle">3 · 4 = 12</text>';
          s += '<text x="180" y="65" text-anchor="middle" font-size="22">=</text>';
          for (var r2 = 0; r2 < 4; r2++) for (var c2 = 0; c2 < 3; c2++) s += '<circle cx="' + (230 + c2 * 28) + '" cy="' + (18 + r2 * 24) + '" r="9" fill="' + BS + '" stroke="' + B + '" stroke-width="2"/>';
          s += '<text x="258" y="118" text-anchor="middle">4 · 3 = 12</text>';
          // number line jumps of 5
          s += '<line x1="330" y1="70" x2="470" y2="70" stroke="currentColor" stroke-width="2"/>';
          for (var k = 0; k <= 4; k++) { var x = 330 + k * 35; s += '<line x1="' + x + '" y1="64" x2="' + x + '" y2="76" stroke="currentColor" stroke-width="1.5"/><text x="' + x + '" y="92" text-anchor="middle">' + (k * 5) + '</text>'; if (k < 4) s += '<path d="M' + x + ',66 Q' + (x + 17) + ',36 ' + (x + 35) + ',66" fill="none" stroke="' + B + '" stroke-width="2"/>'; }
          s += '<text x="400" y="118" text-anchor="middle">4 · 5 = 20 (fire spring)</text>';
          return s + '</svg>';
        })(),
        caption: { da: 'Samme prikker, to måder at tælle på – og 5-tabellen som spring på tallinjen.', en: 'The same dots counted two ways – and the 5 times table as jumps on the number line.' }
      },
      {
        type: 'text',
        title: { da: 'Tabellerne – i en god rækkefølge', en: 'The tables – in a good order' },
        body: {
          da: '<p>Du behøver ikke lære alle tabeller på én gang. En god rækkefølge:</p>'
            + '<ol><li><b>10-tabellen:</b> sæt et 0 bagpå. 7 · 10 = 70.</li>'
            + '<li><b>2-tabellen:</b> fordobling. 7 · 2 = 14.</li>'
            + '<li><b>5-tabellen:</b> tæl i 5-spring – slutter altid på 5 eller 0.</li>'
            + '<li><b>4-tabellen:</b> fordobl to gange. 7 · 4: 7 · 2 = 14, og 14 · 2 = 28.</li>'
            + '<li><b>3-tabellen og 6-tabellen:</b> 6-tabellen er det dobbelte af 3-tabellen.</li>'
            + '<li><b>9-tabellen:</b> 10-tabellen minus tallet. 7 · 9 = 70 − 7 = 63.</li>'
            + '<li><b>7- og 8-tabellen:</b> de sidste – men de fleste stykker kender du allerede fra de andre tabeller, fordi 7 · 8 = 8 · 7!</li></ol>',
          en: '<p>You do not need to learn all the tables at once. A good order:</p>'
            + '<ol><li><b>10 times table:</b> put a 0 on the end. 7 × 10 = 70.</li>'
            + '<li><b>2 times table:</b> doubling. 7 × 2 = 14.</li>'
            + '<li><b>5 times table:</b> count in 5s – always ends in 5 or 0.</li>'
            + '<li><b>4 times table:</b> double twice. 7 × 4: 7 × 2 = 14, and 14 × 2 = 28.</li>'
            + '<li><b>3 and 6 times tables:</b> the 6 times table is double the 3 times table.</li>'
            + '<li><b>9 times table:</b> the 10 times table minus the number. 7 × 9 = 70 − 7 = 63.</li>'
            + '<li><b>7 and 8 times tables:</b> the last ones – but you already know most of them from the other tables, because 7 × 8 = 8 × 7!</li></ol>'
        }
      },
      { type: 'widget', widget: 'tables', title: { da: 'Gangetabel-træner', en: 'Times table trainer' } },
      {
        type: 'text',
        title: { da: 'Division er at dele – og gange baglæns', en: 'Dividing is sharing – and multiplying backwards' },
        body: {
          da: '<p>12 boller skal deles mellem 3 børn. Del ud én ad gangen: én til hver, én til hver … Til sidst har hver 4. ' + m('12 : 3 = 4') + ' („tolv divideret med tre“).</p>'
            + '<p>Division kan også betyde „hvor mange gange går det op?“: Du har 12 boller og lægger 3 i hver pose. Hvor mange poser? 4 poser. Også ' + m('12 : 3 = 4') + '.</p>'
            + '<p><b>Gange og division hører sammen</b> – ligesom plus og minus. Hvis ' + m('3 · 4 = 12') + ', så er ' + m('12 : 3 = 4') + ' og ' + m('12 : 4 = 3') + '. Så når du skal regne ' + m('20 : 5') + ', kan du tænke: „5 gange <i>hvad</i> giver 20?“ – 4.</p>'
            + '<p><b>Halvering</b> er at dividere med 2: halvdelen af 18 er 9.</p>',
          en: '<p>12 buns are to be shared between 3 children. Deal them out one at a time: one each, one each … In the end each has 4. ' + m('12 ÷ 3 = 4') + ' ("twelve divided by three").</p>'
            + '<p>Division can also mean "how many times does it fit?": You have 12 buns and put 3 in each bag. How many bags? 4 bags. Also ' + m('12 ÷ 3 = 4') + '.</p>'
            + '<p><b>Multiplying and dividing belong together</b> – just like adding and subtracting. If ' + m('3 × 4 = 12') + ', then ' + m('12 ÷ 3 = 4') + ' and ' + m('12 ÷ 4 = 3') + '. So when you need ' + m('20 ÷ 5') + ', think: "5 times <i>what</i> gives 20?" – 4.</p>'
            + '<p><b>Halving</b> is dividing by 2: half of 18 is 9.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Regnehistorie', en: 'Story problem' },
        problem: { da: 'I klassen står bordene i 4 rækker med 6 borde i hver. Hvor mange borde er der? Bagefter skal 24 elever deles i hold med 6 på hvert. Hvor mange hold?', en: 'In the classroom the desks stand in 4 rows of 6. How many desks? Afterwards 24 pupils are split into teams of 6. How many teams?' },
        steps: {
          da: ['Borde: 4 rækker med 6 → ' + m('4 · 6 = 24') + '. (Tæl i 6-spring: 6, 12, 18, 24.)', 'Hold: 24 delt i grupper på 6 → ' + m('24 : 6 = 4') + '. Tænk: „6 gange hvad giver 24?“ – 4.'],
          en: ['Desks: 4 rows of 6 → ' + m('4 × 6 = 24') + '. (Count in 6s: 6, 12, 18, 24.)', 'Teams: 24 split into groups of 6 → ' + m('24 ÷ 6 = 4') + '. Think: "6 times what gives 24?" – 4.']
        },
        answer: { da: '24 borde og 4 hold.', en: '24 desks and 4 teams.' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Skriv som gangestykke og regn ud: ' + m('5 + 5 + 5 + 5'), en: 'Write as a multiplication and calculate: ' + m('5 + 5 + 5 + 5') }, a: { da: m('4 · 5 = 20'), en: m('4 × 5 = 20') } },
          { q: { da: 'Hvad er det dobbelte af 14?', en: 'What is double 14?' }, a: { da: '28', en: '28' } },
          { q: { da: m('6 · 10') + ' og ' + m('6 · 9'), en: m('6 × 10') + ' and ' + m('6 × 9') }, a: { da: '60 og 54 (60 − 6).', en: '60 and 54 (60 − 6).' } },
          { q: { da: m('18 : 2') + ' – hvad er halvdelen af 18?', en: m('18 ÷ 2') + ' – what is half of 18?' }, a: { da: '9', en: '9' } },
          { q: { da: '15 kager deles mellem 5 børn. Hvor mange får hver?', en: '15 cakes are shared between 5 children. How many does each get?' }, a: { da: '3 (' + m('15 : 5') + ').', en: '3 (' + m('15 ÷ 5') + ').' } },
          { q: { da: 'Er ' + m('7 · 3') + ' det samme som ' + m('3 · 7') + '? Hvorfor?', en: 'Is ' + m('7 × 3') + ' the same as ' + m('3 × 7') + '? Why?' }, a: { da: 'Ja, begge er 21. Tegn 7 rækker med 3 prikker og drej papiret – det er 3 rækker med 7.', en: 'Yes, both are 21. Draw 7 rows of 3 dots and turn the paper – it is 3 rows of 7.' } },
          { q: { da: 'Hvis ' + m('8 · 4 = 32') + ', hvad er så ' + m('32 : 4') + '?', en: 'If ' + m('8 × 4 = 32') + ', what is ' + m('32 ÷ 4') + '?' }, a: { da: '8', en: '8' } },
          { q: { da: 'Der er 30 elever og 5 borde. Hvor mange skal sidde ved hvert bord, hvis der skal være lige mange?', en: 'There are 30 pupils and 5 tables. How many at each table, if they are shared equally?' }, a: { da: '6 (' + m('30 : 5') + ').', en: '6 (' + m('30 ÷ 5') + ').' } }
        ]
      }
    ]
  };

  /* ================================================================
     Mønstre og regneregler
     ================================================================ */
  T['moenstre-regneregler'] = {
    title: { da: 'Mønstre og regneregler', en: 'Patterns and rules' },
    phase: [1, 2, 3],
    summary: {
      da: 'Find systemet i tal- og figurmønstre, opdag regler, der altid gælder – og se, hvordan én ting hænger sammen med en anden (fx antal is og pris).',
      en: 'Find the system in number and shape patterns, discover rules that always hold – and see how one thing depends on another (e.g. number of ice creams and price).'
    },
    goals: {
      da: [
        'Eleven kan opdage systemer i figur- og talmønstre.',
        'Eleven kan beskrive systemer i figur- og talmønstre.',
        'Eleven kan opdage regneregler og enkle sammenhænge mellem størrelser.',
        'Eleven har viden om sammenhænge mellem de fire regningsarter.'
      ],
      en: [
        'The pupil can discover systems in shape and number patterns.',
        'The pupil can describe systems in shape and number patterns.',
        'The pupil can discover calculation rules and simple relationships between quantities.',
        'The pupil has knowledge of the relationships between the four operations.'
      ]
    },
    terms: [
      { da: 'mønster', en: 'pattern', def: { da: 'Noget, der gentager sig eller vokser på en fast måde', en: 'Something that repeats or grows in a fixed way' } },
      { da: 'talmønster (talfølge)', en: 'number pattern (sequence)', def: { da: '3, 6, 9, 12 … – plus 3 hver gang', en: '3, 6, 9, 12 … – plus 3 each time' } },
      { da: 'figurmønster', en: 'shape pattern', def: { da: '○ △ ○ △ ○ … – eller en figur, der vokser', en: '○ △ ○ △ ○ … – or a shape that grows' } },
      { da: 'regneregel', en: 'calculation rule', def: { da: 'Noget, der altid gælder, fx 3 + 5 = 5 + 3', en: 'Something that always holds, e.g. 3 + 5 = 5 + 3' } },
      { da: 'lige og ulige tal', en: 'even and odd numbers', def: { da: 'Lige: 0, 2, 4, 6 … kan deles i to lige store. Ulige: 1, 3, 5, 7 …', en: 'Even: 0, 2, 4, 6 … can be split into two equal parts. Odd: 1, 3, 5, 7 …' } },
      { da: 'sammenhæng', en: 'relationship', def: { da: 'Når det ene tal bestemmer det andet: antal is → pris', en: 'When one number decides the other: number of ice creams → price' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Hvad kommer næste gang?', en: 'What comes next?' },
        body: {
          da: '<p>Et <b>mønster</b> er noget, der følger en regel. Kan du finde reglen, kan du sige, hvad der kommer bagefter:</p>'
            + '<ul><li>○ △ △ ○ △ △ ○ … → næste er △ △. Reglen: „cirkel, trekant, trekant“ gentages.</li>'
            + '<li>2, 4, 6, 8, … → næste er 10. Reglen: plus 2 hver gang (de lige tal).</li>'
            + '<li>100, 90, 80, … → næste er 70. Reglen: minus 10.</li>'
            + '<li>1, 2, 4, 8, … → næste er 16. Reglen: det dobbelte hver gang.</li>'
            + '<li>Voksende figur: 1 klods, så 3 klodser i en trekant, så 6 … Hvor mange i den næste? 10 – der kommer én række mere til hver gang.</li></ul>'
            + '<p><b>Find selv mønstre:</b> På hundredtavlen (se <a href="#/tal-og-antal">Tal, antal og rækkefølge</a>) står 10-tabellen i en lodret række, og 9-tabellen går skråt. Hvorfor mon?</p>',
          en: '<p>A <b>pattern</b> is something that follows a rule. If you can find the rule, you can say what comes next:</p>'
            + '<ul><li>○ △ △ ○ △ △ ○ … → next is △ △. The rule: "circle, triangle, triangle" repeats.</li>'
            + '<li>2, 4, 6, 8, … → next is 10. The rule: plus 2 each time (the even numbers).</li>'
            + '<li>100, 90, 80, … → next is 70. The rule: minus 10.</li>'
            + '<li>1, 2, 4, 8, … → next is 16. The rule: double each time.</li>'
            + '<li>Growing shape: 1 block, then 3 blocks in a triangle, then 6 … How many in the next? 10 – one more row is added each time.</li></ul>'
            + '<p><b>Find patterns yourself:</b> On the hundred square (see <a href="#/tal-og-antal">Numbers, counting and order</a>) the 10 times table is a vertical column, and the 9 times table goes diagonally. Why might that be?</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Regneregler, der altid gælder', en: 'Rules that always hold' },
        body: {
          da: '<p>Læseplanen nævner to opdagelser, som børn i 1.–3. klasse selv kan gøre:</p>'
            + '<ul>'
            + '<li><b>Rækkefølgen er ligegyldig i plus og gange.</b> ' + m('3 + 5 = 5 + 3') + ' og ' + m('2 · 6 = 6 · 2') + '. Prøv med klodser: to bunker byttet om er stadig lige mange. <i>Men</i> det gælder ikke for minus: ' + m('5 − 3') + ' er ikke det samme som ' + m('3 − 5') + '.</li>'
            + '<li><b>To ulige tal giver altid et lige tal, når man lægger dem sammen.</b> 3 + 5 = 8, 7 + 9 = 16, 1 + 1 = 2. Hvorfor? Et ulige tal er „par plus én til overs“. To „til overs“ finder sammen og bliver et par – så alt går op i par.</li>'
            + '</ul>'
            + '<p>Flere regler, du kan tjekke selv: Plus 0 ændrer ingenting. Gange med 1 ændrer ingenting. Gange med 0 giver altid 0. Og talfamilierne: hvis du kender ' + m('4 + 7 = 11') + ', kender du også ' + m('11 − 7') + ' og ' + m('11 − 4') + '.</p>',
          en: '<p>The curriculum mentions two discoveries that children in grades 1–3 can make themselves:</p>'
            + '<ul>'
            + '<li><b>The order does not matter in adding and multiplying.</b> ' + m('3 + 5 = 5 + 3') + ' and ' + m('2 × 6 = 6 × 2') + '. Try with blocks: two piles swapped around are still the same amount. <i>But</i> it does not hold for subtraction: ' + m('5 − 3') + ' is not the same as ' + m('3 − 5') + '.</li>'
            + '<li><b>Two odd numbers always add up to an even number.</b> 3 + 5 = 8, 7 + 9 = 16, 1 + 1 = 2. Why? An odd number is "pairs plus one left over". The two "left overs" join up and become a pair – so everything goes into pairs.</li>'
            + '</ul>'
            + '<p>More rules you can check yourself: Adding 0 changes nothing. Multiplying by 1 changes nothing. Multiplying by 0 always gives 0. And number families: if you know ' + m('4 + 7 = 11') + ', you also know ' + m('11 − 7') + ' and ' + m('11 − 4') + '.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Antal is og pris – en sammenhæng', en: 'Ice creams and price – a relationship' },
        problem: { da: 'En is koster 15 kr. Lav en tabel, der viser, hvad 1, 2, 3, 4 og 5 is koster. Hvad koster 10 is?', en: 'An ice cream costs 15 kr. Make a table showing what 1, 2, 3, 4 and 5 ice creams cost. What do 10 cost?' },
        steps: {
          da: [
            '<table><tr><th>Antal is</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>Pris i kr.</th><td>15</td><td>30</td><td>45</td><td>60</td><td>75</td></tr></table>',
            'Mønstret: prisen stiger med 15 for hver is. Det er 15-tabellen!',
            '10 is: ' + m('10 · 15 = 150') + ' kr. Eller det dobbelte af 5 is (75 kr.) = 150 kr.',
            'Læseplanen nævner netop „sammenhængen mellem antal købte is og samlet pris“ som et eksempel på det, man opdager sidst i 3. klasse. I 4.–6. klasse lærer du at skrive sådan en sammenhæng som en formel.'
          ],
          en: [
            '<table><tr><th>Ice creams</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>Price in kr.</th><td>15</td><td>30</td><td>45</td><td>60</td><td>75</td></tr></table>',
            'The pattern: the price goes up by 15 for each ice cream. It is the 15 times table!',
            '10 ice creams: ' + m('10 × 15 = 150') + ' kr. Or double 5 ice creams (75 kr.) = 150 kr.',
            'The curriculum names exactly "the relationship between the number of ice creams bought and the total price" as an example of what is discovered at the end of grade 3. In grades 4–6 you learn to write such a relationship as a formula.'
          ]
        },
        answer: { da: '150 kr.', en: '150 kr.' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Hvad kommer næste gang? 5, 10, 15, 20, ___', en: 'What comes next? 5, 10, 15, 20, ___' }, a: { da: '25 (plus 5).', en: '25 (plus 5).' } },
          { q: { da: 'Hvad kommer næste gang? 50, 45, 40, 35, ___', en: 'What comes next? 50, 45, 40, 35, ___' }, a: { da: '30 (minus 5).', en: '30 (minus 5).' } },
          { q: { da: 'Hvad kommer næste gang? ★ ★ ○ ★ ★ ○ ★ ___ ___', en: 'What comes next? ★ ★ ○ ★ ★ ○ ★ ___ ___' }, a: { da: '★ ○', en: '★ ○' } },
          { q: { da: 'Er 3 + 8 det samme som 8 + 3? Er 8 − 3 det samme som 3 − 8?', en: 'Is 3 + 8 the same as 8 + 3? Is 8 − 3 the same as 3 − 8?' }, a: { da: 'Ja (begge 11). Nej – rækkefølgen betyder noget i minus.', en: 'Yes (both 11). No – the order matters in subtraction.' } },
          { q: { da: 'Læg to ulige tal sammen, fx 5 + 9. Er svaret lige eller ulige? Prøv tre gange.', en: 'Add two odd numbers, e.g. 5 + 9. Is the answer even or odd? Try three times.' }, a: { da: 'Altid lige: 5 + 9 = 14, 3 + 7 = 10, 11 + 1 = 12.', en: 'Always even: 5 + 9 = 14, 3 + 7 = 10, 11 + 1 = 12.' } },
          { q: { da: 'Et mønster af klodser: 2, 4, 6, 8 klodser. Hvor mange klodser er der i figur nummer 10?', en: 'A block pattern: 2, 4, 6, 8 blocks. How many blocks are in shape number 10?' }, a: { da: '20 – der er dobbelt så mange klodser som figurens nummer.', en: '20 – there are twice as many blocks as the shape\'s number.' } },
          { q: { da: 'En bolle koster 6 kr. Lav en tabel for 1 til 5 boller.', en: 'A bun costs 6 kr. Make a table for 1 to 5 buns.' }, a: { da: '6, 12, 18, 24, 30 kr. – 6-tabellen.', en: '6, 12, 18, 24, 30 kr. – the 6 times table.' } }
        ]
      }
    ]
  };

  /* ================================================================
     Halve, kvarte og kommatal
     ================================================================ */
  T['halve-og-kvarte'] = {
    title: { da: 'Halve, kvarte og kommatal', en: 'Halves, quarters and decimals' },
    phase: [3],
    summary: {
      da: 'En halv pizza, en kvart time, 12,50 kr. De første brøker og decimaltal – dem, du møder i hverdagen.',
      en: 'Half a pizza, a quarter of an hour, 12.50 kr. The first fractions and decimals – the ones you meet every day.'
    },
    goals: {
      da: [
        'Eleven kan genkende enkle decimaltal og brøker i hverdagssituationer.',
        'Eleven har viden om enkle decimaltal og brøker.'
      ],
      en: [
        'The pupil can recognise simple decimals and fractions in everyday situations.',
        'The pupil has knowledge of simple decimals and fractions.'
      ]
    },
    terms: [
      { da: 'en halv (½)', en: 'a half (½)', def: { da: 'Én af to lige store dele', en: 'One of two equal parts' } },
      { da: 'en kvart (¼)', en: 'a quarter (¼)', def: { da: 'Én af fire lige store dele', en: 'One of four equal parts' } },
      { da: 'brøk', en: 'fraction', def: { da: 'Et tal skrevet med streg: ' + fr(1, 2) + ', ' + fr(1, 4) + ', ' + fr(3, 4), en: 'A number written with a bar: ' + fr(1, 2) + ', ' + fr(1, 4) + ', ' + fr(3, 4) } },
      { da: 'decimaltal (kommatal)', en: 'decimal', def: { da: 'Et tal med komma: 0,5 og 12,50', en: 'A number with a decimal point: 0.5 and 12.50' } },
      { da: 'halvdelen af', en: 'half of', def: { da: 'Delt i to: halvdelen af 10 er 5', en: 'Split in two: half of 10 is 5' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Halve og kvarte', en: 'Halves and quarters' },
        body: {
          da: '<p>Deler du en pizza i <b>to lige store</b> stykker, er hvert stykke <b>en halv</b>. Vi skriver ' + fr(1, 2) + ': „1 stykke ud af 2“.</p>'
            + '<p>Deler du den i <b>fire lige store</b> stykker, er hvert stykke <b>en kvart</b>: ' + fr(1, 4) + '. Spiser du tre af dem, har du spist ' + fr(3, 4) + ' – tre kvarte.</p>'
            + '<p>Vigtigt: Stykkerne skal være <i>lige store</i>. En stor og en lille bid er ikke to halve!</p>'
            + '<p>Halve og kvarte gemmer sig overalt:</p>'
            + '<ul><li><b>Klokken:</b> „halv tre“ – en halv time. „Kvart over“ – en kvart time = 15 minutter.</li>'
            + '<li><b>Mælk:</b> en halv liter. <b>Smør:</b> en kvart pakke.</li>'
            + '<li><b>Antal:</b> halvdelen af 10 børn er 5 børn. En kvart af 20 kr. er 5 kr. (del i 4).</li></ul>'
            + '<p>To halve er én hel: ' + fr(1, 2) + ' + ' + fr(1, 2) + ' = 1. Fire kvarte er én hel. Og to kvarte er det samme som en halv.</p>',
          en: '<p>If you cut a pizza into <b>two equal</b> pieces, each piece is <b>a half</b>. We write ' + fr(1, 2) + ': "1 piece out of 2".</p>'
            + '<p>If you cut it into <b>four equal</b> pieces, each piece is <b>a quarter</b>: ' + fr(1, 4) + '. If you eat three of them, you have eaten ' + fr(3, 4) + ' – three quarters.</p>'
            + '<p>Important: the pieces must be <i>equal</i>. A big bite and a small bite are not two halves!</p>'
            + '<p>Halves and quarters hide everywhere:</p>'
            + '<ul><li><b>The clock:</b> half past – half an hour. Quarter past – a quarter of an hour = 15 minutes.</li>'
            + '<li><b>Milk:</b> half a litre. <b>Butter:</b> a quarter of a pack.</li>'
            + '<li><b>Amounts:</b> half of 10 children is 5 children. A quarter of 20 kr. is 5 kr. (split into 4).</li></ul>'
            + '<p>Two halves make one whole: ' + fr(1, 2) + ' + ' + fr(1, 2) + ' = 1. Four quarters make one whole. And two quarters are the same as a half.</p>'
        }
      },
      {
        type: 'fig',
        svg: (function () {
          var s = '<svg viewBox="0 0 440 130" width="440" height="130" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">';
          function pie(cx, cy, parts, shaded) { var r = 40, o = ''; for (var i = 0; i < parts; i++) { var a1 = -Math.PI / 2 + i * 2 * Math.PI / parts, a2 = a1 + 2 * Math.PI / parts; o += '<path d="M' + cx + ',' + cy + ' L' + (cx + r * Math.cos(a1)) + ',' + (cy + r * Math.sin(a1)) + ' A' + r + ',' + r + ' 0 0,1 ' + (cx + r * Math.cos(a2)) + ',' + (cy + r * Math.sin(a2)) + ' Z" fill="' + (i < shaded ? BS : 'transparent') + '" stroke="' + B + '" stroke-width="2"/>'; } return o; }
          s += pie(60, 55, 2, 1) + '<text x="60" y="118" text-anchor="middle">en halv · ½</text>';
          s += pie(180, 55, 4, 1) + '<text x="180" y="118" text-anchor="middle">en kvart · ¼</text>';
          s += pie(300, 55, 4, 3) + '<text x="300" y="118" text-anchor="middle">tre kvarte · ¾</text>';
          s += pie(400, 55, 4, 2) + '<text x="400" y="118" text-anchor="middle">2/4 = ½</text>';
          return s + '</svg>';
        })(),
        caption: { da: 'Halve og kvarte af en pizza. To kvarte er en halv.', en: 'Halves and quarters of a pizza. Two quarters make a half.' }
      },
      {
        type: 'text',
        title: { da: 'Kommatal – tal med komma', en: 'Decimals – numbers with a comma' },
        body: {
          da: '<p>I butikken står der <b>12,50 kr.</b> Det er et <b>decimaltal</b> (kommatal). Tallet før kommaet er hele kroner (12), og tallet efter kommaet er ører – 50 øre er en halv krone.</p>'
            + '<p>Så <b>0,5</b> betyder det samme som en halv: ' + fr(1, 2) + ' = 0,5. Og 2,5 er „to og en halv“.</p>'
            + '<p>Andre steder, du ser kommatal: 1,5 liter sodavand (halvanden liter), 0,25 kg (en kvart kilo), en højde på 1,32 m.</p>'
            + '<p><b>Husk på dansk:</b> vi skriver <b>komma</b> (12,50). På engelsk og på mange lommeregnere bruges punktum (12.50). Det betyder det samme.</p>'
            + '<p>I 4.–6. klasse lærer du meget mere om <a href="#/broeker">brøker</a> og <a href="#/decimaltal">decimaltal</a>. I 3. klasse er det nok at genkende dem og vide, hvad de betyder.</p>',
          en: '<p>In the shop it says <b>12,50 kr.</b> That is a <b>decimal</b> (in Danish: "kommatal", a comma number). The number before the comma is whole kroner (12), and the number after is øre – 50 øre is half a krone.</p>'
            + '<p>So <b>0.5</b> means the same as a half: ' + fr(1, 2) + ' = 0.5. And 2.5 is "two and a half".</p>'
            + '<p>Other places you see decimals: 1.5 litres of soda (one and a half litres), 0.25 kg (a quarter kilo), a height of 1.32 m.</p>'
            + '<p><b>Remember, in Danish:</b> a <b>comma</b> is used (12,50). In English and on many calculators a point is used (12.50). It means the same.</p>'
            + '<p>In grades 4–6 you learn much more about <a href="#/broeker">fractions</a> and <a href="#/decimaltal">decimals</a>. In grade 3 it is enough to recognise them and know what they mean.</p>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Hvad er halvdelen af 16?', en: 'What is half of 16?' }, a: { da: '8', en: '8' } },
          { q: { da: 'En chokolade har 12 stykker. Du spiser en kvart. Hvor mange stykker er det?', en: 'A chocolate bar has 12 pieces. You eat a quarter. How many pieces is that?' }, a: { da: '3 (12 delt i 4).', en: '3 (12 split into 4).' } },
          { q: { da: 'Hvor mange minutter er en halv time? En kvart time?', en: 'How many minutes is half an hour? A quarter of an hour?' }, a: { da: '30 og 15.', en: '30 and 15.' } },
          { q: { da: 'Er 0,5 det samme som en halv?', en: 'Is 0.5 the same as a half?' }, a: { da: 'Ja.', en: 'Yes.' } },
          { q: { da: 'En bolle koster 4,50 kr. Hvor mange hele kroner og hvor mange øre?', en: 'A bun costs 4.50 kr. How many whole kroner and how many øre?' }, a: { da: '4 kr. og 50 øre (en halv krone).', en: '4 kr. and 50 øre (half a krone).' } },
          { q: { da: 'Hvor mange kvarte er der i en hel pizza? I to pizzaer?', en: 'How many quarters are there in a whole pizza? In two pizzas?' }, a: { da: '4 og 8.', en: '4 and 8.' } }
        ]
      }
    ]
  };
})();
