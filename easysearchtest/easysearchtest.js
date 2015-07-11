ItemSchema = new SimpleSchema({
  words: {
    type: [String],
    label: "Question",
    max: 600,
    min: 2
  }
});
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
Items.attachSchema(ItemSchema);
