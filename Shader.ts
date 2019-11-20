namespace Poriphera {
    /**
     * Represents a WebGL shader.
     */
    export class Shader {
        private _name: string;
        private _program: WebGLProgram;

        /**
         * Create the shader.
         * @param name the shader name
         * @param vertexSource 
         * @param fragmentSource 
         */
        public constructor(name: string, vertexSource: string, fragmentSource: string) {
            this._name = name;
            let vertexShader = this.loadShader(vertexSource, wgl.VERTEX_SHADER);
            let fragmentShader = this.loadShader(fragmentSource, wgl.FRAGMENT_SHADER);
            this.createProgram(vertexShader, fragmentShader);
        }

        /**
         * Return the name.
         */
        public get name(): string {
            return this._name;
        }

        /**
         * Tells WebGL to use the shader.
         */
        public use() : void {
            wgl.useProgram(this._program);
        }

        /**
         * Load in the shader.
         * @param shaderSource 
         * @param shaderType 
         */
        private loadShader(shaderSource: string, shaderType: number): WebGLShader {
            let shader: WebGLShader = wgl.createShader(shaderType);
            wgl.shaderSource(shader, shaderSource);
            wgl.compileShader(shader);

            let error: string = wgl.getShaderInfoLog(shader);
            if (error !== "") {
                throw new Error(error);
            }

            return shader;
        }

        private createProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader) {
            this._program = wgl.createProgram();
            wgl.attachShader(this._program, vertexShader);
            wgl.attachShader(this._program, fragmentShader);
            wgl.linkProgram(this._program);

            let error = wgl.getProgramInfoLog(this._program);
            if (error !== "") {
                throw new Error(error);
            }
        }
    }
}