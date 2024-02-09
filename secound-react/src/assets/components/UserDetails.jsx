const UserDetails =(props)=>{
    console.log(props);
    return (
        <>
        <h2>Username: {props.username}</h2>
        <p>Age:{props.age}</p>
        <p>Gender:{props.gender}</p>
        </>
    )
}
export default UserDetails;