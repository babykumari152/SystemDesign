
class AirLines{
    name;
    code;
}
class Flight{
    name;
    no;
    airline;
    seats;

}

class FlightSchedule{
     duration;
     departure;
     gate;
     arrival;

}
class Airport{
    name;
    code;
    address;
    terminals;
    flight;
}

class Seats{
    no;
    class;
}

class Reservation{
    no;
    FlightSchedule;
    seat;
    status;
    date;
}

