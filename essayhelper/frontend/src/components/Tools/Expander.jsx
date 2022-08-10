import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Expander () {

    const [textInput, setTextInput] = useState("")

    function handleTextChange(e) {
        e.preventDefault()
        setTextInput(e.target.value)
    }

    return (

        <Container>
            <Form className="expander">
                <Row>
                    <Col>
                        <Form.Control size="lg"
                                    placeholder="Expand any text that you give to EssayHelper! Write some text here and it will return a wordier copy!" 
                                    as="textarea" rows={10}
                                    className="text-box"
                                    onChange={handleTextChange}>

                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control 
                        readOnly="true"
                        size="lg"
                        placeholder="This is where the expanded text ends up!" 
                        as="textarea" rows={10}
                        className="text-box"
                        >

                        </Form.Control>
                    </Col>
                </Row>
            </Form>
        </Container>

    )
}
export default Expander