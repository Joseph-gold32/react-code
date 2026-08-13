import { Sidebar } from "../Sidebar"
import Button from "../Button";


export const Home = () => {
    const showContact = () => {
        console.log("Show Contact clicked");
    }

    return(
        <div className="sidebar-container">
            <Sidebar />
            <div className="sidebar-content">
                <h1 style={{color:"green"}}>HOME PAGE</h1>
                <Button text={"Click Me"} bg="red" pad="20px 30px" rounded="20px" color="white" click={() => alert("you can click me")} hover={() => console.log('hello')} />
                <Button text={"save"} bg="yellow" color="white" />
                <Button text="Show Contact" bg="blue" color="white" click={showContact} />
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Facilis earum nemo, nihil asperiores 
                    eius sapiente aut reprehenderit in, cum sequi et quaerat magni
                    porro, assumenda culpa commodi nostrum ab! Nulla?</p>
            </div>
        </div>
    )
}
