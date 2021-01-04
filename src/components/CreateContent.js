import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
      console.log('CreateContent render');
      return(
        <article>
          <h2>Create</h2>
          <form //html form 기능
          action="/create_precess"
          method="post"
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(//e의 속성을 보고 설정
              e.target.title.value,
              e.target.desc.value
            );
            
            alert('submit!!!!');
          }.bind(this)}
          >
            <p><input 
              type="text"
              name="title"
              placeholder="title"//아무것도 입력이 안되있을때 출력되는 기본값
            ></input></p>
            <p>
              <textarea 
              name="desc"
              placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

export default CreateContent; 