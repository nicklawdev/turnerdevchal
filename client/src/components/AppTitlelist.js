import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import { connect } from 'react-redux';
import { getTitles, searchTitles } from '../actions/titleActions';
import PropTypes from 'prop-types';


class AppTitlelist extends Component {

    componentDidMount() {
        this.props.getTitles();
    }

    render() {
        const { titles } = this.props.title;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="titles-list">
                        {titles.map(({ _id, TitleName }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {TitleName}
                                </ListGroupItem>
                            </CSSTransition>

                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

AppTitlelist.propTypes = {
    getTitles: PropTypes.func.isRequired,
    title: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    title: state.title
})

export default connect(mapStateToProps, { getTitles, searchTitles })(AppTitlelist);