import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from 'react-icons/fa';
import { FcSettings } from 'react-icons/fc';
import SplitPane from 'react-split-pane';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { MdCheck, MdEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firbaseConfig';
import { Alert, UserProfileDetails } from '../component';

const NewProject = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [output, setOutput] = useState('');
  const [isTitle, setIsTitle] = useState('');
  const [title, setTitle] = useState('Untitled');
  const [alert, setAlert] = useState(false);
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
      console.log(" save clicked");

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

  useEffect(() => {
    updateOutput();
  }, [html, css, js]);

  return (
    <div className='w-screen h-screen text-white'>
      {alert && <Alert status={'Success'} alertMsg={"Project Saved..."} />}
      {/* header */}
      <div className='w-full flex items-center justify-between px-4 py-12'>
        {/* logo */}
        <div className='flex items-center justify-center gap-6'>
          <Link to={'home/projects'}>
            <img src={logo} alt="logo" className='w-32 object-contain h-auto' />
          </Link>

          {/* title */}
          <div className='flex flex-col items-center'>
            <div className='flex items-center justify-center gap-3'>
              <div>
                {isTitle ? <input type="text" placeholder='Your Title' value={title} onChange={(e) => { setTitle(e.target.value) }} className='px-3 py-2 bg-transparent rounded-sm border-none outline-none text-lg text-primaryText' /> :
                  <p className='px-3 py-2 text-white text-lg'>{title}</p>}
              </div>
              <div>
                {
                  isTitle ? <div className=' cursor-pointer active:scale-95 transition-transform duration-200 ease-in-out' onClick={() => { setIsTitle(false) }}>
                    <MdCheck className='text-2xl text-emerald-500' />
                  </div> : <div className=' cursor-pointer active:scale-95 transition-transform duration-200 ease-in-out' onClick={() => { setIsTitle(true) }}>
                    <MdEdit className='text-2xl text-primaryText' />
                  </div>
                }
              </div>
            </div>
            {/* follow */}
            <div className='flex items-center justify-center px-3 -mt-2 gap-2'>
              <p className='text-primaryText text-sm'>
                {user?.displayName ? user?.displayName : `${user?.email.split('@')[0]}`}
              </p>
              <p className='text-[10px] bg-emerald-500 rounded-sm px-2 py-[1px] text-primary font-semibold cursor-pointer'>
                + Follow
              </p>
            </div>
          </div>
        </div>
        {/* save */}
        {
          user && (<div className='flex items-center justify-center gap-4'>
            <button className='px-6 py-4 bg-primaryText cursor-pointer text-base active:scale-95 transition-transform duration-200  ease-in-out text-primary font-semibold rounded-md' onClick={saveProgram}>Save</button>
            <UserProfileDetails />
          </div>
          )
        }
      </div>

      <SplitPane split="horizontal" minSize={100} maxSize={-100} defaultSize={'50%'}>
        {/* Top Pane */}
        <div className='w-full h-full'>
          <SplitPane split='vertical' minSize={500}>
            {/* html */}
            <div className='w-full h-full flex flex-col items-start justify-start px-1'>
              <div className='icon-container bg-secondary px-4 py-2 border-t-4 flex items-center justify-between gap-3 border-t-gray-500' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <FaHtml5 className='text-xl text-red-500' />
                <p className='text-primaryText font-semibold'>HTML</p>
                <div className='cursor-pointer flex items-center justify-center gap-5 px-4'>
                  <FcSettings className='text-xl' />
                  <FaChevronDown className='text-xl text-primaryText' />
                </div>
              </div>
              <div className='editor-panel w-full h-full px-2' style={{ overflowY: 'auto' }}>
                <CodeMirror value={html} height="600px" theme={"dark"} extensions={[javascript({ jsx: true })]} onChange={(value, viewUpdate) => { setHtml(value) }} style={{
      overflowY: 'auto',
      height: '100%',
    }}/>
              </div>
            </div>
            
            {/* css */}
            <div className='w-full h-full flex flex-col items-start justify-start px-1'>
              <div className='icon-container bg-secondary px-4 py-2 border-t-4 flex items-center justify-between gap-3 border-t-gray-500' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <FaCss3 className='text-xl text-blue-500' />
                <p className='text-primaryText font-semibold'>CSS</p>
                <div className='cursor-pointer flex items-center justify-center gap-5 px-4'>
                  <FcSettings className='text-xl' />
                  <FaChevronDown className='text-xl text-primaryText' />
                </div>
              </div>
              <div className='editor-panel w-full h-full px-2' style={{ overflowY: 'auto' }}>
                <CodeMirror value={css} height="600px" theme={"dark"} extensions={[javascript({ jsx: true })]} onChange={(value, viewUpdate) => { setCss(value) }} style={{
      overflowY: 'auto',
      height: '100%',
    }}/>
              </div>
            </div>

            {/* js */}
            <div className='w-full h-full flex flex-col items-start justify-start px-1'>
              <div className='icon-container bg-secondary px-4 py-2 border-t-4 flex items-center justify-between gap-3 border-t-gray-500' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <FaJs className='text-xl text-yellow-500' />
                <p className='text-primaryText font-semibold'>JS</p>
                <div className='cursor-pointer flex items-center justify-center gap-5 px-4'>
                  <FcSettings className='text-xl' />
                  <FaChevronDown className='text-xl text-primaryText' />
                </div>
              </div>
              <div className='editor-panel w-full h-full px-2' style={{ overflowY: 'auto' }}>
                <CodeMirror value={js} height="600px" theme={"dark"} extensions={[javascript({ jsx: true })]} onChange={(value, viewUpdate) => { setJs(value) }} style={{
      overflowY: 'auto',
      height: '100%',
    }}/>
              </div>
            </div>
          </SplitPane>
        </div>

        {/* Bottom Pane */}
        <div className='bg-white h-full overflow-hidden'>
          <iframe srcDoc={output} className='h-full w-full border-none' title='result'></iframe>
        </div>
      </SplitPane>
    </div>
  );
};

export default NewProject;
