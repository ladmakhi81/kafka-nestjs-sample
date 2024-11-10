import { NestFactory } from "@nestjs/core";
import { KafkaOptions, Transport } from "@nestjs/microservices";
import { UserProfileModule } from "./user-profile.module";

const bootstrap = async () => {
  const kafkaOptions: KafkaOptions = {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ["localhost:9092"],
        clientId: "user-profile",
      },
      consumer: { groupId: "user-profile" },
    },
  };

  const app = await NestFactory.createMicroservice(
    UserProfileModule,
    kafkaOptions
  );

  await app.listen();

  console.log("the user profile service is running");
};

bootstrap();
