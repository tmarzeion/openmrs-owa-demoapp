class ListController {
    constructor($rootScope) {
        $rootScope.links = {};
        $rootScope.links["Home"] = "/";
        $rootScope.links["List"] = "list/";
        
        var vm = this;
        
        vm.resource = "conceptclass";
        vm.limit = 3;
        vm.columns = [
            {
                "property":"name",
                "label":"Name"
            },
            {
                "property":"description",
                "label":"Description"
            }
        ];
        
        vm.actions = [{"action":"purge", "label":"Delete"}]
    }
    
    
}

export default ListController;