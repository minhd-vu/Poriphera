declare var engine: Poriphera.Engine;
declare namespace Poriphera {
    class Engine {
        private _count;
        private _canvas;
        private _shader;
        constructor();
        start(): void;
        resize(): void;
        private update;
        private loadShader;
    }
}
declare namespace Poriphera {
    class Shader {
        private _name;
        private _program;
        constructor(name: string, vertexSource: string, fragmentSource: string);
        get name(): string;
        use(): void;
        private loadShader;
        private createProgram;
    }
}
declare namespace Poriphera {
    var wgl: WebGLRenderingContext;
    class WebGL {
        static initialize(id?: string): HTMLCanvasElement;
    }
}
