import './App.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import React from 'react';

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function Navbar() {
  return (
    <div className="Navbar">
      <h1>Markdown Previewer</h1>
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
        <div className="Editor">
          <h3>Edit Markdown</h3>
          <textarea className="Input" id="editor" onChange={this.handleInput}>{this.state.input}</textarea>
      </div>
      </div>
      <div className="Panel">
        <div className="Preview">
          <h3>Preview Result</h3>
          <div className="Output" id="preview">
          <ReactMarkdown children={this.state.input} remarkPlugins={[remarkGfm]} />
        </div>
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
