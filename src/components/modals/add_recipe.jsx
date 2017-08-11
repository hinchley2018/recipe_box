import React, {Component} from 'react';
import ReactModal from "react-modal";

import '../../styles/modals.css';
import AddRecipeForm from "./add_form";

export default class AddRecipeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        //this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary addButton" onClick={this.openModal}>Add</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Add Modal"
                    /*className="Modal"*/
                    shouldCloseOnOverlayClick={true}
                >
                    <AddRecipeForm closeModal={this.closeModal}/>
                </ReactModal>
            </div>
        );
    }

    openModal() {
        this.setState({showModal: true})
    }
    closeModal() {
        this.setState({showModal: false})
    }
}