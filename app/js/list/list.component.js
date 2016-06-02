import template from './list.html';
import controller from './list.controller';

let listComponent = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default listComponent;