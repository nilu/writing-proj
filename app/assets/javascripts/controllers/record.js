function RecordCtrl($scope, Session, Records, Projects) {"use strict";

    $scope.user = Session.requestCurrentUser();
    $scope.records = Records.index();
    $scope.projects = Projects.test();

    // $scope.user_id = 

    $scope.logout = function() {
        Session.logout();
    };


    $scope.newProj = function(user_id, name) {
      // alert("creating new proj..");
      // console.log($scope.user);
      // console.log($scope.user.data);

      console.log(user_id);
      console.log(name);

      Projects.new_proj(user_id, name);
    }
}

