import classes from './footer.module.css'

export default function Organizer() {
  return (
    <div className={classes.organizer_container}>
      <p className={classes.text}>@SaessakCon 2024</p>
      <p className={classes.seperate}>|</p>
      <p className={classes.text}>saessakconcert@gmail.com</p>
    </div>
  )
}
