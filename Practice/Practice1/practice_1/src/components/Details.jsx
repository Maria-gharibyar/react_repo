const Details=(props)=>{
    const {Users}=props
    return(
        <>
            {
                Users.map((item,index) => {
                    return(<div>
                        <h2>{item.Username}</h2>
                        <p>{item.Email}</p>
                    </div>)
                })
            }
        </>
    )

}
export default Details