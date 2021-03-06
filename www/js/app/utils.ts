module App {
  "use strict";
    export interface IBaseScope extends ng.IScope {
         ctrl: BaseController;
         contractType: string;
     }

     export class BaseController {
       constructor(public $scope: IBaseScope,public $timeout: ng.ITimeoutService, public dataService){
         this.$scope.ctrl = this;
         this.dataService = dataService;
         this.$scope.contractType = "Teachers & Principals"
         $(function () {
           var popover = $('[data-toggle="popover"]')
           if(popover){
             popover.popover()
           }

          })
       }

   }


     /*
        -Superclass to be extened by other dataService, mangages data from json files and local/session storage
        -Allows for query on kvp's, load of entire set, and saving of object in set (saving is per session)
     */
     export class BaseJsonDataService{
       public jsonDataBase: JSONDatabase;
       public static $inject = [
           '$http',
           '$q'
       ];
       constructor(public $http: ng.IHttpService ,public $q: ng.IQService) {
         this.jsonDataBase = new JSONDatabase();


       }

       /*
            -GETS FULL LIST OF ITEMS OF THE DATABASE NAME ENTERED
            -TRIES TO ACCESS SESSION STORAGE FOR CACHED DATA
            -ON CACHE MISS GET DATA FROM JSON FILE
      */
       public getItems(dataBase, showDeleted: boolean = false): ng.IPromise<Array<any>>{
         var deferred = this.$q.defer();
         //If database has already been loaded into session storage load from there
         var isSessionStored = sessionStorage.getItem("IsSessionStored" + dataBase);
         if(isSessionStored){
           var data = $.parseJSON(sessionStorage.getItem(dataBase));
           if(!showDeleted){
             data = $.grep(data, (item) =>{
               if(!item.hasOwnProperty("IsDeleted")){
                 return true
               }
               return (item['IsDeleted'] == "false" || item['IsDeleted'] == false);
             })
           }
           deferred.resolve(data);
           return deferred.promise;
         }

        //If not send a request to the file system and then parse the json into an array
          var data = this.jsonDataBase[dataBase];

          var dataArray =  [];
          $.each(data, (key,val) =>{

            if(!val.hasOwnProperty("IsDeleted")){
              dataArray.push(val);
            }else{
              if(val['IsDeleted'] == "false" || val['IsDeleted'] == false){
                  dataArray.push(val);
              }
            }
          });

          //put the item into session storage for later request
          var jsonData = JSON.stringify(dataArray);
          sessionStorage.setItem("IsSessionStored" + dataBase, "True")
          sessionStorage.setItem(dataBase, jsonData);

          deferred.resolve(dataArray);
        return deferred.promise
       }


       //Get any items with matching key value pairs
       public getItemByKeyValue(dataBase:string ,key: string, value: string): ng.IPromise<Array<any>>{
        var deferred = this.$q.defer();
        this.getItems(dataBase)
        .then(data => {
            var filtered = $.grep(data, (item) => {
              return item[key] == value;
            })
            deferred.resolve(filtered)
          })
          .catch((reason) =>{
            deferred.reject(reason);
          });
        return deferred.promise
      }

      public expandPropery(dataArray, dataBase, key): ng.IPromise<Array<any>>{
        var deferred = this.$q.defer();
        this.getItems(dataBase)
        .then(data => {
            var filtered = $.grep(data, (item) => {
              return dataArray.indexOf(item.Id) > -1;
            })
            deferred.resolve(filtered)
          })
          .catch((reason) =>{
            deferred.reject(reason);
          });
        return deferred.promise
      }


      public getItemsByTag(tags: Array<string>, database: string){
        var deferred = this.$q.defer();
        this.getItems(database)
        .then(data => {
          _.remove(tags, (item) => item == "");
            var filtered = $.grep(data, (item) => {
              var intersectionArray = _.intersection(item.Tags, tags);
              return (intersectionArray.length >= tags.length);
            })
            deferred.resolve(filtered)
          })
          .catch((reason) =>{
            deferred.reject(reason);
          });
        return deferred.promise
      }

      /*
           -Updates specific object if the object exists
           -Push the updated "DB" to cache (session storage)
      */
      public setItem(dataBase: string,key: string,  object){
        var deferred = this.$q.defer();
        this.getItems(dataBase)
        .then(data => {
          //Find the correct object in the database
            var filteredItem = $.grep(data, (item) => {
              return item[key] == object[key];
            });

            //If the item does not exist push item with new ID
            if(filteredItem.length == 0 || filteredItem.length > 1){
              data.push(object);
            }
            else{
              //replace old data
              var i = data.indexOf(filteredItem[0]);
              data[i] = object;
            }

            //update cached data
            var jsonData = JSON.stringify(data);
            sessionStorage.setItem("IsSessionStored" + dataBase, "True")
            sessionStorage.setItem(dataBase, jsonData);

            deferred.resolve(true)
          })
          .catch((reason) =>{
            deferred.reject(reason);
          });
        return deferred.promise
        }

        public getDocumentTypeFilters(): ng.IPromise<Array<any>>{
          return this.getItems("DocumentTypeFilters");
        }

        public getTaggedDocuments(TagArray: Array<any>): ng.IPromise<Array<any>>{
          return this.getItemsByTag(TagArray, "Documents");
        }


        public getMetadataById(Id: string): ng.IPromise<Array<any>>{
          return this.expandPropery([Id], "Metadata", "Id");
        }



    }

    export class Common{
      // http://slavik.meltser.info/the-efficient-way-to-create-guid-uuid-in-javascript-with-explanation/
       static guid(){
             var gen = (s) => {
                 var p = (Math.random().toString(16) + "000000000").substr(2, 8);
                 return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
             }

             return gen(null) + gen(true) + gen(true) + gen(null);
         }

      static getFriendlyTime(hour, minute){
          var updatedhour = ((hour + 11) %12 + 1);
          minute = this.addZero(minute);

          return(updatedhour+":"+minute)
      }

      static replaceArrayContents(existingArray: Array<any>, newContents: Array<any>) {
           if (existingArray) {
               var args = [0, existingArray.length].concat(newContents);
               Array.prototype.splice.apply(existingArray, args);
           }
       }

       static navigate(location: string, navArray: Array<any>){
         var navString = JSON.stringify(navArray)
         sessionStorage.setItem("NavArray", navString)
         window.location.href = location;
       }

        static navigateL4(navArray: Array<any>){
          this.navigate("levelFour.html", navArray);
        }

      static navigateL3(navArray: Array<any>,pageUrl = "levelThree.html"){
        navArray = navArray.splice(0,3)
        this.navigate(pageUrl, navArray);
      }

      static navigateL2(navArray: Array<any>, pageUrl = "levelTwo.html"){
          navArray = navArray.splice(0,2)
          this.navigate(pageUrl, navArray);
      }

      static navigateL1(navArray: Array<any>, pageUrl = "levelOne.html"){
          navArray = navArray.splice(0,1)
          this.navigate(pageUrl, navArray);
      }

      private static addZero(integer){
        if (integer < 10) {
        integer = "0" + integer;
        }
        return integer;
      }

      public static redirectHome(){
        this.navigate("index.html",[]);
      }
    }

    export class Directives{
      public static scopedPopover($compile,$http) {
        return{
            restrict: "A",
            replace: false,
            scope: {
                currencies:"=data",
                selected:"=selected"
            },
            link: function (scope: any, element, attrs) {
                var html =
                '<div style="color: black !important" class="currency-popup">' +
                  '<div><span>Your contract Type is :</span></div>' +
                  '<div class="bold">{{selected}}<div>' +
                  '<div><span class="small-text text-muted">Report an Error</span></div>' +
                  '<hr class="hr-thin"/>'+
                  '<div><span class="small-text bold">CONTRACT TYPES</span></div>' +
                  '<div ng-click="selected = &#39;Custodial&#39;"><a>Custodial</a></div>' +
                  '<div ng-click="selected = &#39;Exempt&#39;"><a>Exempt</a></div>' +
                  '<div ng-click="selected = &#39;Leadership&#39;"><a>Leadership</a></div>' +
                  '<div ng-click="selected = &#39;Maintenance&#39;"><a>Maintenance</a></div>' +
                  '<div ng-click="selected = &#39;Support&#39;"><a>Support</a></div>' +
                  '<div ng-click="selected = &#39;Teachers & Principals&#39;"><a>Teachers & Principals</a></div>' +
                '</div>';
                var compiled = $compile(html)(scope);
                $(element).popover({
                    content:compiled,
                    html: true,
                    placement:'bottom',
                    trigger: 'manual'
                });
                $(element).bind('click', function() {
                	$(element).popover('toggle');
                });

              scope.alertTest = (()=>{
                alert("test")
              })
        }
      }
    }

    }

}
