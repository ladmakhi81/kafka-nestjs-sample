import { Module } from "@nestjs/common";
import { UserMessageController } from "./user.controller";

@Module({ controllers: [UserMessageController] })
export class UserModule {}
