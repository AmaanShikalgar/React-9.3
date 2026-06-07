
const style = {borderStyle:"solid", width:200, backgroundColor:"white", borderRadius:10, borderColor: "gray",borderWidth:1,padding:20,margin:10}

export function PostComponent({name, subtitle,time,image,description}){
  return <div style={style}>
    <div style={{display:"flex"}}>
      <img src={image} style={{
        width:30,
        height:30,
        borderRadius:20
      }}/>
      <div style={{fontSize:10, marginLeft:10}}>
        <b>{name}</b>
        <div>{subtitle}</div>
        {time !== undefined && <div style={{display:'flex'}}>
          <div>{time}</div>
          <img src={"https://png.pngtree.com/png-vector/20190326/ourmid/pngtree-vector-clock-icon-png-image_865317.jpg"} style={{width:12,height:12}}/>
        </div>} 
      </div>
    </div> 
    <div style={{fontSize:12}}>
     {description}
    </div>
  </div>
}





// <div style={{display:"flex",justifyContent:"center"}}>
//   <div>
//     <div>
//       <PostComponent
//         name={"Amaan"}
//         subtitle={"20 followers"}
//         time={"2m ago"}
//         image={"amaanPhoto.jpg"}
//         description={"Want to know hot to win big? Check out how these folks won 6000 in bounties."}
//         />
//         <br/>
//     </div>
//     <div>
//         <PostComponent
//         name={"Harkirat"}
//         subtitle={"promoted"}
//         image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
//         description={"How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."}
//         />
//         <br/>
//     </div>
//     <div>
//         <PostComponent
//         name={"Deepak"}
//         subtitle={50}
//         time={"18m ago"}
//         image={"https://imgs.search.brave.com/ZACv93qZO57A2RrexnAjJi9CTpejuyu2aIGeB9-2beA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTk0/OTM2My5qcGc"}
//         description={"Here is the roadmap to become a full-stack developer in 2024."}
//         />
//         <br/>
//     </div>
//   </div>
// </div>