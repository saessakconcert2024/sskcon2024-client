import { suitBold } from '@/_styles/fonts/fonts'
import classes from './questionAndAnswer.module.css'
import DownArrowIcon from '../Icons/DownArrowIcon'
import UpArrowIcon from '../Icons/UpArrowIcon'

type QuestionAndAnswerProps = {
  id: number
  question: string
  answer: string
  active: boolean
  onSectionClick: (id: number) => void
}

export default function QuestionAndAnswer({
  id,
  question,
  answer,
  active,
  onSectionClick,
}: QuestionAndAnswerProps) {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onSectionClick(id)
    }
  }

  return (
    <div className={`${classes.container} ${active ? classes.active : ''}`}>
      <div
        className={`${classes.question_container} ${suitBold.className}`}
        onKeyDown={handleKeyPress}
        onClick={() => onSectionClick(id)}
        role="button"
        tabIndex={0}
      >
        <div>Q. {question}</div>
        {active ? <UpArrowIcon /> : <DownArrowIcon />}
      </div>
      <div
        className={`${classes.answer_container} ${
          active ? classes.active : ''
        }`}
      >
        {answer}
      </div>
    </div>
  )
}
