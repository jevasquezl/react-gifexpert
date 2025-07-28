

export const GifItem = ({ gifs }) => {
    return (
            <div className="card-grid">
                {
                    gifs.map( gif => (
                        <div key={gif.id} className="card">
                            <img src={gif.url} alt={gif.title} />
                            <p>{gif.title}</p>
                        </div>
                    ))
                }
            </div>
    )
}
