import React, { PropTypes } from 'react'
import Words from "./Words"

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: 'MD' };
   }
  onClick(state){
    this.setState({ selectedCategory: state}, () => console.log(this.state) );
  }
  render() {
     return (
       <ul>
         <div className='words'></div>
         <Words words={this.props.data[this.state.selectedCategory]}/>
         {Object.keys(this.props.data).map((state) =>
           <div>
             <li onClick={()=>this.onClick(state)}>{state}</li>
           </div>
         )}
       </ul>
   )
 }
}

Posts.propTypes = {
  data: PropTypes.object.isRequired
}

export default Posts
