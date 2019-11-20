namespace Poriphera {
    /**
     * The game engine class.
     */
    export class Engine {
        private count: number;
        private canvas: HTMLCanvasElement;

        public constructor() {
            this.count = 0;
        }

        /**
         * Starts the engine.
         */
        public start(): void {
            this.canvas = WebGL.initialize();

            wgl.clearColor(0, 0, 0, 1);

            this.update();
        }

        /**
         * The heart of the game, the game loop.
         */
        private update(): void {
            wgl.clear(wgl.COLOR_BUFFER_BIT);
            requestAnimationFrame(this.update.bind(this));
        }
    }
}