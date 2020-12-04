import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@tomporiticketstest/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
