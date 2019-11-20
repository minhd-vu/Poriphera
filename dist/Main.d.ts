declare var engine: Poriphera.Engine;
declare namespace Poriphera {
    class Engine {
        private count;
        private canvas;
        constructor();
        start(): void;
        resize(): void;
        private update;
    }
}
declare namespace Poriphera {
    class Shader {
    }
}
declare namespace Poriphera {
    var wgl: WebGLRenderingContext;
    class WebGL {
        static initialize(id?: string): HTMLCanvasElement;
    }
}
