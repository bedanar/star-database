import React, { Component } from 'react';
import SwapiService from '../../services/swapiServices';

import './item-details.css';


export const Record = ({item, field, label}) => {
  return (<li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>)
}

export default class ItemnDetails extends Component {
  swapiService = new SwapiService()

  state={
    item: null,
    image: null
  }
  componentDidMount() {
    this.updateItem()
  }
  updateItem () {
    const {itemId, getData, getImage} = this.props
    if (!itemId) {
      return
    }
    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImage(item)
        })
      })
  }
  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId || this.props.getData !== prevProps.getData) {
      this.updateItem()
    }
  }
  render() {
    if (!this.state.item){
      return <span>Select a person from a list</span>
    }
    const {item, image} = this.state
    const {id, name, gender, birthYear, eyeColor} = this.state.item
    return (
      <div className="person-details card">
        <img className="person-image"
          src={image} />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child, idx)=> {
              return React.cloneElement(child, {item})
            })}
          </ul>
        </div>
      </div>
    )
  }
}
