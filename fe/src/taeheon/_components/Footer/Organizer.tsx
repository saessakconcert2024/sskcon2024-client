import classes from './footer.module.css'

export default function Organizer() {
  return (
    <div className={classes.organizer_container}>
      <p className={classes.text}>
        주최자: 변해빈(기획팀장/대외협력/BE) | TF팀: 노수지(기획/BE)
        홍예슬(기획/BE) 김유진(기획/디자인) 신현호(FE) 전태헌(FE) 이시연(GUI)
      </p>
    </div>
  )
}
