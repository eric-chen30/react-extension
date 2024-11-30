import React from "react";
// import ReactDOM from "react-dom/client";

export default function Demo() {
  const [sum, setSum] = React.useState(0);
  let rootRef = React.useRef();
  let myRef = React.useRef();

  /**
   * useEffect Hook 可以看做三个函数的组合：
   * 1. componentDidMount：组件挂载时执行 如果指定[]，回调函数只会在第一次render后执行
   * 2. componentDidUpdate：组件更新时执行 [state] 当传入[]中的变量发生变化时调用
   * 3. componentWillUnmount：组件卸载时执行 return的回调函数
   */
  React.useEffect(() => {
    let timer = setInterval(() => {
      setSum((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function unmount() {
    console.log("卸载组件", rootRef.current);
    // if (rootRef.current) {
    //   rootRef.current.unmount();
    // }
    // ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  function onShow() {
    console.log(myRef.current.value)
    alert(`输入框输入内容为：${myRef.current.value}`);
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为：{sum}</h2>&nbsp;
      <button onClick={() => setSum(sum + 1)}>点我加1</button>
      <button onClick={unmount}>点我卸载</button>
      <button onClick={onShow}>点我展示输入</button>
    </div>
  );
}
