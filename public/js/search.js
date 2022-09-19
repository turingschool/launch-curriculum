$(function(config){
  var algolia = algoliasearch(config.applicationId, config.apiKey);
  var index = algolia.initIndex(config.indexName);

  $('.clear-search').on('click', function() {
    $('.search-bar input').val('');
    hideSearch();
  });

  $('.search-bar input').on('input', function() {
    var query = $(this).val();
    updateSearchQuery(query);
  });

  function updateSearchQuery(query) {
    if (query.length) {
      index.search(query, {
        hitsPerPage: 10,
        page: 0,
        typoTolerance: false,
        ignorePlurals: true,
        attributesToHighlight: [
          'title',
          'content'
        ],
        highlightPreTag: '<span class="search-highlight">',
        highlightPostTag: '</span>'
      }, onResult);
    } else {
      hideSearch();
    }
  };

  function onResult(err, data) {
    if (err) { return console.error(err) }
    displayResults(data);
  };

  function displayResults(data) {
    $('.search-results').html('');
    showSearch();
    if (data.hits.length) {
      renderHits(data.hits);
    } else {
      renderNoResultsFound();
    }
  };

  function renderNoResultsFound() {
    $('.search-results').append('<p>No search results for that query</p>');
  };

  function renderHits(hits) {
    var documentFragment = $(document.createDocumentFragment());
    hits.forEach(function(hit) {
      documentFragment.append(hitTemplate(hit));
    });

    $('.search-results').append(documentFragment);
  };

  function hitTemplate(hit) {
    try {
      let link = `<a href="${hit.url}">${hit._highlightResult.title.value}</a>`;
      let content = `<p>${hit._highlightResult.content.value.replace('<script>','')}</p>`
      return `<li class="result">
                ${link}
                ${content}
              </li>`
    }
    catch(err){
      console.log(err)
      return '<p></p>';
    }
  };

  function showSearch() {
    $('.search-results-container, .clear-search').show();
  };

  function hideSearch() {
    $('.search-results-container, .clear-search').hide();
  };
}(window.ALGOLIA_CONFIG));
