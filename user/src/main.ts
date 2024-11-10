import { NestFactory } from "@nestjs/core";
import { UserModule } from "./user.module";
import { KafkaOptions, Transport } from "@nestjs/microservices";

const bootstrap = async () => {
  const kafkaOptions: KafkaOptions = {
    options: {
      client: { clientId: "user-service", brokers: ["localhost:9092"] },
    },
    transport: Transport.KAFKA,
  };

  const app = await NestFactory.createMicroservice(UserModule, kafkaOptions);

  await app.listen();

  console.log("the user service is running");
};

bootstrap();
