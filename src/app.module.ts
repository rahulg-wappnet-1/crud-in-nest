import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import{UsersStore} from './store/users.stores'
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UsersStore] // ---2
  //providers:[{provide:'STORE' , useClass:UsersStore}]  --- 1
  //providers:[{provide:UsersStore , useClass:UsersStore}], --- 2

  //value providers
})
export class AppModule {}
