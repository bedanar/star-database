import React, {Component} from 'react' 
import ItemList from '../item-list'
import PersonDetails from '../item-details'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapiServices'
import {Row} from './people-page.js'


export default class PlanetsPagePage extends Component{
    swapiService = new SwapiService()
    state = {
        selectedPerson: 3,
    }
      onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson})
      }
    render() {

          const itemList = <ItemList onItemSelected = {this.onPersonSelected} 
          getData = {this.swapiService.getAllPeople}  />
          const personDetails = <PersonDetails personId = {this.state.selectedPerson} />

        return (
            <Row left={itemList} right={personDetails} />
        )
    }
}