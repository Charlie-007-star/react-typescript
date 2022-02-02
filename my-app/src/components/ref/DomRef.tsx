import React from 'react';

export const DomRef = () => {

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        inputRef.current?.focus();
    },[]);

  return (
    <React.Fragment>
        <input type="text" ref={inputRef} />
        <br />
    </React.Fragment>
  );
};
