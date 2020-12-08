import {
  Publisher,
  Subjects,
  PaymentCreatedEvent,
} from "@tomporiticketstest/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
