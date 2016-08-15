module App.curriculumIndex{
  export class CurriculumIndexDataService extends BaseJsonDataService{
    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
    }

    public getApplicationContent(){
      return this.getItemByKeyValue("OtherContent","Id","CurriculumIndex")
    }

    public getGradeTags(): ng.IPromise<Array<any>>{
      return this.getItems("GradeFilters")
    }

    public getSubjectTags(): ng.IPromise<Array<any>>{
      return this.getItems("SubjectFilters")
    }

    public getCurriculumTags(): ng.IPromise<Array<any>>{
      return this.getItems("CurriculumSubjectFilters")
    }
  }
}
