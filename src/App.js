import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
// import watchFetchProducts, {FETCH_USERS_SUCCESS} from './saga/saga';
import { bindActionCreators } from 'redux';
import { requestApiData } from './actions/product-actions';

class App extends Component {
  constructor(props){
    super(props);
  }
componentDidMount(){
  this.props.requestApiData();
}

productsDetails = (x, i) => 
  <div className="container-fruits" key={x.id.value}>
    <img src={x.image} />
    <h1>{x.name}</h1>
  </div>

  render() {
    console.log(this.props.data);
    return (
      <div className="App">
        <header className="App-header">
         
          <div > { (this.props.data.products || []).map(this.productsDetails) } </div>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => ({data: state.data});
const mapDispatchToProps = dispatch => 
  bindActionCreators({ requestApiData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (App);