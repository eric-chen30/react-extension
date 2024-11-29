import React, { Component } from "react";

export default class Demo extends Component {
  state = {
    count: 0,
  };

  add = () => {
    /**
     * 对象式的setState
     */
    // const { count } = this.state;
    // // setState——异步更新
    // this.setState({ count: count + 1 }, () => {
    //   console.log("异步更新完成", this.state.count);
    // });
    // console.log("输出state:", this.state.count);

    /**
     * 函数式的setState
     */
    // this.setState((state, props) => {
    //   console.log("state:", state, "props:", props);
    //   return { count: state.count + 1 };
    // })

    this.setState(state => ({ count: state.count + 1 }))
  };

  render() {
    return (
      <div>
        <h1>当前求和为: {this.state.count}</h1>
        <button onClick={this.add}>点我加1</button>
      </div>
    );
  }
}
