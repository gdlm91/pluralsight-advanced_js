(function() {
    (function() {
        function C() {
            console.log("OOPS!");
        }
    })();

    function E(f) {
        console.log("E");
        var f = F;
        f();
    }

    var A = function() {
        console.log("A");
        B();
    };

    var C;

    function G() {
        console.log("G");

        var H = function() {
            console.log("H");
            I();
        };
        H();
    }

    var D = d;

    function d() {
        console.log("D");
        E();
    }

    function I() {
        console.log("I");
        J();
        J();
    }

    B = function() {
        console.log("B");
        C();
    };

    var F = function() {
        console.log("F");
        G();
    };

    var rest = "KLMNOPQRSTUVWXYZ".split(""), fns = {};
    for (var i=0; i<rest.length; i++) {
        (function (i){
            // define the current function
            fns[rest[i]] = function() {
                console.log(rest[i]);
                if (i < (rest.length-1)) {
                    fns[rest[i + 1]]();
                    // TODO: call the next function
                }
            };
        })(i);
    }

    var J = function() {
        J = function() {
            console.log("J");
            fns.K();
        };
    };

    C = function() {
        console.log("C");
        D();
    };

    A();
})();