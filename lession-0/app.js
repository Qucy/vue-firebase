var app = new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Ryu',
        url: 'http://www.youtube.com',
        classes: ['one', 'two']
    },
    methods:{
        greet: function(time) {
            return `Hello and good ${time}, ${this.name}`
        }
    }
})


var app2 = new Vue({
    el: '#app2',
    data: {
        wage : 10
    },
    methods:{
        changeWage: function(amount) {
            this.wage += amount
        }
    }
})


var app3 = new Vue({
    el: '#app3',
    data:{
        coords:{
            x: 0,
            y: 0
        }
    },
    methods: {
        logEvent: function(e) {
            console.log(e)
        },
        logCoords: function(e) {
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        }
    }
})


var app4 = new Vue({
    el: '#app4',
    data: {
        name: ''
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        title: 'Event Modifier'
    },
    methods: {
        logMessage: function() {
            console.log('Hello world!')
        }
    }
})


var app6 = new Vue({
    el: '#app6',
    data: {
        title: 'Conditional render',
        name: 'Qucy',
        age: 31,
        showName: true,
        showAge: true
    },
    methods: {
        toggleName: function() {
            this.showName = !this.showName
        },
        toggleAge: function() {
            this.showAge = !this.showAge
        }
    }
})


var app7 = new Vue({
    el: '#app7',
    data: {
        title: 'Looping data',
        items: ['Apple','Banana','Pear','Shell','Blueberry'],
        ninjas: [
            {name: 'Crystal', age: 25, belt:'Black'},
            {name: 'Ryu', age: 30, belt:'Brown'},
            {name: 'Ken', age: 35, belt:'Orange'}
        ]
    }
})