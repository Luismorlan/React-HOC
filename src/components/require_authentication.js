/**
 * Created by warren on 3/23/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
    class Authentication extends Component {

        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.context.router.push('/');
            }
        }

        render() {
            console.log(this.context);
            return <ComposedComponent {...this.props}/>
        }
    }

    function mapStateToProps(store) {
        return {authenticated: store.authenticated};
    }

    return connect(mapStateToProps)(Authentication);
}



