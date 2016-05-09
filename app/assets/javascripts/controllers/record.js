function RecordCtrl($scope, Session, Records, Projects) {"use strict";

    $scope.user = Session.requestCurrentUser();
    $scope.records = Records.index();
    $scope.projects = Projects.test();

    // $scope.user_id = 

    $scope.logout = function() {
        Session.logout();
    };


    $scope.newProj = function(user_id, name) {
      // console.log(user_id);
      // console.log(name);

      Projects.new_proj(user_id, name);
    };

    $scope.joinProj = function(user_id, access_code) {
      console.log('!!!');
      console.log(user_id);
      console.log(access_code);

      Projects.join_proj(user_id, access_code);

    };
}

