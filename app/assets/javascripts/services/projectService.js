angular.module('projectService', ['ngResource'])
    .factory('Projects', function($resource, $http) {


        var project = {
            new_proj: function(teacher_id, name="testname") {
                // alert('in new prij');
                console.log('in project Service');
                console.log(teacher_id);
                console.log(name);

                return $http.post('/api/project.json', {project: {name: name, teacher_id: teacher_id}})
                .then(function(response) {
                    alert('aiye');
                    var blah = console.log(response.data);
                    // This is cheating !
                    // location.reload();
                    return response.data;
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

        // return $resource('/api/project.json', {}, {
        //     index: { method: 'GET', isArray: true},
        //     create: { method: 'POST' },
        //     test: { method: 'GET', isArray: true},
        //     new_proj: { method: 'POST'}

        // });
    });
    
