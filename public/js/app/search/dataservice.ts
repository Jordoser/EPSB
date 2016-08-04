module App.search{
  export class SearchDataService extends BaseJsonDataService{
    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
    }


    public getDocuments(): ng.IPromise<Array<any>>{
      return this.getItems("Documents")
    }
  }
}
