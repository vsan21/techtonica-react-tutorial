import React, { Component } from 'react';
import "./ThesaurusResult.css";
import { getTerms } from "../../util/thesaurusHelper";

export default class ThesaurusResults extends Component {

  render() {
    const { result } = this.props;
    const terms = getTerms(result);

    return (
      <div className={ `ThesaurusResult` }>
        <h2>Thesaurus Result</h2>
        {
          (terms && terms.map((term) => {
                const { wordType, antonyms, synonyms } = term;
                return (
                  <div className={ `WordType` } key={ `definition-${wordType}` }>
                    <div className='WordTypeTitle'>{ `${wordType.toUpperCase()}:` }</div>
                    { antonyms &&
                    <div className="WordTypeGroup">
                      <span className="WordTypeGroupTitle">
                        Antonyms:
                      </span>
                      { antonyms }
                    </div>
                    }
                    {
                      synonyms &&
                      <div className="WordTypeGroup">
                        <span className="WordTypeGroupTitle">Synonyms:</span>
                        { synonyms }
                      </div>
                    }
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
