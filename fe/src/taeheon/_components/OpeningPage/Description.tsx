import { suitRegular, suitExtraBold } from '@/_styles/fonts/fonts'
import classes from './description.module.css'

export default function Description() {
  return (
    <>
      <h1 className={`${suitExtraBold} ${classes.main_text}`}>새싹콘서트</h1>
      <div className={classes.section}>
        <p className={`${suitRegular} ${classes.sub_text}`}>
          하나의 새싹이 나무로 자라나기 위해,
        </p>
        <p className={`${suitRegular} ${classes.sub_text}`}>
          우리는 각자의 이야기를 잎새처럼 피워
        </p>
        <p className={`${suitRegular} ${classes.sub_text}`}>
          같은 마음을 나누며 성장했습니다.
        </p>
      </div>
      <div className={classes.section}>
        <p className={`${suitRegular} ${classes.sub_text}`}>
          우리가 함께한 모든 순간은
        </p>
        <p className={`${suitRegular} ${classes.sub_text}`}>
          새싹을 따스하게 감싸주는 봄바람 같았기에,
        </p>
      </div>
      <div className={classes.section}>
        <p className={`${suitRegular} ${classes.sub_text}`}>
          이제 우리는 커다란 나무가 되리라고 약속합니다.
        </p>
      </div>
    </>
  )
}
