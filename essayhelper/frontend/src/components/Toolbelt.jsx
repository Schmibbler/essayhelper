import React, {useState} from "react"
import "../index.js"
import "../index.css"
import Container from 'react-bootstrap/Container';
import Summarizer from "./Tools/Summarizer"
import Expander from "./Tools/Expander"
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Toolbelt (props) {



    const [inputText, setInputText] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [tool, setTool] = useState("summarizer")

    // const [summarizedText, setSummarizedText] = useState("")

    // "Submit" the text...
    // Each component tool does the actual handling of the
    // text to the backend. At this parent level it just 
    // requests that the text be processed by the child
    function handleSubmit(e) {
        console.log(inputText)
        let requestOptions = {
            mode: "no-cors", 
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: {"textToSummarize": inputText}
        }
        console.log(requestOptions)
        fetch('http://localhost:5000/summarize', requestOptions) 
            .then(response => console.log(response.json()))
           
        setIsSubmitted(true)
    }

    return (
        <Container>
            <Row className="buttonrow">
                <Col className="buttoncol">
                    <Button variant="outline-secondary" 
                            className="tool-button"
                            onClick={(e) => setTool("summarizer")}>
                            Summarize
                    </Button>

                    <Button variant="outline-secondary"
                            className="tool-button" 
                            onClick={(e) => setTool("expander")}>
                            Expand
                    </Button>
                </Col>
            </Row>
            <Row>
            
                {   
                    // I'm really gonna have to find
                    // a better solution to this. Lol.
                    tool === "summarizer" ? <Summarizer 
                                                setInputText={setInputText}
                                                inputText={inputText}
                                                isSubmitted={isSubmitted}></Summarizer> :
                                             <Expander
                                                setInputText={setInputText}
                                                inputText={inputText}
                                                isSubmitted={isSubmitted}></Expander>
                }
            </Row>

            <Row>
                <Col className="submit-col">
                    <Button variant="primary"
                            onClick={handleSubmit}
                            className="submit-button">
                            Submit
                    </Button>
                </Col>  
                <Col>

                </Col>
            </Row>

        </Container>
    
    )
}

export default Toolbelt