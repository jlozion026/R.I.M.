import { Field, InputType} from "type-graphql";

@InputType("Addresses", {
  isAbstract: true
})
export class Addresses {
  
  @Field(_type => String, {
    nullable: false
  })
  general_address: string;

  @Field(_type => String, {
    nullable: false
  })
  from!: string;

  @Field(_type => String, {
    nullable: false
  })
  to!: string;



}
