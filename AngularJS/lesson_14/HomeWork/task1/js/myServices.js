var module = angular.module("myServices", []);

//Factory

module.factory("calcService", function () {
    return {
        plusFunc: function (arg1, arg2) {
            if (arg1 == "" || arg2 == ""){
                return "Поля должны быть заполнены"
            }
            return (Number(arg1) + Number(arg2)) ? Number(arg1) + Number(arg2) : "Введите правильное число";
        },
        minusFunc: function(arg1, arg2) {
            if (arg1 == "" || arg2 == ""){
                return "Поля должны быть заполнены"
            }
            if (arg1 == arg2){
                return "0"
            }
            return (Number(arg1) - Number(arg2)) ? Number(arg1) - Number(arg2) : "Введите правильное число";
        },
        multiplicationFunc: function(arg1, arg2) {
            if (arg1 == "" || arg2 == ""){
                return "Поля должны быть заполнены"
            }
            return (Number(arg1) * Number(arg2)) ? Number(arg1) * Number(arg2) : "Введите правильное число";
        },
        divideFunc: function(arg1, arg2) {
            if (arg1 == "" || arg2 == ""){
                return "Поля должны быть заполнены"
            }
            if (arg2 == '0'){
                alert("На ноль делить нельзя!")
                return "На ноль делить нельзя!"
            }
            return (Number(arg1) / Number(arg2)) ? Number(arg1) / Number(arg2) : "Введите правильное число";
        }
    };
});

var calculate = function () {
    return {
        plusFunc: function(arg1, arg2) {
            if (arg1 == "" || arg2 == ""){
                return "Поля должны быть заполнены"
            }
            return (Number(arg1) + Number(arg2)) ? Number(arg1) + Number(arg2) : "Введите правильное число";
        },
        minusFunc: function(arg1, arg2) {
            if (arg1 == "" || arg2 == ""){
                return "Поля должны быть заполнены"
            }
            if (arg1 == arg2){
                return "0"
            }
            return (Number(arg1) - Number(arg2)) ? Number(arg1) - Number(arg2) : "Введите правильное число";
        },
        multiplicationFunc: function(arg1, arg2) {
            if (arg1 == "" || arg2 == ""){
                return "Поля должны быть заполнены"
            }
            return (Number(arg1) * Number(arg2)) ? Number(arg1) * Number(arg2) : "Введите правильное число";
        },
        divideFunc: function(arg1, arg2) {
            if (arg1 == "" || arg2 == ""){
                return "Поля должны быть заполнены"
            }
            if (arg2 == '0'){
                alert("На ноль делить нельзя!")
                return "На ноль делить нельзя!"
            }
            return (Number(arg1) / Number(arg2)) ? Number(arg1) / Number(arg2) : "Введите правильное число";
        }
    };
};

//Service

module.service("calculateService", calculate);

//Provider

module.provider("calculateProviderService", function () {
    return {
        $get: function () {
            return {
                plusFunc: function(arg1, arg2) {
                    if (arg1 == "" || arg2 == ""){
                        return "Поля должны быть заполнены"
                    }
                    return (Number(arg1) + Number(arg2)) ? Number(arg1) + Number(arg2) : "Введите правильное число";
                },
                minusFunc: function(arg1, arg2) {
                    if (arg1 == "" || arg2 == ""){
                        return "Поля должны быть заполнены"
                    }
                    if (arg1 == arg2){
                        return "0"
                    }
                    return (Number(arg1) - Number(arg2)) ? (Number(arg1) - Number(arg2)) : "Введите правильное число";
                },
                multiplicationFunc: function(arg1, arg2) {
                    if (arg1 == "" || arg2 == ""){
                        return "Поля должны быть заполнены"
                    }
                    return (Number(arg1) * Number(arg2)) ? Number(arg1) * Number(arg2) : "Введите правильное число";
                },
                divideFunc: function(arg1, arg2) {
                    if (arg1 == "" || arg2 == ""){
                        return "Поля должны быть заполнены"
                    }
                    if (arg2 == '0'){
                        alert("На ноль делить нельзя!")
                        return "На ноль делить нельзя!"
                    }
                    return (Number(arg1) / Number(arg2)) ? Number(arg1) / Number(arg2) : "Введите правильное число";
                }
            };
        }
    }
});