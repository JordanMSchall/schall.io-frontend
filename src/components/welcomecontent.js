import React from 'react';
import ServicesCard from './servicescard'
import './../css/welcomecontent.css';

class WelcomeContent extends React.Component {
  renderServicesCard(){
    return <ServicesCard />;
  }
  
  render() {
    return (
      <div className="welcomecontent">
        {this.renderServicesCard()}
      </div>
    );
  }
}

export default WelcomeContent;