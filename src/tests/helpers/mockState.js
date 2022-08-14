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

export const initialStateMockWithoutRank = {
  player: {
    name: 'rafael',
    assertions: 0,
    score: 0,
    gravatarEmail: 'email@email.com'
  },
  game: {
    questions: {
      response_code: 0,
      results: [
        {
          category: 'History',
          type: 'multiple',
          difficulty: 'medium',
          question: 'In relation to the British Occupation in Ireland, what does the IRA stand for.',
          correct_answer: 'Irish Republican Army',
          incorrect_answers: [
            'Irish Rebel Alliance',
            'Irish Reformation Army',
            'Irish-Royal Alliance'
          ]
        },
        {
          category: 'Entertainment: Video Games',
          type: 'multiple',
          difficulty: 'easy',
          question: 'Which character in the &quot;Animal Crossing&quot; series uses the phrase &quot;zip zoom&quot; when talking to the player?',
          correct_answer: 'Scoot',
          incorrect_answers: [
            'Drake',
            'Bill',
            'Mallary'
          ]
        },
        {
          category: 'Celebrities',
          type: 'multiple',
          difficulty: 'easy',
          question: 'By which name is Ramon Estevez better known as?',
          correct_answer: 'Martin Sheen',
          incorrect_answers: [
            'Charlie Sheen',
            'Ramon Sheen',
            'Emilio Estevez'
          ]
        },
        {
          category: 'Geography',
          type: 'boolean',
          difficulty: 'medium',
          question: 'The title of the 1969 film &quot;Krakatoa, East_of Java&quot; is incorrect, as Krakatoa is in fact west of Java.',
          correct_answer: 'True',
          incorrect_answers: [
            'False'
          ]
        },
        {
          category: 'Entertainment: Film',
          type: 'multiple',
          difficulty: 'easy',
          question: 'What historical time period was the center of the Assassin&rsquo;s Creed movie (2016)?',
          correct_answer: 'Spanish Inquisition',
          incorrect_answers: [
            'Victorian England',
            'French Revolution',
            'Colonial America'
          ]
        }
      ]
    },
    resposta: [],
    index: 0
  }
}