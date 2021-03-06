import React from 'react'
import ItemDetails, {Record} from "../item-details"
import {withSwapiService} from '../../hoc-helpers'
import { SwapiServiceConsumer } from '../../swapi-service-context'


const PersonDetails = ({props}) => {
  return(
    <ItemDetails {...props} >
        <Record field="gender" label="Gender" />
      </ItemDetails>)
}
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImage: swapiService.getPersonImage
  }
}
export default withSwapiService(mapMethodsToProps)(PersonDetails)