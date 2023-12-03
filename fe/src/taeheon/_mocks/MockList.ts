const MOCK_LIST = [
  {
    category: '참가 신청',
    list: [
      {
        id: 1,
        question: '새싹콘 참가신청은 어떻게 하나요?',
        answer: '우측 상단 참가 신청 버튼을 통해 신청이 가능합니다.',
        highlightText: ['참가 신청'],
      },
      {
        id: 2,
        question: '참가자는 어떻게 선정하나요?',
        answer: '참가 신청자 중 무작위 50명을 선정합니다.',
        highlightText: ['무작위 50명을 선정'],
      },
      {
        id: 3,
        question: '신청할 때 작성한 정보를 수정할 수 있나요?',
        answer:
          '수정이 필요할 경우, saessakconcert@gmail.com로 수정 요청 메일을 보내주시면 수정을 도와드립니다. 단, 양도 목적의 개인정보 수정은 불가능합니다.',
        highlightText: [
          'saessakconcert@gmail.com',
          '양도 목적의 개인정보 수정은 불가능',
        ],
      },
      {
        id: 4,
        question: '행사 참여는 무료인가요?',
        answer:
          '행사 참여는 무료입니다.\n 최종 참가자로 선발될 경우, 응답 이메일로 안내드립니다.',
        highlightText: ['무료', '응답 이메일로 안내'],
      },
      {
        id: 5,
        question: '참가 신청이 정상적으로 잘 되었나요?',
        answer:
          '참가 신청 폼을 작성한 이메일로 응답 사본을 보내드려요. 응답 이메일을 정상적으로 받으셨다면, 12월 22일 최종 선발자 발표를 기다려 주세요!',
        highlightText: ['12월 22일 최종 선발자 발표'],
      },
      {
        id: 6,
        question: '선정 결과는 언제 확인할 수 있나요?',
        answer:
          '12월 22일에 응답 이메일로 선정 결과를 안내드려요. 이후에도, 취소로 인해 공석이 발생하면 충원을 위해서 12월 31일까지 꾸준히 이메일로 안내드릴 예정이에요.',
        highlightText: ['12월 22일'],
      },
      {
        id: 7,
        question: '참가를 신청했지만 갈 수 없게 되었어요. 어떻게 해야 하나요? ',
        answer:
          '참여가 어려울 경우, saessakconcert@gmail.com로 참여 취소 요청을 보내주시면 취소를 도와드립니다. 원할한 행사 진행을 위해 No-Show는 피해주세요.',
        highlightText: ['saessakconcert@gmail.com'],
      },
      {
        id: 8,
        question: '당일 어떻게 입장하나요?',
        answer: '행사장소에서 Staff의 안내를 따라주세요.',
        highlightText: ['행사장소', 'Staff의 안내'],
      },
    ],
  },
]

export default MOCK_LIST
