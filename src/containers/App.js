import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItemDetails } from "../actions";
import List from "../components/List";
import Header from "../components/Header"

class App extends Component {
    state = {};
    componentDidMount() {
        this.props.fetchItemDetails();
    }
    render() {
        const { data } = this.props.data;

        return (
            <div>
                <Header />
                <List data={data} />
            </div>
        );
    }
}

const mapStateToProps = ({ data = {} }) => ({
    data
});
export default connect(
    mapStateToProps,
    {
        fetchItemDetails
    }
)(App);