function ProjectCtrl($scope, Session, Projects) {"use strict";

    $scope.user = Session.requestCurrentUser();
    // $scope.records = Records.index();

    $scope.logout = function() {
        Session.logout();
    };
    
    // $scope.name = "name";
}

