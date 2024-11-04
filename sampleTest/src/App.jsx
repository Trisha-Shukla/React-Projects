import React, { useState } from "react";
import "./App.css";

export default function Compiler() {
  const [input, setInput] = useState(localStorage.getItem('input') || '');
  const [output, setOutput] = useState('');
  const [languageId, setLanguageId] = useState(localStorage.getItem('language_Id') || 2);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
    localStorage.setItem('input', event.target.value);
  };

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguageId(event.target.value);
    localStorage.setItem('language_Id', event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const outputText = document.getElementById("output");
    outputText.innerHTML = "Creating Submission ...\n";

    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": "cf6cd21533msh413f0800c4a27f0p173288jsn1fb5359eaacb", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          source_code: input,
          stdin: userInput,
          language_id: languageId,
        }),
      }
    );

    outputText.innerHTML += "Submission Created ...\n";
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    

    let jsonGetSolution = {
      status: { description: "Queue" },
      stderr: null,
      compile_output: null,
    };

    while (
      jsonGetSolution.status.description !== "Accepted" &&
      jsonGetSolution.stderr == null &&
      jsonGetSolution.compile_output == null
    ) {
      outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
      if (jsonResponse.token) {
        const url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
            "content-type": "application/json",
          },
        });
        jsonGetSolution = await getSolution.json();
      }
    }

    if (jsonGetSolution.stdout) {
      const outputResult = atob(jsonGetSolution.stdout);
      outputText.innerHTML = `Results :\n${outputResult}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
    } else if (jsonGetSolution.stderr) {
      const error = atob(jsonGetSolution.stderr);
      outputText.innerHTML = `\n Error :${error}`;
    } else {
      const compilationError = atob(jsonGetSolution.compile_output);
      outputText.innerHTML = `\n Error :${compilationError}`;
    }
  };

  return (
    <>
      <div className="row container-fluid">
        <div className="col-6 ml-4">
          <label htmlFor="solution">
            <span className="badge badge-info heading mt-2">
              <i className="fas fa-code fa-fw fa-lg"></i> Code Here
            </span>
          </label>
          <textarea
            required
            name="solution"
            id="source"
            onChange={handleInputChange}
            className="source"
            value={input}
          ></textarea>
          <button
            type="submit"
            className="btn btn-danger ml-2 mr-2"
            onClick={handleSubmit}
          >
            <i className="fas fa-cog fa-fw"></i> Run
          </button>

          <label htmlFor="tags" className="mr-1">
            <b className="heading">Language:</b>
          </label>
          <select
            value={languageId}
            onChange={handleLanguageChange}
            id="tags"
            className="form-control form-inline mb-2 language"
          >
            <option value="54">C++</option>
            <option value="50">C</option>
            <option value="62">Java</option>
            <option value="71">Python</option>
          </select>
        </div>
        <div className="col-5">
          <div>
            <span className="badge badge-info heading my-2">
              <i className="fas fa-exclamation fa-fw fa-md"></i> Output
            </span>
            <textarea id="output"></textarea>
          </div>
        </div>
      </div>
      <div className="mt-2 ml-5">
        <span className="badge badge-primary heading my-2">
          <i className="fas fa-user fa-fw fa-md"></i> User Input
        </span>
        <br />
        <textarea id="input" onChange={handleUserInputChange}></textarea>
      </div>
    </>
  );
}
