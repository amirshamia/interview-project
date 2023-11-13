import { PlaylistPreview } from "./PlaylistPreview";

export function PlaylistList({video,results,setVideo}) {

return(
    <ul className="results-list">  
{    results.map(result=> <li key={result.id.videoId}>{<PlaylistPreview  video={video} setVideo={setVideo} result={result}/>}</li> )}
    </ul>
    )
}