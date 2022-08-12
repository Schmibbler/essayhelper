import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Summarizer(props) {
    
    // const [textInput, setTextInput] = useState("")

    function handleTextChange(e) {
        e.preventDefault()
        props.setInputText(e.target.value)
    }

    return (
        <Container>
                <Form className="summarizer">
                    <Row>
                        <Col>
                            <Form.Control size="lg"
                                          placeholder="Summarize any text that you give it! Write some text here and EssayHelper will summarize it!" 
                                          as="textarea" rows={10}
                                          className="text-box"
                                          onChange={handleTextChange}>

                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control 
                            size="lg"
                            placeholder="This is where the summary ends up!" 
                            as="textarea" rows={10}
                            className="text-box">

                            </Form.Control>
                        </Col>
                    </Row>
                </Form>
        </Container>
    )

}

export default Summarizer