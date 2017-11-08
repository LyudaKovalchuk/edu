class VertexContainer {

    constructor(sizing, source) {
        this.sizing = sizing;
        this.count = Math.floor(source.length/sizing);
        this.source = source.slice(0, this.sizing * this.count);
    }

}