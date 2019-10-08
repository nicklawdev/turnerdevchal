import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { searchTitles } from '../actions/titleActions';

class AppTitleModal extends Component {

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        console.log(e.target)
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const searchInput = {
            titleName: this.state.titleName
        };

        this.props.searchTitles(searchInput.titleName);

        this.toggle();
    };

    render() {
        return (
            <div>
                <Button
                    color='dark'
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >
                    Search
          </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Search</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='title'>Title</Label>
                                <Input
                                    type='text'
                                    name='titleName'
                                    id='item'
                                    placeholder='Search by title name'
                                    onChange={this.onChange}
                                />
                                <Button color='dark' style={{ marginTop: '2rem' }} block>
                                    Search Titles
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    title: state.title,
});

export default connect(
    mapStateToProps,
    { searchTitles }
)(AppTitleModal);