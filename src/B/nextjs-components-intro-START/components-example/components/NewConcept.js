// My component is expecting an object with a property of .concept
// and an optional property of .punctuation
export default function NewConcept(props) {
    let {punctuation, concept} = props; // deconstruct
    if(!punctuation) { punctuation = '.' }
    return (<p>In this class we'll learn about {concept}{punctuation}</p>);
}