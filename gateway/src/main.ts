import { NestFactory } from "@nestjs/core";
import { GatewayModule } from "./gateway.module";
import { ConfigService } from "@nestjs/config";
import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const configureSwagger = async (app: INestApplication) => {
  const docOption = new DocumentBuilder()
    .setTitle("Learning Kafka in nestjs")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, docOption);
  await SwaggerModule.setup("/document", app, document);
};

const bootstrap = async () => {
  const app = await NestFactory.create(GatewayModule);
  const configService = await app.get(ConfigService);
  const port = configService.get<number>("APP_PORT");

  configureSwagger(app);

  await app.listen(port, () => {
    console.log(`the gateway service running at port: ${port}`);
  });
};

bootstrap();
