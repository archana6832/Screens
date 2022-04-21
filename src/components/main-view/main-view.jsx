import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './main-view.scss';

export class MainView extends React.Component {

    render() {

        return (
            <Card className="Help-1" >

                <Card.Img variant="top" src="https://drive.google.com/file/d/1BnJZIoqHINknXo4N0cpmgBSAuaLTIbsw/view?usp=sharing"
                    crossOrigin="anonymous" />
                <Card.Body className="Rectangle">
                    <Card.Title>Help</Card.Title>
                    <Card.Text className="Text-Design">The App</Card.Text>
                    <Card.Img variant="top" src="https://drive.google.com/file/d/1jTCFVj4qloM_IfY-YyCsgPEsA1McTk4C/view?usp=sharing"
                        crossOrigin="anonymous" />
                </Card.Body>
            </Card>
        );
    }

}
export default MainView;