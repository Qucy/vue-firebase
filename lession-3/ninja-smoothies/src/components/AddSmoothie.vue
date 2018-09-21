<template>
    <div class="add-smoothie container">
        <h2 class="ceter-align indigo-text">Add New Smoothie Recipe</h2>
        <form @submit.prevent="AddSmoothie">
            <div class="field title">
                <label for="title">Smoothie Title:</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="field" v-for="(ingredient,idx) in ingredients" :key="idx">
                <label for="ingredient">Ingredients:</label>
                <input type="text" name="ingredient" v-model="ingredients[idx]">
                <i class="material-icons delete" @click="deleteIng(ingredient)">delete</i>
            </div>
            <div class="filed add-ingredient">
                <label for="add-ingredient">Add an ingredient</label>
                <input type="text" name="add-ingredient" @keydown.tab.prevent="AddIng" v-model="another">
            </div>
            <div class="field center-align">
                <p v-if="feedback">{{ feedback }}</p>
                <button class="btn pink">Add Smoothie</button>
            </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'AddSmoothie',
    data() {
        return {
            title: null,
            another: null,
            ingredients: [],
            feedback: null,
            slug: null
        }
    },
    methods: {
        AddSmoothie: function() {
            if(this.title) {
                this.feedback = null
                // create a slug
                this.slug = slugify(this.title, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                // push data to firestore
                db.collection('smmoothies').add({
                    title: this.title,
                    ingredients: this.ingredients,
                    slug: this.slug
                }).then(() => {
                    this.$router.push({name: 'Index'})
                }).catch(err =>{
                    console.log(err)
                })
            } else {
                this.feedback = 'You must enter a smoothie title'
            }
        },
        AddIng: function() {
            if (this.another) {
                this.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = 'You must enter a value to add ingredient'
            }
        },
        deleteIng: function(ing){
            this.ingredients = this.ingredients.filter(ingredient =>{
                return ingredient != ing
            })
        }
    }
}
</script>


<style>
.add-smoothie{
    margin: 60px;
    padding: 20px;
    max-width: 500px;
}
.add-smoothie h2{
    font-size: 2em;
    margin: 20px auto;
}
.add-smoothie .field{
    margin: 20px auto;
    position: relative;
}
.add-smoothie .delete{
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    font-size: 1.4em;
    cursor: pointer;
}
</style>

