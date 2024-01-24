
export function Card({ props }) {
    return <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <h3>Interests</h3>
        <ul>{props.interests.map((interest) => {
            <li key={interest}>{interest}</li>
        })}</ul>
        <div>
            <a href={props.linkedin}>Linkedin</a> <br />
            <a href={props.twitter}>Twitter</a> <br />
            <a href={props.otherSocialMedia}>{props.otherSocialMedia.label}</a>
        </div>
    </div>
}