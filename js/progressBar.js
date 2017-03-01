	var app = angular.module("myApp" , []);             
        app.controller("progressBars", ['$scope', '$http' , function($scope, $http) {
		var range = [];

		$http({method : 'GET',url : 'http://pb-api.herokuapp.com/bars'})
            		.success(function(data, status) {

                		$scope.buttons = data.buttons;
				for(var i=0;i<data.bars.length;i++) {
  					range.push(Math.round(data.bars[i]/data.limit * 100));
				}
				$scope.progressData = range;
				$scope.checkcolor = "default";
				$scope.limit = data.limit;
				$scope.Change = function(button_value){
					$scope.progressData[$scope.selectedBar] += button_value;
					if($scope.progressData[$scope.selectedBar] < 0) {						
						$scope.progressData[$scope.selectedBar] = 0;	
					}
				
				}
				
             		})

            		.error(function(data, status) {
                		alert("Error retrieving data");
            		})
            }]);