module App.news{
  export class NewsDataService extends BaseJsonDataService{
    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
    }

    public getApplicationContent(){
      return this.getItemByKeyValue("OtherContent","Id","News")
    }

    public getNews(tags: Array<any>): ng.IPromise<Array<any>>{
      return this.getItemsByTag(tags,"NewsItems")
    }

    public getNewsFilters(): ng.IPromise<Array<any>>{
      return this.getItems("NewsFilters")
    }

    public getMetadata(Id): ng.IPromise<any>{
      return this.getItemByKeyValue("Metadata","Id",Id)
    }
  }
}
