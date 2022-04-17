const arrayButtons = [
  {
    id: 1,
    mainClass: 'display',
    secondClass: 'display__indicator',
    thirdClass: 'display__text',
    remove: true,
  },
  {
    id: 2,
    mainClass: 'operations',
    secondClass: 'button__small',
    buttons: [
      {id: 1, text: '/'},
      {id: 2, text: 'x'},
      {id: 3, text: '-'},
      {id: 4, text: '+'}
    ],
    remove: true,
  },
  {
    id: 3,
    mainClass: 'numbers',
    secondClass: 'button__normal',
    buttons: [
      {id: 5, text: '7'},
      {id: 6, text: '8'},
      {id: 7, text: '9'},
      {id: 8, text: '4'},
      {id: 9, text: '5'},
      {id: 10, text: '6'},
      {id: 11, text: '1'},
      {id: 12, text: '2'},
      {id: 13, text: '3'},
      {id: 14, text: '0'},
      {id: 15, text: ','},
    ],
    remove: true,
  },
  {
    id: 4,
    mainClass: 'equal',
    secondClass: 'button__huge',
    thirdClass: 'button__equal',
    buttons: [
      {id: 16, text: '='},
    ],
    remove: true,
  }
]

module.exports.arrayButtons = arrayButtons
