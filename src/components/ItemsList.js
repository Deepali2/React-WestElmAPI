import React, {Component} from "react";
import Item from './Item';
import data from './data.js';

class ItemsList extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      overlayShow: false        
    }
    this.handleOverlayShow = this.handleOverlayShow.bind(this);
    this.resetOverlayShows = this.resetOverlayShows.bind(this);
  }        
  
  handleOverlayShow(e) {
    this.setState({overlayShow: true});
  }

  resetOverlayShows() {
    this.setState({overlayShow: false});
  }

  render() {
    return (
      <div >
        <ul className='container'>
        {data.groups.map(item => 
        (<Item 
          item={item} 
          key={item.id} 
          overlayShow={this.state.overlayShow} 
          handleOverlayShow = {this.handleOverlayShow}
          imgUrls = {this.state.imgUrls}
          />))}
        </ul>
      </div>
    ); 
  }            
}

export default ItemsList;