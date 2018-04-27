import React, { Component } from 'react';
import './App.css';
import Item from './component/Collapse'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      //用于渲染
      keyObject:{},
      //用于默认展开项
      keyArr:[],
    }
  }

  componentDidMount(){
    this.handleData()
  }

  //将数据映射给默认键值
  handleArrToDefaultKey = (arr)=>{
    let obj = {};
    for(let item of arr){
        obj = Object.assign(obj,item)
    }
    return obj
  }
  //将数据key和value分开
  handleArrToKeyArr = (arr)=>{
    let Arr = []
    for(let item of arr){
      Arr.push(Object.entries(item))
    }
    return Arr
  }
  //处理数据
  handleData = () => {
    //模拟请求时候的异步
    setTimeout(() => {
      let arr = [{'1':['1','2']},{'2':['1','4']},{'3':['2','6']},{'4':['1','2']}];
      let keyObject = this.handleArrToDefaultKey(arr);
      let keyArr = this.handleArrToKeyArr(arr);
      this.setState({keyObject,keyArr})
    }, 1000);
  }

  render() {
    let { keyObject, keyArr} = this.state;
    return (
      <div className="App">
        {keyArr.length!==0?(<Item keyObject={keyObject} keyArr={keyArr} />):null}
      </div>
    );
  }
}

export default App;
