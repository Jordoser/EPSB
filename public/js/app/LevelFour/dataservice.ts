module App.levelFour{
  export interface ITestObject {
    Description: string;
    Name: string;
    IsDeleted: boolean;
  }
  export class LevelFourDataService extends BaseJsonDataService{

    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
    }

    public loadItemById(Id: string): ng.IPromise<any>{
      return this.getItemByKeyValue("LevelFourContent","Id",Id)
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
