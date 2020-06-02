import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Content from './components/content/content.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuOption: 'info'
    };
  }

  handleClick( event ){
    document.getElementsByClassName("active")[0].classList.remove('active');
    this.setState({activeMenuOption: event.currentTarget.hash.replace('#', '').toLowerCase() });
  }

  render(){
    return (
    <div className="App">
        <Header handleClick={this.handleClick.bind( this )} />
        <Content activeMenuOption={this.state.activeMenuOption}/>
        <Footer />
    </div>
    );
  }
} 

export default App;