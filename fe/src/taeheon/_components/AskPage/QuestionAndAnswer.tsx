import { suitBold } from '@/_styles/fonts/fonts'
import classes from './questionAndAnswer.module.css'
import DownArrowIcon from '../Icons/DownArrowIcon'
import UpArrowIcon from '../Icons/UpArrowIcon'
import HighlightText from './HighlightText'

type QuestionAndAnswerProps = {
  id: number
  question: string
  answer: string
  active: boolean
  highlightText: string[]
  onSectionClick: (id: number) => void
}

export default function QuestionAndAnswer({
  id,
  question,
  answer,
  active,
  onSectionClick,
  highlightText,
}: QuestionAndAnswerProps) {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onSectionClick(id)
    }
  }

  const renderAnswer = () => {
    const highlights = highlightText || []

    const parts = answer.split(new RegExp(`(${highlights.join('|')})`, 'gi'))

    return parts.map((part, index) =>
      highlights.some(
        (highlight) => highlight.toLowerCase() === part.toLowerCase(),
      ) ? (
        // eslint-disable-next-line react/no-array-index-key
        <HighlightText key={index} text={part} />
      ) : (
        part
      ),
    )
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
        {renderAnswer()}
      </div>
    </div>
  )
}
