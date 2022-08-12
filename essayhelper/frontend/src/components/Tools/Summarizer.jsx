import React, { useState, useRef, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Summarizer(props) {
    
    let outputText = props.outputText
    let inputText = props.inputText
    let tempInput = props.tempInput
    let submissionCount = props.submissionCount
    let setOutputText = props.setOutputText

    const [isAtWordLimit, setIsAtWordLimit] = useState(false)
    const isMounted = useRef(false);

    function handleTextChange(e) {
        props.setTempInput(e.target.value)
        props.setIsSubmitted(false)
        if (e.target.value.length === 0)
            props.setOutputText("")
    }

    useEffect(() => {
        if (isMounted.current) {
            async function fetchData() {
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({"text": inputText})
                }
        
                fetch('http://localhost:5000/summarize', requestOptions)
                    .then(response => response.json())
                    .then((data) => {
                        console.log(data.text)
                        setOutputText(data.text)
                    })
            }
            fetchData()
        } else {
            isMounted.current = true
        }


    }, [inputText])

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
                            <Form.Label className="text-muted wordcount">{tempInput.split(' ').length - 1 + '/300 words'}
                            </Form.Label>
                        </Col>
                        <Col>
                            <Form.Control 
                            readOnly={false}
                            size="lg"
                            placeholder="This is where the summary ends up!" 
                            as="textarea" rows={10}
                            className="text-box"
                            value={props.outputText}>
                            </Form.Control>
                            <Form.Label className="text-muted wordcount">{outputText.split(' ').length - 1 + ' words'}
                            </Form.Label>

                        </Col>
                    </Row>
                </Form>
        </Container>
    )

}

export default Summarizer