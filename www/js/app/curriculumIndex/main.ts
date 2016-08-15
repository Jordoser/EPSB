// Created data binding controller for index page
module App.curriculumIndex{
  "use strict"
  angular.module('curriculumIndexApp',[])
  .controller('curriculumIndexController', CurriculumIndexController)
  .service('dataService',CurriculumIndexDataService)



  export interface ICurriculumIndexScope extends IBaseScope{
      gradeTags: Array<any>;
      subjectTags: Array<any>;
      curriculumTags: Array<any>;
  }
}
