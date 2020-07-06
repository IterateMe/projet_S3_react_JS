import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

class Calendar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            events: [],
        }

        this.addEvent = this.addEvent.bind(this);
    }

    addEvent(event){
        let newEvents = this.state.events;
        newEvents.push({title: 'ALLO', start: event.date.getDate()});
        this.setState({events: newEvents});
        alert(event.date.toString());
    }

  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events={this.state.events}
        dateClick={this.addEvent}
        eventColor={'#378006'}/>
    )
  }
}

export default Calendar;