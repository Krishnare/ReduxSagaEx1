import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
// import watchFetchProducts, {FETCH_USERS_SUCCESS} from './saga/saga';
import { bindActionCreators } from 'redux';
import { requestApiData, clickStoreData } from './actions/product-actions';

class App extends Component {
  constructor(props){
    super(props);
    //this.productsDetails = this.productsDetails.bind(this);
  }

  

// Onload the page this will be load

// componentDidMount(){
//   this.props.requestApiData();
// }

imageClick = (imageNumber) =>{
  if(imageNumber !== 0){
    // return {"you Clicked": imageNumber}
    this.props.clickStoreData(imageNumber);
  }else{
    console.log('Nothing Clicked');
  }
  
}

productsDetails = (x, i) => 
  <div className="container-fruits" key={x.id.value}>
    <h1>{x.name}</h1>
    <div onClick={() => this.imageClick(x.id) }><img src={x.image} /></div>
    <div>{this.imageClick}</div>
  </div>

productsimg = (x, i) =>
  <div onClick={x.name}><img src={x.image} /></div>

  render() {
    
    // console.log(this.props.data);
    const {data, error } = this.props;
    return (
      <div className="App">
        <header className="App-header">

          <div className="images" onClick = { this.props.requestApiData }> Click </div>
          <section className="grid">
                { (this.props.data.products || []).map(this.productsDetails) }
          </section>
          
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => ({data: state.data});
const mapDispatchToProps = dispatch => 
  bindActionCreators({ requestApiData, clickStoreData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (App);