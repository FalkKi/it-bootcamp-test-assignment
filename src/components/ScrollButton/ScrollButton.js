import styles from './scrollButton.module.scss';

const ScrollButton = ({ isVisible }) => {
   const btnScrollHandler = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   }
   
   return (
      <button onClick={btnScrollHandler} className={isVisible ? styles.active : styles.scrollBtn}>Go top</button>
   )
};

export default ScrollButton;