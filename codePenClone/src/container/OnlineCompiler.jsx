import React, { useState } from 'react';
import axios from 'axios';

const OnlineCompiler = ({ languageId }) => {
  const [sourceCode, setSourceCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const API_URL = 'https://judge0-ce.p.rapidapi.com/submissions';
  const RAPIDAPI_KEY = 'cf6cd21533msh413f0800c4a27f0p173288jsn1fb5359eaacb';

  // Submit code to the Judge0 API
  const submitCode = async () => {
    try {
      setOutput('');
      setError('');

      const response = await axios.post(
        `${API_URL}?base64_encoded=true&fields=*`,
        {
          language_id: languageId,
          source_code: btoa(sourceCode),
          stdin: btoa(''),
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'x-rapidapi-key': RAPIDAPI_KEY,
          },
        }
      );

      const token = response.data.token;

      // Wait a bit before retrieving the output
      setTimeout(() => getResult(token), 3000);
    } catch (error) {
      setError("An error occurred while submitting your code.");
      console.error(error);
    }
  };

  // Get the result of the code execution from Judge0 API
  const getResult = async (token) => {
    try {
      const response = await axios.get(
        `${API_URL}/${token}?base64_encoded=true&fields=*`,
        {
          headers: {
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'x-rapidapi-key': RAPIDAPI_KEY,
          },
        }
      );

      const decodedOutput = response.data.stdout ? atob(response.data.stdout) : null;
      const decodedError = response.data.stderr ? atob(response.data.stderr) : null;

      if (decodedOutput) setOutput(decodedOutput);
      if (decodedError) setError(decodedError);
    } catch (error) {
      setError("An error occurred while retrieving the result.");
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      {/* <h2 className="text-2xl font-semibold text-white mb-4">Online Compiler</h2> */}
      
      <textarea
        value={sourceCode}
        onChange={(e) => setSourceCode(e.target.value)}
        placeholder="Enter your code here..."
        rows="10"
        className="w-full p-4 text-white bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 mb-4"
      />


      <button
        onClick={submitCode}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-200"
      >
        Run Code
      </button>

      <h3 className="text-xl font-semibold text-white mt-6">Output:</h3>
      <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
        {output ? output : error ? <span className="text-red-500">{error}</span> : 'No output'}
      </pre>
    </div>
  );
};

export default OnlineCompiler;
