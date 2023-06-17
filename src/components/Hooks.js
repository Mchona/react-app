import { useEffect, useState } from 'react';

const Hooks = () => {
  const [isDisp, setIsDisp] = useState(true);
  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp(prev => !prev)}>トグル</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);
  const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   console.log('useEffect is called');
  //   window.setInterval(() => {
  //     setTime(priv => priv + 1);
  //   }, 1000);
  // }, [])

  useEffect(() => {
    console.log('init');
    window.setInterval(() => {
      setTime(priv => priv + 1);
    }, 1000);
    return () => {
      console.log('end');
    }
  }, [])

  // useEffect(() => {
  //   console.log('updated');
  // }, [time])

   useEffect(() => {
    document.title = 'counter' + time;
    window.localStorage.setItem('time-key', time);
   }, [time])

  useEffect(() => {
    checked && window.alert('checked!')
  },[checked])

  //useEffect第二引数依存配列
  return (
    <div>
      <time>{time}</time>
      <span>秒経過</span>

      <div>
        <input
          type={'checkbox'}
          value={checked}
          onClick={() => setChecked((checked) => !checked)}>
        </input>
      </div>
    </div>

  )
}

export default Hooks
