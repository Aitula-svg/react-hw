import React from 'react'
import Todo from './components/Todo'
import MovieHeader from './components/Movies/MovieHeader'
import NewMovieHeader from './components/NewMovies/NewMovieHeader'



const App = () => {


  return (
    <div className='app-todo' >
     {/* <Todo /> Тудулист иштейт */}
     {/* <MovieHeader /> не работает полностью  */}
<div>
<NewMovieHeader /> 
{/* Add new movie басканда ачылып жабылат */ }

</div>
     
    </div>
  
    
  )
}

export default App



