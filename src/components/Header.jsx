import ShowCloseButton from "./ShowCloseButton";

const Header = () => {
    return ( 
        <div className="header flex flex-col justify-center items-center">
            <h1>Task Tracker</h1>
            <ShowCloseButton />

        </div>
     );
}
 
export default Header;