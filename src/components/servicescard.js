import React from 'react';
import Card from 'react-bootstrap/Card'; 


class ServicesCard extends React.Component {
    render() {
        return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Services</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Software</Card.Subtitle>
                <Card.Text>
                    I perform custom software development and prototyping
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
        </Card > );
    }
}

export default ServicesCard;