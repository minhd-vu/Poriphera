var engine;
window.onload = function () {
    engine = new Poriphera.Engine();
    engine.start();
};
window.onresize = function () {
    engine.resize();
};
var Poriphera;
(function (Poriphera) {
    var Engine = (function () {
        function Engine() {
            this.count = 0;
        }
        Engine.prototype.start = function () {
            this.canvas = Poriphera.WebGL.initialize();
            Poriphera.wgl.clearColor(0, 0, 0, 1);
            this.update();
        };
        Engine.prototype.resize = function () {
            if (this.canvas !== undefined) {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }
        };
        Engine.prototype.update = function () {
            Poriphera.wgl.clear(Poriphera.wgl.COLOR_BUFFER_BIT);
            requestAnimationFrame(this.update.bind(this));
        };
        return Engine;
    }());
    Poriphera.Engine = Engine;
})(Poriphera || (Poriphera = {}));
var Poriphera;
(function (Poriphera) {
    var Shader = (function () {
        function Shader() {
        }
        return Shader;
    }());
    Poriphera.Shader = Shader;
})(Poriphera || (Poriphera = {}));
var Poriphera;
(function (Poriphera) {
    var WebGL = (function () {
        function WebGL() {
        }
        WebGL.initialize = function (id) {
            var canvas;
            if (id !== undefined) {
                if ((canvas = document.getElementById(id)) === undefined) {
                    throw new Error("Cannot find Canvas Element of Element Id: " + id);
                }
            }
            else {
                canvas = document.createElement("canvas");
                document.body.appendChild(canvas);
            }
            Poriphera.wgl = canvas.getContext("webgl");
            if (Poriphera.wgl === undefined) {
                throw new Error("Unable to initialize WebGL");
            }
            return canvas;
        };
        return WebGL;
    }());
    Poriphera.WebGL = WebGL;
})(Poriphera || (Poriphera = {}));
