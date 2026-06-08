import {useEffect, useState} from 'react';
import {PostComponent} from "./post";

function App(){
    const [count,setCount] = useState(1);
  
    function increaseCount(){
      setCount(currentValue => currentValue+1)
    }

    useEffect(function(){
    setInterval(increaseCount,1000);
    }, []) // this effect will run on mount

    useEffect(function(){
    console.log("the current count is " + count);
    }, [count]) // this effect will run on mount

    return <div>
      {count}
    </div>
}

export default App;
  

  




















// function App(){

//   const [posts,setPosts] = useState([]);

//     const postComponents = posts.map(post => <PostComponent
//       name={post.name}
//       subtitle={post.subtitle}
//       time={post.time}
//       image={post.image}
//       description={post.description}
//     />)

//   function addPost(){
  //     setPosts([...posts,{
    //       name:"Deepak",
//       subtitle:"50 followers",
//       time:"18m ago",
//       image:"https://imgs.search.brave.com/ZACv93qZO57A2RrexnAjJi9CTpejuyu2aIGeB9-2beA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTk0/OTM2My5qcGc",
//       description:"Here is the roadmap to become a full-stack developer in 2024."
//     }])
//   }

//   return(
//   <div style = {{background:"#dfe6e9", height:"100vh"}}>
//     <button onClick={addPost}>Add post</button>
//     <div style={{display:"flex",justifyContent:"center"}}>
//       <div>
//         {postComponents}
//       </div>
//     </div>
//   </div>
//   )
// }

  //   const [count,setCount] = useState(1);
  
  //   function increaseCount(){
  //     setCount(count+1);
  //   }
  
  //   return (
  //   <div>
  //     <div style={{display:"flex"}}>
  //       <div style={{
  //           background: "red",
  //           borderRadius: 20,
  //           width: 30,
  //           height: 30,
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           color: "white"
  //       }}>
  //         {count}
  //       </div>
  //     </div>
  //    <img style={{cursor:"pointer"}} src={"bell-860_32.png"} width={40} />
  //    <button onClick={increaseCount}>Increase the Count</button>
  //   </div>
  //   )
  // }
