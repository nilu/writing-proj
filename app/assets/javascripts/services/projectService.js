angular.module('projectService', ['ngResource'])
    .factory('Projects', function($resource) {
        return $resource('/api/project.json', {}, {
            index: { method: 'GET', isArray: true},
            create: { method: 'POST' }
        });
    })
    .factory('Secure', function($resource){
        return $resource('/api/project/:project_id.json', {}, {
            show: { method: 'GET' },
            update: { method: 'PUT' },
            destroy: { method: 'DELETE' }
        });
    });
