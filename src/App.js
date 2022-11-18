import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Login from './components/Login'
import Feed from './components/Feed'
import './App.css';

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState()
  useEffect(()=>{
    const _user = sessionStorage.getItem('user')
    if (_user !== ""){
      setUser(_user)
    }
  }, [])
  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
        <Header />
        <div className="App-header">
          {
            !user
              ? <Login />
              : <Feed />

          }
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
