import styles from './preloader.module.scss';

const Preloader = () => {
   return (
      <div className={styles.loader}>
         <div className={styles.loaderInner}>
            <div className={styles.loaderLineWrap}>
               <div className={styles.loaderLine}></div>
            </div>
            <div className={styles.loaderLineWrap}>
               <div className={styles.loaderLine}></div>
            </div>
            <div className={styles.loaderLineWrap}>
               <div className={styles.loaderLine}></div>
            </div>
            <div className={styles.loaderLineWrap}>
               <div  className={styles.loaderLine}></div>
            </div>
            <div className={styles.loaderLineWrap}>
               <div className={styles.loaderLine}></div>
            </div>
         </div>
      </div>
   )

};
export default Preloader;