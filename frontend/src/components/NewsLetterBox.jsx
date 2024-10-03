

const NewsLetterBox = () => {
    const submitHandler = (event)=>{
        event.preventDefault()

    }
    return (
        <div className="text-center">
            <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
            <p className="text-gray-400 mt-3">Subscribe now and enjoy exclusive offers, early access to sales, and special discounts just for you!</p>
            <form action="" onSubmit={submitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
                <input className=" w-full sm:flex-1 outline-none" type="email" placeholder="Enter your email id" required />
                <button type="submit" className=" bg-black text-white text-xs px-10 py-4 rounded-md">SUBSCRIBE</button>
            </form>
        </div>
    );
};

export default NewsLetterBox;