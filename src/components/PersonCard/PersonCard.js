import styles from './personCard.module.scss';
import { useInView } from 'react-intersection-observer';

const PersonCard = (props) => {

   const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
   });

   return (
      <div ref={ref} onClick={() => props.activatePersonModal(props.person.id)} className={styles.personContainer}>
         {inView ? <img alt="personAvatar" className={styles.personImg} src={props.person.image}></img>
            : <div className={styles.skeleton}></div>}
         <p>{props.person.name}</p>
      </div>
   )
}
export default PersonCard;