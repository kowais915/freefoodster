// src="/images/meal.jpeg"

const NewCard = () => {
    return ( 
        <span className="countdown font-mono text-2xl">
        <span style={{"--value":10}}></span>h
        <span style={{"--value":24}}></span>m
        <span style={{"--value":28}}></span>s
      </span>
       
     );
}
 
export default NewCard;
