import { Module } from "@nestjs/common";
import { UserProfileMessageController } from "./user-profile.controller";

@Module({
  controllers: [UserProfileMessageController],
})
export class UserProfileModule {}
