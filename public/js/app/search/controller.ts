module App.search{
"use strict";

export class SearchController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService','$q'];

    constructor(public $scope: ISearchScope,  public $timeout: ng.ITimeoutService, public dataService: SearchDataService,public $q: ng.IQService){
      super($scope,$timeout,$timeout);
      this.$scope.currentItem = null;
      this.$scope.searchString =   sessionStorage.getItem("SearchString");
      this.$scope.searchResults = []
      this.searchDocuments(this.$scope.searchString)
    }

    public searchDocuments(searchString: string): ng.IPromise<Array<any>>{
      var deferred = this.$q.defer();
      this.dataService.getDocuments()
      .then((data)=>{
        data = _.filter(data, (o)=>{
          return(
            o.Name.includes(searchString) ||
            o.Description.includes(searchString) ||
            (o.Tags.indexOf(searchString) > -1)
          )
        })
        deferred.resolve(data);
      })
      .catch(ex=>{
        deferred.reject();
      })
      return deferred.promise;
    }


  }
}
