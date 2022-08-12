import React, {useState} from "react"
import "../index.js"
import "../index.css"
import Container from 'react-bootstrap/Container';
import Summarizer from "./Tools/Summarizer"
import Expander from "./Tools/Expander"
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paraphraser from "./Tools/Paraphraser.jsx";


function Toolbelt (props) {



    const [inputText, setInputText] = useState("")
    const [tempInput, setTempInput] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [tool, setTool] = useState("summarize")

    const [textIsLoading, setTextIsLoading] = useState(false)
    const [textIsLoaded, setTextIsLoaded] = useState(false)
    const [outputText, setOutputText] = useState("")
    const [submissionCount, setSubmissionCount] = useState(0)

    let tool_dict = {
        "summarize": <Summarizer 
                        setInputText={setInputText}
                        setOutputText={setOutputText}
                        tempInput={tempInput}
                        setTempInput={setTempInput}
                        outputText={outputText}
                        inputText={inputText}
                        isSubmitted={isSubmitted}
                        submissionCount={submissionCount}></Summarizer>,
        "paraphrase": <Paraphraser
                            setInputText={setInputText}
                            setOutputText={setOutputText}
                            outputText={outputText}
                            inputText={inputText}
                            isSubmitted={isSubmitted}></Paraphraser> ,
        "expand": <Expander
                        setInputText={setInputText}
                        setOutputText={setOutputText}
                        outputText={outputText}
                        inputText={inputText}
                        isSubmitted={isSubmitted}></Expander>,      

    }


    function handleSubmit(e) {
        e.preventDefault()
        setInputText(tempInput)
        setSubmissionCount(prev => prev + 1)
    }

    return (
        <Container>
            <Row className="buttonrow">
                <Col className="buttoncol">
                    <Button variant="outline-secondary" 
                            className="tool-button"
                            onClick={(e) => setTool("summarize")}>
                            Summarize
                    </Button>

                    <Button variant="outline-secondary"
                            className="tool-button" 
                            onClick={(e) => setTool("paraphrase")}>
                            Paraphrase
                    </Button>
                    <Button variant="outline-secondary"
                            className="tool-button" 
                            onClick={(e) => setTool("expand")}>
                            Expand
                    </Button>
                </Col>
            </Row>
            <Row>
                {   
                    tool_dict[tool]
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