import { useState } from "react";
import { utilService } from "../services/util.service"
import { PlaylistList } from "../cmps/PlaylistList";
import YouTube from 'react-youtube';

export function PlayListIndex() {
    const [inputToSearch, setInputToSearch] = useState(null)
    const [results, setResults] = useState(null)
    const [video, setVideo] = useState(null)



    function handleChange({ target }) {
        setInputToSearch(target.value)
    }

    async function getResults(ev) {
        ev.preventDefault()
        const songs = await utilService.getSongInfo(inputToSearch)
        setResults(songs)
    }

    return (
        <>
            <div className="search-bar">
                <form onSubmit={(event) => getResults(event)}>
                    <div className="search-input-container">
                        <span className="search-icon"> {<svg
                            data-encore-id="icon"
                            role="img"
                            aria-hidden="true"
                            className="Svg-sc-ytk21e-0 kPpCsU mOLTJ2mxkzHJj6Y9_na_"
                            height="16"
                            width="18"
                            viewBox="0 0 16 16"
                        >
                            <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
                        </svg>}</span>
                        <input
                            onChange={handleChange}
                            name="txt"
                            type="text"
                            placeholder="Search on Youtube?"
                            className="input-header"
                            autoComplete="off"
                        />
                        <button>Search</button>
                    </div>
                </form>
            </div>
            {!results && <div className="placeholder-img">
                <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91dHViZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>}
            <main className="main-container">
                <div className="results-list-container">

                    {results && <PlaylistList video={video} setVideo={setVideo} results={results} />}
                </div>
                {results && <section className="player">
                    <YouTube videoId={video?.id.videoId} />
                    {video&& <span>currently playing: {video.snippet.title} </span>}
                </section>}
            </main >
        </>

    )
}