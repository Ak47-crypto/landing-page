import React from 'react'
import markdownit from 'markdown-it'
import DOMPurify from 'dompurify'

type props={
    text:string
}
export default function Markdown({text}:props) {
    const md = markdownit()
const result = md.render(text);
const SanitizedResult = DOMPurify.sanitize(result)
  return <div dangerouslySetInnerHTML={{__html:SanitizedResult}}></div>
  
}
