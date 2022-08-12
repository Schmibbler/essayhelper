import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Paraphraser () {

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
                                    placeholder="Need something said differently? EssayHelper will paraphrase text for you!" 
                                    as="textarea" rows={10}
                                    className="text-box"
                                    onChange={handleTextChange}>

                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control 
                        readOnly="true"
                        size="lg"
                        placeholder="This is where the paraphrased version will go!" 
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
export default Paraphraser