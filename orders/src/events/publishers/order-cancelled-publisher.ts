import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@tomporiticketstest/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
