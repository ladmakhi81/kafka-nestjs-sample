import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class UserProfileMessageController {
  @MessagePattern("emit_method")
  receiveMessageWithEmitMethod(data) {
    console.log("UserProfileMessageController receive emit: ", data);
  }
}
