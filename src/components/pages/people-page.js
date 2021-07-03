import React, {Component} from 'react' 
import ItemList from '../item-list'
import PersonDetails from '../item-details'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapiServices'


export class ErrorBoundry extends Component {
    state = {
        hasError: false
      }
    componentDidCatch() {
        console.log('Errrrrrro')
        this.setState({hasError: true})
    }
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return this.props.children
    }
}


export default class PeoplePage extends Component{
    swapiService = new SwapiService()
    state = {
        selectedPerson: 3,
    }
      onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson})
      }
    render() {
        const {selectedPerson} = this.state

        return (
            <Row left={<ItemList onItemSelected = {this.onPersonSelected}/>} right={<PersonDetails personId = {this.state.selectedPerson} />} />
        )
    }
}
export const Row = ({left, right}) => {
    return (
        <div>
            <ErrorBoundry>
                <div className="col-md-6">
                    {left}
                </div>
                <div className="col-md-6">
                    {right}
                </div>
            </ErrorBoundry>
        </div>
    )
}
