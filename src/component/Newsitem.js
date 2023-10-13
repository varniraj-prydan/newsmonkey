import React from 'react'


const Newsitem = (props) =>{
    
        let {title,description,imageUrl,newsurl} = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsurl} target="_blank" className="btn btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
}

export default Newsitem
