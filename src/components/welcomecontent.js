import React from 'react';
import DraggableServicesCard from './draggableservicescard'
import './../css/welcomecontent.css';

class WelcomeContent extends React.Component {
  renderDraggableServicesCard(){
    return <DraggableServicesCard />;
  }
  
  render() {
    return (
      <div className="welcomecontent">
        {this.renderDraggableServicesCard()}
      </div>
    );
  }
}

export default WelcomeContent;