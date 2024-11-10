import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export class UserMessageController {
  @MessagePattern("send_method")
  receiveMessageWithSendMethod(data) {
    console.log("receive send: ", data);
    return { name: "receiveMessageWithSendMethod" };
  }

  @MessagePattern("emit_method")
  receiveMessageWithEmitMethod(data) {
    console.log("UserMessageController receive emit: ", data);
  }
}
