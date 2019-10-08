import React, { Component } from 'react';
import {
    Button,
    Container,
    ListGroup,
    ListGroupItem,
    Modal,
    ModalHeader,
    ModalBody,
    Label
} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import { connect } from 'react-redux';
import { getTitle, getTitles, searchTitles } from '../actions/titleActions';
import PropTypes from 'prop-types';
import uuid from 'uuid';


class AppTitlelist extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    componentDidMount() {
        this.props.getTitles();
    };

    getTitleDetails = (id) => {
        this.props.getTitle(id);
        this.toggle();
    };

    render() {
        const { titles } = this.props.title;
        const { titleDetail } = this.props.title;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="titles-list">
                        {titles.map(({ TitleId, TitleName }) => (
                            <CSSTransition key={TitleId} timeout={500} classNames="fade, title">
                                <ListGroupItem>
                                    {TitleName}
                                    <Button className="detailButton" size="sm" onClick={() => { this.getTitleDetails(TitleId) }}>Details</Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{titleDetail.TitleName}</ModalHeader>
                    <ModalBody>
                        <Label>
                            Title: {titleDetail.TitleName}
                        </Label>
                        <ListGroupItem>
                            Release Year: {titleDetail.ReleaseYear}
                        </ListGroupItem>
                        <Label>
                            Storylines:
                        </Label>
                        <TransitionGroup className="titles-list">
                            {titleDetail.Storylines.map(({ Language, Description }) => (
                                <CSSTransition key={uuid()} timeout={500} classNames="fade, title">
                                    <ListGroupItem>
                                        {Description}
                                        <Label>
                                            Language: {Language}
                                        </Label>
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ModalBody>
                </Modal>
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

export default connect(mapStateToProps, { getTitle, getTitles, searchTitles })(AppTitlelist);