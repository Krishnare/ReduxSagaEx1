import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
// import watchFetchProducts, {FETCH_USERS_SUCCESS} from './saga/saga';
import { bindActionCreators } from 'redux';
import { requestApiData, clickStoreData } from './actions/product-actions';
let currentValId="";
class App extends Component {
  constructor(props){
    super(props);
  }

// Onload the page this will be load
// componentDidMount(){
//   this.props.requestApiData();
// }

imageClick = (imageNumber) =>{
    let totalVal = 'This is Clicked' + imageNumber;
    this.props.clickStoreData(totalVal);
    if(imageNumber=='undefined'){
      imageNumber = "";
    }else{
      currentValId = imageNumber
    }
}

productsDetails = (x, i, total) => 
  <div className="container-fruits">
    <h1>{x.name}</h1>
    <div onClick={this.imageClick.bind(this, x.id, total)}><img src={x.image} id={x.id} /> <div> { currentValId == total.imageId ? total.imageId="" : total.imageId } </div></div>
    <div>{this.imageClick}</div>
  </div>


productsimg = (x, i) =>
  <div onClick={x.name}><img src={x.image} /></div>
  render() {
    const { imageId, error } = this.props.imageId;
    let products;
      if((typeof(this.props.dataDetail.length) !== "undefined") || (this.props.dataDetail.imageId )){
        products = (this.props.dataDetail).map(this.productsDetails)
      }
    return (
      <div className="App">
        <header className="App-header">
        
          <div className="images" onClick = { this.props.requestApiData }> Click </div>
          <section className="grid">
            {products}
          </section>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => ({dataDetail: state.dataDetail, imageId: [state.imageId]});
const mapDispatchToProps = dispatch => 
      bindActionCreators({ requestApiData, clickStoreData}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (App);