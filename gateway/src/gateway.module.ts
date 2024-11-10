import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { GatewayController } from "./gateway.controller";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register({
      clients: [
        {
          name: "USER_SERVICE_TOKEN",
          transport: Transport.KAFKA,
          options: {
            client: { brokers: ["localhost:9092"], clientId: "user-service" },
            consumer: { groupId: "user-consumer-1" },
          },
        },
        {
          name: "USER_PROFILE_TOKEN",
          transport: Transport.KAFKA,
          options: {
            client: {
              brokers: ["localhost:9092"],
              clientId: "user-profile",
            },
            consumer: { groupId: "user-profile" },
          },
        },
      ],
    }),
  ],
  controllers: [GatewayController],
})
export class GatewayModule {}
