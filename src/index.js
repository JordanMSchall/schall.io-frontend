import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/navbar';
import WelcomeContent from './components/welcomecontent';


class App extends React.Component {
  renderNavBar() {
      return <NavBar/>;
  }

  renderWelcomeContent() {
      return <WelcomeContent/>;
  }

  render() {
    return (  
      <div id="app">
        {this.renderNavBar()}
        {this.renderWelcomeContent()}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
