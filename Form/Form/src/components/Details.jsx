const Details=(props)=>{
    const {Users}=props

    return(
        <>
        
            {
                Users.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h2>{item.username}</h2>
                            <h3>{item.lastname}</h3>
                            <h2>{item.email}</h2>
                            <h3>{item.password}</h3>
                            <h2>{item.confirmpass}</h2>
                         
                        </div>
                    )
                })
            }
        
        </>
    )
}
export default Details