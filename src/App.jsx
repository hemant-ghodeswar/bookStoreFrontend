import { notification } from 'antd';
import './App.css'
import RouterPage from './pages/common/router/RouterPage'
import {BrowserRouter as Router} from 'react-router-dom';
import AuthProvider from './pages/common/createContext/AuthProvider';


function App() {
  // const [count, setCount] = useState(0)
    const [api, contextHolder] = notification.useNotification();


  return (
    <>
     {/* <RouterPage >
      <Navbar />
    </RouterPage> */}
    <Router>
      <AuthProvider>
      <RouterPage />
      {contextHolder}
      </AuthProvider>
    </Router>
    </>
  )
}

export default App
