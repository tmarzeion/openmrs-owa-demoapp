import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listComponent from './list.component.js';
import uicommons from 'openmrs-contrib-uicommons';

let listModule = angular.module('list', [ uiRouter, 'openmrs-contrib-uicommons'])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('list', {
            url: '/list',
            template: "<list></list>"
        })
    })
    .component('list', listComponent);

export default listModule;