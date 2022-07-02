import { NavLink, Routes, Route } from 'react-router-dom'
import Add from './components/Add'
import Update from './components/Update';
import Read from './components/Read'
import "tailwindcss/tailwind.css"

function App() {
  return (
    <div>
      <nav className="flex gap-6 bg-slate-800 p-5 text-white sticky top-0 z-50">
        <div>
          <button onClick={() => window.location.reload()}>
            <NavLink to='/'>Home</NavLink>
          </button>
        </div>
        <div>
          <NavLink to='/add'>Add</NavLink>
        </div>
      </nav>
      <div>
        <ToastContainer />
      </div>
      <Routes>
        <Route exact path='/' element={<Read />} />
        <Route exact path='/add' element={<Add />} />
        <Route exact path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;