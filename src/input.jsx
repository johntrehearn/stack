function Input({handleInput, handleDelete, inputType}) {
    return (
        <>
        <input type='text' placeholder='Please enter item you want added to array' ref={inputType}/>
        <div>

        <button onClick={handleInput}>Add</button>
        <button onClick={handleDelete}>Remove</button>
       
        </div>
        </>
    )
}

export default Input;