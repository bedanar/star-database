import React from 'react'
import ItemList from '../item-list'
import HocHelper from '../../hoc-helpers'
import SwapiService from '../../services/swapiServices'
import { withSwapiService } from '../../hoc-helpers'

const withChildrenFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>{fn}</Wrapped>
        )
    }
}
const renderName =  ({name})=> {return <span>{name}</span>}
const renderModelAndName =  ({model, name})=> {
    return <span>{name} ({model})</span>}
const mapPersonMethodsToProps = (swapiService) => {
    return{getData: swapiService.getAllPeople}
}
const mapPlanetMethodsToProps = (swapiService) => {
    return{getData: swapiService.getAllPeople}
}
const mapStarshipMethodsToProps = (swapiService) => {
    return{getData: swapiService.getAllPeople}
}

export const PeopleList = withSwapiService(mapPersonMethodsToProps)
    (HocHelper(withChildrenFunction(renderName)(ItemList)))
export const PlanetsList = withSwapiService(mapPlanetMethodsToProps)(HocHelper
    (withChildrenFunction(renderName)(ItemList)))
export const StarshipsList = withSwapiService(mapStarshipMethodsToProps)(HocHelper
    (withChildrenFunction(renderName)(ItemList)))