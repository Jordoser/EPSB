// Created data binding controller for index page
module App.search{
  "use strict"
  angular.module('searchApp',[])
  .controller('searchController', SearchController)
  .service('dataService',SearchDataService)
  .filter('highlight', ($sce)=>{
    return function(text, phrase) {
     if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
       '<span class="highlighted">$1</span>')

     return $sce.trustAsHtml(text)
   }
  })


  export interface ISearchScope extends IBaseScope{
      currentItem: any;
      searchString: string;
      searchResults: Array<any>;
  }
}
