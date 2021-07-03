import React, { Component } from 'react';
import HocHelper from '../../hoc-helpers';
import SwapiService from '../../services/swapiServices';

import './item-list.css';

export const ItemList = (props)=> {
  //swapiService = new SwapiService(
    const {data, onItemSelected, children: renderLabel} = props
    const items = data.map((item)=> {
      const {id} = item
      const label = renderLabel(item)
      return <li className="list-group-item" key={id} onClick = {() => onItemSelected(id)}>{label}</li>
    })
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
}
const {getAllPeople} = new SwapiService
export default HocHelper(ItemList, getAllPeople)