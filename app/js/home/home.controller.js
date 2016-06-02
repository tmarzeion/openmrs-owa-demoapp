class HomeController {
    constructor($rootScope) {
        $rootScope.links = {};
        $rootScope.links["Home"] = "/";
    }
}

export default HomeController;