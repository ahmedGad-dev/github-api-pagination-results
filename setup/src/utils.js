const paginate = (followers) => {

    const itemsPerPage = 12
    const numberOfPages = Math.ceil(followers.length / itemsPerPage)    //Math.ceil will round up our result to next higher integer so that its a single a value ex: 11.111111 will be 12
  
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {   //Array.From creates a new, shallow-copied Array instance from an array. 
      const start = index * itemsPerPage
      return followers.slice(start, start + itemsPerPage)   //slice takes in a starting point of index and a value of how many items it shall cut from an array
    })
  
    return newFollowers
}

export default paginate
