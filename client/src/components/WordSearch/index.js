import React, { Component } from 'react';
import axios from 'axios';
import './WordSearch.css';
import ThesaurusResult from '../ThesaurusResult';

const baseUrl = `https://words.bighugelabs.com/api/2/953e496f328a4dbe6dc8a300da56c81e`;

export default class WordSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      thesaurusResult: null
    };
  }

  handleChange = (event) => {
    this.setState({ word: event.target.value })
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`${baseUrl}/${this.state.word}/json`)
      .then(response => this.setState({ thesaurusResult: response.data }))
      .catch(error => console.log(error))
  };

  render() {
    const {thesaurusResult} = this.state;
    return (
      <div className={ `WordSearch` }>
        <div
          className={ `SearchFormContainer` }
        >
          <form
            className={ `SearchForm` }
            onSubmit={ this.handleSubmit }
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
        { thesaurusResult && <ThesaurusResult result={ thesaurusResult }/> }
      </div>
    )
  }
}


