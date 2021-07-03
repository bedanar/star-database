import React, {Component} from 'react'
import ErrorIndicator from '../components/error-indicator';
import Spinner from '../components/spinner';

const HocHelper =(View) => {
    return class extends Component {
      state = {
        data: null,
        loading: false,
        error: false
      }
      componentDidMount () {
        this.update()
      }
      update() {
        this.setState({
          loading: true,
          error: false
        })
        this.props.getData()
          .then((data) => {
            this.setState({
              data,
              loading: false
            })
          }).catch(()=>{
            this.setState({
              error: true,
              loading: false
            })
          })
      }
      render(){
        const {data, loading, error}= this.state
        if (loading) {
          return <Spinner />
        }
        if (error) {
          return <ErrorIndicator />
        }
        //const items = this.renderItems(peopleList)
        return (
          <View {...this.props} data={data} />
        );
        
      }
    }
  }

  export default HocHelper