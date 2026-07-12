import FeatureCard from "./FeatureCard";

export default function Features(){

const features=[

"Resume Analysis",

"Career Prediction",

"AI Chatbot",

"Company Roadmap",

"Mock Interview",

"Progress Tracker"

]

return(

<section className="py-20">

<h1 className="text-4xl text-center mb-12">

Features

</h1>

<div className="grid md:grid-cols-3 gap-8 px-20">

{features.map((item)=>

<FeatureCard

key={item}

title={item}

/>

)}

</div>

</section>

)

}