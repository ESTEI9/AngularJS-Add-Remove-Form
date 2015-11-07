function TitleCtrl () {
    var vm = this;
    vm.title = 'AngularJS Add/Remove Form';
    }
function ShowsCtrl () {
    var vm = this;
    vm.title = "A List of Shows";
    vm.searchInput;
    vm.series = [
        {
            title: 'Game of Thrones',
            year: 2011,
            favorite: true
        },
        {
            title: 'Walking Dead',
            year: 2010,
            favorite: false
        },
        {
            title: 'Firefly',
            year: 2002,
            favorite: true
        },
        {
            title: 'Banshee',
            year: 2013,
            favorite: true
        },
        {
            title: 'Greys Anatomy',
            year: 2005,
            favorite: false
        }
    ];

    // Add Movie Title //

        vm.new;
        vm.addShow = function() {
            vm.series.push(vm.new);
            vm.new = {};
        };

    // Remove Movie Title //

    vm.remove = function(item) {
        id = vm.series.indexOf(item);
        vm.series.splice(id, 1);
    };

    vm.orders = [
        {
            id: 1,
            title: 'Year Ascending',
            key: 'year',
            reverse: false
        },
        {
            id: 2,
            title: 'Year Descending',
            key: 'year',
            reverse: true
        },
        {
            id: 3,
            title: 'Title Ascending',
            key: 'title',
            reverse: false
        },
        {
            id: 4,
            title: 'Title Descending',
            key: 'title',
            reverse: true
        }
    ];
        vm.order = vm.orders[0];
}

angular
    .module('app')
    .controller("TitleController", TitleCtrl)
    .controller("ShowsController", ShowsCtrl)