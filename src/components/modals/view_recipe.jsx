import React, {Component} from 'react';
import ReactModal from "react-modal";

import '../../styles/modals.css';
import ItemList from "../item_list";
import OrderedList from "../ordered_list";

export default class ViewRecipeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary recipeButton" onClick={this.openModal}>{this.props.title}</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel={this.props.title}
                    /*className="Modal"*/
                    shouldCloseOnOverlayClick={true}
                >

                    <div className="closeButton">
                        <button className="btn" onClick={this.closeModal}>Close</button>
                    </div>
                    <div>
                        <h1>{this.props.title}</h1>
                        <ItemList title={"Ingredients"} items={this.props.ingredients}/>
                        <OrderedList title={"Instructions"} items={this.props.instructions}/>
                        <button className="btn">Update</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>

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