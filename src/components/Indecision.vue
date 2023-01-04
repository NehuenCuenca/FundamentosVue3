<template>
    <img v-if="img" :src="img" alt="imagen decision random">
    <div class="bg-dark"></div>
    
    <div class="indecision-container">
        <input type="text" v-model="question" placeholder="Realiza una pregunta" >
        <p>Recuerda terminar con un signo de interrogacion (?)</p>
        <div v-if="isValidQuestion">
            <h2>{{ question }}</h2>
            <h1>{{ answer }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            question: null,
            answer: null,
            img: null,
            isValidQuestion: false,
        }
    },
    watch: {
        question( value, oldValue ){
            this.isValidQuestion = false;

            console.log({value})

            if( !value.endsWith('?') ) return ;

            this.isValidQuestion = true;
            this.getAnswer();
        }
    },
    methods: {
        async getAnswer() {
            try {
                this.answer = 'Pensando...';
                const { answer, image } = await fetch('https://yesno.wtf/api').then( resp => resp.json() )

                this.answer = answer === 'yes' ? 'SI' : 'NO!';
                this.img = image;
            } catch (error) {
                this.answer = 'No se pudo cargar del API';
                this.img = null;
            }
        }
    }
}
</script>

<style scoped>

    img, .bg-dark {
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100vh;
        max-height: 100%;
        width: 100vw;
        max-width: 100%;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>