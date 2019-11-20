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
            this._count = 0;
        }
        Engine.prototype.start = function () {
            this._canvas = Poriphera.WebGL.initialize();
            Poriphera.wgl.clearColor(0, 0, 0, 1);
            this.loadShader();
            this._shader.use();
            this.update();
        };
        Engine.prototype.resize = function () {
            if (this._canvas !== undefined) {
                this._canvas.width = window.innerWidth;
                this._canvas.height = window.innerHeight;
            }
        };
        Engine.prototype.update = function () {
            Poriphera.wgl.clear(Poriphera.wgl.COLOR_BUFFER_BIT);
            requestAnimationFrame(this.update.bind(this));
        };
        Engine.prototype.loadShader = function () {
            var vertexShaderSource = "\n            attribute vec3 a_position;\n            void main() {\n                gl_Position = vec4(a_position, 1.0);\n            }";
            var fragmentShaderSource = "\n            precision mediump float;\n            void main() {\n                gl_FragColor = vec4(1.0);\n            }";
            this._shader = new Poriphera.Shader("basic", vertexShaderSource, fragmentShaderSource);
        };
        return Engine;
    }());
    Poriphera.Engine = Engine;
})(Poriphera || (Poriphera = {}));
var Poriphera;
(function (Poriphera) {
    var Shader = (function () {
        function Shader(name, vertexSource, fragmentSource) {
            this._name = name;
            var vertexShader = this.loadShader(vertexSource, Poriphera.wgl.VERTEX_SHADER);
            var fragmentShader = this.loadShader(fragmentSource, Poriphera.wgl.FRAGMENT_SHADER);
            this.createProgram(vertexShader, fragmentShader);
        }
        Object.defineProperty(Shader.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Shader.prototype.use = function () {
            Poriphera.wgl.useProgram(this._program);
        };
        Shader.prototype.loadShader = function (shaderSource, shaderType) {
            var shader = Poriphera.wgl.createShader(shaderType);
            Poriphera.wgl.shaderSource(shader, shaderSource);
            Poriphera.wgl.compileShader(shader);
            var error = Poriphera.wgl.getShaderInfoLog(shader);
            if (error !== "") {
                throw new Error(error);
            }
            return shader;
        };
        Shader.prototype.createProgram = function (vertexShader, fragmentShader) {
            this._program = Poriphera.wgl.createProgram();
            Poriphera.wgl.attachShader(this._program, vertexShader);
            Poriphera.wgl.attachShader(this._program, fragmentShader);
            Poriphera.wgl.linkProgram(this._program);
            var error = Poriphera.wgl.getProgramInfoLog(this._program);
            if (error !== "") {
                throw new Error(error);
            }
        };
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
