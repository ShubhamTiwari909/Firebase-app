import db from './Firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import HomePageView from './View/HomePageView'

function Home({ quoteCategory }) {
    const dispatch = useDispatch()
   

    useEffect(() => {
        async function fetch() {
            const querySnapshot1 = await getDocs(query(collection(db, "data"), where("QuoteCategory", "==", quoteCategory)));
            const querySnapshot2 = await getDocs(collection(db, "data"))
            dispatch({ type: "FETCH", payload: quoteCategory === "Category(All)" || quoteCategory === "" ? querySnapshot2.docs : querySnapshot1.docs })
        }
        fetch();
    }, [dispatch, quoteCategory])

    return (
        <div className="mt-20">
           <HomePageView quoteCategory={quoteCategory} />
        </div>
    )
}

export default Home