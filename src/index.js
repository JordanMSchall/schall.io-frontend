import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NaviBar from './components/navibar';
import WelcomeContent from './components/welcomecontent';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  renderNavBar() {
      return <NaviBar/>;
  }

  renderWelcomeContent() {
      return <WelcomeContent/>;
  }

  renderFooter() {
      return <Footer/>;
  }

  render() {
    return (  
      <div id="app">
        {this.renderNavBar()}
        {this.renderWelcomeContent()}
        {this.renderFooter()}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
