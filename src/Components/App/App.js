import React from 'react';
import Acceuil from '../../Route/Acceuil/Acceuil';
import logo from './logoEtNom.jpg'
import SignUpPage from '../../Route/SignUpPage/SignUpPage';
import MainMenu from '../../Route/mainMenu/MainMenuPage.js';
import ChooseCourse from '../../Route/chooseCourses/ChooseCourse';

import './App.css';
import SidebarLayout from "../SidebarLayout/SidebarLayout";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        currentPage: 'sign-in',
        cip: ""
    };

    this.handleCipChange = this.handleCipChange.bind(this);
    this.changePage = this.changePage.bind(this);
  }
  
  handleCipChange(newCip){
    this.setState({currentPage: 'main-menu', cip: newCip});
    console.log(this.state.cip);
  }

  changePage(newPage){
    this.setState({currentPage: newPage});
  }

  render(){
    let componentToRender;
    if(this.state.currentPage === 'sign-in'){
      componentToRender = <Acceuil cipLogin={this.handleCipChange} onNextPage={this.changePage}/>;
    } else if(this.state.currentPage === 'main-menu'){
      componentToRender = <MainMenu onNextPage={this.changePage}/>
    } else if(this.state.currentPage === 'mentor-signup'){
      componentToRender = <ChooseCourse onNextPage={this.changePage} cipLogin={this.state.cip} role={'mentor'}/>
    } else if(this.state.currentPage === 'student-signup'){
      componentToRender = <ChooseCourse onNextPage={this.changePage} cipLogin={this.state.cip} role={'student'}/>
    } else if(this.state.currentPage === 'sign-up'){
      componentToRender = <SignUpPage cipLogin={this.handleCipChange}/>
    }
    let menuDeroulant;
    if(this.state.currentPage !== 'sign-in'){
      menuDeroulant = <SidebarLayout/>
    }

    return (
      <div className="App">
        <div className="App-Header">
          <img className="HeaderImage" src={logo} alt="School Campus"/>
        </div>

        <div className="App-Main">
          {componentToRender}
          {menuDeroulant}
        </div>          
      </div>
    );

    /*
    return (
      <div className="App">
        <div className="App-Header">
          <img className="HeaderImage" src={logo} alt="School Campus"/>
        </div>
        <div className="App-Main">
          <Router>
            <Route exact path="/" render={(props) => <Acceuil {...props} cipLogin={this.handleCipChange}/>}/>
            <Route exact path="/inscription" render={(props) => <SignUpPage {...props} cipLogin={this.handleCipChange}/>}/>
            <Route exact path="/main-menu" component={MainMenu}/>
            <Route exact path="/mentor-signup" render={(props) => <ChooseCourse {...props} 
              cipLogin={'cip'} 
              role={'mentor'}/>}/>
            <Route exact path="/student-signup" render={(props) => <ChooseCourse {...props} 
              cipLogin={'cip'} 
              role={'student'}/>}/>
          </Router>
        </div>          
      </div>
    );
    */
  }
}

export default App;