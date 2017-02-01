module App.levelThree{
  export interface ITestObject {
    Description: string;
    Name: string;
    IsDeleted: boolean;
  }
  export class LevelThreeDataService extends BaseJsonDataService{

    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
    }

    public loadItemById(Id: string): ng.IPromise<any>{
      return this.getItemByKeyValue("LevelThreeContent","Id",Id)
    }

    public getSectionItemsById(Id: string): ng.IPromise<Array<any>>{
      return this.getItemByKeyValue("LevelFourNavItems", "l3NavId", Id)
    }
      public getRelatedNews(Tags: Array<string>) : ng.IPromise<Array<any>>{
      return this.getItemsByTag(Tags,"NewsItems")
    }

    public getRelatedApps(Tags: Array<string>) : ng.IPromise<Array<any>>{
      return this.getItemsByTag(Tags,"Applications")
    }
    
    public getRelatedContacts(Tags: Array<string>) : ng.IPromise<Array<any>>{
      return this.getItemsByTag(Tags,"UserContacts")
    }

    public getMetadata(item: any){
      return this.expandPropery([item.MetadataId], "Metadata", "Id")
    }
  }
}
