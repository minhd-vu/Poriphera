namespace Poriphera {
    /**
     * The WebGL rendering context
     */
    export var wgl: WebGLRenderingContext;

    /**
     * Creates the WebGL rendering context
     */
    export class WebGL {
        /**
         * Initializes WebGL
         * @param id the canvas id if it already exists
         */
        public static initialize(id?: string): HTMLCanvasElement {
            let canvas: HTMLCanvasElement;
            if (id !== undefined) {
                if ((canvas = document.getElementById(id) as HTMLCanvasElement) === undefined) {
                    throw new Error("Cannot find Canvas Element of Element Id: " + id);
                }
            } else {
                canvas = document.createElement("canvas") as HTMLCanvasElement;
                document.body.appendChild(canvas);
            }

            wgl = canvas.getContext("webgl");
            if (wgl === undefined) {
                throw new Error("Unable to initialize WebGL");
            }

            return canvas;
        }
    }
}