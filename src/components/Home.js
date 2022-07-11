import db from './Firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import HomePageView from './View/HomePageView'
import NoQuotes from './Images/NoQuotes2.png'


function Home({ quoteCategory, userData }) {
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
        <div>
            {userData === null ? 
            <div>
                <img src={NoQuotes} alt="Sign in to read a quote" />
            </div>
            :
            <HomePageView className="mt-20" quoteCategory={quoteCategory} userData={userData !== null ? userData : ""} /> 
            }
        </div>
    )
}

export default Home