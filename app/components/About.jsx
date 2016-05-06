import React from 'react';

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About the app</h1>
      <p>This is a weather application built on React. It is really quite handy.</p>
      <p>
        Here are some of the tools that I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - this was the primary Javascript framework that was used.
        </li>
        <li>
          <a href="http://foundation.zurb.com">Foundation</a> - this framework is used for the styling, chosen because it particularly uses Accessibility controls.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
