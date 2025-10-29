const questions = [
  {
    id: 1,
    q: 'Skin type?',
    opts: [
      {id:'a', text:'Dry', score:{vata:2,pitta:0,kapha:0}},
      {id:'b', text:'Oily', score:{vata:0,pitta:2,kapha:0}},
      {id:'c', text:'Balanced', score:{vata:0,pitta:0,kapha:2}},
    ]
  },
  {
    id: 2,
    q: 'Body build?',
    opts: [
      {id:'a', text:'Thin', score:{vata:2,pitta:0,kapha:0}},
      {id:'b', text:'Muscular/medium', score:{vata:0,pitta:2,kapha:0}},
      {id:'c', text:'Heavier', score:{vata:0,pitta:0,kapha:2}},
    ]
  },
  {
    id: 3,
    q: 'Hair type?',
    opts: [
      {id:'a', text:'Dry', score:{vata:2,pitta:0,kapha:0}},
      {id:'b', text:'Oily/thick', score:{vata:0,pitta:1,kapha:1}},
      {id:'c', text:'Thick & oily', score:{vata:0,pitta:0,kapha:2}},
    ]
  },
  {
    id: 4,
    q: 'Eyes (size/brightness)?',
    opts: [
      {id:'a', text:'Small/bright', score:{vata:2,pitta:0,kapha:0}},
      {id:'b', text:'Medium/bright', score:{vata:0,pitta:2,kapha:0}},
      {id:'c', text:'Large/soft', score:{vata:0,pitta:0,kapha:2}},
    ]
  },
  {
    id: 5,
    q: 'Mindset (general)?',
    opts: [
      {id:'a', text:'Restless/creative', score:{vata:2,pitta:0,kapha:0}},
      {id:'b', text:'Intense/focused', score:{vata:0,pitta:2,kapha:0}},
      {id:'c', text:'Calm/steady', score:{vata:0,pitta:0,kapha:2}},
    ]
  },
  {
    id: 6,
    q: 'Memory?',
    opts: [
      {id:'a', text:'Forgets often', score:{vata:2,pitta:0,kapha:0}},
      {id:'b', text:'Good memory', score:{vata:0,pitta:2,kapha:0}},
      {id:'c', text:'Slow but steady', score:{vata:0,pitta:0,kapha:2}},
    ]
  },
  {
    id: 7,
    q: 'Diet preference?',
    opts: [
      {id:'a', text:'Dry/light foods', score:{vata:2,pitta:0,kapha:0}},
      {id:'b', text:'Spicy/hot foods', score:{vata:0,pitta:2,kapha:0}},
      {id:'c', text:'Heavy/oily/sweet', score:{vata:0,pitta:0,kapha:2}},
    ]
  },
  {
    id: 8,
    q: 'Sleep pattern?',
    opts: [
      {id:'a', text:'Light/fragmented', score:{vata:2,pitta:0,kapha:0}},
      {id:'b', text:'Moderate', score:{vata:0,pitta:2,kapha:0}},
      {id:'c', text:'Deep', score:{vata:0,pitta:0,kapha:2}},
    ]
  },
  {
    id: 9,
    q: 'Energy through day?',
    opts: [
      {id:'a', text:'Variable/peaks', score:{vata:2,pitta:0,kapha:0}},
      {id:'b', text:'Consistent/medium', score:{vata:0,pitta:2,kapha:0}},
      {id:'c', text:'Slow/steady', score:{vata:0,pitta:0,kapha:2}},
    ]
  },
  {
    id: 10,
    q: 'Weather preference?',
    opts: [
      {id:'a', text:'Warm', score:{vata:2,pitta:0,kapha:0}},
      {id:'b', text:'Cool', score:{vata:0,pitta:2,kapha:0}},
      {id:'c', text:'Warm & dry', score:{vata:0,pitta:0,kapha:2}},
    ]
  }
];

export default questions;