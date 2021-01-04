//mport logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";


class App extends Component{//App 이라는 컴포넌트 
  constructor(props){
    //component가 실행될때 constructor 가 가장 앞에 있으면 제일 먼저 실행되서 초기화 담당
    super(props);
    this.max_content_id=3;
    this.state={
      mode:'create',
      selected_content_id:2, //기본으로 2번 선택
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
    var _title, _desc, _article = null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article=<ReadContent title={_title} desc={_desc}></ReadContent>

    }else if(this.state.mode==='read'){
      var i=0;
      while(i<this.state.contents.length){
        var data=this.state.contents[i];
        if(data.id===this.state.selected_content_id){
          _title=data.tile;
          _desc=data.desc; 
          break;
        }
        i=i+1;
      }
      _article=<ReadContent title={_title} desc={_desc}></ReadContent>
    
    }else if(this.state.mode==='create'){
      _article=<CreateContent onSubmit={function(_title,_desc)
      {
        console.log('Process onSubmit');
        // add content to this.state.content
        /*this.max_content_id=this.max_content_id+1;
        
        this.state.contents.push(//이거만 쓰면 react가 알지 못함, 아래 setState 필요
          {id:this.max_content_id, title:_title, desc:_desc}
        );*/
        var _contents= this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({
          //contents:this.state.contents
          contents:_contents
        });
      }.bind(this)}></CreateContent>
    }
    console.log('render',this);
    return(
      //title="WEB" sub="world wide handsome web!"></Subject>
    <div className="App">
      <Subject 
        title={this.state.subject.title}
        sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}
        ></Subject>

      <TOC onChangePage={function(id){
        this.setState({
          mode:'read',
          selected_content_id:Number(id)
        });
      }.bind(this)}
      data={this.state.contents}></TOC>

      <Control onChangeMode={function(_mode){
        this.setState({
          mode:_mode
        })
      }.bind(this)}></Control>

      {/*<ReadContent title={_title} desc={_desc}></ReadContent>*/}
      {_article}
    </div>
    );
  }
}


export default App;
