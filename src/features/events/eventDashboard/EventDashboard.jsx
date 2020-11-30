import React , {useState} from 'react'
import { Grid } from 'semantic-ui-react'
import EventForm from '../eventForm/EventForm'
import EventList from './EventList'
import {sampleData} from '../../../app/api/sampleData';

//EventDashboard is the parent of EventList 
/**using react hooks one of which is useState */
export default function EventDashboard({formOpen, setFormOpen}){
    //two piece of state for useState (react hooks)
    const [events, setEvents] = useState(sampleData);

    return(
        //passed the properties to the child component(EventList)
        //the properties is the events in teh sampleData,js file
        <Grid>
            <Grid.Column width={10}>
               <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && 
                    <EventForm setFormOpen={setFormOpen}/>
                }
            </Grid.Column>
        </Grid>

    )
}