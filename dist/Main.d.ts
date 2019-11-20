declare namespace Poriphera {
    class Engine {
        private count;
        private canvas;
        constructor();
        start(): void;
        private update;
    }
}
declare namespace Poriphera {
    var wgl: WebGLRenderingContext;
    class WebGL {
        static initialize(id?: string): HTMLCanvasElement;
    }
}
