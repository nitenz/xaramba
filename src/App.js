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
      activeMenuOption: 'home'
    };
  }

  handleClick( event ){
    this.setState({activeMenuOption: event.currentTarget.text.toLowerCase()});
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