import ShowCloseButton from "./ShowCloseButton";

const Header = (props) => {
    return ( 
        <div className="header flex flex-col justify-center items-center gap-4 w-80 pt-4">
            <h1 className="font-bold text-2xl text-white" >Task Tracker</h1>
            <ShowCloseButton props = {props}/>

        </div>
     );
}
 
export default Header;