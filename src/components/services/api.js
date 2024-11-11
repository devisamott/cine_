const API_URL = [
    { id: 1, name:"Kung Fu Panda 4",rating: 30,  category: 'Action', img: 'https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2018/01/cute-3106473_640.jpg?strip=all&lossy=1&ssl=1', description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 2, name:"Kung Fu Panda 4",rating: 31,  category: 'Adventure', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuJxWY8VxagiCJW-lSCR6H_xt-wExTpKbK6wdmamBb20o8rqosJzyMBvExmFd1FjAVz0&usqp=CAU', description:"Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 3, name:"Kung Fu Panda 4",rating: 32,   category: 'Animation', img: 'https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2018/01/cute-3106473_640.jpg?strip=all&lossy=1&ssl=1',description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 4, name:"Kung Fu Panda 4",rating: 33,  category: 'Comedy',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuJxWY8VxagiCJW-lSCR6H_xt-wExTpKbK6wdmamBb20o8rqosJzyMBvExmFd1FjAVz0&usqp=CAU' , description:"Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 5, name:"Kung Fu Panda 4",rating: 34,  category: 'Crime',  img: 'https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2018/01/cute-3106473_640.jpg?strip=all&lossy=1&ssl=1',description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 6, name:"Kung Fu Panda 4",rating: 35,  category: 'Documentary',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuJxWY8VxagiCJW-lSCR6H_xt-wExTpKbK6wdmamBb20o8rqosJzyMBvExmFd1FjAVz0&usqp=CAU' , description:"Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 7, name:"Kung Fu Panda 4",rating: 90,  category: 'Drama',  img: 'https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2018/01/cute-3106473_640.jpg?strip=all&lossy=1&ssl=1',description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 8, name:"Kung Fu Panda 4",rating: 37,  category: 'Family',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuJxWY8VxagiCJW-lSCR6H_xt-wExTpKbK6wdmamBb20o8rqosJzyMBvExmFd1FjAVz0&usqp=CAU' , description:"Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 9, name:"Kung Fu Panda 4",rating: 38,  category: 'Action', img: 'https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2018/01/cute-3106473_640.jpg?strip=all&lossy=1&ssl=1' ,description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 10, name:"Kung Fu Panda 4",rating: 39,  category: 'Adventure',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuJxWY8VxagiCJW-lSCR6H_xt-wExTpKbK6wdmamBb20o8rqosJzyMBvExmFd1FjAVz0&usqp=CAU' , description:"Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 11, name:"Kung Fu Panda 4",rating: 40,  category: 'Animation',  img: 'https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2018/01/cute-3106473_640.jpg?strip=all&lossy=1&ssl=1',description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 12, name:"Kung Fu Panda 4",rating: 90,  category: 'Comedy',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuJxWY8VxagiCJW-lSCR6H_xt-wExTpKbK6wdmamBb20o8rqosJzyMBvExmFd1FjAVz0&usqp=CAU' , description:"Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 13, name:"Kung Fu Panda 4",rating: 42,  category: 'Crime', img: 'https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2018/01/cute-3106473_640.jpg?strip=all&lossy=1&ssl=1' ,description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 14, name:"Kung Fu Panda 4",rating: 43,  category: 'Documentary',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuJxWY8VxagiCJW-lSCR6H_xt-wExTpKbK6wdmamBb20o8rqosJzyMBvExmFd1FjAVz0&usqp=CAU', description:"Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨" },
    { id: 15, name:"Kung Fu Panda 4",rating: 44,  category: 'Drama', img: 'https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2018/01/cute-3106473_640.jpg?strip=all&lossy=1&ssl=1' ,description: "Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"},
    { id: 16, name:"Kung Fu Panda 4",rating: 45,  category: 'Family',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuJxWY8VxagiCJW-lSCR6H_xt-wExTpKbK6wdmamBb20o8rqosJzyMBvExmFd1FjAVz0&usqp=CAU' , description:"Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨"}
  ];
  
  export const getProductos = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(API_URL);
      }, 500);
    });
  };
  
// export const  getProductos =  async () => {
//     try{
//         const response = await fetch(API_URL);
//         if(!response.ok) {
//             throw new Error('Network response was not ok')
//         }
//         const data  = await response.json()
//         return data;
//     }catch (err){
//         console.error('Error fetching', err);
//         throw err;
//     }
// }