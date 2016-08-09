module App.search{
  export class SearchDataService extends BaseJsonDataService{
    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
    }


    public getDocuments(): ng.IPromise<Array<any>>{
      return this.getItems("Documents")
    }

    public getApps(): ng.IPromise<Array<any>>{
      return this.getItems("Applications")
    }

    public getL2Items(): ng.IPromise<Array<any>>{
      return this.getItems("LevelTwoNavItems")
    }

    public getL3Items(): ng.IPromise<Array<any>>{
      return this.getItems("LevelThreeNavItems")
    }


  public getL4Items(): ng.IPromise<Array<any>>{
    return this.getItems("LevelFourNavItems")
  }

  public getTypeFilters(): ng.IPromise<Array<any>>{
    return this.getItems("DocumentTypeFilters")
  }
}

}
