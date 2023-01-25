import { IsNotEmpty } from "class-validator";
import { Field, InputType} from "type-graphql";

@InputType("Addresses", {
  isAbstract: true
})
export class Addresses {
  
  @IsNotEmpty({message: "general address must not be empty"})
  @Field(_type => String, {
    nullable: false
  })
  general_address: string;

  @IsNotEmpty({message: "from must not be empty"})
  @Field(_type => String, {
    nullable: false
  })
  from!: string;

  @IsNotEmpty({message: "to must not be empty"})
  @Field(_type => String, {
    nullable: false
  })
  to!: string;



}
