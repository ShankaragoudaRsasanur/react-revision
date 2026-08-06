function Button(){
    function addNote(){
        alert("notes added sucessfully!");
    }
    return(
        <button onClick={addNote}>add note</button>
    );
}
export default Button;
