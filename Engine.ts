namespace Poriphera {
    /**
     * The game engine class.
     */
    export class Engine {
        private _count: number;
        private _canvas: HTMLCanvasElement;
        private _shader: Shader;

        public constructor() {
            this._count = 0;
        }

        /**
         * Starts the engine.
         */
        public start(): void {
            this._canvas = WebGL.initialize();

            wgl.clearColor(0, 0, 0, 1);

            this.loadShader();
            this._shader.use();
            this.update();
        }

        /**
         * Resizes the canvas to fit the window.
         */
        public resize(): void {
            if (this._canvas !== undefined) {
                this._canvas.width = window.innerWidth;
                this._canvas.height = window.innerHeight;
            }
        }

        /**
         * The heart of the game, the game loop.
         */
        private update(): void {
            wgl.clear(wgl.COLOR_BUFFER_BIT);
            requestAnimationFrame(this.update.bind(this));
        }

        private loadShader(): void {
            let vertexShaderSource = `
            attribute vec3 a_position;
            void main() {
                gl_Position = vec4(a_position, 1.0);
            }`

            let fragmentShaderSource = `
            precision mediump float;
            void main() {
                gl_FragColor = vec4(1.0);
            }`

            this._shader = new Shader("basic", vertexShaderSource, fragmentShaderSource);
        }
    }
}