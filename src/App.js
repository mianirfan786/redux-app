import logo from './logo.svg';
import './App.css';
import User from './User';
import HomeContainer from "./Container/HomeContainer";
import HeaderContainer from "./Container/HeaderContainer";
function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <HeaderContainer />
        <HomeContainer />

        {/*<User data={{name: 'Mian Irfan' , age: 23}} />*/}
    </div>
  );
}

export default App;
