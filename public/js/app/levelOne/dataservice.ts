module App.levelOne{
  export interface ITestObject {
    Description: string;
    Name: string;
    IsDeleted: boolean;
  }
  export class LevelOneDataService extends BaseJsonDataService{

    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
    }

    public getItemById(Id: string): ng.IPromise<any>{
      return this.getItemByKeyValue("LevelOneContent","Id",Id)
    }

    public getSectionItemsById(Id: string): ng.IPromise<Array<any>>{
      return this.getItemByKeyValue("LevelTwoNavItems", "l1NavId", Id)
    }

    public getRelatedNews(Tags: Array<string>) : ng.IPromise<Array<any>>{
      return this.getItemsByTag(Tags,"NewsItems")
    }

    public getRelatedApps(Tags: Array<string>) : ng.IPromise<Array<any>>{
      return this.getItemsByTag(Tags,"Applications")
    }

    public getMetadata(item: any){
      return this.expandPropery([item.MetadataId], "Metadata", "Id")
    }
  }
}
