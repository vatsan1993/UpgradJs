import React from 'react';
import ReactDOM from 'react-dom';

/* DONE: 
  Debugged the code on browser.
  Rectified all errors and warnings one by one.
  Did this until the code shows no error or warning in the Console Tab in Developer Tools.

  1. Enclosed all code within parent div tag to rectify error message "Uncaught SyntaxError: Inline Babel script: Adjacent JSX elements must be wrapped in an enclosing tag".
  2. Closed all self-closing tags - <br/> and <input/> tags. Put a forward slash before the closing angular bracket to recitify the error message "Uncaught SyntaxError: Inline Babel script: Unterminated JSX contents".
  3. Converted <BR/> to <br/> (lower case) to rectify the error "Uncaught ReferenceError: BR is not defined".
  4. Used 'htmlFor' in place of 'for' as an attribute inside label tag to rectify the warning "Warning: Invalid DOM property `for`. Did you mean `htmlFor`?".
*/
ReactDOM.render(
  <div>
    <label htmlFor="username">Username: </label><br />
    <input id="username" type="text" /><br /><br />
    <label htmlFor="password">Password: </label><br />
    <input id="password" type="password" /><br /><br />
  </div>,
  document.getElementById('root')
);