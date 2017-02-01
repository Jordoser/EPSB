module App.levelTwo{
  export interface ITestObject {
    Description: string;
    Name: string;
    IsDeleted: boolean;
  }
  export class LevelTwoDataService extends BaseJsonDataService{

    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
    }

    public loadItemById(Id: string): ng.IPromise<any>{
      return this.getItemByKeyValue("LevelTwoContent","Id",Id)
    }

    public getSectionItemsById(Id: string): ng.IPromise<Array<any>>{
      return this.getItemByKeyValue("LevelThreeNavItems", "l2NavId", Id)
    }

    public getMetadataById(Id: string): ng.IPromise<Array<any>>{
      return this.expandPropery([Id], "Metadata", "Id");
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
