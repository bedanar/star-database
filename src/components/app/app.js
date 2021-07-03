import React, { Component } from 'react';
import Header from '../header';
import './app.css';
import SwapiService from '../../services/swapiServices';
import {PeopleList, PersonDetails, PlanetDetails,StarshipDetails, PlanetsList, StarshipsList } from '../sw-components'
import {SwapiServiceProvider} from '../../swapi-service-context'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import {Row} from '../pages'

export default class App extends Component{
  //swapiService = new SwapiService()
  state = {
    swapiService: new SwapiService()
  }
  onServiceChange = ()=> {
    this.setState(({swapiService})=> {
      const Service = swapiService instanceof SwapiService ? null : SwapiService
      return{
        swapiService: new Service()
      }
    })
  }
  render() {
    return (
      <div>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Header onServiceChange={this.onServiceChange}/>
          {/* <RandomPlanet /> */}
          <PeoplePage />
          <StarshipsPage />
          <PlanetsPage/>

        </SwapiServiceProvider>
      </div>
    );
  }
};
