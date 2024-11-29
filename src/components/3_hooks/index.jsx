import React from "react";

export default function Demo() {
  const [sum, setSum] = React.useState(0);
  const [name, setName] = React.useState("React Hooks");

  function changeName() {
    setName("Vooey");
  }

  return (
    <div>
      <h2>当前求和为：{sum}</h2>&nbsp;
      <h2>Hello, {name}</h2>
      <button onClick={() => setSum(sum + 1)}>点我加1</button>
      <button onClick={changeName}>点我改名</button>
    </div>
  );
}
