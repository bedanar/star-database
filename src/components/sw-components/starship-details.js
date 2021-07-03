import React from 'react'
import ItemDetails, {Record} from "../item-details"
import {withSwapiService} from '../../hoc-helpers'

const StarshipDetails = ({props} ) => {
    return (
              <ItemDetails {...props} >
                    <Record field="gender" label="Gender" />
              </ItemDetails>
    )
}
const mapMethodsToProps = (swapiService) => {
  return{
    getData: swapiService.getStarship,
    getImage: swapiService.getPersonImage
  }
}
export default withSwapiService(mapMethodsToProps)(StarshipDetails)