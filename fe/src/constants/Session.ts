import { USER, UserType } from './User'

export interface SessionCommentType {
  user: UserType
  comment: string
}

export const SESSION_COMMENTS = [
  {
    title: '새싹이 입장에서 바라본 성장 이야기',
    comments: [
      {
        user: USER.haebin,
        comment:
          '저는 이번에 대규모 트래픽을 경험해봤어요. 백엔드 개발자로서 한 발자국 다가간 느낌',
      },
      {
        user: USER.suji,
        comment:
          '저는 이번에 스터디를 통해서 성장했어요. 제 이야기 한 번 들어보시겠어요?',
      },
      {
        user: USER.taeheon,
        comment: '코드리뷰를 처음으로 경험하면서 협업의 가치를 개달았어요',
      },
      {
        user: USER.namu,
        comment:
          '여러분의 성장 이야기를 듣고싶어요. 아래 연사자 신청하기 버튼을 눌러 새싹콘 현장에서 여러분의 경험을 공유해주세요!',
      },
    ],
  },
  {
    title: '우리 같이 친해져요',
    comments: [
      {
        user: USER.yujin,
        comment: '저는 Kotlin에 대해서 같이 수다를 떨고 싶어요!',
      },
      {
        user: USER.sessak,
        comment:
          '저는 개발자 친구를 만들고 싶어요! 저란 Github 맞팔 하지 않으실래요?',
      },
      {
        user: USER.hyeonho,
        comment: '저는 2024년 계획에 대해 같이 이야기 해보고 싶어요!',
      },
      {
        user: USER.namu,
        comment:
          '이 세션은 자유롭게 대화하고 소통하면서 참가자끼리 서로 네트워킹할 수 있는 세션이에요 이 세션에서 많은 개발자와 소통해보세요',
      },
    ],
  },
  {
    title: 'I WANT YOU',
    comments: [
      {
        user: USER.siyeon,
        comment:
          '모든 새싹이 잎새를 틔우는 그날까지! 새잎 스터디의 팀원을 구해요!',
      },
      {
        user: USER.yeseul,
        comment: '새싹콘서트 클론코딩 프로젝트 프론트엔드 팀원 구해요!',
      },
      {
        user: USER.sessak,
        comment: '모각코의 힘을 믿으시나요? 매주 같이 코딩하며 달려봐요!',
      },
      {
        user: USER.namu,
        comment:
          '어떤 형태의 모임이든 좋아요. 아래 연사자 신청하기 버튼을 눌러 새싹콘 현장에서 좋은 팀원을 모집해보세요!',
      },
    ],
  },
]
