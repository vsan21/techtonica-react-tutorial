import React, { Component } from 'react';
import './WordSearch.css';

export default class WordSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
    };
  }

  handleChange = (event) => {
    this.setState({ word: event.target.value })
  };

  render() {
    return (
      <div className={ `WordSearch` }>
        <div
          className={ `SearchFormContainer` }
        >
          <form
            className={ `SearchForm` }
          >
            <input
              className={ `WordTextInput` }
              type="text"
              name="words"
              value={ this.state.word }
              onChange={ this.handleChange }
            />

            <input
              className={ `Submit` }
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    )
  }
}


