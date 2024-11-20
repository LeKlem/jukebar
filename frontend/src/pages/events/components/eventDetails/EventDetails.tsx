import { useLoaderData } from "react-router-dom"
import { EventDTO } from "../../../../models/EventModels";
import { DrinkDTO } from "../../../../models/DrinkModels";
import DrinkPairForm from "./DrinkPairForm";
import { DrinkPairDTO } from "../../../../models/DrinkPairModels";

interface EventLoaderData {
    event: EventDTO,
    drinks: DrinkDTO[],
    drinkPairs: DrinkPairDTO[],
}

export default function EventDetails() {
    const data = useLoaderData() as EventLoaderData;

    const event = data.event;
    const date: Date = new Date(event.date);
    
    return (
        <>
            <h1>Evènement du {date.toLocaleDateString()}</h1>
            <DrinkPairForm drinkPairs={data.drinkPairs} drinks={data.drinks} eventId={event.id}/>
        </>
    )
}