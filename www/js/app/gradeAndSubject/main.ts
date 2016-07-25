// Created data binding controller for index page
module App.gradeAndSubject{
  "use strict"
  angular.module('gradeAndSubjectApp',[])
  .controller('gradeAndSubjectController', GradeAndSubjectController)
  .service('dataService',GradeAndSubjectDataService)


  export interface IGradeAndSubjectScope extends IBaseScope{
      gradeArray: Array<any>;
      subjectArray: Array<any>;
      typeArray: Array<any>;
      resourceArray: Array<any>;

      gradeFilter: string;
      subjectFilter: string;
      typeFilter: string;

    }
  }
