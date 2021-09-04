import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarkdown, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faCode } from '@fortawesome/free-solid-svg-icons'
import { faKeyboard, faCopy } from '@fortawesome/free-regular-svg-icons'

const defaultMarkdown = `_This is just placeholder text. When you are ready to edit select it all and delete._

# Welcome to Markdown Previewer!

## General Formatting

### There are smaller sub-headings ...

> You can create a blockquote. 

You can make text **bold**... 
Or _italic_.
Or... **_both_**
And with GFM (_github flavoured markdown_) you can go crazy ~~crossing stuff out~~.

You can also create [links](https://www.freecodecamp.org)

And tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here...
And here. | Okay. | I think we get it.

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And numbered lists too.
1. Use just 1s if you want!
1. Don't forget about ...


## Formatting Code

Here's some inline code, \`<div></div>\`, marked using backticks.

This is code, marked using 3 backticks. 3 tildes (~) work too.
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
If you specify the code language next to the backticks (eg. js, css, html) it will highlight the code.

\`\`\`html
<div>
  <h1>Heading</h1>
  <p> Hello here is some text</p>
</div>
\`\`\`

## Embedding Images
You can embed images like this:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="PageText"><FontAwesomeIcon icon={faMarkdown} /> Markdown Previewer</h1>
      <a href='https://guides.github.com/features/mastering-markdown/' 
        className='PanelButton' 
        target='_blank' 
        title="Learn Markdown"
        rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} size='lg' /> Markdown Guide
        </a>
    </div>
  )
}

class MarkdownConverter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: defaultMarkdown};
      this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState ({
      input: event.target.value
  });
}

render(){
  return (
    <div className="Main">
      <div className="Panel">
          <div className="PanelHeader">
            <h3 className="PageText"><FontAwesomeIcon icon={faKeyboard} size='lg' /> Edit Markdown</h3>
            <a href='#' className='PanelButton' role="button" title="Copy Markdown" onClick={() =>  navigator.clipboard.writeText(this.state.input)}><FontAwesomeIcon icon={faCopy} size='md' /></a>
          </div>
          <textarea className="Input" id="editor" onChange={this.handleInput}>{this.state.input}</textarea>
      </div>
      <div className="Panel">
          <div className="PanelHeader">
            <h3 className="PageText"><FontAwesomeIcon icon={faDesktop} size='md' /> Preview Result</h3>
            <a href='#' className='PanelButton' role="button" title="Copy HTML"
            onClick={() =>  navigator.clipboard.writeText(document.getElementById('preview').innerHTML)}>
              <FontAwesomeIcon icon={faCode} size='md' /></a>
          </div>
          <div className="Output" id="preview">
            <ReactMarkdown
            children={this.state.input} remarkPlugins={[[remarkGfm], [remarkBreaks
            ]]}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={coldarkDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </div>
    </div>
    </div>
  );
}
};


function App() {
  return (
    <div className="App">
      <Navbar />
      <MarkdownConverter />
    </div>
  );
}


export default App;
