var app = angular.module('mainApp',[]);

app.controller('mycontroller',function($scope){
    $scope.emplist = [];

    $scope.addData = function(){
        var emp = {
            Id: $scope.emplist.length + 1,
            Name:$scope.name,
            Salary : $scope.salary
        };

        $scope.emplist.push(emp);
        ClearModel();
    }
    $scope.delete = function(emp){
        var index = $scope.emplist.indexOf(emp);
        $scope.emplist.splice(index,1);
    }
    $scope.edit = function(emp){ 
        $scope.name=emp.Name;
        $scope.salary = emp.Salary;
    }
    
    

    function ClearModel(){
        $scope.name='';
        $scope.salary = '';

    }

});