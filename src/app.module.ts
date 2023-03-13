import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import{UsersStore} from './store/users.stores'
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UsersStore,
  
      //value providers
      {provide:'DATABASE_NAME',useValue:'USER_DB'},
      {provide:'MAIL',useValue:['rahhul@gmail.com', 'gupta@gmail.com']},
      {provide:'ENV_CONFIG',
      useValue:{
        type:'DEV',
        version:0.11
      }}
  ] // ---2
  //providers:[{provide:'STORE' , useClass:UsersStore}]  --- 1
  //providers:[{provide:UsersStore , useClass:UsersStore}], --- 2


})
export class AppModule {}
