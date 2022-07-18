import './Product.css'


const Product = ({title}) => {
    const titleHandler = () => {
        console.log(title)
    }
    
    return (
        <div className='product'>
            <div>{title}</div>
            <div className='btn' onClick={titleHandler}>
                <button>
                    Title
                </button>
            </div>
        </div>
    )
}


export default Product