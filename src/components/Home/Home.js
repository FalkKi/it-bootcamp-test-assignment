import React from "react";
import { useSelector } from "react-redux";
import styles from './home.module.scss';
import { useEffect } from "react";
import ModalWindow from './../ModalWindow/ModalWindow';
import PersonCard from "../PersonCard/PersonCard";
import ScrollButton from "../ScrollButton/ScrollButton";


const Home = (props) => {
   const {
      isVisible,
      onPageScrolling,
      scrollHandler,
      activatePersonModal,
      setIsModalActive,
      isModalActive,
      personId,
   } = props;

   const persons = useSelector(state => state.persons.persons.items);
   
   useEffect(() => {
      document.addEventListener('scroll', scrollHandler);
      window.addEventListener("scroll", onPageScrolling);
      return () => {
         document.removeEventListener('scroll', scrollHandler);
         window.removeEventListener('scroll', onPageScrolling)
      };
   }, []);

   return (
      <div className={styles.container}>
         <ScrollButton isVisible={isVisible} />
         <>
            {persons.map((el) => (
               <PersonCard
                  key={el.id}
                  person={el}
                  activatePersonModal={activatePersonModal}
               />
            ))}
         </>

         <ModalWindow
            isModalActive={isModalActive}
            setIsModalActive={setIsModalActive}
            persons={persons}
            personId={personId}
         />
      </div>
   )
};

export default React.memo(Home);