var map =[];
new Vue({
	el: '#map',
    data: {
        x: 50,
        y: 50,
        mapUniverse: map,
        creatMap: false,
        nextMap: false,
    },

    methods: {
        createUniverseMapNumber: function () {
            for (let i = 0; i < this.x; i++) {
                this.mapUniverse[i] = [];
                for(let j = 0; j < this.y; j++) {
                    this.mapUniverse[i][j] = Math.round(Math.random());
                }
            }
            return this.mapUniverse;
        },

        getValueCell: function (i, j) {
            if(i < 0 || i >= this.x || j < 0 || j >= this.y) {
                return 0;
            }
            return this.mapUniverse[i][j];
        },

        countNeighborPlanet: function (i, j) {
            return (this.getValueCell(i - 1,j - 1) + this.getValueCell(i - 1,j) + this.getValueCell(i - 1,j + 1) + 
                this.getValueCell(i,j - 1) + this.getValueCell(i,j + 1) + this.getValueCell(i + 1,j - 1) + 
                this.getValueCell(i + 1,j) + this.getValueCell(i + 1,j + 1));
        },

        calculateCellState: function (i, j) {
            if(this.countNeighborPlanet(i, j) < 2 || this.countNeighborPlanet(i, j) > 3) {
                this.mapUniverse[i][j] = 0;
            } else if(this.countNeighborPlanet(i, j) === 3) {
                this.mapUniverse[i][j] = 1;
            } 
        },

        nextUniverseMapNumber: function () {
            for(let i = 0; i < this.x; i++) {
                for(let j = 0; j < this.y; j++) {
                    this.calculateCellState(i, j);
                }
            }
            return this.mapUniverse;
        },

    }
});