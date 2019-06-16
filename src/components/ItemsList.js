import React, {Component} from "react";
import Item from './Item';
import data from './data.js';

class ItemsList extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      overlayShow: false,
      imgUrls: 
        [
        'https://www.westelm.com/weimgs/ab/images/wcm/products/201919/0016/arell-rug-2-m.jpg',
        'https://www.westelm.com/weimgs/ab/images/wcm/products/201919/0016/arell-rug-1-m.jpg'
        ]     
    }
    this.handleOverlayShow = this.handleOverlayShow.bind(this);
    this.resetOverlayShows = this.resetOverlayShows.bind(this);
  }        
  
  handleOverlayShow(e) {
    console.log(e.target)
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