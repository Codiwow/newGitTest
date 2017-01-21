var cartModule = angular.module('cart', []);
cartModule.controller('cartCtr', ['$scope', function ($scope) {
    $scope.discount = 0.9;
    $scope.items = [
        {
            id: 10000,
            title: "iPhone 6",
            price: 389,
            quantity: 1,
            linkUrl: "https://www.amazon.com/Apple-Factory-Unlocked-Internal-Smartphone/dp/B00NQGP42Y/ref=sr_1_1?s=wireless&ie=UTF8&qid=1484882846&sr=1-1&keywords=iphone+6"
        },
        {
            id: 10001,
            title: "iPhone 7",
            price: 715,
            quantity: 1,
            linkUrl: "https://www.amazon.com/Apple-iPhone-Unlocked-32-GB/dp/B01LYT95XR/ref=sr_1_1?s=wireless&ie=UTF8&qid=1484882821&sr=1-1&keywords=iphone+7"
        }
    ];

    $scope.add = function (id) {
        angular.forEach($scope.items, function (item, index, array) {
            if (item.id === id) {
                item.quantity++;
            }
        })
    };
    $scope.reduce = function (id) {
        angular.forEach($scope.items, function (item, index, array) {
            if (item.id === id) {
                item.quantity--;
            }
        })
    };
    $scope.quantityKeydown = function (event) {
        event = event || window.event;
        var target=event.target||event.srcElement;
        var keycode = event.keyCode;

        if ((37 <= keycode && keycode <= 40)||(48 <= keycode && keycode <= 57) || (96 <= keycode && keycode <= 105) || keycode == 8) {

        } else {
            console.log(keycode);
            event.preventDefault();
            return false;
        }
    };
    $scope.quantityKeyup = function (event) {
        event = event || window.event;
        var target=event.target||event.srcElement;
        var keycode = event.keyCode;

        if (48 === keycode || 96 === keycode ) {
            target.value=parseInt(target.value);
        }
    };
    $scope.delete = function (id) {
        $scope.items.forEach(function (item, index) {
            if (item.id == id) {
                if (confirm("Do you want to remove this item from cart？")) {
                    $scope.items.splice(index, 1);
                    return;
                }
            }
        })
    };
    $scope.getQuantites = function () {
        var quantities = 0;
        angular.forEach($scope.items, function (item, index, array) {
            if (item.quantity) {
                quantities += parseInt(item.quantity);
            }
        });
        return quantities;
    };
    $scope.getTotalAmount = function () {
        var totalAmount = 0;
        angular.forEach($scope.items, function (item, index, array) {
            totalAmount += item.quantity * item.price;
        });

        return totalAmount;
    };
    $scope.alertSubmit = function () {
        alert("Angular Shopping Cart");
    }

}]);
