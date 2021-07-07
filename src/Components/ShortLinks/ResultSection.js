import React from 'react';
import { Result, Link, ShortLink, Btn3 } from '../style/InputBoxStyle';
const Results = () => {
  return (
    <Result>
      <Link>
        <p>
          https://www.udemy.com/share/100F3u2@PUdgfWFjT1wLcENLB3FnVD1t/?xref=2%40FG1jVGFIT1wLcENLB3F9OlsJDwIYAhsXW2F%2FezhLZw%3D%
        </p>
        <ShortLink>
          <p>shrtco.de/RED3hu</p>
          <Btn3>Copy!</Btn3>
        </ShortLink>
      </Link>
    </Result>
  );
};

export default Results;
