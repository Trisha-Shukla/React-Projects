import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from 'react-icons/fa';
import { FcSettings } from 'react-icons/fc';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { MdCheck, MdEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firbaseConfig';
import { Alert, UserProfileDetails } from '../component';
import OnlineCompiler from './OnlineCompiler';

const NewProject = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [output, setOutput] = useState('');
  const [isTitle, setIsTitle] = useState('');
  const [title, setTitle] = useState('Untitled');
  const [alert, setAlert] = useState(false);
  const [selectLang, setSelectLang] = useState(false);
  const [languageId, setLanguageId] = useState(52); // Default to C++
  const user = useSelector((state) => state.users.userData);

  const updateOutput = () => {
    const combinedOutput = `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>${css}</style>
  </head>
  <body>
    ${html}
    <script type="module">
    ${js}
    </script>
  </body>
</html>
    `;
    setOutput(combinedOutput);
  };

  const saveProgram = async () => {
    try {
      const id = Date.now().toString();
      const _doc = {
        id: id,
        title: title,
        html: html,
        css: css,
        js: js,
        output: output,
        user: user,
      };
      await setDoc(doc(db, "Projects", id), _doc);
      setAlert(true);

    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const handleLang=(e)=>{
    if(e.target.value==='JS'){
      setSelectLang(false)
    }
    else{
      setSelectLang(true);
      setLanguageId(e.target.value);
    }
  }

  useEffect(() => {
    updateOutput();
  }, [html, css, js]);

  return (
    <div className='w-screen h-screen text-white flex flex-col bg-gray-900'>
      {alert && <Alert status={'Success'} alertMsg={"Project Saved..."} />}
      
      {/* Header */}
      <div className='w-full flex items-center justify-between px-4 py-4 bg-gray-800'>
        <div className='flex items-center justify-center gap-6'>
          <Link to={'home/projects'}>
            <img src={logo} alt="logo" className='w-32 object-contain h-auto' />
          </Link>
          <div className='flex flex-col items-center'>
            <div className='flex items-center justify-center gap-3'>
              <div>
                {isTitle ? (
                  <input 
                    type="text" 
                    placeholder='Your Title' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className='px-3 py-2 bg-gray-700 rounded-sm border-none outline-none text-lg text-white' 
                  />
                ) : (
                  <p className='px-3 py-2 text-white text-lg'>{title}</p>
                )}
              </div>
              <div onClick={() => setIsTitle(!isTitle)} className='cursor-pointer'>
                {isTitle ? <MdCheck className='text-2xl text-emerald-500' /> : <MdEdit className='text-2xl text-white' />}
              </div>
            </div>
            <div className='flex items-center justify-center px-3 -mt-2 gap-2'>
              <p className='text-gray-400 text-sm'>{user?.displayName || user?.email.split('@')[0]}</p>
              <p className='text-[10px] bg-emerald-500 rounded-sm px-2 py-[1px] text-primary font-semibold cursor-pointer'>+ Follow</p>
            </div>
           
          </div>
           {/* select lang */}
           <div>
              <label htmlFor="language">Select Language</label>
              <select name="" id="language" className='text-primaryText border-none outline-none bg-transparent' onChange={handleLang}>
              <option value="JS">JS</option>
              <option value="52">C++</option>
          <option value="62">Java</option>
          <option value="71">Python</option>
              </select>
            </div>
        </div>
        {(user && !selectLang) && (
          <div className='flex items-center justify-center gap-4'>
            <button className='px-6 py-2 bg-emerald-500 text-base font-semibold rounded-md' onClick={saveProgram}>Save</button>
            <UserProfileDetails />
          </div>
        )}
      </div>

      
      {
        selectLang? ( <div>
          <OnlineCompiler languageId={languageId}/>
        </div> ):(
          <div className='flex flex-col flex-grow h-full'>
        
        
        <div className='grid grid-cols-3 gap-4 p-4 h-1/2'>
          
          {/* HTML Editor */}
          <div className='flex flex-col bg-gray-800 rounded-lg overflow-hidden'>
            <div className='bg-gray-700 px-4 py-2 flex items-center justify-between'>
              <FaHtml5 className='text-xl text-red-500' />
              <p className='text-white font-semibold'>HTML</p>
              <div className='flex items-center gap-2'>
                <FcSettings className='text-xl' />
                <FaChevronDown className='text-xl text-white' />
              </div>
            </div>
            <CodeMirror value={html} height="100%" theme="dark" extensions={[javascript({ jsx: true })]} onChange={(value) => setHtml(value)} className='flex-grow overflow-auto' />
          </div>

          {/* CSS Editor */}
          <div className='flex flex-col bg-gray-800 rounded-lg overflow-hidden'>
            <div className='bg-gray-700 px-4 py-2 flex items-center justify-between'>
              <FaCss3 className='text-xl text-blue-500' />
              <p className='text-white font-semibold'>CSS</p>
              <div className='flex items-center gap-2'>
                <FcSettings className='text-xl' />
                <FaChevronDown className='text-xl text-white' />
              </div>
            </div>
            <CodeMirror value={css} height="100%" theme="dark" extensions={[javascript({ jsx: true })]} onChange={(value) => setCss(value)} className='flex-grow overflow-auto' />
          </div>

          {/* JS Editor */}
          <div className='flex flex-col bg-gray-800 rounded-lg overflow-hidden'>
            <div className='bg-gray-700 px-4 py-2 flex items-center justify-between'>
              <FaJs className='text-xl text-yellow-500' />
              <p className='text-white font-semibold'>JS</p>
              <div className='flex items-center gap-2'>
                <FcSettings className='text-xl' />
                <FaChevronDown className='text-xl text-white' />
              </div>
            </div>
            <CodeMirror value={js} height="100%" theme="dark" extensions={[javascript({ jsx: true })]} onChange={(value) => setJs(value)} className='flex-grow overflow-auto' />
          </div>

        </div>

        {/* Output Section */}
        <div className='flex-grow p-4'>
          <div className='bg-white rounded-lg h-full overflow-auto'>
            <iframe srcDoc={output} className='w-full h-full border-none' title='result'></iframe>
          </div>
        </div>
        
      </div>
        )
      }
    </div>
  );
};

export default NewProject;
