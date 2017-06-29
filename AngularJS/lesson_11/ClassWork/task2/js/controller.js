/**
 * Created by Simakov Evgeniy on 06.06.17.
 */

textViewApp.controller('Task2Ctrl', function($scope) {

    $scope.massage = '';
    $scope.typed = '';

    $scope.showMe = function() {
        $scope.massage = $scope.typed;
    }

});