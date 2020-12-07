import { Message } from "node-nats-streaming";
import {
  Listener,
  OrderCreatedEvent,
  Subjects,
} from "@tomporiticketstest/common";
import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/order";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const { id, version, status, userId } = data;
    const order = Order.build({
      id,
      version,
      status,
      userId,
      price: data.ticket.price,
    });
    await order.save();

    msg.ack();
  }
}
