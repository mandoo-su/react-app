import React, { Component } from 'react';

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){
      //부모 component가 호출되면 무조건 자식 component의 render도 다 호출 되는걸 방지, false
      console.log('==>TOC reander'
      ,newProps.data//바뀐 정보
      ,this.props.data//이전의 정보
      );
      if(this.props.data===newProps.data){
        return false;
        //false로 하면 자식 component는 부모 component의 state가 바뀌어도 render 되지 않기 때문에 create한거 바로 목록에 표시X
      }
      return true;
    }
    render(){
      console.log('TOC render');
      var lists=[];
      var data= this.props.data;
      var i=0;
      while(i<data.length){
        lists.push(
        <li key={data[i].id}>
          <a href={"/content/"+data[i].id}
          //data-id={data[i].id} 속성을 이용한 방법
          onClick={function(id, e){
            e.preventDefault();
            //this.props.onChangePage(e.target.dataset.id); 속성을 이용한 방법
            this.props.onChangePage(id);
          }.bind(this, data[i].id)}
          >{data[i].title}</a></li>)
        i=i+1;
      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
    </nav>
      );
    }
  }

export default TOC; 