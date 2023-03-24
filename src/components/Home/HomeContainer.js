import { useCallback, useEffect, useRef, useState } from 'react';
import Home from './Home';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPersons } from './../../requests/picturesRequests';
import Preloader from '../Preloader/Preloader';


const HomeContainer = () => {
   const dispatch = useDispatch();
   const [isVisible, setIsVisible] = useState(false);
   const [fetching, setFethcing] = useState(true);
   const [totalCount, setTotalCount] = useState(1);
   const [isModalActive, setIsModalActive] = useState(false);
   const [personId, setPersonId] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);
   const isLoaded = useSelector(state => state.persons.persons.status);
   const isFirstRenderDone = useRef(false);


   useEffect(() => {
      if (fetching) {
         dispatch(fetchPersons({ currentPage, setFethcing, setTotalCount })).then(response => {
            if (response) {
               setCurrentPage(prev => prev + 1);
               setTotalCount(response.payload.info.count);
            };
         });
      };
   }, [fetching]);

   useEffect(() => {
      if (isLoaded && !isFirstRenderDone.current) {
         isFirstRenderDone.current = true
      };
   }, [isLoaded]);

   const persons = useSelector(state => state.persons.persons.items);

   const onPageScrolling = useCallback(() => {
      const y = window.scrollY;
      if (y >= window.innerHeight) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      };
   }, [setIsVisible]);

   const scrollHandler = useCallback((e) => {
      e.preventDefault()
      if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)
         < 100 && persons.length < totalCount) {
         setFethcing(true);
      };
   }, [setFethcing]);

   const activatePersonModal = useCallback((id) => {
      setPersonId(id);
      setIsModalActive(true);
   }, [setPersonId, setIsModalActive]);

   if (!isLoaded && !isFirstRenderDone.current) {
      return <Preloader />
   };

   return <Home
      isVisible={isVisible}
      onPageScrolling={onPageScrolling}
      scrollHandler={scrollHandler}
      activatePersonModal={activatePersonModal}
      isModalActive={isModalActive}
      setIsModalActive={setIsModalActive}
      personId={personId}
      setPersonId={setPersonId}
   />
};

export default HomeContainer;