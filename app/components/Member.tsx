// define Props (incoming values) this component requires
type MemberProps = {
    name: string;
    title: string;
}

export default function Member({name, title}: MemberProps){
    return (
        <article>
            <h5>{name}</h5>
            <p>{title}</p>
        </article>
    )
}