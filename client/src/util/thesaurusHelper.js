const getTerms = (result) => {
  const wordTypes = Object.keys(result);

  if (wordTypes && wordTypes.length > 0) {
    return wordTypes.map((wordType) => {
      const wordTypeObj = { wordType };
      const { ant, syn } = result[ wordType ];

      const [ antonyms, synonyms ] = [ getWordTypeExamples(ant), getWordTypeExamples(syn) ];
      if (antonyms) {
        wordTypeObj[ "antonyms" ] = antonyms
      }

      if (synonyms) {
        wordTypeObj[ "synonyms" ] = synonyms
      }

      return wordTypeObj;
    });
  }
};

const getWordTypeExamples = (wordTypeExamples) => {
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

export { getTerms }
