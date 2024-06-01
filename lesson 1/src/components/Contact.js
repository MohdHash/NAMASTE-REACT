const Contact = ()=>{
    return(
        <div>
            <h1>Any Queries ❓</h1>
            {/* <h2>Please feel free to contact us at 📞 8667511692 </h2> */}
            <form>
                <input type="text" className="p-2 m-2 border border-black" placeholder="name"/>
                <input type="text" className="p-2 m-2 border border-black" placeholder="message"/>
                <button className="p-2 m-2 border border-black bg-slate-500 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;