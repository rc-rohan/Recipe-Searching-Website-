import uniqid from 'uniqid';
// returns uique id for every element

export default class List {
    constructor(){
        this.items= [];
    }
    addItem(count,unit,ingredient){
        const item ={
            id:uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;

    }

    deleteItem(id){
        // getting the index of the elements location in the array
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index,1);
    }

    updateCount(id,newCount){
        this.items.find(el=>el.id === id).count = newCount;
    }
}