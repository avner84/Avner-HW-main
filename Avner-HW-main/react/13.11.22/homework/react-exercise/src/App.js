import { useRef, useState } from "react";
import Input from "./Input";

function App() {

    const [fNameInputValue, setFnameInputValue] = useState("");
    const [lNameInputValue, setLnameInputValue] = useState("");
    const [fNameSmallerText, setFnameSmallerText] = useState("");
    const [lNameSmallerText, setLnameSmallerText] = useState("");
    const [classNameShowInputsDiv, setClassNameShowInputsDiv] = useState("hidden");

    const fName = useRef();
// {current: input}

    function showValues(e) {
        e.preventDefault()
        setClassNameShowInputsDiv("hidden")
        setFnameSmallerText("")
        setLnameSmallerText("")

console.log(fName.current.value)

        // console.log("fNameSmallerText.length: ", lNameSmallerText.length);
        if ((fNameInputValue.length > 5) && (lNameInputValue.length > 5)) {
            setClassNameShowInputsDiv("showInputsDiv")
            setFnameSmallerText("")
            setLnameSmallerText("")

        }
        else {
            if (fNameInputValue.length < 6) {
                setFnameSmallerText("The value must be at least 6 characters long")
            }
            if (lNameInputValue.length < 6) {
                setLnameSmallerText("The value must be at least 6 characters long")

            }
        }

    }

    return (
        <div className="App">
            <div className="containerFrom">
                <form action="" onSubmit={showValues}>
                    <label>First name:</label><br />
<input   ref={fName}/>
                    {/* <Input
                        type="text"
                        id="fname"
                        value={fNameInputValue}
                        onChange={(e) => setFnameInputValue(e.target.value)}
                    /> */}
                    <br />
                    <small>{fNameSmallerText}</small><br />
                    <label>Last name:</label><br />
                    <Input
                        type="text"
                        id="lname"
                        value={lNameInputValue}
                        onChange={(e) => setLnameInputValue(e.target.value)}
                    />
                    <br />
                    <small>{lNameSmallerText}</small><br /><br />
                    <Input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
            <div className={classNameShowInputsDiv}>
                <p>
                    The first name entered is: &nbsp; <strong> {fNameInputValue}</strong>
                </p>
                <p>
                    The last name entered is: &nbsp; <strong>{lNameInputValue}</strong>
                </p>
            </div>

        </div>
    );
}

export default App;
