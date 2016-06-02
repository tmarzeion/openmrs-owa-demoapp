import template from './home.html';
import controller from './home.controller';

let homeComponent = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default homeComponent;