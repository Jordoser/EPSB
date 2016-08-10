module App.curriculum{
"use strict";

export class CurriculumController extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];

    constructor(public $scope: ICurriculumScope,  public $timeout: ng.ITimeoutService, public dataService: CurriculumDataService){
      super($scope,$timeout,$timeout);
      this.$scope.currentItem = null;
      this.$scope.curriculum = []
      this.$scope.curriculumFilters = [];
      this.$scope.months = ["","January", "February", "March", "April", "May", "June", "July","August", "September","October", "November", "December"]
      this.$scope.categoryFilter = "";
      this.$scope.monthFilter = "";
      this.$scope.dateFilter = "2015-2016";
      this.$scope.searchString = ""
      this.loadCurriculum();
      this.loadCurriculumOptionSet();

      $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
      })
      this.$scope.dateFilters = [{Name:"2015-2016",Start:2015, End: 2016},{Name:"2014-2015",Start:2014, End: 2015},{Name:"2013-2014",Start:2013, End: 2014}]
    }

    public loadCurriculumContent(){
      this.dataService.getApplicationContent().then(data =>{
        this.$scope.currentItem = data[0];
      })
    }

    public loadCurriculum(){
      this.dataService.getCurriculum([this.$scope.categoryFilter])
      .then(data => {
        App.Common.replaceArrayContents(this.$scope.curriculum, data)
        for(var i = 0; i < this.$scope.curriculum.length; i++){
          this.loadMetaData(this.$scope.curriculum[i])
        }
      })
    }

    public loadMetaData(item){
      this.dataService.getMetadata(item.MetadataId)
      .then((data) =>{
        item.Metadata = data[0];
      })
    }
    public loadCurriculumOptionSet(){
      this.dataService.getCurriculumFilters().then(data =>{
        App.Common.replaceArrayContents(this.$scope.curriculumFilters,data) ;
      })
    }

    public changeTag(tag){
      this.$scope.categoryFilter = tag;
      this.loadCurriculum();
    }

    public containsMonth(item){
      if(this.$scope.monthFilter == ""){
        return true;
      }
       return item.Metadata.CreatedOn.indexOf(this.$scope.monthFilter) > -1
    }

  }
}
