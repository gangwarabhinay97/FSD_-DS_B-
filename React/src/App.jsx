import React from 'react'
import Book from './Component/Book'
import Physics from './Component/Physics'
import Chemistry from './Component/Chemistry'

const App = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
     <Book/>
     <Physics/>
     <Chemistry/>
    </div>
  )
}

export default App
