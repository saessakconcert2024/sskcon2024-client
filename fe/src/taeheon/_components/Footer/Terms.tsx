import classes from './footer.module.css'

export default function Terms() {
  return (
    <div className={classes.terms_wrapper}>
      <a
        className={classes.term_link}
        href="https://www.inflearn.com/policy/privacy"
      >
        개인정보취급방침
      </a>
      <p className={classes.seperate}>|</p>
      <p className={classes.text}> 새싹콘서트 2024</p>
    </div>
  )
}
