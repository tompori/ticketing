import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@tomporiticketstest/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
