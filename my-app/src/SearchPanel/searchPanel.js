import React from 'react';
import { Button } from 'reactstrap';

import './searchPanel.css';

export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addPost(this.state.text);
        this.setState({
            text: ''
        })
    }

    onChange = e => {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (
            <form className="bottom-panel" onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    placeholder="Введите новое задание"
                    className="input-panel form-control new-post-label"
                    onChange={this.onChange}
                    value={this.state.text}
                />
                <Button type="submit" color="secondary" className="btn">Добавить</Button>
            </form>
        );
    }
}