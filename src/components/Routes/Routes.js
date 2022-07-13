import {Routes, Route} from 'react-router-dom'
import Landing from '../Landing'
import Add from '../Add'
import Update from '../Update';
import Profile from '../Profile'
import Home from '../Home';
import Details from '../Details';
import UserProfile from '../UserProfile';

function Routings({signUpWithGoogle,quoteCategory,userData}) {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Landing signUpWithGoogle={signUpWithGoogle} />} />
                <Route exact path='/home' element={<Home quoteCategory={quoteCategory} userData={userData} />} />
                <Route exact path='/profile' element={<Profile userData={userData} />} />
                <Route exact path='/add' element={<Add userData={userData} />} />
                <Route exact path='/update/:id' element={<Update />} />
                <Route exact path='/details/:id' element={<Details userData={userData} />} />
                <Route exact path='/userprofile/:id' element={<UserProfile userData={userData} />} />
            </Routes>
        </div>
    )
}

export default Routings