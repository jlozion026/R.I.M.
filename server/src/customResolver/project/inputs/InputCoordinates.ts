import { Field, InputType, Float } from "type-graphql";

@InputType("Coordinates", {
  isAbstract: true
})
export class Coordinates {

  @Field(_type => Float, {
    nullable: false
  })
  lat!: number;

  @Field(_type => Float, {
    nullable: false
  })
  lng!: number;
}
