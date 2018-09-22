<template>
    <div v-if="smoothie" class="edit-smoothie container">
        <h2>Edit {{ smoothie.title }} smoothie</h2>
        <form @submit.prevent="EditSmoothie">
            <div class="field title">
                <label for="title">Smoothie Title:</label>
                <input type="text" name="title" v-model="smoothie.title">
            </div>
            <div class="field" v-for="(ingredient,idx) in smoothie.ingredients" :key="idx">
                <label for="ingredient">Ingredients:</label>
                <input type="text" name="ingredient" v-model="smoothie.ingredients[idx]">
                <i class="material-icons delete" @click="deleteIng(ingredient)">delete</i>
            </div>
            <div class="filed add-ingredient">
                <label for="add-ingredient">Add an ingredient</label>
                <input type="text" name="add-ingredient" @keydown.tab.prevent="AddIng" v-model="another">
            </div>
            <div class="field center-align">
                <p v-if="feedback">{{ feedback }}</p>
                <button class="btn pink">Update Smoothie</button>
            </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'EditSmoothie',
    data() {
        return {
            smoothie: null,
            another: null,
            feedback: null
        }
    },
    created() {
        // let ref = db.collection('smoothie').doc(id) retrieve by doc id
        let ref = db.collection('soomthies').where('slug', '==', this.$route.params.smoothie_slug)
        ref.get().then(
            snapshot => {
                snapshot.forEach(doc => {
                    this.smoothie = doc.data()
                    this.smoothie.id = doc.id
                });
            }
        )
        // this.smoothie = {title: 'Ninja Brew', slug: 'ninjja-brew', ingredients: ['bananas', 'coffee', 'milk']}
    },
    methods: {
        AddIng: function() {
            if (this.another) {
                this.smoothie.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = 'You must enter a value to add ingredient'
            }
        },
        deleteIng: function(ing) {
            this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient =>{
                return ingredient != ing
            })
        },
        EditSmoothie: function() {
            if(this.smoothie.title) {
                this.feedback = null
                // create a slug
                this.smoothie.slug = slugify(this.smoothie.title, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                // push data to firestore
                db.collection('soomthies').doc(this.smoothie.id).update({
                    title: this.smoothie.title,
                    ingredients: this.smoothie.ingredients,
                    slug: this.smoothie.slug
                }).then(() => {
                    this.$router.push({name: 'Index'})
                }).catch(err =>{
                    console.log(err)
                })
            } else {
                this.feedback = 'You must enter a smoothie title'
            }
        }
    }
}
</script>

<style>
.edit-smoothie{
    margin: 60px;
    padding: 20px;
    max-width: 500px;
}
.edit-smoothie h2{
    font-size: 2em;
    margin: 20px auto;
}
.edit-smoothie .field{
    margin: 20px auto;
    position: relative;
}
.edit-smoothie .delete{
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    font-size: 1.4em;
    cursor: pointer;
}
</style>


