module App.search{
"use strict";

export class SearchController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    constructor(public $scope: ISearchScope,  public $timeout: ng.ITimeoutService, public dataService: SearchDataService){
      super($scope,$timeout,$timeout);
      this.$scope.currentItem = null;
      this.$scope.searchString =   sessionStorage.getItem("SearchString");
      this.$scope.searchResults = []
      this.searchDocuments(this.$scope.searchString)
    }

    public searchDocuments(searchString: string){
      this.dataService.getDocuments()
      .then((data)=>{
        data = _.filter(data, (o)=>{
          return(
            o.Name.includes(searchString) ||
            o.Description.includes(searchString) ||
            (o.Tags.indexOf(searchString) > -1)
          )
        })
        App.Common.replaceArrayContents(this.$scope.searchResults,data)

      })
    }


  }
}
