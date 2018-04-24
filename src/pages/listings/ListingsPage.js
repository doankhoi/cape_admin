import React, { Component } from 'react';
import { connect } from 'react-redux';
import listings from '../../reducers/listings';
import callApi from './../../api/APICaller';

class ListingsPage extends Component {
    componentDidMount() {
        
    }

    render() {
        let { listings } = this.props;
        return (
            <div>Listings page</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps, null)(ListingsPage);
