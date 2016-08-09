module App.curriculum{
  export class CurriculumDataService extends BaseJsonDataService{
    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
    }

    public getApplicationContent(){
      return this.getItemByKeyValue("OtherContent","Id","Curriculum")
    }

    public getCurriculum(tags: Array<any>): ng.IPromise<Array<any>>{
      return this.getItemsByTag(tags,"CurriculumItems")
    }

    public getCurriculumFilters(): ng.IPromise<Array<any>>{
      return this.getItems("CurriculumFilters")
    }

    public getMetadata(Id): ng.IPromise<any>{
      return this.getItemByKeyValue("Metadata","Id",Id)
    }
  }
}
