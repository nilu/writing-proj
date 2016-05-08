function RecordCtrl($scope, Session, Records, Projects) {"use strict";

    $scope.user = Session.requestCurrentUser();
    $scope.records = Records.index();
    $scope.projects = Projects.index();

    $scope.logout = function() {
        Session.logout();
    };
}

