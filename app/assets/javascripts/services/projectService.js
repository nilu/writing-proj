angular.module('projectService', ['ngResource'])
    .factory('Projects', function($resource, $http) {


        var project = {
            new_proj: function(teacher_id, name) {
                // alert('in new prij');
                console.log('in project Service');
                console.log(teacher_id);
                console.log(name);

                return $http.post('/api/join_project.json', {project: {name: name, teacher_id: teacher_id}})
                .then(function(response) {
                    // alert('aiye');
                    // var blah = console.log(response.data);
                    // This is cheating !
                    
                    location.reload();
                    return response.data;
                });
            },

            join_proj: function(user_id, access_code) {
                return $http.post('/api/join_project.json', {user_id: user_id, access_code: access_code})
                .then(function(response) {
                    location.reload();
                    return;
                });
            },

            test: function() {
                return $http.get('/api/project.json')
                .then(function(response) {
                    return response.data
                });
            }
        }

        return project;
    });
    
