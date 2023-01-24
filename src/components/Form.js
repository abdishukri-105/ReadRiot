const Form = () => {
    return ( 
    <form className="w-100">
        <div class="form-group mb-2">
            <label for="bookName">Book Name</label>
            <input type="text" class="form-control" id="bookName" placeholder="Enter book name"/>
        </div>
        <div class="form-group mb-2">
            <label for="author">Author</label>
            <input type="text" class="form-control" id="author" placeholder="Enter author name"/>
        </div>
        <div class="form-group  mb-4">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" rows="2"></textarea>
        </div>
        <button type="submit" class="btn btn-outline-primary block">add book to shelf</button>
    </form>

     );
}
 
export default Form;