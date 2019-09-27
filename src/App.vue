<template>
<div>
  <header class="header">
    <img src="nba.png" alt="" class="logo">
    <p class="header-subtitle">
      Franchise Search Engine 🏀
    </p>
  </header>

  <div class="container">
    <ais-instant-search :search-client="searchClient" index-name="algolia_se_assignment">
      <div class="search-panel">
        <div class="search-panel__filters">
          <ais-clear-refinements />

          <h2>Filter by Location 📍</h2>
          <ais-refinement-list attribute="location" show-more/>
          <h2>Filter by Score</h2>
          <ais-range-input attribute="score" />
          <h2>Still active in the NBA 🏀</h2>
          <ais-toggle-refinement attribute="active" label="Active Teams" />
        </div>
        <div class="search-panel__results">
          <ais-search-box placeholder="Type here your city or favorite franchise" class="searchbox" autofocus />
          <ais-stats />
          <ais-current-refinements />

          <ais-hits>
            <template slot="item" slot-scope="{ item }">
              <img :src="item.logoUrl" alt="no logo found ☹️" height="75px">
                <h1>
                  <ais-highlight :hit="item" attribute="location" />&nbsp;<ais-highlight :hit="item" attribute="name" />
                </h1>
                <a v-if="item.active" :href="'https://www.google.com/search?q='+ item.location.toLowerCase() +'+' + item.name.toLowerCase()+ '+last+game'" class="ais-RangeInput-submit" target="_blank">Last game results 🏀</a>
            </template>
          </ais-hits>
          <div class="pagination">
            <ais-pagination />
          </div>
        </div>
      </div>
    </ais-instant-search>
  </div>
</div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/algolia-min.css';

export default {
  data() {
    return {
      searchClient: algoliasearch(
        'Q9ITTKHWZN',
        'f05df4ddd68b97d3fb720da019f14ef1'
      ),
    };
  },
};
</script>

<style>
body,
h1 {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
  Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

.header {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.5rem 1rem;
  background-color: rgb(15, 54, 107);
  color: #fff;
  margin-bottom: 1rem;
}

.header a {
  color: #fff;
  text-decoration: none;
}

.header-title {
  font-size: 1.2rem;
  font-weight: normal;
}

.header-title::after {
  content: ' ▸ ';
  padding: 0 0.5rem;
}

.header-subtitle {
  font-size: 1.2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.search-panel {
  display: flex;
}

.search-panel__filters {
  flex: 1;
  margin-right: 1em;
}

.search-panel__results {
  flex: 3;
}

.searchbox {
  margin-bottom: 2rem;
}

.pagination {
  margin: 2rem auto;
  text-align: center;
}

.logo {
  max-height: 50px;
  margin-right: 1rem;
}

.ais-ClearRefinements-button,
.ais-RangeInput-submit,
.ais-Pagination-link,
.ais-RefinementList-showMore {
  background-color: rgb(15, 54, 107) !important;
  color: white;
}

.ais-CurrentRefinements-list {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.ais-Hits-item{
  text-align: center;
}
</style>
