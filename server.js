var phonecatApp = angular.module('app', []);

phonecatApp.controller('ListCtrl', function ($scope,$http,$log) {
 $scope.query="Select a student from List ";
    self.items='';
    $http.get('studentListWithConcession.php').then(function(data){
        $scope.items=data.data;
        console.log(items);
        
    })

console.log($scope.query);

$scope.selectedname=function(item){
    $log.info('Item changed to ' + JSON.stringify(item));
    $scope.query =   item.CLASS_SECTION +'-'+ item.ADMISSION_ID +'-'+ item.NAME +'-'+ item.FATHER_NAME 
}

})

