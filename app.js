import React from 'react';
import ReactDOM from 'react-dom';

var jsxHeading = (
    <div>
<h1 id="jsxHeading">Heading from JSX!!</h1>;
<h1 id="jsxHeading2">Heading from JSX!!</h1>;
<h1>welcome</h1>
      <p>This is a paragraph.</p>
      <ul>
        <li>bujji</li>
        <li>deepthi</li>
        <li>anu</li>
      </ul>
    </div>

);


// Use ReactDOM.render instead of rootReact.render
ReactDOM.render(jsxHeading, document.getElementById('root'));