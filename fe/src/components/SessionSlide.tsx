import { SessionCommentType } from '@/constants/Session'
import style from '../style/SessionSlide.module.css'

interface SessionProps {
  title: string
  comments: SessionCommentType[]
}

export default function SessionSlide({ title, comments }: SessionProps) {
  return (
    <div className={style.sessionSlideContainer}>
      <div className={style.sessionSlideHeader}>
        <h2>{title}</h2>
      </div>
      <div className={style.sessionSlideContent}>
        {comments.map((comment, idx) =>
          idx % 2 === 0 ? (
            <div className={style.evenComment}>
              <div className={style.commentProfile}>
                {comment.user.profileImg}
              </div>
              <div className={style.commentContent}>
                <span>{comment.user.name}</span>
                <p>{comment.comment}</p>
              </div>
            </div>
          ) : (
            <div className={style.oddComment}>
              <div className={style.commentContent}>
                <span>{comment.user.name}</span>
                <p>{comment.comment}</p>
              </div>
              <div className={style.commentProfile}>
                {comment.user.profileImg}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}
