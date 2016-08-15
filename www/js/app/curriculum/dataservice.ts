module App.curriculum{
  export class CurriculumDataService extends BaseJsonDataService{
    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
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

    public getCurriculumTypeTags(): ng.IPromise<Array<any>>{
      return this.getItems("ResourceTypeFilters")
    }
    public getGradeAndSubject(Tags: Array<string>): ng.IPromise<Array<any>>{
      return this.getItemsByTag(Tags, "Resources")
    }
    public getContentTags(): ng.IPromise<Array<any>>{
      return this.getItems("DocumentTypeFilters")
    }
  }
}
