import React, { Component } from 'react';

class Subject extends Component{
    render(){
      console.log('Subject render');
      return (//header 1개의 최상위 태그만 사용 
        <header> 
        <h1><a href="/">{this.props.title}</a>
        </h1>{this.props.sub}
        </header>
      ); 
    }
  }

  export default Subject; 