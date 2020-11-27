import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@tomporiticketstest/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
