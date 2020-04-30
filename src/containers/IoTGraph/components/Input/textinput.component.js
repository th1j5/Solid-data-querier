import React from 'react';
import {TextinputWrapper} from './textinput.style';


export class Textinput extends React.Component {
    // Save contents of the textbox as application state
    state = {
        url:''
    }

    // Update the application state if the textbox contents changes
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    // Once submitted, pass the application state to the global state
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.url);
    }

    // Visual component of our application, which should be shown (textbox + subit button)
    render(){
        return(
            <TextinputWrapper>
                <p>Insert database URL:</p>
                <form onSubmit = {this.onSubmit} style = {{display: 'flex'}}>
                    <input
                        type='text'
                        name='url'
                        placeholder='Insert database url...'
                        style={{flex: '10', padding: ''}}
                        value={this.state.url}
                        onChange={this.onChange}
                    />
                    <input
                        type='submit'
                        value='submit'
                        className='btn'
                        style={{flex: '1'}}
                    />
                </form>
            </TextinputWrapper>
        )
    }
}