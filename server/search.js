const { client, index, type } = require('./connection')

module.exports = {
    /** Query index*/
    queryTerm (term, offset = 0) {
      const body = {
        from: offset, //from =10 result each query 
        query: { match: {
          text: {
            query: term,
            operator: 'and',
            fuzziness: 'auto' //fuzziness = 2 auto if fuzziness = 1 then result could be Alexander vs Alexunder
          } } },
        highlight: { fields: { text: {} } } //return an extra field for HTML display text subset
      }
  
      return client.search({ index, type, body })
    }
}