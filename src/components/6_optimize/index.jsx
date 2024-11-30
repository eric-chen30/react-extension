import React, { PureComponent } from "react";
import "./index.css";

/**
 * 只要执行setState，即使不改变状态数据，组件也会重新render()
 * 只要当前组件重新render()，就会自动重新render()所有子组件，即使子组件没有用到父组件的任何数据且状态不变 =》 性能问题
 *
 * 原因：Component中的shouldComponentUpdate()方法默认返回true，即使组件的props和state没有变化，也会重新render()
 *
 * 期望：只有当组件的state或props发生变化时，才重新render()
 */

export default class Parent extends PureComponent {
  state = {
    carName: "宝马",
  };

  changeCar = () => {
    this.setState({ carName: "奔驰" });
    /* 有问题的写法: 底层shouldComponentUpdate逻辑会判断obj和state是否有变化，但obj和state指向同一个对象，修改obj.carName并不会触发shouldComponentUpdate() */
    // const obj = this.state;
    // obj.carName = "大众";
    // this.setState(obj);
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.carName !== nextState.carName;
  // }

  render() {
    console.log("我是父组件");
    const { carName } = this.state;
    return (
      <div className="parent">
        <h3>我是父组件</h3>
        <span>我的车名字是:{carName}</span>
        <button onClick={this.changeCar}>修改车名</button>
        <Child carName="野马" />
      </div>
    );
  }
}

class Child extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props);
  //   console.log(nextProps);
  //   return this.props.carName !== nextProps.carName;
  // }

  render() {
    console.log("我是子组件");
    return (
      <div className="child">
        <h4>我是子组件</h4>
        <h3>我接到的车的名字为:{this.props.carName}</h3>
      </div>
    );
  }
}
