class HomeController {
    constructor($rootScope) {
        $rootScope.links = {};
        $rootScope.links["label1"] = "link1/";
        $rootScope.links["label2"] = "link1/link2/";
    }
}

export default HomeController;