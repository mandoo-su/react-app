import React, { Component } from 'react';

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state={
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler=this.inputFormHandler.bind(this);//요 함수를 미리 bind
  }

  inputFormHandler(e){
    this.setState({[e.target.name]:e.target.value});
  }
    render(){ 
      console.log(this.props.data);
      console.log('UpdateContent render');
      return(
        <article>
          <h2>Update</h2>
          <form //html form 기능
          action="/create_precess"
          method="post"
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(//e의 속성을 보고 설정
              this.state.id,
              this.state.title,//e.target.title.value,
              this.state.desc//e.target.desc.value
            );
          }.bind(this)}
          >

          
            <input 
            type="hidden"
            name ="id"
            value={this.state.id}>
            </input>
            <p>
              <input 
              type="text"
              name="title"
              placeholder="title"//아무것도 입력이 안되있을때 출력되는 기본값
              value={this.state.title}//constructor 입력 필요
              onChange={this.inputFormHandler}
            ></input>
            </p>
            <p>
              <textarea 
              onChange={this.inputFormHandler}
              name="desc"
              placeholder="description" 
              value={this.state.desc}></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

export default UpdateContent; 