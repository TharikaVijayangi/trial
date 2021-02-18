import firebase from '../Configurations/FbConfig';
import React, { Component } from 'react'

const db=firebase.firestore();

class Home extends Component {

    state = {
        contactsData: []
    }

    componentDidMount(){
        db.collection('Contacts').get().then(data=>{
            data.docs.forEach(doc=>{
                this.setState({
                    contactsData:[...this.state.contactsData,doc.data()]
                })
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.contactsData.length?(
                    this.state.contactsData.map(item=>{
                        return(
                            <div>
                                <p>{item.Name}</p>
                                <p>{item.Address}</p>
                                <p>{item.Phone}</p>
                            </div>
                        )
                    })
                ):(
                    <p>Loading.........</p>
                )}
                
            </div>
        )
    }
}

export default Home;
