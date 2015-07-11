
Items = new Mongo.Collection("Items");
EasySearch.createSearchIndex('words', {
  'field' : 'words',
  'collection' : Items,
  // 'limit' : 20,
  'use' : 'mongo-db',
  'props' : {
  'query' : function (searchString, opts) {
    // Default query
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    return query;
    }
  }
});
