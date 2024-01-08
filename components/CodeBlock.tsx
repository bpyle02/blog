"use client"

import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";



export function CodeBlock(props) {
  const [copy, setCopy] = useState(false)

  return (
    <div className='rounded-md bg-[#3a404d] my-8'>
      <div className='flex justify-between px-4 text-white text-xs items-center'>
        <p className='text-sm'>{props.value.filename}</p>
        {
          copy ? (
            <button className='py-1 inline-flex items-center gap-1 text-white'>
              <div className=''>
                <FaCheck />
              </div>
              Copied!
            </button>
          ) : (
            <button className='py-1 inline-flex items-center gap-1 text-white' onClick = {() => {
              console.log("testing...")
              navigator.clipboard.writeText(props.value.code);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 3000);
            }}>
              <div className=''>
                <FaRegCopy />
              </div>
              Copy code
            </button>
          )
        }
      </div>
      <SyntaxHighlighter
        language={props.value.language}
        style={atomOneDark}
        customStyle={{
          padding: '25px'
        }}
        wrapLongLines = {true}
      >
        {props.value.code}
      </SyntaxHighlighter>
    </div>
  )
}