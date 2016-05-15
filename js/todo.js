var app = angular.module("todoApp", []);

app.controller("TabController", function() {
    this.tab = 1;
    
    this.setTab = function(selectedTab) {
        this.tab = selectedTab;
    };
    
    this.checkTab = function(selectedTab) {
        return this.tab === selectedTab;
    };
});

app.controller("TodoController", ['$scope', function($scope){
    $scope.todoList = [];
    $scope.todo = {};
    $scope.todoText = "";
    
    $scope.add = function(setTodoText) {
        $scope.todo.todoText = setTodoText;
        $scope.todo.todoCompleted = false;
        
        $scope.todoList.push($scope.todo);
        $scope.todo = {};
        $scope.todoText = "";
    }
    
    $scope.enterKeyPressed = function($event) {
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            $scope.add($event.target.value);
        }
    }
    
    $scope.delete = function(item) {
       var index = $scope.todoList.indexOf(item);
       console.log(index);
       $scope.todoList.splice(index, 1);
    }
}]);
