import React, { Component } from 'react';
import "./ThesaurusResult.css";

export default class ThesaurusResults extends Component {
  getWordTypeExamples = (wordTypeExamples) => {
    if (wordTypeExamples && wordTypeExamples.length > 0) {
      return wordTypeExamples.reduce((all, word, index) => {
        if (index === wordTypeExamples.length - 1) {
          all = `${all} ${word}`;
        } else {
          all = `${all} ${word},`;
        }
        return all
      }, "");
    }
  };

  getTerms() {
    const result = this.props.result;
    const wordTypes = Object.keys(result);

    if (wordTypes && wordTypes.length > 0) {
      return wordTypes.map((wordType) => {
        const wordTypeObj = { wordType };
        const { ant, syn } = result[ wordType ];

        const [ antonyms, synonyms ] = [ this.getWordTypeExamples(ant), this.getWordTypeExamples(syn) ];
        if (antonyms) {
          wordTypeObj[ "antonyms" ] = antonyms
        }

        if (synonyms) {
          wordTypeObj[ "synonyms" ] = synonyms
        }

        return wordTypeObj;
      });
    }
  }

  render() {
    const terms = this.getTerms();

    return (
      <div className={ `ThesaurusResult` }>
        <h2>Thesaurus Result</h2>
        {
          (terms && terms.map((term) => {
                const { wordType, antonyms, synonyms } = term;
                return (
                  <div className={ `WordType` } key={ `definition-${wordType}` }>
                    <div className='WordTypeTitle'>{ `${wordType.toUpperCase()}:` }</div>
                    { antonyms && <div className="WordTypeGroup"><span className="WordTypeGroupTitle">Antonyms:</span> { antonyms } </div> }
                    { synonyms && <div className="WordTypeGroup"><span className="WordTypeGroupTitle">Synonyms:</span> { synonyms } </div> }
                  </div>
                )
              }
            )
          )
        }
      </div>
    )
  }

}
