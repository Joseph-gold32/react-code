const Interpolation = () => {
    // const name = "John"
    // const age = 55
    // const product = {
        title: "macbook",
        description: "The macbook have m2 chip",
        price: 5000,
        available: false
    }
    const user = [
        {
            name: 'Kiki',
            age: 20,
            gender: 'male'
        },
        {
            name: 'AYOMIDE',
            age: 14,
            gender: 'unisex'
        },
        {
            name: 'Bolanle',
            age: 40,
            gender: 'male'
        },

        {
            name: 'BoLa',
            occupation:"sotware engineering",
            age: 17,
            gender: 'female'
        },
        {
            name: 'AUNTY BROCOLLI',
            occupation:"Compuet scientist",
            age: 89,
            gender: 'female'
        },
        {
            name: 'Kunle',
            age: 18,
            gender: 'male'
        },

    ]
    // ruturn (
    //     <div>
    //         <h1>AGE OF STUDENT</h1>
    //         <P> My nae is {name}</P>

    //     </div>
    // )



    // return (

    //     <div>
    //         <h1>Interpolication</h1>
    //         <p>my name is {name}</p>
    //         <p>{name} age is {age}</p>

    //         <h1>products</h1>
    //         <ul>


    //         </ul>
    






    //     </div>
    // )



    return (
        <ul>
            <h1 style={{ color: 'green', fontSize: ' 50px' }}>USERS INFORMATION STATUS</h1>
            

            {user.map((user, i) => (
                <li key={i}>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                    <p>Gender: {user.gender}</p>
                    {user.age < 18 ? (
                        <p style={{color: 'blueviolet'}}> THIS USRER IS UNDERAGE</p>
                    ) : (
                        <p style={{color: 'green'}}>THIS USER IS MATURED
                        </p>
                    )}

                </li>

            ))}
        </ul>
    )


}
export default Interpolation