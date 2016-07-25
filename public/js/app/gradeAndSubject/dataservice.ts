module App.gradeAndSubject{

  export class GradeAndSubjectDataService extends BaseJsonDataService{

    constructor(public $http: ng.IHttpService, public $q: ng.IQService){
      super($http, $q);
    }

    public getGradeFilters(): ng.IPromise<Array<any>>{
      return this.getItems("GradeFilters")
    }
    public getSubjectFilters(): ng.IPromise<Array<any>>{
      return this.getItems("SubjectFilters")
    }
    public getTypeFilters(){
      return this.getItems("ResourceTypeFilters")
    }
    public getResources(filters: Array<string>): ng.IPromise<Array<any>>{
      return this.getItemsByTag(filters, "Resources")
    }
    public getMetadata(item: any){
      return this.expandPropery([item.MetadataId], "Metadata", "Id")
    }
  }
}
