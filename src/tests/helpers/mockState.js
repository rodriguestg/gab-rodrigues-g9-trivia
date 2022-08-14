export const initialStateMock = {
  player: {
    name: 'pessoa',
    assertions: 0,
    score: 0,
    gravatarEmail: 'email@email.com'
  },
  game: {
    questions: {
      response_code: 0,
      results: [
        {
          category: 'Sports',
          type: 'multiple',
          difficulty: 'medium',
          question: 'A stimpmeter measures the speed of a ball over what surface?',
          correct_answer: 'Golf Putting Green',
          incorrect_answers: [
            ' Football Pitch',
            'Cricket Outfield',
            'Pinball Table'
          ]
        },
        {
          category: 'Entertainment: Music',
          type: 'multiple',
          difficulty: 'hard',
          question: 'Who had a 1981 hit with the song &quot;Japanese Boy&quot;?',
          correct_answer: 'Aneka',
          incorrect_answers: [
            'Toyah',
            'Sandra',
            'Madonna'
          ]
        },
        {
          category: 'Entertainment: Video Games',
          type: 'multiple',
          difficulty: 'easy',
          question: 'What ingredient is NOT used to craft a cake in Minecraft?',
          correct_answer: 'Bread',
          incorrect_answers: [
            'Wheat',
            'Milk',
            'Egg'
          ]
        },
        {
          category: 'Entertainment: Music',
          type: 'multiple',
          difficulty: 'medium',
          question: 'Which of these Johns was murdered by gunshots outside the Dakota in New York in 1980?',
          correct_answer: 'John Lennon',
          incorrect_answers: [
            'Johnny Thunders',
            'John Denver',
            'John Cascella'
          ]
        },
        {
          category: 'General Knowledge',
          type: 'multiple',
          difficulty: 'easy',
          question: 'Foie gras is a French delicacy typically made from what part of a duck or goose?',
          correct_answer: 'Liver',
          incorrect_answers: [
            'Heart',
            'Stomach',
            'Intestines'
          ]
        }
      ]
    },
    resposta: [],
    index: 0
  }
}

export const initialStateTokenMock = {
  player: {
    name: 'pessoa',
    assertions: 0,
    score: 0,
    gravatarEmail: 'email@email.com'
  },
  game: {
    questions: {
      response_code: 3,
      results: []
    },
    resposta: [],
    index: 0
  }
}
