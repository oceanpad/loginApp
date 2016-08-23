//module
var module = ons.bootstrap('my-app', ['onsen']);

//Login page Controller
module.controller('AppController', function($scope, $http) {
    $scope.loginButton=function(){
        $http({
              url:"https://m9u6p2pm6c.execute-api.ap-northeast-1.amazonaws.com/test/login", 
              method: "POST",
              data: JSON.stringify({email:$scope.youremail, password:$scope.yourpass})
             }).success(function(data, status) {
                    myLogin.pushPage('page1.html', { animation : 'slide' } );
                }).error(function(data, status) {
                    ons.createAlertDialog('alert-dialog.html').then(function(alertDialog) {
                    alertDialog.show();})
                });
            }
        });

//Profile page Controller
module.controller('PageController', function($scope,$http) {
ons.ready(function() {
    $http.get("https://m9u6p2pm6c.execute-api.ap-northeast-1.amazonaws.com/test/profile").then(function(response) 
        {$scope.name = response.data.name;$scope.email = response.data.email;$scope.tel = response.data.tel;});
    });
});