import React, { Component } from "react";
import {getData} from '../../redux/getDataAction';
import {connect} from 'react-redux'
import "./gifBox.styles.scss";

class GifBox extends Component {
  constructor() {
    super();
    this.state = {
      data: [{}],
      keyWord: ''
    };
  }

  handleSearchButton = event => {
    event.preventDefault()
    this.props.getData(this.state.keyWord)
  }

  render() {
    return (
      <div className="container">
        <h1>GIF SEARCH ENGINE</h1>
        <div className="items">
          <input type="text" required onChange={event => {
              this.setState({ keyWord: event.target.value})
              console.log(this.state.keyWord)
          }} />
        </div>
        <div className="items">
          <button onClick={event => this.handleSearchButton(event)}>Search</button>
        </div>
        <div className="items list">
          <div className="list__contents">
           
          </div>
          <div className="list__contents">
            voluptas quos sequi sunt autem minus odio, quaerat distinctio
            temporibus
          </div>
          <div className="list__contents">
            voluptas quos sequi sunt autem minus odio, quaerat distinctio
            temporibus
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    const {getGifNotFound} = state.gifReducer;
    return {
        getGifNotFound
    }
}

export default connect(mapStateToProps, {getData})(GifBox);
