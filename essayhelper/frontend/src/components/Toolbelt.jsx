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

    let tool_options = {
        "summarizer": <Summarizer></Summarizer>,
        "expander": <Expander></Expander>
    }

    const [inputText, setInputText] = useState("")

    const [tool, setTool] = useState("summarizer")
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
                    tool_options[tool]
                }
            </Row>

            <Row>
                <Col className="submit-col">
                    <Button variant="primary"
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