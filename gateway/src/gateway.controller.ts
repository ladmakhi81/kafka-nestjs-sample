import { Controller, Inject, OnModuleInit, Post } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { ApiTags } from "@nestjs/swagger";

@Controller("/api/gateways")
@ApiTags("gateway")
export class GatewayController implements OnModuleInit {
  constructor(
    @Inject("USER_SERVICE_TOKEN")
    private readonly userServiceClient: ClientKafka
  ) {}

  async onModuleInit() {
    this.userServiceClient.subscribeToResponseOf("send_method");
    await this.userServiceClient.connect();
  }

  @Post("send")
  async sendMessageWithSendMethod() {
    console.log(
      "SEND: ",
      await new Promise((resolve) =>
        this.userServiceClient
          .send("send_method", {
            name: "hosein ladmakhi nejad",
          })
          .subscribe(resolve)
      )
    );
  }

  @Post("emit")
  sendMessageWithEmitMethod() {
    console.log("called me");
    this.userServiceClient.emit("emit_method", {
      name: "nima ladmakhi nejad",
    });
  }
}
