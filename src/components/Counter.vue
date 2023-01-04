<template>
  <h2>{{ customTitle }}</h2>
  <p data-testid="counter"> {{ counter }} </p>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div class="buttons">
    <button class="btn" @click="increase">+1</button>
    <button class="btn" @click="decrease">-1</button>
  </div>
</template>

<script>    
export default {
    name: 'Counter', //Este name sirve para identificar el componente en el VUE DEVELOPER TOOLS
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            validator( value ) {
                return value > 0;
            }
            // required: true
        },
    },
    data() {
        return {
            counter: this.start,
        }
    },
    methods: {
        getSquareValue() {
            console.log('getSquareValue')
            return this.counter * this.counter
        },
        increase() {
            this.counter++;
        },
        decrease() {
            this.counter--;
        }
    },
    computed: {
        squareCounter() {
            console.log('computed squareCounter')
            return this.counter * this.counter
        },
        customTitle() {
            return this.title || 'Counter';
        }
    }
}
</script>

<style>
.btn{
    background-color: rgb(173, 255, 47);
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    margin: 0 15px;
    padding: 10px;
    transition: 0.3s ease-in-out;
}

.btn:hover{
    background-color:rgb(131, 190, 44);
    transition: 0.3s ease-in-out;
}
</style>