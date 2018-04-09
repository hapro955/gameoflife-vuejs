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
        }
    }
});