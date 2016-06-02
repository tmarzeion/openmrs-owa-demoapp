import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component';
import Home from './../home/home';
import uicommons from 'openmrs-contrib-uicommons';

let demoappModule = angular.module('demoapp', [ uiRouter, Home.name, 'openmrs-contrib-uicommons'
    ])
    .component('main', mainComponent);

export default demoappModule;