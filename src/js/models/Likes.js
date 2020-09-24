export default class Likes {
    constructor(){
        this.likes = [];
    }

    addLike(id,title,author,img){
        const like ={id,title,author,img};
        this.likes.push(like);

        //add Liked items to the Local Storage
        this.persistData();

        return like;
    }
    deleteLike(id){
      // getting the index of the elements location in the array
      const index = this.likes.findIndex((el) => el.id === id);
      this.likes.splice(index, 1);

      //Delete Items also from Local Stroage
      this.persistData();
    }

    isLiked(id){
        return this.likes.findIndex(el=>el.id=== id) !== -1;
    }

    getNumLikes(){
        return this.likes.length;
    }

    //adding presisting items in the local storage
    persistData(){
        localStorage.setItem('likes',JSON.stringify(this.likes));
    }

    readStorage(){
        const storage = JSON.parse(localStorage.getItem('likes'));
        if(storage){
            this.likes = storage;
        }
    }
}

