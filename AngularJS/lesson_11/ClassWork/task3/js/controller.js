/**
 * Created by Zuguhu on 06.06.17.
 */

fasterViewApp.controller('Task3Ctrl', function($scope) {

    $scope.massage = '';
    $scope.typed = '';

    $scope.showMe = function() {
        $scope.massage = $scope.typed;
    }

});