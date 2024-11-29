import PageNotFound  from "../assets/404.png"

import "./Error.css"
const Error=()=>
{
    return(
        <>
            <div className="PageNotFound">
                <img src={PageNotFound} alt="SORRY PAGE NOT FOUND" />
            </div>

        </>
    )
}

export default Error