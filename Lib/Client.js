import sanityClient  from "@sanity/client";
import  ImageUrlBuilder from "@sanity/image-url";


export const client = sanityClient({
    projectId:"94emfk0o",
    dataset:"production",
    apiVersion:"2022-09-04",
    useCdn:true,
    token:"skvIjkmOHyRSKwB0yvo3sWUPDErXLTivSesU9GdrjL5gv1ko8Q0xWzKi9UqGcAHhAgR9XMyr4GeYiXzNEBSwsUumCgwyw3RXkQ2Q3BYieNphwivwJnmnA5PmbKpt4EAAP2LtWBuQWesFFnnbTwR6t1r1984MBr6nxlzaKJThMQfDmNsaxGvC"
    

})
const builder = ImageUrlBuilder(client)
export const urlFor= (sourse)=> builder.image(sourse)