import React, {Component} from 'react';
import "./ThesaurusResults.css";

export default class ThesaurusResults extends Component {
  constructor(props){
    super(props);

  }

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
  }

  getData () {
    const wordTypes = Object.keys(this.props.data);

    if (wordTypes && wordTypes.length > 0) {
      const terms = wordTypes.map((wordType) => {
        const wordTypeObj = { wordType };
        const { ant, syn } = result[ wordType ];

        const [ antonyms, synonyms ] = [ this.getWordTypeExamples(ant), this.getWordTypeExamples(syn) ]
        if (antonyms) {
          wordTypeObj[ "antonyms" ] = antonyms
        }

        if (synonyms) {
          wordTypeObj[ "synonyms" ] = synonyms
        }

        return wordTypeObj;
      });

      return { terms }
    } else {
      return initialState.data
    }
  }

  render(){
    const { conditionalRender, data, requestStatus } = props;
    const { terms } = data;

    return (
      <div className={ `Result-Section ThesaurusResults` }>
        <div className={ `Result ThesaurusResult` }>
          { conditionalRender({
            status: requestStatus,
            result: (terms && terms.map((term) => {
                  const { wordType, antonyms, synonyms } = term;
                  return (
                    <div className={ `WordType` } key={ `definition-${wordType}` }>
                      <div>{ `${wordType.toUpperCase()}:` }</div>
                      { antonyms && <div>antonyms: { antonyms } </div> }
                      { synonyms && <div>synonyms: { synonyms } </div> }
                    </div>
                  )
                }
              )
            )
          }) }
        </div>
      </div>
    )
  }

}
