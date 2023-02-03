

const Genre = () => {
    return(
                <div className="container-fluid px-5 py-4">
                <h2 className="text-bold d-inline" id="section-name-lower">Movies</h2>
                <div className="dropdown d-inline px-5">

                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="action.html">Action</a>
                    <a className="dropdown-item" href="./index.html/horror">Horror</a>
                    <a className="dropdown-item" href="./index.html/comedy">Comedy</a>
                </div>
                <button
                    className="btn text-white dropdown-toggle border border-light"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                >
                Genre</button>

                </div>
                </div>
    )
}
export default Genre;