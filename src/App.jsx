
import { useState } from 'react';
import './App.css'
import Headers from './components/Headers/Headers';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers></Headers>
      <div className='responsive ml-4'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
    </>
  )
}

export default App;
