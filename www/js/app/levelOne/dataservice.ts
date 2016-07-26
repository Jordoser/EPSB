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

    public loadItemById(Id: string): ng.IPromise<any>{
      return this.getItemByKeyValue("LevelOneContent","Id",Id)
    }
  }
}
