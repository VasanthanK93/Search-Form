var phonecatApp = angular.module('app', []);

phonecatApp.controller('ListCtrl', function ($scope,$http) {

    self.items='';
    $http.get('studentListWithConcession.php').then(function(data){
        $scope.items=data.data;
        console.log(items);
        
    })
    $scope.selectItem = function (item) {
        scope.selecteditem = item;
        scope.showList = false;
    };

})

