angular.module('wice').controller('dashboardsPrintCtrl', function ($scope, connection, $stateParams) {


  connection.get('/api/v3/dashboards/'+$stateParams.dashboardID, {mode:'execute'}, function(data) {
      $scope.selectedDash = data.item;
      if (!$scope.selectedDash)
          $scope.showNotDashFound = true;
  });


});

var objSideBar = document.getElementById("divID_SideBar");
if(objSideBar)
    objSideBar.remove();

var objNavBar = document.getElementById("navID_UserInfo");
if(objNavBar)
    objNavBar.remove();

var objFooterBar = document.getElementById("footerID_DashBoard");
if(objFooterBar)
    objFooterBar.remove();