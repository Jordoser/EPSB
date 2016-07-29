module App.l2item{
"use strict";

export class L2Controller extends BaseController{
    public static $inject = ['$scope','$timeout','dataService'];


    public navLevel: string;


    constructor(public $scope: IL2ItemScope,  public $timeout: ng.ITimeoutService, public dataService: L2DataService){
      super($scope,$timeout,$timeout);
      this.$scope.L3Items = [];
      this.$scope.relatedNewsItems = [];
      this.$scope.navigatedL2 = sessionStorage.getItem("SelectedL2");
      this.navLevel = sessionStorage.getItem("NavLevel");
      this.$scope.navigatedL3 = sessionStorage.getItem("SelectedL3");
      this.$scope.navigatedL4 = sessionStorage.getItem("SelectedL4");

      if(this.$scope.navigatedL2){
        this.LoadCurrentL2(this.$scope.navigatedL2);
      }

      this.loadPage();

      $('.custom-tab a').click(function (e) {
          e.preventDefault()
          $(this).tab('show')
        })
    }


    public loadPage(){
      switch(this.navLevel){
        case "1":
          break;
        case "2":
          break;
        case "3":
          break;
        case "4":
          this.dataService.loadL4Content(this.$scope.navigatedL4)
          .then(data => {
              this.$scope.pageContent = data[0]
            this.dataService.expandUserContacts(data[0].UserContacts)
            .then(expandedData =>{
              this.$scope.pageContent.UserContacts = expandedData
            });

            this.loadRelatedNews(data[0].Id)


            this.loadPageAudit(data[0].PageAuditId);
          });
          break;
        default:
          break;
      }


    }


    public loadRelatedNews(topic: string){
        this.dataService.getRelatedNews(topic)
        .then(data => {
          for(var i= 0; i < data.length; i++){
            this.$scope.relatedNewsItems.push(data[i]);
          }
        })
    }
    public loadPageAudit(auditId){
      this.dataService.getPageAudit(auditId)
      .then(data => {
        this.$scope.pageAudit = data[0];
      })
    }
    public LoadCurrentL2(objectId){
      this.dataService.getL2ItemById(objectId)
      .then(data =>{
        this.$scope.selectedL2 = data[0];
        if(this.navLevel == '2'){
          this.$scope.currentItem= this.$scope.selectedL2;
        }
        this.$scope.selectedL2 = data[0];
        this.loadRelatedL3Items(data[0].Id)
      })
      .catch(ex => {
        alert(ex);
      });
    }


    public loadRelatedL3Items(id){
      this.dataService.getL3NavItems(id)
      .then(data =>{
        for(var i = 0; i < data.length; i++){
          this.$scope.L3Items[i] = data[i];
          this.$scope.L3Items[i].L4Items = [];
          this.loadRelatedL4Items(data[i].Id , i)
        }
      })
    }

    public loadRelatedL4Items(id, index){
      this.dataService.getL4Items(id)
      .then(data =>{
        for(var i = 0; i < data.length; i++){
          this.$scope.L3Items[index].L4Items.push(data[i]);
          if(this.navLevel == '4' && data[i].Id == this.$scope.navigatedL4){
            this.$scope.currentItem = data[i];
          }
        }
        if(this.navLevel == '3' || this.navLevel == '4'){
          this.$timeout(() =>
          {
            if(id == this.$scope.navigatedL3 && this.navLevel == '3'){
                this.$scope.currentItem = this.$scope.L3Items[index];
            }
            this.expandL3(id, true);
          },100);
        }
      })
    }


    public expandL3(id, skipAnimation= false){
      var item = $("#l3"+id +" .l4-item-wrapper");
      var currentHeight =item.height();

      if(currentHeight == 0){
        var height= item.css('height', 'auto').height();
        item.css('height','0');
        if(skipAnimation){
          item.height(height + "px");
          return
        }
        item.animate({height: height + "px"},200);
      }
      else{
        if(skipAnimation){
          item.height("0");
        }
        item.animate({height: "0"},200);
      }

    }

  

  }
}
