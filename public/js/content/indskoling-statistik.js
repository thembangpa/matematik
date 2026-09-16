/* ------------------------------------------------------------------
   1.–3. klasse — Statistik og sandsynlighed (2 topics) + Matematiske
   kompetencer (1 topic).
   "goals" quote the færdigheds- og vidensmål (efter 3. klassetrin) from
   Fælles Mål – Matematik; explanations follow Læseplan §5.1 (1.–3. kl.)
   and examples from the Undervisningsvejledning (trafiktælling, dyreløb,
   Albert). Data sets in examples are illustrative.
   ------------------------------------------------------------------ */
(function () {
  var T = window.CONTENT.topics;
  function m(s) { return '<span class="math">' + s + '</span>'; }
  var O = '#e8842b', OS = '#f8d7b8';

  /* ================================================================
     Tælle op og vise data
     ================================================================ */
  T['taelle-og-vise'] = {
    title: { da: 'Tælle op og vise data', en: 'Counting up and showing data' },
    phase: [1, 2, 3],
    summary: {
      da: 'Tæl med streger, sæt tallene i en tabel, og tegn et stolpediagram. Så kan alle se, hvad der er flest af – og færrest af.',
      en: 'Count with tally marks, put the numbers in a table, and draw a bar chart. Then everyone can see what there is most of – and least of.'
    },
    goals: {
      da: [
        'Eleven kan anvende tabeller og enkle diagrammer til at præsentere resultater af optællinger.',
        'Eleven har viden om tabeller og enkle diagrammer.',
        'Eleven kan gennemføre statistiske undersøgelser med enkle data.',
        'Eleven kan gennemføre statistiske undersøgelser med forskellige typer data.',
        'Eleven har viden om enkle metoder til at indsamle, ordne, beskrive og tolke forskellige typer data, herunder med regneark.'
      ],
      en: [
        'The pupil can use tables and simple charts to present the results of counts.',
        'The pupil has knowledge of tables and simple charts.',
        'The pupil can carry out statistical investigations with simple data.',
        'The pupil can carry out statistical investigations with different types of data.',
        'The pupil has knowledge of simple methods for collecting, organising, describing and interpreting different types of data, including with a spreadsheet.'
      ]
    },
    terms: [
      { da: 'data', en: 'data', def: { da: 'Det, man har talt eller spurgt om', en: 'What you have counted or asked about' } },
      { da: 'optælling', en: 'count', def: { da: 'At tælle, hvor mange der er af hver slags', en: 'Counting how many there are of each kind' } },
      { da: 'tælletabel (streger)', en: 'tally chart', def: { da: 'En streg for hver – og den femte på tværs: 卌', en: 'One mark for each – and the fifth across: 卌' } },
      { da: 'tabel', en: 'table', def: { da: 'Tal ordnet i rækker og kolonner', en: 'Numbers arranged in rows and columns' } },
      { da: 'stolpediagram (søjlediagram)', en: 'bar chart', def: { da: 'En stolpe for hver slags – jo højere, jo flere', en: 'A bar for each kind – the taller, the more' } },
      { da: 'flest / færrest', en: 'most / fewest', def: { da: 'Den højeste stolpe / den laveste stolpe', en: 'The tallest bar / the shortest bar' } },
      { da: 'kategori', en: 'category', def: { da: 'En slags: hund, kat, fisk', en: 'A kind: dog, cat, fish' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Fra spørgsmål til stolpediagram', en: 'From question to bar chart' },
        body: {
          da: '<p>Læseplanen beskriver fire trin: <b>indsamle, ordne, beskrive, tolke</b>. Sådan ser det ud i praksis:</p>'
            + '<ol>'
            + '<li><b>Stil et spørgsmål.</b> „Hvilket kæledyr har I?“ (Læseplanen siger, at man starter med <i>kategorier</i> som kæledyr eller fritidsinteresser.)</li>'
            + '<li><b>Indsaml – tæl med streger.</b> Hver gang nogen svarer „hund“, sætter du en streg ved hund. Den femte streg går på tværs af de fire: 卌. Så er det nemt at tælle i 5-spring bagefter.</li>'
            + '<li><b>Ordn i en tabel.</b><table><tr><th>Kæledyr</th><th>Streger</th><th>Antal</th></tr><tr><td>Hund</td><td>卌 |</td><td>6</td></tr><tr><td>Kat</td><td>卌</td><td>5</td></tr><tr><td>Fisk</td><td>||</td><td>2</td></tr><tr><td>Ingen</td><td>|||</td><td>3</td></tr></table></li>'
            + '<li><b>Tegn et stolpediagram.</b> På ternet papir: én stolpe for hver kategori, ét tern for hvert svar. Skriv, hvad stolperne hedder.</li>'
            + '<li><b>Tolk – hvad kan du se?</b> „Der er <b>flest</b>, der har hund.“ „Der er <b>færrest</b>, der har fisk.“ „Der er én mere med hund end med kat.“ „I alt har 13 et kæledyr.“</li>'
            + '</ol>',
          en: '<p>The curriculum describes four steps: <b>collect, organise, describe, interpret</b>. This is what it looks like in practice:</p>'
            + '<ol>'
            + '<li><b>Ask a question.</b> "Which pet do you have?" (The curriculum says you start with <i>categories</i> such as pets or hobbies.)</li>'
            + '<li><b>Collect – count with tally marks.</b> Every time someone answers "dog", you make a mark by dog. The fifth mark goes across the four: 卌. Then it is easy to count in 5s afterwards.</li>'
            + '<li><b>Organise in a table.</b><table><tr><th>Pet</th><th>Tally</th><th>Number</th></tr><tr><td>Dog</td><td>卌 |</td><td>6</td></tr><tr><td>Cat</td><td>卌</td><td>5</td></tr><tr><td>Fish</td><td>||</td><td>2</td></tr><tr><td>None</td><td>|||</td><td>3</td></tr></table></li>'
            + '<li><b>Draw a bar chart.</b> On squared paper: one bar for each category, one square for each answer. Write what the bars are called.</li>'
            + '<li><b>Interpret – what can you see?</b> "<b>Most</b> have a dog." "<b>Fewest</b> have fish." "There is one more with a dog than with a cat." "In total 13 have a pet."</li>'
            + '</ol>'
        }
      },
      {
        type: 'fig',
        svg: (function () {
          var data = [['Hund', 6], ['Kat', 5], ['Fisk', 2], ['Ingen', 3]];
          var s = '<svg viewBox="0 0 360 230" width="360" height="230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="currentColor">';
          var ox = 50, oy = 190, u = 24, w = 50, gap = 22;
          s += '<text x="200" y="18" text-anchor="middle" font-weight="bold">Kæledyr i klassen</text>';
          for (var i = 0; i <= 6; i++) { var y = oy - i * u; s += '<line x1="' + ox + '" y1="' + y + '" x2="' + (ox + 4 * (w + gap)) + '" y2="' + y + '" stroke="#dfe4ec"/><text x="' + (ox - 8) + '" y="' + (y + 4) + '" text-anchor="end">' + i + '</text>'; }
          s += '<line x1="' + ox + '" y1="' + oy + '" x2="' + (ox + 4 * (w + gap)) + '" y2="' + oy + '" stroke="currentColor" stroke-width="2"/><line x1="' + ox + '" y1="' + oy + '" x2="' + ox + '" y2="' + (oy - 6 * u - 8) + '" stroke="currentColor" stroke-width="2"/>';
          data.forEach(function (d, i) { var x = ox + gap / 2 + i * (w + gap); for (var k = 0; k < d[1]; k++) s += '<rect x="' + x + '" y="' + (oy - (k + 1) * u) + '" width="' + w + '" height="' + u + '" fill="' + O + '" stroke="#fff" stroke-width="1.5"/>'; s += '<text x="' + (x + w / 2) + '" y="' + (oy + 16) + '" text-anchor="middle">' + d[0] + '</text>'; });
          return s + '</svg>';
        })(),
        caption: { da: 'Et stolpediagram: ét tern for hvert svar. Hund har flest, fisk har færrest.', en: 'A bar chart: one square for each answer. Dog has the most, fish the fewest.' }
      },
      {
        type: 'text',
        title: { da: 'Tal som data', en: 'Numbers as data' },
        body: {
          da: '<p>Læseplanen siger, at man senere også bruger <b>tal</b> som data – fx „hvor mange søskende har du?“ eller „hvor mange gange har du været i biografen?“. Så hedder kategorierne 0, 1, 2, 3 …</p>'
            + '<p>Undervisningsvejledningen fortæller om en 2. klasse, der laver en <b>trafiktælling</b>: de tæller biler, cykler og fodgængere på forskellige tidspunkter og sætter tallene i tabeller og diagrammer. Bagefter kan de svare på: <i>Hvilken slags trafikanter er der flest af? Hvornår på dagen er der flest biler?</i></p>'
            + '<p>Man kan også tælle over lang tid: mål din højde to gange om året, og se, hvordan den vokser.</p>'
            + '<p><b>Regneark:</b> I 3. klasse kan tallene skrives ind i et regneark på computeren. Så tegner programmet diagrammet for dig – og hvis du retter et tal, retter diagrammet sig selv.</p>',
          en: '<p>The curriculum says that later you also use <b>numbers</b> as data – e.g. "how many siblings do you have?" or "how many times have you been to the cinema?". Then the categories are called 0, 1, 2, 3 …</p>'
            + '<p>The Ministry\'s teaching guide describes a grade 2 class doing a <b>traffic count</b>: they count cars, bikes and pedestrians at different times and put the numbers into tables and charts. Afterwards they can answer: <i>Which kind of traffic is there most of? When in the day are there most cars?</i></p>'
            + '<p>You can also count over a long time: measure your height twice a year and see how it grows.</p>'
            + '<p><b>Spreadsheet:</b> In grade 3 the numbers can be typed into a spreadsheet on the computer. Then the program draws the chart for you – and if you correct a number, the chart corrects itself.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'Læs diagrammet', en: 'Read the chart' },
        problem: { da: 'Se på stolpediagrammet ovenfor. Hvor mange børn har svaret i alt? Hvor mange flere har hund end fisk?', en: 'Look at the bar chart above. How many children answered in total? How many more have a dog than fish?' },
        steps: {
          da: ['Læg alle stolperne sammen: ' + m('6 + 5 + 2 + 3 = 16') + ' børn.', 'Hund: 6. Fisk: 2. ' + m('6 − 2 = 4') + ' flere.'],
          en: ['Add all the bars: ' + m('6 + 5 + 2 + 3 = 16') + ' children.', 'Dog: 6. Fish: 2. ' + m('6 − 2 = 4') + ' more.']
        },
        answer: { da: '16 børn; 4 flere.', en: '16 children; 4 more.' }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Skriv 7 med tællestreger.', en: 'Write 7 in tally marks.' }, a: { da: '卌 || (fem på tværs og to til).', en: '卌 || (a bundle of five and two more).' } },
          { q: { da: 'Hvor mange er 卌 卌 |||?', en: 'How many is 卌 卌 |||?' }, a: { da: '13 (5 + 5 + 3).', en: '13 (5 + 5 + 3).' } },
          { q: { da: 'I diagrammet ovenfor: hvilken stolpe er højest, og hvad betyder det?', en: 'In the chart above: which bar is tallest, and what does it mean?' }, a: { da: 'Hund – det er der flest, der har.', en: 'Dog – that is what most children have.' } },
          { q: { da: 'Tæl alle skoene i entréen derhjemme: hvor mange par er der af hver slags (sko, støvler, sandaler …)? Tegn et stolpediagram.', en: 'Count all the shoes in your hallway: how many pairs of each kind (shoes, boots, sandals …)? Draw a bar chart.' }, a: { da: 'Dit eget diagram. Skriv „flest“ og „færrest“ under det.', en: 'Your own chart. Write "most" and "fewest" under it.' } },
          { q: { da: 'Spørg 10 personer, hvilken farve de bedst kan lide. Lav en tælletabel og en tabel med antal.', en: 'Ask 10 people which colour they like best. Make a tally chart and a table with numbers.' }, a: { da: 'Din egen undersøgelse. Tjek: giver antallene tilsammen 10?', en: 'Your own investigation. Check: do the numbers add up to 10?' } },
          { q: { da: 'Hvad er forskellen på at tælle „kæledyr“ og at tælle „antal søskende“?', en: 'What is the difference between counting "pets" and counting "number of siblings"?' }, a: { da: 'Kæledyr er kategorier (ord). Antal søskende er tal (0, 1, 2, 3 …). Begge kan vises i et stolpediagram.', en: 'Pets are categories (words). Number of siblings are numbers (0, 1, 2, 3 …). Both can be shown in a bar chart.' } }
        ]
      }
    ]
  };

  /* ================================================================
     Chance
     ================================================================ */
  T['chance'] = {
    title: { da: 'Chance – muligt, umuligt og lige stor chance', en: 'Chance – possible, impossible and equally likely' },
    phase: [1, 3],
    summary: {
      da: 'Hvor stor er chancen? Lær ordene, gæt på forhånd, prøv med terninger og kugler – og find ud af, om et spil er fair.',
      en: 'How big is the chance? Learn the words, guess in advance, try with dice and marbles – and find out whether a game is fair.'
    },
    goals: {
      da: [
        'Eleven kan udtrykke intuitive chancestørrelser i hverdagssituationer og enkle spil.',
        'Eleven har viden om chancebegrebet.',
        'Eleven kan udtrykke chancestørrelse ud fra eksperimenter.',
        'Eleven har viden om chanceeksperimenter.'
      ],
      en: [
        'The pupil can express intuitive ideas of chance in everyday situations and simple games.',
        'The pupil has knowledge of the concept of chance.',
        'The pupil can express the size of a chance based on experiments.',
        'The pupil has knowledge of chance experiments.'
      ]
    },
    terms: [
      { da: 'chance', en: 'chance', def: { da: 'Hvor sandsynligt noget er', en: 'How likely something is' } },
      { da: 'muligt / umuligt', en: 'possible / impossible', def: { da: 'Kan ske / kan aldrig ske', en: 'Can happen / can never happen' } },
      { da: 'sikkert', en: 'certain', def: { da: 'Sker helt sikkert', en: 'Definitely happens' } },
      { da: 'lille chance / stor chance', en: 'small chance / big chance', def: { da: 'Sker sjældent / sker tit', en: 'Happens rarely / happens often' } },
      { da: 'lige stor chance', en: 'equally likely', def: { da: 'Fx plat eller krone – ingen af dem er mest sandsynlig', en: 'E.g. heads or tails – neither is more likely' } },
      { da: 'tilfældigt', en: 'random', def: { da: 'Man kan ikke vide, hvad der sker næste gang', en: 'You cannot know what will happen next time' } },
      { da: 'eksperiment', en: 'experiment', def: { da: 'At prøve mange gange og skrive resultaterne op', en: 'Trying many times and writing down the results' } },
      { da: 'fair', en: 'fair', def: { da: 'Når alle har lige stor chance for at vinde', en: 'When everyone has an equal chance of winning' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Ordene om chance', en: 'The words for chance' },
        body: {
          da: '<p>Læseplanen siger, at man i 1. klasse lærer at tale om chance med ord som <b>muligt, umuligt, lille chance, stor chance, størst chance, mindst chance</b> og <b>lige stor chance</b>. Prøv at sætte ord på:</p>'
            + '<table><tr><th>Hvad?</th><th>Chance</th></tr>'
            + '<tr><td>At det bliver mørkt i aften</td><td><b>sikkert</b></td></tr>'
            + '<tr><td>At slå en 7’er med en almindelig terning</td><td><b>umuligt</b> (der er kun 1–6)</td></tr>'
            + '<tr><td>At slå en 6’er</td><td><b>muligt</b>, men lille chance – 1 ud af 6</td></tr>'
            + '<tr><td>At slå <i>ikke</i> en 6’er</td><td>stor chance – 5 ud af 6</td></tr>'
            + '<tr><td>Plat eller krone</td><td><b>lige stor chance</b></td></tr>'
            + '<tr><td>At det sner i juli i Danmark</td><td>muligt, men meget lille chance</td></tr></table>'
            + '<p><b>Lodtrækning:</b> I en pose er der 1 rød og 5 blå kugler. Du tager én uden at kigge. Er der størst chance for rød eller blå? Blå – der er flest af dem. Er det umuligt at få rød? Nej, bare en lille chance. Læseplanen foreslår netop at sammenligne <i>forskellige lodtrækninger</i>: hvor er chancen mindst, størst, lige stor – og hvorfor?</p>',
          en: '<p>The curriculum says that in grade 1 you learn to talk about chance with words like <b>possible, impossible, small chance, big chance, biggest chance, smallest chance</b> and <b>equally likely</b>. Try putting words to these:</p>'
            + '<table><tr><th>What?</th><th>Chance</th></tr>'
            + '<tr><td>That it gets dark tonight</td><td><b>certain</b></td></tr>'
            + '<tr><td>Throwing a 7 with an ordinary die</td><td><b>impossible</b> (there are only 1–6)</td></tr>'
            + '<tr><td>Throwing a 6</td><td><b>possible</b>, but a small chance – 1 out of 6</td></tr>'
            + '<tr><td><i>Not</i> throwing a 6</td><td>big chance – 5 out of 6</td></tr>'
            + '<tr><td>Heads or tails</td><td><b>equally likely</b></td></tr>'
            + '<tr><td>Snow in July in Denmark</td><td>possible, but a very small chance</td></tr></table>'
            + '<p><b>Lucky dip:</b> A bag holds 1 red and 5 blue marbles. You take one without looking. Is red or blue more likely? Blue – there are more of them. Is red impossible? No, just a small chance. The curriculum suggests exactly this: compare <i>different draws</i> – where is the chance smallest, biggest, equal – and why?</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Gæt først – prøv så', en: 'Guess first – then try' },
        body: {
          da: '<p>I 3. klasse laver man <b>chanceeksperimenter</b>. Læseplanen beskriver det sådan: <b>forudsig</b>, hvor mange gange noget sker – <b>prøv</b> mange gange – <b>sammenlign</b>.</p>'
            + '<p><b>Eksperiment:</b> „Hvor mange 6’ere får jeg, hvis jeg kaster en terning 30 gange?“ (Det er præcis læseplanens eksempel.)</p>'
            + '<ol><li><b>Tænk over de mulige udfald:</b> 1, 2, 3, 4, 5 eller 6. Seks muligheder, og de er lige sandsynlige.</li>'
            + '<li><b>Gæt:</b> Hvert sjette kast bliver vel en 6’er – 30 : 6 = 5 gange. Cirka.</li>'
            + '<li><b>Kast 30 gange</b> og sæt en streg i en tælletabel for hvert tal.</li>'
            + '<li><b>Sammenlign:</b> Fik du 5? Måske fik du 3 eller 8. Det er ikke forkert – det er <b>tilfældigt</b>. Men kaster du 300 gange, kommer du tæt på hver sjette.</li></ol>',
          en: '<p>In grade 3 you do <b>chance experiments</b>. The curriculum describes it like this: <b>predict</b> how many times something happens – <b>try</b> many times – <b>compare</b>.</p>'
            + '<p><b>Experiment:</b> "How many 6s will I get if I throw a die 30 times?" (This is exactly the curriculum\'s example.)</p>'
            + '<ol><li><b>Think about the possible outcomes:</b> 1, 2, 3, 4, 5 or 6. Six possibilities, and they are equally likely.</li>'
            + '<li><b>Guess:</b> Every sixth throw should be a 6 – 30 ÷ 6 = 5 times. Roughly.</li>'
            + '<li><b>Throw 30 times</b> and make a tally mark for each number.</li>'
            + '<li><b>Compare:</b> Did you get 5? Maybe you got 3 or 8. That is not wrong – it is <b>random</b>. But if you throw 300 times, you get close to one in six.</li></ol>'
        }
      },
      { type: 'widget', widget: 'dice', opts: { dice: 1 }, title: { da: 'Terningsimulator – én terning', en: 'Dice simulator – one die' } },
      {
        type: 'text',
        title: { da: 'Er spillet fair? Dyreløbet', en: 'Is the game fair? The animal race' },
        body: {
          da: '<p>Undervisningsvejledningen beskriver et spil til 2. klasse: <b>dyreløb</b>. Dyrene står på baner med numrene 2–12. Man slår med <i>to</i> terninger og lægger øjnene sammen. Dyret på banen med den sum rykker ét felt frem. Første dyr i mål vinder.</p>'
            + '<p>Efter nogle spil opdager man noget: <b>banerne 6, 7 og 8 vinder næsten altid</b>, og bane 2 og 12 vinder næsten aldrig. Hvorfor? Sum 2 kan kun laves på én måde (1 + 1). Sum 7 kan laves på mange måder: 1 + 6, 2 + 5, 3 + 4, 4 + 3, 5 + 2, 6 + 1. Så spillet er <b>ikke fair</b> – det er ikke lige stor chance for alle dyr.</p>'
            + '<p>Læseplanen siger, at man kan undersøge, <i>om et spil er fair, ved at spille det mange gange</i> og se, om alle vinder cirka lige tit. Prøv: Er „plat eller krone“ fair? Er „hvem slår højest med én terning“ fair? Hvad med dyreløbet?</p>',
          en: '<p>The Ministry\'s teaching guide describes a grade 2 game: the <b>animal race</b>. The animals stand on lanes numbered 2–12. You throw <i>two</i> dice and add the spots. The animal on the lane with that total moves one square forward. The first animal home wins.</p>'
            + '<p>After a few games you notice something: <b>lanes 6, 7 and 8 almost always win</b>, and lanes 2 and 12 almost never. Why? A total of 2 can only be made one way (1 + 1). A total of 7 can be made many ways: 1 + 6, 2 + 5, 3 + 4, 4 + 3, 5 + 2, 6 + 1. So the game is <b>not fair</b> – the animals do not all have an equal chance.</p>'
            + '<p>The curriculum says you can find out <i>whether a game is fair by playing it many times</i> and seeing if everyone wins about equally often. Try: Is "heads or tails" fair? Is "who throws highest with one die" fair? What about the animal race?</p>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Er det muligt, umuligt eller sikkert: at trække en grøn kugle fra en pose med kun røde kugler?', en: 'Possible, impossible or certain: drawing a green marble from a bag with only red marbles?' }, a: { da: 'Umuligt.', en: 'Impossible.' } },
          { q: { da: 'I en pose er der 3 røde og 3 blå kugler. Hvad er chancen for rød – lille, stor eller lige stor?', en: 'A bag has 3 red and 3 blue marbles. What is the chance of red – small, big or equal?' }, a: { da: 'Lige stor chance for rød og blå.', en: 'Equal chance for red and blue.' } },
          { q: { da: 'Du kaster en terning 60 gange. Cirka hvor mange gange får du en 3’er?', en: 'You throw a die 60 times. About how many times do you get a 3?' }, a: { da: 'Cirka 10 (hvert sjette kast). Måske lidt flere eller færre – det er tilfældigt.', en: 'About 10 (every sixth throw). Maybe a few more or fewer – it is random.' } },
          { q: { da: 'To spillere: A vinder, hvis terningen viser 1 eller 2. B vinder, hvis den viser 3, 4, 5 eller 6. Er det fair?', en: 'Two players: A wins if the die shows 1 or 2. B wins if it shows 3, 4, 5 or 6. Is it fair?' }, a: { da: 'Nej. B har 4 ud af 6 chancer, A kun 2 ud af 6. Fair: A vinder på 1, 2, 3 og B på 4, 5, 6.', en: 'No. B has 4 out of 6 chances, A only 2 out of 6. Fair: A wins on 1, 2, 3 and B on 4, 5, 6.' } },
          { q: { da: 'I dyreløbet: hvilken bane ville du vælge til dit dyr? Hvorfor?', en: 'In the animal race: which lane would you choose for your animal? Why?' }, a: { da: 'Bane 7 – den sum kan laves på flest måder med to terninger.', en: 'Lane 7 – that total can be made in the most ways with two dice.' } },
          { q: { da: 'Kast en mønt 20 gange, og skriv op: plat eller krone. Fik du 10 og 10? Er mønten uærlig, hvis du ikke gjorde?', en: 'Toss a coin 20 times and write down heads or tails. Did you get 10 and 10? Is the coin unfair if you did not?' }, a: { da: 'Nej – med få kast er 8–12 og 12–8 helt normalt. Det er tilfældighed.', en: 'No – with few tosses, 8–12 and 12–8 are completely normal. That is randomness.' } }
        ]
      }
    ]
  };

  /* ================================================================
     Regnehistorier og gode forklaringer (Matematiske kompetencer)
     ================================================================ */
  T['regnehistorier'] = {
    title: { da: 'Regnehistorier og gode forklaringer', en: 'Story problems and good explanations' },
    phase: [1, 2, 3],
    summary: {
      da: 'Forstå historien, tegn den, brug klodser, find regnestykket, og forklar hvorfor. Sådan bliver du en matematik-detektiv.',
      en: 'Understand the story, draw it, use blocks, find the calculation, and explain why. That is how you become a maths detective.'
    },
    goals: {
      da: [
        'Problembehandling: Eleven kan bidrage til løsning af enkle matematiske problemer – og løse enkle matematiske problemer.',
        'Modellering: Eleven kan undersøge enkle hverdagssituationer ved brug af matematik – og tolke matematiske resultater i forhold til enkle hverdagssituationer.',
        'Ræsonnement og tankegang: Eleven kan stille og besvare matematiske spørgsmål – og give og følge uformelle matematiske forklaringer.',
        'Repræsentation og symbolbehandling: Eleven kan anvende konkrete, visuelle og enkle symbolske repræsentationer – og vise sin matematiske tænkning med uformelle skriftlige noter og tegninger.',
        'Kommunikation: Eleven kan anvende enkle fagord og begreber mundtligt og skriftligt.',
        'Hjælpemidler: Eleven kan anvende enkle hjælpemidler til tegning, beregning og undersøgelse – og anvende digitale værktøjer til undersøgelser, enkle tegninger og beregninger.'
      ],
      en: [
        'Problem solving: The pupil can contribute to solving simple mathematical problems – and solve simple mathematical problems.',
        'Modelling: The pupil can investigate simple everyday situations using mathematics – and interpret mathematical results in relation to simple everyday situations.',
        'Reasoning and thinking: The pupil can ask and answer mathematical questions – and give and follow informal mathematical explanations.',
        'Representation and symbols: The pupil can use concrete, visual and simple symbolic representations – and show their mathematical thinking with informal written notes and drawings.',
        'Communication: The pupil can use simple subject words and concepts orally and in writing.',
        'Tools: The pupil can use simple tools for drawing, calculating and investigating – and use digital tools for investigations, simple drawings and calculations.'
      ]
    },
    terms: [
      { da: 'regnehistorie', en: 'story problem', def: { da: 'En lille historie med tal, som man skal regne på', en: 'A little story with numbers that you have to calculate with' } },
      { da: 'regnestykke', en: 'calculation (number sentence)', def: { da: 'Historien skrevet med tal og tegn: 7 + 10 = 17', en: 'The story written with numbers and signs: 7 + 10 = 17' } },
      { da: 'tegning / skitse', en: 'drawing / sketch', def: { da: 'En hurtig tegning af historien', en: 'A quick drawing of the story' } },
      { da: 'konkrete materialer', en: 'concrete materials', def: { da: 'Klodser, centicubes, legepenge, knapper – ting man kan flytte på', en: 'Blocks, centicubes, play money, buttons – things you can move around' } },
      { da: 'forklaring', en: 'explanation', def: { da: 'At sige, hvordan du gjorde – og hvorfor', en: 'Saying how you did it – and why' } },
      { da: 'gæt og prøv efter', en: 'guess and check', def: { da: 'Prøv et tal, tjek, ret gættet', en: 'Try a number, check, adjust' } },
      { da: 'hjælpemidler', en: 'tools', def: { da: 'Tallinje, lineal, klodser, lommeregner, tablet', en: 'Number line, ruler, blocks, calculator, tablet' } }
    ],
    sections: [
      {
        type: 'text',
        title: { da: 'Fire spørgsmål til enhver regnehistorie', en: 'Four questions for every story problem' },
        body: {
          da: '<p>En <b>regnehistorie</b> er en lille historie, hvor der gemmer sig et regnestykke. Sådan finder du det:</p>'
            + '<ol>'
            + '<li><b>Hvad sker der?</b> Fortæl historien med dine egne ord. Er der noget, der kommer til? Forsvinder? Deles?</li>'
            + '<li><b>Hvad ved jeg?</b> Find tallene, og hvad de er (kroner, børn, æbler).</li>'
            + '<li><b>Hvad skal jeg finde ud af?</b> Hvad er spørgsmålet?</li>'
            + '<li><b>Giver svaret mening?</b> Læseplanen siger, at man skal „vurdere, om resultatet ser ud til at kunne passe“. Hvis du får 100 æbler ud af en historie om 5 æbler, er noget galt.</li>'
            + '</ol>'
            + '<p><b>Eksempel (fra undervisningsvejledningen):</b> <i>Albert har 7 kroner. Han får 10 kroner mere. Hvor mange har han nu?</i></p>'
            + '<p>Hvad sker der? Der kommer penge <i>til</i> → plus. Hvad ved jeg? 7 kr. og 10 kr. Hvad skal jeg finde? Hvor mange i alt. Regnestykke: ' + m('7 + 10 = 17') + '. Giver det mening? Ja, han har flere end før.</p>',
          en: '<p>A <b>story problem</b> is a little story with a calculation hidden inside. Here is how to find it:</p>'
            + '<ol>'
            + '<li><b>What is happening?</b> Tell the story in your own words. Is something being added? Taken away? Shared?</li>'
            + '<li><b>What do I know?</b> Find the numbers and what they are (kroner, children, apples).</li>'
            + '<li><b>What do I need to find out?</b> What is the question?</li>'
            + '<li><b>Does the answer make sense?</b> The curriculum says you should "judge whether the result looks like it could be right". If you get 100 apples out of a story about 5 apples, something is wrong.</li>'
            + '</ol>'
            + '<p><b>Example (from the Ministry\'s teaching guide):</b> <i>Albert has 7 kroner. He gets 10 kroner more. How many does he have now?</i></p>'
            + '<p>What is happening? Money is <i>added</i> → plus. What do I know? 7 kr. and 10 kr. What must I find? How many in total. Calculation: ' + m('7 + 10 = 17') + '. Does it make sense? Yes, he has more than before.</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Tegn det, byg det, skriv det', en: 'Draw it, build it, write it' },
        body: {
          da: '<p>Læseplanen siger, at man i 1.–3. klasse først bruger <b>konkrete ting</b>, så <b>tegninger</b>, og til sidst <b>tal og tegn</b>. Alle tre er gode – brug den, der hjælper dig:</p>'
            + '<ul>'
            + '<li><b>Byg det:</b> 7 klodser og 10 klodser. Tæl. Eller læg legepenge frem.</li>'
            + '<li><b>Tegn det:</b> 7 streger og 10 streger. Eller hop på en tallinje: start i 7, hop 10 frem.</li>'
            + '<li><b>Skriv det:</b> ' + m('7 + 10 = 17') + '. Det er det korteste – men det betyder det samme som klodserne.</li>'
            + '</ul>'
            + '<p><b>Egne noter:</b> Når regnestykkerne bliver større, må du gerne skrive små noter undervejs: „40 + 30 = 70, 8 + 4 = 12, 70 + 12 = 82“. Læseplanen kalder det „uformelle skriftlige noter og tegninger“ – de er der for at hjælpe <i>dig</i> med at huske, hvad du tænkte.</p>'
            + '<p><b>Sidder du fast?</b> Gæt og prøv efter! „Måske er svaret 20? Tjek: 7 + 10 … nej, det er 17.“ Eller prøv med mindre tal først. Eller del historien op i to små historier.</p>',
          en: '<p>The curriculum says that in grades 1–3 you first use <b>concrete things</b>, then <b>drawings</b>, and finally <b>numbers and signs</b>. All three are good – use the one that helps you:</p>'
            + '<ul>'
            + '<li><b>Build it:</b> 7 blocks and 10 blocks. Count. Or put out play money.</li>'
            + '<li><b>Draw it:</b> 7 lines and 10 lines. Or jump on a number line: start at 7, jump 10 forward.</li>'
            + '<li><b>Write it:</b> ' + m('7 + 10 = 17') + '. That is the shortest – but it means the same as the blocks.</li>'
            + '</ul>'
            + '<p><b>Your own notes:</b> When the calculations get bigger, you may write little notes along the way: "40 + 30 = 70, 8 + 4 = 12, 70 + 12 = 82". The curriculum calls these "informal written notes and drawings" – they are there to help <i>you</i> remember what you were thinking.</p>'
            + '<p><b>Stuck?</b> Guess and check! "Maybe the answer is 20? Check: 7 + 10 … no, that is 17." Or try smaller numbers first. Or split the story into two small stories.</p>'
        }
      },
      {
        type: 'example',
        title: { da: 'En historie med to trin', en: 'A story with two steps' },
        problem: { da: 'Sofie har 12 klistermærker. Hun giver 4 til sin bror og får 6 nye af sin mor. Hvor mange har hun nu?', en: 'Sofie has 12 stickers. She gives 4 to her brother and gets 6 new ones from her mum. How many does she have now?' },
        steps: {
          da: [
            '<b>Hvad sker der?</b> Først forsvinder nogle (minus), så kommer der nogle til (plus).',
            '<b>Tegn eller byg:</b> 12 klodser. Tag 4 væk → 8. Læg 6 til → 14.',
            '<b>Skriv:</b> ' + m('12 − 4 = 8') + ' og ' + m('8 + 6 = 14') + '.',
            '<b>Giver det mening?</b> Hun gav 4 væk og fik 6 – så hun skulle have 2 flere end før. 12 + 2 = 14. Ja!',
            '<b>Forklar:</b> „Jeg trak 4 fra, fordi hun gav dem væk. Så lagde jeg 6 til, fordi hun fik nye.“'
          ],
          en: [
            '<b>What is happening?</b> First some go away (minus), then some come in (plus).',
            '<b>Draw or build:</b> 12 blocks. Take 4 away → 8. Add 6 → 14.',
            '<b>Write:</b> ' + m('12 − 4 = 8') + ' and ' + m('8 + 6 = 14') + '.',
            '<b>Does it make sense?</b> She gave 4 away and got 6 – so she should have 2 more than before. 12 + 2 = 14. Yes!',
            '<b>Explain:</b> "I subtracted 4 because she gave them away. Then I added 6 because she got new ones."'
          ]
        },
        answer: { da: '14 klistermærker', en: '14 stickers' }
      },
      {
        type: 'text',
        title: { da: 'Forklar hvorfor – ikke bare hvordan', en: 'Explain why – not just how' },
        body: {
          da: '<p>Læseplanen siger noget vigtigt: en god forklaring skal indeholde en <b>begrundelse</b> – ikke bare en beskrivelse af, hvad man gjorde. Forskellen:</p>'
            + '<ul><li>„Jeg tog 12 minus 4 og så plus 6.“ – det er <i>hvordan</i>.</li>'
            + '<li>„Jeg tog minus 4, <b>fordi</b> hun gav dem væk, og plus 6, <b>fordi</b> hun fik nye.“ – det er <i>hvorfor</i>. Meget bedre!</li></ul>'
            + '<p>Brug ordet <b>„fordi“</b>. Og brug de rigtige matematik-ord, når du forklarer: plus, minus, gange, tiere, enere, lige tal, trekant, tungere end …</p>'
            + '<p><b>Stil selv spørgsmål:</b> Matematik-detektiver spørger: „Hvad nu hvis Albert fik 10 kr. hver uge?“ (Så bliver det 7, 17, 27, 37 … – et mønster!) „Kan det passe?“ „Er der en anden måde?“</p>',
          en: '<p>The curriculum says something important: a good explanation must include a <b>reason</b> – not just a description of what you did. The difference:</p>'
            + '<ul><li>"I did 12 minus 4 and then plus 6." – that is <i>how</i>.</li>'
            + '<li>"I did minus 4 <b>because</b> she gave them away, and plus 6 <b>because</b> she got new ones." – that is <i>why</i>. Much better!</li></ul>'
            + '<p>Use the word <b>"because"</b>. And use the proper maths words when you explain: plus, minus, times, tens, ones, even number, triangle, heavier than …</p>'
            + '<p><b>Ask your own questions:</b> Maths detectives ask: "What if Albert got 10 kr. every week?" (Then it becomes 7, 17, 27, 37 … – a pattern!) "Can that be right?" "Is there another way?"</p>'
        }
      },
      {
        type: 'text',
        title: { da: 'Hjælpemidler – vælg det rigtige', en: 'Tools – choose the right one' },
        body: {
          da: '<table><tr><th>Du skal …</th><th>Brug …</th></tr>'
            + '<tr><td>tælle eller lægge små tal sammen</td><td>fingre, klodser, tallinje</td></tr>'
            + '<tr><td>se, hvordan tal er bygget op</td><td>tistænger og enere, legepenge</td></tr>'
            + '<tr><td>tegne en lige streg eller måle</td><td>lineal</td></tr>'
            + '<tr><td>regne med store tal</td><td>lommeregner – men gæt cirka-svaret først</td></tr>'
            + '<tr><td>tegne figurer præcist</td><td>et geometriprogram på tablet eller computer</td></tr>'
            + '<tr><td>vise en optælling</td><td>ternet papir eller et regneark</td></tr></table>'
            + '<p>Læseplanen siger, at lommeregner, regneark, apps og geometriprogrammer er „en naturlig del af undervisningen“ allerede i 1.–3. klasse. Det vigtige er at vide, <i>hvornår</i> hvad er smart.</p>',
          en: '<table><tr><th>You need to …</th><th>Use …</th></tr>'
            + '<tr><td>count or add small numbers</td><td>fingers, blocks, number line</td></tr>'
            + '<tr><td>see how numbers are built</td><td>ten-rods and ones, play money</td></tr>'
            + '<tr><td>draw a straight line or measure</td><td>ruler</td></tr>'
            + '<tr><td>calculate with big numbers</td><td>calculator – but guess the rough answer first</td></tr>'
            + '<tr><td>draw shapes accurately</td><td>a geometry program on a tablet or computer</td></tr>'
            + '<tr><td>show a count</td><td>squared paper or a spreadsheet</td></tr></table>'
            + '<p>The curriculum says calculators, spreadsheets, apps and geometry programs are "a natural part of teaching" already in grades 1–3. What matters is knowing <i>when</i> each one is smart.</p>'
        }
      },
      {
        type: 'practice',
        items: [
          { q: { da: 'Der er 8 fugle i et træ. 3 flyver væk. Hvor mange er der tilbage? Skriv regnestykket, og forklar med „fordi“.', en: 'There are 8 birds in a tree. 3 fly away. How many are left? Write the calculation and explain with "because".' }, a: { da: m('8 − 3 = 5') + '. „Minus, fordi der flyver nogle væk.“', en: m('8 − 3 = 5') + '. "Minus, because some fly away."' } },
          { q: { da: 'Lav selv en regnehistorie, der passer til ' + m('6 + 9') + '.', en: 'Make up a story problem that fits ' + m('6 + 9') + '.' }, a: { da: 'Fx: „Jonas har 6 biler og får 9 i fødselsdagsgave. Hvor mange har han nu?“ (15)', en: 'E.g.: "Jonas has 6 cars and gets 9 as a birthday present. How many does he have now?" (15)' } },
          { q: { da: 'En pose har 20 bolsjer. 4 børn deler dem lige. Hvor mange får hver? Tegn det først.', en: 'A bag has 20 sweets. 4 children share them equally. How many does each get? Draw it first.' }, a: { da: '5. Tegn 4 børn og del ud ét bolsje ad gangen – eller ' + m('20 : 4 = 5') + '.', en: '5. Draw 4 children and hand out one sweet at a time – or ' + m('20 ÷ 4 = 5') + '.' } },
          { q: { da: 'Mia regner: „15 børn i klassen, 3 er syge, så er der 18 i skole.“ Giver det mening?', en: 'Mia calculates: "15 children in the class, 3 are ill, so 18 are at school." Does that make sense?' }, a: { da: 'Nej – der kan ikke være flere i skole, end der er i klassen. Det skal være minus: 15 − 3 = 12.', en: 'No – there cannot be more at school than there are in the class. It should be minus: 15 − 3 = 12.' } },
          { q: { da: 'Albert får 10 kr. hver uge og starter med 7 kr. Hvor mange har han efter 4 uger? Lav en tabel.', en: 'Albert gets 10 kr. every week and starts with 7 kr. How much does he have after 4 weeks? Make a table.' }, a: { da: 'Uge 1: 17, uge 2: 27, uge 3: 37, uge 4: 47 kr. Mønster: bagerste tal er altid 7.', en: 'Week 1: 17, week 2: 27, week 3: 37, week 4: 47 kr. Pattern: the last digit is always 7.' } },
          { q: { da: 'Hvilket hjælpemiddel ville du bruge til at finde ud af, hvor lang tavlen er? Og til 348 + 276?', en: 'Which tool would you use to find out how long the whiteboard is? And for 348 + 276?' }, a: { da: 'Målebånd (eller lineal). Lommeregner – efter et overslag: cirka 350 + 280 = 630. (Præcist: 624.)', en: 'Tape measure (or ruler). Calculator – after an estimate: about 350 + 280 = 630. (Exactly: 624.)' } }
        ]
      }
    ]
  };
})();
