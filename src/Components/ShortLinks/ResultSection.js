import React, { useState } from 'react';
import { Result, Link, ShortLink, Btn3 } from '../style/InputBoxStyle';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const Results = ({ link, text }) => {
  const [click, setClick] = useState(false);

  const onClick = (e) => {
    setClick(true);
    console.log(link);
    setTimeout(() => setClick(false), 2000);
  };

  if (link) {
    return (
      <Result>
        <Link>
          <p>{text}</p>
          <ShortLink>
            <p>{link}</p>
            <CopyToClipboard text={link}>
              <Btn3 click={click} onClick={onClick}>
                {click ? 'Copied!' : 'Copy'}
              </Btn3>
            </CopyToClipboard>
          </ShortLink>
        </Link>
      </Result>
    );
  }
  return <h1>Shorten your link above...</h1>;
};

export default Results;
