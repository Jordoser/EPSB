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
  }
}
