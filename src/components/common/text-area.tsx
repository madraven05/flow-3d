import React, { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

const Textarea:React.FC<TextareaProps> = ({className, ...props}) => {
  return (
    <textarea className={`${className} `} {...props}/>
  )
}

export default Textarea