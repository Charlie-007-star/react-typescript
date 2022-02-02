import React from 'react';

export const MutableRef = () => {

  const [ timer, setTimer ] = React.useState(0);
  const interValRef = React.useRef<number | null>(null);

  const stopTimer = () => {
    if(interValRef.current) window.clearInterval(interValRef.current);
  }

  React.useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer)=> timer + 1);
    },1000);

    return() => {
      stopTimer();
    }
  } , []);

  return (
    <React.Fragment>
          HookTimer - {timer} -
          <button onClick={()=> stopTimer()}>Stop Timer</button>
          <br />
    </React.Fragment>
  );
};
