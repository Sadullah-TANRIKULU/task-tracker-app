import ShowCloseButton from "./ShowCloseButton";

const Header = () => {
    return ( 
        <div className="header flex flex-col justify-center items-center gap-4 w-80 pt-4">
            <h1 className="font-bold text-2xl" >Task Tracker</h1>
            <ShowCloseButton />

        </div>
     );
}
 
export default Header;