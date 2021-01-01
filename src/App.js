//mport logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";



class App extends Component{//App 이라는 컴포넌트 
  constructor(props){
    //component가 실행될때 constructor 가 가장 앞에 있으면 제일 먼저 실행되서 초기화 담당
    super(props);
    this.state={
      mode:'read',
      subject:{title:'WEB',sub:'World Woide Web! WWW'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[//데이터가 여러개 
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for desing'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    console.log('App render');
    //props나 state가 바뀌면 화면이 다시 그려진다. render 다시 호출
    var _title, _desc = null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    }else if(this.state.mode==='read'){
      _title=this.state.contents[0].title;
      _desc=this.state.contents[0].desc; 
    }
    return(
      //title="WEB" sub="world wide handsome web!"></Subject>
    <div className="App">
      <Subject 
        title={this.state.subject.title}
        sub={this.state.subject.sub}>
      </Subject>
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
