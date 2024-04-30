import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { marked, setOptions } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

setOptions({
  breaks: true,
});

const placeholder = `# Heading 1
## Heading 2

[Link to Google](https://www.google.com)

Inline code: \`console.log('Inline code')\`

\`\`\`javascript
const s = 'Multiline code';
console.log(s)
\`\`\`

List:
* Item 1
* Item 2
* Item 3

**Here's some bolded text**

Blockquote:

> Boy I really love quoting things.
> It's one of my favorite pastimes!

Image:

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo")
`;

class App extends Component {
  state = {
    markdown: placeholder,
  };

  onChange = (e) => {
    this.setState({ markdown: e.target.value });
  };

  createMarkup = () => {
    return { __html: marked(this.state.markdown) };
  };

  render() {
    return (
      <div className="App">
        <div className="m-5">
          <div className="row">
            <div className="col-md-6">
              <h2>Markdown</h2>
              <Form.Group>
                <Form.Control
                  id="editor"
                  as="textarea"
                  rows="20"
                  onChange={this.onChange}
                  value={this.state.markdown}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <h2>Preview</h2>
              <Card>
                <Card.Body>
                  <div
                    id="preview"
                    dangerouslySetInnerHTML={this.createMarkup()}
                  />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
