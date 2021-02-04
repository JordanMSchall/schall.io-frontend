import React from 'react';
import Draggable from 'react-draggable'; 
import ServicesCard from './servicescard';
import './../css/draggableservicescard.css';

class DraggableServicesCard extends React.Component {

    renderServicesCard() {
        return <ServicesCard/>
    }
    render() {
        return (<Draggable><div classname="draggableCard">{this.renderServicesCard()}</div></Draggable>);
    }
}

export default DraggableServicesCard;