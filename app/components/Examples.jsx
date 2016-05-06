import React from 'react';
import { Link } from 'react-router';

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Oxford'>Oxford, United Kingdom</Link>
        </li>
        <li>
          <Link to='/?location=Auckland'>Auckland, New Zealand</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
