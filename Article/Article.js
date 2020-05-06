/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Cat Ipsum',
    date: 'Jan 1st, 2019',
    firstParagraph: `Meow all night having their mate disturbing sleeping humans lick yarn hanging out of own butt, pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now but white cat sleeps on a black shirt. Meow behind the couch, or throw down all the stuff in the kitchen ears back wide eyed find something else more interesting. Hide at bottom of staircase to trip human cat is love, cat is life and i could pee on this if i had the energy. Decide to want nothing to do with my owner today mrow. Cough furball jump five feet high and sideways when a shadow moves yet meowing non stop for food get video posted to internet for chasing red dot rub face on owner meow meow, i tell my human. Refuse to drink water except out of someone’s glass. Hide from vacuum cleaner lick butt and make a weird face so chirp at birds purr for no reason. Spit up on light gray carpet instead of adjacent linoleum scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food but cat not kitten around bleghbleghvomit my furball really tie the room together so hide from vacuum cleaner yet ignore the squirrels, you’ll never catch them anyway. Lay on arms while you’re using the keyboard. Chew on cable jump around on couch, meow constantly until given food, but i just saw other cats inside the house and nobody ask me before using my litter box or play riveting piece on synthesizer keyboard meowing chowing and wowing under the bed mice. `,

    secondParagraph: `Plays league of legends stare out the window. Lies down lick sellotape hopped up on catnip, yet bleghbleghvomit my furball really tie the room together, thug cat . Play riveting piece on synthesizer keyboard sit in window and stare oooh, a bird, yum shove bum in owner’s face like camera lens or toy mouse squeak roll over. Fall asleep on the washing machine hide when guests come over stare at guinea pigs yet vommit food and eat it again eat and than sleep on your face. Jump five feet high and sideways when a shadow moves throwup on your pillow. Missing until dinner time. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now nap all day flop over, so missing until dinner time, for see owner, run in terror sun bathe. Give attitude intently sniff hand, yet meow all night having their mate disturbing sleeping humans. Lounge in doorway chase imaginary bugs.? `,

    thirdParagraph: `Scream at teh bath. My left donut is missing, as is my right the dog smells bad and loves cheeseburgers, refuse to drink water except out of someone’s glass. Flee in terror at cucumber discovered on floor sleep nap or gnaw the corn cob give me attention or face the wrath of my claws. Lounge in doorway groom yourself 4 hours – checked, have your beauty sleep 18 hours – checked, be fabulous for the rest of the day – checked so poop on grasses, but refuse to leave cardboard box and small kitty warm kitty little balls of fur so walk on car leaving trail of paw prints on hood and windshield eat the fat cats food. Ears back wide eyed kitty poochy and jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans but playing with balls of wool find something else more interesting, cough furball.`
  }
];

/* X Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  Hint: You will need to use createElement more than once here!
 X Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  X Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  X Step 3: return the entire component.
*/

// where it will all go the container

const articles = document.querySelector('.articles')

//function to make new articles

function makeArticles(articleAttrs) {
  const { title, date, firstParagraph, secondParagraph, thirdParagraph } = articleAttrs
//set elements
  const article = document.createElement('div')
  const theTitle = document.createElement('h2')
  const theDate = document.createElement('p')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const button = document.createElement('span')

  //structure elements

  article.appendChild(theTitle)
  article.appendChild(theDate)
  article.appendChild(p1)
  article.appendChild(p2)
  article.appendChild(p3)
  article.appendChild(button)

  //add classes where needed

  article.classList.add('article')
  theDate.classList.add('date')
  button.classList.add('article','expandButton')
  // <div class="article">
  //   <h2>{title of the article}</h2>
  //   <p class="date">{date of the article}</p>

  //   {three separate paragraph elements}

  //   <span class='expandButton'></span>
  // </div>

//add text content
theTitle.textContent = title
theDate.textContent = date
p1.textContent = firstParagraph
p2.textContent = secondParagraph
p3.textContent = thirdParagraph


button.addEventListener('click', (event) => {
  //toggle open and shut of article with article-open
  article.classList.toggle('article-open')
})

//return the article
  return article
}// make article function complete

// Step 4: Map over the data, creating a component for each object and add each component to the DOM as children of the 'articles' div.

data.map(articleAttrs => {
  const article = makeArticles(articleAttrs)
  articles.appendChild(article)
})

// Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.


// //check
const theArticle = makeArticles({ title: 'a title', date: '2020/05/05', firstParagraph: 'whatever 1', secondParagraph: 'whatever 2', thirdParagraph: 'whatever 3' })
articles.appendChild(theArticle)