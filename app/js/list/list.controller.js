class ListController {
    constructor($rootScope) {
        $rootScope.links = {};
        $rootScope.links["Home"] = "/";
        $rootScope.links["List"] = "list/";
        
        var vm = this;
        
        vm.resource = "conceptclass";
        vm.limit = 10;
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
        
    }
    
    
}

export default ListController;