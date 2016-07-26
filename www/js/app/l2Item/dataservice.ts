module App.l2item{
  export interface ITestObject {
    Description: string;
    Name: string;
    IsDeleted: boolean;
  }
  export class L2DataService extends BaseJsonDataService{

    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
    }

    public getNavItems(): ng.IPromise<Array<any>>{
      return this.getItems("LevelOneNavItems");
    }

    public getL2ItemById(Id: string): ng.IPromise<Array<any>>{
      return this.getItemByKeyValue("LevelTwoNavItems","Id",Id)
    }

    public getL3NavItems(levelTwoId: string): ng.IPromise<Array<any>>{
      return this.getItemByKeyValue("LevelThreeNavItems","l2NavId",levelTwoId)
    }

    public getL4Items(levelThreeId: string): ng.IPromise<Array<any>>{
      return this.getItemByKeyValue("LevelFourNavItems", "l3NavId", levelThreeId)
    }


    public loadL4Content(contentId: string): ng.IPromise<Array<any>>{
      return this.getItemByKeyValue("LevelFourContent", "Id", contentId)
    }

    public getPageAudit(auditId : string): ng.IPromise<Array<any>>{
      return this.getItemByKeyValue("PageAudits", "Id", auditId);
    }

    public expandUserContacts(data): ng.IPromise<Array<any>>{
      return this.expandPropery(data, "UserContacts", "Id");
    }


    public getRelatedNews(topic: string): ng.IPromise<Array<any>>{
      return this.getItemsByTag([topic], "NewsItems")
    }

  }
}
