function Filter(props) {
    let setCategory = props.setCategory;

    return (
        <div>
            {props.data.map((data) => (
                <button 
                    key={data.id}
                    onClick={() => setCategory(data.title)} // Sets the category name
                >
                    {data.title}
                </button>
            ))}
        </div>
    )
}

export default Filter;