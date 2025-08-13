import './App.css'
import RouterPage from './pages/common/router/RouterPage'
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <RouterPage >
      <Navbar />
    </RouterPage> */}
    <Router>
      <RouterPage />
    </Router>
    </>
  )
}

export default App
