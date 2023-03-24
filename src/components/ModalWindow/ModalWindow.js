import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import styles from './modal.module.scss';
import { useDispatch } from 'react-redux';
import { fetchEpisode} from '../../requests/picturesRequests';

const ModalWindow = ({ isModalActive, setIsModalActive, persons, personId }) => {
   const dispatch = useDispatch();
   const [episode, setEpisode] = useState({
      name: '',
      number: ''
   });

   const choosenPerson = useMemo(() => persons.filter((el, ind) => el.id === personId)[0], [personId]);

   useEffect(() => {
     dispatch(fetchEpisode({choosenPerson, episode, setEpisode})) 
   }, [choosenPerson])

   return (
      <>
         {choosenPerson ?
            <div className={isModalActive ? styles.modalActive : styles.modal}
               onClick={() => setIsModalActive(false)}>
               <div className={isModalActive ? styles.modalContentActive : null} onClick={e => e.stopPropagation()}>
                  <div className={styles.modalImage}>
                     <img alt='modalImg' className={styles.modalImg} src={choosenPerson.image} />
                  </div>
                  <div className={styles.personInfo}>
                     <div>
                        <p>Name:</p>
                        <p>{choosenPerson.name}</p>
                        <p>Status:</p>
                        <p>{choosenPerson.status}</p>
                        <p>Species:</p>
                        <p>{choosenPerson.species}</p>
                     </div>
                     <div>
                        <p>Origin:</p>
                        <p>{choosenPerson.origin.name}</p>
                        <p>Location:</p>
                        <p>{choosenPerson.location.name}</p>
                        <p>Gender:</p>
                        <p>{choosenPerson.gender}</p>
                     </div>


                  </div>
                  <div className={styles.episodeInfo}>
                     <p> <span>Episode:</span>  {episode.name}</p>
                     <p><span>Number:</span> {episode.number}</p>
                  </div>
               </div>
            </div > : <div></div>}
      </>
   )
};

export default React.memo(ModalWindow);