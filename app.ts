var engine: Poriphera.Engine;

/**
 * The entry point to the application.
 */
window.onload = function () {
    engine = new Poriphera.Engine();
    engine.start();
}

/**
 * Changes the canvas to be the full window size on resize.
 */
window.onresize = function () {
    engine.resize();
}