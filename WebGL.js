var Poriphera;
(function (Poriphera) {
    /**
     * Creates the WebGL rendering context
     */
    var WebGL = /** @class */ (function () {
        function WebGL() {
        }
        /**
         * Initializes WebGL
         * @param id the canvas id if it already exists
         */
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
